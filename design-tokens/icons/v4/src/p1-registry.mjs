// P1 icons transcribed into v4 from clean registry geometry, with corrected
// geometry for the icons the v3 audit flagged (wrong Lucide variant baked into
// v2, or a redraw). "keep" icons lift Lucide geometry faithfully; "refine"/
// "redraw" icons apply the overrides below. Solids are honest bold-weight
// strokes (a uniform library-tier rule; P0 heroes carry bespoke fills).
// See reports/v4-v3-audit.md for the per-icon rationale.

import fs from "node:fs";
import path from "node:path";
import { transcribe } from "../../../bin/lib/v2-to-v4.mjs";
import { REWORKED } from "../../../bin/lib/v4-reworked.mjs";

const root = path.resolve(import.meta.dirname, "../../../..");
const registry = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/registry.json"), "utf8"));
const tiers = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/v4/tiers.json"), "utf8"));
const v2 = new Map(Object.values(registry.icons).map((i) => [i.id, i]));

// Hand-authored elsewhere (P0) — never transcribe these.
const HAND_AUTHORED = new Set([
  "plant.sprout", "plant.growth", "calendar.date", "account.user", "navigation.home",
  "action.add", "utility.message.circle", "utility.activity", "utility.plus.circle",
]);

const p = (d) => ({ type: "path", attrs: { d } });
const circle = (cx, cy, r) => ({ type: "circle", attrs: { cx: String(cx), cy: String(cy), r: String(r) } });

// Per-id geometry corrections. dropIndices removes offending nodes from the v2
// glyph (slash / plus / exclamation / restore-arrow); nodes replaces wholesale.
const OVERRIDES = {
  // --- drop the offending extra node(s) ---
  "utility.link": { dropIndices: [3] }, // remove diagonal slash (LinkOff -> Link)
  "utility.zap": { dropIndices: [3] }, // remove slash (ZapOff -> Zap)
  "utility.mail": { dropIndices: [2, 3] }, // remove question mark (MailQuestion -> Mail)
  "action.search": { dropIndices: [2, 3] }, // remove "!" inside lens (SearchX-ish -> Search)
  "utility.bug": { dropIndices: [4] }, // remove slash
  "utility.filter": { dropIndices: [1, 2] }, // remove "x" (FilterX -> Filter)
  "utility.refresh.cw": { dropIndices: [6] }, // remove slash (RefreshCwOff -> RefreshCw)
  "utility.lightbulb": { dropIndices: [1] }, // remove slash (LightbulbOff -> Lightbulb)
  "utility.image": { dropIndices: [1, 2] }, // remove down arrow (ImageDown -> Image)
  "utility.rotate.ccw": { dropIndices: [0, 1, 4] }, // remove key glyph (RotateCcwKey -> RotateCcw)
  "utility.wind": { dropIndices: [0, 3] }, // remove down arrow (WindArrowDown -> Wind)
  "utility.trending.up": { dropIndices: [0, 1] }, // remove down-right arrow -> clean TrendingUp
  "weather.moon": { dropIndices: [0, 1] }, // remove plus -> plain Moon crescent
  "weather.cloud": { dropIndices: [0, 1] }, // remove download arrow -> plain Cloud

  // --- differentiate collided duplicates by replacing one with its true glyph ---
  "utility.settings": {
    nodes: [
      p("M20 7h-9"), p("M14 17H5"), circle(17, 17, 3), circle(7, 7, 3),
    ],
  }, // keep sliders on settings2; give settings the sliders variant is fine — but make settings the gear:
  // (settings gets the gear below via nodes override)

  // --- replace wholesale (wrong base glyph) ---
  "utility.eye": {
    nodes: [
      p("M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"),
      circle(12, 12, 3),
    ],
  },
  "utility.lock": {
    nodes: [
      { type: "rect", attrs: { x: "3", y: "11", width: "18", height: "11", rx: "2" } },
      p("M7 11V7a5 5 0 0 1 10 0v4"),
      circle(12, 16, 1),
    ],
  },
  "utility.heart": {
    nodes: [
      p("M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.5 4 3 5.5l7 7Z"),
    ],
  },
  "utility.star": {
    nodes: [
      p("M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"),
    ],
  },
  "utility.thermometer": {
    nodes: [p("M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z")],
  },
  "utility.flask.conical": {
    nodes: [
      p("M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"),
      p("M8.5 2h7"),
      p("M7 16h10"),
    ],
  },
  "utility.database": {
    nodes: [
      { type: "ellipse", attrs: { cx: "12", cy: "5", rx: "9", ry: "3" } },
      p("M3 5v14a9 3 0 0 0 18 0V5"),
      p("M3 12a9 3 0 0 0 18 0"),
    ],
  },
  "utility.dna": {
    nodes: [
      p("M9 3c0 4 6 5 6 9s-6 5-6 9"),
      p("M15 3c0 4-6 5-6 9s6 5 6 9"),
      p("M8.5 7h7"), p("M8 12h8"), p("M8.5 17h7"),
    ],
  },
  "utility.upload": {
    nodes: [
      p("M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"),
      p("M17 8l-5-5-5 5"),
      p("M12 3v12"),
    ],
  },

  // --- redraws (hand geometry; bold-mode solids like the rest of the library tier) ---
  "location.pin": {
    nodes: [p("M20 10.5C20 15.5 12 22 12 22s-8-6.5-8-11.5a8 8 0 0 1 16 0Z"), circle(12, 10.5, 3)],
  },
  "plant.watering": {
    nodes: [p("M12 3s6.5 6.6 6.5 10.5a6.5 6.5 0 0 1-13 0C5.5 9.6 12 3 12 3Z")],
  },
  "plant.pruning": {
    // clean garden shears (Scissors) — the universal cut/prune metaphor
    nodes: [
      circle(6, 6, 3), circle(6, 18, 3),
      p("M20 4 8.12 15.88"), p("M14.47 14.48 20 20"), p("M8.12 8.12 12 12"),
    ],
  },
  "utility.shield": {
    nodes: [
      p("M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"),
    ],
  },
};
// utility.settings must be the gear (its v2 glyph is the sliders, colliding with settings2).
OVERRIDES["utility.settings"] = {
  nodes: [
    p("M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"),
    circle(12, 12, 3),
  ],
};

const out = [];
for (const [id, meta] of Object.entries(tiers.icons)) {
  if (meta.tier !== "P1") continue;
  if (HAND_AUTHORED.has(id) || REWORKED.has(id)) continue;
  const entry = v2.get(id);
  if (!entry) continue; // P1 is all v2-backed; anything else handled elsewhere
  out.push(
    transcribe(entry, {
      tier: "P1",
      verdict: meta.verdict,
      provenance: { v2: id, v3: id },
      override: OVERRIDES[id],
    }),
  );
}

export default out;
