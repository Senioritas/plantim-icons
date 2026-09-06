// Transcribe clean v2/v3 registry geometry into v4 icon definitions.
// "keep"-verdict icons carry professional Lucide geometry that already meets the
// bar; this module lifts them into v4's variant/grade/token system faithfully
// (honest bold-mode solids, semantic per-icon color, optical grades) without the
// v3 failure modes. "refine"/"redraw" icons supply corrected geometry via the
// overrides passed in by the caller. Deterministic: numbers clamped to 3 dp.

import { icon, layer, P, C } from "./v4-dsl.mjs";

// Format a number to <=3 decimals WITHOUT forcing a leading zero, so compact
// SVG notation (".956", "-.022.617") keeps its token boundaries intact — adding
// a "0." prefix would merge adjacent dot-started numbers into one wrong value.
function fmtNum(n) {
  let r = Math.round(Number(n) * 1000) / 1000;
  if (Object.is(r, -0)) r = 0;
  return String(r).replace(/^(-?)0\./, "$1.");
}

/** Round every numeric token in a path `d` to <=3 decimals (gate requirement). */
export function roundPath(d) {
  return d.replace(/-?\d*\.\d+/g, (m) => fmtNum(m));
}

function round(n) {
  const r = Math.round(Number(n) * 1000) / 1000;
  return Object.is(r, -0) ? 0 : r;
}

// A node reads as an "accent" (small emphasis) if it is a tiny circle or a
// Lucide indicator dot drawn as a near-zero dash.
const DOT_RE = /^m?\s*(-?[\d.]+)[ ,]+(-?[\d.]+)\s*[hv]-?\.0*1$/i;

function nodeToV4(node) {
  const { type, attrs } = node;
  if (type === "path") {
    const d = attrs.d.trim();
    const dot = d.match(DOT_RE);
    if (dot) return { node: C(round(dot[1]), round(dot[2]), 1.1, { filled: true }), accent: true };
    return { node: P(roundPath(d)), accent: false };
  }
  if (type === "circle") {
    const r = Number(attrs.r);
    return { node: C(round(attrs.cx), round(attrs.cy), round(attrs.r)), accent: r <= 1.6 };
  }
  if (type === "ellipse") {
    // approximate ellipse as a path (v4 DSL has no ellipse primitive)
    const cx = round(attrs.cx), cy = round(attrs.cy), rx = round(attrs.rx), ry = round(attrs.ry);
    const d = `M${cx - rx} ${cy}a${rx} ${ry} 0 1 0 ${rx * 2} 0a${rx} ${ry} 0 1 0 ${-rx * 2} 0`;
    return { node: P(roundPath(d)), accent: false };
  }
  if (type === "line") {
    const x1 = round(attrs.x1), y1 = round(attrs.y1), x2 = round(attrs.x2), y2 = round(attrs.y2);
    // express as a path so short segments never trip the DSL's L() guard
    return { node: P(`M${x1} ${y1}L${x2} ${y2}`), accent: false };
  }
  if (type === "polyline" || type === "polygon") {
    const nums = attrs.points.trim().split(/[\s,]+/).map(Number);
    const pts = [];
    for (let i = 0; i + 1 < nums.length; i += 2) pts.push([round(nums[i]), round(nums[i + 1])]);
    let d = `M${pts[0][0]} ${pts[0][1]}` + pts.slice(1).map((pt) => `L${pt[0]} ${pt[1]}`).join("");
    if (type === "polygon") d += "Z";
    return { node: P(d), accent: false };
  }
  if (type === "rect") {
    const x = round(attrs.x), y = round(attrs.y), w = round(attrs.width), h = round(attrs.height);
    const rx = round(attrs.rx ?? 0);
    let d;
    if (rx) {
      d = `M${x + rx} ${y}h${w - 2 * rx}a${rx} ${rx} 0 0 1 ${rx} ${rx}v${h - 2 * rx}a${rx} ${rx} 0 0 1 ${-rx} ${rx}h${-(w - 2 * rx)}a${rx} ${rx} 0 0 1 ${-rx} ${-rx}v${-(h - 2 * rx)}a${rx} ${rx} 0 0 1 ${rx} ${-rx}Z`;
    } else {
      d = `M${x} ${y}h${w}v${h}h${-w}Z`;
    }
    return { node: P(roundPath(d)), accent: false };
  }
  throw new Error(`v2-to-v4: unsupported node type ${type}`);
}

