// Structural gate for the brand-mark asset class (design-tokens/icons/brand).
//
// Brand marks do not go through the v4 icon gates — they have no outline/solid
// pair and no theme tokens — so they get their own equivalent guarantees: hash
// integrity, deterministic regeneration, source hygiene, geometry on the
// 24-grid, canonical owner colours, a complete size set in every variant,
// trademark attribution, and a localized accessible name in every locale.
//
// Never weakened to get green — fix the mark instead.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { pathBounds } from "./lib/svg-path-bounds.mjs";
import { BRAND_VARIANTS, brandSizes } from "./lib/brand-render.mjs";
import { BRAND_GRADES } from "./lib/brand-dsl.mjs";

const root = path.resolve(import.meta.dirname, "../..");
const brandRoot = path.join(root, "design-tokens/icons/brand");
const errors = [];
const err = (m) => errors.push(m);

const registry = JSON.parse(fs.readFileSync(path.join(brandRoot, "registry.brand.json"), "utf8"));
const index = JSON.parse(fs.readFileSync(path.join(brandRoot, "index.brand.json"), "utf8"));
const v4Sizes = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/v4/sizes.json"), "utf8"));
const sizes = brandSizes(v4Sizes);

// 1. hash integrity
{
  const { brandHash, ...payload } = registry;
  const expected = crypto.createHash("sha256").update(JSON.stringify(payload)).digest("hex");
  if (brandHash !== expected) err("registry.brand.json brandHash mismatch");
  if (index.brandHash !== brandHash) err("index.brand.json hash != registry hash");
  if (JSON.stringify(registry.sizes) !== JSON.stringify(sizes)) err("registry sizes drifted from v4 sizes + BRAND_LARGE_SIZES");
}

// 2. determinism (also catches stale SVGs)
{
  const res = spawnSync(process.execPath, [path.join(import.meta.dirname, "generate-brand-icons.mjs"), "--verify"], {
    stdio: ["ignore", "pipe", "pipe"],
  });
  if (res.status !== 0) err(`--verify failed: ${res.stderr.toString().trim() || res.stdout.toString().trim()}`);
}

// 3. source hygiene
{
  const srcRoot = path.join(brandRoot, "src");
  for (const f of fs.readdirSync(srcRoot).filter((f) => f.endsWith(".mjs"))) {
    const s = fs.readFileSync(path.join(srcRoot, f), "utf8");
    if (/Date\.now|Math\.random|new Date\(/.test(s)) err(`src/${f}: nondeterministic API used`);
  }
}

// 4. per-mark geometry, colours, attribution and locales
const localeRoot = path.join(root, "locales");
const locales = Object.fromEntries(
  fs.readdirSync(localeRoot).filter((f) => f.endsWith(".json")).map((f) => [f, JSON.parse(fs.readFileSync(path.join(localeRoot, f), "utf8"))]),
);
const readPath = (object, key) => key.split(".").reduce((v, p) => v?.[p], object);
const HEX = /^#[0-9A-F]{6}$/;

let svgCount = 0;
for (const [id, b] of Object.entries(registry.brands)) {
  if (!/^brand\.[a-z][a-z0-9]{1,23}$/.test(id)) err(`${id}: brand ids are brand.<lowercase name>`);
  if (b.accessibility !== "semantic" || !b.accessibilityLabelKey) err(`${id}: brand marks are semantic and need a label key`);
  if (!b.owner || !b.usage) err(`${id}: owner and usage are required for trademark attribution`);
  for (const [file, locale] of Object.entries(locales)) {
    if (typeof readPath(locale, b.accessibilityLabelKey) !== "string") err(`${id}: ${b.accessibilityLabelKey} missing from locales/${file}`);
  }
  if (!b.grades?.base?.length) err(`${id}: base grade required`);
  for (const [grade, layers] of Object.entries(b.grades ?? {})) {
    if (!BRAND_GRADES.includes(grade)) err(`${id}: unknown grade ${grade}`);
    for (const l of layers) {
      for (const c of [l.fill, l.dark]) if (c !== undefined && !HEX.test(c)) err(`${id}/${grade}/${l.name}: colour ${c} is not uppercase 6-digit hex`);
      try {
        const bounds = pathBounds(l.d);
        for (const m of bounds.badDecimals) err(`${id}/${grade}/${l.name}: >3 decimals (${m})`);
        if (bounds.minX < 1 || bounds.maxX > 23 || bounds.minY < 1 || bounds.maxY > 23) {
          err(`${id}/${grade}/${l.name}: path leaves the live area (+1 px overshoot)`);
        }
      } catch (e) {
        err(`${id}/${grade}/${l.name}: ${e.message}`);
      }
    }
  }

  for (const variant of BRAND_VARIANTS) {
    for (const size of Object.keys(sizes).map(Number)) {
      const rel = path.join("svg", variant, `${id}@${size}.svg`);
      const p = path.join(brandRoot, rel);
      if (!fs.existsSync(p)) {
        err(`missing ${rel}`);
        continue;
      }
      svgCount += 1;
      const svg = fs.readFileSync(p, "utf8");
      if (!svg.includes(`viewBox="0 0 24 24"`)) err(`${rel}: bad viewBox`);
      if (!svg.includes(`width="${size}"`)) err(`${rel}: width != ${size}`);
      if (/stroke=/.test(svg)) err(`${rel}: brand marks are filled artwork, never stroked`);
      if (variant === "mono") {
        const fills = svg.match(/fill="[^"]*"/g) ?? [];
        if (!fills.length || fills.some((f) => f !== 'fill="currentColor"')) err(`${rel}: mono must fill every layer with currentColor`);
      } else {
        if (svg.includes("currentColor")) err(`${rel}: brand colours are fixed; currentColor is not allowed`);
        for (const m of svg.match(/fill="[^"]*"/g) ?? []) if (!/^fill="#[0-9A-F]{6}"$/.test(m)) err(`${rel}: non-canonical colour ${m}`);
      }
    }
  }
}

// 5. index parity
{
  const idxIds = new Set(index.brands.map((b) => b.id));
  for (const id of Object.keys(registry.brands)) if (!idxIds.has(id)) err(`${id}: missing from index.brand.json`);
  if (idxIds.size !== registry.counts.total) err(`index count ${idxIds.size} != registry total ${registry.counts.total}`);
}

// 6. brand ids never collide with a semantic icon or a flag
{
  const v4 = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/v4/registry.v4.json"), "utf8"));
  const flags = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/flags/registry.flags.json"), "utf8"));
  for (const id of Object.keys(registry.brands)) {
    if (v4.icons[id]) err(`${id}: collides with a v4 semantic icon id`);
    if (flags.flags[id]) err(`${id}: collides with a flag id`);
  }
}

// 7. every third-party mark is attributed in TRADEMARKS.md
{
  const trademarks = fs.readFileSync(path.join(root, "TRADEMARKS.md"), "utf8");
  for (const [id, b] of Object.entries(registry.brands)) {
    if (!trademarks.includes(b.owner)) err(`${id}: owner "${b.owner}" is not named in TRADEMARKS.md`);
  }
}

if (errors.length) {
  console.error(`brand check FAILED (${errors.length}):`);
  for (const e of errors.slice(0, 50)) console.error(`  - ${e}`);
  if (errors.length > 50) console.error(`  … and ${errors.length - 50} more`);
  process.exit(1);
}
console.log(
  `Brand check passed: ${Object.keys(registry.brands).length} marks, ${svgCount} SVGs, hash OK, deterministic, localized, attributed.`,
);
