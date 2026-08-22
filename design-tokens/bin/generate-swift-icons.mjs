import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const registry = JSON.parse(
  fs.readFileSync(path.join(root, "design-tokens/icons/registry.json"), "utf8"),
);
const template = fs.readFileSync(
  path.join(root, "design-tokens/icons/swift-renderer.template.swift"),
  "utf8",
);
const targets = [path.join(root, "packages/PlantimIcons/Sources/PlantimIcons/PlantimIcon.swift")];
if (process.env.PLANTIM_IOS_OUTPUT) {
  targets.push(path.resolve(root, process.env.PLANTIM_IOS_OUTPUT));
}

const swiftName = (id) => {
  const value = id
    .split(".")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");
  return value[0].toLowerCase() + value.slice(1);
};
const quote = (value) => JSON.stringify(String(value));
const number = (value) => Number.parseFloat(value ?? "0");
const unique = [...new Map(Object.values(registry.icons).map((icon) => [icon.id, icon])).values()];

const cases = unique.map((icon) => `    case ${swiftName(icon.id)} = ${quote(icon.id)}`).join("\n");
const dataCases = unique
  .map((icon) => {
    const nodes = icon.nodes
      .map((node) => {
        const attrs = node.attrs;
        if (node.type === "path") return `.path(${quote(attrs.d)})`;
        if (node.type === "line")
          return `.line(${number(attrs.x1)}, ${number(attrs.y1)}, ${number(attrs.x2)}, ${number(attrs.y2)})`;
        if (node.type === "polyline") return `.polyline(${quote(attrs.points)})`;
        if (node.type === "polygon") return `.polygon(${quote(attrs.points)})`;
        if (node.type === "circle")
          return `.circle(${number(attrs.cx)}, ${number(attrs.cy)}, ${number(attrs.r)})`;
        if (node.type === "ellipse")
          return `.ellipse(${number(attrs.cx)}, ${number(attrs.cy)}, ${number(attrs.rx)}, ${number(attrs.ry)})`;
        if (node.type === "rect")
          return `.rect(${number(attrs.x)}, ${number(attrs.y)}, ${number(attrs.width)}, ${number(attrs.height)}, ${number(attrs.rx)})`;
        throw new Error(`Unsupported SVG node type: ${node.type}`);
      })
      .join(", ");
    return `        .${swiftName(icon.id)}: [${nodes}]`;
  })
  .join(",\n");
const accessibilityCases = unique
  .map((icon) => `    .${swiftName(icon.id)}: ${quote(icon.accessibility)}`)
  .join(",\n");

const source = template
  .replace("__VERSION__", registry.version)
  .replace("__REGISTRY_HASH__", registry.registryHash)
  .replace("__CASES__", cases)
  .replace("__DATA_CASES__", dataCases)
  .replace("__ACCESSIBILITY_CASES__", accessibilityCases);

for (const target of targets) {
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, source);
}

console.log(`Generated native Swift renderer for ${unique.length} icons.`);
