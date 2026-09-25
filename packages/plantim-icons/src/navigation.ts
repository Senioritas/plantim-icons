import type { PlantimIconName } from "./index.js";

export const PLANTIM_PRODUCT_CONTRACT_VERSION = "1.1.0" as const;
export const PLANTIM_PRODUCT_CONTRACT_HASH = "372c387c30206a80e6d25da4d00c10d13aed442f7a08aad1945c043c3a458a8a" as const;

export type PlantimNavigationSurface = "feed" | "garden" | "plants" | "calendar" | "chat" | "profile";
export type PlantimNavigationItem = { readonly id: PlantimNavigationSurface; readonly route: string; readonly labelKey: string; readonly icon: PlantimIconName };

export const PlantimNavigation = Object.freeze({
  feed: { id: "feed", route: "/inbox", labelKey: "nav.feed", icon: "utility.activity" },
  garden: { id: "garden", route: "/gardens", labelKey: "nav.gardens", icon: "plant.growth" },
  plants: { id: "plants", route: "/plants", labelKey: "quickRail.plants", icon: "plant.sprout" },
  calendar: { id: "calendar", route: "/rhythm", labelKey: "nav.careCalendar", icon: "calendar.date" },
  chat: { id: "chat", route: "/chat", labelKey: "nav.plantimChat", icon: "utility.message.circle" },
  profile: { id: "profile", route: "/profile", labelKey: "nav.tabProfile", icon: "account.user" }
} as const satisfies Record<PlantimNavigationSurface, PlantimNavigationItem>);
