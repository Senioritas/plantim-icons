// Generate the @plantim/icons `./brand` npm subpath from registry.brand.json.
//
// Emits packages/plantim-icons/src/brand/:
//   index.ts           PlantimBrand Vue component, types, names, version + hash
//   brands/<name>.ts   one tree-shakable definition module per mark
//   metadata.ts        name -> { label, owner, usage, ... } (no geometry)
//
// Count-agnostic and deterministic, like the flags subpath. Rendering semantics
// mirror design-tokens/bin/lib/brand-render.mjs exactly — change both together.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { BRAND_GRADES } from "./lib/brand-dsl.mjs";

const root = path.resolve(import.meta.dirname, "../..");
const registryPath = path.join(root, "design-tokens/icons/brand/registry.brand.json");
const outRoot = path.join(root, "packages/plantim-icons/src/brand");
const brandsOut = path.join(outRoot, "brands");

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const { brandHash, ...payload } = registry;
const expected = crypto.createHash("sha256").update(JSON.stringify(payload)).digest("hex");
if (brandHash !== expected) {
  throw new Error("brand registry hash is stale. Run `npm run icons:brand` before generating the package.");
}

const ids = Object.keys(registry.brands).sort();
const nameOf = (id) => id.split(".")[1];
const pascal = (name) => "Brand" + name[0].toUpperCase() + name.slice(1);
const sizeEntries = Object.entries(registry.sizes).map(([s, g]) => [Number(s), g]).sort((a, b) => a[0] - b[0]);

const header = [
  "// GENERATED FILE - do not edit by hand.",
  `// Source: design-tokens/icons/brand/registry.brand.json (brandHash ${brandHash}).`,
  "// Regenerate with: npm run icons:brand:package",
].join("\n");

const indexTs = `${header}
import { defineComponent, h, type PropType } from "vue";

export const PLANTIM_BRAND_VERSION = ${JSON.stringify(registry.version)} as const;
export const PLANTIM_BRAND_HASH = ${JSON.stringify(brandHash)} as const;

/**
 * Brand marks are an asset class, not semantic icons: their colours belong to
 * their owners and never re-theme through Plantim tokens.
 *   color  the owner's colours; pass theme="dark" on dark surfaces (Apple and
 *          GitHub switch to white, Google and Plantim stay the same)
 *   mono   every layer in currentColor, for tinted contexts
 */
export type PlantimBrandVariant = "color" | "mono";
export type PlantimBrandTheme = "light" | "dark";
export type PlantimBrandGrade = ${BRAND_GRADES.map((g) => JSON.stringify(g)).join(" | ")};

export type PlantimBrandLayer = {
  readonly name: string;
  readonly d: string;
  readonly fill: string;
  /** Owner's colour for dark surfaces, when it differs from \`fill\`. */
  readonly dark?: string;
  readonly evenOdd?: boolean;
};
export type PlantimBrandDefinition = {
  readonly id: string;
  readonly name: string;
  readonly label: string;
  readonly accessibilityLabelKey: string;
  readonly grades: {
    readonly base: readonly PlantimBrandLayer[];
    readonly micro?: readonly PlantimBrandLayer[];
    readonly display?: readonly PlantimBrandLayer[];
  };
};
export type PlantimBrandProps = {
  brand: PlantimBrandDefinition;
  variant?: PlantimBrandVariant;
  theme?: PlantimBrandTheme;
  size?: number;
  /** Accessible name. Omit only when adjacent text already names the brand. */
  title?: string;
  decorative?: boolean;
};

export const PLANTIM_BRAND_NAMES = Object.freeze(${JSON.stringify(ids.map(nameOf))} as const);
export type PlantimBrandName = (typeof PLANTIM_BRAND_NAMES)[number];
export function isPlantimBrandName(value: string): value is PlantimBrandName {
  return (PLANTIM_BRAND_NAMES as readonly string[]).includes(value);
}

const SIZE_GRADES = Object.freeze({ ${sizeEntries.map(([s, g]) => `${s}: ${JSON.stringify(g)}`).join(", ")} } as const) as Readonly<Record<number, PlantimBrandGrade>>;

/** Exact size -> grade; other sizes take the nearest listed size (ties go smaller). */
export function plantimBrandGradeForSize(size: number): PlantimBrandGrade {
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

function layerFill(layer: PlantimBrandLayer, variant: PlantimBrandVariant, theme: PlantimBrandTheme): string {
  if (variant === "mono") return "currentColor";
  return theme === "dark" ? (layer.dark ?? layer.fill) : layer.fill;
}

export const PlantimBrand = defineComponent({
  name: "PlantimBrand",
  props: {
    brand: { type: Object as PropType<PlantimBrandDefinition>, required: true },
    variant: { type: String as PropType<PlantimBrandVariant>, default: "color" },
    theme: { type: String as PropType<PlantimBrandTheme>, default: "light" },
    size: { type: Number, default: 24 },
    title: { type: String, default: undefined },
    decorative: { type: Boolean, default: false },
  },
  setup(props, { attrs }) {
    return () => {
      if (props.variant !== "color" && props.variant !== "mono") {
        throw new Error("[PlantimBrand] Unknown variant: " + String(props.variant));
      }
      const grade = plantimBrandGradeForSize(props.size);
      const layers = props.brand.grades[grade] ?? props.brand.grades.base;
      const labelled = Boolean(props.title);
      const decorative = props.decorative || !labelled;
      return h(
        "svg",
        {
          ...attrs,
          xmlns: "http://www.w3.org/2000/svg",
          width: props.size,
          height: props.size,
          viewBox: "0 0 24 24",
          role: decorative ? undefined : "img",
          "aria-hidden": decorative ? "true" : undefined,
          "aria-label": decorative ? undefined : props.title,
        },
        [
          !decorative && props.title ? h("title", props.title) : null,
          ...layers.map((layer) =>
            h("path", {
              d: layer.d,
              fill: layerFill(layer, props.variant, props.theme),
              "fill-rule": layer.evenOdd ? "evenodd" : undefined,
              "data-layer": layer.name,
            }),
          ),
        ],
      );
    };
  },
});
`;

