import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const webGallery = fs.readFileSync(
  path.join(root, "gallery/web/PlantimIconGallery.stories.ts"),
  "utf8",
);
const iosGallery = fs.readFileSync(
  path.join(root, "gallery/ios/PlantimIconGallery.swift"),
  "utf8",
);

assert.match(webGallery, /PLANTIM_ICON_NAMES/, "web gallery must use generated icon names");
assert.match(webGallery, /<PlantimIcon :name="name"/, "web gallery must render every icon");
assert.match(iosGallery, /PlantimIconName\.allCases/, "iOS gallery must render every icon");
assert.match(iosGallery, /PlantimIcon\(icon, size: size\)/, "iOS gallery must render canonical geometry");

console.log("Generated web and iOS icon galleries are wired to the canonical registry.");
