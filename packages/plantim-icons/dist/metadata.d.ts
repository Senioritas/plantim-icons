export { PLANTIM_ICONS_REGISTRY_HASH, PLANTIM_ICONS_VERSION } from "./index.js";
export type PlantimIconMetadata = {
    readonly id: string;
    readonly category: string;
    readonly accessibility: "decorative" | "semantic" | "status";
    readonly accessibilityLabelKey?: string;
    readonly deprecated?: boolean;
    readonly replacement?: string;
};
export declare const PLANTIM_ICON_METADATA: Readonly<Record<string, PlantimIconMetadata>>;
