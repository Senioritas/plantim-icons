// Structural gate for the v4.1 proposal — the v4 checks (hash integrity,
// determinism, source hygiene, bounds/decimals, stroke discipline, size-set
// completeness, a11y keys, token refs) applied to design-tokens/icons/
// v4.1-proposal, plus flag-specific checks (clip geometry, hex colors, mono
// stroke, micro survivors) and the "ids must be new" rule.
//
//   node design-tokens/bin/check-proposal-icons.mjs            structural only (dependency-free)
//   node design-tokens/bin/check-proposal-icons.mjs --raster   + flood-fill counters / silhouette IoU via Playwright

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { pathBounds } from "./lib/svg-path-bounds.mjs";
import { FLAG_VARIANTS, FLAG_COLOR_VARIANTS, FLAG_MONO_VARIANTS } from "./lib/flag-render.mjs";

const root = path.resolve(import.meta.dirname, "../..");
const v4Root = path.join(root, "design-tokens/icons/v4");
const propRoot = path.join(root, "design-tokens/icons/v4.1-proposal");
const raster = process.argv.includes("--raster");
const errors = [];
const err = (m) => errors.push(m);

const registry = JSON.parse(fs.readFileSync(path.join(propRoot, "registry.proposal.json"), "utf8"));
const index = JSON.parse(fs.readFileSync(path.join(propRoot, "index.proposal.json"), "utf8"));
const sizesCfg = JSON.parse(fs.readFileSync(path.join(v4Root, "sizes.json"), "utf8"));
const tokens = JSON.parse(fs.readFileSync(path.join(v4Root, "tokens.json"), "utf8"));
const v4Registry = JSON.parse(fs.readFileSync(path.join(v4Root, "registry.v4.json"), "utf8"));

// 1. hash integrity + base parity with the shipped v4
{
  const { proposalHash, ...payload } = registry;
  const expected = crypto.createHash("sha256").update(JSON.stringify(payload)).digest("hex");
  if (proposalHash !== expected) err("registry.proposal.json proposalHash mismatch");
  if (index.proposalHash !== proposalHash) err("index.proposal.json hash != registry hash");
  if (registry.derivedFrom.v4Hash !== v4Registry.v4Hash) err("proposal derivedFrom.v4Hash != current v4Hash — regenerate the proposal");
}

// 2. determinism (also catches stale SVGs)
{
  const res = spawnSync(process.execPath, [path.join(import.meta.dirname, "generate-proposal-icons.mjs"), "--verify"], {
    stdio: ["ignore", "pipe", "pipe"],
  });
  if (res.status !== 0) err(`--verify failed: ${res.stderr.toString().trim() || res.stdout.toString().trim()}`);
}

