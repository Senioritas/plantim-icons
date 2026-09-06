// v4 plant-FAMILY icons — reworked from decision-record feedback.
//
// User feedback: the OUTLINE variants read fine, but the SOLID and small
// versions were "hard to recognize what it is" ("hard to understand below
// 32px"). The fix here is a silhouette-first redraw: each family reads as a
// distinct leaf/plant shape even at 16 px and even in the solid (bold) variant.
//
// Solid strategy (DESIGN.md §5, "line-only" bold solids): the solid variant
// re-strokes the SAME grade geometry at 3.1/3.3 instead of a separate fill. So
// the ONLY way the solid stays legible is generous internal spacing in the base
// geometry — thin parallel strokes < ~3 px apart merge into a blob when
// thickened, which was exactly the user's complaint. Therefore every icon here
// uses a few bold strokes spaced >= 3 px apart, and the `micro` grade drops the
// finest detail (midrib, extra leaflets) for a bolder, simpler silhouette.
//
// Grid/stroke rules: design-tokens/icons/v4/DESIGN.md. All coordinates on the
// 24-grid, <= 3 decimals, within the -1..25 canvas bounds.

import { icon, layer, P, C } from "../../../bin/lib/v4-dsl.mjs";

// Shared bold-mode solid: same geometry, heavier stroke, no counters.
const boldSolid = {
  base: { mode: "bold", strokeWidth: 3.1, counters: 0 },
  micro: { mode: "bold", strokeWidth: 3.3, counters: 0 },
};

