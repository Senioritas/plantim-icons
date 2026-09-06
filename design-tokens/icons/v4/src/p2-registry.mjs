// P2 (library-tier) icons: the 11 v2 icons the app doesn't use yet, plus the 83
// v3-custom icons (plant families, genera, garden tools, care actions, growth
// stages, taxonomy). All are lifted into v4's variant/grade/token system with
// honest bold-weight solids and semantic per-category color. The v3-custom set
// carries the geometry authored in v3; icons the audit flagged for metaphor
// rework are transcribed faithfully here and tracked in reports/v4-worklog.md.

import fs from "node:fs";
import path from "node:path";
import { transcribe } from "../../../bin/lib/v2-to-v4.mjs";
import { REWORKED } from "../../../bin/lib/v4-reworked.mjs";

const root = path.resolve(import.meta.dirname, "../../../..");
const registry = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/registry.json"), "utf8"));
const v3registry = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/v3/registry.v3.json"), "utf8"));
const tiers = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/v4/tiers.json"), "utf8"));
const v2 = new Map(Object.values(registry.icons).map((i) => [i.id, i]));
const v3 = new Map(Object.values(v3registry.icons).map((i) => [i.id, i]));

const p = (d) => ({ type: "path", attrs: { d } });

// Light-touch geometry corrections for P2 (cheap, high-value).
const OVERRIDES = {
  // clean campfire flame instead of the v3 lumpy blob
  "status.streak": {
    nodes: [
      p("M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z"),
    ],
  },
};

const out = [];
for (const [id, meta] of Object.entries(tiers.icons)) {
  if (meta.tier !== "P2") continue;
  if (REWORKED.has(id)) continue;
  // prefer clean v2 geometry; fall back to the v3-authored custom geometry
  const src = v2.get(id) ?? v3.get(id);
  if (!src) continue;
  // v3 entries may carry accessibility metadata; keep only what the DSL accepts
  const entry = {
    id,
    category: src.category,
    nodes: src.nodes,
    accessibility: src.accessibility === "status" || src.accessibility === "semantic" ? src.accessibility : "decorative",
    ...(src.accessibilityLabelKey ? { accessibilityLabelKey: src.accessibilityLabelKey } : {}),
  };
  out.push(
    transcribe(entry, {
      tier: "P2",
      verdict: meta.verdict,
      provenance: { ...(v2.has(id) ? { v2: id } : {}), v3: id },
      override: OVERRIDES[id],
    }),
  );
}

export default out;
