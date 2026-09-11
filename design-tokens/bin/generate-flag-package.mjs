// Generate the @plantim/icons `./flags` npm subpath from registry.flags.json.
//
// Emits packages/plantim-icons/src/flags/:
//   index.ts          PlantimFlag Vue component, types, codes, version + hash
//   flags/<code>.ts   one tree-shakable definition module per flag
//   metadata.ts       code -> { label, category, accessibility } (no geometry)
//
// Count-agnostic: everything derives from the registry, so adding a flag needs
// no change here. Deterministic: sorted iteration, stable key order, no
// timestamps. Rendering semantics mirror design-tokens/bin/lib/flag-render.mjs
// exactly — if one changes, change both.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import {
  FLAG_VARIANTS,
  FLAG_COLOR_VARIANTS,
  CIRCLE_R,
  CIRCLE_SCALE,
} from "./lib/flag-render.mjs";
import { FLAG_W, FLAG_H, FLAG_ORIGIN, FLAG_RX } from "./lib/flag-dsl.mjs";

const root = path.resolve(import.meta.dirname, "../..");
const registryPath = path.join(root, "design-tokens/icons/flags/registry.flags.json");
const outRoot = path.join(root, "packages/plantim-icons/src/flags");
const flagsOut = path.join(outRoot, "flags");

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const { flagsHash, ...payload } = registry;
const expected = crypto.createHash("sha256").update(JSON.stringify(payload)).digest("hex");
if (flagsHash !== expected) {
  throw new Error("flag registry hash is stale. Run `npm run icons:flags` before generating the package.");
}

const ids = Object.keys(registry.flags).sort();
const codeOf = (id) => id.split(".")[1];
const pascal = (code) => "Flag" + code[0].toUpperCase() + code.slice(1);

const sizesCfg = registry.sizes;
const sizeEntries = Object.entries(sizesCfg.sizes).map(([s, g]) => [Number(s), g]).sort((a, b) => a[0] - b[0]);
const strokeEntries = ["micro", "base", "display"].filter((g) => sizesCfg.grades[g]).map((g) => [g, sizesCfg.grades[g].strokeWidth]);

const header = [
  "// GENERATED FILE - do not edit by hand.",
  `// Source: design-tokens/icons/flags/registry.flags.json (flagsHash ${flagsHash}).`,
  "// Regenerate with: npm run icons:flags:package",
].join("\n");

