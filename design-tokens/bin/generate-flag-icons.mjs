// Compile the hand-authored flag modules under design-tokens/icons/flags/src
// into registry.flags.json, index.flags.json and one SVG per flag × variant ×
// size. Deterministic: sorted iteration, 3-decimal coordinates, no timestamps.
// `--verify` recompiles in memory and compares instead of writing.
//
// Flags are a separate asset class from the semantic icon registry: their
// colors are fixed by vexillology rather than by theme tokens, and an "outline
// flag" is meaningless, so they carry their own two shapes (rectangle and
// circle) in colour and mono treatments. See design-tokens/icons/flags/README.md.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { pathToFileURL } from "node:url";
import { renderFlagSvg, FLAG_VARIANTS } from "./lib/flag-render.mjs";

const root = path.resolve(import.meta.dirname, "../..");
const flagsRoot = path.join(root, "design-tokens/icons/flags");
const srcRoot = path.join(flagsRoot, "src");
const svgRoot = path.join(flagsRoot, "svg");
const verify = process.argv.includes("--verify");

// Flags follow the v4 optical-size table so a flag and an icon in the same row
// are the same height and the mono stroke matches the icon stroke.
const FLAGS_VERSION = "4.1.0";
const sizesCfg = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/v4/sizes.json"), "utf8"));

const moduleFiles = fs.readdirSync(srcRoot).filter((f) => f.endsWith(".mjs")).sort();
const flags = [];
for (const file of moduleFiles) {
  const mod = await import(pathToFileURL(path.join(srcRoot, file)).href);
  if (!Array.isArray(mod.default)) throw new Error(`${file}: default export must be an array of flag()s`);
  flags.push(...mod.default);
}
flags.sort((a, b) => a.id.localeCompare(b.id));

const seen = new Set();
for (const def of flags) {
  if (seen.has(def.id)) throw new Error(`duplicate flag id ${def.id}`);
  seen.add(def.id);
}

// Every flag is semantic and must be announced by name, never as "flag".
const localeRoot = path.join(root, "locales");
const readPath = (object, key) => key.split(".").reduce((value, part) => value?.[part], object);
for (const file of fs.readdirSync(localeRoot).filter((f) => f.endsWith(".json"))) {
  const locale = JSON.parse(fs.readFileSync(path.join(localeRoot, file), "utf8"));
  for (const def of flags) {
    if (typeof readPath(locale, def.accessibilityLabelKey) !== "string") {
      throw new Error(`${def.id}: ${def.accessibilityLabelKey} missing from locales/${file}`);
    }
  }
}

const hash = (o) => crypto.createHash("sha256").update(JSON.stringify(o)).digest("hex");

const registryFlags = {};
for (const def of flags) {
  registryFlags[def.id] = {
    id: def.id,
    kind: "flag",
    tier: def.tier,
    verdict: def.verdict,
    category: def.category,
    label: def.label,
    keywords: def.keywords,
    accessibility: def.accessibility,
    accessibilityLabelKey: def.accessibilityLabelKey,
    layers: def.layers,
    mono: def.mono,
    geometryHash: hash({ layers: def.layers, mono: def.mono }),
  };
}

const payload = {
  version: FLAGS_VERSION,
  sizes: sizesCfg,
  variants: FLAG_VARIANTS,
  counts: { total: flags.length },
  flags: registryFlags,
};
const flagsHash = hash(payload);
const registry = { ...payload, flagsHash };

const files = new Map();
const indexFlags = [];
for (const def of flags) {
  const entry = { id: def.id, kind: "flag", category: def.category, tier: def.tier, label: def.label, files: {} };
  for (const variant of FLAG_VARIANTS) {
    for (const [sizeStr, grade] of Object.entries(sizesCfg.sizes)) {
      const size = Number(sizeStr);
      const svg = renderFlagSvg(def, variant, size, grade, sizesCfg.grades[grade].strokeWidth);
      const rel = path.join("svg", variant, `${def.id}@${size}.svg`);
      files.set(rel, svg);
      (entry.files[variant] ??= {})[size] = rel;
    }
  }
  indexFlags.push(entry);
}

const registryJson = JSON.stringify(registry, null, 2) + "\n";
const indexJson = JSON.stringify({ version: FLAGS_VERSION, flagsHash, counts: registry.counts, flags: indexFlags }, null, 2) + "\n";

if (verify) {
  const existing = fs.existsSync(path.join(flagsRoot, "registry.flags.json"))
    ? fs.readFileSync(path.join(flagsRoot, "registry.flags.json"), "utf8")
    : "";
  if (existing !== registryJson) {
    console.error("flags --verify: registry.flags.json is stale — rerun npm run icons:flags");
    process.exit(1);
  }
  for (const [rel, content] of files) {
    const p = path.join(flagsRoot, rel);
    if (!fs.existsSync(p) || fs.readFileSync(p, "utf8") !== content) {
      console.error(`flags --verify: ${rel} is stale or missing — rerun npm run icons:flags`);
      process.exit(1);
    }
  }
  console.log(`flags --verify OK: ${flags.length} flags deterministic (flagsHash ${flagsHash.slice(0, 12)}…).`);
  process.exit(0);
}

fs.rmSync(svgRoot, { recursive: true, force: true });
for (const [rel, content] of files) {
  const p = path.join(flagsRoot, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
}
fs.writeFileSync(path.join(flagsRoot, "registry.flags.json"), registryJson);
fs.writeFileSync(path.join(flagsRoot, "index.flags.json"), indexJson);
console.log(
  `Generated flags: ${flags.length} flags × ${FLAG_VARIANTS.length} variants, ${files.size} SVGs, flagsHash ${flagsHash.slice(0, 12)}…`,
);
