import { type PropType } from "vue";
export declare const PLANTIM_ICONS_V4_VERSION: "4.0.0";
export declare const PLANTIM_ICONS_V4_HASH: "5bb26078101916dcab888a399aaaa4dbef858532ec4bec3fd820d80f7f986011";
export type PlantimIconV4Variant = "outline" | "solid" | "duotone" | "multicolor";
export type PlantimIconV4Grade = "micro" | "base" | "display";
export type PlantimIconV4Tier = "P0" | "P1" | "P2";
export type PlantimIconV4Node = {
    readonly type: string;
    readonly attrs: Readonly<Record<string, string>>;
    readonly filled?: boolean;
};
export type PlantimIconV4Layer = {
    readonly name: string;
    readonly role: string;
    readonly nodes: readonly PlantimIconV4Node[];
};
export type PlantimIconV4GradeGeometry = {
    readonly layers: readonly PlantimIconV4Layer[];
};
export type PlantimIconV4SolidFill = {
    readonly paths: readonly string[];
    readonly counters: number;
};
export type PlantimIconV4SolidBold = {
    readonly mode: "bold";
    readonly strokeWidth: number;
    readonly counters: number;
};
export type PlantimIconV4Solid = PlantimIconV4SolidFill | PlantimIconV4SolidBold;
export type PlantimIconV4Definition = {
    readonly id: string;
    readonly label: string;
    readonly tier: PlantimIconV4Tier;
    readonly grades: {
        readonly base: PlantimIconV4GradeGeometry;
        readonly micro?: PlantimIconV4GradeGeometry;
        readonly display?: PlantimIconV4GradeGeometry;
    };
    readonly solid: {
        readonly base: PlantimIconV4Solid;
        readonly micro?: PlantimIconV4Solid;
        readonly display?: PlantimIconV4Solid;
    };
    readonly variants: {
        readonly duotone?: {
            readonly primary: readonly string[];
        };
        readonly multicolor?: Readonly<Record<string, string>>;
    };
    readonly animation?: string;
};
export type PlantimIconV4TokenValue = {
    readonly light: string;
    readonly dark: string;
};
export type PlantimIconV4Props = {
    icon: PlantimIconV4Definition;
    variant?: PlantimIconV4Variant;
    size?: number;
    title?: string;
    decorative?: boolean;
};
export declare const PLANTIM_V4_TOKENS: Readonly<Record<string, PlantimIconV4TokenValue>>;
export declare const PlantimIconV4: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    icon: {
        type: PropType<PlantimIconV4Definition>;
        required: true;
    };
    variant: {
        type: PropType<PlantimIconV4Variant>;
        default: string;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    title: StringConstructor;
    decorative: BooleanConstructor;
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: PropType<PlantimIconV4Definition>;
        required: true;
    };
    variant: {
        type: PropType<PlantimIconV4Variant>;
        default: string;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    title: StringConstructor;
    decorative: BooleanConstructor;
}>> & Readonly<{}>, {
    decorative: boolean;
    size: number;
    variant: PlantimIconV4Variant;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
