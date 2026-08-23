import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "../..");
const registry = JSON.parse(
  fs.readFileSync(path.join(root, "design-tokens/icons/registry.json"), "utf8"),
);
const expected = Object.values(registry.icons).map((icon) => icon.id).sort();

const packageModule = await import(
  pathToFileURL(path.join(root, "packages/plantim-icons/dist/index.js")),
);
const webNames = [...packageModule.PLANTIM_ICON_NAMES].sort();
const swiftSource = fs.readFileSync(
  path.join(root, "packages/PlantimIcons/Sources/PlantimIcons/PlantimIcon.swift"),
  "utf8",
);
const swiftNames = [...swiftSource.matchAll(/=\s*"([^"]+)"/g)]
  .map((match) => match[1])
  .filter((name) => expected.includes(name))
  .sort();
const swiftHash = swiftSource.match(/registryHash = "([a-f0-9]{64})"/)?.[1];

const mismatches = [];
if (JSON.stringify(webNames) !== JSON.stringify(expected)) {
  mismatches.push("web generated icon names differ from the canonical registry");
}
if (JSON.stringify(swiftNames) !== JSON.stringify(expected)) {
  mismatches.push("Swift generated icon names differ from the canonical registry");
}
if (packageModule.PLANTIM_ICONS_REGISTRY_HASH !== swiftHash) {
  mismatches.push("web and Swift registry hashes differ");
}

const gallerySpec = fs.readFileSync(path.join(root, "gallery/web/gallery.spec.ts"), "utf8");
if (!gallerySpec.includes(`toHaveCount(${expected.length})`)) {
  mismatches.push("web gallery does not assert the complete registry count");
}

if (mismatches.length) {
  console.error(mismatches.join("\n"));
  process.exit(1);
}

console.log(
  `Cross-platform icon parity valid: ${expected.length} icons, registry ${packageModule.PLANTIM_ICONS_REGISTRY_HASH}.`,
);
