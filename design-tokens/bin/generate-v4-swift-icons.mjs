// Generates packages/PlantimIcons/Sources/PlantimIcons/PlantimIconV4.swift from
// registry.v4.json. Count-agnostic: any icon set that follows the v4 schema
// (grades/solid/variants/animation + top-level sizes/tokens) compiles as-is.
// Rendering semantics mirror design-tokens/bin/lib/v4-render.mjs.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const registry = JSON.parse(
  fs.readFileSync(path.join(root, "design-tokens/icons/v4/registry.v4.json"), "utf8"),
);
const template = fs.readFileSync(
  path.join(root, "design-tokens/icons/swift-renderer-v4.template.swift"),
  "utf8",
);
const target = path.join(root, "packages/PlantimIcons/Sources/PlantimIcons/PlantimIconV4.swift");

const GRADES = ["micro", "base", "display"];

const swiftName = (id) => {
  const value = id
    .split(".")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");
  return value[0].toLowerCase() + value.slice(1);
};
const quote = (value) => JSON.stringify(String(value));
const number = (value) => Number.parseFloat(value ?? "0");
const hexComponents = (hex) => {
  const match = /^#([0-9a-fA-F]{6})$/.exec(hex);
  if (!match) throw new Error(`Invalid token hex color: ${hex}`);
  return [0, 2, 4].map((i) => `0x${match[1].slice(i, i + 2).toUpperCase()}`).join(", ");
};

const icons = [...new Map(Object.values(registry.icons).map((icon) => [icon.id, icon])).values()];

const cases = icons.map((icon) => `    case ${swiftName(icon.id)} = ${quote(icon.id)}`).join("\n");

const gradeStrokeCases = GRADES.map(
  (grade) => `        case .${grade}: return ${registry.sizes.grades[grade].strokeWidth}`,
).join("\n");

const sizeGradeEntries = Object.entries(registry.sizes.sizes)
  .map(([size, grade]) => [Number(size), grade])
  .sort((a, b) => a[0] - b[0])
  .map(([size, grade]) => `    (size: ${size}, grade: .${grade})`)
  .join(",\n");

const tokenNames = Object.keys(registry.tokens);
const tokenCases = tokenNames
  .map((name) => `    case ${swiftName(name)} = ${quote(name)}`)
  .join("\n");
const tokenValues = tokenNames
  .map((name) => {
    const { light, dark } = registry.tokens[name];
    return `    .${swiftName(name)}: PlantimV4TokenValue(light: PlantimV4RGB(${hexComponents(light)}), dark: PlantimV4RGB(${hexComponents(dark)}))`;
  })
  .join(",\n");

const animationNames = [...new Set(icons.map((icon) => icon.animation).filter(Boolean))].sort();
const animationCases = animationNames
  .map((name) => `    case ${swiftName(name)} = ${quote(name)}`)
  .join("\n");
const animationEntries = icons
  .filter((icon) => icon.animation)
  .map((icon) => `    .${swiftName(icon.id)}: .${swiftName(icon.animation)}`)
  .join(",\n");
const animationMap = animationEntries ? `[\n${animationEntries},\n]` : "[:]";

const nodeSwift = (node) => {
  const attrs = node.attrs;
  const filled = node.filled ? "true" : "false";
  if (node.type === "path") return `.path(${quote(attrs.d)}, ${filled})`;
  if (node.type === "line")
    return `.line(${number(attrs.x1)}, ${number(attrs.y1)}, ${number(attrs.x2)}, ${number(attrs.y2)}, ${filled})`;
  if (node.type === "polyline") return `.polyline(${quote(attrs.points)}, ${filled})`;
  if (node.type === "polygon") return `.polygon(${quote(attrs.points)}, ${filled})`;
  if (node.type === "circle")
    return `.circle(${number(attrs.cx)}, ${number(attrs.cy)}, ${number(attrs.r)}, ${filled})`;
  if (node.type === "ellipse")
    return `.ellipse(${number(attrs.cx)}, ${number(attrs.cy)}, ${number(attrs.rx)}, ${number(attrs.ry)}, ${filled})`;
  if (node.type === "rect")
    return `.rect(${number(attrs.x)}, ${number(attrs.y)}, ${number(attrs.width)}, ${number(attrs.height)}, ${number(attrs.rx)}, ${filled})`;
  throw new Error(`Unsupported v4 node type: ${node.type}`);
};

const dataCases = icons
  .map((icon) => {
    const gradeEntries = GRADES.filter((grade) => icon.grades?.[grade])
      .map((grade) => {
        const layers = icon.grades[grade].layers
          .map((layer) => `                PlantimV4Layer(${quote(layer.name)}, [${layer.nodes.map(nodeSwift).join(", ")}])`)
          .join(",\n");
        return `            .${grade}: [\n${layers},\n            ]`;
      })
      .join(",\n");
    const solidEntries = GRADES.filter((grade) => icon.solid?.[grade])
      .map((grade) => {
        const solid = icon.solid[grade];
        const value =
          solid.mode === "bold"
            ? `.bold(${number(solid.strokeWidth)})`
            : `.fill([${solid.paths.map(quote).join(", ")}])`;
        return `            .${grade}: ${value}`;
      })
      .join(",\n");
    const solidLiteral = solidEntries ? `[\n${solidEntries},\n        ]` : "[:]";
    const duotonePrimary = (icon.variants?.duotone?.primary ?? []).map(quote).join(", ");
    const multicolorEntries = Object.entries(icon.variants?.multicolor ?? {})
      .map(([layer, token]) => `${quote(layer)}: .${swiftName(token)}`)
      .join(", ");
    const multicolorLiteral = multicolorEntries ? `[${multicolorEntries}]` : "[:]";
    return `    .${swiftName(icon.id)}: PlantimV4IconData(
        grades: [
${gradeEntries},
        ],
        solid: ${solidLiteral},
        duotonePrimary: [${duotonePrimary}],
        multicolor: ${multicolorLiteral}
    )`;
  })
  .join(",\n");

const source = template
  .replace("__VERSION__", registry.version)
  .replace("__V4_HASH__", registry.v4Hash)
  .replace("__ICON_COUNT__", String(icons.length))
  .replace("__CASES__", cases)
  .replace("__GRADE_STROKE_CASES__", gradeStrokeCases)
  .replace("__SIZE_GRADE_ENTRIES__", sizeGradeEntries)
  .replace("__TOKEN_CASES__", tokenCases)
  .replace("__TOKEN_VALUES__", tokenValues)
  .replace("__ANIMATION_CASES__", animationCases)
  .replace("__ANIMATION_MAP__", animationMap)
  .replace("__DATA_CASES__", dataCases);

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, source);

console.log(
  `Generated PlantimIconV4.swift: ${icons.length} icons, ${tokenNames.length} tokens, ${animationNames.length} animations.`,
);
