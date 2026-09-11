// Structural gates for the v4 icon set. Fast, dependency-free checks that run
// on every generation; raster gates (solid gaps, silhouette IoU) live in
// check-v4-raster.mjs. Never weakened to get green — fix the icon instead.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { pathBounds } from "./lib/svg-path-bounds.mjs";

const root = path.resolve(import.meta.dirname, "../..");
const v4Root = path.join(root, "design-tokens/icons/v4");
const errors = [];
const err = (m) => errors.push(m);

const registry = JSON.parse(fs.readFileSync(path.join(v4Root, "registry.v4.json"), "utf8"));
const index = JSON.parse(fs.readFileSync(path.join(v4Root, "index.v4.json"), "utf8"));
const sizesCfg = JSON.parse(fs.readFileSync(path.join(v4Root, "sizes.json"), "utf8"));
const tokens = JSON.parse(fs.readFileSync(path.join(v4Root, "tokens.json"), "utf8"));

// 1. hash integrity
{
  const { v4Hash, ...payload } = registry;
  const expected = crypto.createHash("sha256").update(JSON.stringify(payload)).digest("hex");
  if (v4Hash !== expected) err("registry.v4.json v4Hash mismatch");
  if (index.v4Hash !== v4Hash) err("index.v4.json hash != registry hash");
}

// 2. determinism: regenerate in memory and compare (also catches stale SVGs)
{
  const res = spawnSync(process.execPath, [path.join(import.meta.dirname, "generate-v4-icons.mjs"), "--verify"], {
    stdio: ["ignore", "pipe", "pipe"],
  });
  if (res.status !== 0) err(`--verify failed: ${res.stderr.toString().trim() || res.stdout.toString().trim()}`);
}

// 3. authored-source hygiene: no Date.now/Math.random, no near-zero dashes
{
  const srcRoot = path.join(v4Root, "src");
  for (const f of fs.readdirSync(srcRoot).filter((f) => f.endsWith(".mjs"))) {
    const s = fs.readFileSync(path.join(srcRoot, f), "utf8");
    if (/Date\.now|Math\.random|new Date\(/.test(s)) err(`${f}: nondeterministic API used`);
    if (/[hv]\s*-?\.?0*1(?![\d.])/.test(s) && /[hv]\s*\.01/.test(s)) err(`${f}: near-zero dash (h.01) — use a real dot`);
  }
}

// 4. per-icon structural checks
const NUM = /-?\d*\.?\d+/g;

const sizes = Object.keys(sizesCfg.sizes).map(Number);
const variants = ["outline", "solid", "duotone", "multicolor"];
let svgCount = 0;
for (const [id, icon] of Object.entries(registry.icons)) {
  // tiers/verdicts sanity
  if (!["P0", "P1", "P2"].includes(icon.tier)) err(`${id}: bad tier`);
  // a11y
  if ((icon.accessibility === "status" || icon.accessibility === "semantic") && !icon.accessibilityLabelKey) {
    err(`${id}: ${icon.accessibility} icon missing accessibilityLabelKey`);
  }
  // layer identity across variants is structural (same registry geometry) — verify
  // multicolor/duotone reference real layers
  const layerNames = new Set(icon.grades.base.layers.map((l) => l.name));
  for (const n of Object.keys(icon.variants.multicolor ?? {})) {
    if (!layerNames.has(n)) err(`${id}: multicolor maps unknown layer ${n}`);
  }
  for (const n of icon.variants.duotone?.primary ?? []) {
    if (!layerNames.has(n)) err(`${id}: duotone primary unknown layer ${n}`);
  }
  // token refs resolve
  for (const t of Object.values(icon.variants.multicolor ?? {})) {
    if (!tokens.roles[t]) err(`${id}: multicolor token ${t} not in tokens.json`);
  }
  // geometry bounds + decimal clamp (all grades; paths walked with absolute tracking)
  for (const [gname, grade] of Object.entries(icon.grades)) {
    for (const l of grade.layers) {
      for (const node of l.nodes) {
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
    }
  }
  // counters declared
  if (!Number.isInteger(icon.solid.base.counters)) err(`${id}: solid.base.counters missing`);
  // size-set completeness + stroke attrs on disk
  for (const variant of variants) {
    for (const size of sizes) {
      const rel = path.join("svg", variant, `${id}@${size}.svg`);
      const p = path.join(v4Root, rel);
      if (!fs.existsSync(p)) {
        err(`${id}: missing ${rel}`);
        continue;
      }
      svgCount += 1;
      const svg = fs.readFileSync(p, "utf8");
      if (!svg.includes(`viewBox="0 0 24 24"`)) err(`${rel}: bad viewBox`);
      if (!svg.includes(`width="${size}"`)) err(`${rel}: width != ${size}`);
      if (variant !== "solid") {
        const grade = sizesCfg.sizes[String(size)];
        const sw = sizesCfg.grades[grade].strokeWidth;
        if (!svg.includes(`stroke-width="${sw}"`)) err(`${rel}: stroke-width != ${sw} (grade ${grade})`);
        if (!svg.includes(`stroke-linecap="round"`) || !svg.includes(`stroke-linejoin="round"`)) {
          err(`${rel}: caps/joins not round`);
        }
      } else {
        const grade = sizesCfg.sizes[String(size)];
        const solidDef = icon.solid[grade] ?? icon.solid.base;
        if (solidDef.mode === "bold") {
          if (!svg.includes(`stroke-width="${solidDef.strokeWidth}"`)) {
            err(`${rel}: bold solid stroke-width != ${solidDef.strokeWidth}`);
          }
        } else {
          if (!svg.includes(`fill-rule="evenodd"`)) err(`${rel}: solid missing evenodd`);
          if (svg.includes("stroke-width")) err(`${rel}: solid must not stroke`);
        }
      }
    }
  }
}

// 5. id parity with tiers.json
{
  const tiersPath = path.join(v4Root, "tiers.json");
  if (fs.existsSync(tiersPath)) {
    const tiers = JSON.parse(fs.readFileSync(tiersPath, "utf8"));
    const tierIds = new Set(Object.keys(tiers.icons ?? {}));
    for (const id of Object.keys(registry.icons)) {
      if (!tierIds.has(id)) err(`${id}: not in tiers.json`);
    }
  }
}

if (errors.length) {
  console.error(`v4 structural check FAILED (${errors.length}):`);
  for (const e of errors.slice(0, 50)) console.error(`  - ${e}`);
  if (errors.length > 50) console.error(`  … and ${errors.length - 50} more`);
  process.exit(1);
}
console.log(
  `v4 structural check passed: ${Object.keys(registry.icons).length} icons, ${svgCount} SVGs, hash OK, deterministic.`,
);
