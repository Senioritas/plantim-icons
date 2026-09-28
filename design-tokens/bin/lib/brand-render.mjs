// Pure SVG rendering for brand marks (see brand-dsl.mjs). No I/O.
//
// Three static variants:
//   color       the owner's colours for light surfaces
//   color.dark  the owner's colours for dark surfaces (same as color unless a
//               layer declares a `dark` fill, e.g. Apple and GitHub go white)
//   mono        every layer in currentColor, for tinted contexts
//
// Runtime adapters expose `color` + a light/dark theme instead of a separate
// variant; `color.dark` exists so the static set is complete for both themes.

export const BRAND_VARIANTS = ["color", "color.dark", "mono"];

/**
 * Brand marks reuse the v4 grades for 16–72 px and continue the display grade
 * up to 512 px, so the logo can fill splash screens, hero panels, app-store
 * artwork and favicons from one source.
 */
export const BRAND_LARGE_SIZES = [96, 128, 192, 256, 512];

export function brandSizes(v4Sizes) {
  const sizes = { ...v4Sizes.sizes };
  for (const s of BRAND_LARGE_SIZES) sizes[String(s)] = "display";
  return sizes;
}

/** Layers for a grade, falling back to base (third-party marks have one geometry). */
export function brandLayers(def, grade) {
  return def.grades[grade] ?? def.grades.base;
}

export function layerFill(layer, variant) {
  if (variant === "mono") return "currentColor";
  if (variant === "color.dark") return layer.dark ?? layer.fill;
  return layer.fill;
}

export function renderBrandSvg(def, variant, size, grade) {
  if (!BRAND_VARIANTS.includes(variant)) throw new Error(`brand-render: unknown variant ${variant}`);
  const lines = [`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24">`];
  for (const layer of brandLayers(def, grade)) {
    const rule = layer.evenOdd ? ` fill-rule="evenodd"` : "";
    lines.push(`  <path d="${layer.d}" fill="${layerFill(layer, variant)}"${rule} data-layer="${layer.name}" />`);
  }
  lines.push("</svg>");
  return lines.join("\n") + "\n";
}
