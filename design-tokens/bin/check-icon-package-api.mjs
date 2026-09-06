import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const packageRoot = path.join(root, "packages/plantim-icons");
const registry = JSON.parse(
  fs.readFileSync(path.join(root, "design-tokens/icons/registry.json"), "utf8"),
);
const manifest = JSON.parse(fs.readFileSync(path.join(packageRoot, "package.json"), "utf8"));
const api = await import(path.join(packageRoot, "dist/index.js"));
const metadata = await import(path.join(packageRoot, "dist/metadata.js"));
const expectedIds = Object.values(registry.icons).map((icon) => icon.id).sort();

assert.deepEqual(
  Object.keys(api).sort(),
  [
    "PLANTIM_ICON_NAMES",
    "PLANTIM_ICONS_REGISTRY_HASH",
    "PLANTIM_ICONS_VERSION",
    "PlantimIcon",
    "isPlantimIconName",
  ].sort(),
  "the root export surface must remain semantic and minimal",
);
assert.equal(api.PLANTIM_ICONS_VERSION, registry.version);
assert.equal(api.PLANTIM_ICONS_REGISTRY_HASH, registry.registryHash);
assert.deepEqual([...api.PLANTIM_ICON_NAMES].sort(), expectedIds);
assert.equal(api.isPlantimIconName("navigation.back"), true);
assert.equal(api.isPlantimIconName("sf.symbol"), false);
assert.equal("iconRegistry" in api, false, "raw SVG registry must remain private");
assert.ok(manifest.exports["./package.json"]);
assert.equal(metadata.PLANTIM_ICONS_VERSION, registry.version);
assert.equal(metadata.PLANTIM_ICONS_REGISTRY_HASH, registry.registryHash);
assert.deepEqual(Object.keys(metadata.PLANTIM_ICON_METADATA).sort(), expectedIds);
assert.equal(JSON.stringify(metadata.PLANTIM_ICON_METADATA).includes('"nodes"'), false);
assert.equal(JSON.stringify(metadata.PLANTIM_ICON_METADATA).includes('"lucide"'), false);

// --- ./v4 subpath (additive; the v2 surface above must stay untouched) ------
const v4Registry = JSON.parse(
  fs.readFileSync(path.join(root, "design-tokens/icons/v4/registry.v4.json"), "utf8"),
);
const v4Entry = path.join(packageRoot, "dist/v4/index.js");
assert.ok(fs.existsSync(v4Entry), "missing v4 entry: dist/v4/index.js");
const v4 = await import(v4Entry);
assert.ok(v4.PlantimIconV4, "dist/v4/index.js must export the PlantimIconV4 component");
assert.ok(v4.PLANTIM_V4_TOKENS, "dist/v4/index.js must export PLANTIM_V4_TOKENS");
assert.equal(v4.PLANTIM_ICONS_V4_VERSION, v4Registry.version);
assert.equal(v4.PLANTIM_ICONS_V4_HASH, v4Registry.v4Hash);
assert.deepEqual({ ...v4.PLANTIM_V4_TOKENS }, v4Registry.tokens, "v4 tokens must match the v4 registry");

// v2 isolation: nothing from v4 may leak into the frozen root export surface,
// and the legacy entry file must not embed v4 code or hashes.
assert.ok(
  Object.keys(api).every((name) => !name.includes("V4")),
  "v4 symbols must not leak into the root export surface",
);
const legacyEntrySource = fs.readFileSync(path.join(packageRoot, "dist/index.js"), "utf8");
assert.ok(!legacyEntrySource.includes("PlantimIconV4"), "dist/index.js must stay free of v4 code");
assert.ok(!legacyEntrySource.includes(v4Registry.v4Hash), "dist/index.js must stay free of the v4 hash");

const v4Ids = Object.keys(v4Registry.icons).sort();
const pascalCase = (id) =>
  id
    .split(".")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");
for (const id of v4Ids) {
  assert.ok(fs.existsSync(path.join(packageRoot, `dist/v4/icons/${id}.js`)), `missing v4 icon module: ${id}`);
  assert.ok(fs.existsSync(path.join(packageRoot, `dist/v4/icons/${id}.d.ts`)), `missing v4 icon types: ${id}`);
}
const sampleId = v4Ids[0];
const sample = await import(path.join(packageRoot, `dist/v4/icons/${sampleId}.js`));
assert.equal(sample.default?.id, sampleId, "v4 icon module default export must be the definition");
assert.equal(sample[pascalCase(sampleId)], sample.default, "v4 icon module must expose the PascalCase named export");
assert.ok(sample.default.grades?.base?.layers?.length > 0, "v4 icon definition must carry base geometry");

const v4Metadata = await import(path.join(packageRoot, "dist/v4/metadata.js"));
assert.deepEqual(Object.keys(v4Metadata.PLANTIM_ICON_V4_METADATA).sort(), v4Ids);
assert.equal(JSON.stringify(v4Metadata.PLANTIM_ICON_V4_METADATA).includes('"nodes"'), false);
assert.equal(JSON.stringify(v4Metadata.PLANTIM_ICON_V4_METADATA).includes('"layers"'), false);

console.log(`Icon package API valid: ${manifest.name}@${manifest.version} (+ ./v4: ${v4Ids.length} icons).`);
