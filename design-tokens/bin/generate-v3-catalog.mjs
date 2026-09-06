// PDF 2 — visual showcase catalog. Leads with the NEW Plantim icons (tab-bar
// alternatives, care actions, lifecycle/health, garden tools, families, genus)
// grouped for side-by-side comparison, then the full derived set by category.
// Each icon is shown at 24/48/72 in multicolor.

import fs from "node:fs";
import path from "node:path";
import { htmlToPdf } from "./lib/html-to-pdf.mjs";

const root = path.resolve(import.meta.dirname, "..", "..");
const v3Dir = path.join(root, "design-tokens/icons/v3");
const outPath = path.join(root, "reports/plantim-icons-v3-catalog.pdf");

const palette = JSON.parse(fs.readFileSync(path.join(v3Dir, "palette.json"), "utf8"));
const manifest = JSON.parse(fs.readFileSync(path.join(v3Dir, "index.v3.json"), "utf8"));

const readSvg = (rel) => fs.readFileSync(path.join(v3Dir, rel), "utf8");
const label = (c) => c.charAt(0).toUpperCase() + c.slice(1);
const primaryOf = (cat) => (palette.categories[cat] ?? palette.categories.utility).primary;

const customIcons = manifest.icons.filter((i) => i.custom);
const derivedIcons = manifest.icons.filter((i) => !i.custom);

// New icons grouped by their `group` label, in a curated order.
const CUSTOM_GROUP_ORDER = [
  "Today", "Garden (tab)", "Plant (tab)", "Calendar (tab)", "Feed (tab)", "Chat (tab)",
  "Care actions", "Plant lifecycle", "Plant health", "Growth stages",
  "Garden tools", "Plant families", "Taxonomy & genus",
];
const byGroup = new Map();
for (const icon of customIcons) {
  if (!byGroup.has(icon.group)) byGroup.set(icon.group, []);
  byGroup.get(icon.group).push(icon);
}
const orderedGroups = [
  ...CUSTOM_GROUP_ORDER.filter((g) => byGroup.has(g)),
  ...[...byGroup.keys()].filter((g) => !CUSTOM_GROUP_ORDER.includes(g)),
];

// Derived icons grouped by category.
const CATEGORY_ORDER = ["plant", "weather", "status", "navigation", "action", "account", "calendar", "location", "utility", "content"];
const byCategory = new Map();
for (const icon of derivedIcons) {
  if (!byCategory.has(icon.category)) byCategory.set(icon.category, []);
  byCategory.get(icon.category).push(icon);
}
const orderedCategories = [
  ...CATEGORY_ORDER.filter((c) => byCategory.has(c)),
  ...[...byCategory.keys()].filter((c) => !CATEGORY_ORDER.includes(c)),
];

const swatch = (hex) => `<span class="sw" style="background:${hex}"></span>`;

function card(icon, showLabel) {
  const s = icon.files.sizes;
  const name = showLabel && icon.label ? icon.label : "";
  return `<div class="card">
    <div class="icons">
      <div class="slot">${readSvg(s["24"])}<span class="sz">24</span></div>
      <div class="slot">${readSvg(s["48"])}<span class="sz">48</span></div>
      <div class="slot">${readSvg(s["72"])}<span class="sz">72</span></div>
    </div>
    ${name ? `<div class="label">${name}</div>` : ""}
    <div class="id">${icon.id}</div>
  </div>`;
}

function groupSection(group) {
  const icons = byGroup.get(group);
  const color = primaryOf(icons[0].category);
  return `<section>
    <h2 style="background:${color}">${group} <span class="count">${icons.length}</span></h2>
    <div class="grid">${icons.map((i) => card(i, true)).join("")}</div>
  </section>`;
}

