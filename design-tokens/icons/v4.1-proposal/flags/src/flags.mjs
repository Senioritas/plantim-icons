// v4.1 proposal — `flag.*` starter set.
//
// Scope: the three shipped app locales (de, en → gb/us, tr) plus the
// European neighbours a Plantim locale/region picker is most likely to add
// next, the EU, and a neutral "region not set" placeholder. Geometry is
// simplified the way every icon-size flag set does it (no coats of arms on ES,
// 7 stripes and 8 stars on US, single-layer saltire on GB) — a 16 px flag has
// to read by silhouette and color, not by heraldry.
//
// Colors: commonly published values (Wikipedia / official style guides where
// they exist), uppercase hex, never theme tokens. Dark mode is handled by the
// renderer's hairline border, not by re-coloring.

import { flag, flagLayer, rect, circle, line, strokePath, star, hStripes, vStripes, field } from "../../../../bin/lib/flag-dsl.mjs";
import { P, C } from "../../../../bin/lib/v4-dsl.mjs";

const WHITE = "#FFFFFF";
const key = (code) => `a11y.icons.flag.${code}`;

// Partition lines for the common layouts (24-grid coordinates).
const H3 = [P("M2 9.667h20"), P("M2 14.333h20")];
const V3 = [P("M8.667 5v14"), P("M15.333 5v14")];

function tricolorH(code, label, colors, keywords = []) {
  return flag(`flag.${code}`, {
    label,
    keywords: [code, label.toLowerCase(), "flag", "country", ...keywords],
    accessibilityLabelKey: key(code),
    layers: [flagLayer("field", hStripes(colors))],
    mono: { base: H3 },
  });
}
function tricolorV(code, label, colors, keywords = []) {
  return flag(`flag.${code}`, {
    label,
    keywords: [code, label.toLowerCase(), "flag", "country", ...keywords],
    accessibilityLabelKey: key(code),
    layers: [flagLayer("field", vStripes(colors))],
    mono: { base: V3 },
  });
}

// EU: 12 stars on a ring (r 4 around the centre) — at micro they grow so the
// ring closes into a legible circle of gold.
const euStars = (r) =>
  Array.from({ length: 12 }, (_, i) => {
    const a = (i * 30 * Math.PI) / 180;
    return circle(10 + 4 * Math.cos(a), 7 + 4 * Math.sin(a), r, "#FFCC00");
  });

// US canton stars: 3 offset rows (8 dots) — dropped at micro.
const usStars = [
  ...[1.6, 4, 6.4].map((x) => circle(x, 1.6, 0.55, WHITE)),
  ...[2.8, 5.2].map((x) => circle(x, 4, 0.55, WHITE)),
  ...[1.6, 4, 6.4].map((x) => circle(x, 6.4, 0.55, WHITE)),
];

