// v4 navigation category — P0: navigation.home (Today tab, web).

import { icon, layer, P } from "../../../bin/lib/v4-dsl.mjs";

export default [
  // Today tab. House with a door; the solid keeps the door cut out (open to
  // the bottom edge, Material-style) so it never becomes v3's black blob.
  icon("navigation.home", {
    tier: "P0",
    verdict: "refine",
    category: "navigation",
    label: "Today",
    keywords: ["home", "today", "house", "start"],
    provenance: { v2: "navigation.home", v3: "navigation.home" },
    grades: {
      base: [
        layer("shell", "primary", [
          P("M3.9 10.4a2 2 0 0 1 .74-1.55l6.1-5a2 2 0 0 1 2.52 0l6.1 5a2 2 0 0 1 .74 1.55V19a2 2 0 0 1-2 2H5.9a2 2 0 0 1-2-2Z"),
        ]),
        layer("door", "secondary", [P("M10.2 21v-4.3a1.8 1.8 0 0 1 3.6 0V21")]),
      ],
      micro: [
        layer("shell", "primary", [
          P("M3.6 10.5a2 2 0 0 1 .74-1.55l6.4-5.25a2 2 0 0 1 2.52 0l6.4 5.25a2 2 0 0 1 .74 1.55V19a2 2 0 0 1-2 2H5.6a2 2 0 0 1-2-2Z"),
        ]),
        layer("door", "secondary", [P("M10 21v-3.9a2 2 0 0 1 4 0V21")]),
      ],
      display: [
        layer("shell", "primary", [
          P("M3.9 10.4a2 2 0 0 1 .74-1.55l6.1-5a2 2 0 0 1 2.52 0l6.1 5a2 2 0 0 1 .74 1.55V19a2 2 0 0 1-2 2H5.9a2 2 0 0 1-2-2Z"),
        ]),
        layer("door", "secondary", [P("M10.2 21v-4.3a1.8 1.8 0 0 1 3.6 0V21")]),
      ],
    },
    solid: {
      base: {
        paths: [
          "M13.55 3.06a2.9 2.9 0 0 0-3.1 0l-6.1 5A3 3 0 0 0 2.9 10.4V19a3 3 0 0 0 3 3h4.05v-4a2 2 0 0 1 4 0V22h4.05a3 3 0 0 0 3-3v-8.6a3 3 0 0 0-1.45-2.34l-6.1-5Z",
        ],
        counters: 0,
      },
      micro: {
        paths: [
          "M13.6 2.86a3 3 0 0 0-3.2 0L4 8.1a3 3 0 0 0-1.4 2.4V19a3 3 0 0 0 3 3h4.3v-3.8a2.1 2.1 0 0 1 4.2 0V22h4.3a3 3 0 0 0 3-3v-8.5A3 3 0 0 0 20 8.1L13.6 2.86Z",
        ],
        counters: 0,
      },
    },
    variants: {
      duotone: { primary: ["shell"] },
      multicolor: { shell: "ink.900", door: "leaf.700" },
    },
    animation: "homeSettle",
  }),
];
