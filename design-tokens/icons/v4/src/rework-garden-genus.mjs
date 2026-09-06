// Reworked garden tools + genus icons (decision-record feedback).
// See reports/v4-worklog.md. Bold-mode solids (library tier); base + micro grades.

import { icon, layer, P, C } from "../../../bin/lib/v4-dsl.mjs";

const boldSolid = { base: { mode: "bold", strokeWidth: 3.1, counters: 0 }, micro: { mode: "bold", strokeWidth: 3.3, counters: 0 } };

function tool(id, label, keywords, baseLayers, microLayers, multicolor) {
  return icon(id, {
    tier: "P2", verdict: "redraw", category: "garden", label, keywords,
    accessibility: "decorative", provenance: { v3: id },
    grades: { base: baseLayers, micro: microLayers ?? baseLayers },
    solid: boldSolid,
    variants: { duotone: { primary: [baseLayers[0].name] }, multicolor },
  });
}
function plant(id, label, keywords, verdict, baseLayers, microLayers, multicolor) {
  return icon(id, {
    tier: "P2", verdict, category: "genus", label, keywords,
    accessibility: "decorative", provenance: { v3: id },
    grades: { base: baseLayers, micro: microLayers ?? baseLayers },
    solid: boldSolid,
    variants: { duotone: { primary: [baseLayers[0].name] }, multicolor },
  });
}

