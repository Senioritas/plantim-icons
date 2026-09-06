// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 467e42dfdc05a0d93e9b26d62c1d9a4e81591244adffcca1165662ea98bf6399).
// Regenerate with: npm run icons:v4:package
export { PLANTIM_ICONS_V4_HASH, PLANTIM_ICONS_V4_VERSION } from "./index.js";
export type { PlantimIconV4Tier } from "./index.js";
import type { PlantimIconV4Tier } from "./index.js";

export type PlantimIconV4Metadata = {
  readonly id: string;
  readonly tier: PlantimIconV4Tier;
  readonly verdict: string;
  readonly label: string;
  readonly category: string;
  readonly animation?: string;
};

export const PLANTIM_ICON_V4_METADATA = Object.freeze({
  "account.user": {
    "id": "account.user",
    "tier": "P0",
    "verdict": "refine",
    "label": "Profile",
    "category": "account",
    "animation": "profileNod"
  },
  "action.add": {
    "id": "action.add",
    "tier": "P0",
    "verdict": "refine",
    "label": "Add",
    "category": "action",
    "animation": "addSpin"
  },
  "calendar.date": {
    "id": "calendar.date",
    "tier": "P0",
    "verdict": "refine",
    "label": "Calendar",
    "category": "calendar",
    "animation": "datePop"
  },
  "navigation.home": {
    "id": "navigation.home",
    "tier": "P0",
    "verdict": "refine",
    "label": "Today",
    "category": "navigation",
    "animation": "homeSettle"
  },
  "plant.growth": {
    "id": "plant.growth",
    "tier": "P0",
    "verdict": "redraw",
    "label": "Garden",
    "category": "plant",
    "animation": "gardenSway"
  },
  "plant.sprout": {
    "id": "plant.sprout",
    "tier": "P0",
    "verdict": "redraw",
    "label": "Sprout",
    "category": "plant",
    "animation": "sproutGrow"
  },
  "utility.activity": {
    "id": "utility.activity",
    "tier": "P0",
    "verdict": "refine",
    "label": "Feed",
    "category": "utility",
    "animation": "pulseBeat"
  },
  "utility.message.circle": {
    "id": "utility.message.circle",
    "tier": "P0",
    "verdict": "redraw",
    "label": "Chat",
    "category": "utility",
    "animation": "chatPop"
  },
  "utility.plus.circle": {
    "id": "utility.plus.circle",
    "tier": "P0",
    "verdict": "refine",
    "label": "Add (circle)",
    "category": "utility",
    "animation": "ctaBloom"
  }
}) as Readonly<Record<string, PlantimIconV4Metadata>>;
