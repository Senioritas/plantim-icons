import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = path.resolve(import.meta.dirname, "../..");
const registryPath = path.join(root, "design-tokens/icons/registry.json");
const clientRoot = path.join(root, "client/src");
const lucideRoot = path.join(root, "node_modules/@lucide/vue/dist/esm/icons");
const lucideIndex = path.join(root, "node_modules/@lucide/vue/dist/esm/lucide-vue.mjs");
const packageRoot = path.join(root, "packages/plantim-icons/src");
const swiftRoot = path.join(root, "packages/PlantimIcons/Sources/PlantimIcons");
const customRoot = path.join(root, "design-tokens/icons/custom");
const navigationPath = path.join(root, "design-tokens/navigation/registry.json");

function kebab(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

function semanticId(name) {
  const explicit = {
    ArrowLeft: "navigation.back",
    ArrowRight: "navigation.forward",
    ChevronLeft: "navigation.previous",
    ChevronRight: "navigation.next",
    ChevronDown: "navigation.expand",
    ChevronUp: "navigation.collapse",
    X: "navigation.close",
    Plus: "action.add",
    Trash2: "action.delete",
    Pencil: "action.edit",
    Search: "action.search",
    Check: "status.success",
    CheckCircle: "status.success.circle",
    CheckCircle2: "status.success.circle.alt",
    AlertCircle: "status.error",
    AlertTriangle: "status.warning",
    TriangleAlert: "status.warning.alt",
    Info: "status.info",
    Leaf: "plant.growth",
    Sprout: "plant.sprout",
    Droplets: "plant.watering",
    Scissors: "plant.pruning",
    Sun: "weather.sun",
    Moon: "weather.moon",
    Cloud: "weather.cloud",
    Calendar: "calendar.date",
    Clock: "calendar.time",
    MapPin: "location.pin",
    User: "account.user",
    Users: "account.users",
    Home: "navigation.home",
  };
  if (explicit[name]) return explicit[name];
  return `utility.${kebab(name).replaceAll("-", ".")}`;
}

function findFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...findFiles(full));
    else if (/\.(vue|ts)$/.test(entry.name)) out.push(full);
  }
  return out;
}