fs.rmSync(brandsOut, { recursive: true, force: true });
fs.mkdirSync(brandsOut, { recursive: true });

for (const id of ids) {
  const b = registry.brands[id];
  const name = nameOf(id);
  const definition = { id: b.id, name, label: b.label, accessibilityLabelKey: b.accessibilityLabelKey, grades: b.grades };
  fs.writeFileSync(
    path.join(brandsOut, `${name}.ts`),
    `${header}
import type { PlantimBrandDefinition } from "../index.js";

export const ${pascal(name)}: PlantimBrandDefinition = ${JSON.stringify(definition, null, 2)};

export default ${pascal(name)};
`,
  );
}

const metadata = Object.fromEntries(
  ids.map((id) => {
    const b = registry.brands[id];
    return [
      nameOf(id),
      {
        id: b.id,
        name: nameOf(id),
        label: b.label,
        category: b.category,
        owner: b.owner,
        usage: b.usage,
        accessibility: b.accessibility,
        accessibilityLabelKey: b.accessibilityLabelKey,
        keywords: b.keywords,
      },
    ];
  }),
);

const metadataTs = `${header}
export { PLANTIM_BRAND_HASH, PLANTIM_BRAND_VERSION } from "./index.js";

export type PlantimBrandMetadata = {
  readonly id: string;
  readonly name: string;
  readonly label: string;
  readonly category: string;
  /** Trademark owner. Third-party marks are not MIT-licensed; see TRADEMARKS.md. */
  readonly owner: string;
  /** Where the mark may appear. */
  readonly usage: string;
  readonly accessibility: string;
  readonly accessibilityLabelKey: string;
  readonly keywords: readonly string[];
};

export const PLANTIM_BRAND_METADATA = Object.freeze(${JSON.stringify(metadata, null, 2)}) as Readonly<Record<string, PlantimBrandMetadata>>;
`;

fs.mkdirSync(outRoot, { recursive: true });
fs.writeFileSync(path.join(outRoot, "index.ts"), indexTs);
fs.writeFileSync(path.join(outRoot, "metadata.ts"), metadataTs);

console.log(`Generated brand npm subpath: ${ids.length} brand modules (v${registry.version}, brandHash ${brandHash.slice(0, 12)}).`);
