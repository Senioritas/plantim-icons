// Compile the brand-mark modules under design-tokens/icons/brand/src into
// registry.brand.json, index.brand.json and one SVG per mark × variant × size.
// Deterministic: sorted iteration, 3-decimal coordinates, no timestamps.
// `--verify` recompiles in memory and compares instead of writing.
//
// Brand marks are a separate asset class from the semantic icon registry: their
// colours are fixed by their owners, not by theme tokens. See
// design-tokens/icons/brand/README.md.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { pathToFileURL } from "node:url";
import { renderBrandSvg, BRAND_VARIANTS, brandSizes } from "./lib/brand-render.mjs";

const root = path.resolve(import.meta.dirname, "../..");
const brandRoot = path.join(root, "design-tokens/icons/brand");
const srcRoot = path.join(brandRoot, "src");
const svgRoot = path.join(brandRoot, "svg");
const verify = process.argv.includes("--verify");

const BRAND_VERSION = "4.2.0";
const v4Sizes = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/v4/sizes.json"), "utf8"));
const sizes = brandSizes(v4Sizes);

// Only modules whose default export is a list of brand() definitions; geometry
// helpers (plantim-geometry.mjs) export named constants.
const marks = [];
for (const file of fs.readdirSync(srcRoot).filter((f) => f.endsWith(".mjs")).sort()) {
  const mod = await import(pathToFileURL(path.join(srcRoot, file)).href);
  if (mod.default === undefined) continue;
  if (!Array.isArray(mod.default)) throw new Error(`${file}: default export must be an array of brand()s`);
  marks.push(...mod.default);
}
marks.sort((a, b) => a.id.localeCompare(b.id));

const seen = new Set();
for (const def of marks) {
  if (seen.has(def.id)) throw new Error(`duplicate brand id ${def.id}`);
  seen.add(def.id);
}

// Every mark is semantic and must be announced by name.
const localeRoot = path.join(root, "locales");
const readPath = (object, key) => key.split(".").reduce((value, part) => value?.[part], object);
for (const file of fs.readdirSync(localeRoot).filter((f) => f.endsWith(".json"))) {
  const locale = JSON.parse(fs.readFileSync(path.join(localeRoot, file), "utf8"));
  for (const def of marks) {
    if (typeof readPath(locale, def.accessibilityLabelKey) !== "string") {
      throw new Error(`${def.id}: ${def.accessibilityLabelKey} missing from locales/${file}`);
    }
  }
}

const hash = (o) => crypto.createHash("sha256").update(JSON.stringify(o)).digest("hex");

const registryMarks = {};
for (const def of marks) {
  registryMarks[def.id] = { ...def, geometryHash: hash(def.grades) };
}

const payload = {
  version: BRAND_VERSION,
  sizes,
  variants: BRAND_VARIANTS,
  counts: { total: marks.length },
  brands: registryMarks,
};
const brandHash = hash(payload);
const registry = { ...payload, brandHash };

const files = new Map();
const indexMarks = [];
for (const def of marks) {
  const entry = { id: def.id, kind: "brand", category: def.category, label: def.label, files: {} };
  for (const variant of BRAND_VARIANTS) {
    for (const [sizeStr, grade] of Object.entries(sizes)) {
      const size = Number(sizeStr);
      const rel = path.join("svg", variant, `${def.id}@${size}.svg`);
      files.set(rel, renderBrandSvg(def, variant, size, grade));
      (entry.files[variant] ??= {})[size] = rel;
    }
  }
  indexMarks.push(entry);
}

const registryJson = JSON.stringify(registry, null, 2) + "\n";
const indexJson =
  JSON.stringify({ version: BRAND_VERSION, brandHash, counts: registry.counts, brands: indexMarks }, null, 2) + "\n";

if (verify) {
  const registryPath = path.join(brandRoot, "registry.brand.json");
  const existing = fs.existsSync(registryPath) ? fs.readFileSync(registryPath, "utf8") : "";
  if (existing !== registryJson) {
    console.error("brand --verify: registry.brand.json is stale — rerun npm run icons:brand");
    process.exit(1);
  }
  for (const [rel, content] of files) {
    const p = path.join(brandRoot, rel);
    if (!fs.existsSync(p) || fs.readFileSync(p, "utf8") !== content) {
      console.error(`brand --verify: ${rel} is stale or missing — rerun npm run icons:brand`);
      process.exit(1);
    }
  }
  console.log(`brand --verify OK: ${marks.length} marks deterministic (brandHash ${brandHash.slice(0, 12)}…).`);
  process.exit(0);
}

fs.rmSync(svgRoot, { recursive: true, force: true });
for (const [rel, content] of files) {
  const p = path.join(brandRoot, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
}
fs.writeFileSync(path.join(brandRoot, "registry.brand.json"), registryJson);
fs.writeFileSync(path.join(brandRoot, "index.brand.json"), indexJson);
console.log(
  `Generated brand marks: ${marks.length} marks × ${BRAND_VARIANTS.length} variants, ${files.size} SVGs, brandHash ${brandHash.slice(0, 12)}…`,
);
