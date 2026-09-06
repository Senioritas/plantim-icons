// Reworked lifecycle + health icons (from decision-record feedback).
// health.* carry the plant's status through COLOR (green/amber/red) with a
// reinforcing corner badge glyph; lifecycle icons are clear plant metaphors.
// See reports/v4-worklog.md.

import { icon, layer, P, C } from "../../../bin/lib/v4-dsl.mjs";

// Shared leaf (point top-right, round base bottom-left) for the three health
// states — leaves the bottom-right corner clear for the status badge.
const LEAF = "M17.5 3.5C9.5 4 4 9.5 4 17.5C12 17 17 11.5 17.5 3.5Z";
const VEIN = "M7.5 14 14 7.5";
const boldSolid = { base: { mode: "bold", strokeWidth: 3.1, counters: 0 }, micro: { mode: "bold", strokeWidth: 3.3, counters: 0 } };

function healthIcon(id, label, badgeGlyph, token, labelKey) {
  return icon(id, {
    tier: "P2",
    verdict: "redraw",
    category: "health",
    label,
    keywords: [id.split(".").pop(), "plant", "health", "status"],
    accessibility: "status",
    accessibilityLabelKey: labelKey,
    provenance: { v3: id },
    grades: {
      base: [
        layer("leaf", "primary", [P(LEAF), P(VEIN)]),
        layer("badge", "accent", badgeGlyph),
      ],
      micro: [layer("leaf", "primary", [P(LEAF)]), layer("badge", "accent", badgeGlyph)],
    },
    solid: boldSolid,
    variants: {
      // whole icon reads in the status color — the user's key requirement
      duotone: { primary: ["leaf", "badge"] },
      multicolor: { leaf: token, badge: token },
    },
  });
}

// Compact soil sprout on the left, leaving the top-right clear for a +/- badge.
const sprout = (extra) => [
  layer("ground", "container", [P("M3 21h11")]),
  layer("stem", "primary", [P("M8.5 21v-6")]),
  layer("leaves", "secondary", [
    P("M8.5 15C6.7 15.4 4.7 14.4 4.3 11.9C6.6 11.5 8.4 12.7 8.5 15Z"),
    P("M8.5 15C10.3 15.4 12.3 14.4 12.7 11.9C10.4 11.5 8.6 12.7 8.5 15Z"),
  ]),
  ...(extra ?? []),
];

