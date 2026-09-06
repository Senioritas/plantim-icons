// v4 plant category — hand-authored geometry (P0 icons crafted individually).
// Grid/stroke rules: design-tokens/icons/v4/DESIGN.md. All coordinates on the
// 24-grid; solids are drawn to the outline's stroked footprint.

import { icon, layer, P } from "../../../bin/lib/v4-dsl.mjs";

export default [
  // Plants tab (PlantimNavigation.plants). Metaphor: a young sprout — vertical
  // stem, two symmetric leaves, ground line. Must read instantly at 16 px.
  icon("plant.sprout", {
    tier: "P0",
    verdict: "redraw",
    category: "plant",
    label: "Sprout",
    keywords: ["plant", "sprout", "seedling", "plants"],
    provenance: { v2: "plant.sprout", v3: "plant.sprout" },
    grades: {
      base: [
        layer("ground", "container", [P("M5 21h14")]),
        layer("stem", "primary", [P("M12 21v-8")]),
        layer("leaves", "secondary", [
          P("M12 13C9.6 13.9 6.2 13.2 5 10.3C4.5 9.2 4.6 8 4.8 7C8.5 6.3 11.7 8.9 12 13Z"),
          P("M12 13C14.4 13.9 17.8 13.2 19 10.3C19.5 9.2 19.4 8 19.2 7C15.5 6.3 12.3 8.9 12 13Z"),
        ]),
      ],
      micro: [
        layer("ground", "container", [P("M5.5 21h13")]),
        layer("stem", "primary", [P("M12 21v-7.5")]),
        layer("leaves", "secondary", [
          P("M12 13.5C9.7 14.3 6.6 13.6 5.5 11C5.1 10 5.2 8.9 5.4 8C8.8 7.4 11.7 9.8 12 13.5Z"),
          P("M12 13.5C14.3 14.3 17.4 13.6 18.5 11C18.9 10 18.8 8.9 18.6 8C15.2 7.4 12.3 9.8 12 13.5Z"),
        ]),
      ],
      display: [
        layer("ground", "container", [P("M5 21h14")]),
        layer("stem", "primary", [P("M12 21v-8")]),
        layer("leaves", "secondary", [
          P("M12 13C9.6 13.9 6.2 13.2 5 10.3C4.5 9.2 4.6 8 4.8 7C8.5 6.3 11.7 8.9 12 13Z"),
          P("M12 13C14.4 13.9 17.8 13.2 19 10.3C19.5 9.2 19.4 8 19.2 7C15.5 6.3 12.3 8.9 12 13Z"),
          P("M8 9.4C9.7 10.3 11.4 11.6 12 13"),
          P("M16 9.4C14.3 10.3 12.6 11.6 12 13"),
        ]),
      ],
    },
    solid: {
      base: {
        paths: [
          "M4.9 20a1 1 0 0 0 0 2h14.2a1 1 0 0 0 0-2H4.9Z",
          "M11 19.8h2V13h-2v6.8Z",
          "M13 13.3C10 14.9 5.6 14.2 4 10.7C3.4 9.3 3.6 7.7 3.9 6.3C8.6 5.2 12.7 8.2 13.1 12.9a1 1 0 0 1-.1.4Z",
          "M11 13.3C14 14.9 18.4 14.2 20 10.7C20.6 9.3 20.4 7.7 20.1 6.3C15.4 5.2 11.3 8.2 10.9 12.9a1 1 0 0 0 .1.4Z",
        ],
        counters: 0,
      },
      micro: {
        paths: [
          "M5.4 20a1 1 0 0 0 0 2h13.2a1 1 0 0 0 0-2H5.4Z",
          "M10.8 19.8h2.4V13.5h-2.4v6.3Z",
          "M13.1 13.9C10.2 15.5 6 14.7 4.5 11.4C4 10.2 4.1 8.8 4.4 7.5C8.8 6.4 12.7 9.3 13.2 13.5a1 1 0 0 1-.1.4Z",
          "M10.9 13.9C13.8 15.5 18 14.7 19.5 11.4C20 10.2 19.9 8.8 19.6 7.5C15.2 6.4 11.3 9.3 10.8 13.5a1 1 0 0 0 .1.4Z",
        ],
        counters: 0,
      },
    },
    variants: {
      duotone: { primary: ["stem", "leaves"] },
      multicolor: { ground: "earth.600", stem: "leaf.700", leaves: "leaf.500" },
    },
    animation: "sproutGrow",
  }),

  // Gardens tab (PlantimNavigation.garden). Metaphor: a raised garden bed with
  // two young plants at staggered heights — a *collection*, distinct from the
  // single plant.sprout at every size. v3's slashed leaf read as "prohibited".
  icon("plant.growth", {
    tier: "P0",
    verdict: "redraw",
    category: "plant",
    label: "Garden",
    keywords: ["garden", "bed", "grow", "plants"],
    provenance: { v2: "plant.growth", v3: "plant.growth" },
    grades: {
      base: [
        layer("bed", "container", [P("M4 15.5h16v2a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 17.5Z")]),
        layer("stems", "primary", [P("M8.8 15.5V12"), P("M15.2 15.5V9.5")]),
        layer("leaves", "secondary", [
          P("M8.8 12C6.9 12.4 4.6 11.6 4.1 9.4C4 8.9 4 8.4 4.1 7.9C6.7 7.5 8.7 9.4 8.8 12Z"),
          P("M15.2 9.5C17.1 9.9 19.4 9.1 19.9 6.9C20 6.4 20 5.9 19.9 5.4C17.3 5 15.3 6.9 15.2 9.5Z"),
        ]),
      ],
      micro: [
        layer("bed", "container", [P("M4 15.5h16v1.5a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 17Z")]),
        layer("stems", "primary", [P("M8.8 15.5v-3"), P("M15.2 15.5V8.9")]),
        layer("leaves", "secondary", [
          P("M8.8 12.5C7 12.9 4.7 12.1 4.2 10C4.1 9.5 4.1 9 4.2 8.5C6.8 8.1 8.7 10 8.8 12.5Z"),
          P("M15.2 8.9C17.1 9.3 19.4 8.5 19.9 6.3C20 5.8 20 5.3 19.9 4.8C17.3 4.4 15.3 6.3 15.2 8.9Z"),
        ]),
      ],
      display: [
        layer("bed", "container", [P("M4 15.5h16v2a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 17.5Z"), P("M7 18.8h10")]),
        layer("stems", "primary", [P("M8.8 15.5V12"), P("M15.2 15.5V9.5")]),
        layer("leaves", "secondary", [
          P("M8.8 12C6.9 12.4 4.6 11.6 4.1 9.4C4 8.9 4 8.4 4.1 7.9C6.7 7.5 8.7 9.4 8.8 12Z"),
          P("M15.2 9.5C17.1 9.9 19.4 9.1 19.9 6.9C20 6.4 20 5.9 19.9 5.4C17.3 5 15.3 6.9 15.2 9.5Z"),
          P("M6.2 9C7.3 9.8 8.3 10.8 8.8 12"),
          P("M17.8 6.5C16.7 7.3 15.7 8.3 15.2 9.5"),
        ]),
      ],
    },
    solid: {
      base: {
        paths: [
          "M3 14.5h18v3A4.5 4.5 0 0 1 16.5 22h-9A4.5 4.5 0 0 1 3 17.5Z",
          "M7.8 13.5h2V9.7h-2v3.8Z",
          "M14.2 13.5h2V7.2h-2v6.3Z",
          "M9.6 12.4C7.5 13.3 4.4 12.5 3.4 9.7C3.2 9 3.2 8.2 3.4 7.3C7 6.5 9.6 8.8 9.8 11.8A1 1 0 0 1 9.6 12.4Z",
          "M14.4 9.9C16.5 10.8 19.6 10 20.6 7.2C20.8 6.5 20.8 5.7 20.6 4.8C17 4 14.4 6.3 14.2 9.3A1 1 0 0 0 14.4 9.9Z",
        ],
        counters: 0,
      },
      micro: {
        paths: [
          "M3 14.5h18v2.5A4.5 4.5 0 0 1 16.5 21.5h-9A4.5 4.5 0 0 1 3 17Z",
          "M7.7 13.5h2.2V9.9H7.7v3.6Z",
          "M14.1 13.5h2.2V6.8h-2.2v6.7Z",
          "M9.8 12.9C7.5 13.9 4.3 13 3.3 10.2C3.1 9.5 3.1 8.6 3.3 7.7C7.1 6.9 9.9 9.2 10 12.3A1 1 0 0 1 9.8 12.9Z",
          "M14.2 9.3C16.5 10.3 19.7 9.4 20.7 6.6C20.9 5.9 20.9 5 20.7 4.1C16.9 3.3 14.1 5.6 14 8.7A1 1 0 0 0 14.2 9.3Z",
        ],
        counters: 0,
      },
    },
    variants: {
      duotone: { primary: ["stems", "leaves"] },
      multicolor: { bed: "earth.600", stems: "leaf.700", leaves: "leaf.500" },
    },
    animation: "gardenSway",
  }),
];
