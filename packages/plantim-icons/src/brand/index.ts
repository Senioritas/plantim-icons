// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/brand/registry.brand.json (brandHash e56b034f2b83163acda0c2f8b3507441eee8517e0310b581185abe7cff964685).
// Regenerate with: npm run icons:brand:package
import { defineComponent, h, type PropType } from "vue";

export const PLANTIM_BRAND_VERSION = "4.2.0" as const;
export const PLANTIM_BRAND_HASH = "e56b034f2b83163acda0c2f8b3507441eee8517e0310b581185abe7cff964685" as const;

/**
 * Brand marks are an asset class, not semantic icons: their colours belong to
 * their owners and never re-theme through Plantim tokens.
 *   color  the owner's colours; pass theme="dark" on dark surfaces (Apple and
 *          GitHub switch to white, Google and Plantim stay the same)
 *   mono   every layer in currentColor, for tinted contexts
 */
export type PlantimBrandVariant = "color" | "mono";
export type PlantimBrandTheme = "light" | "dark";
export type PlantimBrandGrade = "micro" | "base" | "display";

export type PlantimBrandLayer = {
  readonly name: string;
  readonly d: string;
  readonly fill: string;
  /** Owner's colour for dark surfaces, when it differs from `fill`. */
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

export const PLANTIM_BRAND_NAMES = Object.freeze(["apple","github","google","plantim"] as const);
export type PlantimBrandName = (typeof PLANTIM_BRAND_NAMES)[number];
export function isPlantimBrandName(value: string): value is PlantimBrandName {
  return (PLANTIM_BRAND_NAMES as readonly string[]).includes(value);
}

const SIZE_GRADES = Object.freeze({ 16: "micro", 20: "micro", 24: "base", 32: "base", 48: "display", 72: "display", 96: "display", 128: "display", 192: "display", 256: "display", 512: "display" } as const) as Readonly<Record<number, PlantimBrandGrade>>;

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
