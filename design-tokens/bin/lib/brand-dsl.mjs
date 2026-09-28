// Authoring DSL for the `brand.*` asset class (icons 4.2).
//
// Brand marks are NOT semantic icons: they carry fixed colours set by their
// owners and must never re-theme through Plantim tokens, and an "outline"
// reading of a logo is meaningless. A mark is a list of filled layers on the
// 24-grid, optionally with its own geometry per optical grade (the Plantim logo
// simplifies at small sizes; third-party marks are used unmodified at every
// size, as their brand guidelines require).
//
// Colours: uppercase 6-digit hex. A layer may declare a separate `dark` fill
// for marks whose owners publish a light/dark pair (Apple, GitHub). All numbers
// clamp to 3 decimals (deterministic output).

import { fmt } from "./v4-dsl.mjs";

export const BRAND_GRADES = ["micro", "base", "display"];
const HEX = /^#[0-9A-F]{6}$/;

function colour(c, where) {
  if (!HEX.test(c)) throw new Error(`brand-dsl: ${where}: colours are uppercase 6-digit hex, got "${c}"`);
  return c;
}

// --- path fitting -------------------------------------------------------------

const TOKEN = /[MmLlHhVvCcSsQqTtZz]|[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g;
const ARITY = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, Z: 0 };

/**
 * Parse any SVG path (no arcs) into absolute M/L/C/Q/Z segments.
 * S/T are expanded with their reflected control points, H/V become L.
 */
export function absolutePath(d) {
  const tokens = d.match(TOKEN) ?? [];
  const out = [];
  let i = 0;
  let cmd = null;
  let cx = 0;
  let cy = 0;
  let sx = 0;
  let sy = 0;
  let lastCtrl = null; // [x, y, kind] of the previous C/Q control for S/T reflection
  const num = () => {
    const v = Number(tokens[i++]);
    if (!Number.isFinite(v)) throw new Error(`brand-dsl: bad number in path near token ${i}`);
    return v;
  };
  while (i < tokens.length) {
    if (/[a-zA-Z]/.test(tokens[i])) cmd = tokens[i++];
    if (!cmd) throw new Error("brand-dsl: path must start with a command");
    const up = cmd.toUpperCase();
    if (!(up in ARITY)) throw new Error(`brand-dsl: unsupported path command "${cmd}" (arcs are not allowed)`);
    const rel = cmd !== up;
    if (up === "Z") {
      out.push(["Z"]);
      cx = sx;
      cy = sy;
      lastCtrl = null;
      cmd = null;
      continue;
    }
    const ox = rel ? cx : 0;
    const oy = rel ? cy : 0;
    if (up === "M") {
      cx = num() + ox;
      cy = num() + oy;
      sx = cx;
      sy = cy;
      out.push(["M", cx, cy]);
      cmd = rel ? "l" : "L";
      lastCtrl = null;
    } else if (up === "L") {
      cx = num() + ox;
      cy = num() + oy;
      out.push(["L", cx, cy]);
      lastCtrl = null;
    } else if (up === "H") {
      cx = num() + ox;
      out.push(["L", cx, cy]);
      lastCtrl = null;
    } else if (up === "V") {
      cy = num() + oy;
      out.push(["L", cx, cy]);
      lastCtrl = null;
    } else if (up === "C" || up === "S") {
      let x1;
      let y1;
      if (up === "C") {
        x1 = num() + ox;
        y1 = num() + oy;
      } else if (lastCtrl?.[2] === "C") {
        x1 = 2 * cx - lastCtrl[0];
        y1 = 2 * cy - lastCtrl[1];
      } else {
        x1 = cx;
        y1 = cy;
      }
      const x2 = num() + ox;
      const y2 = num() + oy;
      cx = num() + ox;
      cy = num() + oy;
      out.push(["C", x1, y1, x2, y2, cx, cy]);
      lastCtrl = [x2, y2, "C"];
    } else if (up === "Q" || up === "T") {
      let x1;
      let y1;
      if (up === "Q") {
        x1 = num() + ox;
        y1 = num() + oy;
      } else if (lastCtrl?.[2] === "Q") {
        x1 = 2 * cx - lastCtrl[0];
        y1 = 2 * cy - lastCtrl[1];
      } else {
        x1 = cx;
        y1 = cy;
      }
      cx = num() + ox;
      cy = num() + oy;
      out.push(["Q", x1, y1, cx, cy]);
      lastCtrl = [x1, y1, "Q"];
    }
  }
  return out;
}

