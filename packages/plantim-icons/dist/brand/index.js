// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/brand/registry.brand.json (brandHash e56b034f2b83163acda0c2f8b3507441eee8517e0310b581185abe7cff964685).
// Regenerate with: npm run icons:brand:package
import { defineComponent, h } from "vue";
export const PLANTIM_BRAND_VERSION = "4.2.0";
export const PLANTIM_BRAND_HASH = "e56b034f2b83163acda0c2f8b3507441eee8517e0310b581185abe7cff964685";
export const PLANTIM_BRAND_NAMES = Object.freeze(["apple", "github", "google", "plantim"]);
export function isPlantimBrandName(value) {
    return PLANTIM_BRAND_NAMES.includes(value);
}
const SIZE_GRADES = Object.freeze({ 16: "micro", 20: "micro", 24: "base", 32: "base", 48: "display", 72: "display", 96: "display", 128: "display", 192: "display", 256: "display", 512: "display" });
/** Exact size -> grade; other sizes take the nearest listed size (ties go smaller). */
export function plantimBrandGradeForSize(size) {
    const exact = SIZE_GRADES[size];
    if (exact)
        return exact;
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
function layerFill(layer, variant, theme) {
    if (variant === "mono")
        return "currentColor";
    return theme === "dark" ? (layer.dark ?? layer.fill) : layer.fill;
}
export const PlantimBrand = defineComponent({
    name: "PlantimBrand",
    props: {
        brand: { type: Object, required: true },
        variant: { type: String, default: "color" },
        theme: { type: String, default: "light" },
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
            return h("svg", {
                ...attrs,
                xmlns: "http://www.w3.org/2000/svg",
                width: props.size,
                height: props.size,
                viewBox: "0 0 24 24",
                role: decorative ? undefined : "img",
                "aria-hidden": decorative ? "true" : undefined,
                "aria-label": decorative ? undefined : props.title,
            }, [
                !decorative && props.title ? h("title", props.title) : null,
                ...layers.map((layer) => h("path", {
                    d: layer.d,
                    fill: layerFill(layer, props.variant, props.theme),
                    "fill-rule": layer.evenOdd ? "evenodd" : undefined,
                    "data-layer": layer.name,
                })),
            ]);
        };
    },
});
