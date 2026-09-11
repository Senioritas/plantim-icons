// Build reports/plantim-icons-v4.1-proposal-catalog.pdf — print catalog of the
// proposal: per icon all variants at 24 + the 16→48 ramp, the one-line "why"
// and intended surfaces, grouped by proposal group. Flags show color + mono
// on light and dark. Rendered via lib/html-to-pdf.mjs.

import path from "node:path";
import { htmlToPdf } from "./lib/html-to-pdf.mjs";
import { root, registry, esc, svg, v4svg, byGroup, rationaleOf, defOf, labelIn } from "./lib/proposal-data.mjs";

const groups = byGroup();
const c = registry.counts;

function card(entry) {
  const f = entry.files;
  const r = rationaleOf(entry);
  const def = defOf(entry);
  const isFlag = entry.kind === "flag";
  const variants = isFlag
    ? `${svg(f.color[24], 26)}${svg(f.mono[24], 26)}<span class="dark">${svg(f.color[24], 26)}${svg(f.mono[24], 26)}</span>`
    : ["outline", "solid", "duotone", "multicolor"].map((v) => svg(f[v][24], 26)).join("");
  const ramp = [16, 24, 48].map((s) => svg(f[isFlag ? "color" : "outline"][s], s)).join("");
  const a11y = def.accessibilityLabelKey
    ? `<div class="a11y">${def.accessibility} · ${esc(labelIn("en", def.accessibilityLabelKey) || "existing key")} · ${esc(labelIn("de", def.accessibilityLabelKey) || "—")} · ${esc(labelIn("tr", def.accessibilityLabelKey) || "—")}</div>`
    : "";
  return `<div class="card">
    <div class="v">${variants}</div>
    <div class="r">${ramp}</div>
    <code>${entry.id}</code><span class="meta">${entry.tier} · ${esc(entry.label)}</span>
    <p class="why">${esc(r.why)}</p>
    ${r.surfaces?.length ? `<p class="surf">${r.surfaces.map(esc).join(" · ")}</p>` : ""}
    ${a11y}
  </div>`;
}

const sections = groups
  .map(
    (g) => `<section>
      <h2>${esc(g.title)} <small>${g.entries.length}</small></h2>
      <p class="sum">${esc(g.summary)}</p>
      <p class="princ">${esc(g.principle)}</p>
      <div class="grid">${g.entries.map(card).join("\n")}</div>
    </section>`,
  )
  .join("\n");

// Neighbour strip: proposal next to the shipped v4 icon it must not collide with.
const PAIRS = [
  ["placeholder.avatar", "account.user"],
  ["status.loading.dots", "utility.more.horizontal"],
  ["utility.download", "utility.upload"],
  ["utility.camera.plus", "utility.camera"],
  ["calendar.add", "calendar.date"],
  ["plant.humidity", "plant.watering"],
  ["plant.light", "weather.sun"],
  ["location.room", "navigation.home"],
  ["location.indoor", "utility.grid2x2"],
  ["location.outdoor", "utility.trees"],
];
const pairs = PAIRS.filter(([a]) => registry.icons[a])
  .map(
    ([a, b]) => `<div class="pair"><span>${svg(`svg/outline/${a}@24.svg`, 26)}${svg(`svg/solid/${a}@24.svg`, 26)}</span>
      <span class="vs">vs</span><span class="old">${v4svg(b, "outline", 26)}${v4svg(b, "solid", 26)}</span>
      <code>${a}<br><small>${b}</small></code></div>`,
  )
  .join("");

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@page { size: A4; margin: 14mm 12mm; }
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font: 10px/1.45 -apple-system, 'SF Pro Text', sans-serif; color: #1E2833; }
.cover { height: 260mm; display: flex; flex-direction: column; justify-content: center; page-break-after: always; }
.cover h1 { font-size: 40px; } .cover h1 b { color: #2E7D32; }
.cover p { color: #68788B; font-size: 13px; margin-top: 8px; max-width: 460px; }
.cover .hash { margin-top: 24px; font-family: ui-monospace, monospace; font-size: 9px; color: #98A6B8; }
.pairs { display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; margin-top: 26px; max-width: 460px; }
.pair { display: flex; align-items: center; gap: 8px; border: 0.8px solid #E3E8EF; border-radius: 8px; padding: 6px 8px; }
.pair span svg { vertical-align: middle; margin-right: 3px; }
.pair .vs { color: #98A6B8; font-size: 9px; }
.pair .old { opacity: .5; }
.pair code { margin-left: auto; font-size: 8px; color: #445468; text-align: right; }
.pair code small { color: #98A6B8; }
section { margin-bottom: 18px; }
h2 { font-size: 15px; margin: 14px 0 4px; border-bottom: 1.5px solid #E3E8EF; padding-bottom: 4px; page-break-after: avoid; }
h2 small { color: #68788B; font-weight: 400; font-size: 10px; }
.sum { color: #445468; max-width: 175mm; margin-bottom: 4px; }
.princ { font-size: 9.5px; margin-bottom: 10px; padding: 6px 9px; border-left: 2.5px solid #2E7D32; background: #F4F6F9; max-width: 175mm; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
.card { border: 0.8px solid #E3E8EF; border-radius: 8px; padding: 8px; page-break-inside: avoid; }
.v { display: flex; gap: 10px; align-items: center; }
.v .dark { background: #0F172A; border-radius: 6px; padding: 3px 5px; display: inline-flex; gap: 8px; }
.r { display: flex; gap: 8px; align-items: flex-end; margin-top: 6px; padding-top: 5px; border-top: 0.8px dashed #E3E8EF; }
code { display: block; font-size: 8.5px; color: #445468; margin-top: 6px; font-family: ui-monospace, monospace; }
.meta { font-size: 7.5px; color: #98A6B8; }
.why { font-size: 8.5px; margin-top: 4px; }
.surf { font-size: 7.5px; color: #68788B; margin-top: 3px; }
.a11y { font-size: 7px; color: #98A6B8; margin-top: 3px; font-family: ui-monospace, monospace; }
</style></head><body>
<div class="cover">
  <h1>Plantim Icons <b>v4.1</b> — proposal catalog</h1>
  <p>${c.icons} new semantic icons (outline / solid / duotone / multicolor × optical sizes 16–72) and ${c.flags} flags (color / mono),
  proposed additively on top of the shipped v4 set (${registry.derivedFrom.v4}). Nothing here changes an existing id.</p>
  <p>Read with the process report (plantim-icons-v4.1-proposal-report.pdf) and decide in the interactive catalog
  (plantim-icons-v4.1-proposal-catalog.html).</p>
  <div class="pairs">${pairs}</div>
  <div class="hash">proposalHash ${registry.proposalHash} · derived from v4Hash ${registry.derivedFrom.v4Hash}</div>
</div>
${sections}
</body></html>`;

const out = path.join(root, "reports/plantim-icons-v4.1-proposal-catalog.pdf");
const how = await htmlToPdf(html, out);
console.log(`Generated ${path.relative(root, out)} via ${how}.`);
