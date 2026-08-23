import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const workflow = fs.readFileSync(path.join(root, ".github/workflows/icons-release.yml"), "utf8");
const workspaceManifest = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const packageManifest = JSON.parse(fs.readFileSync(path.join(root, "packages/plantim-icons/package.json"), "utf8"));
const registry = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/registry.json"), "utf8"));
const npmVersion = workspaceManifest.packageManager?.match(/^npm@(.+)$/)?.[1];

assert.ok(npmVersion, "workspace packageManager must pin npm exactly");

assert.match(workflow, /id-token:\s*write/, "release must request npm provenance identity");
assert.match(workflow, new RegExp(`npm install --global npm@${npmVersion.replaceAll(".", "\\.")}`), "release must install the pinned npm version");
assert.match(workflow, /package-manager-cache:\s*false/, "release builds must disable npm caching");
assert.match(workflow, /npm publish --provenance --access public/, "release must publish publicly with provenance");
assert.doesNotMatch(workflow, /NODE_AUTH_TOKEN|NPM_TOKEN/, "trusted publishing workflow must not use a long-lived npm token");
assert.doesNotMatch(workflow, /actions\/(?:checkout|setup-node)@v\d+(?:\s|$)/m, "release actions must be pinned to commits");
assert.ok(fs.existsSync(path.join(root, "RELEASING.md")), "RELEASING.md is required");
assert.ok(fs.existsSync(path.join(root, "TRADEMARKS.md")), "TRADEMARKS.md is required");
assert.equal(packageManifest.publishConfig?.access, "public");
assert.equal(packageManifest.version, registry.version);
console.log("Release governance valid: provenance, pinned actions, public access, and documented trusted-publisher transition.");
