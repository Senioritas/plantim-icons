// Generate the @plantim/icons `./v4` npm subpath from registry.v4.json.
//
// Emits packages/plantim-icons/src/v4/:
//   index.ts        - PlantimIconV4 Vue component, types, tokens, size table (no geometry)
//   icons/<id>.ts   - one tree-shakable definition module per icon
//   metadata.ts     - id -> { tier, verdict, label, category, animation? } (no geometry)
//
// Count-agnostic: everything is derived from the registry; adding icons later
// requires no changes here. Deterministic: sorted iteration, stable key order,
// no timestamps - regeneration is byte-stable for an unchanged registry.
// Rendering semantics mirror design-tokens/bin/lib/v4-render.mjs exactly.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = path.resolve(import.meta.dirname, "../..");
const registryPath = path.join(root, "design-tokens/icons/v4/registry.v4.json");
const outRoot = path.join(root, "packages/plantim-icons/src/v4");
const iconsOut = path.join(outRoot, "icons");

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const { v4Hash, ...payload } = registry;
const expectedHash = crypto.createHash("sha256").update(JSON.stringify(payload)).digest("hex");
if (v4Hash !== expectedHash) {
  throw new Error("v4 registry hash is stale. Run `npm run icons:v4` before generating the package.");
}

const iconIds = Object.keys(registry.icons).sort();
const gradeOrder = ["micro", "base", "display"];

