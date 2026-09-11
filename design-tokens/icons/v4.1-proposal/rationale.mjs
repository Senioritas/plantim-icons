// Why each proposed id exists and where the app would use it. Single source
// for the interactive catalog, the PDF catalog and the PDF report. Surfaces
// reference reports/v4-app-icon-audit.md (web: client/src, ios: ios/Plantim).

export const GROUPS = [
  {
    key: "loading",
    title: "Loading states & placeholders",
    categories: ["placeholder", "status"],
    summary:
      "Skeleton and fallback glyphs for the moments before content exists: profile photo, plant photo, list rows, cards, charts, plus inline loading, pending and offline states. Today these are raw assets (profile-placeholder.svg), scaled-up tab icons (plant.sprout at 56 px as the plant-hero fallback) or nothing at all.",
    principle:
      "Container + ghost content. Multicolor stays inside the ink ramp (ink.300 container, ink.500 content) so a placeholder recedes; duotone mutes the container. Solids are real tiles, so a placeholder can occupy exactly the footprint of the asset it stands in for.",
  },
  {
    key: "cases",
    title: "Specific cases the app works around",
    categories: ["utility", "calendar", "plant", "care", "location"],
    summary:
      "Ids with no semantic equivalent in v2/v3/v4 that the clients currently fake with a neighbouring glyph: download (upload exists), sort, drag handle, QR, external link, language picker, add-photo, add-event, plant identification, humidity/light requirements, pet safety, misting/rotating care types, and room/indoor/outdoor placement (navigation.home doubles as \"room\" on both platforms).",
    principle:
      "Same v4 DSL, gates and grades as the shipped set. Siblings reuse v4 geometry verbatim where a pair must match (calendar.add ← calendar.date frame; utility.camera.plus ← utility.camera body; utility.download ← utility.upload tray).",
  },
  {
    key: "flags",
    title: "Country flags",
    categories: ["flag"],
    summary:
      "A locale/region picker needs flags; the web client already ships assets/flags/*.svg outside the registry. Proposed as a new asset class `flag.*` — not semantic icons — with a `color` variant (fixed vexillological colors, clipped 20×14 rounded rect, 12 % hairline border) and a `mono` variant (frame + partition lines in currentColor) for tinted contexts.",
    principle:
      "Starter set = the three shipped locales (de, en → gb/us, tr), the EU, nine likely-next European regions, and a neutral `flag.unknown`. Icon-size simplification is deliberate (no coats of arms, 7 stripes / 8 stars on US, single-layer saltire on GB): a 16 px flag reads by silhouette and color. Colors are never theme tokens; dark mode is handled by the border, not by re-coloring.",
  },
];

