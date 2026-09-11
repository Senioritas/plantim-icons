// Pure SVG rendering for flag definitions (see flag-dsl.mjs). No I/O.
//
// color: clipped 20×14 rounded rect at (2,5) with the authored shapes, plus a
//        12 % black hairline inset border so white edges (PL, AT, …) keep a
//        silhouette on light backgrounds and dark ones stay soft on dark UI.
// mono:  frame + partition nodes stroked in currentColor at the grade stroke.

import { FLAG_W, FLAG_H, FLAG_ORIGIN, FLAG_RX } from "./flag-dsl.mjs";

export const FLAG_VARIANTS = ["color", "mono"];

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

function monoNode(node, strokeWidth) {
  if (node.filled) return `  <${node.type} ${attrString(node.attrs)} fill="currentColor" stroke="none" />`;
  return `  <${node.type} ${attrString(node.attrs)} fill="none" stroke="currentColor" stroke-width="${strokeWidth}" />`;
}

/** Stable per-flag clip id (inline-safe: identical geometry for every size). */
export function clipId(id) {
  return `pf-${id.replace(/[^a-z0-9]/g, "-")}`;
}

/**
 * @param def         flag() output
 * @param variant     color | mono
 * @param size        rendered px size
 * @param grade       micro | base | display
 * @param strokeWidth grade stroke width (mono only)
 */
export function renderFlagSvg(def, variant, size, grade, strokeWidth) {
  const lines = [open(size)];
  const { x, y } = FLAG_ORIGIN;
  if (variant === "color") {
    const cid = clipId(def.id);
    lines.push(`  <clipPath id="${cid}"><rect x="${x}" y="${y}" width="${FLAG_W}" height="${FLAG_H}" rx="${FLAG_RX}" /></clipPath>`);
    lines.push(`  <g clip-path="url(#${cid})"><g transform="translate(${x} ${y})">`);
    for (const layer of def.layers) {
      if (grade === "micro" && !layer.micro) continue;
      lines.push(`    <g data-layer="${layer.name}">`);
      for (const s of layer.shapes) lines.push("  " + shape(s));
      lines.push(`    </g>`);
    }
    lines.push(`  </g></g>`);
    lines.push(
      `  <rect x="${x + 0.5}" y="${y + 0.5}" width="${FLAG_W - 1}" height="${FLAG_H - 1}" rx="${FLAG_RX - 0.5}" fill="none" stroke="#000000" stroke-opacity="0.12" stroke-width="1" data-role="border" />`,
    );
  } else if (variant === "mono") {
    lines.push(
      `  <rect x="${x}" y="${y}" width="${FLAG_W}" height="${FLAG_H}" rx="${FLAG_RX}" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" />`,
    );
    const nodes = grade === "micro" && def.mono.micro ? def.mono.micro : def.mono.base;
    for (const n of nodes) lines.push(monoNode(n, strokeWidth));
  } else {
    throw new Error(`flag-render: unknown variant ${variant}`);
  }
  lines.push("</svg>");
  return lines.join("\n") + "\n";
}
