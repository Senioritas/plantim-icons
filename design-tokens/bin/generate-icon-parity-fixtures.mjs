import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const registryPath = path.join(root, "design-tokens/icons/registry.json");
const outputPath = path.join(root, "design-tokens/icons/parity-fixtures.json");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));

const stable = (value) => {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)).map(([key, item]) => [key, stable(item)]));
  }
  return value;
};

const geometryFor = (icon) => ({
  viewBox: icon.viewBox,
  nodes: icon.nodes,
  rendering: {
    fill: icon.rendering?.fill ?? "none",
    stroke: icon.rendering?.stroke ?? "currentColor",
    strokeWidth: icon.rendering?.strokeWidth ?? 2,
    lineCap: icon.rendering?.lineCap ?? "round",
    lineJoin: icon.rendering?.lineJoin ?? "round",
    ...(icon.rendering?.fillRule ? { fillRule: icon.rendering.fillRule } : {}),
  },
});

const icons = Object.values(registry.icons)
  .map((icon) => {
    const geometry = stable(geometryFor(icon));
    return {
      id: icon.id,
      category: icon.category,
      accessibility: icon.accessibility,
      accessibilityLabelKey: icon.accessibilityLabelKey ?? null,
      geometry,
      geometryHash: crypto.createHash("sha256").update(JSON.stringify(geometry)).digest("hex"),
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

const fixture = {
  schemaVersion: "1.0.0",
  registryVersion: registry.version,
  registryHash: registry.registryHash,
  iconCount: icons.length,
  renderMatrix: {
    sizes: [16, 20, 24, 32, 48],
    colorSchemes: ["light", "dark"],
    contrast: ["standard", "increased"],
  },
  icons,
};

fs.writeFileSync(outputPath, `${JSON.stringify(fixture, null, 2)}\n`);
console.log(`Generated ${icons.length} icon parity fixtures.`);
