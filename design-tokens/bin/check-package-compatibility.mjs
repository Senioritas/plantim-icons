import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "packages/plantim-icons/package.json"), "utf8"));
const workspace = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

assert.equal(manifest.type, "module", "runtime package must be ESM");
assert.equal(manifest.engines.node, ">=18", "runtime Node support must be explicit");
assert.equal(manifest.peerDependencies.vue, ">=3.0.0", "minimum Vue peer support must be explicit");
assert.equal(workspace.engines.node, ">=22.18.0", "repository tooling Node support must be explicit");
assert.equal(workspace.engines.npm, ">=11.12.1", "repository tooling npm support must be explicit");
for (const [subpath, config] of Object.entries(manifest.exports)) {
  if (subpath !== "./package.json") {
    assert.ok(config.import, `${subpath} must expose an ESM import entry`);
    assert.ok(config.types, `${subpath} must expose a TypeScript declaration entry`);
  }
}
assert.deepEqual(Object.keys(manifest.dependencies ?? {}), [], "runtime dependencies must stay empty");
assert.ok(manifest.sideEffects === false, "runtime package must be tree-shakeable");
console.log("Package compatibility contract valid: runtime Node >=18, Vue >=3; tooling Node >=22.18/npm >=11.12.");
