// v4.1 proposal — plant attributes and care actions the registry lacks.
//
// plant.identify (AI identification), plant.humidity / plant.light
// (environment requirements shown on every plant detail page), pet safety
// (the most-asked plant attribute after light/water), and two care types
// missing from the v3 care.* set: misting and rotating.

import { icon, layer, P, C } from "../../../bin/lib/v4-dsl.mjs";

const bold = { base: { mode: "bold", strokeWidth: 3.1, counters: 0 }, micro: { mode: "bold", strokeWidth: 3.3, counters: 0 } };

// Shared paw (pad + four toes); both pet-safety icons use it so they read as
// a pair. Toe dots are deliberate filled circles (DESIGN §4).
const PAW = () => [
  layer("pad", "primary", [P("M12 21c-2.6 0-5-1.6-5-4 0-1.9 2.2-3.4 5-3.4s5 1.5 5 3.4c0 2.4-2.4 4-5 4Z")]),
  layer("toes", "secondary", [
    C(5.5, 10.5, 1.9, { filled: true }),
    C(9.5, 6.5, 1.9, { filled: true }),
    C(14.5, 6.5, 1.9, { filled: true }),
    C(18.5, 10.5, 1.9, { filled: true }),
  ]),
];

export default [
  // Identify: viewfinder brackets + leaf (+ vein at base/display).
  icon("plant.identify", {
    tier: "P1",
    verdict: "new",
    category: "plant",
    label: "Identify plant",
    keywords: ["identify", "scan", "camera", "ai", "recognise", "viewfinder", "leaf"],
    grades: {
      base: [
        layer("brackets", "container", [
          P("M3 8V5a2 2 0 0 1 2-2h3"),
          P("M16 3h3a2 2 0 0 1 2 2v3"),
          P("M21 16v3a2 2 0 0 1-2 2h-3"),
          P("M8 21H5a2 2 0 0 1-2-2v-3"),
        ]),
        layer("leaf", "primary", [P("M16 8C10.5 8.5 8 11.5 8 16.5C13 16 15.5 13 16 8Z")]),
        layer("vein", "secondary", [P("M9.8 14.7 14.2 9.8")]),
      ],
      micro: [
        layer("brackets", "container", [
          P("M3 8V5a2 2 0 0 1 2-2h3"),
          P("M16 3h3a2 2 0 0 1 2 2v3"),
          P("M21 16v3a2 2 0 0 1-2 2h-3"),
          P("M8 21H5a2 2 0 0 1-2-2v-3"),
        ]),
        layer("leaf", "primary", [P("M16 8C10.5 8.5 8 11.5 8 16.5C13 16 15.5 13 16 8Z")]),
      ],
    },
    solid: bold,
    variants: {
      duotone: { primary: ["leaf", "vein"] },
      multicolor: { brackets: "ink.500", leaf: "leaf.700", vein: "leaf.700" },
    },
  }),

  // Humidity: two drops (never confused with the single plant.watering drop).
  icon("plant.humidity", {
    tier: "P1",
    verdict: "new",
    category: "plant",
    label: "Humidity",
    keywords: ["humidity", "moisture", "drops", "air", "mist", "environment"],
    grades: {
      base: [
        layer("drop", "primary", [P("M15.5 4.5C12.7 8.3 10.3 11.2 10.3 14.7a5.2 5.2 0 0 0 10.4 0C20.7 11.2 18.3 8.3 15.5 4.5Z")]),
        layer("droplet", "secondary", [P("M5 11.5c-1.6 2.2-2.8 3.8-2.8 5.5a2.8 2.8 0 0 0 5.6 0C7.8 15.3 6.6 13.7 5 11.5Z")]),
      ],
    },
    solid: bold,
    variants: { duotone: { primary: ["drop"] }, multicolor: { drop: "water.600", droplet: "water.300" } },
  }),

  // Light requirement: leaf lit by three rays radiating from the top-right
  // corner (the light source sits outside the frame; rays diverge, never
  // converge into an arrowhead).
  icon("plant.light", {
    tier: "P1",
    verdict: "new",
    category: "plant",
    label: "Light",
    keywords: ["light", "sun", "exposure", "bright", "shade", "environment"],
    grades: {
      base: [
        layer("leaf", "primary", [P("M4 20C4 12.5 9 8.5 14.5 9.5C14 15.5 10 20 4 20Z")]),
        layer("vein", "secondary", [P("M6 18 11.5 12.5")]),
        layer("rays", "accent", [P("M21 5.5V9"), P("M18.5 3H15"), P("M19.2 4.8l-2.5 2.5")]),
      ],
      micro: [
        layer("leaf", "primary", [P("M4 20C4 12.5 9 8.5 14.5 9.5C14 15.5 10 20 4 20Z")]),
        layer("rays", "accent", [P("M21 5.5V9"), P("M18.5 3H15"), P("M19.2 4.8l-2.5 2.5")]),
      ],
    },
    solid: bold,
    variants: { duotone: { primary: ["leaf", "vein"] }, multicolor: { leaf: "leaf.700", vein: "leaf.700", rays: "sun.500" } },
  }),

  // Pet-safe: paw in leaf green.
  icon("plant.pet.safe", {
    tier: "P2",
    verdict: "new",
    category: "plant",
    label: "Pet safe",
    keywords: ["pet", "safe", "paw", "cat", "dog", "non-toxic"],
    accessibility: "semantic",
    accessibilityLabelKey: "a11y.icons.plant.petSafe",
    grades: { base: PAW() },
    solid: bold,
    variants: { duotone: { primary: ["pad"] }, multicolor: { pad: "leaf.700", toes: "leaf.500" } },
  }),

  // Toxic to pets: the same paw with a slash; the status color sits on the slash.
  icon("plant.pet.unsafe", {
    tier: "P2",
    verdict: "new",
    category: "plant",
    label: "Toxic to pets",
    keywords: ["pet", "toxic", "unsafe", "paw", "poisonous", "warning"],
    accessibility: "semantic",
    accessibilityLabelKey: "a11y.icons.plant.petUnsafe",
    grades: { base: [...PAW(), layer("slash", "accent", [P("M4 4l16 16")])] },
    solid: bold,
    variants: { duotone: { primary: ["pad", "slash"] }, multicolor: { pad: "ink.500", toes: "ink.500", slash: "status.error" } },
  }),

  // Misting: spray bottle + mist dots. Completes care.watering/fertilizing/
  // pruning/repotting (v3) with the one care type they lack.
  icon("care.misting", {
    tier: "P2",
    verdict: "new",
    category: "care",
    label: "Misting",
    keywords: ["mist", "spray", "bottle", "humidity", "care"],
    grades: {
      base: [
        layer("bottle", "primary", [P("M8 11h7v8.5A1.5 1.5 0 0 1 13.5 21h-4A1.5 1.5 0 0 1 8 19.5Z"), P("M10.5 11V8h2.5v3")]),
        layer("head", "secondary", [P("M10.5 8H18"), P("M16 8v3.5")]),
        layer("mist", "accent", [C(20.8, 5, 1.5, { filled: true }), C(21.2, 9, 1.5, { filled: true })]),
      ],
      micro: [
        layer("bottle", "primary", [P("M8 11h7v8.5A1.5 1.5 0 0 1 13.5 21h-4A1.5 1.5 0 0 1 8 19.5Z"), P("M10.5 11V8h2.5v3")]),
        layer("head", "secondary", [P("M10.5 8H18")]),
        layer("mist", "accent", [C(20.8, 5, 1.7, { filled: true }), C(21.2, 9, 1.7, { filled: true })]),
      ],
    },
    solid: bold,
    variants: { duotone: { primary: ["bottle", "head"] }, multicolor: { bottle: "water.600", head: "ink.500", mist: "water.300" } },
  }),

  // Rotating: pot + clockwise arrow over it (turn the plant toward the light).
  icon("care.rotating", {
    tier: "P2",
    verdict: "new",
    category: "care",
    label: "Rotating",
    keywords: ["rotate", "turn", "pot", "light", "care", "even growth"],
    grades: {
      base: [
        layer("pot", "primary", [P("M7 14h10l-1.5 7h-7Z")]),
        layer("arrow", "secondary", [P("M4.5 12A7.5 7.5 0 0 1 17.6 6.8"), P("M18 3v4h-4")]),
      ],
    },
    solid: bold,
    variants: { duotone: { primary: ["arrow"] }, multicolor: { pot: "earth.600", arrow: "ink.500" } },
  }),
];
