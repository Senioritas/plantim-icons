import { type PropType } from "vue";
export declare const PLANTIM_FLAGS_VERSION: "4.1.0";
export declare const PLANTIM_FLAGS_HASH: "d1070166f5bf95c2de9e18bd9f3206430864d562ca156a594d34036f87dfc6ee";
/**
 * Flags are an asset class, not semantic icons: their colours are fixed by
 * vexillology and must not re-theme, so there is no outline/solid pair and no
 * token mapping. Two shapes, each in a colour and a mono treatment:
 *   color        rounded-rect flag, authored colours
 *   mono         rect frame + partition lines in currentColor
 *   circle       the same flag cropped into a disc (avatar/locale-chip shape)
 *   circle.mono  disc outline + the same partitions
 */
export type PlantimFlagVariant = "color" | "mono" | "circle" | "circle.mono";
export type PlantimFlagGrade = "micro" | "base" | "display";
export type PlantimFlagShape = {
    readonly type: "rect" | "circle" | "path" | "line" | "spath";
    readonly fill?: string;
    readonly stroke?: string;
    readonly width?: number;
    readonly d?: string;
    readonly x?: number;
    readonly y?: number;
    readonly w?: number;
    readonly h?: number;
    readonly cx?: number;
    readonly cy?: number;
    readonly r?: number;
    readonly x1?: number;
    readonly y1?: number;
    readonly x2?: number;
    readonly y2?: number;
};
export type PlantimFlagLayer = {
    readonly name: string;
    /** false = dropped at the micro grade (16/20 px) to keep the flag legible. */
    readonly micro: boolean;
    readonly shapes: readonly PlantimFlagShape[];
};
export type PlantimFlagNode = {
    readonly type: string;
    readonly attrs: Readonly<Record<string, string>>;
    readonly filled?: boolean;
};
export type PlantimFlagDefinition = {
    readonly id: string;
    readonly code: string;
    readonly label: string;
    readonly accessibilityLabelKey: string;
    readonly layers: readonly PlantimFlagLayer[];
    readonly mono: {
        readonly base: readonly PlantimFlagNode[];
        readonly micro?: readonly PlantimFlagNode[];
    };
};
export type PlantimFlagProps = {
    flag: PlantimFlagDefinition;
    variant?: PlantimFlagVariant;
    size?: number;
    /** Accessible name. Omit only for a flag that repeats adjacent text. */
    title?: string;
    decorative?: boolean;
};
export declare const PLANTIM_FLAG_CODES: readonly ["at", "ch", "de", "es", "eu", "fr", "gb", "it", "nl", "pl", "pt", "tr", "unknown", "us"];
export type PlantimFlagCode = (typeof PLANTIM_FLAG_CODES)[number];
export declare function isPlantimFlagCode(value: string): value is PlantimFlagCode;
export declare const PlantimFlag: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    flag: {
        type: PropType<PlantimFlagDefinition>;
        required: true;
    };
    variant: {
        type: PropType<PlantimFlagVariant>;
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
    flag: {
        type: PropType<PlantimFlagDefinition>;
        required: true;
    };
    variant: {
        type: PropType<PlantimFlagVariant>;
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
    variant: PlantimFlagVariant;
    size: number;
    title: string;
    decorative: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
