import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const manifestPath = path.join(root, "design-tokens/navigation/registry.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const expectedHash = crypto
  .createHash("sha256")
  .update(JSON.stringify(manifest.surfaces))
  .digest("hex");
const ts = fs.readFileSync(path.join(root, "packages/plantim-icons/src/navigation.ts"), "utf8");
const swift = fs.readFileSync(
  path.join(root, "packages/PlantimIcons/Sources/PlantimIcons/PlantimNavigation.swift"),
  "utf8",
);
const errors = [];
const swiftName = (id) =>
  id
    .split(".")
    .map((part, index) => (index ? part[0].toUpperCase() + part.slice(1) : part))
    .join("");
for (const [surface, item] of Object.entries(manifest.surfaces)) {
  for (const value of [surface, item.route, item.labelKey, item.icon]) {
    if (!ts.includes(JSON.stringify(value))) errors.push(`TypeScript contract is missing ${surface}: ${value}`);
    const swiftValue = value === surface ? `case ${value}` : value === item.icon ? `.${swiftName(value)}` : JSON.stringify(value);
    if (!swift.includes(swiftValue)) errors.push(`Swift contract is missing ${surface}: ${value}`);
  }
}
for (const generated of [ts, swift]) {
  if (!generated.includes(expectedHash)) errors.push("Generated product contract hash is stale");
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Product navigation contract valid: ${Object.keys(manifest.surfaces).length} surfaces.`);
