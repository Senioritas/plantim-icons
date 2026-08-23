// Generate the additive v3 icon set (multicolor + 24/48/72 sizes) from the v2 registry.
//
// Inputs : design-tokens/icons/registry.json  (read-only geometry source; v2)
//          design-tokens/icons/v3/palette.json (hand-authored color/size config)
// Outputs: design-tokens/icons/v3/{registry.v3.json,index.v3.json,multicolor/*.svg,sizes/*.svg}
//
// This never touches registry.json, its hash, or any published package artifact.
// Output is deterministic (stable order, no timestamps) so re-running is byte-identical.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import {
  assignRoles,
  buildV3Nodes,
  renderSvg,
  resolvePalette,
} from "./lib/v3-transform.mjs";
import { authoredIcons } from "../icons/v3/authored.mjs";

const root = path.resolve(import.meta.dirname, "..", "..");
const registryPath = path.join(root, "design-tokens/icons/registry.json");
const v3Dir = path.join(root, "design-tokens/icons/v3");
const palettePath = path.join(v3Dir, "palette.json");
const multicolorDir = path.join(v3Dir, "multicolor");
const sizesDir = path.join(v3Dir, "sizes");

// --- Read + verify the v2 registry (same integrity guard as generate-icons.mjs) ---
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const { registryHash, ...registryPayload } = registry;
const expectedHash = crypto
  .createHash("sha256")
  .update(JSON.stringify(registryPayload))
  .digest("hex");
if (registryHash !== expectedHash) {
  throw new Error(
    "v2 registry hash is stale — refusing to derive v3 from an unverified source. Run the v2 generator first.",
  );
}

const palette = JSON.parse(fs.readFileSync(palettePath, "utf8"));
const { sizes, strokePolicy, baseStrokeWidth } = palette;
const rules = palette.roleRules;

// Warn (non-fatal) if the geometry-override table references v2 ids that no longer exist.
const knownIds = new Set(Object.values(registry.icons).map((icon) => icon.id));
const geometryOverrides = palette.geometryOverrides ?? {};
const correctedIds = [];
for (const id of Object.keys(geometryOverrides)) {
  if (id === "$comment") continue;
  if (!knownIds.has(id)) console.warn(`[v3] warning: geometryOverride "${id}" matches no icon in the registry.`);
}

// --- Reset output SVG dirs so removed icons never leave stale files behind ---
fs.rmSync(multicolorDir, { recursive: true, force: true });
fs.rmSync(sizesDir, { recursive: true, force: true });
fs.mkdirSync(multicolorDir, { recursive: true });
fs.mkdirSync(sizesDir, { recursive: true });

const v3Icons = {};
const manifestIcons = [];
const emittedIds = new Set();
let fileCount = 0;

// Parse geometry nodes out of a hand-authored source SVG (v3-only custom icons).
function parseSvgNodes(file) {
  const src = fs.readFileSync(file, "utf8");
  const nodes = [];
  for (const match of src.matchAll(/<(path|line|polyline|polygon|circle|rect|ellipse)\b([^>]*?)\/?>/gs)) {
    const attrs = {};
    for (const pair of match[2].matchAll(/([a-zA-Z][a-zA-Z0-9-]*)=["']([^"']*)["']/g)) attrs[pair[1]] = pair[2];
    if (Object.keys(attrs).length) nodes.push({ type: match[1], attrs });
  }
  if (!nodes.length) throw new Error(`No SVG geometry parsed for custom icon ${file}`);
  return nodes;
}

// Render one icon (multicolor master + size files) and record registry/manifest entries.
function emitIcon(key, icon, extra = {}) {
  if (emittedIds.has(icon.id)) console.warn(`[v3] warning: duplicate icon id "${icon.id}" — later definition overwrites earlier files.`);
  emittedIds.add(icon.id);

  const resolved = resolvePalette(icon, palette);
  const { roles, containers } = assignRoles(icon, rules, resolved);
  const renderArgs = { icon, roles, containers, resolved, strokePolicy, baseStrokeWidth };

  fs.writeFileSync(path.join(multicolorDir, `${icon.id}.svg`), renderSvg({ ...renderArgs, size: 24 }));
  fileCount++;

  const sizeFiles = {};
  for (const size of sizes) {
    const file = `${icon.id}@${size}.svg`;
    fs.writeFileSync(path.join(sizesDir, file), renderSvg({ ...renderArgs, size }));
    sizeFiles[String(size)] = `sizes/${file}`;
    fileCount++;
  }

  const paletteOut = {
    primary: resolved.primary,
    secondary: resolved.secondary,
    accent: resolved.accent,
    bg: resolved.bg,
  };

  v3Icons[key] = {
    id: icon.id,
    category: icon.category,
    viewBox: icon.viewBox,
    accessibility: icon.accessibility,
    ...(icon.accessibilityLabelKey ? { accessibilityLabelKey: icon.accessibilityLabelKey } : {}),
    palette: paletteOut,
    sizes,
    ...(extra.custom ? { custom: true } : {}),
    ...(extra.group ? { group: extra.group } : {}),
    ...(extra.label ? { label: extra.label } : {}),
    ...(extra.geometryCorrected ? { geometryCorrected: true } : {}),
    nodes: buildV3Nodes(icon, roles, resolved),
  };

  manifestIcons.push({
    id: icon.id,
    category: icon.category,
    palette: paletteOut,
    ...(extra.custom ? { custom: true } : {}),
    ...(extra.group ? { group: extra.group } : {}),
    ...(extra.label ? { label: extra.label } : {}),
    ...(extra.keywords ? { keywords: extra.keywords } : {}),
    files: { multicolor: `multicolor/${icon.id}.svg`, sizes: sizeFiles },
  });
}

