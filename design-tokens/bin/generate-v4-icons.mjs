// Compile hand-authored v4 icon modules into registry.v4.json, index.v4.json,
// and one SVG per icon x variant x size. Deterministic: sorted iteration,
// 3-decimal coordinates, no timestamps. `--verify` recompiles in memory and
// compares hashes instead of writing (used by the structural gate).

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { pathToFileURL } from "node:url";
import { renderSvg, V4_VARIANTS, gradeAuthored } from "./lib/v4-render.mjs";

const root = path.resolve(import.meta.dirname, "../..");
const v4Root = path.join(root, "design-tokens/icons/v4");
const srcRoot = path.join(v4Root, "src");
const svgRoot = path.join(v4Root, "svg");
const verify = process.argv.includes("--verify");

const tokens = JSON.parse(fs.readFileSync(path.join(v4Root, "tokens.json"), "utf8"));
const sizesCfg = JSON.parse(fs.readFileSync(path.join(v4Root, "sizes.json"), "utf8"));
const v2Registry = JSON.parse(
  fs.readFileSync(path.join(root, "design-tokens/icons/registry.json"), "utf8"),
);
const v3Index = JSON.parse(
  fs.readFileSync(path.join(root, "design-tokens/icons/v3/index.v3.json"), "utf8"),
);
const tiersPath = path.join(v4Root, "tiers.json");
const tiers = fs.existsSync(tiersPath) ? JSON.parse(fs.readFileSync(tiersPath, "utf8")) : null;

const v2ById = new Map(Object.values(v2Registry.icons).map((i) => [i.id, i]));
const v3Ids = new Set((Array.isArray(v3Index.icons) ? v3Index.icons : Object.values(v3Index.icons)).map((i) => i.id));

// ---- load authored modules (sorted for determinism) ----
const moduleFiles = fs.existsSync(srcRoot)
  ? fs.readdirSync(srcRoot).filter((f) => f.endsWith(".mjs") && f !== "animations.mjs").sort()
  : [];
const icons = [];
for (const file of moduleFiles) {
  const mod = await import(pathToFileURL(path.join(srcRoot, file)).href);
  const defs = mod.default;
  if (!Array.isArray(defs)) throw new Error(`${file}: default export must be an array of icon()s`);
  icons.push(...defs);
}
icons.sort((a, b) => a.id.localeCompare(b.id));

const seen = new Set();
for (const def of icons) {
  if (seen.has(def.id)) throw new Error(`duplicate icon id ${def.id}`);
  seen.add(def.id);
  // provenance / a11y cross-checks against v2
  const v2 = v2ById.get(def.id);
  if (v2 && v2.accessibility !== def.accessibility) {
    throw new Error(`${def.id}: accessibility "${def.accessibility}" != v2 "${v2.accessibility}"`);
  }
  if (def.provenance?.v2 && !v2ById.has(def.provenance.v2)) {
    throw new Error(`${def.id}: provenance.v2 "${def.provenance.v2}" not in v2 registry`);
  }
  if (def.provenance?.v3 && !v3Ids.has(def.provenance.v3)) {
    throw new Error(`${def.id}: provenance.v3 "${def.provenance.v3}" not in v3 index`);
  }
  if (tiers && tiers.icons?.[def.id] && tiers.icons[def.id].tier !== def.tier) {
    throw new Error(`${def.id}: tier ${def.tier} != tiers.json ${tiers.icons[def.id].tier}`);
  }
}

// ---- compile registry ----
function geometryHash(def) {
  return crypto.createHash("sha256").update(JSON.stringify({ grades: def.grades, solid: def.solid, variants: def.variants })).digest("hex");
}

const registryIcons = {};
for (const def of icons) {
  registryIcons[def.id] = {
    id: def.id,
    tier: def.tier,
    verdict: def.verdict,
    category: def.category,
    label: def.label,
    keywords: def.keywords,
    accessibility: def.accessibility,
    ...(def.accessibilityLabelKey ? { accessibilityLabelKey: def.accessibilityLabelKey } : {}),
    provenance: def.provenance,
    grades: Object.fromEntries(
      ["micro", "base", "display"].map((g) => [
        g,
        {
          authored: gradeAuthored(def, g),
          layers: (def.grades[g] ?? def.grades.base).map((l) => ({ name: l.name, role: l.role, nodes: l.nodes })),
        },
      ]),
    ),
    solid: {
      base: def.solid.base,
      micro: def.solid.micro ?? null,
      display: def.solid.display ?? null,
    },
    variants: def.variants,
    ...(def.animation ? { animation: def.animation } : {}),
    geometryHash: geometryHash(def),
  };
}

const payload = {
  version: "4.0.0",
  derivedFrom: {
    v2: v2Registry.version,
    v2Hash: v2Registry.registryHash,
  },
  sizes: sizesCfg,
  tokens: tokens.roles,
  counts: {
    total: icons.length,
    P0: icons.filter((i) => i.tier === "P0").length,
    P1: icons.filter((i) => i.tier === "P1").length,
    P2: icons.filter((i) => i.tier === "P2").length,
  },
  icons: registryIcons,
};
const v4Hash = crypto.createHash("sha256").update(JSON.stringify(payload)).digest("hex");
const registry = { ...payload, v4Hash };

// ---- render SVGs ----
const files = new Map(); // relPath -> content
const indexIcons = [];
for (const def of icons) {
  const entry = { id: def.id, category: def.category, tier: def.tier, verdict: def.verdict, label: def.label, files: {} };
  for (const variant of V4_VARIANTS) {
    for (const [sizeStr, grade] of Object.entries(sizesCfg.sizes)) {
      const size = Number(sizeStr);
      const strokeWidth = sizesCfg.grades[grade].strokeWidth;
      const svg = renderSvg(def, variant, size, grade, strokeWidth, tokens);
      const rel = path.join("svg", variant, `${def.id}@${size}.svg`);
      files.set(rel, svg);
      (entry.files[variant] ??= {})[size] = rel;
    }
  }
  indexIcons.push(entry);
}

const registryJson = JSON.stringify(registry, null, 2) + "\n";
const indexJson =
  JSON.stringify({ version: "4.0.0", v4Hash, counts: registry.counts, icons: indexIcons }, null, 2) + "\n";

if (verify) {
  const existing = fs.existsSync(path.join(v4Root, "registry.v4.json"))
    ? fs.readFileSync(path.join(v4Root, "registry.v4.json"), "utf8")
    : "";
  if (existing !== registryJson) {
    console.error("v4 --verify: registry.v4.json is stale — rerun npm run icons:v4");
    process.exit(1);
  }
  for (const [rel, content] of files) {
    const p = path.join(v4Root, rel);
    if (!fs.existsSync(p) || fs.readFileSync(p, "utf8") !== content) {
      console.error(`v4 --verify: ${rel} is stale or missing — rerun npm run icons:v4`);
      process.exit(1);
    }
  }
  console.log(`v4 --verify OK: ${icons.length} icons deterministic (v4Hash ${v4Hash.slice(0, 12)}…).`);
  process.exit(0);
}

fs.rmSync(svgRoot, { recursive: true, force: true });
for (const [rel, content] of files) {
  const p = path.join(v4Root, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
}
fs.writeFileSync(path.join(v4Root, "registry.v4.json"), registryJson);
fs.writeFileSync(path.join(v4Root, "index.v4.json"), indexJson);
console.log(
  `Generated v4: ${icons.length} icons (${registry.counts.P0} P0 / ${registry.counts.P1} P1 / ${registry.counts.P2} P2), ${files.size} SVGs, v4Hash ${v4Hash.slice(0, 12)}…`,
);