function importedNames() {
  const names = new Set();
  for (const file of findFiles(clientRoot)) {
    const source = fs.readFileSync(file, "utf8");
  for (const match of source.matchAll(/from\s+["'](?:@lucide\/vue|@plantim\/icons)["']/g)) {
      const before = source.slice(Math.max(0, match.index - 1000), match.index);
      const importMatch = before.match(/import\s+\{([^}]+)\}\s*$/s);
      if (!importMatch) continue;
      for (const item of importMatch[1].split(",")) {
        const raw = item.trim();
        if (raw.startsWith("type ")) continue;
        const name = raw.split(/\s+as\s+/)[0].trim();
        if (/^[A-Z][A-Za-z0-9]*$/.test(name) && name !== "PlantimIcon") names.add(name);
      }
    }
  }
  for (const name of [
    "BadgeCheck",
    "Code",
    "Inbox",
    "Key",
    "LogOut",
    "User",
    "UserX",
    "UserCheck",
    "Square",
    "Cloud",
    "CloudSun",
    "Clock",
    "ArrowDown",
    "PanelLeft",
    "History",
    "RotateCcw",
    "RefreshCw",
    "ScanLine",
    "Globe",
    "Settings",
    "Tag",
    "Cake",
    "Flame",
    "Trophy",
    "Undo2",
    "Upload",
    "BarChart3",
    "Activity",
  ])
    names.add(name);
  return [...names].sort();
}

function parseNodes(name) {
  const indexSource = fs.readFileSync(lucideIndex, "utf8");
  const exportMatch = indexSource.match(
    new RegExp(`export \\{[^}]*default as ${name}[^}]*\\} from ['"]\\./icons/([^'"]+)['"]`),
  );
  const fileName = exportMatch?.[1] ?? `${kebab(name)}.mjs`;
  const file = path.join(lucideRoot, fileName);
  if (!fs.existsSync(file)) throw new Error(`Lucide source not found for ${name}: ${file}`);
  const source = fs.readFileSync(file, "utf8");
  const nodes = [];
  const primitive =
    /\[\s*["'](path|line|polyline|polygon|circle|rect|ellipse)\s*["']\s*,\s*\{([^}]*)\}\s*\]/g;
  for (const match of source.matchAll(primitive)) {
    const attrs = {};
    for (const pair of match[2].matchAll(/([a-zA-Z][a-zA-Z0-9-]*)\s*:\s*["']([^"']*)["']/g))
      attrs[pair[1]] = pair[2];
    if (Object.keys(attrs).length) nodes.push({ type: match[1], attrs });
  }
  if (!nodes.length) throw new Error(`No SVG nodes parsed for ${name}`);
  return nodes;
}

function parseCustomIcon(fileName) {
  const source = fs.readFileSync(path.join(customRoot, fileName), "utf8");
  const viewBox = source.match(/viewBox=["']([^"']+)["']/)?.[1] ?? "0 0 24 24";
  const nodes = [];
  for (const match of source.matchAll(
    /<(path|line|polyline|polygon|circle|rect|ellipse)\b([^>]*)>/g,
  )) {
    const attrs = {};
    for (const pair of match[2].matchAll(/([a-zA-Z][a-zA-Z0-9-]*)=["']([^"']*)["']/g))
      attrs[pair[1]] = pair[2];
    if (Object.keys(attrs).length) nodes.push({ type: match[1], attrs });
  }
  if (!nodes.length) throw new Error(`No SVG nodes parsed for custom icon ${fileName}`);
  return { viewBox, nodes };
}

// The registry is authored data. Generation must never scan application imports
// or rewrite this file: removing a consumer must not remove a public icon.
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const { registryHash, ...registryPayload } = registry;
const expectedHash = crypto
  .createHash("sha256")
  .update(JSON.stringify(registryPayload))
  .digest("hex");
if (registryHash !== expectedHash) {
  throw new Error("Authored icon registry hash is stale. Update it explicitly before generating.");
}
const navigation = JSON.parse(fs.readFileSync(navigationPath, "utf8"));
for (const [surface, item] of Object.entries(navigation.surfaces)) {
  if (!Object.values(registry.icons).some((icon) => icon.id === item.icon)) {
    throw new Error(`Navigation surface ${surface} uses unknown icon ${item.icon}`);
  }
}
const navigationHash = crypto
  .createHash("sha256")
  .update(JSON.stringify(navigation.surfaces))
  .digest("hex");
const names = Object.keys(registry.icons);
fs.mkdirSync(packageRoot, { recursive: true });
const vue = `import { defineComponent, h, type PropType } from "vue";\n\nexport type PlantimIconName = ${Object.values(
  registry.icons,
)
  .map((icon) => JSON.stringify(icon.id))
  .join(
    " | ",
  )};\nexport type PlantimIconProps = { name: PlantimIconName; size?: number | string; strokeWidth?: number; title?: string; decorative?: boolean };\n\nconst iconRegistry = ${JSON.stringify(Object.fromEntries(Object.values(registry.icons).map((icon) => [icon.id, icon])), null, 2)} as const;\nexport const PLANTIM_ICON_NAMES = Object.freeze(Object.keys(iconRegistry) as PlantimIconName[]);\nexport const isPlantimIconName = (value: string): value is PlantimIconName => Object.prototype.hasOwnProperty.call(iconRegistry, value);\n\nexport const PlantimIcon = defineComponent({\n  name: "PlantimIcon",\n  props: { name: { type: String as PropType<PlantimIconName>, required: true }, size: { type: [Number, String] as PropType<number | string>, default: "1em" }, strokeWidth: { type: Number, default: 2 }, title: String, decorative: Boolean },\n  setup(props, { attrs }) {\n    return () => {\n      const icon = iconRegistry[props.name];\n      if (!icon) throw new Error("[PlantimIcons] Unknown semantic icon: " + String(props.name));\n      const labelled = Boolean(props.title);\n      const decorative = props.decorative || !labelled;\n      const children = icon.nodes.map((node, index) => h(node.type, { ...node.attrs, key: index }));\n      return h("svg", { ...attrs, width: props.size, height: props.size, viewBox: icon.viewBox, fill: "none", stroke: "currentColor", "stroke-width": props.strokeWidth, "stroke-linecap": "round", "stroke-linejoin": "round", role: decorative ? undefined : "img", "aria-hidden": decorative ? "true" : undefined, "aria-label": decorative ? undefined : props.title }, [!decorative && props.title ? h("title", props.title) : null, ...children]);\n    };\n  }\n});\n\n${Object.entries(
  registry.icons,
)
  .map(
    ([name, icon]) =>
      `const ${name} = defineComponent({ name: ${JSON.stringify(name)}, inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: ${JSON.stringify(icon.id)} }); } });`,
  )
  .join("\n")}\n`;
