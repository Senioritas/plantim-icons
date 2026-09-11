// v4.1 proposal — `avatar.*`: plant-styled default profile avatars.
//
// A user with no photo picks one of these instead of the generic bust. Each
// avatar is modelled on a real plant the Plantim audience knows (monstera,
// saguaro, echeveria, fiddle-leaf fig, …) and is built the same way so the set
// reads as one family at 32–72 px:
//
//   ring     container   the avatar crop (same ring as placeholder.avatar)
//   plant    primary     closed silhouettes — these become the cut-outs of the
//                        solid "sticker" variant (disc with the plant punched
//                        out), so counters == number of disjoint silhouettes
//   detail   secondary   interior strokes (veins, stripes, spiral) — outline /
//                        duotone / multicolor only, dropped at micro
//   accent   accent      flower centres, florets
//
// Silhouettes never overlap each other (evenodd would re-fill the overlap), so
// stems stop just short of the leaf they carry. Multicolor keeps foliage on
// the leaf ramp, blooms on bloom/sun, wood on earth; the ring takes a pastel
// so an avatar picker shows tinted discs.

import { icon, layer, P, C } from "../../../bin/lib/v4-dsl.mjs";
import { fmt } from "../../../bin/lib/v4-dsl.mjs";

const DISC = "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5Z";
const RING = () => layer("ring", "container", [C(12, 12, 9.25)]);
const RINGS = ["leaf.300", "sun.300", "water.300", "earth.400", "ink.300"];

const rad = (d) => (d * Math.PI) / 180;
const pt = (x, y) => `${fmt(x)} ${fmt(y)}`;

/** Leaf/petal: narrow base at r0, widest at ~45 % of the length, pointed tip at r1. */
function petal(cx, cy, deg, r0, r1, hw) {
  const c = Math.cos(rad(deg)), s = Math.sin(rad(deg));
  const ux = -s, uy = c; // unit perpendicular
  const bx = cx + r0 * c, by = cy + r0 * s;
  const tx = cx + r1 * c, ty = cy + r1 * s;
  const mx = bx + (tx - bx) * 0.45, my = by + (ty - by) * 0.45;
  const b1 = pt(bx + ux * hw * 0.35, by + uy * hw * 0.35);
  const b2 = pt(bx - ux * hw * 0.35, by - uy * hw * 0.35);
  const c1 = pt(mx + ux * hw * 2, my + uy * hw * 2);
  const c2 = pt(mx - ux * hw * 2, my - uy * hw * 2);
  return `M${b1}Q${c1} ${pt(tx, ty)}Q${c2} ${b2}Z`;
}
/** Thin pointed leaf (aloe / sansevieria): triangle from a base chord to a tip. */
function spike(cx, cy, deg, r0, r1, hw) {
  const c = Math.cos(rad(deg)), s = Math.sin(rad(deg));
  const ux = -s, uy = c;
  const bx = cx + r0 * c, by = cy + r0 * s;
  return `M${pt(bx + ux * hw, by + uy * hw)}L${pt(cx + r1 * c, cy + r1 * s)}L${pt(bx - ux * hw, by - uy * hw)}Z`;
}
/** Rotate a path given as [cmd, x, y, x, y, …] tuples (local coords, origin = disc centre) by deg. */
function rotated(cmds, deg, cx = 12, cy = 12) {
  const c = Math.cos(rad(deg)), s = Math.sin(rad(deg));
  return cmds
    .map(([cmd, ...nums]) => {
      const out = [];
      for (let i = 0; i < nums.length; i += 2) {
        const x = nums[i], y = nums[i + 1];
        out.push(pt(cx + x * c - y * s, cy + x * s + y * c));
      }
      return cmd + out.join(" ");
    })
    .join("") + "Z";
}
const ring = (i) => RINGS[i % RINGS.length];

/**
 * Avatar builder. `plant` = closed silhouettes (outline + solid cut-outs),
 * `detail` = interior strokes, `accent` = small emphasis shapes (also cut out
 * in solid when `accentSolid` is given). `holes` overrides the solid cut-outs
 * when the outline strokes need a different closed footprint (stems).
 */
