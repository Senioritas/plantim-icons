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
export declare const PLANTIM_ICON_V4_METADATA: Readonly<Record<string, PlantimIconV4Metadata>>;
