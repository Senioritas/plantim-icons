// v4.1 proposal — loading / waiting / connectivity states.
//
// `status.loading` (arc spinner) already exists and stays the default spinner.
// These add the states the app renders today without a registry icon: an
// inline "typing/loading" dots snapshot, a pending/waiting hourglass, and an
// offline indicator. All are `status` icons: every locale must carry the
// accessibility label (see ../locales.proposal.json — loading reuses the
// existing key).

import { icon, layer, P, C } from "../../../bin/lib/v4-dsl.mjs";

const bold = { base: { mode: "bold", strokeWidth: 3.1, counters: 0 }, micro: { mode: "bold", strokeWidth: 3.3, counters: 0 } };

export default [
  // Bouncing-dots snapshot (middle dot raised) — never confusable with
  // utility.more.horizontal (three level dots). Multicolor/duotone carry the
  // "trail" so the icon reads as motion even when static.
  icon("status.loading.dots", {
    tier: "P1",
    verdict: "new",
    category: "status",
    label: "Loading (dots)",
    keywords: ["loading", "dots", "typing", "wait", "progress", "inline"],
    accessibility: "status",
    accessibilityLabelKey: "a11y.icons.status.loading",
    grades: {
      base: [
        // Stroked micro-circles (the v4 utility.more.horizontal convention): the
        // stroke makes the dot, so grade stroke and bold solids scale them.
        layer("lead", "primary", [C(5, 13.5, 1.2)]),
        layer("mid", "secondary", [C(12, 10.5, 1.2)]),
        layer("trail", "secondary", [C(19, 13.5, 1.2)]),
      ],
      micro: [
        layer("lead", "primary", [C(5, 13.5, 1.4)]),
        layer("mid", "secondary", [C(12, 10.5, 1.4)]),
        layer("trail", "secondary", [C(19, 13.5, 1.4)]),
      ],
    },
    solid: bold,
    variants: {
      duotone: { primary: ["lead", "mid"] },
      multicolor: { lead: "ink.500", mid: "ink.500", trail: "ink.300" },
    },
  }),

  // Pending / waiting: hourglass. Waist strokes overlap by design so the neck
  // reads as one join at every size (no tangent collision at a single point).
  icon("status.pending", {
    tier: "P1",
    verdict: "new",
    category: "status",
    label: "Pending",
    keywords: ["pending", "waiting", "hourglass", "queued", "invite", "sync"],
    accessibility: "status",
    accessibilityLabelKey: "a11y.icons.status.pending",
    grades: {
      base: [
        layer("caps", "secondary", [P("M6 3h12"), P("M6 21h12")]),
        layer("glass", "primary", [
          P("M8 3v3.6c0 1.6 3.2 4.1 3.2 5.4s-3.2 3.8-3.2 5.4V21"),
          P("M16 3v3.6c0 1.6-3.2 4.1-3.2 5.4s3.2 3.8 3.2 5.4V21"),
        ]),
      ],
    },
    solid: bold,
    variants: {
      duotone: { primary: ["glass"] },
      multicolor: { caps: "ink.500", glass: "sun.500" },
    },
  }),

  // Offline: cloud + slash. The slash is its own accent layer so the status
  // color lands on the slash in multicolor.
  icon("status.offline", {
    tier: "P1",
    verdict: "new",
    category: "status",
    label: "Offline",
    keywords: ["offline", "no connection", "network", "cloud", "sync", "disconnected"],
    accessibility: "status",
    accessibilityLabelKey: "a11y.icons.status.offline",
    grades: {
      base: [
        layer("cloud", "primary", [P("M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z")]),
        layer("slash", "accent", [P("M3 3l18 18")]),
      ],
    },
    solid: bold,
    variants: {
      duotone: { primary: ["cloud", "slash"] },
      multicolor: { cloud: "ink.500", slash: "status.error" },
    },
  }),
];