let n = 0;
function avatar(name, { label, keywords = [], plant, detail = [], accent = [], holes, counters, color = {} }) {
  const i = n++;
  const solidHoles = holes ?? [...plant.map((p) => p.attrs.d), ...accent.map((a) => a.attrs.d)];
  const layers = [RING(), layer("plant", "primary", plant)];
  if (detail.length) layers.push(layer("detail", "secondary", detail));
  if (accent.length) layers.push(layer("accent", "accent", accent));
  const micro = [RING(), layer("plant", "primary", plant), ...(accent.length ? [layer("accent", "accent", accent)] : [])];
  return icon(`avatar.${name}`, {
    tier: "P1",
    verdict: "new",
    category: "avatar",
    label,
    keywords: ["avatar", "profile", "plant", name, ...keywords],
    accessibility: "semantic",
    accessibilityLabelKey: `a11y.icons.avatar.${name}`,
    grades: { base: layers, micro },
    solid: { base: { paths: [DISC + solidHoles.join("")], counters } },
    variants: {
      duotone: { primary: ["plant", ...(accent.length ? ["accent"] : [])] },
      multicolor: {
        ring: color.ring ?? ring(i),
        plant: color.plant ?? "leaf.700",
        ...(detail.length ? { detail: color.detail ?? "leaf.500" } : {}),
        ...(accent.length ? { accent: color.accent ?? "sun.500" } : {}),
      },
    },
  });
}

/** Closed bar along a segment, half-width hw — interior detail that survives the solid. */
function bar(x1, y1, x2, y2, hw) {
  const dx = x2 - x1, dy = y2 - y1;
  const L = Math.hypot(dx, dy);
  const ux = (-dy / L) * hw, uy = (dx / L) * hw;
  return `M${pt(x1 + ux, y1 + uy)}L${pt(x2 + ux, y2 + uy)}L${pt(x2 - ux, y2 - uy)}L${pt(x1 - ux, y1 - uy)}Z`;
}

// Circle as a closed path (for solid cut-outs of C() nodes).
const circ = (cx, cy, r) => `M${pt(cx - r, cy)}a${fmt(r)} ${fmt(r)} 0 1 0 ${fmt(2 * r)} 0a${fmt(r)} ${fmt(r)} 0 1 0 ${fmt(-2 * r)} 0Z`;

// Clover leaflet (heart pointing to the centre), local coords, tip at origin.
const CLOVER_LEAFLET = [
  ["M", 0, -0.9],
  ["C", -0.9, -2.1, -2.8, -2, -2.8, -3.6],
  ["C", -2.8, -4.7, -2, -5.4, -1.1, -5.4],
  ["C", -0.6, -5.4, -0.2, -5.2, 0, -4.8],
  ["C", 0.2, -5.2, 0.6, -5.4, 1.1, -5.4],
  ["C", 2, -5.4, 2.8, -4.7, 2.8, -3.6],
  ["C", 2.8, -2, 0.9, -2.1, 0, -0.9],
];

