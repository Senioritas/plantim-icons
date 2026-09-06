import type { PlantimIconName } from "./index.js";

export const PLANTIM_PRODUCT_CONTRACT_VERSION = "1.0.0" as const;
export const PLANTIM_PRODUCT_CONTRACT_HASH = "48a78d8df7b06de2f9c77fdb8082c261959fb4ef2fe836ff0cda3adaaeaa3a26" as const;

export type PlantimNavigationSurface = "feed" | "garden" | "plants" | "calendar" | "chat" | "profile";
export type PlantimNavigationItem = { readonly id: PlantimNavigationSurface; readonly route: string; readonly labelKey: string; readonly icon: PlantimIconName };

export const PlantimNavigation = Object.freeze({
  feed: { id: "feed", route: "/feed", labelKey: "nav.feed", icon: "utility.activity" },
  garden: { id: "garden", route: "/gardens", labelKey: "nav.gardens", icon: "plant.growth" },
  plants: { id: "plants", route: "/plants", labelKey: "quickRail.plants", icon: "plant.sprout" },
  calendar: { id: "calendar", route: "/calendar", labelKey: "nav.careCalendar", icon: "calendar.date" },
  chat: { id: "chat", route: "/chat", labelKey: "nav.plantimChat", icon: "utility.message.circle" },
  profile: { id: "profile", route: "/profile", labelKey: "nav.tabProfile", icon: "account.user" }
} as const satisfies Record<PlantimNavigationSurface, PlantimNavigationItem>);
