// Build reports/plantim-icons-v4.1-proposal-report.pdf — the process report
// for the v4.1 proposal: what is proposed and why, how it was made and gated,
// the avatar and flag asset-class decisions, accessibility, platform delivery,
// the promotion checklist and the open decisions.

import fs from "node:fs";
import path from "node:path";
import { htmlToPdf } from "./lib/html-to-pdf.mjs";
import { root, propRoot, registry, esc, svg, v4svg, byGroup, rationaleOf, defOf, labelIn } from "./lib/proposal-data.mjs";

const groups = byGroup();
const c = registry.counts;
const filledSolids = Object.values(registry.icons).filter((i) => i.solid.base.mode !== "bold").length;
const microAuthored = Object.values(registry.icons).filter((i) => i.grades.micro.authored).length;
const statusIds = Object.values(registry.icons).filter((i) => i.accessibility === "status").map((i) => i.id);
const semanticIds = Object.values(registry.icons).filter((i) => i.accessibility === "semantic").map((i) => i.id);
const srcFiles = fs.readdirSync(path.join(propRoot, "src")).filter((f) => f.endsWith(".mjs"));

const row = (entry) => {
  const f = entry.files;
  const r = rationaleOf(entry);
  const def = defOf(entry);
  const isFlag = entry.kind === "flag";
  const pics = isFlag
    ? `${svg(f.color[24], 24)} ${svg(f.circle[24], 24)} ${svg(f.mono[24], 24)} ${svg(f["circle.mono"][24], 24)}`
    : `${svg(f.outline[24], 24)} ${svg(f.solid[24], 24)} ${svg(f.multicolor[24], 24)} <span class="sm">${svg(f.outline[16], 16)}</span>`;
  const a11y = def.accessibilityLabelKey ? `<div class="a11y">${def.accessibility}: ${esc(labelIn("en", def.accessibilityLabelKey) || "existing key")}</div>` : "";
  return `<tr><td class="pic">${pics}</td><td><code>${entry.id}</code><span class="tier">${entry.tier}</span><p>${esc(r.why)}</p>${
    r.surfaces?.length ? `<p class="surf">${r.surfaces.map(esc).join(" · ")}</p>` : ""
  }${a11y}</td></tr>`;
};
const groupTable = (g) => `<table><tr><th style="width:120px">24 px · 16 px</th><th>id · why · where</th></tr>${g.entries.map(row).join("\n")}</table>`;

const groupSections = groups
  .map(
    (g, i) => `<h2>${i + 1}. ${esc(g.title)} <small>${g.entries.length} ids</small></h2>
<p>${esc(g.summary)}</p>
<p class="rule"><b>Design rule.</b> ${esc(g.principle)}</p>
${groupTable(g)}`,
  )
  .join("\n");

