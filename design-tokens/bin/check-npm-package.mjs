import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const packageRoot = path.join(root, "packages/plantim-icons");
const manifest = JSON.parse(fs.readFileSync(path.join(packageRoot, "package.json"), "utf8"));
const registry = JSON.parse(
  fs.readFileSync(path.join(root, "design-tokens/icons/registry.json"), "utf8"),
);

assert.equal(manifest.private, false, "the package must be publishable");
assert.equal(manifest.version, registry.version, "package and registry versions must match");
assert.equal(
  manifest.publishConfig?.access,
  "public",
  "open-source package must publish as public",
);
assert.ok(
  !manifest.dependencies?.["lucide-vue-next"],
  "Lucide must not be a runtime package dependency",
);
assert.ok(manifest.sideEffects === false, "the package must remain tree-shakeable");
assert.ok(manifest.peerDependencies?.vue, "Vue must remain an explicit peer dependency");

for (const file of [
  "dist/index.js",
  "dist/index.d.ts",
  "dist/vue.js",
  "dist/vue.d.ts",
  "dist/metadata.js",
]) {
  assert.ok(fs.existsSync(path.join(packageRoot, file)), `missing publish artifact: ${file}`);
}

for (const file of ["dist/index.js", "dist/index.d.ts"]) {
  const source = fs.readFileSync(path.join(packageRoot, file), "utf8");
  assert.ok(source.includes(registry.registryHash), `stale publish artifact: ${file}`);
  assert.ok(!source.includes("lucide-vue-next"), `forbidden Lucide runtime import: ${file}`);
  assert.ok(!source.includes("LucideIcon"), `legacy Lucide type leaked into: ${file}`);
  assert.ok(
    !/export const (?!PlantimIcon\b|PLANTIM_ICON_NAMES\b|isPlantimIconName\b|PLANTIM_ICONS_VERSION\b|PLANTIM_ICONS_REGISTRY_HASH\b)[A-Z]/.test(
      source,
    ),
    `legacy named icon export leaked into: ${file}`,
  );
}

const packed = execFileSync("npm", ["pack", "--dry-run", "--json", "--ignore-scripts"], {
  cwd: packageRoot,
  encoding: "utf8",
});
let packMetadata;
try {
  // npm 11 may print lifecycle output before its `--json` payload, even with
  // `--ignore-scripts`. The pack metadata is the final JSON array.
  const metadataStart = packed.lastIndexOf("\n[");
  packMetadata = JSON.parse(
    metadataStart === -1 ? packed.trim() : packed.slice(metadataStart + 1).trim(),
  );
} catch {
  assert.fail("npm pack did not return JSON metadata");
}
const files = new Set(packMetadata[0].files.map(({ path: file }) => file));
for (const file of [
  "package.json",
  "README.md",
  "CHANGELOG.md",
  "LICENSE",
  "NOTICE",
  "dist/index.js",
  "dist/index.d.ts",
  "dist/vue.js",
  "dist/metadata.js",
]) {
  assert.ok(files.has(file), `publish tarball is missing ${file}`);
}
assert.ok(
  [...files].every((file) => !file.startsWith("src/") && !file.endsWith(".map")),
  "publish tarball must not expose raw registry source or unusable source maps",
);

console.log(
  `npm package is publish-ready: ${manifest.name}@${manifest.version} (${files.size} files).`,
);
