// Compile the v4.1 proposal (design-tokens/icons/v4.1-proposal) into
// registry.proposal.json, index.proposal.json and one SVG per icon × variant ×
// size. Semantic icons go through the exact v4 DSL + renderer; flags go through
// the flag DSL + renderer. Deterministic (sorted, 3-decimal, no timestamps);
// `--verify` recompiles in memory and compares instead of writing.
//
// The proposal never touches the shipped v4 registry: ids must be NEW (not in
// v2, v3 or v4), and every status/semantic id must have a label in every
// locale of locales.proposal.json. Promotion = move the module into v4/src,
// add tiers.json + locales entries, bump to 4.1.0, `npm run icons:v4`.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { pathToFileURL } from "node:url";
import { renderSvg, V4_VARIANTS, gradeAuthored } from "./lib/v4-render.mjs";
import { renderFlagSvg, FLAG_VARIANTS } from "./lib/flag-render.mjs";

const root = path.resolve(import.meta.dirname, "../..");
const v4Root = path.join(root, "design-tokens/icons/v4");
const propRoot = path.join(root, "design-tokens/icons/v4.1-proposal");
const srcRoot = path.join(propRoot, "src");
const flagSrcRoot = path.join(propRoot, "flags/src");
const svgRoot = path.join(propRoot, "svg");
const verify = process.argv.includes("--verify");

export const PROPOSAL_VERSION = "4.1.0-proposal";

const tokens = JSON.parse(fs.readFileSync(path.join(v4Root, "tokens.json"), "utf8"));
const sizesCfg = JSON.parse(fs.readFileSync(path.join(v4Root, "sizes.json"), "utf8"));
const v4Registry = JSON.parse(fs.readFileSync(path.join(v4Root, "registry.v4.json"), "utf8"));
const v2Registry = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/registry.json"), "utf8"));
const v3Index = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/v3/index.v3.json"), "utf8"));
const locales = JSON.parse(fs.readFileSync(path.join(propRoot, "locales.proposal.json"), "utf8"));
const shippedLocales = Object.fromEntries(
  fs
    .readdirSync(path.join(root, "locales"))
    .filter((f) => f.endsWith(".json"))
    .map((f) => [f.replace(/\.json$/, ""), JSON.parse(fs.readFileSync(path.join(root, "locales", f), "utf8"))]),
);

const existingIds = new Set([
  ...Object.values(v2Registry.icons).map((i) => i.id),
  ...v3Index.icons.map((i) => i.id),
  ...Object.keys(v4Registry.icons),
]);

async function loadModules(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".mjs")).sort()) {
    const mod = await import(pathToFileURL(path.join(dir, file)).href);
    if (!Array.isArray(mod.default)) throw new Error(`${file}: default export must be an array`);
    out.push(...mod.default);
  }
  return out;
}

const icons = (await loadModules(srcRoot)).sort((a, b) => a.id.localeCompare(b.id));
const flags = (await loadModules(flagSrcRoot)).sort((a, b) => a.id.localeCompare(b.id));

// ---- validation ----
const readPath = (obj, key) => key.split(".").reduce((v, p) => v?.[p], obj);
const seen = new Set();
for (const def of [...icons, ...flags]) {
  if (seen.has(def.id)) throw new Error(`duplicate proposal id ${def.id}`);
  seen.add(def.id);
  if (existingIds.has(def.id)) throw new Error(`${def.id}: already exists in v2/v3/v4 — reuse it, do not re-propose`);
  if (def.accessibility === "status" || def.accessibility === "semantic") {
    const k = def.accessibilityLabelKey;
    for (const [lang, shipped] of Object.entries(shippedLocales)) {
      const inShipped = typeof readPath(shipped, k) === "string";
      const inProposal = typeof readPath(locales[lang], k) === "string";
      if (!inShipped && !inProposal) throw new Error(`${def.id}: ${k} missing for locale ${lang} (locales.proposal.json)`);
    }
  }
}

// ---- compile registry ----
const hash = (o) => crypto.createHash("sha256").update(JSON.stringify(o)).digest("hex");