export default [
  // --- shipped locales ---
  tricolorH("de", "Germany", ["#000000", "#DD0000", "#FFCE00"], ["deutschland", "german"]),

  flag("flag.tr", {
    label: "Türkiye",
    keywords: ["tr", "turkey", "türkiye", "turkish", "flag", "country"],
    accessibilityLabelKey: key("tr"),
    layers: [
      flagLayer("field", field("#E30A17")),
      flagLayer("crescent", [circle(7.2, 7, 3.8, WHITE), circle(8.3, 7, 3, "#E30A17")]),
      flagLayer("star", [star(12.4, 7, 1.9, WHITE, 180)]),
    ],
    mono: { base: [P("M11.1 9.06A3.4 3.4 0 1 0 11.1 14.94"), C(14.7, 12, 1.5, { filled: true })] },
  }),

  flag("flag.gb", {
    label: "United Kingdom",
    keywords: ["gb", "uk", "united kingdom", "britain", "english", "flag", "country"],
    accessibilityLabelKey: key("gb"),
    layers: [
      flagLayer("field", field("#012169")),
      flagLayer(
        "saltire",
        [
          line(0, 0, 20, 14, WHITE, 2.8),
          line(20, 0, 0, 14, WHITE, 2.8),
          line(0, 0, 20, 14, "#C8102E", 1),
          line(20, 0, 0, 14, "#C8102E", 1),
        ],
        { micro: false },
      ),
      flagLayer("cross", [rect(8, 0, 4, 14, WHITE), rect(0, 5, 20, 4, WHITE), rect(8.8, 0, 2.4, 14, "#C8102E"), rect(0, 5.8, 20, 2.4, "#C8102E")]),
    ],
    mono: {
      base: [P("M12 5v14"), P("M2 12h20"), P("M2 5l20 14"), P("M22 5 2 19")],
      micro: [P("M12 5v14"), P("M2 12h20")],
    },
  }),

  flag("flag.us", {
    label: "United States",
    keywords: ["us", "usa", "united states", "america", "english", "flag", "country"],
    accessibilityLabelKey: key("us"),
    layers: [
      flagLayer("stripes", hStripes(["#B22234", WHITE, "#B22234", WHITE, "#B22234", WHITE, "#B22234"])),
      flagLayer("canton", [rect(0, 0, 8, 8, "#3C3B6E")]),
      flagLayer("stars", usStars, { micro: false }),
    ],
    mono: { base: [P("M10 5v8H2"), P("M10 9h12"), P("M2 15h20")], micro: [P("M10 5v8H2"), P("M2 15h20")] },
  }),

  // --- likely next regions ---
  flag("flag.eu", {
    label: "European Union",
    keywords: ["eu", "europe", "european union", "flag", "region"],
    accessibilityLabelKey: key("eu"),
    layers: [flagLayer("field", field("#003399")), flagLayer("stars", euStars(0.7))],
    mono: { base: [C(12, 12, 3.5)] },
  }),
  tricolorH("at", "Austria", ["#ED2939", WHITE, "#ED2939"], ["österreich", "austrian"]),
  flag("flag.ch", {
    label: "Switzerland",
    keywords: ["ch", "switzerland", "schweiz", "swiss", "flag", "country"],
    accessibilityLabelKey: key("ch"),
    layers: [flagLayer("field", field("#DA291C")), flagLayer("cross", [rect(8.5, 2.5, 3, 9, WHITE), rect(5.5, 5.5, 9, 3, WHITE)])],
    mono: { base: [P("M12 8v8"), P("M8 12h8")] },
  }),
  tricolorV("fr", "France", ["#0055A4", WHITE, "#EF4135"], ["french", "français"]),
  tricolorV("it", "Italy", ["#009246", WHITE, "#CE2B37"], ["italian", "italia"]),
  flag("flag.es", {
    label: "Spain",
    keywords: ["es", "spain", "españa", "spanish", "flag", "country"],
    accessibilityLabelKey: key("es"),
    layers: [flagLayer("field", hStripes(["#AA151B", "#F1BF00", "#AA151B"], [1, 2, 1]))],
    mono: { base: [P("M2 8.5h20"), P("M2 15.5h20")] },
  }),
  tricolorH("nl", "Netherlands", ["#AE1C28", WHITE, "#21468B"], ["dutch", "nederland", "holland"]),
  flag("flag.pl", {
    label: "Poland",
    keywords: ["pl", "poland", "polska", "polish", "flag", "country"],
    accessibilityLabelKey: key("pl"),
    layers: [flagLayer("field", hStripes([WHITE, "#DC143C"]))],
    mono: { base: [P("M2 12h20")] },
  }),
  flag("flag.pt", {
    label: "Portugal",
    keywords: ["pt", "portugal", "portuguese", "flag", "country"],
    accessibilityLabelKey: key("pt"),
    layers: [
      flagLayer("field", vStripes(["#006600", "#FF0000"], [2, 3])),
      flagLayer("sphere", [circle(8, 7, 2.9, "#FFE000"), circle(8, 7, 2.1, "#FF0000")]),
      flagLayer("shield", [circle(8, 7, 1.4, WHITE)], { micro: false }),
    ],
    mono: { base: [P("M10 5v14"), C(10, 12, 2.5)] },
  }),

  // --- placeholder for "no region" / unknown locale ---
  flag("flag.unknown", {
    label: "Region not set",
    keywords: ["unknown", "placeholder", "no region", "flag", "default"],
    accessibilityLabelKey: key("unknown"),
    tier: "P2",
    layers: [
      flagLayer("field", field("#CFD8DC")),
      flagLayer("glyph", [strokePath("M8.2 5.2a1.9 1.9 0 0 1 3.6.6c0 1.3-1.8 1.9-1.8 1.9", "#607D8B", 1.5), circle(10, 10.6, 0.85, "#607D8B")]),
    ],
    mono: { base: [P("M10.2 10.2a1.9 1.9 0 0 1 3.6.6c0 1.3-1.8 1.9-1.8 1.9"), C(12, 16.2, 1.5, { filled: true })] },
  }),
];
