// Pure, dependency-free helpers for the v3 multicolor / multi-size transform.
// Geometry comes from the v2 registry; these functions only assign color roles,
// resolve palette colors, and render SVG strings. No I/O, no globals — unit-testable.

// Attributes stripped from v2 nodes before rendering: Vue render `key`s and any
// baked stroke/fill styling (v3 sets its own per-node stroke + fill).
const ATTR_DENYLIST = new Set([
  "key",
  "fill",
  "stroke",
  "stroke-width",
  "stroke-linecap",
  "stroke-linejoin",
]);

/** Return a copy of an attrs object with denylisted keys removed, order preserved. */
export function cleanAttrs(attrs) {
  const out = {};
  for (const [k, v] of Object.entries(attrs ?? {})) {
    if (!ATTR_DENYLIST.has(k)) out[k] = v;
  }
  return out;
}

/** A node that reads as a single point/dot -> gets the accent color. */
export function isAccentNode(node, rules) {
  const { type, attrs = {} } = node;
  if (type === "circle") {
    const r = Number.parseFloat(attrs.r);
    if (Number.isFinite(r) && r <= rules.accentDotMaxRadius) return true;
  }
  if (type === "line") {
    const dx = Math.abs(Number.parseFloat(attrs.x2) - Number.parseFloat(attrs.x1));
    const dy = Math.abs(Number.parseFloat(attrs.y2) - Number.parseFloat(attrs.y1));
    // Lucide draws indicator dots as near-zero-length lines (e.g. x1=12 x2=12.01).
    if (Number.isFinite(dx) && Number.isFinite(dy) && Math.hypot(dx, dy) <= rules.tinyLineMaxLength) {
      return true;
    }
  }
  if (type === "path") {
    const d = attrs.d ?? "";
    // Tiny dot path such as "M12 17h.01".
    if (d.length <= rules.dotPathMaxLength && /[hv]-?\.0*1(?!\d)/i.test(d)) return true;
  }
  return false;
}

/** A closed container/frame shape -> gets the secondary color (and optional bg tint). */
export function isContainerNode(node, rules) {
  const { type, attrs = {} } = node;
  if (type === "rect" || type === "ellipse") return true;
  if (type === "circle") {
    const r = Number.parseFloat(attrs.r);
    return Number.isFinite(r) && r >= rules.secondaryMinRadius;
  }
  return false;
}

/** Merge the icon's category palette with any per-id override. */
export function resolvePalette(icon, palette) {
  const cat = palette.categories[icon.category] ?? palette.categories.utility;
  const resolved = {
    primary: cat.primary,
    secondary: cat.secondary,
    accent: cat.accent,
    bg: cat.bg,
    containerTint: Boolean(cat.containerTint),
    stemTwoTone: Boolean(cat.stemTwoTone),
  };
  const override = palette.idOverrides?.[icon.id];
  if (override) {
    for (const key of ["primary", "secondary", "accent", "bg"]) {
      if (override[key]) resolved[key] = override[key];
    }
  }
  return resolved;
}

/**
 * Assign a role ("primary" | "secondary" | "accent") to every node.
 * Returns { roles, containers } aligned by index with icon.nodes.
 */
export function assignRoles(icon, rules, resolved) {
  const containers = icon.nodes.map((node) => isContainerNode(node, rules));
  const roles = icon.nodes.map((node, i) => {
    if (isAccentNode(node, rules)) return "accent";
    if (containers[i]) return "secondary";
    return "primary";
  });

  // Plant icons: first glyph stroke = stem (primary), remaining strokes = foliage (secondary).
  if (resolved.stemTwoTone) {
    const glyph = roles
      .map((role, i) => ({ role, i }))
      .filter((entry) => entry.role !== "accent" && !containers[entry.i]);
    if (glyph.length >= 2) {
      glyph.forEach((entry, idx) => {
        roles[entry.i] = idx === 0 ? "primary" : "secondary";
      });
    }
  }

  // Never leave an icon fully muted: if nothing is primary, promote secondaries.
  if (!roles.includes("primary")) {
    for (let i = 0; i < roles.length; i++) {
      if (roles[i] === "secondary") roles[i] = "primary";
    }
  }

  return { roles, containers };
}

/** Effective user-space stroke width for a given output size and policy. */
export function strokeWidthForSize(size, strokePolicy, baseStrokeWidth) {
  if (strokePolicy === "crisp") {
    // Counter-scale so the optical weight stays constant across sizes.
    return Math.round((baseStrokeWidth * 24) / size * 1000) / 1000;
  }
  // "proportional": constant user-space width; strokes scale with the image.
  return baseStrokeWidth;
}

function serializeAttrs(attrs) {
  return Object.entries(attrs)
    .map(([k, v]) => `${k}="${v}"`)
    .join(" ");
}

/** Whether a node encloses an area that can be filled (used by the solid style). */
export function isClosedNode(node) {
  if (node.type === "rect" || node.type === "circle" || node.type === "ellipse" || node.type === "polygon") return true;
  if (node.type === "path") return /z\s*$/i.test((node.attrs?.d || "").trim());
  return false;
}

/**
 * Render one SVG string at the requested size in one of four styles:
 *  - outlined    : stroke=currentColor, no fill (theme-adaptive line)
 *  - solid       : closed shapes filled with currentColor, everything stroked (heavier glyph)
 *  - colored     : single category colour (resolved.primary), no fill
 *  - multicolor  : per-node role colours + optional container tint (default)
 * viewBox stays "0 0 24 24"; only width/height (and stroke-width in crisp mode) change.
 */
export function renderSvg({ icon, roles, containers, resolved, size, strokePolicy, baseStrokeWidth, style = "multicolor" }) {
  const strokeWidth = strokeWidthForSize(size, strokePolicy, baseStrokeWidth);
  const lines = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${icon.viewBox}" fill="none" stroke-linecap="round" stroke-linejoin="round">`,
  ];
  icon.nodes.forEach((node, i) => {
    const geom = serializeAttrs(cleanAttrs(node.attrs));
    if (style === "multicolor") {
      if (containers[i] && resolved.containerTint) {
        lines.push(`  <${node.type} ${geom} fill="${resolved.bg}" stroke="none" />`);
      }
      lines.push(`  <${node.type} ${geom} fill="none" stroke="${resolved[roles[i]]}" stroke-width="${strokeWidth}" />`);
    } else if (style === "outlined") {
      lines.push(`  <${node.type} ${geom} fill="none" stroke="currentColor" stroke-width="${strokeWidth}" />`);
    } else if (style === "colored") {
      lines.push(`  <${node.type} ${geom} fill="none" stroke="${resolved.primary}" stroke-width="${strokeWidth}" />`);
    } else if (style === "solid") {
      // Fill closed glyph shapes (leaves, drops, blobs) but NOT containers/frames
      // (rings, rects, large circles) — filling those would hide inner detail.
      const fill = isClosedNode(node) && !containers[i] ? "currentColor" : "none";
      const sw = Math.round(strokeWidth * 1.25 * 1000) / 1000;
      lines.push(`  <${node.type} ${geom} fill="${fill}" stroke="currentColor" stroke-width="${sw}" />`);
    }
  });
  lines.push("</svg>", "");
  return lines.join("\n");
}

/** Build the enriched node list stored in registry.v3.json (geometry + role + color). */
export function buildV3Nodes(icon, roles, resolved) {
  return icon.nodes.map((node, i) => ({
    type: node.type,
    attrs: cleanAttrs(node.attrs),
    role: roles[i],
    color: resolved[roles[i]],
  }));
}