const registryIcons = {};
for (const def of icons) {
  registryIcons[def.id] = {
    id: def.id,
    kind: "icon",
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
    solid: { base: def.solid.base, micro: def.solid.micro ?? null, display: def.solid.display ?? null },
    variants: def.variants,
    geometryHash: hash({ grades: def.grades, solid: def.solid, variants: def.variants }),
  };
}
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
  version: PROPOSAL_VERSION,
  derivedFrom: { v4: v4Registry.version, v4Hash: v4Registry.v4Hash },
  sizes: sizesCfg,
  tokens: tokens.roles,
  counts: {
    icons: icons.length,
    flags: flags.length,
    total: icons.length + flags.length,
    P1: [...icons, ...flags].filter((i) => i.tier === "P1").length,
    P2: [...icons, ...flags].filter((i) => i.tier === "P2").length,
  },
  icons: registryIcons,
  flags: registryFlags,
};
const proposalHash = hash(payload);
const registry = { ...payload, proposalHash };

// ---- render SVGs ----
const files = new Map();
const indexIcons = [];
for (const def of icons) {
  const entry = { id: def.id, kind: "icon", category: def.category, tier: def.tier, verdict: def.verdict, label: def.label, files: {} };
  for (const variant of V4_VARIANTS) {
    for (const [sizeStr, grade] of Object.entries(sizesCfg.sizes)) {
      const size = Number(sizeStr);
      const svg = renderSvg(def, variant, size, grade, sizesCfg.grades[grade].strokeWidth, tokens);
      const rel = path.join("svg", variant, `${def.id}@${size}.svg`);
      files.set(rel, svg);
      (entry.files[variant] ??= {})[size] = rel;
    }
  }
  indexIcons.push(entry);
}
for (const def of flags) {
  const entry = { id: def.id, kind: "flag", category: def.category, tier: def.tier, verdict: def.verdict, label: def.label, files: {} };
  for (const variant of FLAG_VARIANTS) {
    for (const [sizeStr, grade] of Object.entries(sizesCfg.sizes)) {
      const size = Number(sizeStr);
      const svg = renderFlagSvg(def, variant, size, grade, sizesCfg.grades[grade].strokeWidth);
      const rel = path.join("svg", variant, `${def.id}@${size}.svg`);
      files.set(rel, svg);
      (entry.files[variant] ??= {})[size] = rel;
    }
  }
  indexIcons.push(entry);
}

const registryJson = JSON.stringify(registry, null, 2) + "\n";
const indexJson = JSON.stringify({ version: PROPOSAL_VERSION, proposalHash, counts: registry.counts, icons: indexIcons }, null, 2) + "\n";

if (verify) {
  const existing = fs.existsSync(path.join(propRoot, "registry.proposal.json"))
    ? fs.readFileSync(path.join(propRoot, "registry.proposal.json"), "utf8")
    : "";
  if (existing !== registryJson) {
    console.error("proposal --verify: registry.proposal.json is stale — rerun npm run icons:proposal");
    process.exit(1);
  }
  for (const [rel, content] of files) {
    const p = path.join(propRoot, rel);
    if (!fs.existsSync(p) || fs.readFileSync(p, "utf8") !== content) {
      console.error(`proposal --verify: ${rel} is stale or missing — rerun npm run icons:proposal`);
      process.exit(1);
    }
  }
  console.log(`proposal --verify OK: ${icons.length} icons + ${flags.length} flags deterministic (${proposalHash.slice(0, 12)}…).`);
  process.exit(0);
}

fs.rmSync(svgRoot, { recursive: true, force: true });
for (const [rel, content] of files) {
  const p = path.join(propRoot, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
}
fs.writeFileSync(path.join(propRoot, "registry.proposal.json"), registryJson);
fs.writeFileSync(path.join(propRoot, "index.proposal.json"), indexJson);
console.log(
  `Generated v4.1 proposal: ${icons.length} icons + ${flags.length} flags, ${files.size} SVGs, proposalHash ${proposalHash.slice(0, 12)}…`,
);
