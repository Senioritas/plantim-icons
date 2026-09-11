// Pure SVG rendering for flag definitions (see flag-dsl.mjs). No I/O.
//
// Four variants, two shapes × two treatments:
//   color        rounded-rect flag, clipped 20×14 at (2,5), authored colors
//   mono         rect frame + partition lines in currentColor
//   circle       the same flag cropped into a Ø18.5 disc (avatar/locale-chip
//                shape): scaled to cover the disc height, sides cropped
//   circle.mono  disc outline + the same partitions, scaled to match
//
// Both color shapes carry a 12 % black hairline inset border so white edges
// (PL, AT, NL) keep a silhouette on light UI and saturated fields stay soft on
// dark UI. Mono shapes stroke at the grade width; inside the scaled group the
// stroke is divided by the scale so it renders at the same weight.

import { FLAG_W, FLAG_H, FLAG_ORIGIN, FLAG_RX } from "./flag-dsl.mjs";

export const FLAG_VARIANTS = ["color", "mono", "circle", "circle.mono"];
export const FLAG_COLOR_VARIANTS = ["color", "circle"];
export const FLAG_MONO_VARIANTS = ["mono", "circle.mono"];

/** Disc geometry for the circular shapes (same crop as placeholder.avatar). */
export const CIRCLE_R = 9.25;
/** Scale that makes the 14-unit-tall flag cover the disc; the sides crop. */
export const CIRCLE_SCALE = Math.round((CIRCLE_R * 2 / FLAG_H) * 1000) / 1000;

function open(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">`;
}

function shape(s) {
  switch (s.type) {
    case "rect":
      return `    <rect x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" fill="${s.fill}" />`;
    case "circle":
      return `    <circle cx="${s.cx}" cy="${s.cy}" r="${s.r}" fill="${s.fill}" />`;
    case "path":
      return `    <path d="${s.d}" fill="${s.fill}" />`;
    case "line":
      return `    <line x1="${s.x1}" y1="${s.y1}" x2="${s.x2}" y2="${s.y2}" stroke="${s.stroke}" stroke-width="${s.width}" stroke-linecap="butt" />`;
    case "spath":
      return `    <path d="${s.d}" fill="none" stroke="${s.stroke}" stroke-width="${s.width}" />`;
    default:
      throw new Error(`flag-render: unknown shape ${s.type}`);
  }
}

function attrString(attrs) {
  return Object.entries(attrs)
    .map(([k, v]) => `${k}="${v}"`)
    .join(" ");
}

function monoNode(node, strokeWidth, indent = "  ") {
  if (node.filled) return `${indent}<${node.type} ${attrString(node.attrs)} fill="currentColor" stroke="none" />`;
  return `${indent}<${node.type} ${attrString(node.attrs)} fill="none" stroke="currentColor" stroke-width="${strokeWidth}" />`;
}

const round = (n) => Math.round(n * 1000) / 1000;

/** Stable per-flag, per-variant clip id (inline-safe when a page shows both shapes). */
export function clipId(id, variant) {
  return `pf-${id.replace(/[^a-z0-9]/g, "-")}-${variant.replace(/[^a-z0-9]/g, "-")}`;
}

function colorLayers(def, grade, indent) {
  const out = [];
  for (const layer of def.layers) {
    if (grade === "micro" && !layer.micro) continue;
    out.push(`${indent}<g data-layer="${layer.name}">`);
    for (const s of layer.shapes) out.push(indent + shape(s));
    out.push(`${indent}</g>`);
  }
  return out;
}

/**
 * @param def         flag() output
 * @param variant     color | mono | circle | circle.mono
 * @param size        rendered px size
 * @param grade       micro | base | display
 * @param strokeWidth grade stroke width (mono shapes only)
 */
export function renderFlagSvg(def, variant, size, grade, strokeWidth) {
  const lines = [open(size)];
  const { x, y } = FLAG_ORIGIN;
  const cid = clipId(def.id, variant);
  const monoNodes = grade === "micro" && def.mono.micro ? def.mono.micro : def.mono.base;

  if (variant === "color") {
    lines.push(`  <clipPath id="${cid}"><rect x="${x}" y="${y}" width="${FLAG_W}" height="${FLAG_H}" rx="${FLAG_RX}" /></clipPath>`);
    lines.push(`  <g clip-path="url(#${cid})"><g transform="translate(${x} ${y})">`);
    lines.push(...colorLayers(def, grade, "    "));
    lines.push(`  </g></g>`);
    lines.push(
      `  <rect x="${x + 0.5}" y="${y + 0.5}" width="${FLAG_W - 1}" height="${FLAG_H - 1}" rx="${FLAG_RX - 0.5}" fill="none" stroke="#000000" stroke-opacity="0.12" stroke-width="1" data-role="border" />`,
    );
  } else if (variant === "circle") {
    const s = CIRCLE_SCALE;
    lines.push(`  <clipPath id="${cid}"><circle cx="12" cy="12" r="${CIRCLE_R}" /></clipPath>`);
    lines.push(`  <g clip-path="url(#${cid})"><g transform="translate(12 12) scale(${s}) translate(${-FLAG_W / 2} ${-FLAG_H / 2})">`);
    lines.push(...colorLayers(def, grade, "    "));
    lines.push(`  </g></g>`);
    lines.push(
      `  <circle cx="12" cy="12" r="${CIRCLE_R - 0.5}" fill="none" stroke="#000000" stroke-opacity="0.12" stroke-width="1" data-role="border" />`,
    );
  } else if (variant === "mono") {
    lines.push(
      `  <rect x="${x}" y="${y}" width="${FLAG_W}" height="${FLAG_H}" rx="${FLAG_RX}" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" />`,
    );
    for (const n of monoNodes) lines.push(monoNode(n, strokeWidth));
  } else if (variant === "circle.mono") {
    const s = CIRCLE_SCALE;
    lines.push(`  <clipPath id="${cid}"><circle cx="12" cy="12" r="${CIRCLE_R}" /></clipPath>`);
    lines.push(`  <circle cx="12" cy="12" r="${CIRCLE_R}" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" />`);
    // Partitions share the color variant's transform; the stroke is divided by
    // the scale so it renders at exactly the grade weight.
    lines.push(`  <g clip-path="url(#${cid})"><g transform="translate(12 12) scale(${s}) translate(-12 -12)">`);
    for (const n of monoNodes) lines.push(monoNode(n, round(strokeWidth / s), "    "));
    lines.push(`  </g></g>`);
  } else {
    throw new Error(`flag-render: unknown variant ${variant}`);
  }
  lines.push("</svg>");
  return lines.join("\n") + "\n";
}
