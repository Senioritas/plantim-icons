// Render contact-sheet PNGs for visual icon inspection (v3 audit + v4 craft loop).
// Sheets are orchestrator working artifacts: written to reports/v4-sheets/ (gitignored),
// never committed, never inputs to generation.
//
// Usage:
//   node design-tokens/bin/render-v4-sheets.mjs v3 [category ...]
//   node design-tokens/bin/render-v4-sheets.mjs v4 [category ...]
//
// Each sheet shows, per icon: the four styles rendered large (crisp vector at 128px,
// where stroke defects, tangent collisions and solid-variant gaps are visible), the
// outline at true 24px and 16px (small-size legibility), and solid + multicolor on a
// dark background. Screenshots are taken at deviceScaleFactor 2.

import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const outRoot = path.join(root, "reports/v4-sheets");
const PER_PAGE = 12;

const SETS = {
  v3: {
    dir: path.join(root, "design-tokens/icons/v3"),
    manifest: path.join(root, "design-tokens/icons/v3/index.v3.json"),
    styles: ["outlined", "solid", "colored", "multicolor"],
  },
  v4: {
    dir: path.join(root, "design-tokens/icons/v4"),
    manifest: path.join(root, "design-tokens/icons/v4/index.v4.json"),
    styles: ["outline", "solid", "duotone", "multicolor"],
  },
};

const setName = process.argv[2];
const onlyCategories = process.argv.slice(3);
const tabbarMode = setName === "v4-tabbar";
if (!SETS[setName] && !tabbarMode) {
  console.error("Usage: node design-tokens/bin/render-v4-sheets.mjs <v3|v4|v4-tabbar> [category ...]");
  process.exit(2);
}
const set = SETS[tabbarMode ? "v4" : setName];

const manifest = JSON.parse(fs.readFileSync(set.manifest, "utf8"));
const icons = Array.isArray(manifest.icons) ? manifest.icons : Object.values(manifest.icons);

const byCategory = new Map();
for (const icon of icons) {
  if (onlyCategories.length && !onlyCategories.includes(icon.category)) continue;
  if (!byCategory.has(icon.category)) byCategory.set(icon.category, []);
  byCategory.get(icon.category).push(icon);
}