export default [
  // 1 Sprout — the beginner avatar: two seed leaves on a stem in soil.
  avatar("sprout", {
    label: "Sprout",
    keywords: ["seedling", "beginner"],
    plant: [
      P("M12 12C9.5 12.3 7.2 10.8 6.8 8C9.8 7.8 11.9 9.5 12 12Z"),
      P("M12 12C14.5 12.3 16.8 10.8 17.2 8C14.2 7.8 12.1 9.5 12 12Z"),
      P("M12 12.5v6"),
      P("M8 18.5h8"),
    ],
    holes: [
      "M12 12C9.5 12.3 7.2 10.8 6.8 8C9.8 7.8 11.9 9.5 12 12Z",
      "M12 12C14.5 12.3 16.8 10.8 17.2 8C14.2 7.8 12.1 9.5 12 12Z",
      "M11 12.6h2v5h4.5v1.8h-11v-1.8H11Z",
    ],
    counters: 3,
    color: { ring: "leaf.300", plant: "leaf.700" },
  }),

  // 2 Monstera — lobed leaf with two slits and a midrib.
  avatar("monstera", {
    label: "Monstera",
    keywords: ["swiss cheese plant", "tropical"],
    plant: [
      P("M12 5.5c-2.2 0-3.8 1.4-3.8 3.1 0 .8.4 1.5 1 2-.7.5-1.2 1.3-1.2 2.2 0 1.8 1.6 3.2 4 3.5 2.4-.3 4-1.7 4-3.5 0-.9-.5-1.7-1.2-2.2.6-.5 1-1.2 1-2 0-1.7-1.6-3.1-3.8-3.1Z"),
      P("M12 16.6v2.6"),
    ],
    detail: [P("M12 7.5v7"), P("M8.7 10.9l2.4-.5"), P("M15.3 13.2l-2.4.5")],
    holes: [
      "M12 5.5c-2.2 0-3.8 1.4-3.8 3.1 0 .8.4 1.5 1 2-.7.5-1.2 1.3-1.2 2.2 0 1.8 1.6 3.2 4 3.5 2.4-.3 4-1.7 4-3.5 0-.9-.5-1.7-1.2-2.2.6-.5 1-1.2 1-2 0-1.7-1.6-3.1-3.8-3.1Z",
      "M11 16.6h2v2.6h-2Z",
      bar(9.7, 10.85, 11.2, 10.5, 0.4),
      bar(14.3, 13.15, 12.8, 13.5, 0.4),
    ],
    counters: 2,
    color: { ring: "leaf.300" },
  }),

  // 3 Cactus — saguaro column with two arms.
  avatar("cactus", {
    label: "Cactus",
    keywords: ["saguaro", "desert", "succulent"],
    plant: [
      P("M10 18.5V7.5a2 2 0 0 1 4 0v11Z"),
      P("M10 13H8.5A1.5 1.5 0 0 1 7 11.5V9.5"),
      P("M14 11.5h1.5A1.5 1.5 0 0 0 17 10V8"),
    ],
    detail: [P("M12 9v7")],
    holes: [
      "M10 18.5V7.5a2 2 0 0 1 4 0v11Z",
      "M6.5 9.5h2v2.5h.8v2H8.5a2 2 0 0 1-2-2Z",
      "M15.5 8h2v3.5a2 2 0 0 1-2 2h-.8v-2h.8Z",
    ],
    counters: 3,
    color: { ring: "sun.300", detail: "leaf.500" },
  }),

  // 4 Succulent — echeveria rosette: six pointed leaves around a heart.
  avatar("succulent", {
    label: "Succulent",
    keywords: ["echeveria", "rosette"],
    plant: [0, 60, 120, 180, 240, 300].map((a) => P(petal(12, 12, a - 90, 2.6, 7.2, 1.3))),
    accent: [C(12, 12, 1.6)],
    holes: [...[0, 60, 120, 180, 240, 300].map((a) => petal(12, 12, a - 90, 2.6, 7.2, 1.3)), circ(12, 12, 1.6)],
    counters: 7,
    color: { ring: "water.300", plant: "leaf.500", accent: "leaf.700" },
  }),

  // 5 Fern — one-sided frond with four leaflet lobes and a midrib.
  avatar("fern", {
    label: "Fern",
    keywords: ["frond", "shade"],
    plant: [
      P("M11 18.8c-.6-5.2.4-9.8 3.6-13.3.2 1-.1 1.9-.4 2.7 1-.3 1.7-.1 2.2.5-.9.4-1.6 1-2.1 1.8 1 0 1.7.3 2.2.9-.9.5-1.7 1.2-2.3 2 .9.2 1.5.7 1.8 1.4-1 .3-1.9.9-2.6 1.6.7.4 1 1 1.1 1.7-1.2.1-2.3-.1-3.5-.6Z"),
    ],
    detail: [P("M11.8 16.5c-.2-3.5.5-6.8 2.2-9.6")],
    counters: 1,
    color: { ring: "leaf.300" },
  }),

  // 6 Pothos — heart leaf with a short curling stem.
  avatar("pothos", {
    label: "Pothos",
    keywords: ["devil's ivy", "trailing", "heart leaf"],
    plant: [
      P("M12 8.2C10.6 5.8 6.6 6.3 6.6 9.6c0 3.3 3.4 5.6 5.4 7.4 2-1.8 5.4-4.1 5.4-7.4 0-3.3-4-3.8-5.4-1.4Z"),
      P("M12.6 7.6c.4-1.6 1.6-2.5 3.4-2.4"),
    ],
    detail: [P("M12 9.8v5.2")],
    holes: [
      "M12 8.2C10.6 5.8 6.6 6.3 6.6 9.6c0 3.3 3.4 5.6 5.4 7.4 2-1.8 5.4-4.1 5.4-7.4 0-3.3-4-3.8-5.4-1.4Z",
      bar(12, 10, 12, 15.6, 0.33),
    ],
    counters: 1,
    color: { ring: "sun.300" },
  }),

  // 7 Sansevieria — three upright sword leaves.
  avatar("sansevieria", {
    label: "Snake plant",
    keywords: ["sansevieria", "mother-in-law's tongue", "sword"],
    plant: [P(spike(12, 19, -90, 0.8, 14, 0.85)), P(spike(10.2, 18.6, -118, 0.8, 11.5, 0.85)), P(spike(13.8, 18.6, -62, 0.8, 11.5, 0.85))],
    detail: [P("M12 8.5v8"), P("M8.6 12l.9 4.6"), P("M15.4 12l-.9 4.6")],
    counters: 3,
    color: { ring: "earth.400", detail: "sun.300" },
  }),

  // 8 Aloe — five spiky leaves fanning from a low base.
  avatar("aloe", {
    label: "Aloe",
    keywords: ["aloe vera", "spiky"],
    plant: [-150, -120, -90, -60, -30].map((a, k) => P(petal(12, 17.6, a, 2, [7, 9, 10, 9, 7][k], [0.85, 1, 1.05, 1, 0.85][k]))),
    counters: 5,
    color: { ring: "leaf.300", plant: "leaf.500" },
  }),

  // 9 Palm — four fronds drooping from a slim trunk.
  avatar("palm", {
    label: "Palm",
    keywords: ["tropical", "areca"],
    plant: [
      ...[-170, -125, -55, -10].map((a) => P(petal(12, 9.5, a, 2, 7, 1.3))),
      P("M12 11.8v7"),
    ],
    holes: [...[-170, -125, -55, -10].map((a) => petal(12, 9.5, a, 2, 7, 1.3)), "M11 11.8h2v7h-2Z"],
    counters: 5,
    color: { ring: "sun.300", plant: "leaf.700" },
  }),

  // 10 Orchid — five petals around a small lip.
  avatar("orchid", {
    label: "Orchid",
    keywords: ["phalaenopsis", "bloom", "flower"],
    plant: [0, 72, 144, 216, 288].map((a) => P(petal(12, 12, a - 90, 2.3, 7.2, 1.5))),
    accent: [C(12, 12, 1.5)],
    holes: [...[0, 72, 144, 216, 288].map((a) => petal(12, 12, a - 90, 2.3, 7.2, 1.5)), circ(12, 12, 1.5)],
    counters: 6,
    color: { ring: "leaf.300", plant: "bloom.500", accent: "sun.500" },
  }),

  // 11 Tulip — cup bloom with three petal tips, on a short stem.
  avatar("tulip", {
    label: "Tulip",
    keywords: ["spring", "bulb", "flower"],
    plant: [
      P("M7.5 8c0 4.6 2 8 4.5 8.5 2.5-.5 4.5-3.9 4.5-8.5-1.2.8-2.2 1.3-3 1.5-.5-.8-1-1.8-1.5-3-.5 1.2-1 2.2-1.5 3-.8-.2-1.8-.7-3-1.5Z"),
      P("M12 17v2.5"),
    ],
    detail: [P("M12 10v5.5")],
    holes: [
      "M7.5 8c0 4.6 2 8 4.5 8.5 2.5-.5 4.5-3.9 4.5-8.5-1.2.8-2.2 1.3-3 1.5-.5-.8-1-1.8-1.5-3-.5 1.2-1 2.2-1.5 3-.8-.2-1.8-.7-3-1.5Z",
      "M11 17h2v2.5h-2Z",
    ],
    counters: 2,
    color: { ring: "sun.300", plant: "bloom.500", detail: "bloom.500" },
  }),

  // 12 Sunflower — eight petals around a wide disc.
  avatar("sunflower", {
    label: "Sunflower",
    keywords: ["helianthus", "summer", "flower"],
    plant: [0, 45, 90, 135, 180, 225, 270, 315].map((a) => P(petal(12, 12, a - 90, 3.4, 7.3, 1.1))),
    accent: [C(12, 12, 2.4)],
    holes: [...[0, 45, 90, 135, 180, 225, 270, 315].map((a) => petal(12, 12, a - 90, 3.4, 7.3, 1.1)), circ(12, 12, 2.4)],
    counters: 9,
    color: { ring: "water.300", plant: "sun.500", accent: "earth.600" },
  }),

  // 13 Bonsai — cloud canopy on a short trunk in a shallow tray.
  avatar("bonsai", {
    label: "Bonsai",
    keywords: ["tree", "tray", "zen"],
    plant: [
      P("M6.5 11.5c0-1.8 1.4-2.8 3-2.6C9.8 7.2 11.4 6 13 6.3c2.2.3 3 2 2.8 3.4 1.5.3 2.4 1.4 2.4 2.6 0 1.6-1.4 2.6-3 2.6H9.2c-1.6 0-2.7-1.1-2.7-3.4Z"),
      P("M12 17.5v-2.4"),
      P("M6.5 17.5h11l-.8 2H7.3Z"),
    ],
    holes: [
      "M6.5 11.5c0-1.8 1.4-2.8 3-2.6C9.8 7.2 11.4 6 13 6.3c2.2.3 3 2 2.8 3.4 1.5.3 2.4 1.4 2.4 2.6 0 1.6-1.4 2.6-3 2.6H9.2c-1.6 0-2.7-1.1-2.7-3.4Z",
      "M11 15.2h2v2.1h-2Z",
      "M6.5 17.5h11l-.8 2H7.3Z",
    ],
    counters: 3,
    color: { ring: "earth.400", plant: "leaf.700" },
  }),

  // 14 Clover — four heart leaflets on a stem.
  avatar("clover", {
    label: "Clover",
    keywords: ["four-leaf", "lucky", "shamrock"],
    plant: [
      ...[0, 90, 180, 270].map((a) => P(rotated(CLOVER_LEAFLET, a))),
      P("M12 16.5v2.8"),
    ],
    holes: [...[0, 90, 180, 270].map((a) => rotated(CLOVER_LEAFLET, a)), "M11.2 17.6h1.6v1.8h-1.6Z"],
    counters: 5,
    color: { ring: "sun.300", plant: "leaf.700" },
  }),

  // 15 Lotus — five petals fanning up from the water line.
  avatar("lotus", {
    label: "Lotus",
    keywords: ["water lily", "calm", "flower"],
    plant: [
      ...[-90, -50, -130, -12, -168].map((a, k) => P(petal(12, 14.5, a, 2.4, [8.5, 7.6, 7.6, 6.4, 6.4][k], [1.35, 1.2, 1.2, 1.1, 1.1][k]))),
      P("M5.5 18.6h13"),
    ],
    holes: [
      ...[-90, -50, -130, -12, -168].map((a, k) => petal(12, 14.5, a, 2.4, [8.5, 7.6, 7.6, 6.4, 6.4][k], [1.35, 1.2, 1.2, 1.1, 1.1][k])),
      "M5.5 17.7h13v1.8h-13Z",
    ],
    counters: 6,
    color: { ring: "water.300", plant: "bloom.500" },
  }),

  // 16 Pine — three-tier conifer with its trunk.
  avatar("pine", {
    label: "Pine",
    keywords: ["conifer", "evergreen", "tree"],
    plant: [P("M12 5l4 6h-2.2l3.2 5H13v2.5h-2V16H7l3.2-5H8Z")],
    counters: 1,
    color: { ring: "ink.300", plant: "leaf.700" },
  }),

  // 17 Bamboo — segmented stalk with a leaf on either side.
  avatar("bamboo", {
    label: "Bamboo",
    keywords: ["stalk", "lucky bamboo"],
    plant: [
      P("M10.6 6.4a1.4 1.4 0 0 1 2.8 0v12.2a1.4 1.4 0 0 1-2.8 0Z"),
      P(petal(13.9, 8.6, -22, 0, 5.6, 1.15)),
      P(petal(10.1, 13.4, 202, 0, 5.6, 1.15)),
    ],
    detail: [P("M10.6 10.2h2.8"), P("M10.6 15h2.8")],
    holes: [
      "M10.6 6.4a1.4 1.4 0 0 1 2.8 0v12.2a1.4 1.4 0 0 1-2.8 0Z",
      bar(10.75, 10.2, 13.25, 10.2, 0.32),
      bar(10.75, 15, 13.25, 15, 0.32),
      petal(13.9, 8.6, -22, 0, 5.6, 1.15),
      petal(10.1, 13.4, 202, 0, 5.6, 1.15),
    ],
    counters: 3,
    color: { ring: "leaf.300", plant: "leaf.700", detail: "leaf.300" },
  }),

  // 18 Calathea — oval leaf with paired stripes (prayer plant).
  avatar("calathea", {
    label: "Calathea",
    keywords: ["prayer plant", "stripes", "maranta"],
    plant: [P("M12 5.5c3.3 0 5 3.4 5 7s-1.7 6.5-5 6.5-5-2.9-5-6.5 1.7-7 5-7Z")],
    detail: [P("M12 7v10"), P("M12 9l-2.5 1.2"), P("M12 9l2.5 1.2"), P("M12 12.5l-3 1.4"), P("M12 12.5l3 1.4"), P("M12 15.5l-2.2 1"), P("M12 15.5l2.2 1")],
    holes: [
      "M12 5.5c3.3 0 5 3.4 5 7s-1.7 6.5-5 6.5-5-2.9-5-6.5 1.7-7 5-7Z",
      bar(11.3, 9.1, 9.7, 10.2, 0.34), bar(12.7, 9.1, 14.3, 10.2, 0.34),
      bar(11.3, 12.5, 9.4, 13.8, 0.34), bar(12.7, 12.5, 14.6, 13.8, 0.34),
      bar(11.3, 15.5, 10, 16.4, 0.34), bar(12.7, 15.5, 14, 16.4, 0.34),
    ],
    counters: 1,
    color: { ring: "bloom.500", plant: "leaf.700", detail: "leaf.300" },
  }),

  // 19 Ficus — fiddle-leaf fig: violin-shaped leaf on a stub stem.
  avatar("ficus", {
    label: "Fiddle-leaf fig",
    keywords: ["ficus lyrata", "fig"],
    plant: [
      P("M12 4.8c1.7 0 2.9 1.2 2.9 2.7 0 1-.5 1.8-1.1 2.3 2 .9 3.4 2.7 3.4 4.9 0 2.9-2.3 4.9-5.2 4.9s-5.2-2-5.2-4.9c0-2.2 1.4-4 3.4-4.9-.6-.5-1.1-1.3-1.1-2.3 0-1.5 1.2-2.7 2.9-2.7Z"),
      P("M12 20.6v-1.6"),
    ],
    detail: [P("M12 6.6v11.2")],
    holes: [
      "M12 4.8c1.7 0 2.9 1.2 2.9 2.7 0 1-.5 1.8-1.1 2.3 2 .9 3.4 2.7 3.4 4.9 0 2.9-2.3 4.9-5.2 4.9s-5.2-2-5.2-4.9c0-2.2 1.4-4 3.4-4.9-.6-.5-1.1-1.3-1.1-2.3 0-1.5 1.2-2.7 2.9-2.7Z",
      "M11.1 19.1h1.8v1.6h-1.8Z",
    ],
    counters: 2,
    color: { ring: "earth.400", plant: "leaf.700" },
  }),

  // 20 Rose — bloom from above: two staggered rings of petals around a tight
  // centre. One ring alone reads as a daisy; the offset second ring is what
  // makes it a rose.
  avatar("rose", {
    label: "Rose",
    keywords: ["bloom", "petals", "flower"],
    plant: [
      ...[0, 72, 144, 216, 288].map((a) => P(petal(12, 12, a - 90, 4, 7.4, 1.5))),
      ...[36, 108, 180, 252, 324].map((a) => P(petal(12, 12, a - 90, 1.3, 3.7, 1))),
    ],
    accent: [C(12, 12, 0.9)],
    holes: [
      ...[0, 72, 144, 216, 288].map((a) => petal(12, 12, a - 90, 4, 7.4, 1.5)),
      ...[36, 108, 180, 252, 324].map((a) => petal(12, 12, a - 90, 1.3, 3.7, 1)),
      circ(12, 12, 0.9),
    ],
    counters: 11,
    color: { ring: "leaf.300", plant: "bloom.500", accent: "sun.500" },
  }),

  // 21 Lavender — spike of florets on a stem with one leaf.
  avatar("lavender", {
    label: "Lavender",
    keywords: ["herb", "purple", "spike"],
    plant: [P("M12 19v-6.5"), P("M11.1 16c-2 .2-3.5-.6-4.3-2.4 2-.2 3.5.6 4.3 2.4Z")],
    accent: [C(12, 5.6, 1.2), C(10.5, 7.8, 1.2), C(13.5, 8.6, 1.2), C(10.5, 10.4, 1.2), C(13.5, 11.2, 1.2)],
    holes: [
      "M11.2 12.5h1.6V19h-1.6Z",
      "M11.1 16c-2 .2-3.5-.6-4.3-2.4 2-.2 3.5.6 4.3 2.4Z",
      circ(12, 5.6, 1.6), circ(10.5, 7.8, 1.6), circ(13.5, 8.6, 1.6), circ(10.5, 10.4, 1.6), circ(13.5, 11.2, 1.6),
    ],
    counters: 7,
    color: { ring: "sun.300", plant: "leaf.700", accent: "bloom.500" },
  }),

  // 22 Ivy — three-lobed leaf on a stem.
  avatar("ivy", {
    label: "Ivy",
    keywords: ["hedera", "climber", "lobed"],
    plant: [
      P("M12 6c1.2 1.5 2.5 2 4.5 2 .3 1.8-.5 3.2-1.8 4 1.5 1 2 2.8 1.3 4.5-1.8-.2-3.2-1-4-2.3-.8 1.3-2.2 2.1-4 2.3-.7-1.7-.2-3.5 1.3-4.5C8 12 7.2 10.6 7.5 8.8c2-.1 3.3-.5 4.5-2.8Z"),
      P("M12 14.6v4.4"),
    ],
    detail: [P("M12 8.5v5")],
    holes: [
      "M12 6c1.2 1.5 2.5 2 4.5 2 .3 1.8-.5 3.2-1.8 4 1.5 1 2 2.8 1.3 4.5-1.8-.2-3.2-1-4-2.3-.8 1.3-2.2 2.1-4 2.3-.7-1.7-.2-3.5 1.3-4.5C8 12 7.2 10.6 7.5 8.8c2-.1 3.3-.5 4.5-2.8Z",
      "M11 14.8h2V19h-2Z",
    ],
    counters: 2,
    color: { ring: "ink.300", plant: "leaf.700" },
  }),

  // 23 Pilea — Chinese money plant: coin leaf on a stalk.
  avatar("pilea", {
    label: "Pilea",
    keywords: ["chinese money plant", "coin", "round leaf"],
    plant: [C(12, 10.2, 5), P("M12 15.5v3.5")],
    detail: [C(12, 10.2, 1.2, { filled: true })],
    holes: [circ(12, 10.2, 5), "M11 15.6h2V19h-2Z"],
    counters: 2,
    color: { ring: "water.300", plant: "leaf.700", detail: "leaf.500" },
  }),

  // 24 Oak — lobed oak leaf with a midrib.
  avatar("oak", {
    label: "Oak",
    keywords: ["quercus", "lobed", "autumn"],
    plant: [
      P("M12 5.5c1.3.5 2 1.6 1.8 2.8 1.4-.2 2.4.6 2.4 1.8 0 .8-.4 1.4-1 1.8 1.2.4 1.8 1.4 1.5 2.5-.2.9-1 1.5-2 1.6.4 1.4-.4 2.6-1.8 2.9-.3.4-.6.8-.9 1.1-.3-.3-.6-.7-.9-1.1-1.4-.3-2.2-1.5-1.8-2.9-1-.1-1.8-.7-2-1.6-.3-1.1.3-2.1 1.5-2.5-.6-.4-1-1-1-1.8 0-1.2 1-2 2.4-1.8-.2-1.2.5-2.3 1.8-2.8Z"),
    ],
    detail: [P("M12 7.5v9.5")],
    counters: 1,
    color: { ring: "sun.300", plant: "earth.600", detail: "earth.400" },
  }),

  // 25 Eucalyptus — stem with three pairs of round leaves.
  avatar("eucalyptus", {
    label: "Eucalyptus",
    keywords: ["gum", "round leaves", "silver dollar"],
    plant: [
      P("M12 19.5V5.5"),
      ...[8.4, 12.6, 16.8].flatMap((y) => [P(petal(12, y, 210, 1.9, 6.6, 1.25)), P(petal(12, y, -30, 1.9, 6.6, 1.25))]),
    ],
    holes: [
      "M11.2 5.5h1.6v14h-1.6Z",
      ...[8.4, 12.6, 16.8].flatMap((y) => [petal(12, y, 210, 1.9, 6.6, 1.25), petal(12, y, -30, 1.9, 6.6, 1.25)]),
    ],
    counters: 7,
    color: { ring: "leaf.300", plant: "leaf.500" },
  }),
];
