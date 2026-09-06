// Structural gates for the v4 icon set. Fast, dependency-free checks that run
// on every generation; raster gates (solid gaps, silhouette IoU) live in
// check-v4-raster.mjs. Never weakened to get green — fix the icon instead.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";

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

/** Walk a path's commands tracking absolute position; returns {minX,maxX,minY,maxY,badDecimals}. */
function pathBounds(d) {
  const tokens = d.match(/[a-zA-Z]|-?\d*\.?\d+/g) ?? [];
  let i = 0;
  let cmd = "";
  let x = 0, y = 0, sx = 0, sy = 0;
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  const badDecimals = [];
  const num = () => {
    const t = tokens[i++];
    if (t === undefined || /[a-zA-Z]/.test(t)) throw new Error(`path parse error in "${d}"`);
    if (t.includes(".") && t.split(".")[1].length > 3) badDecimals.push(t);
    return Number(t);
  };
  const track = (px, py) => {
    minX = Math.min(minX, px); maxX = Math.max(maxX, px);
    minY = Math.min(minY, py); maxY = Math.max(maxY, py);
  };
  track(0, 0); minX = Infinity; maxX = -Infinity; minY = Infinity; maxY = -Infinity;
  while (i < tokens.length) {
    if (/[a-zA-Z]/.test(tokens[i])) cmd = tokens[i++];
    const rel = cmd === cmd.toLowerCase() && cmd !== "z" && cmd !== "Z";
    switch (cmd.toUpperCase()) {
      case "M": case "L": {
        const nx = num(), ny = num();
        x = rel ? x + nx : nx; y = rel ? y + ny : ny;
        if (cmd.toUpperCase() === "M") { sx = x; sy = y; cmd = rel ? "l" : "L"; }
        track(x, y);
        break;
      }
      case "H": { const nx = num(); x = rel ? x + nx : nx; track(x, y); break; }
      case "V": { const ny = num(); y = rel ? y + ny : ny; track(x, y); break; }
      case "C": {
        const c1x = num(), c1y = num(), c2x = num(), c2y = num(), ex = num(), ey = num();
        const ax1 = rel ? x + c1x : c1x, ay1 = rel ? y + c1y : c1y;
        const ax2 = rel ? x + c2x : c2x, ay2 = rel ? y + c2y : c2y;
        x = rel ? x + ex : ex; y = rel ? y + ey : ey;
        track(ax1, ay1); track(ax2, ay2); track(x, y);
        break;
      }
      case "S": case "Q": {
        const cx = num(), cy = num(), ex = num(), ey = num();
        track(rel ? x + cx : cx, rel ? y + cy : cy);
        x = rel ? x + ex : ex; y = rel ? y + ey : ey;
        track(x, y);
        break;
      }
      case "T": { const ex = num(), ey = num(); x = rel ? x + ex : ex; y = rel ? y + ey : ey; track(x, y); break; }
      case "A": {
        const rx = num(), ry = num(); num(); num(); num();
        const ex = num(), ey = num();
        const px = x, py = y;
        x = rel ? x + ex : ex; y = rel ? y + ey : ey;
        // approximate arc excursion by endpoint box inflated by the radii
        track(Math.min(px, x) - rx, Math.min(py, y) - ry);
        track(Math.max(px, x) + rx, Math.max(py, y) + ry);
        track(x, y);
        break;
      }
      case "Z": x = sx; y = sy; break;
      default: throw new Error(`unsupported path command "${cmd}" in "${d}"`);
    }
  }
  return { minX, maxX, minY, maxY, badDecimals };
}
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
        if (!svg.includes(`fill-rule="evenodd"`)) err(`${rel}: solid missing evenodd`);
        if (svg.includes("stroke-width")) err(`${rel}: solid must not stroke`);
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