export default [
  // family.apiaceae — carrot / parsley family. Signature: an UMBEL, an
  // umbrella-like cluster of tiny flowers on thin stalks radiating from one
  // point atop a stem. Drawn as a stem, a hub, a few bold stalks fanning out,
  // and a dot (flower) at each stalk tip. Micro keeps three fat stalks + dots so
  // the "firework on a stem" silhouette still reads at 16.
  icon("family.apiaceae", {
    tier: "P2",
    verdict: "refine",
    category: "family",
    label: "Apiaceae",
    keywords: ["family", "apiaceae", "carrot", "parsley", "umbel", "flower"],
    accessibility: "decorative",
    provenance: { v3: "family.apiaceae" },
    grades: {
      base: [
        layer("stem", "primary", [P("M12 21v-9")]),
        layer("stalks", "secondary", [
          P("M12 12 5 7"),
          P("M12 12 8.5 5.5"),
          P("M12 12v-6.5"),
          P("M12 12 15.5 5.5"),
          P("M12 12 19 7"),
        ]),
        layer("flowers", "accent", [
          C(4.5, 6.5, 1.4, { filled: true }),
          C(8, 5, 1.4, { filled: true }),
          C(12, 4.6, 1.4, { filled: true }),
          C(16, 5, 1.4, { filled: true }),
          C(19.5, 6.5, 1.4, { filled: true }),
        ]),
      ],
      // micro: three fat stalks + three dots — the umbel still reads.
      micro: [
        layer("stem", "primary", [P("M12 21v-8")]),
        layer("stalks", "secondary", [
          P("M12 13 6 8"),
          P("M12 13V6"),
          P("M12 13 18 8"),
        ]),
        layer("flowers", "accent", [
          C(5.5, 7.5, 1.7, { filled: true }),
          C(12, 5, 1.7, { filled: true }),
          C(18.5, 7.5, 1.7, { filled: true }),
        ]),
      ],
    },
    solid: boldSolid,
    variants: {
      duotone: { primary: ["stem", "stalks", "flowers"] },
      multicolor: { stem: "leaf.700", stalks: "leaf.500", flowers: "leaf.700" },
    },
  }),

  // family.araceae — Monstera / Philodendron family. Signature: a heart-shaped
  // leaf. Drawn as one clean heart-leaf with a bottom notch, on a short stem.
  // The bold solid stays a single clear filled leaf silhouette (no thin
  // internal lines to blob up). Base adds a short midrib; micro drops it.
  icon("family.araceae", {
    tier: "P2",
    verdict: "refine",
    category: "family",
    label: "Araceae",
    keywords: ["family", "araceae", "monstera", "philodendron", "heart", "leaf"],
    accessibility: "decorative",
    provenance: { v3: "family.araceae" },
    grades: {
      base: [
        layer("stem", "primary", [P("M12 21v-4.5")]),
        // Heart-shaped leaf: two lobes at top, point at the notch dips to the
        // stem, tip at the bottom-center. One bold closed outline.
        layer("leaf", "secondary", [
          P("M12 16.5C7 15.5 3.5 11.5 3.5 8C3.5 5.5 5.5 4 7.5 4C9.5 4 11.2 5.4 12 7C12.8 5.4 14.5 4 16.5 4C18.5 4 20.5 5.5 20.5 8C20.5 11.5 17 15.5 12 16.5Z"),
        ]),
        layer("midrib", "secondary", [P("M12 15v-6")]),
      ],
      // micro: same heart, no midrib — a bold filled leaf.
      micro: [
        layer("stem", "primary", [P("M12 21v-4")]),
        layer("leaf", "secondary", [
          P("M12 17C6.8 16 3 11.7 3 8C3 5.3 5.1 3.5 7.4 3.5C9.5 3.5 11.2 5 12 6.7C12.8 5 14.5 3.5 16.6 3.5C18.9 3.5 21 5.3 21 8C21 11.7 17.2 16 12 17Z"),
        ]),
      ],
    },
    solid: boldSolid,
    variants: {
      duotone: { primary: ["leaf", "midrib"] },
      multicolor: { stem: "leaf.700", leaf: "leaf.500", midrib: "leaf.700" },
    },
  }),

  // family.begoniaceae — Begonia. Signature: an ASYMMETRIC (lopsided) leaf — one
  // side a big rounded lobe, the other a small shoulder, with a POINTED tip so
  // it reads unmistakably as a leaf (not a balloon). Base is at lower-right on a
  // short stalk; the big lobe swings low-left, the tip points up-right. An
  // off-center midrib runs from the base into the big lobe.
  icon("family.begoniaceae", {
    tier: "P2",
    verdict: "refine",
    category: "family",
    label: "Begoniaceae",
    keywords: ["family", "begoniaceae", "begonia", "asymmetric", "leaf"],
    accessibility: "decorative",
    provenance: { v3: "family.begoniaceae" },
    grades: {
      base: [
        layer("stem", "primary", [P("M16 21C15 18.5 14 16.5 12.5 15")]),
        // Lopsided leaf: base lower-right (12.5,15), big rounded LEFT lobe dips
        // low-left, sweeps up to a clear POINTED TIP top-right (~18,3), small
        // shoulder back down to the base.
        layer("leaf", "secondary", [
          P("M12.5 15C6.5 15.5 2.5 11 3.5 7C4.4 3.5 8.5 2.5 11.5 4C14 5.2 15 8 15.5 10.5C16 8 16.5 5 18 3C19.5 6.5 19.5 11 12.5 15Z"),
        ]),
        // off-center vein into the big left lobe
        layer("midrib", "secondary", [P("M12.5 14.5C9.5 12 7 10 5 9")]),
      ],
      // micro: same lopsided pointed leaf, no vein.
      micro: [
        layer("stem", "primary", [P("M16 21C15 18.5 14 16.5 12.5 15")]),
        layer("leaf", "secondary", [
          P("M12.5 15C6 15.5 2 10.8 3.3 6.6C4.3 3.2 8.5 2.2 11.5 3.8C14.1 5.1 15 8 15.5 10.5C16 8 16.5 4.8 18 3C19.7 6.6 19.5 11.2 12.5 15Z"),
        ]),
      ],
    },
    solid: boldSolid,
    variants: {
      duotone: { primary: ["leaf", "midrib"] },
      multicolor: { stem: "leaf.700", leaf: "leaf.500", midrib: "leaf.700" },
    },
  }),

  // family.bromeliaceae — Bromeliad / pineapple family. Signature: a ROSETTE of
  // upright spiky leaves (a pineapple top / spiky crown). Drawn as several bold
  // pointed leaves fanning up-and-out from a common base. Spacing between blades
  // is kept wide so the solid reads as a crown, not a blob. Micro drops to three
  // fat blades.
  icon("family.bromeliaceae", {
    tier: "P2",
    verdict: "refine",
    category: "family",
    label: "Bromeliaceae",
    keywords: ["family", "bromeliaceae", "bromeliad", "pineapple", "rosette", "crown"],
    accessibility: "decorative",
    provenance: { v3: "family.bromeliaceae" },
    grades: {
      base: [
        // five upright spiky blades, each a closed pointed leaf, from base ~y20.
        layer("blades", "secondary", [
          P("M12 20C9 18 6 15 4 9C7 9.5 10 12 12 20Z"),
          P("M12 20C11 16 10.5 11 11 4C12.5 8 13 13 12 20Z"),
          P("M12 20C15 18 18 15 20 9C17 9.5 14 12 12 20Z"),
          P("M12 20C10.5 17 8.5 14.5 6.5 12C5.5 15 8 18 12 20Z"),
          P("M12 20C13.5 17 15.5 14.5 17.5 12C18.5 15 16 18 12 20Z"),
        ]),
        layer("base", "primary", [P("M8 20h8")]),
      ],
      // micro: three bold blades (center + two sides), still a spiky crown.
      micro: [
        layer("blades", "secondary", [
          P("M12 20C8 18 5 14 3.5 8C7 9 10 12 12 20Z"),
          P("M12 20C11 15 10.5 10 11 3.5C13 8 13.5 13 12 20Z"),
          P("M12 20C16 18 19 14 20.5 8C17 9 14 12 12 20Z"),
        ]),
        layer("base", "primary", [P("M8 20h8")]),
      ],
    },
    solid: boldSolid,
    variants: {
      duotone: { primary: ["blades"] },
      multicolor: { blades: "leaf.500", base: "leaf.700" },
    },
  }),

  // family.nephrolepidaceae — Boston / sword fern. Signature: a SINGLE upright
  // fern FROND — a vertical central rachis with paired leaflets angling upward
  // like a feather (a fishbone). Key to solid legibility: leaflets are LONG and
  // spaced ~4 px apart vertically with clear air between them, so at bold stroke
  // it still reads as a feather rather than fusing into a paddle. Micro drops to
  // three well-separated pairs.
  icon("family.nephrolepidaceae", {
    tier: "P2",
    verdict: "refine",
    category: "family",
    label: "Nephrolepidaceae",
    keywords: ["family", "nephrolepidaceae", "fern", "frond", "boston", "sword"],
    accessibility: "decorative",
    provenance: { v3: "family.nephrolepidaceae" },
    grades: {
      // vertical rachis, four pairs of long leaflets fanning up-and-out, spaced
      // ~3.8 px apart along the rachis; top leaflets shorter (frond tapers).
      base: [
        layer("rachis", "primary", [P("M12 21V4")]),
        layer("leaflets", "secondary", [
          P("M12 18 5.5 15.5"),
          P("M12 18 18.5 15.5"),
          P("M12 14 6 12"),
          P("M12 14 18 12"),
          P("M12 10 6.8 8.8"),
          P("M12 10 17.2 8.8"),
          P("M12 6.5 8.5 5.5"),
          P("M12 6.5 15.5 5.5"),
        ]),
      ],
      // micro: three well-separated pairs — bold feather still reads.
      micro: [
        layer("rachis", "primary", [P("M12 21V5")]),
        layer("leaflets", "secondary", [
          P("M12 17.5 5.5 15"),
          P("M12 17.5 18.5 15"),
          P("M12 12.5 6 11"),
          P("M12 12.5 18 11"),
          P("M12 8 7.5 7"),
          P("M12 8 16.5 7"),
        ]),
      ],
    },
    solid: boldSolid,
    variants: {
      duotone: { primary: ["rachis", "leaflets"] },
      multicolor: { rachis: "leaf.700", leaflets: "leaf.500" },
    },
  }),

  // family.piperaceae — Peperomia / pepper family. Signature: rounded heart-ish
  // leaves on short stalks. Drawn as TWO round leaves of different sizes on
  // offset stalks — deliberately staggered (one higher-left, one lower-right) so
  // it never reads as a symmetric face / Mickey (the v3 defect, DESIGN.md §4).
  icon("family.piperaceae", {
    tier: "P2",
    verdict: "refine",
    category: "family",
    label: "Piperaceae",
    keywords: ["family", "piperaceae", "peperomia", "pepper", "round", "leaf"],
    accessibility: "decorative",
    provenance: { v3: "family.piperaceae" },
    grades: {
      base: [
        // stalks meet low-center, splay apart (asymmetric lengths)
        layer("stalks", "primary", [
          P("M12 21 8 12"),
          P("M12 21 16 14"),
        ]),
        // big round leaf upper-LEFT, smaller round leaf lower-RIGHT — offset.
        layer("leaves", "secondary", [
          P("M8 12C4.7 12 3 9.6 3.5 7C4 4.6 6.2 3.2 8.6 4C10.6 4.7 11.6 7.2 10.7 9.6C10.1 11.2 9.3 12 8 12Z"),
          P("M16 14C13.6 14 12.4 12.2 12.9 10.2C13.3 8.5 15 7.6 16.8 8.3C18.3 8.9 19 10.8 18.2 12.5C17.7 13.6 17 14 16 14Z"),
        ]),
      ],
      // micro: same two offset round leaves, shorter stalks.
      micro: [
        layer("stalks", "primary", [
          P("M12 21 8 13"),
          P("M12 21 16 15"),
        ]),
        layer("leaves", "secondary", [
          P("M8 13C4.4 13 2.6 10.2 3.4 7.2C4.1 4.5 7 3.2 9.4 4.6C11.3 5.7 11.6 8.6 10 11C9.2 12.2 8.5 13 8 13Z"),
          P("M16 15C13.4 15 12 12.9 12.8 10.6C13.4 8.7 15.6 7.8 17.4 9C18.9 10 19.2 12.2 17.8 13.9C17 14.6 16.6 15 16 15Z"),
        ]),
      ],
    },
    solid: boldSolid,
    variants: {
      duotone: { primary: ["leaves"] },
      multicolor: { stalks: "leaf.700", leaves: "leaf.500" },
    },
  }),

  // family.polypodiaceae — ferns (broad). Distinguished from nephrolepidaceae's
  // fine feather frond by a broader, LOBED frond: a central rachis flanked by a
  // continuous scalloped (deeply lobed) blade on each side rather than discrete
  // leaflets. Reads as a leafier, chunkier fern. Micro keeps the lobed
  // silhouette with fewer, deeper scallops.
  icon("family.polypodiaceae", {
    tier: "P2",
    verdict: "refine",
    category: "family",
    label: "Polypodiaceae",
    keywords: ["family", "polypodiaceae", "fern", "frond", "lobed"],
    accessibility: "decorative",
    provenance: { v3: "family.polypodiaceae" },
    grades: {
      base: [
        layer("rachis", "primary", [P("M12 21V6")]),
        // left lobed blade: scalloped edge sweeping out and back to the rachis.
        layer("blade", "secondary", [
          P("M12 19C8 19 4 17 3.5 12.5C6 13 7.5 14 9 15.5C8 12 6 10 3.5 8.5C6.5 8.5 9 9.5 10.5 11.5C10 8 9 6 12 4Z"),
          P("M12 19C16 19 20 17 20.5 12.5C18 13 16.5 14 15 15.5C16 12 18 10 20.5 8.5C17.5 8.5 15 9.5 13.5 11.5C14 8 15 6 12 4Z"),
        ]),
      ],
      // micro: two deep lobes per side — broad lobed fern silhouette.
      micro: [
        layer("rachis", "primary", [P("M12 21V6")]),
        layer("blade", "secondary", [
          P("M12 18.5C7 18.5 3 16 3 11C6 12 8 13.5 9.5 16C8.5 11.5 6.5 9 3.5 8C7 8 9.5 9.5 11 12.5C10.5 8 10 6 12 4Z"),
          P("M12 18.5C17 18.5 21 16 21 11C18 12 16 13.5 14.5 16C15.5 11.5 17.5 9 20.5 8C17 8 14.5 9.5 13 12.5C13.5 8 14 6 12 4Z"),
        ]),
      ],
    },
    solid: boldSolid,
    variants: {
      duotone: { primary: ["rachis", "blade"] },
      multicolor: { rachis: "leaf.700", blade: "leaf.500" },
    },
  }),
];
