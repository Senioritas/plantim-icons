import { type PropType } from "vue";
export declare const PLANTIM_BRAND_VERSION: "4.2.0";
export declare const PLANTIM_BRAND_HASH: "e56b034f2b83163acda0c2f8b3507441eee8517e0310b581185abe7cff964685";
/**
 * Brand marks are an asset class, not semantic icons: their colours belong to
 * their owners and never re-theme through Plantim tokens.
 *   color  the owner's colours; pass theme="dark" on dark surfaces (Apple and
 *          GitHub switch to white, Google and Plantim stay the same)
 *   mono   every layer in currentColor, for tinted contexts
 */
export type PlantimBrandVariant = "color" | "mono";
export type PlantimBrandTheme = "light" | "dark";
export type PlantimBrandGrade = "micro" | "base" | "display";
export type PlantimBrandLayer = {
    readonly name: string;
    readonly d: string;
    readonly fill: string;
    /** Owner's colour for dark surfaces, when it differs from `fill`. */
    readonly dark?: string;
    readonly evenOdd?: boolean;
};
export type PlantimBrandDefinition = {
    readonly id: string;
    readonly name: string;
    readonly label: string;
    readonly accessibilityLabelKey: string;
    readonly grades: {
        readonly base: readonly PlantimBrandLayer[];
        readonly micro?: readonly PlantimBrandLayer[];
        readonly display?: readonly PlantimBrandLayer[];
    };
};
export type PlantimBrandProps = {
    brand: PlantimBrandDefinition;
    variant?: PlantimBrandVariant;
    theme?: PlantimBrandTheme;
    size?: number;
    /** Accessible name. Omit only when adjacent text already names the brand. */
    title?: string;
    decorative?: boolean;
};
export declare const PLANTIM_BRAND_NAMES: readonly ["apple", "github", "google", "plantim"];
export type PlantimBrandName = (typeof PLANTIM_BRAND_NAMES)[number];
export declare function isPlantimBrandName(value: string): value is PlantimBrandName;
/** Exact size -> grade; other sizes take the nearest listed size (ties go smaller). */
export declare function plantimBrandGradeForSize(size: number): PlantimBrandGrade;
export declare const PlantimBrand: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    brand: {
        type: PropType<PlantimBrandDefinition>;
        required: true;
    };
    variant: {
        type: PropType<PlantimBrandVariant>;
        default: string;
    };
    theme: {
        type: PropType<PlantimBrandTheme>;
        default: string;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    title: {
        type: StringConstructor;
        default: undefined;
    };
    decorative: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    brand: {
        type: PropType<PlantimBrandDefinition>;
        required: true;
    };
    variant: {
        type: PropType<PlantimBrandVariant>;
        default: string;
    };
    theme: {
        type: PropType<PlantimBrandTheme>;
        default: string;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    title: {
        type: StringConstructor;
        default: undefined;
    };
    decorative: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    variant: PlantimBrandVariant;
    theme: PlantimBrandTheme;
    size: number;
    title: string;
    decorative: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
