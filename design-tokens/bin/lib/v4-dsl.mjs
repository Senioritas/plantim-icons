// Authoring DSL for v4 icon geometry. Hand-authored modules under
// design-tokens/icons/v4/src/ build icon definitions with these helpers.
// Pure and dependency-free; all numeric output is clamped to 3 decimals so
// generation stays byte-deterministic.

export function fmt(n) {
  if (typeof n !== "number" || !Number.isFinite(n)) {
    throw new Error(`v4-dsl: non-finite coordinate ${n}`);
  }
  const r = Math.round(n * 1000) / 1000;
  return Object.is(r, -0) ? 0 : r;
}

/** Path node. The `d` string is authored by hand; numbers are validated later. */
export function P(d) {
  if (typeof d !== "string" || !d.trim()) throw new Error("v4-dsl: empty path");
  return { type: "path", attrs: { d: d.trim().replace(/\s+/g, " ") } };
}

/** Circle node. `filled: true` renders as a deliberate dot (fill, no stroke). */
export function C(cx, cy, r, { filled = false } = {}) {
  const node = { type: "circle", attrs: { cx: String(fmt(cx)), cy: String(fmt(cy)), r: String(fmt(r)) } };
  if (filled) node.filled = true;
  return node;
}

export function L(x1, y1, x2, y2) {
  const dx = Math.abs(x2 - x1);
  const dy = Math.abs(y2 - y1);
  if (Math.hypot(dx, dy) < 2.5) {
    throw new Error(`v4-dsl: line segment shorter than 2.5px (${x1},${y1} -> ${x2},${y2}); use C(...,{filled:true}) for dots`);
  }
  return {
    type: "line",
    attrs: { x1: String(fmt(x1)), y1: String(fmt(y1)), x2: String(fmt(x2)), y2: String(fmt(y2)) },
  };
}

export function R(x, y, w, h, rx = 0) {
  const attrs = { x: String(fmt(x)), y: String(fmt(y)), width: String(fmt(w)), height: String(fmt(h)) };
  if (rx) attrs.rx = String(fmt(rx));
  return { type: "rect", attrs };
}

/** Named layer with a hand-assigned semantic role. */
export function layer(name, role, nodes) {
  const ROLES = new Set(["primary", "secondary", "accent", "container"]);
  if (!ROLES.has(role)) throw new Error(`v4-dsl: unknown role "${role}" on layer "${name}"`);
  if (!Array.isArray(nodes) || nodes.length === 0) throw new Error(`v4-dsl: layer "${name}" has no nodes`);
  return { name, role, nodes };
}

const TIERS = new Set(["P0", "P1", "P2"]);
const VERDICTS = new Set(["keep", "refine", "redraw", "new"]);
const ACCESSIBILITY = new Set(["decorative", "semantic", "status"]);

/**
 * Icon definition. `grades.base` is mandatory; micro/display optional (derived
 * from base when absent). `solid` mirrors grades: `solid.base` mandatory with
 * explicit counter count; micro/display solids optional.
 */
export function icon(id, def) {
  if (!/^[a-z][a-z0-9]*(\.[a-z][a-z0-9-]*)+$/.test(id)) {
    throw new Error(`v4-dsl: invalid semantic id "${id}"`);
  }
  const {
    tier,
    verdict,
    category,
    label,
    keywords = [],
    accessibility = "decorative",
    accessibilityLabelKey,
    provenance = {},
    grades,
    solid,
    variants = {},
    animation,
  } = def;
  if (!TIERS.has(tier)) throw new Error(`${id}: invalid tier ${tier}`);
  if (!VERDICTS.has(verdict)) throw new Error(`${id}: invalid verdict ${verdict}`);
  if (!category) throw new Error(`${id}: category required`);
  if (!label) throw new Error(`${id}: label required`);
  if (!ACCESSIBILITY.has(accessibility)) throw new Error(`${id}: invalid accessibility ${accessibility}`);
  if ((accessibility === "status" || accessibility === "semantic") && !accessibilityLabelKey) {
    throw new Error(`${id}: ${accessibility} icons need accessibilityLabelKey`);
  }
  if (!grades?.base?.length) throw new Error(`${id}: grades.base layers required`);
  if (!solid?.base || !Array.isArray(solid.base.paths) || solid.base.paths.length === 0) {
    throw new Error(`${id}: solid.base.paths required`);
  }
  if (!Number.isInteger(solid.base.counters) || solid.base.counters < 0) {
    throw new Error(`${id}: solid.base.counters must be a non-negative integer`);
  }
  for (const g of ["micro", "display"]) {
    if (solid[g] && !Number.isInteger(solid[g].counters)) {
      throw new Error(`${id}: solid.${g}.counters must be declared`);
    }
  }
  const layerNames = new Set(grades.base.map((l) => l.name));
  if (layerNames.size !== grades.base.length) throw new Error(`${id}: duplicate layer names`);
  for (const g of ["micro", "display"]) {
    for (const l of grades[g] ?? []) {
      if (!layerNames.has(l.name)) {
        throw new Error(`${id}: grade ${g} introduces unknown layer "${l.name}" (grades share the base layer list)`);
      }
    }
  }
  if (variants.multicolor) {
    for (const name of Object.keys(variants.multicolor)) {
      if (!layerNames.has(name)) throw new Error(`${id}: multicolor maps unknown layer "${name}"`);
    }
  }
  for (const name of variants.duotone?.primary ?? []) {
    if (!layerNames.has(name)) throw new Error(`${id}: duotone primary lists unknown layer "${name}"`);
  }
  return {
    id,
    tier,
    verdict,
    category,
    label,
    keywords,
    accessibility,
    ...(accessibilityLabelKey ? { accessibilityLabelKey } : {}),
    provenance,
    grades,
    solid,
    variants,
    ...(animation ? { animation } : {}),
  };
}
