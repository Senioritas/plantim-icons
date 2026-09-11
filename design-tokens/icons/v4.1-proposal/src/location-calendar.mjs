// v4.1 proposal — where a plant lives, and adding a care event.
//
// The audit flags `navigation.home` doing double duty as "room" in RoomSelect
// on both platforms (reports/v4-app-icon-audit.md §3a-5). location.room frees
// the Today tab glyph; indoor/outdoor cover the placement attribute.
// calendar.add reuses the hand-drawn calendar.date frame so the pair matches.

import { icon, layer, P, C, R } from "../../../bin/lib/v4-dsl.mjs";

const bold = { base: { mode: "bold", strokeWidth: 3.1, counters: 0 }, micro: { mode: "bold", strokeWidth: 3.3, counters: 0 } };

export default [
  // Room: open door frame on a floor line; the knob survives the solid as a counter.
  icon("location.room", {
    tier: "P1",
    verdict: "new",
    category: "location",
    label: "Room",
    keywords: ["room", "door", "place", "home", "location", "indoor"],
    grades: {
      base: [
        layer("door", "primary", [P("M4 21V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v17")]),
        layer("floor", "container", [P("M2 21h20")]),
        layer("knob", "accent", [C(15.5, 12.5, 1.5, { filled: true })]),
      ],
    },
    solid: {
      base: {
        paths: ["M1 22v-2h2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16h2v2ZM15.5 11a1.5 1.5 0 1 0 0 3a1.5 1.5 0 1 0 0-3Z"],
        counters: 1,
      },
    },
    variants: {
      duotone: { primary: ["door", "knob"] },
      multicolor: { door: "earth.600", floor: "ink.500", knob: "sun.500" },
    },
  }),

  // Indoor: window (frame + mullions) on a sill — distinct from utility.grid2x2.
  icon("location.indoor", {
    tier: "P2",
    verdict: "new",
    category: "location",
    label: "Indoor",
    keywords: ["indoor", "window", "inside", "house", "placement"],
    grades: {
      base: [
        layer("frame", "container", [R(4, 3, 16, 15, 1.5)]),
        layer("mullions", "primary", [P("M12 3v15"), P("M4 10.5h16")]),
        layer("sill", "secondary", [P("M2 21h20")]),
      ],
    },
    solid: bold,
    variants: {
      duotone: { primary: ["frame", "mullions"] },
      multicolor: { frame: "ink.900", mullions: "ink.500", sill: "earth.600" },
    },
  }),

  // Outdoor: single round-crown tree on the ground (utility.trees is two pines).
  icon("location.outdoor", {
    tier: "P2",
    verdict: "new",
    category: "location",
    label: "Outdoor",
    keywords: ["outdoor", "outside", "garden", "tree", "balcony", "placement"],
    grades: {
      base: [
        layer("crown", "primary", [C(12, 9.5, 6.5)]),
        layer("trunk", "secondary", [P("M12 16v5")]),
        layer("ground", "container", [P("M6 21h12")]),
      ],
    },
    solid: {
      base: {
        paths: ["M12 2a7.5 7.5 0 1 0 0 15a7.5 7.5 0 1 0 0-15Z", "M11 17h2v3h6v2H5v-2h6Z"],
        counters: 0,
      },
    },
    variants: {
      duotone: { primary: ["crown"] },
      multicolor: { crown: "leaf.500", trunk: "earth.600", ground: "earth.400" },
    },
  }),

  // Add care event: calendar.date's frame + rings with a plus in the body.
  icon("calendar.add", {
    tier: "P1",
    verdict: "new",
    category: "calendar",
    label: "Add event",
    keywords: ["calendar", "add", "event", "schedule", "care", "plus"],
    grades: {
      base: [
        layer("frame", "container", [R(3.5, 5, 17, 15.5, 3), P("M3.5 10.5h17")]),
        layer("rings", "secondary", [P("M8 3v4"), P("M16 3v4")]),
        layer("plus", "accent", [P("M12 13v5"), P("M9.5 15.5h5")]),
      ],
      micro: [
        layer("frame", "container", [R(3.5, 5, 17, 15.5, 3), P("M3.5 10.5h17")]),
        layer("rings", "secondary", [P("M8 3v4"), P("M16 3v4")]),
        layer("plus", "accent", [P("M12 12.5v6"), P("M9 15.5h6")]),
      ],
    },
    solid: {
      base: {
        paths: [
          "M2.5 8a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v10.5a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3V8Zm2 3.3a.85.85 0 0 0 0 1.7h15a.85.85 0 0 0 0-1.7h-15Zm6.6 1h1.8v2.3h2.3v1.8h-2.3v2.3h-1.8v-2.3H8.8v-1.8h2.3Z",
          "M7 2.5a1 1 0 0 1 2 0V7a1 1 0 0 1-2 0V2.5Z",
          "M15 2.5a1 1 0 0 1 2 0V7a1 1 0 0 1-2 0V2.5Z",
        ],
        counters: 2,
      },
    },
    variants: {
      duotone: { primary: ["frame", "plus"] },
      multicolor: { frame: "ink.900", rings: "ink.500", plus: "leaf.500" },
    },
  }),
];