export const RATIONALE = {
  // --- loading & placeholders ---
  "placeholder.avatar": {
    why: "Ring + bust with the shoulders meeting the ring — the classic 'no photo' crop. Distinct from account.user (Profile tab) at every size; the solid keeps the space around the bust as its counter.",
    surfaces: ["web: assets/profile-placeholder.svg (raw asset, outside the registry)", "ios: ProfileView falls back to account.user", "member lists, comments, public profile"],
  },
  "placeholder.plant": {
    why: "Photo tile + leaf. Replaces the scaled-up plant.sprout used as the plant-hero fallback; solid = filled tile with the leaf as counter.",
    surfaces: ["web: PlantDetailsHero.vue:357 (plant.sprout h-14)", "plant cards without a photo", "AddPlant preview"],
  },
  "placeholder.text": {
    why: "Two full lines + one short — the canonical text skeleton. Bold solid gives fat bars for shimmer overlays.",
    surfaces: ["feed / notification / journal rows while loading", "Today card summaries"],
  },
  "placeholder.list": {
    why: "Avatar disc + two lines: a list-row skeleton (notifications, members, followers).",
    surfaces: ["NotificationFeed, InviteMemberSheet, garden members"],
  },
  "placeholder.card": {
    why: "Media block + two lines: card skeleton for plant / garden grids and the social feed.",
    surfaces: ["Garden grid, Plants grid, SocialFeed cards"],
  },
  "placeholder.chart": {
    why: "Axes + ghost bars for chart loading/empty. utility.bar.chart3 stays the 'chart' action glyph.",
    surfaces: ["web: GrowthChart.vue empty state (utility.bar.chart3 h-7 today)", "stats tiles"],
  },
  "status.loading.dots": {
    why: "Bouncing-dots snapshot (middle dot raised) so it never collides with utility.more.horizontal; multicolor/duotone carry the trail. Reuses the existing a11y.icons.status.loading label.",
    surfaces: ["Chat: 'AI is typing'", "inline saves, optimistic updates", "static fallback where Lottie is unavailable"],
  },
  "status.pending": {
    why: "Hourglass for waiting states that are not spinners: pending invites, queued sync, unverified email.",
    surfaces: ["InviteMemberSheet, garden co-owner invites", "VerifyEmail", "offline queue"],
  },
  "status.offline": {
    why: "Cloud + slash. The mobile client has no connectivity glyph; the status color lands on the slash.",
    surfaces: ["offline banner (iOS/PWA)", "sync indicator in Settings"],
  },

  // --- specific cases ---
  "utility.download": {
    why: "Mirror of utility.upload (same tray, reversed arrow). The registry has upload/upload.cloud but no download.",
    surfaces: ["privacy: export my data", "save plant photo", "download care report / calendar"],
  },
  "utility.sort": {
    why: "Paired up/down arrows for list ordering. utility.chevrons.up.down is the select affordance, not sort.",
    surfaces: ["Plants list, Calendar, Feed ordering toolbar"],
  },
  "utility.drag.handle": {
    why: "2×3 grip for reordering; utility.move (4-way arrows) means relocate, not reorder.",
    surfaces: ["reorder rooms, plants in a garden, care steps"],
  },
  "utility.qr.code": {
    why: "Three finder patterns + modules; utility.scan.line stays the scanning action. True-fill solid with the finder rings as counters.",
    surfaces: ["share garden / public profile via QR", "scan plant label"],
  },
  "utility.external.link": {
    why: "Box + arrow leaving top-right — the universal 'opens elsewhere' affordance the policy pages lack.",
    surfaces: ["PrivacyPolicy, AccessibilityStatement links", "species source links"],
  },
  "utility.language": {
    why: "Speech bubble + 'A': the language/region picker trigger. Pairs with the flag.* asset class; crossbar dropped at micro.",
    surfaces: ["Settings: language & region", "onboarding locale step"],
  },
  "utility.camera.plus": {
    why: "The v4 camera body with a plus in the lens: 'add photo' as a distinct CTA. utility.camera (24 refs) currently means both 'photo' and 'add photo'.",
    surfaces: ["profile photo", "plant photo", "journal entry"],
  },
  "calendar.add": {
    why: "calendar.date's hand-drawn frame + rings with a plus in the body; the plus survives the solid as a counter.",
    surfaces: ["web: AddCareModal.vue, CalendarSidebar.vue (action.add today)", "ios: AddCareModalView.swift"],
  },
  "plant.identify": {
    why: "Viewfinder brackets + leaf: AI plant identification. Today the flow borrows utility.sparkles + utility.camera.",
    surfaces: ["AddPlant identify step", "Chat plant-picker overlay"],
  },
  "plant.humidity": {
    why: "Two drops — never confused with the single plant.watering drop (47 refs).",
    surfaces: ["plant detail environment row", "weather widgets / LocationPostcard"],
  },
  "plant.light": {
    why: "Leaf lit by three rays from the corner: light requirement. weather.sun (17 refs) currently doubles as theme toggle and weather.",
    surfaces: ["plant detail environment row", "species select", "room light hint"],
  },
  "plant.pet.safe": {
    why: "Paw in leaf green. Pet safety is the most-asked species attribute after light and water.",
    surfaces: ["species attributes", "plant detail badges"],
  },
  "plant.pet.unsafe": {
    why: "Same paw with a slash; status.error on the slash in multicolor. Semantic pair with plant.pet.safe.",
    surfaces: ["species attributes", "plant detail warning badge"],
  },
  "care.misting": {
    why: "Spray bottle + mist dots. Completes v3's care.watering/fertilizing/pruning/repotting with the one care type they lack.",
    surfaces: ["care calendar categories", "care rhythm strip"],
  },
  "care.rotating": {
    why: "Pot + clockwise arrow: turn the plant toward the light (even growth).",
    surfaces: ["care calendar categories", "care suggestions"],
  },
  "location.room": {
    why: "Door on a floor line; the knob survives the solid as a counter. Frees navigation.home, which currently means both 'Today' and 'room' (audit §3a-5).",
    surfaces: ["web/ios: RoomSelect, room chips", "RoomScene / RoomColumn headers"],
  },
  "location.indoor": {
    why: "Window (frame + mullions) on a sill — distinct from utility.grid2x2.",
    surfaces: ["placement attribute on plants / gardens"],
  },
  "location.outdoor": {
    why: "Single round-crown tree on the ground; utility.trees is two pines.",
    surfaces: ["placement attribute on plants / gardens", "balcony / garden gardens"],
  },
};

export function flagRationale(id) {
  const code = id.split(".")[1];
  const shipped = { de: "shipped locale (de)", tr: "shipped locale (tr)", gb: "shipped locale (en)", us: "shipped locale (en)" };
  if (shipped[code]) return { why: shipped[code], surfaces: ["Settings: language & region", "profile LocationPostcard", "public profile"] };
  if (code === "eu") return { why: "region grouping / GDPR surfaces", surfaces: ["privacy & data region"] };
  if (code === "unknown") return { why: "neutral fallback when no region is set (never an empty slot)", surfaces: ["Settings", "public profile"] };
  return { why: "likely next region for a European plant-care audience", surfaces: ["Settings: language & region", "LocationPostcard"] };
}