function categorySection(cat) {
  const icons = byCategory.get(cat);
  return `<section>
    <h2 style="background:${primaryOf(cat)}">${label(cat)} <span class="count">${icons.length}</span></h2>
    <div class="grid">${icons.map((i) => card(i, false)).join("")}</div>
  </section>`;
}

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  * { -webkit-print-color-adjust: exact; print-color-adjust: exact; box-sizing: border-box; }
  @page { size: A4; margin: 12mm; }
  body { font: 13px/1.5 -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #1f2933; margin: 0; }
  code { font-family: "SF Mono", Menlo, Consolas, monospace; font-size: 11px; color: #52606d; }
  .cover { height: 265mm; display: flex; flex-direction: column; justify-content: center; }
  .cover h1 { font-size: 44px; margin: 0 0 6px; letter-spacing: -1px; }
  .cover .sub { font-size: 17px; color: #52606d; margin-bottom: 10px; }
  .cover .tag { font-size: 13px; color: #616e7c; margin-bottom: 26px; }
  .cover .tag b { color: #1f2933; }
  .divider { font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: #9aa5b1; margin: 22px 0 10px; }
  .legend { border-collapse: collapse; width: 100%; font-size: 11.5px; }
  .legend th { text-align: left; padding: 5px 8px; border-bottom: 2px solid #cbd2d9; color: #3e4c59; }
  .legend td { padding: 4px 8px; border-bottom: 1px solid #e4e7eb; vertical-align: middle; }
  .legend td.g { font-weight: 600; }
  .legend td.num { text-align: right; font-variant-numeric: tabular-nums; }
  .sw { display: inline-block; width: 13px; height: 13px; border-radius: 3px; margin-right: 6px; vertical-align: -2px; box-shadow: inset 0 0 0 1px rgba(0,0,0,.12); }
  section { break-before: page; }
  h2 { color: #fff; font-size: 19px; padding: 8px 14px; border-radius: 8px; margin: 0 0 14px; }
  h2 .count { float: right; opacity: .85; font-size: 15px; font-weight: 500; }
  .banner { break-before: page; text-align: center; padding-top: 90mm; }
  .banner h1 { font-size: 34px; margin: 0 0 8px; }
  .banner p { color: #52606d; font-size: 15px; max-width: 150mm; margin: 0 auto; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  .card { border: 1px solid #e4e7eb; border-radius: 10px; padding: 12px 10px 8px; break-inside: avoid; background: #fff; }
  .icons { display: flex; align-items: flex-end; justify-content: center; gap: 14px; min-height: 80px; }
  .slot { display: flex; flex-direction: column; align-items: center; gap: 4px; }
  .slot svg { display: block; }
  .sz { font-size: 9px; color: #9aa5b1; }
  .label { text-align: center; margin-top: 9px; font-size: 12px; font-weight: 600; color: #243b53; }
  .id { text-align: center; margin-top: 2px; font-family: "SF Mono", Menlo, Consolas, monospace; font-size: 10px; color: #7b8794; word-break: break-all; }
</style></head><body>
  <div class="cover">
    <h1>Plantim Icons — v3</h1>
    <div class="sub">Multi-color · three sizes (24 / 48 / 72) · ${manifest.count} icons</div>
    <div class="tag">
      <b>${manifest.counts.custom} new Plantim icons</b> (tab alternatives, care, lifecycle, garden, taxonomy)
      + ${manifest.counts.derived} derived from v${manifest.derivedFrom}.<br>
      v3 <b>${manifest.version}</b> · v3Hash <code>${manifest.v3Hash.slice(0, 16)}…</code> · policy <b>${manifest.strokePolicy}</b>
    </div>
    <div class="divider">New icon groups</div>
    <table class="legend">
      <tr><th>Group</th><th>Palette</th><th>Count</th></tr>
      ${orderedGroups.map((g) => {
        const icons = byGroup.get(g);
        return `<tr><td class="g">${g}</td><td>${swatch(primaryOf(icons[0].category))}<code>${primaryOf(icons[0].category)}</code></td><td class="num">${icons.length}</td></tr>`;
      }).join("")}
    </table>
  </div>

  <div class="banner">
    <h1>New for Plantim</h1>
    <p>Tab-bar alternatives to choose from, dedicated care actions, plant lifecycle &amp; health,
    garden tools, and taxonomy — families and genera. Each shown at 24 / 48 / 72 px.</p>
  </div>
  ${orderedGroups.map(groupSection).join("")}

  <div class="banner">
    <h1>Full library</h1>
    <p>The ${manifest.counts.derived} icons derived from the v2 registry, recolored by category and rendered at three sizes.</p>
  </div>
  ${orderedCategories.map(categorySection).join("")}
</body></html>`;

const how = await htmlToPdf(html, outPath);
console.log(`Wrote ${path.relative(root, outPath)} (${(fs.statSync(outPath).size / 1024).toFixed(0)} KiB) via ${how}.`);
