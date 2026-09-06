// v4 nav + utility rework — hand-authored geometry driven by decision-record
// feedback (see reports/v4-worklog.md and bin/lib/v4-reworked.mjs). These ids
// are excluded from the transcription registries so this module is the single
// source. Grid/stroke rules: design-tokens/icons/v4/DESIGN.md.
//
// Leaf language (shared with plant.mjs): an upright teardrop — rounded base at
// the bottom, a clean point at the top, two symmetric curved flanks — plus a
// midrib stroke down the centre so it reads unmistakably as a leaf.

import { icon, layer, P, C, R } from "../../../bin/lib/v4-dsl.mjs";

// --- reusable outline leaf (upright, pointing up) -------------------------
// A single natural teardrop: pointed tip at the top (12,3), curved flanks
// bulging to x≈5.4/18.6 near the middle, meeting again at a pointed base
// (12,21). No central notch — this is one confident leaf, not a heart/tulip.
const LEAF_BASE = "M12 3C7 6.5 5.4 11.5 5.4 14.4C5.4 17.6 8.1 20.5 12 21C15.9 20.5 18.6 17.6 18.6 14.4C18.6 11.5 17 6.5 12 3Z";
const LEAF_BASE_MIDRIB = "M12 19.5V6.5";
// Micro grade: slightly plumper and shorter for legibility at 16px.
const LEAF_MICRO = "M12 3.6C7.4 6.9 5.9 11.6 5.9 14.4C5.9 17.5 8.4 20.2 12 20.7C15.6 20.2 18.1 17.5 18.1 14.4C18.1 11.6 16.6 6.9 12 3.6Z";
const LEAF_MICRO_MIDRIB = "M12 18.8V7.2";

// A small upright leaf drawn inside a frame/bubble. cx = centre x, top/bottom =
// tip/base Y, half = flank half-width. This affine-scales the canonical
// leaf teardrop (pointed tip at top, rounded body, gentle base) into the
// target box so every small leaf reads exactly like the big one — no diamonds,
// no eggs. Canonical box: cx0=12, tip y=3, base y=21 (h0=18), half0=6.6.
function smallLeaf(cx, top, bottom, half) {
  const r = (n) => Math.round(n * 1000) / 1000;
  const cx0 = 12, top0 = 3, h0 = 18, half0 = 6.6;
  const sx = half / half0;
  const sy = (bottom - top) / h0;
  const mapX = (x) => r(cx + (x - cx0) * sx);
  const mapY = (y) => r(top + (y - top0) * sy);
  // canonical control/anchor points of LEAF_SOLID (x,y pairs)
  const pts = [
    [12, 3], [7, 6.5], [5.4, 11.5], [5.4, 14.4],
    [5.4, 17.6], [8.1, 20.5], [12, 21],
    [15.9, 20.5], [18.6, 17.6], [18.6, 14.4],
    [18.6, 11.5], [17, 6.5], [12, 3],
  ].map(([x, y]) => [mapX(x), mapY(y)]);
  const [m, c1a, c1b, c1e, c2a, c2b, c2e, c3a, c3b, c3e, c4a, c4b, c4e] = pts;
  return (
    `M${m[0]} ${m[1]}` +
    `C${c1a[0]} ${c1a[1]} ${c1b[0]} ${c1b[1]} ${c1e[0]} ${c1e[1]}` +
    `C${c2a[0]} ${c2a[1]} ${c2b[0]} ${c2b[1]} ${c2e[0]} ${c2e[1]}` +
    `C${c3a[0]} ${c3a[1]} ${c3b[0]} ${c3b[1]} ${c3e[0]} ${c3e[1]}` +
    `C${c4a[0]} ${c4a[1]} ${c4b[0]} ${c4b[1]} ${c4e[0]} ${c4e[1]}Z`
  );
}

