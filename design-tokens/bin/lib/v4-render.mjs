// Pure SVG rendering for v4 icon definitions. No I/O; deterministic output.
// Variant semantics are defined in design-tokens/icons/v4/DESIGN.md §5.

const VARIANTS = ["outline", "solid", "duotone", "multicolor"];
export const V4_VARIANTS = VARIANTS;

/** Resolve the layer list for a grade: authored, or derived from base. */
export function gradeLayers(iconDef, grade) {
  return iconDef.grades[grade] ?? iconDef.grades.base;
}

/** Resolve solid geometry for a grade: authored, or derived from base. */
export function gradeSolid(iconDef, grade) {
  return iconDef.solid[grade] ?? iconDef.solid.base;
}

export function gradeAuthored(iconDef, grade) {
  return grade === "base" ? true : Boolean(iconDef.grades[grade]);
}

function attrString(attrs) {
  return Object.entries(attrs)
    .map(([k, v]) => `${k}="${v}"`)
    .join(" ");
}

function strokeNode(node, strokeWidth, color, opacity, token) {
  const extra = [];
  if (opacity !== undefined) extra.push(`opacity="${opacity}"`);
  if (token) extra.push(`data-token="${token}"`);
  const suffix = extra.length ? ` ${extra.join(" ")}` : "";
  if (node.filled) {
    return `  <${node.type} ${attrString(node.attrs)} fill="${color}" stroke="none"${suffix} />`;
  }
  return `  <${node.type} ${attrString(node.attrs)} fill="none" stroke="${color}" stroke-width="${strokeWidth}"${suffix} />`;
}

function open(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">`;
}

/**
 * Render one icon variant at one size.
 * @param iconDef compiled icon definition (DSL output)
 * @param variant outline|solid|duotone|multicolor
 * @param size    rendered px size
 * @param grade   micro|base|display (chosen from sizes.json by the caller)
 * @param strokeWidth grade stroke width in 24-grid units
 * @param tokens  role -> {light,dark} map (for multicolor)
 */
export function renderSvg(iconDef, variant, size, grade, strokeWidth, tokens) {
  const layers = gradeLayers(iconDef, grade);
  const lines = [open(size)];
  if (variant === "outline") {
    for (const l of layers) for (const n of l.nodes) lines.push(strokeNode(n, strokeWidth, "currentColor"));
  } else if (variant === "duotone") {
    const primary = new Set(iconDef.variants.duotone?.primary ?? [layers[0].name]);
    for (const l of layers) {
      const muted = primary.has(l.name) ? undefined : "0.35";
      for (const n of l.nodes) lines.push(strokeNode(n, strokeWidth, "currentColor", muted));
    }
  } else if (variant === "multicolor") {
    const map = iconDef.variants.multicolor ?? {};
    for (const l of layers) {
      const token = map[l.name];
      const color = token ? tokens.roles[token]?.light : undefined;
      if (token && !color) throw new Error(`${iconDef.id}: multicolor token "${token}" not in tokens.json`);
      for (const n of l.nodes) {
        lines.push(strokeNode(n, strokeWidth, color ?? "currentColor", undefined, token));
      }
    }
  } else if (variant === "solid") {
    const solid = gradeSolid(iconDef, grade);
    for (const d of solid.paths) {
      lines.push(`  <path d="${d}" fill="currentColor" fill-rule="evenodd" stroke="none" />`);
    }
  } else {
    throw new Error(`unknown variant ${variant}`);
  }
  lines.push("</svg>");
  return lines.join("\n") + "\n";
}
