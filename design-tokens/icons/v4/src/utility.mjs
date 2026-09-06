// v4 utility category — P0: message.circle (Chat), activity (Feed),
// plus.circle (hero CTA).

import { icon, layer, P, C } from "../../../bin/lib/v4-dsl.mjs";

export default [
  // Chat tab. v3 shipped a question-mark bubble (wrong glyph). v4: round
  // bubble with tail + three typing dots; the dots survive the solid as
  // counters, so the active tab keeps the "conversation" identity.
  icon("utility.message.circle", {
    tier: "P0",
    verdict: "redraw",
    category: "utility",
    label: "Chat",
    keywords: ["chat", "message", "bubble", "conversation"],
    provenance: { v2: "utility.message.circle", v3: "utility.message.circle" },
    grades: {
      base: [
        layer("bubble", "primary", [P("M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z")]),
        layer("dots", "accent", [
          C(8.1, 12, 1.15, { filled: true }),
          C(11.9, 12, 1.15, { filled: true }),
          C(15.7, 12, 1.15, { filled: true }),
        ]),
      ],
      micro: [layer("bubble", "primary", [P("M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z")])],
      display: [
        layer("bubble", "primary", [P("M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z")]),
        layer("dots", "accent", [
          C(8.1, 12, 1.15, { filled: true }),
          C(11.9, 12, 1.15, { filled: true }),
          C(15.7, 12, 1.15, { filled: true }),
        ]),
      ],
    },
    solid: {
      base: {
        paths: [
          "M11.9 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM8.1 10.7a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Zm3.8 0a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Zm3.8 0a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z",
          "M8.4 19.3 3.1 20.9 4.5 15.6C5.4 17.1 6.8 18.4 8.4 19.3Z",
        ],
        counters: 3,
      },
      micro: {
        paths: [
          "M11.9 21.7a9.7 9.7 0 1 0 0-19.4 9.7 9.7 0 0 0 0 19.4Z",
          "M8.4 19.4 3 21.1 4.4 15.5C5.3 17.1 6.8 18.5 8.4 19.4Z",
        ],
        counters: 0,
      },
    },
    variants: {
      duotone: { primary: ["bubble"] },
      multicolor: { bubble: "leaf.700", dots: "leaf.300" },
    },
    animation: "chatPop",
  }),

  // Feed tab. Frameless activity pulse — wide, symmetric, legible at 16.
  icon("utility.activity", {
    tier: "P0",
    verdict: "refine",
    category: "utility",
    label: "Feed",
    keywords: ["activity", "feed", "pulse", "updates"],
    provenance: { v2: "utility.activity", v3: "utility.activity" },
    grades: {
      base: [layer("pulse", "primary", [P("M2.8 12h3.7L9.3 5.2l5.4 13.6 2.8-6.8h3.7")])],
      micro: [layer("pulse", "primary", [P("M2.5 12h3.6L9 5.5l5.6 13 2.9-6.5h4")])],
      display: [layer("pulse", "primary", [P("M2.8 12h3.7L9.3 5.2l5.4 13.6 2.8-6.8h3.7")])],
    },
    solid: {
      base: { mode: "bold", strokeWidth: 3.1, counters: 0 },
      micro: { mode: "bold", strokeWidth: 3.3, counters: 0 },
    },
    variants: {
      duotone: { primary: ["pulse"] },
      multicolor: { pulse: "leaf.700" },
    },
    animation: "pulseBeat",
  }),

  // Hero add-plant CTA: circled plus (pairs with the bare action.add).
  icon("utility.plus.circle", {
    tier: "P0",
    verdict: "refine",
    category: "utility",
    label: "Add (circle)",
    keywords: ["add", "plus", "circle", "create"],
    provenance: { v2: "utility.plus.circle", v3: "utility.plus.circle" },
    grades: {
      base: [
        layer("ring", "container", [C(12, 12, 9.25)]),
        layer("plus", "primary", [P("M12 8v8"), P("M8 12h8")]),
      ],
      micro: [
        layer("ring", "container", [C(12, 12, 9.4)]),
        layer("plus", "primary", [P("M12 7.6v8.8"), P("M7.6 12h8.8")]),
      ],
      display: [
        layer("ring", "container", [C(12, 12, 9.25)]),
        layer("plus", "primary", [P("M12 8v8"), P("M8 12h8")]),
      ],
    },
    solid: {
      base: {
        paths: [
          "M12 1.75C6.34 1.75 1.75 6.34 1.75 12c0 5.66 4.59 10.25 10.25 10.25S22.25 17.66 22.25 12 17.66 1.75 12 1.75Zm-1.1 6.05a1.1 1.1 0 0 1 2.2 0v3.1h3.1a1.1 1.1 0 0 1 0 2.2h-3.1v3.1a1.1 1.1 0 0 1-2.2 0v-3.1H7.8a1.1 1.1 0 0 1 0-2.2h3.1V7.8Z",
        ],
        counters: 1,
      },
      micro: {
        paths: [
          "M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5Zm-1.2 5.9a1.2 1.2 0 0 1 2.4 0v3.4h3.4a1.2 1.2 0 0 1 0 2.4h-3.4v3.4a1.2 1.2 0 0 1-2.4 0v-3.4H7.4a1.2 1.2 0 0 1 0-2.4h3.4V7.4Z",
        ],
        counters: 1,
      },
    },
    variants: {
      duotone: { primary: ["plus"] },
      multicolor: { ring: "leaf.700", plus: "leaf.500" },
    },
    animation: "ctaBloom",
  }),
];
