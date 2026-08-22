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

console.log(`Icon package API valid: ${manifest.name}@${manifest.version}.`);
