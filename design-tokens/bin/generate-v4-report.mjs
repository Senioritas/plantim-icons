// Build reports/plantim-icons-v4-report.pdf — the process report: why v4,
// method, gates, per-tier results, and P0 before/after case studies.

import fs from "node:fs";
import path from "node:path";
import { htmlToPdf } from "./lib/html-to-pdf.mjs";

const root = path.resolve(import.meta.dirname, "../..");
const v4Root = path.join(root, "design-tokens/icons/v4");
const v3Root = path.join(root, "design-tokens/icons/v3");
const registry = JSON.parse(fs.readFileSync(path.join(v4Root, "registry.v4.json"), "utf8"));
const index = JSON.parse(fs.readFileSync(path.join(v4Root, "index.v4.json"), "utf8"));
const tiers = JSON.parse(fs.readFileSync(path.join(v4Root, "tiers.json"), "utf8"));
const v3Index = JSON.parse(fs.readFileSync(path.join(v3Root, "index.v3.json"), "utf8"));
const v3ById = new Map(v3Index.icons.map((i) => [i.id, i]));
const byId = new Map(index.icons.map((i) => [i.id, i]));

const svg4 = (id, variant, size) => {
  const f = byId.get(id)?.files?.[variant]?.[24];
  if (!f) return "";
  return fs
    .readFileSync(path.join(v4Root, f), "utf8")
    .trim()
    .replace(/width="\d+"/, `width="${size}"`)
    .replace(/height="\d+"/, `height="${size}"`)
    .replace(/\n\s*/g, "");
};
const svg3 = (id, style, size) => {
  const rel = v3ById.get(id)?.files?.[style];
  if (!rel) return "";
  return fs
    .readFileSync(path.join(v3Root, rel), "utf8")
    .trim()
    .replace(/width="\d+"/, `width="${size}"`)
    .replace(/height="\d+"/, `height="${size}"`)
    .replace(/\n\s*/g, "");
};

const P0_CASES = [
  ["plant.growth", "Gardens tab: v3's slashed leaf read as 'prohibited'; v4 draws a raised bed with two staggered plants — a collection, distinct from the single sprout at every size."],
  ["plant.sprout", "Plants tab: leaves opened so the outline keeps interior white at 24 px; solid drawn to the stroked footprint; ground/stem/leaves carry semantic color roles."],
  ["utility.message.circle", "Chat tab: v3 shipped a question-mark bubble. v4: round bubble with typing dots that survive the solid as counters."],
  ["calendar.date", "Rhythm tab: hand-drawn frame, rings and an emphatic date dot; the solid keeps a header slit + dot as counters instead of going black."],
  ["account.user", "Profile: v3 multicolor erased the person (geometry-heuristic roles); v4 assigns roles by hand."],
  ["navigation.home", "Today: closed-shell house whose silhouette holds; the door survives the solid as an open-bottom cutout."],
];

const caseRows = P0_CASES.filter(([id]) => byId.has(id))
  .map(
    ([id, note]) => `<tr>
    <td class="ba"><span class="b">${svg3(registry.icons[id]?.provenance?.v3 ?? id, "outlined", 30)}${svg3(registry.icons[id]?.provenance?.v3 ?? id, "solid", 30)}</span>
    <span class="arr">→</span>
    <span class="a">${svg4(id, "outline", 30)}${svg4(id, "solid", 30)}${svg4(id, "multicolor", 30)}</span></td>
    <td><code>${id}</code><p>${note}</p></td></tr>`,
  )
  .join("\n");