function svgData(relPath) {
  const file = path.join(set.dir, relPath);
  const svg = fs.readFileSync(file, "utf8");
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

/** Inline SVG at a display size so currentColor inherits the CSS color. */
function svgInline(relPath, displaySize) {
  const file = path.join(set.dir, relPath);
  return fs
    .readFileSync(file, "utf8")
    .replace(/width="\d+"/, `width="${displaySize}"`)
    .replace(/height="\d+"/, `height="${displaySize}"`)
    .replace(/\n/g, "");
}

function fileFor(icon, style, size) {
  const entry = icon.files?.[style];
  if (typeof entry === "string") return entry; // v3 manifest: one file per style
  if (entry && entry[size]) return entry[size]; // v4 manifest: per-size files
  return `svg/${style}/${icon.id}@${size}.svg`;
}

function iconRow(icon) {
  const cells = set.styles
    .map((style) => {
      const src = svgData(fileFor(icon, style, 24));
      return `<figure class="cell light"><img src="${src}" width="128" height="128" alt=""><figcaption>${style}</figcaption></figure>`;
    })
    .join("");
  if (setName === "v4") {
    const bigCells = set.styles
      .map(
        (style) =>
          `<figure class="cell light ink">${svgInline(fileFor(icon, style, 24), 128)}<figcaption>${style}</figcaption></figure>`,
      )
      .join("");
    const ramp = [16, 20, 24, 32, 48, 72].map((s) => svgInline(fileFor(icon, "outline", s), s)).join("");
    const rampDark = [16, 20, 24].map((s) => svgInline(fileFor(icon, "solid", s), s)).join("");
    return `<div class="row">
    <div class="label"><code>${icon.id}</code><br><small>${icon.tier ?? ""} · ${icon.verdict ?? ""}</small></div>
    ${bigCells}
    <figure class="cell light ink ramp">${ramp}<figcaption>16→72</figcaption></figure>
    <figure class="cell dark paper">${["solid", "multicolor"].map((v) => svgInline(fileFor(icon, v, 24), 96)).join("")}<figcaption>dark 24</figcaption></figure>
    <figure class="cell dark paper ramp">${rampDark}<figcaption>16-24</figcaption></figure>
  </div>`;
  }
  return `<div class="row">
    <div class="label"><code>${icon.id}</code></div>
    ${cells}
    <figure class="cell light small"><img src="${svgData(fileFor(icon, set.styles[0], 24))}" width="24" height="24" alt=""><img src="${svgData(fileFor(icon, set.styles[0], 24))}" width="16" height="16" alt=""><figcaption>24 / 16</figcaption></figure>
    <figure class="cell dark"><img src="${svgData(fileFor(icon, "solid", 24))}" width="128" height="128" alt=""><figcaption>solid·dark</figcaption></figure>
    <figure class="cell dark"><img src="${svgData(fileFor(icon, "multicolor", 24))}" width="128" height="128" alt=""><figcaption>multi·dark</figcaption></figure>
  </div>`;
}

// P0 tab-bar mock: iOS tab bar + Material 3 bottom nav, light/dark, active/inactive.
function tabbarHtml(p0Icons) {
  const iosItem = (icon, active, dark) => {
    const color = active ? (dark ? "#5EC269" : "#2E7D32") : dark ? "#8E8E93" : "#999DA3";
    const variant = active ? "solid" : "outline";
    return `<div class="ios-item" style="color:${color}">${svgInline(fileFor(icon, variant, 24), 25)}<span>${icon.label ?? icon.id.split(".").pop()}</span></div>`;
  };
  const m3Item = (icon, active, dark) => {
    const pill = active ? `<span class="pill ${dark ? "pill-dark" : ""}"></span>` : "";
    const variant = active ? "solid" : "outline";
    const iconColor = active ? (dark ? "#A6E3A8" : "#1B5E20") : dark ? "#C4C7CC" : "#444748";
    return `<div class="m3-item">${pill}<span class="m3-icon" style="color:${iconColor}">${svgInline(fileFor(icon, variant, 24), 24)}</span><span class="m3-label">${icon.label ?? icon.id.split(".").pop()}</span></div>`;
  };
  const bar = (cls, items) => `<div class="${cls}">${items}</div>`;
  const rows = [];
  for (const dark of [false, true]) {
    for (let activeIdx = 0; activeIdx < Math.min(p0Icons.length, 5); activeIdx++) {
      if (activeIdx > 1 && activeIdx < p0Icons.length - 1 && activeIdx !== 2) continue;
      const five = p0Icons.slice(0, 5);
      rows.push(
        `<div class="barrow ${dark ? "dark-bg" : "light-bg"}">` +
          bar(`iosbar ${dark ? "iosbar-dark" : ""}`, five.map((ic, i) => iosItem(ic, i === activeIdx, dark)).join("")) +
          bar(`m3bar ${dark ? "m3bar-dark" : ""}`, five.map((ic, i) => m3Item(ic, i === activeIdx, dark)).join("")) +
          `</div>`,
      );
    }
  }
  const second = p0Icons.slice(5);
  if (second.length) {
    for (const dark of [false, true]) {
      const pad = second.concat(p0Icons.slice(0, 5 - second.length));
      rows.push(
        `<div class="barrow ${dark ? "dark-bg" : "light-bg"}">` +
          bar(`iosbar ${dark ? "iosbar-dark" : ""}`, pad.map((ic, i) => iosItem(ic, i === 0, dark)).join("")) +
          bar(`m3bar ${dark ? "m3bar-dark" : ""}`, pad.map((ic, i) => m3Item(ic, i === 0, dark)).join("")) +
          `</div>`,
      );
    }
  }
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:-apple-system,sans-serif; background:#E7EBF0; padding:16px; width:1200px; }
  h1 { font-size:18px; margin-bottom:12px; }
  .barrow { display:flex; gap:24px; padding:18px; border-radius:14px; margin-bottom:14px; align-items:center; }
  .light-bg { background:#F7F8FA; } .dark-bg { background:#101418; }
  .iosbar { width:390px; height:74px; background:rgba(255,255,255,.92); border-top:0.5px solid #d0d3d9; display:flex; justify-content:space-around; align-items:center; border-radius:0 0 18px 18px; }
  .iosbar-dark { background:rgba(22,22,24,.94); border-top:0.5px solid #2c2c2e; }
  .ios-item { display:flex; flex-direction:column; align-items:center; gap:2px; font-size:10px; }
  .m3bar { width:412px; height:80px; background:#F3F4F9; display:flex; justify-content:space-around; align-items:center; border-radius:0 0 18px 18px; }
  .m3bar-dark { background:#1F2227; color:#E3E5EA; }
  .m3-item { position:relative; display:flex; flex-direction:column; align-items:center; gap:4px; font-size:12px; width:64px; }
  .m3-icon { position:relative; z-index:1; display:flex; align-items:center; justify-content:center; width:64px; height:32px; }
  .pill { position:absolute; top:0; width:64px; height:32px; border-radius:16px; background:#CDE8CF; }
  .pill-dark { background:#2E4B33; }
  .m3-label { z-index:1; }
  .iosbar img, .m3bar img { display:block; }
  .iosbar-dark .ios-item, .m3bar-dark .m3-item { color:#E3E5EA; }
  </style></head><body><h1>v4 · P0 tab-bar mocks (iOS + Material 3, active=solid / inactive=outline)</h1>${rows.join("\n")}</body></html>`;
}

function sheetHtml(category, page, pageIcons) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: -apple-system, sans-serif; background: #F1F5F9; padding: 16px; width: 1420px; }
  h1 { font-size: 18px; margin-bottom: 12px; color: #0F172A; }
  .row { display: flex; align-items: center; gap: 10px; padding: 8px; background: #fff; border-radius: 10px; margin-bottom: 8px; }
  .label { width: 200px; flex: none; font-size: 13px; color: #334155; overflow-wrap: anywhere; }
  .cell { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; border-radius: 8px; padding: 6px; flex: none; }
  .cell.light { background: #fff; outline: 1px solid #E2E8F0; color: #0F172A; }
  .cell.dark { background: #0F172A; color: #E2E8F0; }
  .cell.small { width: 120px; height: 140px; flex-direction: row; align-items: center; }
  .cell.small img { image-rendering: auto; }
  .cell.ink { color: #263238; }
  .cell.paper { color: #ECEFF1; }
  .cell.ramp { flex-direction: row; align-items: flex-end; gap: 8px; padding: 10px; }
  .cell.ramp figcaption { align-self: center; }
  .cell svg { display: block; }
  figcaption { font-size: 10px; color: #94A3B8; }
  </style></head><body>
  <h1>${setName} · ${category} · sheet ${page}</h1>
  ${pageIcons.map(iconRow).join("\n")}
  </body></html>`;
}

const { chromium } = await import("playwright");
const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 2, viewport: { width: 1460, height: 900 } });

fs.mkdirSync(path.join(outRoot, setName), { recursive: true });
let sheets = 0;
if (tabbarMode) {
  const p0 = icons.filter((i) => i.tier === "P0");
  if (!p0.length) throw new Error("no P0 icons in v4 manifest yet");
  await page.setContent(tabbarHtml(p0), { waitUntil: "networkidle" });
  const outPath = path.join(outRoot, setName, "p0-tabbars.png");
  await page.screenshot({ path: outPath, fullPage: true });
  await browser.close();
  console.log(`Rendered P0 tab-bar mock (${p0.length} icons) to ${path.relative(root, outPath)}`);
  process.exit(0);
}
for (const [category, categoryIcons] of [...byCategory.entries()].sort()) {
  categoryIcons.sort((a, b) => a.id.localeCompare(b.id));
  for (let i = 0; i < categoryIcons.length; i += PER_PAGE) {
    const pageNum = Math.floor(i / PER_PAGE) + 1;
    const html = sheetHtml(category, pageNum, categoryIcons.slice(i, i + PER_PAGE));
    await page.setContent(html, { waitUntil: "networkidle" });
    const outPath = path.join(outRoot, setName, `${category}-${String(pageNum).padStart(2, "0")}.png`);
    await page.screenshot({ path: outPath, fullPage: true });
    sheets += 1;
  }
}
await browser.close();
console.log(`Rendered ${sheets} contact sheets for ${byCategory.size} categories to ${path.relative(root, path.join(outRoot, setName))}/`);
