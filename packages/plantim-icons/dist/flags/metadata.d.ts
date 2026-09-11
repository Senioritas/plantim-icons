export { PLANTIM_FLAGS_HASH, PLANTIM_FLAGS_VERSION } from "./index.js";
export type PlantimFlagMetadata = {
    readonly id: string;
    readonly code: string;
    readonly label: string;
    readonly category: string;
    readonly accessibility: string;
    readonly accessibilityLabelKey: string;
    readonly keywords: readonly string[];
};
export declare const PLANTIM_FLAG_METADATA: Readonly<Record<string, PlantimFlagMetadata>>;