// Category → default multicolor token for the primary layer.
const CATEGORY_TOKEN = {
  plant: "leaf.700",
  weather: "sun.500",
  status: "ink.900",
  navigation: "ink.900",
  action: "ink.900",
  account: "ink.900",
  calendar: "ink.900",
  location: "bloom.500",
  utility: "ink.900",
  // v3-only categories (P2)
  care: "leaf.700",
  family: "leaf.700",
  garden: "ink.900",
  genus: "leaf.700",
  health: "status.success",
  nav: "ink.900",
  stage: "leaf.700",
  lifecycle: "leaf.700",
  taxonomy: "ink.900",
};
// Per-id multicolor overrides { primary, accent? } — semantic, hand-assigned.
const TOKEN_OVERRIDES = {
  "utility.heart": { primary: "bloom.500" },
  "utility.zap": { primary: "sun.500" },
  "utility.star": { primary: "sun.500" },
  "utility.sparkles": { primary: "sun.500", accent: "sun.300" },
  "utility.star.half": { primary: "sun.500" },
  "utility.flame": { primary: "sun.500" },
  "utility.trophy": { primary: "sun.500" },
  "utility.award": { primary: "sun.500", accent: "bloom.500" },
  "utility.crown": { primary: "sun.500" },
  "utility.key": { primary: "sun.500" },
  "utility.snowflake": { primary: "water.300" },
  "utility.thermometer": { primary: "status.error" },
  "utility.trees": { primary: "leaf.700" },
  "utility.flower2": { primary: "leaf.500", accent: "bloom.500" },
  "utility.globe": { primary: "water.600" },
  "utility.cake": { primary: "bloom.500" },
  "utility.tag": { primary: "bloom.500" },
  "utility.brain": { primary: "bloom.500" },
  "utility.mail": { primary: "water.600" },
  "utility.mail.check": { primary: "water.600", accent: "status.success" },
  "utility.upload": { primary: "water.600" },
  "utility.upload.cloud": { primary: "water.600" },
  "utility.image": { primary: "water.600", accent: "sun.500" },
  "utility.database": { primary: "water.600" },
  "utility.cloud.rain": { primary: "water.300" },
  "utility.cloud.drizzle": { primary: "water.300" },
  "utility.cloud.snow": { primary: "water.300", accent: "water.600" },
  "utility.cloud.fog": { primary: "water.300" },
  "utility.cloud.lightning": { primary: "water.300", accent: "sun.500" },
  "utility.cloud.sun": { primary: "water.300", accent: "sun.500" },
  "utility.cloud.moon": { primary: "water.300", accent: "sun.300" },
  "utility.sunrise": { primary: "sun.500" },
  "utility.sunset": { primary: "sun.500" },
  "utility.moon.star": { primary: "sun.300" },
  "utility.baby": { primary: "bloom.500" },
  "utility.cookie": { primary: "earth.600", accent: "earth.400" },
  "utility.bug": { primary: "leaf.700" },
  "utility.bot": { primary: "water.600" },
  "utility.leaf": { primary: "leaf.700" },
  "weather.sun": { primary: "sun.500" },
  "weather.moon": { primary: "sun.300" },
  "weather.cloud": { primary: "water.300" },
  "location.pin": { primary: "bloom.500" },
  "status.error": { primary: "status.error" },
  "status.warning": { primary: "status.warning" },
  "status.info": { primary: "status.info" },
  "status.success": { primary: "status.success" },
  "status.success.circle": { primary: "status.success" },
  "status.success.circle.alt": { primary: "status.success" },
  "status.loading": { primary: "ink.500" },
  "status.streak": { primary: "sun.500" },
  "plant.watering": { primary: "water.600" },
  // v3-only P2 semantic colors
  "health.healthy": { primary: "status.success" },
  "health.attention": { primary: "status.warning" },
  "health.critical": { primary: "status.error" },
  "care.watering": { primary: "water.600" },
  "care.fertilizing": { primary: "leaf.500" },
  "care.fertilizing.alt": { primary: "leaf.500" },
  "care.pruning": { primary: "leaf.700" },
  "care.pruning.alt": { primary: "leaf.700" },
  "care.repotting": { primary: "earth.600" },
  "care.repotting.alt": { primary: "earth.600" },
  "care.suggestion": { primary: "sun.500" },
  "care.reminder": { primary: "sun.500" },
  "care.log": { primary: "ink.900" },
  "care.watering.alt": { primary: "water.600" },
  "garden.compost": { primary: "earth.600" },
  "garden.pot": { primary: "earth.600" },
  "garden.seed-packet": { primary: "leaf.500" },
  "garden.greenhouse": { primary: "leaf.700" },
  "garden.hose": { primary: "water.600" },
  "garden.sprinkler": { primary: "water.600" },
  "plant.seedling": { primary: "leaf.700" },
  "plant.thriving": { primary: "leaf.700" },
  "plant.wilting": { primary: "leaf.500" },
  "plant.watering.can": { primary: "water.600" },
};

