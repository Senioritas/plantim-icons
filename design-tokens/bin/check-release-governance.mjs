import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const workflow = fs.readFileSync(path.join(root, ".github/workflows/icons-release.yml"), "utf8");
const packageManifest = JSON.parse(fs.readFileSync(path.join(root, "packages/plantim-icons/package.json"), "utf8"));

assert.match(workflow, /id-token:\s*write/, "release must request npm provenance identity");
assert.match(workflow, /npm publish --provenance --access public/, "release must publish provenance");
assert.match(workflow, /NODE_AUTH_TOKEN:\s*\$\{\{ secrets\.NPM_TOKEN \}\}/, "token fallback must be explicit until trusted publishing is configured");
assert.doesNotMatch(workflow, /actions\/(?:checkout|setup-node)@v\d+(?:\s|$)/m, "release actions must be pinned to commits");
assert.ok(fs.existsSync(path.join(root, "RELEASING.md")), "RELEASING.md is required");
assert.ok(fs.existsSync(path.join(root, "TRADEMARKS.md")), "TRADEMARKS.md is required");
assert.equal(packageManifest.publishConfig?.access, "public");
assert.equal(packageManifest.version, "2.0.0");
console.log("Release governance valid: provenance, pinned actions, public access, and documented trusted-publisher transition.");
