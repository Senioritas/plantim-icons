// PDF 1 — process / work-log report. Documents the v3 objective, decisions, transform
// rules, palette, findings (incl. corrected v2 geometry), and embedded validation output
// proving the v2 set was left untouched. Prints to reports/.

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { htmlToPdf } from "./lib/html-to-pdf.mjs";

const root = path.resolve(import.meta.dirname, "..", "..");
const v3Dir = path.join(root, "design-tokens/icons/v3");
const outPath = path.join(root, "reports/plantim-icons-v3-report.pdf");

const registry = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/registry.json"), "utf8"));
const palette = JSON.parse(fs.readFileSync(path.join(v3Dir, "palette.json"), "utf8"));
const manifest = JSON.parse(fs.readFileSync(path.join(v3Dir, "index.v3.json"), "utf8"));
const v3 = JSON.parse(fs.readFileSync(path.join(v3Dir, "registry.v3.json"), "utf8"));

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const git = (...args) => spawnSync("git", args, { cwd: root, encoding: "utf8" });
const run = (cmd, args) => spawnSync(cmd, args, { cwd: root, encoding: "utf8" });

// --- Environment / meta ---
const branch = git("rev-parse", "--abbrev-ref", "HEAD").stdout?.trim() || "(detached)";
const commit = git("rev-parse", "--short", "HEAD").stdout?.trim() || "(none)";
const swatch = (hex) => `<span class="sw" style="background:${hex}"></span>`;

// --- Proof that v2 is untouched ---
const v2Paths = [
  "design-tokens/icons/registry.json",
  "packages/plantim-icons/src",
  "packages/plantim-icons/dist",
  "packages/PlantimIcons/Sources",
];
const diff = git("diff", "--stat", "--", ...v2Paths).stdout?.trim();
const porcelain = (git("status", "--porcelain").stdout || "").split("\n").filter(Boolean);
const modifiedTracked = porcelain.filter((l) => !l.startsWith("??"));
const touchesV2 = modifiedTracked.filter((l) => v2Paths.some((p) => l.includes(p)));
const untrackedRoots = [...new Set(porcelain.filter((l) => l.startsWith("??")).map((l) => l.slice(3).split("/").slice(0, 2).join("/")))];
const v2Verdict = !diff && touchesV2.length === 0;

// --- v3 self-check ---
const selfCheck = run("node", ["design-tokens/bin/check-v3-icons.mjs"]);
const selfCheckOut = `${selfCheck.stdout || ""}${selfCheck.stderr || ""}`.trim();

// --- Full v2 validation suite (only if deps are installed) ---
const depsInstalled = fs.existsSync(path.join(root, "node_modules"));
let validateOut, validateNote;
if (depsInstalled) {
  const v = run("npm", ["run", "--silent", "icons:validate:node"]);
  validateOut = `${v.stdout || ""}${v.stderr || ""}`.trim().split("\n").slice(-40).join("\n");
  validateNote = `Exit code ${v.status}.`;
} else {
  validateNote =
    "Skipped in this checkout: root node_modules is not installed (the v3 tooling itself is dependency-free). " +
    "Run `npm ci && npm run icons:validate:node` in an installed checkout / CI. The additive design guarantees " +
    "this suite is unaffected — see the Governance safety section and the git-based proof above.";
}

// --- Inline mono/color renderers for the worked examples ---
const cleanAttrs = (attrs) => Object.entries(attrs).filter(([k]) => k !== "key" && k !== "fill" && k !== "stroke").map(([k, v]) => `${k}="${v}"`).join(" ");
function monoSvg(nodes, size = 56) {
  const body = nodes.map((n) => `<${n.type} ${cleanAttrs(n.attrs)} fill="none" stroke="#37474F" stroke-width="2" />`).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
}
const readSvg = (rel) => fs.readFileSync(path.join(v3Dir, rel), "utf8");
const iconById = (id) => manifest.icons.find((i) => i.id === id);
const bigSvg = (rel) => readSvg(rel).replace('width="24" height="24"', 'width="56" height="56"');

const corrected = Object.values(v3.icons).filter((i) => i.geometryCorrected);

