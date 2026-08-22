// PDF 2 — visual showcase catalog: every v3 icon at 24/48/72 in multicolor, grouped
// by category. Reads the generated v3 artifacts and prints to reports/.

import fs from "node:fs";
import path from "node:path";
import { htmlToPdf } from "./lib/html-to-pdf.mjs";

const root = path.resolve(import.meta.dirname, "..", "..");
const v3Dir = path.join(root, "design-tokens/icons/v3");
const outPath = path.join(root, "reports/plantim-icons-v3-catalog.pdf");

const palette = JSON.parse(fs.readFileSync(path.join(v3Dir, "palette.json"), "utf8"));
const manifest = JSON.parse(fs.readFileSync(path.join(v3Dir, "index.v3.json"), "utf8"));
const v3 = JSON.parse(fs.readFileSync(path.join(v3Dir, "registry.v3.json"), "utf8"));

const CATEGORY_ORDER = [
  "plant", "weather", "status", "navigation", "action",
  "account", "calendar", "location", "utility", "content",
];
const label = (c) => c.charAt(0).toUpperCase() + c.slice(1);
const readSvg = (rel) => fs.readFileSync(path.join(v3Dir, rel), "utf8");

// Group manifest icons by category, preserving registry order within each group.
const byCategory = new Map();
for (const icon of manifest.icons) {
  if (!byCategory.has(icon.category)) byCategory.set(icon.category, []);
  byCategory.get(icon.category).push(icon);
}
const orderedCategories = [
  ...CATEGORY_ORDER.filter((c) => byCategory.has(c)),
  ...[...byCategory.keys()].filter((c) => !CATEGORY_ORDER.includes(c)),
];

const swatch = (hex) => `<span class="sw" style="background:${hex}"></span>`;

function paletteLegend() {
  return orderedCategories
    .map((cat) => {
      const p = palette.categories[cat] ?? palette.categories.utility;
      return `<tr>
        <td class="cat">${label(cat)}</td>
        <td>${swatch(p.primary)}<code>${p.primary}</code></td>
        <td>${swatch(p.secondary)}<code>${p.secondary}</code></td>
        <td>${swatch(p.accent)}<code>${p.accent}</code></td>
        <td>${swatch(p.bg)}<code>${p.bg}</code></td>
        <td class="num">${byCategory.get(cat).length}</td>
      </tr>`;
    })
    .join("");
}

function card(icon) {
  const s = icon.files.sizes;
  const corrected = v3.icons[Object.keys(v3.icons).find((k) => v3.icons[k].id === icon.id)]?.geometryCorrected;
  return `<div class="card">
    <div class="icons">
      <div class="slot">${readSvg(s["24"])}<span class="sz">24</span></div>
      <div class="slot">${readSvg(s["48"])}<span class="sz">48</span></div>
      <div class="slot">${readSvg(s["72"])}<span class="sz">72</span></div>
    </div>
    <div class="id">${icon.id}${corrected ? ' <span class="fixed">fixed</span>' : ""}</div>
  </div>`;
}

function section(cat) {
  const p = palette.categories[cat] ?? palette.categories.utility;
  const cards = byCategory.get(cat).map(card).join("");
  return `<section>
    <h2 style="background:${p.primary}">${label(cat)} <span class="count">${byCategory.get(cat).length}</span></h2>
    <div class="grid">${cards}</div>
  </section>`;
}

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  * { -webkit-print-color-adjust: exact; print-color-adjust: exact; box-sizing: border-box; }
  @page { size: A4; margin: 12mm; }
  body { font: 13px/1.5 -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #1f2933; margin: 0; }
  code { font-family: "SF Mono", Menlo, Consolas, monospace; font-size: 11px; color: #52606d; }
  .cover { height: 265mm; display: flex; flex-direction: column; justify-content: center; }
  .cover h1 { font-size: 46px; margin: 0 0 6px; letter-spacing: -1px; }
  .cover .sub { font-size: 18px; color: #52606d; margin-bottom: 28px; }
  .cover .meta { font-size: 13px; color: #616e7c; margin-bottom: 30px; }
  .cover .meta b { color: #1f2933; }
  .legend { border-collapse: collapse; width: 100%; font-size: 12px; }
  .legend th { text-align: left; padding: 6px 8px; border-bottom: 2px solid #cbd2d9; color: #3e4c59; }
  .legend td { padding: 5px 8px; border-bottom: 1px solid #e4e7eb; vertical-align: middle; }
  .legend td.cat { font-weight: 600; }
  .legend td.num { text-align: right; font-variant-numeric: tabular-nums; }
  .sw { display: inline-block; width: 13px; height: 13px; border-radius: 3px; margin-right: 6px; vertical-align: -2px; box-shadow: inset 0 0 0 1px rgba(0,0,0,.12); }
  section { break-before: page; }
  h2 { color: #fff; font-size: 20px; padding: 8px 14px; border-radius: 8px; margin: 0 0 14px; }
  h2 .count { float: right; opacity: .85; font-size: 15px; font-weight: 500; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  .card { border: 1px solid #e4e7eb; border-radius: 10px; padding: 12px 10px 8px; break-inside: avoid; background: #fff; }
  .icons { display: flex; align-items: flex-end; justify-content: center; gap: 16px; min-height: 80px; }
  .slot { display: flex; flex-direction: column; align-items: center; gap: 4px; }
  .slot svg { display: block; }
  .sz { font-size: 9px; color: #9aa5b1; }
  .id { text-align: center; margin-top: 9px; font-family: "SF Mono", Menlo, Consolas, monospace; font-size: 10.5px; color: #3e4c59; word-break: break-all; }
  .fixed { background: #2E7D32; color: #fff; border-radius: 4px; padding: 0 5px; font-size: 8.5px; letter-spacing: .3px; }
</style></head><body>
  <div class="cover">
    <h1>Plantim Icons — v3</h1>
    <div class="sub">Multi-color · three sizes (24 / 48 / 72) · ${manifest.count} icons</div>
    <div class="meta">
      Additive showcase set derived from the v2 registry (v${v3.derivedFrom}).<br>
      v3 version <b>${manifest.version}</b> · v3Hash <code>${manifest.v3Hash.slice(0, 16)}…</code> · policy <b>${manifest.strokePolicy}</b>
    </div>
    <table class="legend">
      <tr><th>Category</th><th>Primary</th><th>Secondary</th><th>Accent</th><th>Bg tint</th><th>Count</th></tr>
      ${paletteLegend()}
    </table>
  </div>
  ${orderedCategories.map(section).join("")}
</body></html>`;

const how = await htmlToPdf(html, outPath);
console.log(`Wrote ${path.relative(root, outPath)} (${(fs.statSync(outPath).size / 1024).toFixed(0)} KiB) via ${how}.`);