// 1) Icons derived from the governed v2 registry (geometry source of truth).
const derivedCount = Object.keys(registry.icons).length;
for (const [name, source] of Object.entries(registry.icons)) {
  // Apply an optional geometry correction (v3-only; v2 registry is never touched).
  const override = geometryOverrides[source.id];
  const geometryCorrected = Boolean(override && override.nodes);
  if (geometryCorrected) correctedIds.push(source.id);
  const icon = geometryCorrected ? { ...source, nodes: override.nodes } : source;
  emitIcon(name, icon, { geometryCorrected });
}

// 2) New v3-only custom icons — hand-authored as node data (tab alternatives, care,
//    lifecycle, health, growth stages).
let customCount = 0;
for (const entry of authoredIcons) {
  const icon = {
    id: entry.id,
    category: entry.category,
    viewBox: "0 0 24 24",
    accessibility: entry.accessibility || "decorative",
    nodes: entry.nodes,
  };
  emitIcon(entry.id, icon, { custom: true, group: entry.group, label: entry.label, keywords: entry.keywords });
  customCount++;
}

// 3) New v3-only custom icons authored as SVG files (garden tools, families, genus).
const customSrcDir = path.join(v3Dir, "custom-src");
const customManifestPath = path.join(customSrcDir, "icons.json");
if (fs.existsSync(customManifestPath)) {
  const customList = JSON.parse(fs.readFileSync(customManifestPath, "utf8"));
  for (const entry of customList) {
    const icon = {
      id: entry.id,
      category: entry.category,
      viewBox: "0 0 24 24",
      accessibility: entry.accessibility || "decorative",
      nodes: parseSvgNodes(path.join(customSrcDir, entry.file)),
    };
    emitIcon(entry.id, icon, {
      custom: true,
      group: entry.group,
      label: entry.label,
      keywords: entry.keywords,
    });
    customCount++;
  }
}

// --- registry.v3.json (superset, self-hashed like v2) ---
const v3Payload = {
  version: palette.version,
  derivedFrom: registry.version,
  source: registry.source,
  sourceRegistryHash: registry.registryHash,
  sizes,
  strokePolicy,
  counts: { derived: derivedCount, custom: customCount, total: derivedCount + customCount },
  icons: v3Icons,
};
const v3Hash = crypto.createHash("sha256").update(JSON.stringify(v3Payload)).digest("hex");
fs.writeFileSync(
  path.join(v3Dir, "registry.v3.json"),
  JSON.stringify({ ...v3Payload, v3Hash }, null, 2) + "\n",
);

// --- index.v3.json (lightweight manifest) ---
fs.writeFileSync(
  path.join(v3Dir, "index.v3.json"),
  JSON.stringify(
    {
      version: palette.version,
      derivedFrom: registry.version,
      count: manifestIcons.length,
      counts: { derived: derivedCount, custom: customCount, total: derivedCount + customCount },
      sizes,
      strokePolicy,
      v3Hash,
      icons: manifestIcons,
    },
    null,
    2,
  ) + "\n",
);

console.log(
  `Generated v3: ${manifestIcons.length} icons (${derivedCount} derived + ${customCount} new custom), ` +
    `${fileCount} SVG files, registry.v3.json + index.v3.json (v3Hash ${v3Hash.slice(0, 12)}…).`,
);
if (correctedIds.length) {
  console.log(`Corrected broken v2 geometry for ${correctedIds.length} icon(s): ${correctedIds.join(", ")}.`);
}
for (const id of Object.keys(palette.idOverrides ?? {})) {
  if (!emittedIds.has(id)) console.warn(`[v3] warning: idOverride "${id}" matches no generated icon.`);
}