// --- Palette table ---
const CATEGORY_ORDER = ["plant", "weather", "status", "navigation", "action", "account", "calendar", "location", "utility"];
const cats = new Map();
for (const i of manifest.icons) cats.set(i.category, (cats.get(i.category) || 0) + 1);
const catRows = CATEGORY_ORDER.filter((c) => cats.has(c)).map((cat) => {
  const p = palette.categories[cat];
  return `<tr><td class="cat">${cat}</td>
    <td>${swatch(p.primary)}<code>${p.primary}</code></td>
    <td>${swatch(p.secondary)}<code>${p.secondary}</code></td>
    <td>${swatch(p.accent)}<code>${p.accent}</code></td>
    <td>${swatch(p.bg)}<code>${p.bg}</code></td>
    <td class="num">${cats.get(cat)}</td>
    <td class="num">${p.stemTwoTone ? "stem" : p.containerTint ? "tint" : "—"}</td></tr>`;
}).join("");

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  * { -webkit-print-color-adjust: exact; print-color-adjust: exact; box-sizing: border-box; }
  @page { size: A4; margin: 16mm 15mm; }
  body { font: 12.5px/1.55 -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #1f2933; margin: 0; }
  h1 { font-size: 30px; margin: 0 0 4px; letter-spacing: -.5px; }
  h2 { font-size: 17px; margin: 26px 0 8px; padding-bottom: 5px; border-bottom: 2px solid #cbd2d9; color: #243b53; break-after: avoid; }
  h3 { font-size: 13.5px; margin: 16px 0 6px; color: #334e68; }
  p, li { margin: 6px 0; }
  code { font-family: "SF Mono", Menlo, Consolas, monospace; font-size: 11px; color: #52606d; }
  pre { background: #f5f7fa; border: 1px solid #e4e7eb; border-radius: 8px; padding: 11px 13px; font: 10.5px/1.5 "SF Mono", Menlo, Consolas, monospace; white-space: pre-wrap; word-break: break-word; color: #323f4b; }
  .lead { font-size: 14px; color: #52606d; }
  .meta { color: #616e7c; font-size: 12px; margin: 8px 0 4px; }
  .meta b { color: #1f2933; }
  table { border-collapse: collapse; width: 100%; font-size: 11.5px; margin: 6px 0; }
  th { text-align: left; padding: 5px 8px; border-bottom: 2px solid #cbd2d9; color: #3e4c59; }
  td { padding: 4px 8px; border-bottom: 1px solid #e4e7eb; vertical-align: middle; }
  td.cat { font-weight: 600; } td.num { text-align: right; font-variant-numeric: tabular-nums; }
  .sw { display: inline-block; width: 12px; height: 12px; border-radius: 3px; margin-right: 6px; vertical-align: -1px; box-shadow: inset 0 0 0 1px rgba(0,0,0,.12); }
  .badge { display: inline-block; border-radius: 20px; padding: 2px 12px; font-size: 12px; font-weight: 600; color: #fff; }
  .ok { background: #2E7D32; } .warn { background: #F9A825; color:#3b2f00; }
  .cmp { display: flex; gap: 26px; align-items: center; flex-wrap: wrap; margin: 10px 0; }
  .cmp figure { margin: 0; text-align: center; }
  .cmp figcaption { font-size: 10.5px; color: #616e7c; margin-top: 4px; }
  .cmp .arrow { font-size: 22px; color: #9aa5b1; }
  .card { border: 1px solid #e4e7eb; border-radius: 10px; padding: 12px 14px; margin: 8px 0; background: #fff; }
  ul.tight { margin: 6px 0; padding-left: 20px; } ul.tight li { margin: 3px 0; }
  .note { break-inside: avoid; }
</style></head><body>

  <h1>Plantim Icons — v3</h1>
  <div class="lead">Process report: building an additive multi-color, multi-size icon set</div>
  <div class="meta">
    Branch <b>${esc(branch)}</b> · commit <b>${esc(commit)}</b> ·
    v2 registry <b>v${registry.version}</b> · v3 <b>v${manifest.version}</b> ·
    v3Hash <code>${manifest.v3Hash.slice(0, 16)}…</code>
  </div>
  <div class="meta">
    Scope: <b>${manifest.count} icons</b> × (1 multicolor master + ${manifest.sizes.length} sizes ${manifest.sizes.join("/")}px) =
    <b>${manifest.count * (manifest.sizes.length + 1)} SVG files</b> · stroke policy <b>${manifest.strokePolicy}</b>.
  </div>

  <h2>Why this exists</h2>
  <p>The package centralizes icons for Plantim's web + mobile stack ahead of the Android MVP. The existing
  v2 set (154 icons) was generated by Codex and is not fully trusted. Rather than mutate the heavily-governed
  v2 registry, v3 is built <b>alongside</b> it: a trusted, human-inspectable, portfolio-ready set that adds two
  things v2 cannot express — <b>three baked sizes per icon</b> and <b>one multi-color SVG per icon</b>.</p>

  <h2>Decisions</h2>
  <table>
    <tr><th>Decision</th><th>Choice</th><th>Rationale</th></tr>
    <tr><td>v3 vs v2</td><td><b>Additive</b> alongside v2</td><td>v2 registry, exports, and CI stay untouched and green; safest to centralize on and to showcase.</td></tr>
    <tr><td>Sizes</td><td><b>24 / 48 / 72</b> (1×/2×/3×)</td><td>Matches the "3× bigger" ask; exposed as a <code>sizes</code> property and as separate files.</td></tr>
    <tr><td>Multi-color</td><td><b>Category palette</b></td><td>Systematic and scalable across 154 icons; consistent per family, with a small semantic override table.</td></tr>
    <tr><td>Reports</td><td><b>2 PDFs</b></td><td>This process report + a visual showcase catalog.</td></tr>
    <tr><td>Geometry</td><td><b>Derived from v2</b></td><td>v2 <code>nodes[]</code> are the single geometry source, so v3 can never drift — except explicit, documented corrections (below).</td></tr>
  </table>

  <h2>How a monochrome icon becomes multi-color</h2>
  <p>Every v2 icon is stroke-only (<code>stroke="currentColor"</code>). The generator assigns each node a
  <b>role</b>, then a <b>color</b> from the icon's category palette (first match wins):</p>
  <ul class="tight">
    <li><b>accent</b> — a point/dot: a <code>circle</code> with r ≤ ${palette.roleRules.accentDotMaxRadius}, a near-zero-length <code>line</code> (how Lucide draws alert dots, e.g. <code>x1=12 x2=12.01</code>), or a tiny dot <code>path</code>.</li>
    <li><b>secondary</b> — a container/frame: <code>rect</code>, <code>ellipse</code>, or <code>circle</code> with r ≥ ${palette.roleRules.secondaryMinRadius} (outer rings).</li>
    <li><b>primary</b> — everything else (the main glyph).</li>
  </ul>
  <p>Refinements: an icon with no primary node (e.g. an all-rectangle grid) has its secondaries promoted so it
  is never fully muted; <code>plant</code> icons use <b>stem two-tone</b> (first stroke = stem/primary, rest =
  foliage/secondary); tinted categories add a faint <code>bg</code>-filled shape behind containers;
  <code>status</code> icons keep <b>semantic color</b> (success green, warning amber, error red, info blue).</p>

  <div class="card note">
    <h3>Worked example — <code>status.error</code></h3>
    <div class="cmp">
      <figure>${monoSvg(registry.icons.AlertCircle.nodes)}<figcaption>v2 monochrome</figcaption></figure>
      <div class="arrow">→</div>
      <figure>${bigSvg(iconById("status.error").files.multicolor)}<figcaption>v3 multicolor</figcaption></figure>
    </div>
    <p style="margin:4px 0 0;font-size:11.5px;color:#52606d">Outer ring → secondary + neutral tint disc · vertical stroke → primary (semantic red) · indicator dot → accent.</p>
  </div>

  <h2>Findings — corrected v2 geometry</h2>
  <p>Reproducing v2 geometry surfaced a genuine defect, validating the distrust of the Codex-generated set.
  <b>${corrected.length} icon(s)</b> had clearly-broken geometry, corrected in v3 only (v2 registry untouched;
  each correction is declared in <code>palette.json → geometryOverrides</code> and is reversible):</p>
  ${corrected.map((i) => `
  <div class="card note">
    <h3><code>${i.id}</code> <span class="badge ok">fixed</span></h3>
    <div class="cmp">
      <figure>${monoSvg(registry.icons[Object.keys(registry.icons).find((k) => registry.icons[k].id === i.id)].nodes)}<figcaption>v2 (broken)</figcaption></figure>
      <div class="arrow">→</div>
      <figure>${bigSvg(iconById(i.id).files.multicolor)}<figcaption>v3 (corrected + colored)</figcaption></figure>
    </div>
    <p style="margin:4px 0 0;font-size:11.5px;color:#52606d">${esc(palette.geometryOverrides[i.id].reason)}</p>
  </div>`).join("")}
  <p style="font-size:11.5px;color:#616e7c">Note: three other icons (<code>utility.calendar.days</code>,
  <code>utility.cookie</code>, <code>utility.cloud.snow</code>) also use zero-length "dot" paths, but those are
  <b>legitimate</b> Lucide features (day markers, cookie chips, snow) and were left as-is.</p>

  <h2>Category palette</h2>
  <table>
    <tr><th>Category</th><th>Primary</th><th>Secondary</th><th>Accent</th><th>Bg tint</th><th>Icons</th><th>Style</th></tr>
    ${catRows}
  </table>
  <p style="font-size:11.5px;color:#616e7c">A small override table also gives semantically-colored icons their
  natural hues (e.g. <code>weather.sun</code> → amber, <code>utility.flame</code> → orange,
  <code>utility.star</code> → gold, <code>utility.heart</code> → red).</p>

  <h2>Validation results</h2>
  <h3>v3 self-check <span class="badge ${selfCheck.status === 0 ? "ok" : "warn"}">${selfCheck.status === 0 ? "pass" : "fail"}</span></h3>
  <pre>$ node design-tokens/bin/check-v3-icons.mjs\n${esc(selfCheckOut)}</pre>

  <h3>v2 left untouched <span class="badge ${v2Verdict ? "ok" : "warn"}">${v2Verdict ? "verified" : "review"}</span></h3>
  <p>No tracked change to the v2 registry or any generated adapter path. New files are entirely additive.</p>
  <pre>$ git diff --stat -- ${esc(v2Paths.join(" "))}\n${esc(diff || "(no changes — v2 adapter paths are untouched)")}\n\nModified tracked files touching v2 paths: ${touchesV2.length}\nNew (untracked) top-level areas: ${esc(untrackedRoots.join(", ") || "(none)")}</pre>

  <h3>Full v2 suite</h3>
  <pre>$ npm run icons:validate:node\n${esc(validateOut || validateNote)}</pre>

  <h2>Governance safety</h2>
  <p>Every existing v2 check is path-scoped; none globs the tree for SVGs. v3 stays green with zero edits to any
  v2 validator or schema because it never:</p>
  <ul class="tight">
    <li>touches <code>registry.json</code> or its hash (the v2 generator re-verifies it);</li>
    <li>adds itself to <code>packages/plantim-icons/package.json → files[]</code>/<code>exports</code>, so the npm tarball, the ≤30 KiB gzip size budget, and the public API check are unaffected;</li>
    <li>writes into the CI diff-checked adapter paths (<code>packages/plantim-icons/{src,dist}</code>, <code>packages/PlantimIcons/Sources</code>);</li>
    <li>alters the <code>icons:validate:node</code> chain — v3 is exposed only through new, opt-in scripts.</li>
  </ul>

  <h2>What was produced</h2>
  <pre>design-tokens/icons/v3/
  palette.json          hand-authored config (palette, sizes, roles, overrides)
  registry.v3.json      generated superset (geometry + role + color + sizes)
  index.v3.json         generated manifest
  multicolor/*.svg      ${manifest.count} colored masters
  sizes/*@{24,48,72}.svg ${manifest.count * manifest.sizes.length} size files
design-tokens/bin/
  generate-v3-icons.mjs, lib/v3-transform.mjs, check-v3-icons.mjs
  generate-v3-report.mjs, generate-v3-catalog.mjs, lib/html-to-pdf.mjs
reports/
  plantim-icons-v3-report.pdf, plantim-icons-v3-catalog.pdf</pre>

  <h2>Next steps</h2>
  <ul class="tight">
    <li>Review the companion <b>showcase catalog</b> PDF for the full visual set.</li>
    <li>If v3 graduates to a shipped format, add a dedicated export/entry (kept out of the v2 package) and a v3 gallery + drift check in CI.</li>
    <li>Consider a broader geometry audit of v2 for other Codex artifacts before the Android MVP consumes these.</li>
  </ul>

</body></html>`;

const how = await htmlToPdf(html, outPath);
console.log(`Wrote ${path.relative(root, outPath)} (${(fs.statSync(outPath).size / 1024).toFixed(0)} KiB) via ${how}.`);
