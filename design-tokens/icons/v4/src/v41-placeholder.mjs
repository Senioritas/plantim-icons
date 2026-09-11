// v4.1 proposal — `placeholder.*`: skeleton / loading-state glyphs.
//
// Visual language: a *container* holding *ghost content*. Placeholders must
// recede, so every multicolor mapping stays inside the ink ramp (ink.300 for
// containers, ink.500 for content) and duotone mutes the container. Solids are
// real fills (tiles) so a placeholder can stand in for the asset it replaces
// (avatar disc, photo tile, list row) without changing footprint.
//
// Grounding: the app ships `profile-placeholder.svg` as a raw asset and uses
// `plant.sprout` (h-14) as the plant-hero photo fallback — both outside the
// registry (reports/v4-app-icon-audit.md §3c, §2).

import { icon, layer, P, C, R } from "../../../bin/lib/v4-dsl.mjs";

const INK = { container: "ink.300", content: "ink.500" };

export default [
  // Profile photo placeholder: ring + bust. Distinct from account.user (the
  // Profile tab) by the shoulders meeting the ring — the classic "no photo"
  // crop. Solid = ring + filled silhouette; the space around the bust is the
  // single declared counter.
  icon("placeholder.avatar", {
    tier: "P1",
    verdict: "new",
    category: "placeholder",
    label: "Avatar placeholder",
    keywords: ["avatar", "profile", "placeholder", "skeleton", "loading", "no photo"],
    grades: {
      base: [
        layer("ring", "container", [C(12, 12, 9.25)]),
        layer("bust", "primary", [C(12, 8.8, 2.9), P("M5.9 19.2C6.9 15.9 9.2 14.2 12 14.2s5.1 1.7 6.1 5")]),
      ],
      micro: [
        layer("ring", "container", [C(12, 12, 9.4)]),
        layer("bust", "primary", [C(12, 8.6, 3.1), P("M5.6 19.4C6.6 15.9 9.1 14.4 12 14.4s5.4 1.5 6.4 5")]),
      ],
    },
    solid: {
      base: {
        // One path: evenodd cuts the counter only inside a single path element.
        paths: [
          "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM5.8 17.45A8.25 8.25 0 1 1 18.2 17.45C17.2 14.9 14.8 13.4 12 13.4s-5.2 1.5-6.2 4.05ZM12 5.3a3.5 3.5 0 1 0 0 7a3.5 3.5 0 1 0 0-7Z",
        ],
        counters: 1,
      },
    },
    variants: {
      duotone: { primary: ["bust"] },
      multicolor: { ring: INK.container, bust: INK.content },
    },
  }),

  // Plant photo placeholder: photo tile + leaf. Replaces the scaled-up
  // plant.sprout used as the plant-hero fallback today. Solid = filled tile
  // with the leaf as its counter.
  icon("placeholder.plant", {
    tier: "P1",
    verdict: "new",
    category: "placeholder",
    label: "Plant photo placeholder",
    keywords: ["plant", "photo", "placeholder", "skeleton", "loading", "tile"],
    grades: {
      base: [
        layer("frame", "container", [R(3, 3, 18, 18, 2)]),
        layer("leaf", "primary", [P("M16.5 7.5C10.5 8 7.5 11.5 7.5 16.5C13.5 16 16.5 12.5 16.5 7.5Z")]),
        layer("vein", "secondary", [P("M9.5 14.5 14.5 9.5")]),
      ],
      micro: [
        layer("frame", "container", [R(3, 3, 18, 18, 2)]),
        layer("leaf", "primary", [P("M16.5 7.5C10.5 8 7.5 11.5 7.5 16.5C13.5 16 16.5 12.5 16.5 7.5Z")]),
      ],
    },
    solid: {
      base: {
        paths: [
          "M5 2h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3ZM17 7C10.2 7.6 7 11.6 7 17C13.4 16.4 16.6 12.4 17 7Z",
        ],
        counters: 1,
      },
    },
    variants: {
      duotone: { primary: ["leaf", "vein"] },
      multicolor: { frame: INK.container, leaf: "leaf.300", vein: "leaf.300" },
    },
  }),

  // Text skeleton: two full lines + one short. Solid = bold bars.
  icon("placeholder.text", {
    tier: "P1",
    verdict: "new",
    category: "placeholder",
    label: "Text skeleton",
    keywords: ["text", "lines", "placeholder", "skeleton", "loading", "shimmer"],
    grades: {
      base: [
        layer("lines", "primary", [P("M4 7h16"), P("M4 12h16")]),
        layer("tail", "secondary", [P("M4 17h10")]),
      ],
    },
    solid: {
      base: { mode: "bold", strokeWidth: 3.4, counters: 0 },
      micro: { mode: "bold", strokeWidth: 3.6, counters: 0 },
    },
    variants: {
      duotone: { primary: ["lines"] },
      multicolor: { lines: INK.content, tail: INK.container },
    },
  }),

  // List-row skeleton: avatar disc + two lines (notification / member rows).
  icon("placeholder.list", {
    tier: "P1",
    verdict: "new",
    category: "placeholder",
    label: "List row skeleton",
    keywords: ["list", "row", "placeholder", "skeleton", "loading"],
    grades: {
      base: [
        layer("avatar", "container", [C(7, 12, 4)]),
        layer("lines", "primary", [P("M14 9.5h7"), P("M14 14.5h4.5")]),
      ],
    },
    solid: {
      base: {
        paths: [
          "M7 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10Z",
          "M14.25 8.25h6.5a1.25 1.25 0 0 1 0 2.5h-6.5a1.25 1.25 0 0 1 0-2.5Z",
          "M14.25 13.25h4a1.25 1.25 0 0 1 0 2.5h-4a1.25 1.25 0 0 1 0-2.5Z",
        ],
        counters: 0,
      },
    },
    variants: {
      duotone: { primary: ["lines"] },
      multicolor: { avatar: INK.container, lines: INK.content },
    },
  }),

  // Card skeleton: media block + two lines (plant / garden cards, feed).
  icon("placeholder.card", {
    tier: "P1",
    verdict: "new",
    category: "placeholder",
    label: "Card skeleton",
    keywords: ["card", "placeholder", "skeleton", "loading", "feed"],
    grades: {
      base: [
        layer("block", "container", [R(3, 3, 18, 9, 2)]),
        layer("lines", "primary", [P("M4 16h16"), P("M4 20h9")]),
      ],
    },
    solid: {
      base: {
        paths: [
          "M5 2h14a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z",
          "M4.5 14.5h15a1.5 1.5 0 0 1 0 3h-15a1.5 1.5 0 0 1 0-3Z",
          "M4.5 18.5h8a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1 0-3Z",
        ],
        counters: 0,
      },
    },
    variants: {
      duotone: { primary: ["block"] },
      multicolor: { block: INK.container, lines: INK.content },
    },
  }),

  // Chart skeleton: axes + ghost bars (GrowthChart loading; utility.bar.chart3
  // stays the "chart" action glyph).
  icon("placeholder.chart", {
    tier: "P2",
    verdict: "new",
    category: "placeholder",
    label: "Chart skeleton",
    keywords: ["chart", "graph", "placeholder", "skeleton", "loading", "growth"],
    grades: {
      base: [
        layer("axes", "container", [P("M4 4v16h16")]),
        layer("bars", "primary", [P("M9 17v-5"), P("M13.5 17v-9"), P("M18 17v-3")]),
      ],
    },
    solid: {
      base: { mode: "bold", strokeWidth: 3.4, counters: 0 },
      micro: { mode: "bold", strokeWidth: 3.6, counters: 0 },
    },
    variants: {
      duotone: { primary: ["bars"] },
      multicolor: { axes: INK.container, bars: INK.content },
    },
  }),
];
