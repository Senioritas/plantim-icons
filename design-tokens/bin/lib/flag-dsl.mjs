// Authoring DSL for the `flag.*` asset class (v4.1 proposal).
//
// Flags are NOT semantic icons: they carry fixed vexillological colors that
// never re-theme, and an "outline" reading is meaningless. A flag therefore has
// two variants — `color` (canonical) and `mono` (frame + partition lines in
// currentColor, for tinted menus / inactive states) — and reuses the v4 size
// grades only for micro simplification (layers marked `micro: false` drop at
// 16/20) and the mono stroke width.
//
// Color geometry is authored in a local 20×14 box (the flag rect sits at
// x 2..22, y 5..19 on the 24-grid with rx 2). Mono nodes are v4-dsl nodes in
// 24-grid coordinates. All numbers clamp to 3 decimals (deterministic output).

import { fmt } from "./v4-dsl.mjs";

export const FLAG_W = 20;
export const FLAG_H = 14;
export const FLAG_ORIGIN = { x: 2, y: 5 };
export const FLAG_RX = 2;

const HEX = /^#[0-9A-F]{6}$/;
function color(c) {
  if (!HEX.test(c)) throw new Error(`flag-dsl: colors are uppercase 6-digit hex, got "${c}"`);
  return c;
}

export function rect(x, y, w, h, fill) {
  return { type: "rect", x: fmt(x), y: fmt(y), w: fmt(w), h: fmt(h), fill: color(fill) };
}
export function circle(cx, cy, r, fill) {
  return { type: "circle", cx: fmt(cx), cy: fmt(cy), r: fmt(r), fill: color(fill) };
}
export function path(d, fill) {
  return { type: "path", d: d.trim().replace(/\s+/g, " "), fill: color(fill) };
}
/** Stroked segment (used for saltires and glyph strokes). */
export function line(x1, y1, x2, y2, stroke, width) {
  return { type: "line", x1: fmt(x1), y1: fmt(y1), x2: fmt(x2), y2: fmt(y2), stroke: color(stroke), width: fmt(width) };
}
/** Stroked path (round caps/joins), for glyphs such as the "?" on flag.unknown. */
export function strokePath(d, stroke, width) {
  return { type: "spath", d: d.trim().replace(/\s+/g, " "), stroke: color(stroke), width: fmt(width) };
}

/** Five-point star; `pointAngle` in degrees, 0 = a point facing right, -90 = up. */
export function star(cx, cy, rOuter, fill, pointAngle = -90) {
  const rInner = rOuter * 0.382;
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? rOuter : rInner;
    const a = ((pointAngle + i * 36) * Math.PI) / 180;
    pts.push(`${fmt(cx + r * Math.cos(a))} ${fmt(cy + r * Math.sin(a))}`);
  }
  return path(`M${pts.join("L")}Z`, fill);
}

/** Horizontal stripes top→bottom; `weights` default equal. */
export function hStripes(colors, weights = colors.map(() => 1)) {
  const total = weights.reduce((a, b) => a + b, 0);
  let y = 0;
  return colors.map((c, i) => {
    const h = (FLAG_H * weights[i]) / total;
    const r = rect(0, y, FLAG_W, h, c);
    y += h;
    return r;
  });
}
/** Vertical stripes left→right; `weights` default equal. */
export function vStripes(colors, weights = colors.map(() => 1)) {
  const total = weights.reduce((a, b) => a + b, 0);
  let x = 0;
  return colors.map((c, i) => {
    const w = (FLAG_W * weights[i]) / total;
    const r = rect(x, 0, w, FLAG_H, c);
    x += w;
    return r;
  });
}
export function field(fill) {
  return [rect(0, 0, FLAG_W, FLAG_H, fill)];
}

/** Named color layer; `micro: false` drops it at the micro grade (16/20 px). */
export function flagLayer(name, shapes, { micro = true } = {}) {
  if (!Array.isArray(shapes) || shapes.length === 0) throw new Error(`flag-dsl: layer "${name}" has no shapes`);
  return { name, micro, shapes };
}

/**
 * Flag definition.
 * @param id       `flag.<iso-3166-1-alpha-2 lowercase>` (or `flag.eu`, `flag.unknown`)
 * @param def      { label, keywords?, accessibilityLabelKey, layers: [flagLayer], mono: { base: nodes, micro?: nodes } }
 */
export function flag(id, def) {
  if (!/^flag\.[a-z]{2,8}$/.test(id)) throw new Error(`flag-dsl: invalid flag id "${id}"`);
  const { label, keywords = [], accessibilityLabelKey, layers, mono, tier = "P1" } = def;
  if (!label) throw new Error(`${id}: label required`);
  if (!accessibilityLabelKey) throw new Error(`${id}: flags are semantic; accessibilityLabelKey required`);
  if (!layers?.length) throw new Error(`${id}: layers required`);
  if (!mono?.base?.length) throw new Error(`${id}: mono.base nodes required`);
  const names = new Set(layers.map((l) => l.name));
  if (names.size !== layers.length) throw new Error(`${id}: duplicate layer names`);
  if (!layers.some((l) => l.micro)) throw new Error(`${id}: at least one layer must survive micro`);
  return {
    id,
    kind: "flag",
    tier,
    verdict: "new",
    category: "flag",
    label,
    keywords,
    accessibility: "semantic",
    accessibilityLabelKey,
    layers,
    mono: { base: mono.base, ...(mono.micro ? { micro: mono.micro } : {}) },
  };
}