/** Serialize absolute segments, applying an affine scale + translate. */
export function serializePath(segments, scale = 1, tx = 0, ty = 0) {
  return segments
    .map(([c, ...n]) => {
      if (c === "Z") return "Z";
      const pts = [];
      for (let k = 0; k < n.length; k += 2) pts.push(`${fmt(n[k] * scale + tx)} ${fmt(n[k + 1] * scale + ty)}`);
      return c + pts.join(" ");
    })
    .join("");
}

/**
 * Place artwork authored in its own viewBox into a box on the 24-grid,
 * preserving aspect ratio and centring it. Used for the official third-party
 * marks so their source paths stay verbatim and reviewable.
 * @param paths    array of path strings in the source viewBox
 * @param viewBox  [minX, minY, width, height] of the source artwork
 * @param box      [x, y, width, height] on the 24-grid (default: the 20×20 live area)
 */
export function fit(paths, viewBox, box = [2, 2, 20, 20]) {
  const [vx, vy, vw, vh] = viewBox;
  const [bx, by, bw, bh] = box;
  const s = Math.min(bw / vw, bh / vh);
  const tx = bx + (bw - vw * s) / 2 - vx * s;
  const ty = by + (bh - vh * s) / 2 - vy * s;
  return paths.map((d) => serializePath(absolutePath(d), s, tx, ty));
}

// --- definitions --------------------------------------------------------------

/** One filled layer. `dark` is the owner's dark-surface colour, if different. */
export function brandLayer(name, d, fill, { dark, evenOdd = false } = {}) {
  if (!name || typeof d !== "string" || !d.trim()) throw new Error(`brand-dsl: layer "${name}" needs geometry`);
  return {
    name,
    d: d.trim().replace(/\s+/g, " "),
    fill: colour(fill, name),
    ...(dark && dark !== fill ? { dark: colour(dark, name) } : {}),
    ...(evenOdd ? { evenOdd: true } : {}),
  };
}

/**
 * Brand mark definition.
 * @param id   `brand.<name>`
 * @param def  { label, keywords?, accessibilityLabelKey, owner, usage,
 *               grades: { base: [brandLayer], micro?: [...], display?: [...] } }
 *             Missing grades fall back to `base`.
 */
export function brand(id, def) {
  if (!/^brand\.[a-z][a-z0-9]{1,23}$/.test(id)) throw new Error(`brand-dsl: invalid brand id "${id}"`);
  const { label, keywords = [], accessibilityLabelKey, owner, usage, grades } = def;
  if (!label) throw new Error(`${id}: label required`);
  if (!accessibilityLabelKey) throw new Error(`${id}: brand marks are semantic; accessibilityLabelKey required`);
  if (!owner) throw new Error(`${id}: owner required (trademark attribution)`);
  if (!usage) throw new Error(`${id}: usage required (where the mark may appear)`);
  if (!grades?.base?.length) throw new Error(`${id}: grades.base layers required`);
  for (const g of Object.keys(grades)) if (!BRAND_GRADES.includes(g)) throw new Error(`${id}: unknown grade "${g}"`);
  const names = grades.base.map((l) => l.name).join(",");
  for (const [g, layers] of Object.entries(grades)) {
    if (layers.map((l) => l.name).join(",") !== names) {
      throw new Error(`${id}: grade "${g}" must declare the same layers as base (${names})`);
    }
  }
  return {
    id,
    kind: "brand",
    category: "brand",
    label,
    keywords,
    accessibility: "semantic",
    accessibilityLabelKey,
    owner,
    usage,
    grades: Object.fromEntries(BRAND_GRADES.filter((g) => grades[g]).map((g) => [g, grades[g]])),
  };
}
