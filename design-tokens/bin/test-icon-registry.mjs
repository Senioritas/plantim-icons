import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const registry = JSON.parse(
  fs.readFileSync(path.join(root, "design-tokens/icons/registry.json"), "utf8"),
);
const entries = Object.values(registry.icons);
const ids = entries.map((icon) => icon.id);
const aliases = entries.flatMap((icon) => icon.aliases ?? []);

assert.equal(new Set(ids).size, ids.length, "semantic IDs must be unique");
assert.ok(
  entries.length >= 150,
  "the registry must include the approved standard and custom icon set",
);
assert.ok(entries.some((icon) => icon.custom && icon.id === "plant.watering.can"));
assert.ok(entries.some((icon) => icon.id === "navigation.back"));
assert.ok(entries.some((icon) => icon.accessibility === "status"));
assert.ok(entries.every((icon) => !icon.id.startsWith("lucide.")));
assert.ok(entries.every((icon) => icon.category === icon.id.split(".")[0]));
assert.equal(new Set(aliases).size, aliases.length, "aliases must be unique");
assert.ok(aliases.every((alias) => alias.startsWith("lucide.")), "legacy aliases must be source-only");

for (const icon of entries) {
  assert.equal(icon.viewBox, "0 0 24 24", `${icon.id} must use the normalized viewBox`);
  assert.ok(icon.nodes.length > 0, `${icon.id} must contain geometry`);
  if (icon.accessibility === "status")
    assert.ok(icon.accessibilityLabelKey, `${icon.id} must have an accessibility label key`);
}

console.log(`Icon registry tests passed: ${entries.length} icons.`);
