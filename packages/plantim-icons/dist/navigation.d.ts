import type { PlantimIconName } from "./index.js";
export declare const PLANTIM_PRODUCT_CONTRACT_VERSION: "1.1.0";
export declare const PLANTIM_PRODUCT_CONTRACT_HASH: "372c387c30206a80e6d25da4d00c10d13aed442f7a08aad1945c043c3a458a8a";
export type PlantimNavigationSurface = "feed" | "garden" | "plants" | "calendar" | "chat" | "profile";
export type PlantimNavigationItem = {
    readonly id: PlantimNavigationSurface;
    readonly route: string;
    readonly labelKey: string;
    readonly icon: PlantimIconName;
};
export declare const PlantimNavigation: Readonly<{
    readonly feed: {
        readonly id: "feed";
        readonly route: "/inbox";
        readonly labelKey: "nav.feed";
        readonly icon: "utility.activity";
    };
    readonly garden: {
        readonly id: "garden";
        readonly route: "/gardens";
        readonly labelKey: "nav.gardens";
        readonly icon: "plant.growth";
    };
    readonly plants: {
        readonly id: "plants";
        readonly route: "/plants";
        readonly labelKey: "quickRail.plants";
        readonly icon: "plant.sprout";
    };
    readonly calendar: {
        readonly id: "calendar";
        readonly route: "/rhythm";
        readonly labelKey: "nav.careCalendar";
        readonly icon: "calendar.date";
    };
    readonly chat: {
        readonly id: "chat";
        readonly route: "/chat";
        readonly labelKey: "nav.plantimChat";
        readonly icon: "utility.message.circle";
    };
    readonly profile: {
        readonly id: "profile";
        readonly route: "/profile";
        readonly labelKey: "nav.tabProfile";
        readonly icon: "account.user";
    };
}>;
