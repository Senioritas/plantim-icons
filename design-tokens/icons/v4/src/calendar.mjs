// v4 calendar category — P0: calendar.date (Rhythm/Calendar tab).

import { icon, layer, P, C, R } from "../../../bin/lib/v4-dsl.mjs";

export default [
  // Calendar tab. Frame + binding rings + one emphatic date dot (a digit is
  // unreadable at 16 px; the dot IS the "today" mark). Solid keeps the header
  // slit and date dot as counters so identity survives the fill.
  icon("calendar.date", {
    tier: "P0",
    verdict: "refine",
    category: "calendar",
    label: "Calendar",
    keywords: ["calendar", "date", "rhythm", "schedule"],
    provenance: { v2: "calendar.date", v3: "calendar.date" },
    grades: {
      base: [
        layer("frame", "container", [R(3.5, 5, 17, 15.5, 3), P("M3.5 10.5h17")]),
        layer("rings", "secondary", [P("M8 3v4"), P("M16 3v4")]),
        layer("date", "accent", [C(12, 15.7, 1.7, { filled: true })]),
      ],
      micro: [
        layer("frame", "container", [R(3.5, 5.5, 17, 15, 3), P("M3.5 10.8h17")]),
        layer("rings", "secondary", [P("M8 3v4"), P("M16 3v4")]),
        layer("date", "accent", [C(12, 15.9, 2, { filled: true })]),
      ],
      display: [
        layer("frame", "container", [R(3.5, 5, 17, 15.5, 3), P("M3.5 10.5h17")]),
        layer("rings", "secondary", [P("M8 3v4"), P("M16 3v4")]),
        layer("date", "accent", [C(9.4, 14.4, 1.5, { filled: true }), C(14.6, 17, 1.5, { filled: true })]),
      ],
    },
    solid: {
      base: {
        paths: [
          "M2.5 8a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v10.5a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3V8Zm2 3.3a.85.85 0 0 0 0 1.7h15a.85.85 0 0 0 0-1.7h-15Zm7.5 2.7a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 1 0 0-4.2Z",
          "M7 2.5a1 1 0 0 1 2 0V7a1 1 0 0 1-2 0V2.5Z",
          "M15 2.5a1 1 0 0 1 2 0V7a1 1 0 0 1-2 0V2.5Z",
        ],
        counters: 2,
      },
      micro: {
        paths: [
          "M2.5 8.5a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-10Zm2.1 3.2a.95.95 0 0 0 0 1.9h14.8a.95.95 0 0 0 0-1.9H4.6Zm7.4 2.7a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 1 0 0-4.8Z",
          "M6.9 2.4a1.1 1.1 0 0 1 2.2 0V7a1.1 1.1 0 0 1-2.2 0V2.4Z",
          "M14.9 2.4a1.1 1.1 0 0 1 2.2 0V7a1.1 1.1 0 0 1-2.2 0V2.4Z",
        ],
        counters: 2,
      },
    },
    variants: {
      duotone: { primary: ["frame", "date"] },
      multicolor: { frame: "ink.900", rings: "ink.500", date: "leaf.500" },
    },
    animation: "datePop",
  }),
];
