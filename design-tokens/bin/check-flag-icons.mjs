// Structural gate for the flag asset class (design-tokens/icons/flags).
//
// Flags do not go through the v4 icon gates — they have no outline/solid pair
// and no theme tokens — so they get their own equivalent guarantees: hash
// integrity, deterministic regeneration, source hygiene, geometry inside the
// flag box, canonical colours, a complete size set in every variant, a micro
// survivor per flag, and a localized accessible name in every shipped locale.
//
// Never weakened to get green — fix the flag instead.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { pathBounds } from "./lib/svg-path-bounds.mjs";
import { FLAG_VARIANTS, FLAG_COLOR_VARIANTS, FLAG_MONO_VARIANTS, CIRCLE_R } from "./lib/flag-render.mjs";

const root = path.resolve(import.meta.dirname, "../..");
const flagsRoot = path.join(root, "design-tokens/icons/flags");
const errors = [];
const err = (m) => errors.push(m);

const registry = JSON.parse(fs.readFileSync(path.join(flagsRoot, "registry.flags.json"), "utf8"));
const index = JSON.parse(fs.readFileSync(path.join(flagsRoot, "index.flags.json"), "utf8"));
const sizesCfg = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/v4/sizes.json"), "utf8"));

// 1. hash integrity
{
  const { flagsHash, ...payload } = registry;
  const expected = crypto.createHash("sha256").update(JSON.stringify(payload)).digest("hex");
  if (flagsHash !== expected) err("registry.flags.json flagsHash mismatch");
  if (index.flagsHash !== flagsHash) err("index.flags.json hash != registry hash");
}

// 2. determinism (also catches stale SVGs)
{
  const res = spawnSync(process.execPath, [path.join(import.meta.dirname, "generate-flag-icons.mjs"), "--verify"], {
    stdio: ["ignore", "pipe", "pipe"],
  });
  if (res.status !== 0) err(`--verify failed: ${res.stderr.toString().trim() || res.stdout.toString().trim()}`);
}

