// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import { defineComponent, h } from "vue";
export const PLANTIM_ICONS_V4_VERSION = "4.1.0";
export const PLANTIM_ICONS_V4_HASH = "573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1";
export const PLANTIM_V4_TOKENS = Object.freeze({
    "bloom.500": {
        "light": "#D81B60",
        "dark": "#F06292"
    },
    "earth.400": {
        "light": "#A1887F",
        "dark": "#BCAAA4"
    },
    "earth.600": {
        "light": "#6D4C41",
        "dark": "#A1887F"
    },
    "ink.300": {
        "light": "#B0BEC5",
        "dark": "#546E7A"
    },
    "ink.500": {
        "light": "#607D8B",
        "dark": "#90A4AE"
    },
    "ink.900": {
        "light": "#263238",
        "dark": "#ECEFF1"
    },
    "leaf.300": {
        "light": "#A5D6A7",
        "dark": "#C8E6C9"
    },
    "leaf.500": {
        "light": "#43A047",
        "dark": "#81C784"
    },
    "leaf.700": {
        "light": "#2E7D32",
        "dark": "#66BB6A"
    },
    "status.error": {
        "light": "#E53935",
        "dark": "#EF9A9A"
    },
    "status.info": {
        "light": "#1E88E5",
        "dark": "#64B5F6"
    },
    "status.success": {
        "light": "#2E7D32",
        "dark": "#66BB6A"
    },
    "status.warning": {
        "light": "#F9A825",
        "dark": "#FDD835"
    },
    "sun.300": {
        "light": "#FDD835",
        "dark": "#FFF59D"
    },
    "sun.500": {
        "light": "#F9A825",
        "dark": "#FDD835"
    },
    "water.300": {
        "light": "#90CAF9",
        "dark": "#BBDEFB"
    },
    "water.600": {
        "light": "#1E88E5",
        "dark": "#64B5F6"
    }
});
const PLANTIM_V4_SIZE_GRADES = Object.freeze({ 16: "micro", 20: "micro", 24: "base", 32: "base", 48: "display", 72: "display" });
const PLANTIM_V4_GRADE_STROKES = Object.freeze({ micro: 2.4, base: 2, display: 1.6 });
function gradeForSize(size) {
    const exact = PLANTIM_V4_SIZE_GRADES[size];
    if (exact)
        return exact;
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
function tokenColor(token) {
    const entry = PLANTIM_V4_TOKENS[token];
    if (!entry)
        throw new Error("[PlantimIconsV4] Unknown multicolor token: " + token);
    return "var(--pi4-" + token.split(".").join("-") + ", " + entry.light + ")";
}
function renderNode(node, strokeWidth, color, key, opacity, token) {
    const extra = { key };
    if (opacity !== undefined)
        extra.opacity = opacity;
    if (token)
        extra["data-token"] = token;
    if (node.filled)
        return h(node.type, { ...node.attrs, fill: color, stroke: "none", ...extra });
    return h(node.type, { ...node.attrs, fill: "none", stroke: color, "stroke-width": strokeWidth, ...extra });
}
export const PlantimIconV4 = defineComponent({
    name: "PlantimIconV4",
    props: {
        icon: { type: Object, required: true },
        variant: { type: String, default: "outline" },
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
                    for (const node of layer.nodes)
                        children.push(renderNode(node, strokeWidth, "currentColor", children.length));
            }
            else if (props.variant === "duotone") {
                const primary = new Set(icon.variants.duotone?.primary ?? [layers[0].name]);
                for (const layer of layers) {
                    const muted = primary.has(layer.name) ? undefined : "0.35";
                    for (const node of layer.nodes)
                        children.push(renderNode(node, strokeWidth, "currentColor", children.length, muted));
                }
            }
            else if (props.variant === "multicolor") {
                const map = icon.variants.multicolor ?? {};
                for (const layer of layers) {
                    const token = map[layer.name];
                    const color = token ? tokenColor(token) : "currentColor";
                    for (const node of layer.nodes)
                        children.push(renderNode(node, strokeWidth, color, children.length, undefined, token));
                }
            }
            else if (props.variant === "solid") {
                const solid = icon.solid[grade] ?? icon.solid.base;
                if ("mode" in solid) {
                    for (const layer of layers)
                        for (const node of layer.nodes)
                            children.push(renderNode(node, solid.strokeWidth, "currentColor", children.length));
                }
                else {
                    for (const d of solid.paths)
                        children.push(h("path", { d, fill: "currentColor", "fill-rule": "evenodd", stroke: "none", key: children.length }));
                }
            }
            else {
                throw new Error("[PlantimIconsV4] Unknown variant: " + String(props.variant));
            }
            const labelled = Boolean(props.title);
            const decorative = props.decorative || !labelled;
            return h("svg", {
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
            }, [!decorative && props.title ? h("title", props.title) : null, ...children]);
        };
    },
});
