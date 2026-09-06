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
if (!SETS[setName]) {
  console.error("Usage: node design-tokens/bin/render-v4-sheets.mjs <v3|v4> [category ...]");
  process.exit(2);
}
const set = SETS[setName];

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

function iconRow(icon) {
  const cells = set.styles
    .map((style) => {
      const rel = icon.files?.[style] ?? `svg/${style}/${icon.id}@24.svg`;
      const src = svgData(rel);
      return `<figure class="cell light"><img src="${src}" width="128" height="128" alt=""><figcaption>${style}</figcaption></figure>`;
    })
    .join("");
  const outlineRel = icon.files?.[set.styles[0]] ?? `svg/${set.styles[0]}/${icon.id}@24.svg`;
  const solidRel = icon.files?.solid ?? `svg/solid/${icon.id}@24.svg`;
  const multiRel = icon.files?.multicolor ?? `svg/multicolor/${icon.id}@24.svg`;
  return `<div class="row">
    <div class="label"><code>${icon.id}</code></div>
    ${cells}
    <figure class="cell light small"><img src="${svgData(outlineRel)}" width="24" height="24" alt=""><img src="${svgData(outlineRel)}" width="16" height="16" alt=""><figcaption>24 / 16</figcaption></figure>
    <figure class="cell dark"><img src="${svgData(solidRel)}" width="128" height="128" alt=""><figcaption>solid·dark</figcaption></figure>
    <figure class="cell dark"><img src="${svgData(multiRel)}" width="128" height="128" alt=""><figcaption>multi·dark</figcaption></figure>
  </div>`;
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
