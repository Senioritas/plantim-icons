// Raster gates for v4: solid-variant gap detection and outline<->solid
// silhouette similarity. Renders at 512x512 through Chromium; pass/fail only.
// Usage: node design-tokens/bin/check-v4-raster.mjs [id ...]   (default: all)

import fs from "node:fs";
import path from "node:path";
import {
  openRaster,
  closeRaster,
  rasterAlpha,
  toMask,
  enclosedIslands,
  silhouette,
  iou,
} from "./lib/svg-raster.mjs";

const root = path.resolve(import.meta.dirname, "../..");
const v4Root = path.join(root, "design-tokens/icons/v4");
const SIZE = 512;
const MIN_ISLAND = 20;
const IOU_THRESHOLD = 0.9;

const registry = JSON.parse(fs.readFileSync(path.join(v4Root, "registry.v4.json"), "utf8"));
const only = process.argv.slice(2);
const ids = only.length ? only : Object.keys(registry.icons);

await openRaster();
const failures = [];
let checked = 0;
for (const id of ids) {
  const icon = registry.icons[id];
  if (!icon) {
    failures.push(`${id}: not in registry`);
    continue;
  }
  if (icon.solid.base.mode === "bold") {
    // bold-mode solids share geometry with the outline by construction
    checked += 1;
    continue;
  }
  // Gate at the base grade rendered large; grade geometry differences are
  // inspected visually on the sheets (micro drops are declared, not accidental).
  const outlineSvg = fs.readFileSync(path.join(v4Root, "svg/outline", `${id}@24.svg`), "utf8");
  const solidSvg = fs.readFileSync(path.join(v4Root, "svg/solid", `${id}@24.svg`), "utf8");
  // Recolor currentColor to opaque black for rasterization.
  const paint = (s) => s.replaceAll("currentColor", "#000");
  const oMask = toMask(await rasterAlpha(paint(outlineSvg), SIZE));
  const sMask = toMask(await rasterAlpha(paint(solidSvg), SIZE));

  const islands = enclosedIslands(sMask, SIZE, MIN_ISLAND);
  const declared = icon.solid.base.counters;
  if (islands.length !== declared) {
    failures.push(
      `${id}: solid has ${islands.length} enclosed island(s), declared ${declared} ` +
        `(centroids: ${islands.map((i) => `${Math.round(i.cx)},${Math.round(i.cy)}`).join(" | ") || "none"})`,
    );
  }

  const sim = iou(silhouette(oMask, SIZE), silhouette(sMask, SIZE));
  if (sim < IOU_THRESHOLD) {
    failures.push(`${id}: outline/solid silhouette IoU ${sim.toFixed(3)} < ${IOU_THRESHOLD}`);
  }
  checked += 1;
}
await closeRaster();

if (failures.length) {
  console.error(`v4 raster gate FAILED (${failures.length}/${checked}):`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log(`v4 raster gate passed: ${checked} icons (islands match declared counters, IoU >= ${IOU_THRESHOLD}).`);