const indexTs = `${header}
import { defineComponent, h, type PropType } from "vue";

export const PLANTIM_FLAGS_VERSION = ${JSON.stringify(registry.version)} as const;
export const PLANTIM_FLAGS_HASH = ${JSON.stringify(flagsHash)} as const;

/**
 * Flags are an asset class, not semantic icons: their colours are fixed by
 * vexillology and must not re-theme, so there is no outline/solid pair and no
 * token mapping. Two shapes, each in a colour and a mono treatment:
 *   color        rounded-rect flag, authored colours
 *   mono         rect frame + partition lines in currentColor
 *   circle       the same flag cropped into a disc (avatar/locale-chip shape)
 *   circle.mono  disc outline + the same partitions
 */
export type PlantimFlagVariant = ${FLAG_VARIANTS.map((v) => JSON.stringify(v)).join(" | ")};
export type PlantimFlagGrade = ${strokeEntries.map(([g]) => JSON.stringify(g)).join(" | ")};

export type PlantimFlagShape = {
  readonly type: "rect" | "circle" | "path" | "line" | "spath";
  readonly fill?: string;
  readonly stroke?: string;
  readonly width?: number;
  readonly d?: string;
  readonly x?: number;
  readonly y?: number;
  readonly w?: number;
  readonly h?: number;
  readonly cx?: number;
  readonly cy?: number;
  readonly r?: number;
  readonly x1?: number;
  readonly y1?: number;
  readonly x2?: number;
  readonly y2?: number;
};
export type PlantimFlagLayer = {
  readonly name: string;
  /** false = dropped at the micro grade (16/20 px) to keep the flag legible. */
  readonly micro: boolean;
  readonly shapes: readonly PlantimFlagShape[];
};
export type PlantimFlagNode = {
  readonly type: string;
  readonly attrs: Readonly<Record<string, string>>;
  readonly filled?: boolean;
};
export type PlantimFlagDefinition = {
  readonly id: string;
  readonly code: string;
  readonly label: string;
  readonly accessibilityLabelKey: string;
  readonly layers: readonly PlantimFlagLayer[];
  readonly mono: {
    readonly base: readonly PlantimFlagNode[];
    readonly micro?: readonly PlantimFlagNode[];
  };
};
export type PlantimFlagProps = {
  flag: PlantimFlagDefinition;
  variant?: PlantimFlagVariant;
  size?: number;
  /** Accessible name. Omit only for a flag that repeats adjacent text. */
  title?: string;
  decorative?: boolean;
};

export const PLANTIM_FLAG_CODES = Object.freeze(${JSON.stringify(ids.map(codeOf))} as const);
export type PlantimFlagCode = (typeof PLANTIM_FLAG_CODES)[number];
export function isPlantimFlagCode(value: string): value is PlantimFlagCode {
  return (PLANTIM_FLAG_CODES as readonly string[]).includes(value);
}

const FLAG_W = ${FLAG_W};
const FLAG_H = ${FLAG_H};
const FLAG_X = ${FLAG_ORIGIN.x};
const FLAG_Y = ${FLAG_ORIGIN.y};
const FLAG_RX = ${FLAG_RX};
const CIRCLE_R = ${CIRCLE_R};
const CIRCLE_SCALE = ${CIRCLE_SCALE};
const BORDER = { stroke: "#000000", "stroke-opacity": "0.12", "stroke-width": 1, fill: "none", "data-role": "border" };

const SIZE_GRADES = Object.freeze({ ${sizeEntries.map(([s, g]) => `${s}: ${JSON.stringify(g)}`).join(", ")} } as const) as Readonly<Record<number, PlantimFlagGrade>>;
const GRADE_STROKES = Object.freeze({ ${strokeEntries.map(([g, w]) => `${g}: ${w}`).join(", ")} } as const) as Readonly<Record<PlantimFlagGrade, number>>;

function gradeForSize(size: number): PlantimFlagGrade {
  const exact = SIZE_GRADES[size];
  if (exact) return exact;
  let bestSize = 24;
  let bestDelta = Number.POSITIVE_INFINITY;
  for (const key of Object.keys(SIZE_GRADES)) {
    const candidate = Number(key);
    const delta = Math.abs(candidate - size);
    if (delta < bestDelta || (delta === bestDelta && candidate < bestSize)) {
      bestSize = candidate;
      bestDelta = delta;
    }
  }
  return SIZE_GRADES[bestSize] ?? "base";
}

function shapeNode(shape: PlantimFlagShape) {
  switch (shape.type) {
    case "rect":
      return h("rect", { x: shape.x, y: shape.y, width: shape.w, height: shape.h, fill: shape.fill });
    case "circle":
      return h("circle", { cx: shape.cx, cy: shape.cy, r: shape.r, fill: shape.fill });
    case "path":
      return h("path", { d: shape.d, fill: shape.fill });
    case "line":
      return h("line", { x1: shape.x1, y1: shape.y1, x2: shape.x2, y2: shape.y2, stroke: shape.stroke, "stroke-width": shape.width, "stroke-linecap": "butt" });
    case "spath":
      return h("path", { d: shape.d, fill: "none", stroke: shape.stroke, "stroke-width": shape.width });
    default:
      throw new Error("[PlantimFlag] Unknown shape: " + String((shape as { type: string }).type));
  }
}

function monoNode(node: PlantimFlagNode, strokeWidth: number) {
  if (node.filled) return h(node.type, { ...node.attrs, fill: "currentColor", stroke: "none" });
  return h(node.type, { ...node.attrs, fill: "none", stroke: "currentColor", "stroke-width": strokeWidth });
}

/** Stable per-flag, per-variant clip id: the geometry is identical for every
 *  instance, so sharing the id across instances is safe and SSR-deterministic. */
function clipId(id: string, variant: string): string {
  return "pf-" + id.replace(/[^a-z0-9]/g, "-") + "-" + variant.replace(/[^a-z0-9]/g, "-");
}

export const PlantimFlag = defineComponent({
  name: "PlantimFlag",
  props: {
    flag: { type: Object as PropType<PlantimFlagDefinition>, required: true },
    variant: { type: String as PropType<PlantimFlagVariant>, default: "color" },
    size: { type: Number, default: 24 },
    title: { type: String, default: undefined },
    decorative: { type: Boolean, default: false },
  },
  setup(props, { attrs }) {
    return () => {
      const grade = gradeForSize(props.size);
      const strokeWidth = GRADE_STROKES[grade];
      const cid = clipId(props.flag.id, props.variant);
      // Evolving array type, as in the v4 component: TS infers it from the pushes.
      const children = [];

      const colourLayers = () =>
        props.flag.layers
          .filter((layer) => grade !== "micro" || layer.micro)
          .map((layer) => h("g", { "data-layer": layer.name }, layer.shapes.map(shapeNode)));
      const monoNodes = grade === "micro" && props.flag.mono.micro ? props.flag.mono.micro : props.flag.mono.base;

      if (props.variant === "color") {
        children.push(h("clipPath", { id: cid }, [h("rect", { x: FLAG_X, y: FLAG_Y, width: FLAG_W, height: FLAG_H, rx: FLAG_RX })]));
        children.push(h("g", { "clip-path": "url(#" + cid + ")" }, [h("g", { transform: "translate(" + FLAG_X + " " + FLAG_Y + ")" }, colourLayers())]));
        children.push(h("rect", { x: FLAG_X + 0.5, y: FLAG_Y + 0.5, width: FLAG_W - 1, height: FLAG_H - 1, rx: FLAG_RX - 0.5, ...BORDER }));
      } else if (props.variant === "circle") {
        children.push(h("clipPath", { id: cid }, [h("circle", { cx: 12, cy: 12, r: CIRCLE_R })]));
        children.push(
          h("g", { "clip-path": "url(#" + cid + ")" }, [
            h("g", { transform: "translate(12 12) scale(" + CIRCLE_SCALE + ") translate(" + -FLAG_W / 2 + " " + -FLAG_H / 2 + ")" }, colourLayers()),
          ]),
        );
        children.push(h("circle", { cx: 12, cy: 12, r: CIRCLE_R - 0.5, ...BORDER }));
      } else if (props.variant === "mono") {
        children.push(h("rect", { x: FLAG_X, y: FLAG_Y, width: FLAG_W, height: FLAG_H, rx: FLAG_RX, fill: "none", stroke: "currentColor", "stroke-width": strokeWidth }));
        for (const node of monoNodes) children.push(monoNode(node, strokeWidth));
      } else if (props.variant === "circle.mono") {
        children.push(h("clipPath", { id: cid }, [h("circle", { cx: 12, cy: 12, r: CIRCLE_R })]));
        children.push(h("circle", { cx: 12, cy: 12, r: CIRCLE_R, fill: "none", stroke: "currentColor", "stroke-width": strokeWidth }));
        children.push(
          h("g", { "clip-path": "url(#" + cid + ")" }, [
            h(
              "g",
              { transform: "translate(12 12) scale(" + CIRCLE_SCALE + ") translate(-12 -12)" },
              monoNodes.map((node) => monoNode(node, Math.round((strokeWidth / CIRCLE_SCALE) * 1000) / 1000)),
            ),
          ]),
        );
      } else {
        throw new Error("[PlantimFlag] Unknown variant: " + String(props.variant));
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

// --- flags/<code>.ts ---------------------------------------------------------

fs.rmSync(flagsOut, { recursive: true, force: true });
fs.mkdirSync(flagsOut, { recursive: true });

for (const id of ids) {
  const flag = registry.flags[id];
  const code = codeOf(id);
  const definition = {
    id: flag.id,
    code,
    label: flag.label,
    accessibilityLabelKey: flag.accessibilityLabelKey,
    layers: flag.layers,
    mono: flag.mono,
  };
  fs.writeFileSync(
    path.join(flagsOut, `${code}.ts`),
    `${header}
