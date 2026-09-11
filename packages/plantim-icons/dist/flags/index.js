// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/flags/registry.flags.json (flagsHash d1070166f5bf95c2de9e18bd9f3206430864d562ca156a594d34036f87dfc6ee).
// Regenerate with: npm run icons:flags:package
import { defineComponent, h } from "vue";
export const PLANTIM_FLAGS_VERSION = "4.1.0";
export const PLANTIM_FLAGS_HASH = "d1070166f5bf95c2de9e18bd9f3206430864d562ca156a594d34036f87dfc6ee";
export const PLANTIM_FLAG_CODES = Object.freeze(["at", "ch", "de", "es", "eu", "fr", "gb", "it", "nl", "pl", "pt", "tr", "unknown", "us"]);
export function isPlantimFlagCode(value) {
    return PLANTIM_FLAG_CODES.includes(value);
}
const FLAG_W = 20;
const FLAG_H = 14;
const FLAG_X = 2;
const FLAG_Y = 5;
const FLAG_RX = 2;
const CIRCLE_R = 9.25;
const CIRCLE_SCALE = 1.321;
const BORDER = { stroke: "#000000", "stroke-opacity": "0.12", "stroke-width": 1, fill: "none", "data-role": "border" };
const SIZE_GRADES = Object.freeze({ 16: "micro", 20: "micro", 24: "base", 32: "base", 48: "display", 72: "display" });
const GRADE_STROKES = Object.freeze({ micro: 2.4, base: 2, display: 1.6 });
function gradeForSize(size) {
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
function shapeNode(shape) {
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
            throw new Error("[PlantimFlag] Unknown shape: " + String(shape.type));
    }
}
function monoNode(node, strokeWidth) {
    if (node.filled)
        return h(node.type, { ...node.attrs, fill: "currentColor", stroke: "none" });
    return h(node.type, { ...node.attrs, fill: "none", stroke: "currentColor", "stroke-width": strokeWidth });
}
/** Stable per-flag, per-variant clip id: the geometry is identical for every
 *  instance, so sharing the id across instances is safe and SSR-deterministic. */
function clipId(id, variant) {
    return "pf-" + id.replace(/[^a-z0-9]/g, "-") + "-" + variant.replace(/[^a-z0-9]/g, "-");
}
export const PlantimFlag = defineComponent({
    name: "PlantimFlag",
    props: {
        flag: { type: Object, required: true },
        variant: { type: String, default: "color" },
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
            const colourLayers = () => props.flag.layers
                .filter((layer) => grade !== "micro" || layer.micro)
                .map((layer) => h("g", { "data-layer": layer.name }, layer.shapes.map(shapeNode)));
            const monoNodes = grade === "micro" && props.flag.mono.micro ? props.flag.mono.micro : props.flag.mono.base;
            if (props.variant === "color") {
                children.push(h("clipPath", { id: cid }, [h("rect", { x: FLAG_X, y: FLAG_Y, width: FLAG_W, height: FLAG_H, rx: FLAG_RX })]));
                children.push(h("g", { "clip-path": "url(#" + cid + ")" }, [h("g", { transform: "translate(" + FLAG_X + " " + FLAG_Y + ")" }, colourLayers())]));
                children.push(h("rect", { x: FLAG_X + 0.5, y: FLAG_Y + 0.5, width: FLAG_W - 1, height: FLAG_H - 1, rx: FLAG_RX - 0.5, ...BORDER }));
            }
            else if (props.variant === "circle") {
                children.push(h("clipPath", { id: cid }, [h("circle", { cx: 12, cy: 12, r: CIRCLE_R })]));
                children.push(h("g", { "clip-path": "url(#" + cid + ")" }, [
                    h("g", { transform: "translate(12 12) scale(" + CIRCLE_SCALE + ") translate(" + -FLAG_W / 2 + " " + -FLAG_H / 2 + ")" }, colourLayers()),
                ]));
                children.push(h("circle", { cx: 12, cy: 12, r: CIRCLE_R - 0.5, ...BORDER }));
            }
            else if (props.variant === "mono") {
                children.push(h("rect", { x: FLAG_X, y: FLAG_Y, width: FLAG_W, height: FLAG_H, rx: FLAG_RX, fill: "none", stroke: "currentColor", "stroke-width": strokeWidth }));
                for (const node of monoNodes)
                    children.push(monoNode(node, strokeWidth));
            }
            else if (props.variant === "circle.mono") {
                children.push(h("clipPath", { id: cid }, [h("circle", { cx: 12, cy: 12, r: CIRCLE_R })]));
                children.push(h("circle", { cx: 12, cy: 12, r: CIRCLE_R, fill: "none", stroke: "currentColor", "stroke-width": strokeWidth }));
                children.push(h("g", { "clip-path": "url(#" + cid + ")" }, [
                    h("g", { transform: "translate(12 12) scale(" + CIRCLE_SCALE + ") translate(-12 -12)" }, monoNodes.map((node) => monoNode(node, Math.round((strokeWidth / CIRCLE_SCALE) * 1000) / 1000))),
                ]));
            }
            else {
                throw new Error("[PlantimFlag] Unknown variant: " + String(props.variant));
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