const flagSpec = `
<h3>Plant avatars are a picker, not a semantic vocabulary</h3>
<ul>
<li><b>Why they are here.</b> Everything else in the registry answers "what does this control do". An avatar answers "who is this", and the app has no
answer today: a user without a photo gets the Profile tab glyph (<code>account.user</code>) or a raw asset, so every photo-less member looks identical.</li>
<li><b>One family, ${groups[2].entries.length} plants.</b> Each avatar is the <code>placeholder.avatar</code> ring holding one closed plant silhouette, with interior
detail (veins, stripes, slits) on a second layer. Real plants, chosen for silhouette contrast rather than taxonomy: a monstera, a saguaro, an echeveria
rosette, a fiddle-leaf fig, a snake plant, a lavender spike, a bonsai, a lotus, and so on.</li>
<li><b>The solid is a sticker.</b> The disc fills and the plant is punched out of it, so an avatar can sit on any background. Every silhouette is a declared
counter and the raster gate flood-fills to prove it; interior detail is authored as bars nested inside the cut-out, which flip back to filled under
<code>fill-rule="evenodd"</code> — that is how a monstera keeps its slits and a calathea its stripes in the solid instead of going blank.</li>
<li><b>Color.</b> Foliage on the leaf ramp, blooms on bloom/sun, wood and soil on earth; the ring cycles a pastel so a picker shows tinted discs rather
than ${groups[2].entries.length} identical circles. Duotone mutes the ring and keeps the plant.</li>
<li><b>Size honesty.</b> They are built for 32–72 px (profile header, picker grid, comment rows). At 16/20 px the detail layer drops and an avatar reads as its
silhouette only — the same grade rule as the rest of v4, but it matters more here because the set differentiates on interior detail.</li>
</ul>

<h3>Flags are an asset class, not semantic icons</h3>
<ul>
<li><b>Why not the v4 registry.</b> v4 guarantees four variants sharing one silhouette, currentColor strokes and theme tokens. A flag has none of those properties: its colors are fixed by vexillology, an "outline flag" is meaningless, and it must not re-theme in dark mode. Forcing flags through the v4 gates would either weaken the gates or produce wrong flags.</li>
<li><b>Two shapes × two treatments.</b> <code>color</code> — the canonical flag, clipped to a 20×14 rounded rect (rx 2) at (2,5) on the 24-grid, with a 12 % black hairline inset border so white edges (PL, AT, NL) keep a silhouette on light UI and saturated fields stay soft on dark UI. <code>mono</code> — frame + partition lines in currentColor for tinted lists, inactive states and monochrome contexts, at the v4 grade stroke (2.4 / 2 / 1.6). <code>circle</code> and <code>circle.mono</code> — the same flag and the same partitions cropped into the Ø18.5 disc the avatars use, so a flag sits in a locale chip or beside a profile picture without a shape clash. The circular shapes scale the flag to cover the disc height (×1.321) and crop the sides — the standard circle-flag treatment; inside the scaled group the mono stroke is divided by the scale so it still renders at the grade weight.</li>
<li><b>Sizes.</b> The same six sizes and three grades as v4; micro (16/20) drops layers flagged <code>micro: false</code> (US stars, GB saltire, PT shield) and grows the EU stars so the ring closes.</li>
<li><b>Simplification policy.</b> No coats of arms (ES), 7 stripes + 8 stars (US), single-layer saltire (GB), armillary sphere as three discs (PT). The goal is recognition at 16 px, not heraldic accuracy — the policy every icon-size flag set follows.</li>
<li><b>Colors.</b> Commonly published values, uppercase hex, authored per flag; never tokens. The structural gate rejects currentColor in a color variant and non-canonical hex anywhere.</li>
<li><b>Accessibility.</b> Every flag is <code>semantic</code> with a localized label key (<code>a11y.icons.flag.&lt;code&gt;</code>) in en/de/tr, so a language picker announces "Deutschland", not "flag".</li>
<li><b>Scope.</b> ${c.flags} flags: the three shipped locales (de, en → gb + us, tr), the EU, nine likely-next European regions, and <code>flag.unknown</code> for "region not set". Adding a flag is one <code>flag()</code> call; the id space is ISO 3166-1 alpha-2.</li>
</ul>`;

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@page { size: A4; margin: 16mm 14mm; }
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font: 10.5px/1.55 -apple-system, 'SF Pro Text', sans-serif; color: #1E2833; }
h1 { font-size: 30px; } h1 b { color: #2E7D32; }
h2 { font-size: 15px; margin: 22px 0 8px; page-break-after: avoid; }
h2 small { color: #68788B; font-weight: 400; font-size: 10px; }
h3 { font-size: 12px; margin: 14px 0 6px; page-break-after: avoid; }
p { margin: 6px 0; max-width: 170mm; }
.muted { color: #68788B; }
.rule { padding: 6px 10px; border-left: 2.5px solid #2E7D32; background: #F4F6F9; font-size: 10px; }
table { border-collapse: collapse; width: 100%; margin-top: 8px; }
td, th { border: 0.8px solid #E3E8EF; padding: 6px 8px; text-align: left; vertical-align: top; page-break-inside: avoid; }
th { background: #F4F6F9; font-size: 9.5px; text-transform: uppercase; letter-spacing: .4px; color: #445468; }
td.pic { white-space: nowrap; } td.pic svg { vertical-align: middle; margin-right: 4px; }
td.pic .sm { display: inline-block; padding-left: 4px; border-left: 0.8px solid #E3E8EF; }
td p { margin: 3px 0 0; font-size: 9.5px; }
td .surf, td .a11y { color: #68788B; font-size: 8.5px; }
code { font-family: ui-monospace, monospace; font-size: 9.5px; }
.tier { font-size: 8px; color: #2E7D32; margin-left: 6px; border: 0.8px solid #A5D6A7; border-radius: 6px; padding: 0 5px; }
ul, ol { margin: 6px 0 6px 18px; max-width: 170mm; }
li { margin: 3px 0; }
.cover { height: 250mm; display: flex; flex-direction: column; justify-content: center; page-break-after: always; }
.hash { margin-top: 20px; font-family: ui-monospace, monospace; font-size: 9px; color: #98A6B8; }
.kpis { display: flex; gap: 10px; margin-top: 18px; }
.kpi { border: 0.8px solid #E3E8EF; border-radius: 10px; padding: 8px 14px; }
.kpi b { font-size: 20px; display: block; } .kpi span { font-size: 9px; color: #68788B; text-transform: uppercase; letter-spacing: .4px; }
.strip { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin-top: 22px; }
.strip svg { vertical-align: middle; }
.ba { white-space: nowrap; } .ba .old { opacity: .45; } .ba .arr { color: #2E7D32; margin: 0 6px; } .ba svg { vertical-align: middle; margin-right: 3px; }
</style></head><body>
<div class="cover">
  <h1>Plantim Icons <b>v4.1</b> — proposal report</h1>
  <p class="muted" style="margin-top:10px">New icons for loading states and placeholders, the specific cases the app currently works around,
  a set of plant-styled profile avatars, and a country-flag asset class in rectangular and circular shapes — authored in the
  v4 design language, gated mechanically, and delivered as a review package (interactive decision catalog + PDF catalog +
  this report). Additive only: no shipped id changes.</p>
  <div class="kpis">
    <div class="kpi"><b>${c.total}</b><span>proposed ids</span></div>
    <div class="kpi"><b>${c.icons}</b><span>semantic icons</span></div>
    <div class="kpi"><b>${c.flags}</b><span>flags</span></div>
    <div class="kpi"><b>${(c.icons + c.flags) * 24}</b><span>generated SVGs</span></div>
  </div>
  <div class="strip">${["avatar.monstera", "avatar.cactus", "avatar.succulent", "avatar.sunflower", "avatar.pine", "avatar.lavender"]
    .filter((id) => registry.icons[id])
    .map((id) => svg(`svg/multicolor/${id}@24.svg`, 30))
    .join("")}${["flag.de", "flag.tr", "flag.gb"].filter((id) => registry.flags[id]).map((id) => svg(`svg/circle/${id}@24.svg`, 30)).join("")}${["placeholder.avatar", "status.loading.dots", "utility.language", "location.room"]
    .filter((id) => registry.icons[id])
    .map((id) => svg(`svg/multicolor/${id}@24.svg`, 30))
    .join("")}</div>
  <div class="hash">proposalHash ${registry.proposalHash}<br>derived from v4 ${registry.derivedFrom.v4} · v4Hash ${registry.derivedFrom.v4Hash}</div>
</div>

<h2>Summary</h2>
<p>The v4 rework (237 icons) covers the app's existing icon surface. This proposal fills three gaps the app audit
(<code>reports/v4-app-icon-audit.md</code>) exposed but v4 deliberately left out of scope:</p>
<ol>
<li><b>Loading states & placeholders</b> (${groups[0].entries.length} ids) — the app ships <code>profile-placeholder.svg</code> as a raw asset,
scales <code>plant.sprout</code> to 56 px as the plant-photo fallback and has no skeleton, pending or offline glyphs at all.</li>
<li><b>Specific cases</b> (${groups[1].entries.length} ids) — ids with no semantic equivalent in v2/v3/v4 that the clients fake with a neighbouring
glyph (download via upload, room via navigation.home, add-photo via camera, add-event via action.add, humidity via the watering drop,
light via the weather sun, …).</li>
<li><b>Plant avatars</b> (${groups[2].entries.length} ids) — a default profile picture that belongs to a plant-care product. Today a user
without a photo gets <code>account.user</code> (the Profile tab glyph) or a raw <code>profile-placeholder.svg</code>; neither is pickable and neither
says anything about the person.</li>
<li><b>Country flags</b> (${groups[3].entries.length} ids) — a language/region picker needs them; the web client already carries
<code>assets/flags/*.svg</code> outside the registry, so iOS and Android would each re-source them.</li>
</ol>
<p>Everything is authored in the v4 DSL (same grid, strokes, grades, layer roles, color tokens) and passes the same
gates, so an approved id promotes into v4 by moving its module — no redraw, no adapter change beyond regeneration.
Flags use a dedicated, narrower DSL and renderer because they are not monochrome semantic icons (see §3).</p>

<h2>Method</h2>
<ul>
<li><b>Grounding.</b> Every id cites the surface that needs it (audit §2 usage table, §3 gaps, §3c hardcoded assets). Ids that an existing
semantic id already covers were <i>not</i> proposed (e.g. a generic image placeholder is <code>utility.image</code> at ink.300; a generic
empty state is <code>utility.inbox</code>).</li>
<li><b>Authoring.</b> ${srcFiles.length} hand-authored modules under <code>design-tokens/icons/v4.1-proposal/src/</code> using the v4 DSL
(<code>icon / layer / P / C / R</code>): 24-grid, 2 px round strokes, named layers with hand-assigned roles, per-icon multicolor tokens,
declared solid counters. ${microAuthored} of ${c.icons} icons carry an authored micro grade; ${filledSolids} have true-fill solids with declared counters,
the rest use bold-mode solids (line-only geometry, the v4 P1 convention).</li>
<li><b>Gates.</b> <code>check-proposal-icons.mjs</code> runs the v4 structural checks (hash integrity, determinism via <code>--verify</code>, source hygiene,
path-walked bounds and 3-decimal clamp, per-grade stroke discipline, 4 × 6 size-set completeness, a11y keys, token refs) plus proposal rules
(ids must be new across v2/v3/v4; tiers P1/P2 only; every status/semantic label present in en/de/tr) and flag rules (clip + border present,
no currentColor in color variants, canonical hex, micro survivors). <code>--raster</code> adds the v4 flood-fill counter check and
outline↔solid silhouette IoU ≥ 0.90 for the ${filledSolids} filled solids. Both pass on this build.</li>
<li><b>Human loop.</b> Contact sheets (<code>render-v4-sheets.mjs proposal</code>: four variants at 128 px, 16→72 ramp, solid + multicolor on dark,
16–24 on dark) inspected zoomed; two icons reworked after the first pass (plant.light rays converged into an arrowhead → now radiate from the
corner; care.misting trigger lengthened), one skeleton solid re-proportioned to pass the silhouette gate.</li>
</ul>

${groupSections}

${flagSpec}

<h2>Accessibility</h2>
<ul>
<li><b>Status icons</b> (${statusIds.map((i) => `<code>${i}</code>`).join(", ")}) require a label in every locale; <code>status.loading.dots</code> reuses
<code>a11y.icons.status.loading</code>, the other keys live in <code>locales.proposal.json</code> and merge into <code>locales/*.json</code> on promotion.</li>
<li><b>Semantic icons</b> (${semanticIds.map((i) => `<code>${i}</code>`).join(", ")}) and all ${c.flags} flags carry localized labels the same way.</li>
<li>Placeholders are <code>decorative</code>: the surrounding control owns the accessible name ("Loading profile…"), and the icon must never be the only
signal — the v4 status-icon rule applies unchanged.</li>
<li>Placeholder multicolor stays at ink.300/ink.500: it is meant to recede. Where a placeholder is the only content on screen, pair it with text.</li>
</ul>

<h2>Platform delivery (on promotion)</h2>
<ul>
<li><b>Web.</b> Semantic icons flow through the existing <code>@plantim/icons/v4</code> subpath (count-agnostic generator: no code change). Flags need a
sibling subpath <code>@plantim/icons/flags</code> exporting <code>PlantimFlag</code> (props: <code>code</code>, <code>variant = color | mono</code>,
<code>size</code>) plus tree-shakable per-flag modules; the generator is a ~1:1 copy of <code>generate-v4-package.mjs</code> over <code>registry.flags</code>.</li>
<li><b>iOS.</b> Semantic icons: <code>PlantimIconV4</code> regeneration. Flags: a <code>PlantimFlag</code> SwiftUI view rendering the color layers as Paths with fixed
<code>Color(hex:)</code> values (no dynamic colors) and the mono variant through the existing stroke renderer.</li>
<li><b>Android.</b> Semantic icons: Vector Drawables + Compose ImageVectors via <code>generate-v4-android.mjs</code>. Flags: non-tintable drawables
(fixed fills, <code>values-night</code> unchanged) and a tintable mono drawable.</li>
<li><b>Size budget.</b> ${c.icons} icons ≈ +${Math.round(c.icons * 1.2)} KB of per-icon modules (tree-shaken); flags ≈ +${Math.round(c.flags * 0.8)} KB. Both stay far below the
package-size gate, but the number is worth re-checking with <code>icons:package:size</code> after promotion.</li>
</ul>

<h2>Promotion checklist</h2>
<ol>
<li>Review in <code>reports/plantim-icons-v4.1-proposal-catalog.html</code>; export the decision record (.md/.json).</li>
<li>For each <b>Approve</b>: move the icon's <code>icon()</code> into the matching <code>design-tokens/icons/v4/src/&lt;category&gt;.mjs</code> (or a new module),
add its tier/verdict to <code>tiers.json</code>, merge its label keys into <code>locales/*.json</code>.</li>
<li>Flags: land <code>flags/src/flags.mjs</code> + <code>lib/flag-dsl.mjs</code> + <code>lib/flag-render.mjs</code> as a generator input alongside v4 (or as
<code>design-tokens/icons/flags/</code>), add the web/iOS/Android flag generators described above.</li>
<li>Bump the registry to <b>4.1.0</b> (additive ids → minor, per governance), run <code>npm run icons:v4</code>, <code>icons:v4:raster</code>,
<code>icons:v4:package</code>, <code>icons:v4:swift</code>, <code>icons:v4:android</code>, then <code>npm run icons:validate</code>.</li>
<li>Regenerate v4 catalog/report PDFs; add the CHANGELOG entry; delete the promoted modules from the proposal so it stays a delta.</li>
</ol>

<h2>Open decisions</h2>
<ul>
<li><b>Skeleton glyphs vs CSS skeletons.</b> Web already draws shimmer blocks in CSS; <code>placeholder.text/list/card</code> matter most on iOS/Android
and in empty-state illustrations. Keep all six, or keep avatar/plant/chart and drop the three pure skeletons?</li>
<li><b>Flag scope.</b> Starter set of ${c.flags}. If the picker is language-based rather than region-based, <code>flag.gb</code> vs <code>flag.us</code> for
"English" is a product decision (many apps show neither and use <code>utility.language</code> + text).</li>
<li><b>Flag shape.</b> Both shapes ship; the app should pick one per surface and stay with it (circles beside avatars, rectangles in a settings list).
Shipping both doubles the flag asset count — say so if you would rather keep only the circles.</li>
<li><b>Avatar count and defaults.</b> ${groups[2].entries.length} avatars is a picker, not a set of semantic ids — which one is the default for a new account,
and should the set be seeded per locale or per the user's first plant?</li>
<li><b>Avatar micro grade.</b> Interior detail (veins, stripes, slits) is dropped at 16/20 px by design, so at that size an avatar reads as its
silhouette. If avatars must be identifiable in a 16 px list row, that is a redraw, not a tuning.</li>
<li><b>Tier of <code>plant.pet.*</code> and <code>care.misting/rotating</code>.</b> Proposed P2 (library) until the species attributes / care types exist in the
data model; promote to P1 with authored micro grades when they ship.</li>
<li><b>Animation.</b> <code>status.loading.dots</code> is a static frame; a Lottie bounce (3 × 120 ms stagger) is a natural P0-style addition but out of
scope for a P1 status icon under DESIGN.md §7.</li>
</ul>

<h2>Appendix — build evidence</h2>
<table>
<tr><th>artifact</th><th>path</th></tr>
<tr><td>authored geometry</td><td><code>design-tokens/icons/v4.1-proposal/src/*.mjs</code>, <code>flags/src/flags.mjs</code></td></tr>
<tr><td>compiled registry / manifest</td><td><code>registry.proposal.json</code> (${registry.proposalHash.slice(0, 16)}…), <code>index.proposal.json</code></td></tr>
<tr><td>SVGs</td><td><code>svg/&lt;variant&gt;/&lt;id&gt;@&lt;size&gt;.svg</code> — ${(c.icons + c.flags) * 24} files (icons: outline/solid/duotone/multicolor; flags: color/mono/circle/circle.mono)</td></tr>
<tr><td>gates</td><td><code>npm run icons:proposal:check</code> (structural) · <code>npm run icons:proposal:raster</code></td></tr>
<tr><td>sheets</td><td><code>npm run icons:proposal:sheets</code> → <code>reports/v4-sheets/proposal/</code> (gitignored working artifacts)</td></tr>
<tr><td>review package</td><td><code>reports/plantim-icons-v4.1-proposal-catalog.html</code> · <code>…-catalog.pdf</code> · this report</td></tr>
</table>
</body></html>`;

const out = path.join(root, "reports/plantim-icons-v4.1-proposal-report.pdf");
const how = await htmlToPdf(html, out);
console.log(`Generated ${path.relative(root, out)} via ${how}.`);