export default [
  healthIcon("health.healthy", "Healthy", [P("M14.5 18l1.8 1.8 3.2-3.4")], "status.success", "a11y.icons.health.healthy"),
  healthIcon("health.attention", "Attention", [P("M17.5 14.5v3.4"), C(17.5, 20.4, 1, { filled: true })], "status.warning", "a11y.icons.health.attention"),
  healthIcon("health.critical", "Critical", [P("M15.4 15.4l4.2 4.2"), P("M19.6 15.4l-4.2 4.2")], "status.error", "a11y.icons.health.critical"),

  // Add a plant: soil sprout (left) + a circled plus badge (top-right).
  icon("plant.add", {
    tier: "P2", verdict: "redraw", category: "lifecycle", label: "Add plant",
    keywords: ["add", "plant", "new", "sprout"], provenance: { v3: "plant.add" },
    grades: {
      base: [...sprout(), layer("badge", "accent", [C(18, 7, 4), P("M18 5.2v3.6"), P("M16.2 7h3.6")])],
      micro: [...sprout(), layer("badge", "accent", [C(18, 6.5, 4.5), P("M18 4.5v4"), P("M15.5 6.5h5")])],
    },
    solid: boldSolid,
    variants: { duotone: { primary: ["stem", "leaves", "badge"] }, multicolor: { ground: "earth.600", stem: "leaf.700", leaves: "leaf.500", badge: "leaf.700" } },
  }),

  // Remove a plant: same sprout + circled minus badge (relational to add).
  icon("plant.remove", {
    tier: "P2", verdict: "redraw", category: "lifecycle", label: "Remove plant",
    keywords: ["remove", "plant", "delete", "sprout"], provenance: { v3: "plant.remove" },
    grades: {
      base: [...sprout(), layer("badge", "accent", [C(18, 7, 4), P("M16.2 7h3.6")])],
      micro: [...sprout(), layer("badge", "accent", [C(18, 6.5, 4.5), P("M15.5 6.5h5")])],
    },
    solid: boldSolid,
    variants: { duotone: { primary: ["stem", "leaves", "badge"] }, multicolor: { ground: "earth.600", stem: "leaf.700", leaves: "leaf.500", badge: "status.error" } },
  }),

  // Related plants: two overlapping leaves (a "similar / related plants" pair) —
  // reads as foliage, never as a bone/dumbbell.
  icon("plant.related", {
    tier: "P2", verdict: "redraw", category: "lifecycle", label: "Related plants",
    keywords: ["related", "similar", "plants", "compare"], provenance: { v3: "plant.related" },
    grades: {
      base: [
        layer("back", "secondary", [P("M15.5 4C9.5 5 5.5 9.5 6 15.5C12 15 16 10.5 15.5 4Z"), P("M8.5 13 13.5 7")]),
        layer("front", "primary", [P("M19 9C14.5 9.8 11.5 13.2 12 17.8C16.5 17 19.5 13.6 19 9Z")]),
      ],
      micro: [
        layer("back", "secondary", [P("M15.5 4C9.5 5 5.5 9.5 6 15.5C12 15 16 10.5 15.5 4Z")]),
        layer("front", "primary", [P("M19 9C14.5 9.8 11.5 13.2 12 17.8C16.5 17 19.5 13.6 19 9Z")]),
      ],
    },
    solid: boldSolid,
    variants: { duotone: { primary: ["front"] }, multicolor: { back: "leaf.300", front: "leaf.700" } },
  }),

  // Seedling: a seed at the soil with a single young sprout emerging.
  icon("plant.seedling", {
    tier: "P2", verdict: "redraw", category: "plant", label: "Seedling",
    keywords: ["seedling", "seed", "young", "start"], provenance: { v2: "plant.seedling", v3: "plant.seedling" },
    grades: {
      base: [
        layer("soil", "container", [P("M5 20h14")]),
        layer("stem", "primary", [P("M12 20v-6")]),
        layer("leaf", "secondary", [P("M12 14C9.6 14 7.6 12 7.6 9.5C10 9.5 12 11.5 12 14Z")]),
        layer("seed", "accent", [P("M9 20c0-1.7 1.3-3 3-3s3 1.3 3 3Z")]),
      ],
      micro: [
        layer("soil", "container", [P("M5 20h14")]),
        layer("stem", "primary", [P("M12 20v-6")]),
        layer("leaf", "secondary", [P("M12 14C9.6 14 7.6 12 7.6 9.5C10 9.5 12 11.5 12 14Z")]),
        layer("seed", "accent", [P("M9 20c0-1.7 1.3-3 3-3s3 1.3 3 3Z")]),
      ],
    },
    solid: boldSolid,
    variants: { duotone: { primary: ["stem", "leaf"] }, multicolor: { soil: "earth.600", stem: "leaf.700", leaf: "leaf.500", seed: "earth.400" } },
  }),

  // Thriving: a full plant reaching up with a sparkle.
  icon("plant.thriving", {
    tier: "P2", verdict: "redraw", category: "plant", label: "Thriving",
    keywords: ["thriving", "flourish", "grow", "healthy"], provenance: { v2: "plant.thriving", v3: "plant.thriving" },
    grades: {
      base: [
        layer("ground", "container", [P("M6 21h12")]),
        layer("stem", "primary", [P("M12 21V8")]),
        layer("leaves", "secondary", [
          P("M12 16C9.5 16.4 6.8 15 6.4 12C9 11.6 11.6 13 12 16Z"),
          P("M12 13C14.5 13.4 17.2 12 17.6 9C15 8.6 12.4 10 12 13Z"),
          P("M12 8.5C10 8 8.5 6 8.6 3.5C11 4 12.4 6 12 8.5Z"),
        ]),
        layer("spark", "accent", [P("M18 3.5v3"), P("M16.5 5h3")]),
      ],
      micro: [
        layer("ground", "container", [P("M6 21h12")]),
        layer("stem", "primary", [P("M12 21V9")]),
        layer("leaves", "secondary", [
          P("M12 16C9.5 16.4 6.8 15 6.4 12C9 11.6 11.6 13 12 16Z"),
          P("M12 13C14.5 13.4 17.2 12 17.6 9C15 8.6 12.4 10 12 13Z"),
        ]),
      ],
    },
    solid: boldSolid,
    variants: { duotone: { primary: ["stem", "leaves"] }, multicolor: { ground: "earth.600", stem: "leaf.700", leaves: "leaf.500", spark: "sun.500" } },
  }),

  // Watering can: tilted can + spout + handle + falling water drops. No X.
  icon("plant.watering.can", {
    tier: "P2", verdict: "redraw", category: "plant", label: "Watering can",
    keywords: ["watering", "can", "water"], provenance: { v2: "plant.watering.can", v3: "plant.watering.can" },
    grades: {
      base: [
        layer("can", "primary", [
          P("M6 11h9a2 2 0 0 1 2 2v4a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-5a1 1 0 0 1 1-1Z"),
          P("M15 12l4-3v6"),
          P("M8 11V9a2 2 0 0 1 4 0v2"),
        ]),
        layer("water", "accent", [P("M20 18v2.5"), P("M22 17v2.5")]),
      ],
      micro: [
        layer("can", "primary", [
          P("M6 11h9a2 2 0 0 1 2 2v4a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-5a1 1 0 0 1 1-1Z"),
          P("M15 12l4-3v6"),
        ]),
        layer("water", "accent", [P("M20.5 18v3")]),
      ],
    },
    solid: boldSolid,
    variants: { duotone: { primary: ["can"] }, multicolor: { can: "ink.900", water: "water.600" } },
  }),

  // Growth stages.
  icon("stage.growing", {
    tier: "P2", verdict: "redraw", category: "lifecycle", label: "Growing",
    keywords: ["growing", "stage", "plant"], provenance: { v3: "stage.growing" },
    grades: {
      base: [
        layer("ground", "container", [P("M6 21h12")]),
        layer("stem", "primary", [P("M12 21v-9")]),
        layer("leaves", "secondary", [
          P("M12 15C9.7 15.4 7.2 14 6.8 11.2C9.3 10.8 11.6 12.2 12 15Z"),
          P("M12 12C14.3 12.4 16.8 11 17.2 8.2C14.7 7.8 12.4 9.2 12 12Z"),
        ]),
      ],
      micro: [
        layer("ground", "container", [P("M6 21h12")]),
        layer("stem", "primary", [P("M12 21v-9")]),
        layer("leaves", "secondary", [
          P("M12 15C9.7 15.4 7.2 14 6.8 11.2C9.3 10.8 11.6 12.2 12 15Z"),
          P("M12 12C14.3 12.4 16.8 11 17.2 8.2C14.7 7.8 12.4 9.2 12 12Z"),
        ]),
      ],
    },
    solid: boldSolid,
    variants: { duotone: { primary: ["stem", "leaves"] }, multicolor: { ground: "earth.600", stem: "leaf.700", leaves: "leaf.500" } },
  }),

  icon("stage.mature", {
    tier: "P2", verdict: "redraw", category: "lifecycle", label: "Mature",
    keywords: ["mature", "tree", "stage", "grown"], provenance: { v3: "stage.mature" },
    grades: {
      // a bushy three-lobe tree crown on a short trunk — reads as a grown tree
      base: [
        layer("trunk", "primary", [P("M12 21v-6")]),
        layer("canopy", "secondary", [P("M9 16a4 4 0 0 1-2.4-7.2A4.5 4.5 0 0 1 12 3.2a4.5 4.5 0 0 1 5.4 5.6A4 4 0 0 1 15 16Z")]),
        layer("ground", "container", [P("M8 21h8")]),
      ],
      micro: [
        layer("trunk", "primary", [P("M12 21v-5")]),
        layer("canopy", "secondary", [P("M9 16a4 4 0 0 1-2.4-7.2A4.5 4.5 0 0 1 12 3.2a4.5 4.5 0 0 1 5.4 5.6A4 4 0 0 1 15 16Z")]),
      ],
    },
    solid: boldSolid,
    variants: { duotone: { primary: ["canopy", "trunk"] }, multicolor: { trunk: "earth.600", canopy: "leaf.700", ground: "earth.400" } },
  }),
];