const c = registry.counts;
const t = tiers.counts;

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@page { size: A4; margin: 16mm 14mm; }
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font: 11px/1.55 -apple-system, 'SF Pro Text', sans-serif; color: #1E2833; }
h1 { font-size: 30px; } h1 b { color: #2E7D32; }
h2 { font-size: 15px; margin: 22px 0 8px; }
p { margin: 6px 0; max-width: 165mm; }
.muted { color: #68788B; }
table { border-collapse: collapse; width: 100%; margin-top: 8px; }
td, th { border: 0.8px solid #E3E8EF; padding: 7px 9px; text-align: left; vertical-align: top; }
th { background: #F4F6F9; font-size: 10px; text-transform: uppercase; letter-spacing: .4px; color: #445468; }
code { font-family: ui-monospace, monospace; font-size: 9.5px; }
.ba { white-space: nowrap; }
.ba .b { opacity: .45; filter: saturate(.4); }
.ba .arr { color: #2E7D32; margin: 0 8px; }
.ba span svg { vertical-align: middle; margin-right: 5px; }
ul { margin: 6px 0 6px 18px; }
li { margin: 3px 0; }
.cover { height: 250mm; display:flex; flex-direction:column; justify-content:center; page-break-after: always; }
.hash { margin-top: 20px; font-family: ui-monospace, monospace; font-size: 9px; color: #98A6B8; }
</style></head><body>
<div class="cover">
  <h1>Plantim Icons <b>v4</b> — process report</h1>
  <p class="muted" style="margin-top:10px">Designer-grade rework of the full semantic icon set for web (Vue 3),
  iOS (SwiftUI) and Android (Vector Drawable / Compose). Hand-authored geometry, four variants sharing one
  silhouette, six optical sizes on three authored grades, semantic color roles, and mechanical + human gates.</p>
  <div class="hash">registry 4.0.0 · v4Hash ${registry.v4Hash}</div>
</div>

<h2>Why v4</h2>
<p>The v3 experiment derived multicolor and multi-size variants from v2 programmatically. The audit
(<code>reports/v4-v3-audit.md</code>) judged ~30% of the set unusable and catalogued the failure modes:
fake solids (thicker outlines instead of fills, or fills that erase identity), wrong source glyphs mapped to
semantic ids (a closed eye for <code>utility.eye</code>, an unlocked padlock for <code>utility.lock</code>, a
question-mark bubble as the Chat tab), variant identity collisions, multicolor roles assigned by geometry
heuristics, and blob anatomy across the hand-built garden/family/genus sets.</p>

<h2>Method</h2>
<ul>
<li><b>App audit first.</b> 1,083 icon references across the Plantim web and iOS clients defined the tiers:
${t.P0} P0 tab/section identities, ${t.P1} P1 app-used icons, ${t.P2} P2 library icons
(<code>reports/v4-app-icon-audit.md</code>).</li>
<li><b>Written design language.</b> 24-grid, 2 px round strokes, three authored optical grades
(micro 16/20 @2.4 · base 24/32 @2.0 · display 48/72 @1.6), named layers with hand-assigned semantic color
roles, separately authored solids with declared counters (<code>design-tokens/icons/v4/DESIGN.md</code>).</li>
<li><b>Mechanical gates.</b> Structural: hash integrity, path-walking bounds, stroke discipline, determinism.
Raster: flood-fill counter verification (accidental islands fail) and outline↔solid silhouette IoU ≥ 0.90.</li>
<li><b>Human loop.</b> Every icon rendered to contact sheets (variants × sizes × light/dark; P0 additionally in
iOS and Material 3 tab-bar mocks) and inspected zoomed; reworked until it reads. P0 icons got a minimum of two
full passes (<code>reports/v4-worklog.md</code>).</li>
</ul>

<h2>Results</h2>
<table>
<tr><th>tier</th><th>count</th><th>authored grades</th></tr>
<tr><td>P0 — tab/section identity, animated</td><td>${c.P0}</td><td>micro + base + display</td></tr>
<tr><td>P1 — used by the app</td><td>${c.P1}</td><td>micro + base (display derived)</td></tr>
<tr><td>P2 — library</td><td>${c.P2}</td><td>base (micro/display derived)</td></tr>
<tr><td><b>total</b></td><td><b>${c.total}</b> icons · ${c.total * 24} SVGs</td><td>4 variants × 6 sizes</td></tr>
</table>

<h2>P0 case studies (v3 → v4)</h2>
<table><tr><th>before → after</th><th>notes</th></tr>${caseRows}</table>

<h2>Platform delivery</h2>
<ul>
<li><b>Web:</b> <code>@plantim/icons/v4</code> subpath — tree-shakable per-icon modules, CSS-variable token
theming, the v2 entry byte-untouched and its size budgets unchanged.</li>
<li><b>iOS:</b> <code>PlantimIconV4</code> SwiftUI view — native Path rendering, grade selection by size,
dynamic light/dark token colors, tab-selection animations honoring Reduce Motion.</li>
<li><b>Android:</b> <code>packages/plantim-icons-android</code> — tintable Vector Drawables (values-night
palette) and Compose ImageVectors with all grades, xmllint-validated.</li>
<li><b>Motion:</b> P0 selection animations compiled to Lottie JSON from declarative specs (220–260 ms,
transform/opacity/trim subset).</li>
</ul>
</body></html>`;

const out = path.join(root, "reports/plantim-icons-v4-report.pdf");
const how = await htmlToPdf(html, out);
console.log(`Generated ${path.relative(root, out)} via ${how}.`);
