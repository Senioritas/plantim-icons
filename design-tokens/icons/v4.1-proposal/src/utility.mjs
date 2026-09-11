// v4.1 proposal — utility gaps the app works around today.
//
// Each id here has no semantic equivalent in v2/v3/v4 (checked against the
// full id list): download (upload exists), sort, drag handle, QR code,
// external link, language picker, add-photo camera.

import { icon, layer, P, C, R } from "../../../bin/lib/v4-dsl.mjs";

const bold = { base: { mode: "bold", strokeWidth: 3.1, counters: 0 }, micro: { mode: "bold", strokeWidth: 3.3, counters: 0 } };

// v4 utility.camera body, reused verbatim so the pair sits together.
const CAMERA_BODY =
  "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z";

export default [
  // Mirror of utility.upload (same tray, arrow reversed) — export data, save
  // a photo, download a care report.
  icon("utility.download", {
    tier: "P1",
    verdict: "new",
    category: "utility",
    label: "Download",
    keywords: ["download", "save", "export", "arrow down", "tray"],
    grades: {
      base: [
        layer("tray", "secondary", [P("M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4")]),
        layer("arrow", "primary", [P("M7 10l5 5 5-5"), P("M12 15V3")]),
      ],
    },
    solid: bold,
    variants: { duotone: { primary: ["arrow"] }, multicolor: { tray: "water.600", arrow: "water.600" } },
  }),

  // Sort: paired up/down arrows (plant lists, calendar, feed ordering).
  icon("utility.sort", {
    tier: "P1",
    verdict: "new",
    category: "utility",
    label: "Sort",
    keywords: ["sort", "order", "arrows", "ascending", "descending"],
    grades: {
      base: [
        layer("up", "primary", [P("M7 20V4"), P("M3 8l4-4 4 4")]),
        layer("down", "secondary", [P("M17 4v16"), P("M13 16l4 4 4-4")]),
      ],
    },
    solid: bold,
    variants: { duotone: { primary: ["up"] }, multicolor: { up: "ink.900", down: "ink.500" } },
  }),

  // Drag handle: 2×3 dots (reorder rooms, plants in a garden, care steps).
  icon("utility.drag.handle", {
    tier: "P2",
    verdict: "new",
    category: "utility",
    label: "Drag handle",
    keywords: ["drag", "handle", "reorder", "grip", "move", "sortable"],
    grades: {
      base: [
        // Stroked micro-circles so the grade stroke sizes the dots (v4 more.horizontal convention).
        layer("dots", "primary", [C(9, 6, 0.8), C(9, 12, 0.8), C(9, 18, 0.8), C(15, 6, 0.8), C(15, 12, 0.8), C(15, 18, 0.8)]),
      ],
      micro: [
        layer("dots", "primary", [C(9, 6, 1), C(9, 12, 1), C(9, 18, 1), C(15, 6, 1), C(15, 12, 1), C(15, 18, 1)]),
      ],
    },
    solid: bold,
    variants: { duotone: { primary: ["dots"] }, multicolor: { dots: "ink.500" } },
  }),

  // QR code: three finder patterns (real eyes, dropped at micro) + a module
  // cluster. Solid is a true fill with the finder rings as the 3 counters.
  icon("utility.qr.code", {
    tier: "P2",
    verdict: "new",
    category: "utility",
    label: "QR code",
    keywords: ["qr", "code", "scan", "share", "label", "tag"],
    grades: {
      base: [
        layer("finders", "container", [R(3, 3, 7, 7, 1.5), R(14, 3, 7, 7, 1.5), R(3, 14, 7, 7, 1.5)]),
        layer("eyes", "accent", [C(6.5, 6.5, 1.5, { filled: true }), C(17.5, 6.5, 1.5, { filled: true }), C(6.5, 17.5, 1.5, { filled: true })]),
        layer("modules", "primary", [P("M14 14h3v3"), P("M21 14v3"), P("M14 21h3"), C(20, 20.5, 1.5, { filled: true })]),
      ],
      micro: [
        layer("finders", "container", [R(3, 3, 7, 7, 1.5), R(14, 3, 7, 7, 1.5), R(3, 14, 7, 7, 1.5)]),
        layer("modules", "primary", [P("M14 14h3v3"), C(20, 20.5, 1.7, { filled: true })]),
      ],
    },
    solid: {
      base: {
        paths: [
          // finder = outer + hole + eye in ONE path so evenodd leaves the ring as a counter
          "M4 2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2ZM4 4h5v5H4ZM5.5 5.5h2v2h-2Z",
          "M15 2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2ZM15 4h5v5h-5ZM16.5 5.5h2v2h-2Z",
          "M4 13h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2ZM4 15h5v5H4ZM5.5 16.5h2v2h-2Z",
          "M13 13h5v2h-3v3h-2Z",
          "M20 13h2v5h-2Z",
          "M13 20h5v2h-5Z",
          "M20 19a1.5 1.5 0 1 0 0 3a1.5 1.5 0 1 0 0-3Z",
        ],
        counters: 3,
      },
    },
    variants: {
      duotone: { primary: ["finders", "eyes"] },
      multicolor: { finders: "ink.900", eyes: "ink.900", modules: "ink.500" },
    },
  }),

  // External link: box + arrow leaving top-right (privacy policy, help links).
  icon("utility.external.link", {
    tier: "P1",
    verdict: "new",
    category: "utility",
    label: "External link",
    keywords: ["external", "link", "open", "new tab", "browser", "arrow"],
    grades: {
      base: [
        layer("box", "secondary", [P("M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6")]),
        layer("arrow", "primary", [P("M15 3h6v6"), P("M10 14 21 3")]),
      ],
    },
    solid: bold,
    variants: { duotone: { primary: ["arrow"] }, multicolor: { box: "ink.500", arrow: "ink.900" } },
  }),

  // Language / region picker trigger: speech bubble + "A". Pairs with the
  // flag.* asset class; the crossbar is dropped at micro.
  icon("utility.language", {
    tier: "P1",
    verdict: "new",
    category: "utility",
    label: "Language",
    keywords: ["language", "locale", "translate", "region", "i18n", "bubble"],
    grades: {
      base: [
        layer("bubble", "container", [P("M5 3h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6.5L8 21v-4H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z")]),
        layer("glyph", "primary", [P("M8.5 14l3.5-8 3.5 8"), P("M9.9 11h4.2")]),
      ],
      micro: [
        layer("bubble", "container", [P("M5 3h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6.5L8 21v-4H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z")]),
        layer("glyph", "primary", [P("M8.3 14.2l3.7-8.4 3.7 8.4")]),
      ],
    },
    solid: bold,
    variants: { duotone: { primary: ["glyph"] }, multicolor: { bubble: "ink.500", glyph: "leaf.700" } },
  }),

  // Add photo: the v4 camera body with a plus where the lens sits (profile
  // photo, plant photo, journal entry).
  icon("utility.camera.plus", {
    tier: "P1",
    verdict: "new",
    category: "utility",
    label: "Add photo",
    keywords: ["camera", "photo", "add", "plus", "capture", "avatar"],
    grades: {
      base: [
        layer("body", "primary", [P(CAMERA_BODY)]),
        layer("plus", "accent", [P("M12 10.5v5"), P("M9.5 13h5")]),
      ],
    },
    solid: bold,
    variants: { duotone: { primary: ["body"] }, multicolor: { body: "ink.900", plus: "leaf.700" } },
  }),
];