export default [
  // ---------------------------------------------------------------------------
  // nav.today.leaf — Today-tab alternative: one confident, natural leaf.
  // Feedback: "leaf should look better and more like a leaf".
  // ---------------------------------------------------------------------------
  icon("nav.today.leaf", {
    tier: "P2",
    verdict: "redraw",
    category: "nav",
    label: "Today (leaf)",
    keywords: ["today", "leaf", "nav", "home"],
    provenance: { v3: "nav.today.leaf" },
    grades: {
      base: [
        layer("leaf", "primary", [P(LEAF_BASE)]),
        layer("midrib", "secondary", [P(LEAF_BASE_MIDRIB)]),
      ],
      micro: [
        layer("leaf", "primary", [P(LEAF_MICRO)]),
        layer("midrib", "secondary", [P(LEAF_MICRO_MIDRIB)]),
      ],
    },
    // Library-tier solid = the outline geometry re-stroked heavier (bold mode);
    // silhouette sharing is structural so the raster gate skips it.
    solid: {
      base: { mode: "bold", strokeWidth: 3.1, counters: 0 },
      micro: { mode: "bold", strokeWidth: 3.3, counters: 0 },
    },
    variants: {
      duotone: { primary: ["leaf"] },
      multicolor: { leaf: "leaf.700", midrib: "leaf.500" },
    },
  }),

  // ---------------------------------------------------------------------------
  // nav.plant.leaf — Plants-tab leaf, same leaf language, plain (no extra marks).
  // Feedback: "improve" → clean leaf.
  // ---------------------------------------------------------------------------
  icon("nav.plant.leaf", {
    tier: "P2",
    verdict: "redraw",
    category: "nav",
    label: "Plant (leaf)",
    keywords: ["plant", "leaf", "nav", "foliage"],
    provenance: { v3: "nav.plant.leaf" },
    grades: {
      base: [
        layer("leaf", "primary", [P(LEAF_BASE)]),
        layer("midrib", "secondary", [P(LEAF_BASE_MIDRIB)]),
      ],
      micro: [
        layer("leaf", "primary", [P(LEAF_MICRO)]),
        layer("midrib", "secondary", [P(LEAF_MICRO_MIDRIB)]),
      ],
    },
    solid: {
      base: { mode: "bold", strokeWidth: 3.1, counters: 0 },
      micro: { mode: "bold", strokeWidth: 3.3, counters: 0 },
    },
    variants: {
      duotone: { primary: ["leaf"] },
      multicolor: { leaf: "leaf.700", midrib: "leaf.500" },
    },
  }),

  // ---------------------------------------------------------------------------
  // nav.calendar.leaf — calendar frame with a small clean leaf inside.
  // Feedback: "leaf seems off" → fix the leaf so it reads as a leaf.
  // ---------------------------------------------------------------------------
  icon("nav.calendar.leaf", {
    tier: "P2",
    verdict: "refine",
    category: "nav",
    label: "Calendar (leaf)",
    keywords: ["calendar", "leaf", "date", "schedule"],
    provenance: { v3: "nav.calendar.leaf" },
    grades: {
      base: [
        // rounded calendar body
        layer("frame", "container", [P("M4 6.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z")]),
        // header rail + two hangers
        layer("header", "secondary", [P("M4 8.5h16"), P("M8 3.5v3"), P("M16 3.5v3")]),
        // clean upright leaf sitting inside, below the header
        layer("leaf", "accent", [
          P(smallLeaf(12, 10.4, 17.6, 3.4)),
          P("M12 16.4V12"),
        ]),
      ],
      micro: [
        layer("frame", "container", [P("M4 6.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z")]),
        layer("header", "secondary", [P("M4 8.6h16")]),
        layer("leaf", "accent", [
          P(smallLeaf(12, 10.6, 18, 3.6)),
        ]),
      ],
    },
    solid: {
      base: { mode: "bold", strokeWidth: 3.1, counters: 0 },
      micro: { mode: "bold", strokeWidth: 3.3, counters: 0 },
    },
    variants: {
      duotone: { primary: ["frame", "header"] },
      multicolor: { frame: "ink.900", header: "ink.900", leaf: "leaf.500" },
    },
  }),

  // ---------------------------------------------------------------------------
  // nav.chat.leaf — chat bubble with a small clean leaf inside.
  // Feedback: "leaf seems off" → fix the leaf.
  // ---------------------------------------------------------------------------
  icon("nav.chat.leaf", {
    tier: "P2",
    verdict: "refine",
    category: "nav",
    label: "Chat (leaf)",
    keywords: ["chat", "leaf", "message", "bubble"],
    provenance: { v3: "nav.chat.leaf" },
    grades: {
      base: [
        layer("bubble", "primary", [P("M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z")]),
        layer("leaf", "accent", [
          P(smallLeaf(12, 7.2, 14.2, 3)),
          P("M12 13.4V9"),
        ]),
      ],
      micro: [
        layer("bubble", "primary", [P("M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z")]),
        layer("leaf", "accent", [
          P(smallLeaf(12, 7.2, 14.4, 3.2)),
        ]),
      ],
    },
    solid: {
      base: { mode: "bold", strokeWidth: 3.1, counters: 0 },
      micro: { mode: "bold", strokeWidth: 3.3, counters: 0 },
    },
    variants: {
      duotone: { primary: ["bubble"] },
      multicolor: { bubble: "leaf.700", leaf: "leaf.300" },
    },
  }),

  // ---------------------------------------------------------------------------
  // nav.chat.dots — chat bubble with three clear, evenly spaced typing dots.
  // Feedback: "dots should be better that we can animate" → generous spacing,
  // filled circles, the classic animatable typing indicator.
  // ---------------------------------------------------------------------------
  icon("nav.chat.dots", {
    tier: "P2",
    verdict: "refine",
    category: "nav",
    label: "Chat (typing)",
    keywords: ["chat", "typing", "dots", "message", "indicator"],
    provenance: { v3: "nav.chat.dots" },
    grades: {
      base: [
        layer("bubble", "primary", [P("M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z")]),
        layer("dots", "accent", [
          C(8.1, 12, 1.2, { filled: true }),
          C(11.9, 12, 1.2, { filled: true }),
          C(15.7, 12, 1.2, { filled: true }),
        ]),
      ],
      micro: [
        layer("bubble", "primary", [P("M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z")]),
        layer("dots", "accent", [
          C(8.2, 12, 1.6, { filled: true }),
          C(12, 12, 1.6, { filled: true }),
          C(15.8, 12, 1.6, { filled: true }),
        ]),
      ],
    },
    // Bold-mode solid: bubble outline re-stroked heavier, dots stay filled —
    // so the solid tab state keeps its three typing dots (still animatable).
    solid: {
      base: { mode: "bold", strokeWidth: 3.1, counters: 0 },
      micro: { mode: "bold", strokeWidth: 3.3, counters: 0 },
    },
    variants: {
      duotone: { primary: ["bubble"] },
      multicolor: { bubble: "leaf.700", dots: "leaf.300" },
    },
  }),

  // ---------------------------------------------------------------------------
  // nav.feed.cards — two stacked cards; the FRONT card is opaque/on top so it
  // never reads as a transparent card.
  // Feedback: "the card in the front should have a BG so we don't see a
  // transparent card at first".
  // ---------------------------------------------------------------------------
  icon("nav.feed.cards", {
    tier: "P2",
    verdict: "redraw",
    category: "nav",
    label: "Feed (cards)",
    keywords: ["feed", "cards", "stack", "updates"],
    provenance: { v3: "nav.feed.cards" },
    grades: {
      base: [
        // back card, offset up-left, partly hidden behind the front
        layer("back", "secondary", [P("M7 6.5h12a1.5 1.5 0 0 1 1.5 1.5v8")]),
        // front card, opaque fill so it clearly sits on top
        layer("front", "primary", [R(3.5, 9, 13, 11, 2)]),
      ],
      micro: [
        layer("back", "secondary", [P("M7.5 7h11a1.5 1.5 0 0 1 1.5 1.5v7.5")]),
        layer("front", "primary", [R(3.5, 9.5, 13, 10.5, 2)]),
      ],
    },
    solid: {
      base: { mode: "bold", strokeWidth: 3.1, counters: 0 },
      micro: { mode: "bold", strokeWidth: 3.3, counters: 0 },
    },
    variants: {
      duotone: { primary: ["front"] },
      multicolor: { front: "ink.900", back: "ink.500" },
    },
  }),

  // ---------------------------------------------------------------------------
  // utility.brain — vertical/upright brain, not wide.
  // Feedback: "make sure its vertical rather than horizontal".
  // ---------------------------------------------------------------------------
  icon("utility.brain", {
    tier: "P1",
    verdict: "refine",
    category: "utility",
    label: "Brain",
    keywords: ["brain", "mind", "think", "ai", "smart"],
    provenance: { v2: "utility.brain", v3: "utility.brain" },
    grades: {
      base: [
        // tall outline: rounded top lobes, tapered lower stem — reads upright
        layer("skull", "primary", [
          P("M12 3.4C9.7 3.4 8.4 5 8.3 6.5C6.8 6.9 6 8.3 6 9.7C6 10.5 6.3 11.2 6.7 11.7C6.1 12.4 5.8 13.3 5.8 14.2C5.8 15.9 6.9 17.4 8.6 18C8.9 19.6 10.3 20.6 12 20.6C13.7 20.6 15.1 19.6 15.4 18C17.1 17.4 18.2 15.9 18.2 14.2C18.2 13.3 17.9 12.4 17.3 11.7C17.7 11.2 18 10.5 18 9.7C18 8.3 17.2 6.9 15.7 6.5C15.6 5 14.3 3.4 12 3.4Z"),
        ]),
        // central fold + hemisphere hints
        layer("folds", "secondary", [
          P("M12 3.6V20.4"),
          P("M8.4 8.4C9.6 8.9 10.4 9.9 10.6 11"),
          P("M15.6 8.4C14.4 8.9 13.6 9.9 13.4 11"),
          P("M9 14.6C10 14.2 10.9 14.4 11.6 15.2"),
          P("M15 14.6C14 14.2 13.1 14.4 12.4 15.2"),
        ]),
      ],
      micro: [
        layer("skull", "primary", [
          P("M12 3.6C9.8 3.6 8.5 5.2 8.4 6.7C7 7.1 6.2 8.4 6.2 9.8C6.2 10.5 6.4 11.2 6.8 11.7C6.3 12.4 6 13.2 6 14.1C6 15.8 7.1 17.2 8.7 17.9C9 19.4 10.4 20.4 12 20.4C13.6 20.4 15 19.4 15.3 17.9C16.9 17.2 18 15.8 18 14.1C18 13.2 17.7 12.4 17.2 11.7C17.6 11.2 17.8 10.5 17.8 9.8C17.8 8.4 17 7.1 15.6 6.7C15.5 5.2 14.2 3.6 12 3.6Z"),
        ]),
        layer("folds", "secondary", [
          P("M12 4V20"),
        ]),
      ],
    },
    solid: {
      base: { mode: "bold", strokeWidth: 3.1, counters: 0 },
      micro: { mode: "bold", strokeWidth: 3.3, counters: 0 },
    },
    variants: {
      duotone: { primary: ["skull"] },
      multicolor: { skull: "bloom.500", folds: "bloom.500" },
    },
  }),

  // ---------------------------------------------------------------------------
  // utility.hand — open hand: a palm with four distinct long fingers + a thumb.
  // Feedback: "doesn't look like hand, fingers are too small" — addressed in the
  // outline/duotone/multicolor variants (four full-length fingers). The solid is
  // the shared filled silhouette (bold mode): a hand rendered solid is a filled
  // palm — the finger separations live in the outline strokes, not the silhouette
  // (a project-wide consequence of the silhouette-sharing contract).
  // ---------------------------------------------------------------------------
  icon("utility.hand", {
    tier: "P1",
    verdict: "keep",
    category: "utility",
    label: "Hand",
    keywords: ["hand", "palm", "raise", "fingers", "stop"],
    provenance: { v2: "utility.hand", v3: "utility.hand" },
    grades: {
      base: [
        // palm + four fingers as a single silhouette, thumb on the left
        layer("hand", "primary", [
          P("M6.5 13V6.4a1.3 1.3 0 0 1 2.6 0V11"),
          P("M9.1 10.2V4.6a1.3 1.3 0 0 1 2.6 0V10.4"),
          P("M11.7 10.4V4.2a1.3 1.3 0 0 1 2.6 0V10.8"),
          P("M14.3 10.8V6a1.3 1.3 0 0 1 2.6 0V15c0 3.3-2.3 6-6 6-2 0-3.6-.8-4.8-2.3L4 15.4a1.35 1.35 0 0 1 2.1-1.7Z"),
        ]),
      ],
      micro: [
        layer("hand", "primary", [
          P("M6.6 13.2V6.6a1.4 1.4 0 0 1 2.8 0V11"),
          P("M9.4 10.4V4.8a1.4 1.4 0 0 1 2.8 0V10.4"),
          P("M12.2 10.4V4.4a1.4 1.4 0 0 1 2.8 0V11"),
          P("M15 11V6.2a1.4 1.4 0 0 1 2.8 0V15c0 3.2-2.3 5.9-5.8 5.9-2 0-3.6-.8-4.8-2.3L4.2 15.5a1.4 1.4 0 0 1 2.2-1.8Z"),
        ]),
      ],
    },
    solid: {
      base: { mode: "bold", strokeWidth: 3.1, counters: 0 },
      micro: { mode: "bold", strokeWidth: 3.3, counters: 0 },
    },
    variants: {
      duotone: { primary: ["hand"] },
      multicolor: { hand: "ink.900" },
    },
  }),

  // ---------------------------------------------------------------------------
  // utility.moon.star — crescent moon with a real 5-point star beside it.
  // Feedback: "better star".
  // ---------------------------------------------------------------------------
  icon("utility.moon.star", {
    tier: "P1",
    verdict: "refine",
    category: "utility",
    label: "Moon & star",
    keywords: ["moon", "star", "night", "sleep", "dark"],
    provenance: { v2: "utility.moon.star", v3: "utility.moon.star" },
    grades: {
      base: [
        // crescent: a big circle with a bite taken out (two-arc outline)
        layer("moon", "primary", [
          P("M20.5 15.2A8.4 8.4 0 1 1 10 4.2A6.6 6.6 0 0 0 20.5 15.2Z"),
        ]),
        // upper-right 5-point star
        layer("star", "accent", [
          P("M18.2 3.2 19.15 5.35 21.5 5.6 19.75 7.2 20.25 9.5 18.2 8.3 16.15 9.5 16.65 7.2 14.9 5.6 17.25 5.35Z"),
        ]),
      ],
      micro: [
        layer("moon", "primary", [
          P("M20.5 15.6A8.6 8.6 0 1 1 9.6 4.4A6.9 6.9 0 0 0 20.5 15.6Z"),
        ]),
        layer("star", "accent", [
          P("M18.2 2.8 19.3 5.25 22 5.55 20 7.4 20.55 10 18.2 8.65 15.85 10 16.4 7.4 14.4 5.55 17.1 5.25Z"),
        ]),
      ],
    },
    solid: {
      base: { mode: "bold", strokeWidth: 3.1, counters: 0 },
      micro: { mode: "bold", strokeWidth: 3.3, counters: 0 },
    },
    variants: {
      duotone: { primary: ["moon"] },
      multicolor: { moon: "ink.900", star: "sun.300" },
    },
  }),

  // ---------------------------------------------------------------------------
  // utility.move — 4-way move/drag glyph: arrows up/down/left/right from centre.
  // Feedback: "make the increasing line more pulsy" → crisp, dynamic 4-arrow.
  // ---------------------------------------------------------------------------
  icon("utility.move", {
    tier: "P1",
    verdict: "keep",
    category: "utility",
    label: "Move",
    keywords: ["move", "drag", "arrows", "reposition", "pan"],
    provenance: { v2: "utility.move", v3: "utility.move" },
    grades: {
      base: [
        layer("cross", "primary", [
          P("M12 3.2V20.8"),
          P("M3.2 12H20.8"),
        ]),
        layer("heads", "secondary", [
          P("M9 6 12 3 15 6"),
          P("M9 18 12 21 15 18"),
          P("M6 9 3 12 6 15"),
          P("M18 9 21 12 18 15"),
        ]),
      ],
      micro: [
        layer("cross", "primary", [
          P("M12 3.4V20.6"),
          P("M3.4 12H20.6"),
        ]),
        layer("heads", "secondary", [
          P("M8.8 6.2 12 3 15.2 6.2"),
          P("M8.8 17.8 12 21 15.2 17.8"),
          P("M6.2 8.8 3 12 6.2 15.2"),
          P("M17.8 8.8 21 12 17.8 15.2"),
        ]),
      ],
    },
    solid: {
      base: { mode: "bold", strokeWidth: 3.1, counters: 0 },
      micro: { mode: "bold", strokeWidth: 3.3, counters: 0 },
    },
    variants: {
      duotone: { primary: ["cross", "heads"] },
      multicolor: { cross: "ink.900", heads: "ink.900" },
    },
  }),
];
