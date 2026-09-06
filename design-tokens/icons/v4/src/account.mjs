// v4 account category — P0: account.user (Profile tab).

import { icon, layer, P, C } from "../../../bin/lib/v4-dsl.mjs";

export default [
  // Profile tab. Avatar: ring + head + shoulders. The v3 multicolor bug erased
  // the person; v4 assigns roles by hand. Solid = filled disc, person cut out
  // (head is the single enclosed counter; shoulders open to the disc edge).
  icon("account.user", {
    tier: "P0",
    verdict: "refine",
    category: "account",
    label: "Profile",
    keywords: ["user", "profile", "account", "avatar"],
    provenance: { v2: "account.user", v3: "account.user" },
    grades: {
      base: [
        layer("ring", "container", [C(12, 12, 9.25)]),
        layer("person", "primary", [C(12, 9.6, 3.3), P("M5.9 18.7a7.7 7.7 0 0 1 12.2 0")]),
      ],
      micro: [
        layer("ring", "container", [C(12, 12, 9.4)]),
        layer("person", "primary", [C(12, 9.4, 3.5), P("M5.6 18.9a7.9 7.9 0 0 1 12.8 0")]),
      ],
      display: [
        layer("ring", "container", [C(12, 12, 9.25)]),
        layer("person", "primary", [C(12, 9.6, 3.3), P("M5.9 18.7a7.7 7.7 0 0 1 12.2 0")]),
      ],
    },
    solid: {
      base: {
        paths: [
          "M12 1.75C6.34 1.75 1.75 6.34 1.75 12c0 5.66 4.59 10.25 10.25 10.25S22.25 17.66 22.25 12 17.66 1.75 12 1.75Zm0 4.55a3.9 3.9 0 1 1 0 7.8 3.9 3.9 0 0 1 0-7.8Zm0 15a9.2 9.2 0 0 1-6.6-2.8 8.5 8.5 0 0 1 13.2 0 9.2 9.2 0 0 1-6.6 2.8Z",
        ],
        counters: 2,
      },
      micro: {
        paths: [
          "M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5Zm0 4.4a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2Zm0 15.1a9.4 9.4 0 0 1-6.8-2.9 8.7 8.7 0 0 1 13.6 0 9.4 9.4 0 0 1-6.8 2.9Z",
        ],
        counters: 2,
      },
    },
    variants: {
      duotone: { primary: ["person"] },
      multicolor: { ring: "ink.500", person: "leaf.700" },
    },
    animation: "profileNod",
  }),
];