// 3. source hygiene
for (const dir of ["src", "flags/src"]) {
  const d = path.join(propRoot, dir);
  for (const f of fs.readdirSync(d).filter((f) => f.endsWith(".mjs"))) {
    const s = fs.readFileSync(path.join(d, f), "utf8");
    if (/Date\.now|Math\.random|new Date\(/.test(s)) err(`${dir}/${f}: nondeterministic API used`);
    if (/[hv]\s*\.01/.test(s)) err(`${dir}/${f}: near-zero dash (h.01) — use a real dot`);
  }
}

// 4. per-icon structural checks (mirrors check-v4-icons.mjs §4)
const NUM = /-?\d*\.?\d+/g;
const sizes = Object.keys(sizesCfg.sizes).map(Number);
let svgCount = 0;
const checkSvgFile = (rel, size, variant, solidDef) => {
  const p = path.join(propRoot, rel);
  if (!fs.existsSync(p)) return err(`missing ${rel}`);
  svgCount += 1;
  const svg = fs.readFileSync(p, "utf8");
  if (!svg.includes(`viewBox="0 0 24 24"`)) err(`${rel}: bad viewBox`);
  if (!svg.includes(`width="${size}"`)) err(`${rel}: width != ${size}`);
  const grade = sizesCfg.sizes[String(size)];
  const sw = sizesCfg.grades[grade].strokeWidth;
  if (variant === "solid") {
    if (solidDef.mode === "bold") {
      if (!svg.includes(`stroke-width="${solidDef.strokeWidth}"`)) err(`${rel}: bold solid stroke-width != ${solidDef.strokeWidth}`);
    } else {
      if (!svg.includes(`fill-rule="evenodd"`)) err(`${rel}: solid missing evenodd`);
      if (svg.includes("stroke-width")) err(`${rel}: solid must not stroke`);
    }
  } else if (FLAG_COLOR_VARIANTS.includes(variant)) {
    if (!svg.includes("<clipPath") || !svg.includes('data-role="border"')) err(`${rel}: flag ${variant} variant needs clip + border`);
    if (svg.includes("currentColor")) err(`${rel}: flag colors are fixed; no currentColor`);
    for (const m of svg.match(/(?:fill|stroke)="#[0-9A-Fa-f]{3,8}"/g) ?? []) {
      if (!/#[0-9A-F]{6}"$/.test(m)) err(`${rel}: non-canonical color ${m}`);
    }
  } else {
    if (!svg.includes(`stroke-width="${sw}"`)) err(`${rel}: stroke-width != ${sw} (grade ${grade})`);
    if (!svg.includes(`stroke-linecap="round"`) || !svg.includes(`stroke-linejoin="round"`)) err(`${rel}: caps/joins not round`);
    if (FLAG_MONO_VARIANTS.includes(variant) && !svg.includes('stroke="currentColor"')) err(`${rel}: mono flag must stroke currentColor`);
    // A circular mono draws its partitions inside a scaled group, so their
    // stroke is divided by the scale; the disc itself carries the grade width.
    if (variant === "circle.mono" && !svg.includes('r="9.25"')) err(`${rel}: circle.mono missing the disc outline`);
  }
};
const checkNodes = (id, gname, nodes) => {
  for (const node of nodes) {
    if (node.attrs.d) {
      try {
        const b = pathBounds(node.attrs.d);
        for (const m of b.badDecimals) err(`${id}/${gname}: >3 decimals (${m})`);
        if (b.minX < -1 || b.maxX > 25 || b.minY < -1 || b.maxY > 25) {
          err(`${id}/${gname}: path exceeds canvas (x ${b.minX.toFixed(1)}..${b.maxX.toFixed(1)}, y ${b.minY.toFixed(1)}..${b.maxY.toFixed(1)})`);
        }
      } catch (e) {
        err(`${id}/${gname}: ${e.message}`);
      }
    }
    for (const [k, v] of Object.entries(node.attrs)) {
      if (k === "d") continue;
      for (const m of String(v).match(NUM) ?? []) {
        const n = Number(m);
        if (m.includes(".") && m.split(".")[1].length > 3) err(`${id}/${gname}: >3 decimals (${m})`);
        if (n < -1 || n > 25) err(`${id}/${gname}: ${k}=${m} outside canvas`);
      }
    }
  }
};

for (const [id, icon] of Object.entries(registry.icons)) {
  if (!["P1", "P2"].includes(icon.tier)) err(`${id}: proposal tiers are P1/P2 (P0 is reserved for shipped tab identities)`);
  if (icon.verdict !== "new") err(`${id}: proposal verdict must be "new"`);
  if (v4Registry.icons[id]) err(`${id}: already in v4`);
  if ((icon.accessibility === "status" || icon.accessibility === "semantic") && !icon.accessibilityLabelKey) {
    err(`${id}: ${icon.accessibility} icon missing accessibilityLabelKey`);
  }
  const layerNames = new Set(icon.grades.base.layers.map((l) => l.name));
  for (const n of Object.keys(icon.variants.multicolor ?? {})) if (!layerNames.has(n)) err(`${id}: multicolor maps unknown layer ${n}`);
  for (const n of icon.variants.duotone?.primary ?? []) if (!layerNames.has(n)) err(`${id}: duotone primary unknown layer ${n}`);
  for (const t of Object.values(icon.variants.multicolor ?? {})) if (!tokens.roles[t]) err(`${id}: multicolor token ${t} not in tokens.json`);
  for (const [gname, grade] of Object.entries(icon.grades)) for (const l of grade.layers) checkNodes(id, gname, l.nodes);
  if (!Number.isInteger(icon.solid.base.counters)) err(`${id}: solid.base.counters missing`);
  for (const variant of ["outline", "solid", "duotone", "multicolor"]) {
    for (const size of sizes) {
      const grade = sizesCfg.sizes[String(size)];
      checkSvgFile(path.join("svg", variant, `${id}@${size}.svg`), size, variant, icon.solid[grade] ?? icon.solid.base);
    }
  }
}

// 5. flags
for (const [id, f] of Object.entries(registry.flags)) {
  if (!/^flag\.[a-z]{2,8}$/.test(id)) err(`${id}: bad flag id`);
  if (f.accessibility !== "semantic" || !f.accessibilityLabelKey) err(`${id}: flags are semantic and need a label key`);
  if (!f.layers.some((l) => l.micro)) err(`${id}: no layer survives micro`);
  for (const l of f.layers) {
    for (const s of l.shapes) {
      const nums = Object.entries(s).filter(([k]) => !["type", "fill", "stroke", "d"].includes(k)).map(([, v]) => Number(v));
      for (const n of nums) if (!Number.isFinite(n) || n < -2 || n > 22) err(`${id}/${l.name}: shape coordinate ${n} outside the 20×14 box (+2 bleed)`);
      for (const c of [s.fill, s.stroke]) if (c && !/^#[0-9A-F]{6}$/.test(c)) err(`${id}/${l.name}: color ${c} not uppercase hex`);
      if (s.d) {
        try {
          const b = pathBounds(s.d);
          for (const m of b.badDecimals) err(`${id}/${l.name}: >3 decimals (${m})`);
          if (b.minX < -2 || b.maxX > 22 || b.minY < -2 || b.maxY > 16) err(`${id}/${l.name}: path leaves the flag box`);
        } catch (e) {
          err(`${id}/${l.name}: ${e.message}`);
        }
      }
    }
  }
  for (const [gname, nodes] of Object.entries(f.mono)) checkNodes(id, `mono.${gname}`, nodes);
  for (const variant of FLAG_VARIANTS) for (const size of sizes) checkSvgFile(path.join("svg", variant, `${id}@${size}.svg`), size, variant);
}

// 6. index parity
{
  const idxIds = new Set(index.icons.map((i) => i.id));
  for (const id of [...Object.keys(registry.icons), ...Object.keys(registry.flags)]) if (!idxIds.has(id)) err(`${id}: missing from index`);
  if (idxIds.size !== registry.counts.total) err(`index count ${idxIds.size} != registry total ${registry.counts.total}`);
}

// 7. optional raster gate (filled solids only; bold-mode solids share geometry by construction)
if (raster && !errors.length) {
  const { openRaster, closeRaster, rasterAlpha, toMask, enclosedIslands, silhouette, iou } = await import("./lib/svg-raster.mjs");
  const SIZE = 512;
  await openRaster();
  let checked = 0;
  for (const [id, icon] of Object.entries(registry.icons)) {
    if (icon.solid.base.mode === "bold") continue;
    const paint = (s) => s.replaceAll("currentColor", "#000");
    const o = toMask(await rasterAlpha(paint(fs.readFileSync(path.join(propRoot, "svg/outline", `${id}@24.svg`), "utf8")), SIZE));
    const s = toMask(await rasterAlpha(paint(fs.readFileSync(path.join(propRoot, "svg/solid", `${id}@24.svg`), "utf8")), SIZE));
    const islands = enclosedIslands(s, SIZE, 20);
    if (islands.length !== icon.solid.base.counters) {
      err(`${id}: solid has ${islands.length} enclosed island(s), declared ${icon.solid.base.counters} (${islands.map((i) => `${Math.round(i.cx)},${Math.round(i.cy)}`).join(" | ") || "none"})`);
    }
    const sim = iou(silhouette(o, SIZE), silhouette(s, SIZE));
    if (sim < 0.9) err(`${id}: outline/solid silhouette IoU ${sim.toFixed(3)} < 0.9`);
    checked += 1;
  }
  await closeRaster();
  console.log(`proposal raster gate: ${checked} filled solids checked.`);
}

if (errors.length) {
  console.error(`v4.1 proposal check FAILED (${errors.length}):`);
  for (const e of errors.slice(0, 60)) console.error(`  - ${e}`);
  if (errors.length > 60) console.error(`  … and ${errors.length - 60} more`);
  process.exit(1);
}
console.log(
  `v4.1 proposal check passed: ${registry.counts.icons} icons + ${registry.counts.flags} flags, ${svgCount} SVGs, hash OK, deterministic.`,
);
