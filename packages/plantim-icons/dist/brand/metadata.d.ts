export { PLANTIM_BRAND_HASH, PLANTIM_BRAND_VERSION } from "./index.js";
export type PlantimBrandMetadata = {
    readonly id: string;
    readonly name: string;
    readonly label: string;
    readonly category: string;
    /** Trademark owner. Third-party marks are not MIT-licensed; see TRADEMARKS.md. */
    readonly owner: string;
    /** Where the mark may appear. */
    readonly usage: string;
    readonly accessibility: string;
    readonly accessibilityLabelKey: string;
    readonly keywords: readonly string[];
};
export declare const PLANTIM_BRAND_METADATA: Readonly<Record<string, PlantimBrandMetadata>>;