function pascalCase(id) {
  return id
    .split(/[.\-]/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");
}

const pascalNames = new Map();
for (const id of iconIds) {
  const name = pascalCase(id);
  if (!/^[A-Z][A-Za-z0-9]*$/.test(name)) throw new Error(`invalid module export name for ${id}: ${name}`);
  if (pascalNames.has(name)) throw new Error(`PascalCase collision: ${id} vs ${pascalNames.get(name)}`);
  pascalNames.set(name, id);
}

function compactNode(node) {
  return { type: node.type, attrs: node.attrs, ...(node.filled ? { filled: true } : {}) };
}

function compactGrade(grade) {
  // Derived (non-authored) grades duplicate base geometry; omit them so the
  // component's `grades[grade] ?? grades.base` fallback resolves identically.
  if (!grade || !grade.layers || grade.authored === false) return undefined;
  return {
    layers: grade.layers.map((layer) => ({
      name: layer.name,
      role: layer.role,
      nodes: layer.nodes.map(compactNode),
    })),
  };
}

function compactSolid(solid) {
  if (!solid) return undefined;
  if (solid.mode === "bold") {
    return { mode: "bold", strokeWidth: solid.strokeWidth, counters: solid.counters ?? 0 };
  }
  return { paths: solid.paths, counters: solid.counters ?? 0 };
}

function pickGraded(source, transform) {
  const out = {};
  for (const grade of gradeOrder) {
    const value = transform(source?.[grade]);
    if (value !== undefined) out[grade] = value;
  }
  return out;
}

function compactDefinition(icon) {
  const variants = {};
  if (icon.variants?.duotone) variants.duotone = { primary: icon.variants.duotone.primary };
  if (icon.variants?.multicolor) variants.multicolor = icon.variants.multicolor;
  return {
    id: icon.id,
    label: icon.label,
    tier: icon.tier,
    grades: pickGraded(icon.grades, compactGrade),
    solid: pickGraded(icon.solid, compactSolid),
    variants,
    ...(icon.animation ? { animation: icon.animation } : {}),
  };
}

const header = [
  "// GENERATED FILE - do not edit by hand.",
  `// Source: design-tokens/icons/v4/registry.v4.json (v4Hash ${v4Hash}).`,
  "// Regenerate with: npm run icons:v4:package",
].join("\n");

// --- index.ts (component + types + tokens + size table; NO geometry) --------

const sortedTokens = Object.fromEntries(
  Object.keys(registry.tokens)
    .sort()
    .map((role) => [role, { light: registry.tokens[role].light, dark: registry.tokens[role].dark }]),
);
const sizeEntries = Object.entries(registry.sizes.sizes)
  .map(([size, grade]) => [Number(size), grade])
  .sort((a, b) => a[0] - b[0]);
const strokeEntries = gradeOrder
  .filter((grade) => registry.sizes.grades[grade])
  .map((grade) => [grade, registry.sizes.grades[grade].strokeWidth]);

const sizeGradesLiteral = `{ ${sizeEntries.map(([size, grade]) => `${size}: ${JSON.stringify(grade)}`).join(", ")} }`;
const gradeStrokesLiteral = `{ ${strokeEntries.map(([grade, width]) => `${grade}: ${width}`).join(", ")} }`;

const indexTs = `${header}
import { defineComponent, h, type PropType } from "vue";

export const PLANTIM_ICONS_V4_VERSION = ${JSON.stringify(registry.version)} as const;
export const PLANTIM_ICONS_V4_HASH = ${JSON.stringify(v4Hash)} as const;

export type PlantimIconV4Variant = "outline" | "solid" | "duotone" | "multicolor";
export type PlantimIconV4Grade = ${gradeOrder.map((grade) => JSON.stringify(grade)).join(" | ")};
export type PlantimIconV4Tier = "P0" | "P1" | "P2";

export type PlantimIconV4Node = {
  readonly type: string;
  readonly attrs: Readonly<Record<string, string>>;
  readonly filled?: boolean;
};
export type PlantimIconV4Layer = {
  readonly name: string;
  readonly role: string;
  readonly nodes: readonly PlantimIconV4Node[];
};
export type PlantimIconV4GradeGeometry = {
  readonly layers: readonly PlantimIconV4Layer[];
};
export type PlantimIconV4SolidFill = {
  readonly paths: readonly string[];
  readonly counters: number;
};
export type PlantimIconV4SolidBold = {
  readonly mode: "bold";
  readonly strokeWidth: number;
  readonly counters: number;
};
export type PlantimIconV4Solid = PlantimIconV4SolidFill | PlantimIconV4SolidBold;
export type PlantimIconV4Definition = {
  readonly id: string;
  readonly label: string;
  readonly tier: PlantimIconV4Tier;
  readonly grades: {
    readonly base: PlantimIconV4GradeGeometry;
    readonly micro?: PlantimIconV4GradeGeometry;
    readonly display?: PlantimIconV4GradeGeometry;
  };
  readonly solid: {
    readonly base: PlantimIconV4Solid;
    readonly micro?: PlantimIconV4Solid;
    readonly display?: PlantimIconV4Solid;
  };
  readonly variants: {
    readonly duotone?: { readonly primary: readonly string[] };
    readonly multicolor?: Readonly<Record<string, string>>;
  };
  readonly animation?: string;
};
export type PlantimIconV4TokenValue = { readonly light: string; readonly dark: string };
export type PlantimIconV4Props = {
  icon: PlantimIconV4Definition;
  variant?: PlantimIconV4Variant;
  size?: number;
  title?: string;
  decorative?: boolean;
};

export const PLANTIM_V4_TOKENS = Object.freeze(${JSON.stringify(sortedTokens, null, 2)}) as Readonly<Record<string, PlantimIconV4TokenValue>>;

const PLANTIM_V4_SIZE_GRADES = Object.freeze(${sizeGradesLiteral} as const) as Readonly<Record<number, PlantimIconV4Grade>>;
const PLANTIM_V4_GRADE_STROKES = Object.freeze(${gradeStrokesLiteral} as const) as Readonly<Record<PlantimIconV4Grade, number>>;

function gradeForSize(size: number): PlantimIconV4Grade {
  const exact = PLANTIM_V4_SIZE_GRADES[size];
  if (exact) return exact;
  let bestSize = 24;
  let bestDelta = Number.POSITIVE_INFINITY;
  for (const key of Object.keys(PLANTIM_V4_SIZE_GRADES)) {
    const candidate = Number(key);
    const delta = Math.abs(candidate - size);
    if (delta < bestDelta || (delta === bestDelta && candidate < bestSize)) {
      bestSize = candidate;
      bestDelta = delta;
    }
  }
  return PLANTIM_V4_SIZE_GRADES[bestSize] ?? "base";
}

function tokenColor(token: string): string {
  const entry = PLANTIM_V4_TOKENS[token];
  if (!entry) throw new Error("[PlantimIconsV4] Unknown multicolor token: " + token);
  return "var(--pi4-" + token.split(".").join("-") + ", " + entry.light + ")";
}

function renderNode(
  node: PlantimIconV4Node,
  strokeWidth: number,
  color: string,
  key: number,
  opacity?: string,
  token?: string,
) {
  const extra: Record<string, string | number> = { key };
  if (opacity !== undefined) extra.opacity = opacity;
  if (token) extra["data-token"] = token;
  if (node.filled) return h(node.type, { ...node.attrs, fill: color, stroke: "none", ...extra });
  return h(node.type, { ...node.attrs, fill: "none", stroke: color, "stroke-width": strokeWidth, ...extra });
}

export const PlantimIconV4 = defineComponent({
  name: "PlantimIconV4",
  props: {
    icon: { type: Object as PropType<PlantimIconV4Definition>, required: true },
    variant: { type: String as PropType<PlantimIconV4Variant>, default: "outline" },
    size: { type: Number, default: 24 },
    title: String,
    decorative: Boolean,
  },
  setup(props, { attrs }) {
    return () => {
      const icon = props.icon;
      const grade = gradeForSize(props.size);
      const strokeWidth = PLANTIM_V4_GRADE_STROKES[grade];
      const layers = (icon.grades[grade] ?? icon.grades.base).layers;
      const children = [];
      if (props.variant === "outline") {
        for (const layer of layers)
          for (const node of layer.nodes) children.push(renderNode(node, strokeWidth, "currentColor", children.length));
      } else if (props.variant === "duotone") {
        const primary = new Set(icon.variants.duotone?.primary ?? [layers[0].name]);
        for (const layer of layers) {
          const muted = primary.has(layer.name) ? undefined : "0.35";
          for (const node of layer.nodes)
            children.push(renderNode(node, strokeWidth, "currentColor", children.length, muted));
        }
      } else if (props.variant === "multicolor") {
        const map = icon.variants.multicolor ?? {};
        for (const layer of layers) {
          const token = map[layer.name];
          const color = token ? tokenColor(token) : "currentColor";
          for (const node of layer.nodes)
            children.push(renderNode(node, strokeWidth, color, children.length, undefined, token));
        }
      } else if (props.variant === "solid") {
        const solid = icon.solid[grade] ?? icon.solid.base;
        if ("mode" in solid) {
          for (const layer of layers)
            for (const node of layer.nodes)
              children.push(renderNode(node, solid.strokeWidth, "currentColor", children.length));
        } else {
          for (const d of solid.paths)
            children.push(
              h("path", { d, fill: "currentColor", "fill-rule": "evenodd", stroke: "none", key: children.length }),
            );
        }
      } else {
        throw new Error("[PlantimIconsV4] Unknown variant: " + String(props.variant));
      }
      const labelled = Boolean(props.title);
      const decorative = props.decorative || !labelled;
      return h(
        "svg",
        {
          ...attrs,
          width: props.size,
          height: props.size,
          viewBox: "0 0 24 24",
          fill: "none",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          role: decorative ? undefined : "img",
          "aria-hidden": decorative ? "true" : undefined,
          "aria-label": decorative ? undefined : props.title,
        },
        [!decorative && props.title ? h("title", props.title) : null, ...children],
      );
    };
  },
});
`;

// --- icons/<id>.ts -----------------------------------------------------------

fs.rmSync(iconsOut, { recursive: true, force: true });
fs.mkdirSync(iconsOut, { recursive: true });

for (const id of iconIds) {
  const icon = registry.icons[id];
  const name = pascalCase(id);
  const definition = JSON.stringify(compactDefinition(icon), null, 2);
  fs.writeFileSync(
    path.join(iconsOut, `${id}.ts`),
    `${header}
import type { PlantimIconV4Definition } from "../index.js";

export const ${name}: PlantimIconV4Definition = ${definition};

export default ${name};
`,
  );
}

// --- metadata.ts (no geometry) ----------------------------------------------

const metadata = Object.fromEntries(
  iconIds.map((id) => {
    const icon = registry.icons[id];
    return [
      id,
      {
        id,
        tier: icon.tier,
        verdict: icon.verdict,
        label: icon.label,
        category: icon.category,
        ...(icon.animation ? { animation: icon.animation } : {}),
      },
    ];
  }),
);

const metadataTs = `${header}
export { PLANTIM_ICONS_V4_HASH, PLANTIM_ICONS_V4_VERSION } from "./index.js";
export type { PlantimIconV4Tier } from "./index.js";
import type { PlantimIconV4Tier } from "./index.js";

export type PlantimIconV4Metadata = {
  readonly id: string;
  readonly tier: PlantimIconV4Tier;
  readonly verdict: string;
  readonly label: string;
  readonly category: string;
  readonly animation?: string;
};

export const PLANTIM_ICON_V4_METADATA = Object.freeze(${JSON.stringify(metadata, null, 2)}) as Readonly<Record<string, PlantimIconV4Metadata>>;
`;

fs.writeFileSync(path.join(outRoot, "index.ts"), indexTs);
fs.writeFileSync(path.join(outRoot, "metadata.ts"), metadataTs);

console.log(
  `Generated v4 npm subpath: ${iconIds.length} icon modules (v${registry.version}, v4Hash ${v4Hash.slice(0, 12)}).`,
);
