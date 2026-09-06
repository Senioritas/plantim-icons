// Build reports/plantim-icons-v4-catalog.pdf — print catalog of the full v4 set:
// per icon, all four variants at 24 plus the 16→48 outline ramp, grouped by
// category with page-break-aware sections. Rendered via lib/html-to-pdf.mjs.

import fs from "node:fs";
import path from "node:path";
import { htmlToPdf } from "./lib/html-to-pdf.mjs";

const root = path.resolve(import.meta.dirname, "../..");
const v4Root = path.join(root, "design-tokens/icons/v4");
const registry = JSON.parse(fs.readFileSync(path.join(v4Root, "registry.v4.json"), "utf8"));
const index = JSON.parse(fs.readFileSync(path.join(v4Root, "index.v4.json"), "utf8"));

const svg = (rel, size) =>
  fs
    .readFileSync(path.join(v4Root, rel), "utf8")
    .trim()
    .replace(/width="\d+"/, `width="${size}"`)
    .replace(/height="\d+"/, `height="${size}"`)
    .replace(/\n\s*/g, "");

const icons = index.icons.slice().sort((a, b) => a.category.localeCompare(b.category) || a.id.localeCompare(b.id));
const categories = [...new Set(icons.map((i) => i.category))].sort();

function card(icon) {
  const f = icon.files;
  return `<div class="card">
    <div class="v">${["outline", "solid", "duotone", "multicolor"].map((v) => svg(f[v][24], 26)).join("")}</div>
    <div class="r">${[16, 24, 48].map((s) => svg(f.outline[s], s)).join("")}</div>
    <code>${icon.id}</code><span class="meta">${icon.tier} · ${icon.verdict}</span>
  </div>`;
}

const sections = categories
  .map(
    (cat) =>
      `<section><h2>${cat} <small>${icons.filter((i) => i.category === cat).length} icons</small></h2>
       <div class="grid">${icons.filter((i) => i.category === cat).map(card).join("\n")}</div></section>`,
  )
  .join("\n");

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@page { size: A4; margin: 14mm 12mm; }
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font: 10px/1.45 -apple-system, 'SF Pro Text', sans-serif; color: #1E2833; }
.cover { height: 260mm; display: flex; flex-direction: column; justify-content: center; page-break-after: always; }
.cover h1 { font-size: 40px; } .cover h1 b { color: #2E7D32; }
.cover p { color: #68788B; font-size: 13px; margin-top: 8px; max-width: 420px; }
.cover .hash { margin-top: 24px; font-family: ui-monospace, monospace; font-size: 9px; color: #98A6B8; }
section { page-break-inside: avoid; margin-bottom: 18px; }
h2 { font-size: 15px; margin: 14px 0 8px; border-bottom: 1.5px solid #E3E8EF; padding-bottom: 4px; }
h2 small { color: #68788B; font-weight: 400; font-size: 10px; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
.card { border: 0.8px solid #E3E8EF; border-radius: 8px; padding: 8px; page-break-inside: avoid; }
.v { display: flex; gap: 10px; align-items: center; }
.r { display: flex; gap: 8px; align-items: flex-end; margin-top: 6px; padding-top: 5px; border-top: 0.8px dashed #E3E8EF; }
code { display: block; font-size: 8.5px; color: #445468; margin-top: 6px; font-family: ui-monospace, monospace; }
.meta { font-size: 7.5px; color: #98A6B8; }
</style></head><body>
<div class="cover">
  <h1>Plantim Icons <b>v4</b></h1>
  <p>Catalog — ${registry.counts.total} icons × outline / solid / duotone / multicolor × optical sizes 16–72.
  Registry 4.0.0, derived from v2 ${registry.derivedFrom.v2}.</p>
  <div class="hash">v4Hash ${registry.v4Hash}</div>
</div>
${sections}
</body></html>`;

const out = path.join(root, "reports/plantim-icons-v4-catalog.pdf");
const how = await htmlToPdf(html, out);
console.log(`Generated ${path.relative(root, out)} via ${how}.`);
