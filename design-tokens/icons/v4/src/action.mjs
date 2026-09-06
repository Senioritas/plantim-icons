// v4 action category — P0: action.add (toolbar add-plant).

import { icon, layer, P } from "../../../bin/lib/v4-dsl.mjs";

export default [
  // Toolbar add. v2 mapped this to a circled plus, colliding with
  // utility.plus.circle; v4 gives the toolbar the platform-conventional bare
  // plus and leaves the circled plus to utility.plus.circle (hero CTA).
  icon("action.add", {
    tier: "P0",
    verdict: "refine",
    category: "action",
    label: "Add",
    keywords: ["add", "plus", "new", "create"],
    provenance: { v2: "action.add", v3: "action.add" },
    grades: {
      base: [layer("plus", "primary", [P("M12 5.5v13"), P("M5.5 12h13")])],
      micro: [layer("plus", "primary", [P("M12 5v14"), P("M5 12h14")])],
      display: [layer("plus", "primary", [P("M12 5.5v13"), P("M5.5 12h13")])],
    },
    solid: {
      base: { mode: "bold", strokeWidth: 3.2, counters: 0 },
      micro: { mode: "bold", strokeWidth: 3.4, counters: 0 },
    },
    variants: {
      duotone: { primary: ["plus"] },
      multicolor: { plus: "leaf.700" },
    },
    animation: "addSpin",
  }),
];