// 3. source hygiene
{
  const srcRoot = path.join(flagsRoot, "src");
  for (const f of fs.readdirSync(srcRoot).filter((f) => f.endsWith(".mjs"))) {
    const s = fs.readFileSync(path.join(srcRoot, f), "utf8");
    if (/Date\.now|Math\.random|new Date\(/.test(s)) err(`src/${f}: nondeterministic API used`);
  }
}

// 4. per-flag geometry, colours and locales
const NUM = /-?\d*\.?\d+/g;
const sizes = Object.keys(sizesCfg.sizes).map(Number);
const localeRoot = path.join(root, "locales");
const locales = Object.fromEntries(
  fs.readdirSync(localeRoot).filter((f) => f.endsWith(".json")).map((f) => [f, JSON.parse(fs.readFileSync(path.join(localeRoot, f), "utf8"))]),
);
const readPath = (object, key) => key.split(".").reduce((v, p) => v?.[p], object);

const checkNodes = (id, where, nodes) => {
  for (const node of nodes) {
    if (node.attrs.d) {
      try {
        const b = pathBounds(node.attrs.d);
        for (const m of b.badDecimals) err(`${id}/${where}: >3 decimals (${m})`);
        if (b.minX < -1 || b.maxX > 25 || b.minY < -1 || b.maxY > 25) err(`${id}/${where}: path exceeds canvas`);
      } catch (e) {
        err(`${id}/${where}: ${e.message}`);
      }
    }
    for (const [k, v] of Object.entries(node.attrs)) {
      if (k === "d") continue;
      for (const m of String(v).match(NUM) ?? []) {
        if (m.includes(".") && m.split(".")[1].length > 3) err(`${id}/${where}: >3 decimals (${m})`);
        const n = Number(m);
        if (n < -1 || n > 25) err(`${id}/${where}: ${k}=${m} outside canvas`);
      }
    }
  }
};

let svgCount = 0;
for (const [id, f] of Object.entries(registry.flags)) {
  if (!/^flag\.[a-z]{2,8}$/.test(id)) err(`${id}: flag ids are flag.<iso-3166-1-alpha-2> (plus flag.eu / flag.unknown)`);
  if (f.accessibility !== "semantic" || !f.accessibilityLabelKey) err(`${id}: flags are semantic and need a label key`);
  for (const [file, locale] of Object.entries(locales)) {
    if (typeof readPath(locale, f.accessibilityLabelKey) !== "string") err(`${id}: ${f.accessibilityLabelKey} missing from locales/${file}`);
  }
  if (!f.layers?.some((l) => l.micro)) err(`${id}: no layer survives the micro grade`);

  for (const l of f.layers ?? []) {
    for (const s of l.shapes) {
      const nums = Object.entries(s).filter(([k]) => !["type", "fill", "stroke", "d"].includes(k)).map(([, v]) => Number(v));
      for (const n of nums) if (!Number.isFinite(n) || n < -2 || n > 22) err(`${id}/${l.name}: coordinate ${n} outside the 20×14 flag box`);
      for (const c of [s.fill, s.stroke]) if (c && !/^#[0-9A-F]{6}$/.test(c)) err(`${id}/${l.name}: colour ${c} is not uppercase 6-digit hex`);
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
  for (const [gname, nodes] of Object.entries(f.mono ?? {})) checkNodes(id, `mono.${gname}`, nodes);

  for (const variant of FLAG_VARIANTS) {
    for (const size of sizes) {
      const rel = path.join("svg", variant, `${id}@${size}.svg`);
      const p = path.join(flagsRoot, rel);
      if (!fs.existsSync(p)) {
        err(`missing ${rel}`);
        continue;
      }
      svgCount += 1;
      const svg = fs.readFileSync(p, "utf8");
      const grade = sizesCfg.sizes[String(size)];
      const sw = sizesCfg.grades[grade].strokeWidth;
      if (!svg.includes(`viewBox="0 0 24 24"`)) err(`${rel}: bad viewBox`);
      if (!svg.includes(`width="${size}"`)) err(`${rel}: width != ${size}`);
      if (FLAG_COLOR_VARIANTS.includes(variant)) {
        if (!svg.includes("<clipPath") || !svg.includes('data-role="border"')) err(`${rel}: colour shape needs the clip and the hairline border`);
        if (svg.includes("currentColor")) err(`${rel}: flag colours are fixed; currentColor is not allowed`);
        for (const m of svg.match(/(?:fill|stroke)="#[0-9A-Fa-f]{3,8}"/g) ?? []) {
          if (!/#[0-9A-F]{6}"$/.test(m)) err(`${rel}: non-canonical colour ${m}`);
        }
      } else {
        if (!svg.includes(`stroke-width="${sw}"`)) err(`${rel}: stroke-width != ${sw} (grade ${grade})`);
        if (!svg.includes('stroke="currentColor"')) err(`${rel}: mono shape must stroke currentColor`);
        if (!svg.includes(`stroke-linecap="round"`) || !svg.includes(`stroke-linejoin="round"`)) err(`${rel}: caps/joins not round`);
        if (FLAG_MONO_VARIANTS.includes(variant) && variant.startsWith("circle") && !svg.includes(`r="${CIRCLE_R}"`)) {
          err(`${rel}: circular mono is missing its disc outline`);
        }
      }
    }
  }
}

// 5. index parity
{
  const idxIds = new Set(index.flags.map((f) => f.id));
  for (const id of Object.keys(registry.flags)) if (!idxIds.has(id)) err(`${id}: missing from index.flags.json`);
  if (idxIds.size !== registry.counts.total) err(`index count ${idxIds.size} != registry total ${registry.counts.total}`);
}

// 6. flags must never collide with a semantic icon id
{
  const v4 = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/v4/registry.v4.json"), "utf8"));
  for (const id of Object.keys(registry.flags)) if (v4.icons[id]) err(`${id}: collides with a v4 semantic icon id`);
}

if (errors.length) {
  console.error(`flag check FAILED (${errors.length}):`);
  for (const e of errors.slice(0, 50)) console.error(`  - ${e}`);
  if (errors.length > 50) console.error(`  … and ${errors.length - 50} more`);
  process.exit(1);
}
console.log(
  `Flag check passed: ${Object.keys(registry.flags).length} flags, ${svgCount} SVGs, hash OK, deterministic, localized.`,
);
