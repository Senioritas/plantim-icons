// Rasterize SVGs to alpha masks via one shared Playwright Chromium page.
// Used only by pass/fail gates and contact sheets — never writes committed files,
// so browser version drift cannot affect generated artifacts.

let browser, page;

export async function openRaster() {
  const { chromium } = await import("playwright");
  browser = await chromium.launch();
  page = await browser.newPage({ viewport: { width: 640, height: 640 } });
}

export async function closeRaster() {
  await browser?.close();
  browser = page = undefined;
}

/** Render an SVG string at size x size; return Uint8Array of alpha bytes (row-major). */
export async function rasterAlpha(svg, size) {
  if (!page) throw new Error("openRaster() first");
  const b64 = await page.evaluate(
    async ({ svg, size }) => {
      const img = new Image();
      const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = () => reject(new Error("svg decode failed"));
        img.src = url;
      });
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = size;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, size, size);
      URL.revokeObjectURL(url);
      const data = ctx.getImageData(0, 0, size, size).data;
      const alpha = new Uint8Array(size * size);
      for (let i = 0; i < alpha.length; i++) alpha[i] = data[i * 4 + 3];
      let bin = "";
      const chunk = 0x8000;
      for (let i = 0; i < alpha.length; i += chunk) {
        bin += String.fromCharCode(...alpha.subarray(i, i + chunk));
      }
      return btoa(bin);
    },
    { svg, size },
  );
  return Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
}

/** Threshold alpha -> binary mask. */
export function toMask(alpha, threshold = 16) {
  const m = new Uint8Array(alpha.length);
  for (let i = 0; i < alpha.length; i++) m[i] = alpha[i] > threshold ? 1 : 0;
  return m;
}

/** Scanline flood fill of the zero-region reachable from the border. Returns visited mask. */
export function floodFromBorder(mask, size) {
  const visited = new Uint8Array(mask.length);
  const stack = [];
  for (let x = 0; x < size; x++) {
    stack.push(x, (size - 1) * size + x);
  }
  for (let y = 0; y < size; y++) {
    stack.push(y * size, y * size + size - 1);
  }
  while (stack.length) {
    const i = stack.pop();
    if (visited[i] || mask[i]) continue;
    visited[i] = 1;
    const x = i % size;
    if (x > 0) stack.push(i - 1);
    if (x < size - 1) stack.push(i + 1);
    if (i >= size) stack.push(i - size);
    if (i < mask.length - size) stack.push(i + size);
  }
  return visited;
}

/** Connected components (4-neighbour) of {mask==0 && !background}; returns [{area, cx, cy}]. */
export function enclosedIslands(mask, size, minArea = 20) {
  const bg = floodFromBorder(mask, size);
  const seen = new Uint8Array(mask.length);
  const islands = [];
  for (let start = 0; start < mask.length; start++) {
    if (mask[start] || bg[start] || seen[start]) continue;
    let area = 0,
      sx = 0,
      sy = 0;
    const stack = [start];
    seen[start] = 1;
    while (stack.length) {
      const i = stack.pop();
      area += 1;
      sx += i % size;
      sy += Math.floor(i / size);
      const x = i % size;
      const neighbors = [];
      if (x > 0) neighbors.push(i - 1);
      if (x < size - 1) neighbors.push(i + 1);
      if (i >= size) neighbors.push(i - size);
      if (i < mask.length - size) neighbors.push(i + size);
      for (const n of neighbors) {
        if (!mask[n] && !bg[n] && !seen[n]) {
          seen[n] = 1;
          stack.push(n);
        }
      }
    }
    if (area >= minArea) islands.push({ area, cx: sx / area, cy: sy / area });
  }
  return islands;
}

/** Filled silhouette = everything that is not background. */
export function silhouette(mask, size) {
  const bg = floodFromBorder(mask, size);
  const s = new Uint8Array(mask.length);
  for (let i = 0; i < mask.length; i++) s[i] = bg[i] ? 0 : 1;
  return s;
}

export function iou(a, b) {
  let inter = 0,
    union = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] & b[i]) inter++;
    if (a[i] | b[i]) union++;
  }
  return union === 0 ? 1 : inter / union;
}