const vueWithMetadata = vue.replace(
  'import { defineComponent, h, type PropType } from "vue";',
  `import { defineComponent, h, type PropType } from "vue";\n\nexport const PLANTIM_ICONS_VERSION = ${JSON.stringify(registry.version)} as const;\nexport const PLANTIM_ICONS_REGISTRY_HASH = ${JSON.stringify(registry.registryHash)} as const;`,
);
fs.writeFileSync(
  path.join(packageRoot, "index.ts"),
  vueWithMetadata
    .replace(
      "import { defineComponent, h, type PropType }",
      "import { defineComponent, h, type PropType }",
    )
    .replace(
      "export type PlantimIconProps =",
      "export type PlantimIconProps =",
    ),
);
fs.writeFileSync(path.join(packageRoot, "vue.ts"), `export * from "./index.js";\n`);
const metadata = Object.fromEntries(
  Object.values(registry.icons).map((icon) => [
    icon.id,
    {
      id: icon.id,
      category: icon.category,
      accessibility: icon.accessibility,
      ...(icon.accessibilityLabelKey ? { accessibilityLabelKey: icon.accessibilityLabelKey } : {}),
      ...(icon.deprecated ? { deprecated: true, replacement: icon.replacement } : {}),
    },
  ]),
);
fs.writeFileSync(
  path.join(packageRoot, "metadata.ts"),
  `export { PLANTIM_ICONS_REGISTRY_HASH, PLANTIM_ICONS_VERSION } from "./index.js";\n\nexport type PlantimIconMetadata = { readonly id: string; readonly category: string; readonly accessibility: "decorative" | "semantic" | "status"; readonly accessibilityLabelKey?: string; readonly deprecated?: boolean; readonly replacement?: string };\n\nexport const PLANTIM_ICON_METADATA = Object.freeze(${JSON.stringify(metadata, null, 2)}) as Readonly<Record<string, PlantimIconMetadata>>;\n`,
);

const navigationEntries = Object.entries(navigation.surfaces)
  .map(([surface, item]) => `  ${surface}: { id: ${JSON.stringify(surface)}, route: ${JSON.stringify(item.route)}, labelKey: ${JSON.stringify(item.labelKey)}, icon: ${JSON.stringify(item.icon)} }`)
  .join(",\n");
fs.writeFileSync(
  path.join(packageRoot, "navigation.ts"),
  `import type { PlantimIconName } from "./index.js";\n\nexport const PLANTIM_PRODUCT_CONTRACT_VERSION = ${JSON.stringify(navigation.version)} as const;\nexport const PLANTIM_PRODUCT_CONTRACT_HASH = ${JSON.stringify(navigationHash)} as const;\n\nexport type PlantimNavigationSurface = ${Object.keys(navigation.surfaces).map((surface) => JSON.stringify(surface)).join(" | ")};\nexport type PlantimNavigationItem = { readonly id: PlantimNavigationSurface; readonly route: string; readonly labelKey: string; readonly icon: PlantimIconName };\n\nexport const PlantimNavigation = Object.freeze({\n${navigationEntries}\n} as const satisfies Record<PlantimNavigationSurface, PlantimNavigationItem>);\n`,
);

const swiftCases = Object.values(registry.icons)
  .map(
    (icon) =>
      `    case ${icon.id
        .split(".")
        .map((part, i) => (i ? part[0].toUpperCase() + part.slice(1) : part))
        .join("")} = ${JSON.stringify(icon.id)}`,
  )
  .join("\n");
fs.mkdirSync(swiftRoot, { recursive: true });
fs.writeFileSync(
  path.join(swiftRoot, "PlantimIcon.swift"),
  `import SwiftUI\n\npublic enum PlantimIconName: String, CaseIterable, Sendable {\n${swiftCases}\n}\n\npublic struct PlantimIcon: View {\n    public let name: PlantimIconName\n    public var size: CGFloat\n    public var strokeWidth: CGFloat\n\n    public init(_ name: PlantimIconName, size: CGFloat = 24, strokeWidth: CGFloat = 2) {\n        self.name = name\n        self.size = size\n        self.strokeWidth = strokeWidth\n    }\n\n    public var body: some View {\n        // Generated geometry is added by the Swift adapter generator.\n        RoundedRectangle(cornerRadius: 2).stroke(lineWidth: strokeWidth).frame(width: size, height: size)\n            .accessibilityHidden(true)\n    }\n}\n`,
);

console.log(`Generated ${names.length} Plantim icons from Lucide geometry.`);
