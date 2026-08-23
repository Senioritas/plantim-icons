import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const registry = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/registry.json"), "utf8"));
const fixture = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/parity-fixtures.json"), "utf8"));
const expectedSizes = [16, 20, 24, 32, 48];
const expectedSchemes = ["light", "dark"];
const expectedContrast = ["standard", "increased"];
const expectedAccessibility = ["decorative", "accessible"];

assert.equal(fixture.registryHash, registry.registryHash);
assert.equal(fixture.iconCount, Object.keys(registry.icons).length);
assert.deepEqual(fixture.renderMatrix.sizes, expectedSizes);
assert.deepEqual(fixture.renderMatrix.colorSchemes, expectedSchemes);
assert.deepEqual(fixture.renderMatrix.contrast, expectedContrast);
assert.deepEqual(fixture.renderMatrix.accessibility, expectedAccessibility);
assert.deepEqual(fixture.renderMatrix.strokeVariants, ["normal", "emphasized"]);

const ids = new Set();
for (const icon of fixture.icons) {
  assert.ok(!ids.has(icon.id), `duplicate fixture ID: ${icon.id}`);
  ids.add(icon.id);
  assert.ok(icon.geometryHash.length === 64, `${icon.id}: invalid geometry hash`);
  assert.equal(icon.viewBox, icon.geometry.viewBox, `${icon.id}: viewBox metadata drift`);
  assert.equal(icon.strokeWidth, icon.geometry.rendering.strokeWidth, `${icon.id}: stroke metadata drift`);
  assert.deepEqual(icon.sizes, expectedSizes, `${icon.id}: size matrix drift`);
  assert.deepEqual(icon.colorSchemes, expectedSchemes, `${icon.id}: color matrix drift`);
  assert.deepEqual(icon.contrast, expectedContrast, `${icon.id}: contrast matrix drift`);
  assert.deepEqual(icon.strokeVariants, ["normal", "emphasized"], `${icon.id}: stroke variants drift`);
  assert.deepEqual(icon.accessibilityExamples, expectedAccessibility, `${icon.id}: accessibility matrix drift`);
}

console.log(`Icon fixture contract valid: ${ids.size} icons, exact geometry and ${expectedSizes.length} sizes.`);