import type { PlantimFlagDefinition } from "../index.js";

export const ${pascal(code)}: PlantimFlagDefinition = ${JSON.stringify(definition, null, 2)};

export default ${pascal(code)};
`,
  );
}

// --- metadata.ts (no geometry) ----------------------------------------------

const metadata = Object.fromEntries(
  ids.map((id) => {
    const flag = registry.flags[id];
    return [
      codeOf(id),
      {
        id: flag.id,
        code: codeOf(id),
        label: flag.label,
        category: flag.category,
        accessibility: flag.accessibility,
        accessibilityLabelKey: flag.accessibilityLabelKey,
        keywords: flag.keywords,
      },
    ];
  }),
);

const metadataTs = `${header}
export { PLANTIM_FLAGS_HASH, PLANTIM_FLAGS_VERSION } from "./index.js";

export type PlantimFlagMetadata = {
  readonly id: string;
  readonly code: string;
  readonly label: string;
  readonly category: string;
  readonly accessibility: string;
  readonly accessibilityLabelKey: string;
  readonly keywords: readonly string[];
};

export const PLANTIM_FLAG_METADATA = Object.freeze(${JSON.stringify(metadata, null, 2)}) as Readonly<Record<string, PlantimFlagMetadata>>;
`;

fs.mkdirSync(outRoot, { recursive: true });
fs.writeFileSync(path.join(outRoot, "index.ts"), indexTs);
fs.writeFileSync(path.join(outRoot, "metadata.ts"), metadataTs);

console.log(
  `Generated flags npm subpath: ${ids.length} flag modules (v${registry.version}, flagsHash ${flagsHash.slice(0, 12)}).`,
);