export default [
  // --- garden tools ---
  tool("garden.gloves", "Gardening gloves", ["glove", "gloves", "hand", "garden"],
    [
      layer("glove", "primary", [
        P("M8 21a3 3 0 0 1-3-3v-4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v2a5 5 0 0 1-3 4.6V21Z"),
        P("M9 12V7.5a1.3 1.3 0 0 1 2.6 0V12"),
        P("M11.6 12V6.5a1.3 1.3 0 0 1 2.6 0V12"),
        P("M5 16a2.5 2.5 0 0 1 0-5"),
      ]),
      layer("cuff", "accent", [P("M7.5 21h6")]),
    ], null,
    { glove: "ink.900", cuff: "leaf.500" }),

  tool("garden.hoe", "Hoe", ["hoe", "tool", "garden"],
    [
      layer("handle", "primary", [P("M18.5 4.5 8 15")]),
      layer("head", "accent", [P("M8 15l-3.5 3.5a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0L13 17Z")]),
    ], null,
    { handle: "ink.900", head: "ink.500" }),

  tool("garden.hose", "Hose", ["hose", "water", "garden"],
    [
      layer("coil", "primary", [P("M11 20a5 5 0 1 1 5-5v-1a3 3 0 0 1 3-3")]),
      layer("nozzle", "accent", [P("M18 8l4 3-2.5 2.5L16 11Z")]),
    ], null,
    { coil: "water.600", nozzle: "ink.900" }),

  tool("garden.rake", "Rake", ["rake", "tool", "garden"],
    [
      layer("handle", "primary", [P("M12 3v9")]),
      layer("head", "accent", [P("M6 12h12"), P("M6.5 12v3.5"), P("M9.25 12v3.5"), P("M12 12v3.5"), P("M14.75 12v3.5"), P("M17.5 12v3.5")]),
    ],
    [
      layer("handle", "primary", [P("M12 3v9")]),
      layer("head", "accent", [P("M6 12h12"), P("M7 12v4"), P("M12 12v4"), P("M17 12v4")]),
    ],
    { handle: "ink.900", head: "ink.500" }),

  tool("garden.spade", "Spade", ["spade", "shovel", "dig", "garden"],
    [
      layer("handle", "primary", [P("M8 4h8"), P("M12 4v11")]),
      layer("blade", "accent", [P("M9 15h6l-3 5.5Z")]),
    ], null,
    { handle: "ink.900", blade: "ink.500" }),

  tool("garden.sprinkler", "Sprinkler", ["sprinkler", "water", "spray", "garden"],
    [
      layer("base", "primary", [P("M8 21h8"), P("M12 21v-5"), P("M9.5 16h5l-1-2h-3Z")]),
      layer("water", "accent", [P("M12 14c-2.5-1-4-3-4.5-6"), P("M12 14c2.5-1 4-3 4.5-6"), P("M12 14V6")]),
    ],
    [
      layer("base", "primary", [P("M8 21h8"), P("M12 21v-5"), P("M9.5 16h5l-1-2h-3Z")]),
      layer("water", "accent", [P("M12 14c-2-1-3.5-3-3.5-6"), P("M12 14c2-1 3.5-3 3.5-6")]),
    ],
    { base: "ink.900", water: "water.600" }),

  tool("garden.trowel", "Trowel", ["trowel", "scoop", "dig", "garden"],
    [
      layer("handle", "primary", [P("M13.5 10.5 18 6"), P("M16 4l4 4-2 2-4-4Z")]),
      layer("blade", "accent", [P("M4 20c-1-3 .5-7 3.5-8.5l4 4C10 18.5 6 20.5 4 20Z")]),
    ], null,
    { handle: "ink.900", blade: "ink.500" }),

  // --- genus ---
  plant("genus.cactus", "Cactus", ["cactus", "succulent", "genus"], "redraw",
    [
      layer("body", "primary", [
        P("M10 18V6.5a2 2 0 0 1 4 0V18"),
        P("M10 13H8.3A1.8 1.8 0 0 1 6.5 11.2V9.5"),
        P("M14 11h1.7a1.8 1.8 0 0 1 1.8 1.8V15"),
      ]),
      layer("pot", "container", [P("M9 18h6l-.6 3h-4.8Z")]),
    ],
    [
      layer("body", "primary", [
        P("M10 18V7a2 2 0 0 1 4 0v11"),
        P("M10 13H7.5V10.5"),
        P("M14 11.5h2.5V14"),
      ]),
      layer("pot", "container", [P("M9 18h6l-.6 3h-4.8Z")]),
    ],
    { body: "leaf.700", pot: "earth.600" }),

  plant("genus.ficus", "Ficus", ["ficus", "rubber", "fig", "genus"], "redraw",
    [
      layer("trunk", "primary", [P("M12 19v-7")]),
      layer("leaves", "secondary", [
        P("M12 12C9 12 6.5 10 6.5 6.5C10 6.5 12 8.5 12 12Z"),
        P("M12 12C15 12 17.5 10 17.5 6.5C14 6.5 12 8.5 12 12Z"),
        P("M12 9C10 8 8.7 6 9.2 3.5C11.4 4 12.5 6.5 12 9Z"),
        P("M12 9C14 8 15.3 6 14.8 3.5C12.6 4 11.5 6.5 12 9Z"),
      ]),
      layer("pot", "container", [P("M9 19h6l-.6 2.5h-4.8Z")]),
    ],
    [
      layer("trunk", "primary", [P("M12 19v-7")]),
      layer("leaves", "secondary", [
        P("M12 12C9 12 6.5 10 6.5 6.5C10 6.5 12 8.5 12 12Z"),
        P("M12 12C15 12 17.5 10 17.5 6.5C14 6.5 12 8.5 12 12Z"),
        P("M12 9V4"),
      ]),
      layer("pot", "container", [P("M9 19h6l-.6 2.5h-4.8Z")]),
    ],
    { trunk: "earth.600", leaves: "leaf.700", pot: "earth.600" }),

  plant("genus.orchid", "Orchid", ["orchid", "flower", "genus"], "redraw",
    [
      layer("stem", "primary", [P("M12 21c0-4-1-6.5-3-8.5")]),
      layer("leaves", "secondary", [
        P("M12 21c-3 .2-5.2-1.6-5.4-4.6C9.6 16.2 11.8 18 12 21Z"),
        P("M12 21c3 .2 5.2-1.6 5.4-4.6C14.4 16.2 12.2 18 12 21Z"),
      ]),
      layer("flower", "accent", [C(12, 7, 2, { filled: true }), C(8.6, 5.4, 1.6), C(15.4, 5.4, 1.6), C(9.6, 9.4, 1.6), C(14.4, 9.4, 1.6)]),
    ],
    [
      layer("stem", "primary", [P("M12 21c0-4-1-6.5-3-8.5")]),
      layer("leaves", "secondary", [
        P("M12 21c-3 .2-5.2-1.6-5.4-4.6C9.6 16.2 11.8 18 12 21Z"),
      ]),
      layer("flower", "accent", [C(12, 6.5, 2.2, { filled: true }), C(8.4, 6, 1.8), C(15.6, 6, 1.8)]),
    ],
    { stem: "leaf.700", leaves: "leaf.700", flower: "bloom.500" }),

  plant("genus.palm", "Palm", ["palm", "tree", "genus"], "refine",
    [
      layer("trunk", "primary", [P("M12 21v-9")]),
      layer("fronds", "secondary", [
        P("M12 12C8.5 11 5.5 8 4.5 4.5"),
        P("M12 12C15.5 11 18.5 8 19.5 4.5"),
        P("M12 12C10.5 8.5 10 5.5 11 3"),
        P("M12 12C13.5 8.5 14 5.5 13 3"),
        P("M12 12C8.5 12.5 5.5 12 3.5 10.5"),
        P("M12 12C15.5 12.5 18.5 12 20.5 10.5"),
      ]),
    ],
    [
      layer("trunk", "primary", [P("M12 21v-9")]),
      layer("fronds", "secondary", [
        P("M12 12C8 11 5 8.5 4 5"),
        P("M12 12C16 11 19 8.5 20 5"),
        P("M12 12C11 8.5 11 5.5 12 3"),
      ]),
    ],
    { trunk: "earth.600", fronds: "leaf.700" }),

  plant("genus.succulent", "Succulent", ["succulent", "rosette", "genus"], "redraw",
    [
      layer("rosette", "primary", [
        P("M12 18V8"),
        P("M12 18C8.5 17 6.5 13.5 7 9.5"),
        P("M12 18C15.5 17 17.5 13.5 17 9.5"),
        P("M12 18C10 16 9 12.5 10 9"),
        P("M12 18C14 16 15 12.5 14 9"),
      ]),
      layer("pot", "container", [P("M9 18h6l-.6 3h-4.8Z")]),
    ],
    [
      layer("rosette", "primary", [
        P("M12 18V9"),
        P("M12 18C8.5 17 6.5 13.5 7 9.5"),
        P("M12 18C15.5 17 17.5 13.5 17 9.5"),
      ]),
      layer("pot", "container", [P("M9 18h6l-.6 3h-4.8Z")]),
    ],
    { rosette: "leaf.700", pot: "earth.600" }),
];