function labelFor(id) {
  const last = id.split(".").slice(1).join(" ");
  return last.replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Build a v4 icon() from a registry entry.
 * @param entry v2/v3 registry icon {id, category, nodes, accessibility, accessibilityLabelKey}
 * @param opts  {tier, verdict, override?: {nodes?, dropIndices?, keepIndices?}, provenance}
 */
export function transcribe(entry, opts) {
  const { tier, verdict, provenance } = opts;
  let nodes = entry.nodes;
  const ov = opts.override;
  if (ov?.nodes) {
    nodes = ov.nodes;
  } else if (ov?.keepIndices) {
    nodes = ov.keepIndices.map((i) => entry.nodes[i]);
  } else if (ov?.dropIndices) {
    const drop = new Set(ov.dropIndices);
    nodes = entry.nodes.filter((_, i) => !drop.has(i));
  }

  const converted = nodes.map(nodeToV4);
  const primaryNodes = converted.filter((c) => !c.accent).map((c) => c.node);
  const accentNodes = converted.filter((c) => c.accent).map((c) => c.node);
  if (primaryNodes.length === 0) {
    // all-accent (rare) — promote everything to primary
    primaryNodes.push(...accentNodes.splice(0));
  }

  const layers = [layer("primary", "primary", primaryNodes)];
  if (accentNodes.length) layers.push(layer("accent", "accent", accentNodes));

  const tokens = TOKEN_OVERRIDES[entry.id] ?? { primary: CATEGORY_TOKEN[entry.category] ?? "ink.900" };
  const multicolor = { primary: tokens.primary };
  if (accentNodes.length) multicolor.accent = tokens.accent ?? tokens.primary;

  return icon(entry.id, {
    tier,
    verdict,
    category: entry.category,
    label: opts.label ?? labelFor(entry.id),
    keywords: opts.keywords ?? [entry.id.split(".").pop()],
    accessibility: entry.accessibility ?? "decorative",
    ...(entry.accessibilityLabelKey ? { accessibilityLabelKey: entry.accessibilityLabelKey } : {}),
    provenance,
    grades: {
      base: layers,
      micro: layers, // Lucide-derived geometry stays legible at 16/20 with the 2.4 micro stroke
    },
    solid: {
      base: { mode: "bold", strokeWidth: 3.1, counters: 0 },
      micro: { mode: "bold", strokeWidth: 3.3, counters: 0 },
    },
    variants: {
      duotone: { primary: ["primary"] },
      multicolor,
    },
  });
}
