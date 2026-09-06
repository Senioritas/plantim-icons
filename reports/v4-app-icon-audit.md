# Plantim app icon audit — input for icon-set v4 rework

Audited: `Plantim` repo **main branch** (read via `git show`/`git grep main`; the working tree was on `corpus-audit` and was not touched).
Icon sources: `@plantim/icons` **2.1.0** (web, pinned in `client/package.json`), `PlantimIcons` Swift package from `github.com/Senioritas/plantim-icons.git` (iOS, `ios/project.yml`), bridged through `ios/Plantim/Config/PTIcon.swift`.
Registry v2 = 154 ids (`design-tokens/icons/registry.json`), v3 = 237 ids (`design-tokens/icons/v3/index.v3.json`, +83 new).

Headline numbers:

- **1,083 icon references** in app code on main: **707 web** (`client/src`, excl. tests/stories) + **376 iOS** (`ios/Plantim`).
- **143 distinct semantic ids actually rendered** (a 144th, `plant.seedling`, appears only in a doc comment).
- **11 of 154 v2 registry ids are never used** by the app; **0 v3 ids** are used yet.
- iOS has **zero** hardcoded `Image(systemName:)` in the app target; web has **one** real inline-SVG icon bypass (`ErrorToast.vue` close X).

---

## 1. Main tabs / primary sections

### Navigation parity contract (`@plantim/icons/navigation`, `packages/plantim-icons/src/navigation.ts`, contract v1.0.0)

| Surface | Route (contract) | labelKey | Icon |
|---|---|---|---|
| feed | `/feed` | `nav.feed` | `utility.activity` |
| garden | `/gardens` | `nav.gardens` | `plant.growth` |
| plants | `/plants` | `quickRail.plants` | `plant.sprout` |
| calendar | `/calendar` | `nav.careCalendar` | `calendar.date` |
| chat | `/chat` | `nav.plantimChat` | `utility.message.circle` |
| profile | `/profile` | `nav.tabProfile` | `account.user` |

### Web rail — `client/src/components/QuickRail.vue` (bottom rail, md+, icons `h-5 w-5` = 20px, label under icon, unread badge on Feed)

| Tab | Route (actual) | Label (i18n key → EN, `client/src/i18n/locales/en.json`) | Icon | Notes |
|---|---|---|---|---|
| Today | `/today` (router name `Today` → `views/Today.vue`) | `quickRail.today` → "Today" | `navigation.home` | **Web-only tab, hardcoded in QuickRail (not in contract)**. Guest→auth redirect target; Navbar logo links here when authenticated. |
| Garden | `/gardens` (`views/Garden.vue`) | `nav.gardens` → "Gardens" | `plant.growth` | match `/gardens(/\|$)` |
| Plants | `/plants` (`views/Dashboard.vue`; `/dashboard` redirects here) | `quickRail.plants` → "Plants" | `plant.sprout` | match `/(plants\|dashboard)` |
| Calendar | **`/rhythm`** (`views/Rhythm.vue`) — QuickRail overrides the contract's `/calendar`; `/calendar` → `views/CalendarView.vue` also exists | `nav.careCalendar` → "Rhythm" | `calendar.date` | match `/(rhythm\|calendar)` |
| Feed | `/feed` (`views/FeedView.vue`) | `nav.feed` → "Feed" | `utility.activity` | unread-count badge |
| Chat | `/chat` (`views/AIChat.vue`) | **`nav.tabChat` → "Chat"** (overrides contract labelKey `nav.plantimChat` → "Plantim Chat") | `utility.message.circle` | |
| Profile | `/profile` (`views/UserProfile.vue`) | hardcoded "You" | **avatar photo, no icon** (`account.user` has 0 web usages) | |

### Web top bar — `client/src/components/Navbar.vue`

- Mobile menu links (each `h-5 w-5`): Feed / Gardens / Rhythm (`/rhythm`) / Chat with the same contract icons; plus a "Dashboard" quick action (`nav.dashboard` → "Dashboard") using `plant.growth` linking to `/dashboard`.
- Theme toggle: `utility.monitor.smartphone` (system) / `weather.sun` / `weather.moon`; burger `utility.menu` ↔ `navigation.close`; logout `utility.log.out`.

### iOS tab bar — `ios/Plantim/Views/Components/MainViews.swift` (`MainTabView`, 5 tabs, icons rendered 18×18pt template images via `PTIcon.tabImage`)

| Tag | Tab | View | Label (`ios/Plantim/Locales/en.json`) | Icon |
|---|---|---|---|---|
| 0 | Feed | `FeedTabView` | `nav.feed` → "Feed" (+unread badge) | `PlantimNavigation.feed.icon` = `utility.activity` |
| 1 | Chat | `AIChatView` | `nav.tabChat` → "Chat" | `utility.message.circle` |
| 2 | Garden (**default tab**) | `DashboardView` | `nav.gardens` → "Gardens" | `plant.growth` |
| 3 | Calendar | `CalendarView` | `nav.careCalendar` → **"Rythm" (typo; web says "Rhythm")** | `calendar.date` |
| 4 | Profile | `ProfileView` | `nav.tabProfile` → "Profile" | avatar photo if loaded, else `account.user` |

- **No Today tab and no Plants tab on iOS** — the Garden tab (tag 2) hosts `DashboardView`, i.e. iOS merges web's Garden + Plants surfaces under the garden identity (`plant.growth`); `plant.sprout` has **0 iOS usages**.
- `PTIcon.tabAdd` (= `utility.plus.circle`) is defined in `PTIcon.swift` but never referenced — there is no Add tab.

### Add-plant flow entry points

- Web route: `/add-plant` (`views/AddPlant.vue`). Entries: `views/Dashboard.vue:156` toolbar link — **`action.add`** h-4 + text; `views/Dashboard.vue:223` empty-state text link (no icon); `components/dashboard/DashboardHero.vue:37` — **`utility.plus.circle`** h-4; `views/Garden.vue:168` — `action.add` h-4; `components/garden/RoomScene.vue:74` `goAddPlant()` (add tile `action.add`); `components/garden/RoomColumn.vue` add slot `action.add`; onboarding step uses `Illustration name="onboarding-add-plant"` (separate illustration system, not the icon registry).
- iOS: `AddPlantView` presented as a sheet. Entries: `Views/Dashboard/DashboardView.swift:289` hero `PTButton(... icon: PTIcon.plusCircle)` = **`utility.plus.circle`** → `appCareState.switchDestination = .addPlant` (handled `MainViews.swift:259`); `DashboardView.swift:918` empty state `PTIcon.view(for: .actionAdd)` = **`action.add`**; `Views/Chat/AIChatView.swift` plant-picker overlay (title `nav.addPlant`) with `utility.plus.circle` buttons; `Views/Social/GardenDetailView.swift` "add plants to garden" sheet uses `action.add`.
- **The app's add icon is split**: `action.add` (38 refs, the workhorse) vs `utility.plus.circle` (10 refs, both platforms' hero add-plant CTA). v4 should pick one add-plant identity (v3 already has `plant.add`).

### Other places section identity appears

- **Today**: `views/Today.vue` section headers — `plant.sprout` h-6 (plants), `utility.activity` h-6 (activity), `plant.watering` h-6 (care), `utility.cake` h-5 (anniversaries), `utility.award` h-6 (milestones). `navigation.home` itself also appears in `components/today/care-card/CareFocalPlant.vue` and — as a *room* glyph — in `components/ui/RoomSelect.vue` and iOS `PTRoomSelect.swift`.
- **Garden**: `plant.growth` is the garden empty state (`views/GardenDetail.vue:1109`, h-16 = 64px), room fallback (`RoomScene.vue`), garden cards, iOS `GardensView`/`GardenDetailView`/`ProfileGardensSection`.
- **Plants**: `plant.sprout` in profile "living collection", calendar sidebar, plant hero placeholder (`PlantDetailsHero.vue:357`, h-14); the Plants view's empty state however uses `utility.activity` (h-12) — Feed's identity icon (`views/Dashboard.vue:196`).
- **Calendar**: `calendar.date` in `CalendarSidebar.vue`, date pickers (`ui/DateTimePicker.vue`, iOS `PTDatePicker`), `PlantJournal.vue`, iOS `CalendarView`.
- **Feed**: `utility.activity` doubles as the care-category *fallback* (`careCategoryMeta.ts` FALLBACK, `presentation-helpers.ts` default) and generic activity/empty-state art — the Feed identity is heavily diluted.
- **Chat**: tab uses `utility.message.circle`, but the chat page/sidebar/plant-hero chat CTA use `utility.message.square` (`views/AIChat.vue`, `components/chat/ChatSidebar.vue`, `PlantDetailsHero.vue`) — two glyphs for one surface.
- **Notifications** (section identity in feeds): web `components/NotificationFeed.vue:331` `typeIcons` map and `components/today/TodayActivity.vue`; iOS `Views/Social/NotificationFeedView.swift:784` `typeIcon()` (mismatches listed in §3).
- **Deep links**: web redirects `/garden`→`/gardens`, `/dashboard`→`/plants`, `/users`→`/profile` (`router/index.ts`); iOS notification actions land on tab 2 (Garden) then push plant detail (`MainViews.swift:438-445`); the PWA manifest has no shortcuts. E2E contract: `client/e2e/icon-navigation-contract.spec.ts` + `client/e2e/icon-screen-parity.json` pin per-screen icon sets for both clients.

---

## 2. Complete icon usage inventory

Method: every string literal matching a registry/v3 id in `client/src` (excl. `__tests__`, `*.test.*`, `*.stories.*`) + every iOS `PTIcon.*` alias / `PTIcon.view(for:)` / `PlantimIcon(.x)` / `PlantimIconName` reference in `ios/Plantim` (excl. the alias definitions in `PTIcon.swift` itself; all aliases resolved to semantic ids via its tables). Counts are static source references, not runtime instances.

Rendering conventions:

- **Web**: Tailwind classes. Size histogram across all `PlantimIcon` usages: 16px (`h-4`) ×150, 14px (`h-3.5`) ×68, 12px (`h-3`) ×53, 20px (`h-5`) ×39, 24px (`h-6`) ×14, 32px (`h-8`) ×11, 28px ×5, then 40–64px for empty states/illustrations. Dominant size is **16px** — well below the 24px design size of the set; v4 must stay legible at 12–16px.
- **iOS**: `PTIcon.view(for:)` default **20pt**; tab bar **18pt** (`tabView`/`tabImage`); explicit sizes observed 7–36pt.
- Standalone vs beside text: tab bars, chevrons, status ticks and empty states are standalone; toolbar/CTA usages are almost always icon-beside-label (`PTButton(title:icon:)`, `<PlantimIcon/> {{ text }}`).

Full inventory (144 ids, sorted by combined usage; the `plant.seedling` row is a doc-comment false positive):

| # | Icon id | Total | Web | iOS | Web sizes seen | Context | Files (top) |
|---|---------|-------|-----|-----|----------------|---------|-------------|
| 1 | `plant.growth` | 78 | 39 | 39 | 12px, 16px, 20px, 24px, 28px, 32px, 40px, 48px, 64px | Garden tab identity; plant fallback imagery, cards, empty states, notifications, species select | `web:views/GardenDetail.vue`, `web:components/SocialFeed.vue`, `web:components/NotificationFeed.vue`, `ios:Views/Components/PlantCards.swift`, `ios:Views/Social/GardenDetailView.swift` +42 more |
| 2 | `navigation.close` | 49 | 32 | 17 | 12px, 14px, 16px, 20px | modal/sheet close buttons, dismiss chips | `web:components/care-calendar/CalendarSidebar.vue`, `web:components/ui/Modal.vue`, `web:views/GardenDetail.vue`, `ios:Views/Plant/AddPlantView.swift`, `ios:Views/Calendar/AddCareModalView.swift` +37 more |
| 3 | `plant.watering` | 47 | 35 | 12 | 12px, 14px, 24px | care action (water), tips, hydration streaks, achievements | `web:components/GamificationModal.vue`, `web:components/profile/CareRhythmStrip.vue`, `web:components/profile/AchievementShelf.vue`, `ios:Views/Plant/PlantDetailView.swift`, `ios:Views/Components/PlantCards.swift` +28 more |
| 4 | `status.success` | 39 | 22 | 17 | 12px, 14px, 16px | inline success ticks, copied-state toggles, toasts | `web:components/NotificationFeed.vue`, `web:components/SocialFeed.vue`, `web:components/plant-details/ImageCropper.vue`, `ios:Views/Calendar/EditCareModalView.swift`, `ios:Views/Social/ActivityFeedView.swift` +19 more |
| 5 | `action.add` | 38 | 20 | 18 | 12px, 14px, 16px, 20px | add buttons everywhere (calendar entries, gardens, rooms, chat, add-plant CTAs) | `web:components/care-calendar/CalendarSidebar.vue`, `web:views/Garden.vue`, `web:components/care-calendar/AddCareModal.vue`, `ios:Views/Profile/ProfileGardensSection.swift`, `ios:Views/Calendar/AddCareModalView.swift` +21 more |
| 6 | `utility.sparkles` | 32 | 17 | 15 | 12px, 14px, 16px, 20px, 24px | AI/insight accents, gamification | `web:components/plant-details/PlantJournal.vue`, `web:views/UserProfile.vue`, `web:components/GamificationModal.vue`, `ios:Views/Plant/PlantDetailView.swift`, `ios:Views/Plant/PlantDetailGrowth.swift` +22 more |
| 7 | `navigation.expand` | 29 | 18 | 11 | 16px | accordion/select chevrons, expanders | `web:components/BadgeModule.vue`, `web:components/CareDropdown.vue`, `web:components/DaylightSummary.vue`, `ios:Views/Components/Accordion/PTAccordion.swift`, `ios:Views/Components/Menu/PTMenu.swift` +24 more |
| 8 | `status.warning` | 25 | 10 | 15 | 20px, 24px | alerts, banners, attention health state | `web:components/CareCalendar.vue`, `web:components/ErrorBoundary.vue`, `web:components/HealthTimeline.vue`, `ios:Views/Components/Accordion/PTAccordion.swift`, `ios:Views/Components/Alert/PTAlert.swift` +20 more |
| 9 | `utility.camera` | 24 | 15 | 9 | 14px, 16px, 20px, 24px | photo capture CTAs, gallery, tips | `web:components/plant-details/PlantGallery.vue`, `web:components/GamificationModal.vue`, `web:components/plant-details/PlantDetailsHero.vue`, `ios:Views/Plant/PlantDetailGallery.swift`, `ios:Config/PTTips.swift` +13 more |
| 10 | `action.delete` | 23 | 9 | 14 | 12px, 14px, 16px | destructive row/menu actions | `web:views/GardenDetail.vue`, `web:components/care-calendar/EditCareModal.vue`, `web:components/chat/ChatSidebar.vue`, `ios:Views/Calendar/EditCareModalView.swift`, `ios:Views/Chat/AIChatView.swift` +10 more |
| 11 | `utility.user.plus` | 22 | 18 | 4 | 14px, 16px | follow buttons, invite member, notifications | `web:components/NotificationFeed.vue`, `web:views/PlantDetails.vue`, `web:components/SocialFeed.vue`, `ios:Views/Social/InviteMemberSheet.swift`, `ios:Views/Plant/PlantDetailView.swift` +8 more |
| 12 | `navigation.next` | 20 | 6 | 14 | 12px, 16px, 20px | chevrons in rows/pagination/breadcrumbs | `web:components/WeeklyDigest.vue`, `web:components/care-calendar/CalendarToolbar.vue`, `web:components/plant-card/PlantListSimple.vue`, `ios:Views/Calendar/CalendarView.swift`, `ios:Views/Components/PlantCards.swift` +13 more |
| 13 | `plant.sprout` | 20 | 20 | 0 | 16px, 24px, 56px | Plants tab identity (web); repot care icon (web); level/seedling badges; empty states | `web:components/plant-details/PlantDetailsHero.vue`, `web:components/WeeklyDigest.vue`, `web:components/care-calendar/CalendarSidebar.vue` +12 more |
| 14 | `action.search` | 19 | 10 | 9 | 16px | search fields, comboboxes, command palette | `web:views/FeedView.vue`, `web:components/LocationSelect.vue`, `web:components/PlantCommonNameSelect.vue`, `ios:Views/Social/FeedTabView.swift`, `ios:Views/Components/Combobox/PTCombobox.swift` +9 more |
| 15 | `utility.activity` | 18 | 16 | 2 | 12px, 14px, 16px, 24px, 48px | Feed tab identity; care fallback icon; activity/empty states | `web:components/SeasonalChallenges.vue`, `web:components/care-calendar/CalendarSidebar.vue`, `web:components/today/TodayActivity.vue`, `ios:Views/Calendar/CalendarView.swift`, `ios:Views/Components/PlantCards.swift` +10 more |
| 16 | `utility.lock` | 18 | 12 | 6 | 14px, 16px | privacy state, password fields, auth | `web:components/garden/GardenCard.vue`, `web:views/AddPlant.vue`, `web:views/GardenDetail.vue`, `ios:Views/Auth/RegisterView.swift`, `ios:Views/Auth/ResetPasswordView.swift` +8 more |
| 17 | `status.success.circle` | 17 | 4 | 13 | 32px | healthy state ring, verified screens | `web:components/plant-card/PlantCardDetailed.vue`, `web:components/plant-card/PlantListDetailed.vue`, `web:views/AddPlant.vue`, `ios:Views/Calendar/CalendarView.swift`, `ios:Views/Auth/RegisterView.swift` +11 more |
| 18 | `weather.sun` | 17 | 16 | 1 | 16px, 20px | theme toggle, weather surfaces | `web:components/Navbar.vue`, `web:components/SunArcChart.vue`, `web:components/profile/LocationPostcard.vue`, `ios:Views/Components/WeatherSunTabView.swift` +8 more |
| 19 | `location.pin` | 16 | 10 | 6 | 12px, 14px, 16px, 20px | location select, weather widget, plant location rows | `web:components/WeatherWidget.vue`, `web:components/plant-card/PlantListDetailed.vue`, `web:components/plant-details/PlantDetailsHero.vue`, `ios:Views/Components/PTLocationSelect.swift`, `ios:Views/Components/WeatherWidgetView.swift` +5 more |
| 20 | `account.users` | 14 | 10 | 4 | 24px | shared gardens, members | `web:components/garden/GardenCard.vue`, `web:views/AddPlant.vue`, `web:views/GardenDetail.vue`, `ios:Views/Profile/ProfileGardensSection.swift`, `ios:Views/Social/GardenDetailView.swift` +6 more |
| 21 | `status.error` | 14 | 12 | 2 | 16px | error states | `web:components/care-calendar/CalendarSidebar.vue`, `web:components/plant-details/PlantGallery.vue`, `web:components/HealthTimeline.vue`, `ios:Views/Calendar/CalendarView.swift`, `ios:Views/Social/InviteMemberSheet.swift` +7 more |
| 22 | `utility.x.circle` | 14 | 1 | 13 | 32px | clear/error affordances (iOS-heavy) | `web:views/VerifyEmail.vue`, `ios:Views/Chat/AIChatView.swift`, `ios:Views/Components/Combobox/PTCombobox.swift` +9 more |
| 23 | `calendar.date` | 13 | 8 | 5 | 14px | Calendar tab identity; date pickers, journal | `web:components/care-calendar/CalendarSidebar.vue`, `web:components/WeatherWidget.vue`, `web:components/plant-details/PlantJournal.vue`, `ios:Views/Calendar/CalendarView.swift`, `ios:Views/Components/Command/PTCommand.swift` +6 more |
| 24 | `calendar.time` | 13 | 10 | 3 | 12px, 14px, 16px | timestamps, schedule rows | `web:components/plant-card/PlantListDetailed.vue`, `web:components/profile/LivingCollection.vue`, `web:components/care-calendar/AddCareModal.vue`, `ios:Views/Calendar/AddCareModalView.swift`, `ios:Views/Calendar/CalendarView.swift` +6 more |
| 25 | `action.edit` | 12 | 3 | 9 | 12px, 16px | edit actions | `web:components/chat/ChatSidebar.vue`, `web:components/garden/GardenCard.vue`, `web:components/plant-details/PlantDetailsHero.vue`, `ios:Views/Components/PrimitivesGalleryScene.swift`, `ios:Views/Chat/AIChatView.swift` +3 more |
| 26 | `status.success.circle.alt` | 12 | 12 | 0 | 16px | calendar done states (web only) | `web:components/care-calendar/CalendarSidebar.vue`, `web:components/GamificationModal.vue`, `web:components/CareCalendar.vue` +3 more |
| 27 | `utility.globe` | 12 | 11 | 1 | 16px | public visibility state | `web:components/garden/GardenCard.vue`, `web:views/AddPlant.vue`, `web:views/GardenDetail.vue`, `ios:Views/Profile/ProfileSettingsView.swift` +5 more |
| 28 | `plant.pruning` | 11 | 11 | 0 | n/a (dynamic/default) | care action (prune), badges, feed events | `web:components/SeasonalChallenges.vue`, `web:components/SocialFeed.vue`, `web:components/WeeklyDigest.vue` +8 more |
| 29 | `status.info` | 11 | 6 | 5 | n/a (dynamic/default) | info callouts | `web:components/CareCalendar.vue`, `web:components/NotificationCenter.vue`, `web:components/plant-card/PlantCardDetailed.vue`, `ios:Views/Calendar/CalendarView.swift`, `ios:Views/Components/Alert/PTAlert.swift` +6 more |
| 30 | `utility.eye` | 11 | 8 | 3 | 12px, 14px, 20px | visibility toggles, watch state | `web:views/PlantDetails.vue`, `web:components/NotificationsModal.vue`, `web:components/garden/GardenCard.vue`, `ios:Views/Components/TextField/PTTextField.swift`, `ios:Views/Components/WeatherNowTabView.swift` +5 more |
| 31 | `utility.flame` | 10 | 8 | 2 | 12px, 16px | streaks | `web:components/BadgeModule.vue`, `web:components/GamificationModal.vue`, `web:components/WeeklyDigest.vue`, `ios:Views/Components/PrimitivesGalleryScene.swift`, `ios:Views/Dashboard/DashboardView.swift` +5 more |
| 32 | `utility.minus` | 10 | 6 | 4 | 12px, 16px | stepper decrement | `web:components/DaylightSummary.vue`, `web:components/PatternInsights.vue`, `web:components/care-calendar/AddCareModal.vue`, `ios:Views/Calendar/AddCareModalView.swift`, `ios:Views/Calendar/EditCareModalView.swift` +5 more |
| 33 | `utility.plus.circle` | 10 | 2 | 8 | 16px | secondary add CTA (DashboardHero web, iOS hero/pickers) | `web:components/dashboard/DashboardHero.vue`, `web:components/plant-details/PlantJournal.vue`, `ios:Views/Chat/AIChatView.swift`, `ios:Views/Plant/AddPlantView.swift` +4 more |
| 34 | `utility.trending.up` | 10 | 10 | 0 | 14px | level-up, growth charts | `web:components/DaylightSummary.vue`, `web:components/GamificationModal.vue`, `web:components/GrowthChart.vue` +7 more |
| 35 | `weather.moon` | 10 | 8 | 2 | 20px | theme toggle dark, moon/weather | `web:components/Navbar.vue`, `web:components/weather/utils.ts`, `web:components/WeatherWidget.vue`, `ios:Views/Components/WeatherMoonTabView.swift`, `ios:Views/Profile/NotificationSettingsView.swift` +3 more |
| 36 | `navigation.back` | 9 | 9 | 0 | 16px | back links (web) | `web:views/PlantDetails.vue`, `web:views/AccessibilityStatement.vue`, `web:views/AddPlant.vue` +5 more |
| 37 | `utility.mail` | 9 | 4 | 5 | 14px, 16px | email fields, contact | `web:views/AccessibilityStatement.vue`, `web:views/PrivacyPolicy.vue`, `web:views/PublicProfile.vue`, `ios:Views/Auth/ForgotPasswordView.swift`, `ios:Views/Auth/LoginView.swift` +4 more |
| 38 | `utility.star` | 9 | 7 | 2 | 16px, 20px | favorites, achievements | `web:components/BadgeModule.vue`, `web:components/GamificationModal.vue`, `web:components/profile/AchievementShelf.vue`, `ios:Views/Social/GardenDetailView.swift`, `ios:Views/Social/PublicProfileView.swift` |
| 39 | `utility.upload` | 9 | 5 | 4 | 12px, 14px | share/upload actions | `web:components/today/TodayActivity.vue`, `web:components/plant-details/ImageCropper.vue`, `ios:Views/Plant/PlantDetailView.swift`, `ios:Views/Profile/ProfileView.swift` +2 more |
| 40 | `utility.bell` | 8 | 6 | 2 | 16px, 20px | notifications (default type icon) | `web:components/NotificationFeed.vue`, `web:components/NotificationCenter.vue`, `web:components/today/TodayActivity.vue`, `ios:Views/Profile/NotificationSettingsView.swift`, `ios:Views/Profile/ProfileSettingsView.swift` +1 more |
| 41 | `utility.brain` | 8 | 4 | 4 | 10px, 16px, 18px | AI diagnosis | `web:components/plant-details/PlantGallery.vue`, `web:views/Landing.vue`, `ios:Views/Plant/PlantDetailSheets.swift`, `ios:Views/Plant/PlantDetailGallery.swift` |
| 42 | `utility.cloud.sun` | 8 | 7 | 1 | n/a (dynamic/default) | weather partly-cloudy, care insights | `web:components/BadgeModule.vue`, `web:components/CareCalendar.vue`, `web:components/GamificationModal.vue`, `ios:Views/Plant/PlantDetailCareInsights.swift` +4 more |
| 43 | `utility.crown` | 8 | 8 | 0 | 20px | owner role, achievements | `web:components/BadgeModule.vue`, `web:components/GamificationModal.vue`, `web:components/garden/GardenCard.vue` +3 more |
| 44 | `utility.image` | 8 | 3 | 5 | 14px, 20px | gallery/photo picker | `web:components/plant-details/ImageCropper.vue`, `web:components/plant-details/PlantGallery.vue`, `ios:Views/Components/GalleryPhotoPickerSheet.swift`, `ios:Views/Components/ImagePickerSheet.swift` +2 more |
| 45 | `utility.trophy` | 8 | 6 | 2 | 14px, 18px | challenges, digest | `web:components/GamificationModal.vue`, `web:components/NotificationCenter.vue`, `web:components/NotificationsModal.vue`, `ios:Views/Dashboard/SeasonalChallengesView.swift`, `ios:Views/Dashboard/WeeklyDigestView.swift` +3 more |
| 46 | `utility.user.check` | 8 | 7 | 1 | 16px | follow-accepted, consent | `web:components/NotificationFeed.vue`, `web:components/today/TodayActivity.vue`, `web:views/PrivacyPolicy.vue`, `ios:Views/Profile/ProfileSettingsView.swift` +1 more |
| 47 | `navigation.previous` | 7 | 3 | 4 | 12px | back chevrons/pagination | `web:components/WeeklyDigest.vue`, `web:components/care-calendar/CalendarToolbar.vue`, `web:components/ui/DateTimePicker.vue`, `ios:Views/Auth/RegisterView.swift`, `ios:Views/Calendar/CalendarView.swift` +2 more |
| 48 | `utility.message.circle` | 7 | 4 | 3 | 14px | Chat tab identity; chat tips/achievements | `web:components/BadgeModule.vue`, `web:components/GamificationModal.vue`, `web:components/profile/AchievementShelf.vue`, `ios:Config/PTTips.swift`, `ios:Views/Plant/PlantDetailView.swift` +2 more |
| 49 | `utility.more.horizontal` | 7 | 0 | 7 | n/a (dynamic/default) | overflow menus (iOS only) | `ios:Views/Social/GardenDetailView.swift`, `ios:Views/Components/Menu/PTMenu.swift` +4 more |
| 50 | `utility.shield` | 7 | 5 | 2 | 12px, 14px, 16px | privacy/security | `web:views/PrivacyPolicy.vue`, `web:components/GamificationModal.vue`, `web:views/AccessibilityStatement.vue`, `ios:Views/Profile/GamificationDetailView.swift`, `ios:Views/Profile/PrivacyPolicyView.swift` +1 more |
| 51 | `utility.arrow.up` | 6 | 1 | 5 | 16px | chat send (iOS), level-up (iOS), growth | `web:components/chat/ChatInput.vue`, `ios:Views/Chat/AIChatView.swift`, `ios:Views/Plant/PlantDetailGrowth.swift` +3 more |
| 52 | `utility.share2` | 6 | 6 | 0 | n/a (dynamic/default) | share notifications (web only) | `web:components/NotificationFeed.vue`, `web:components/SocialFeed.vue` |
| 53 | `account.user` | 5 | 0 | 5 | n/a (dynamic/default) | Profile tab identity (iOS only usage) | `ios:Views/Auth/RegisterView.swift`, `ios:Views/Components/Command/PTCommand.swift` +3 more |
| 54 | `navigation.collapse` | 5 | 5 | 0 | 16px | collapse chevrons | `web:components/dashboard/DashboardAnniversaryAlerts.vue`, `web:components/dashboard/DashboardPlantCollection.vue`, `web:components/ui/DataTable.vue` +2 more |
| 55 | `utility.flower2` | 5 | 5 | 0 | n/a (dynamic/default) | fertilize care icon (web only) | `web:components/care-calendar/presentation-helpers.ts`, `web:components/plant-card/usePlantCard.ts`, `web:components/profile/CareRhythmStrip.vue` +2 more |
| 56 | `utility.heart` | 5 | 3 | 2 | n/a (dynamic/default) | health/likes | `web:components/HealthTimeline.vue`, `web:components/plant-details/PlantDetailsHero.vue`, `web:components/profile/MemoryStream.vue`, `ios:Views/Dashboard/DashboardView.swift`, `ios:Views/Plant/PlantDetailPattern.swift` |
| 57 | `utility.pencil.line` | 5 | 5 | 0 | 16px | inline edit (web) | `web:views/GardenDetail.vue`, `web:components/garden/GardenCard.vue`, `web:views/PlantDetails.vue` +1 more |
| 58 | `utility.refresh.cw` | 5 | 3 | 2 | 16px | regenerate/repot quick action | `web:components/care-calendar/CalendarToolbar.vue`, `web:components/plant-card/usePlantCard.ts`, `web:views/PrivacyPolicy.vue`, `ios:Views/Calendar/CalendarView.swift`, `ios:Views/Plant/PlantDetailCareInsights.swift` |
| 59 | `utility.user.minus` | 5 | 3 | 2 | n/a (dynamic/default) | unfollow | `web:components/NotificationFeed.vue`, `web:components/SocialFeed.vue`, `web:views/PublicProfile.vue`, `ios:Views/Social/FeedTabView.swift`, `ios:Views/Social/InviteMemberSheet.swift` |
| 60 | `navigation.home` | 4 | 3 | 1 | 12px | Today tab identity (web rail); room/home select both platforms | `web:components/QuickRail.vue`, `web:components/today/care-card/CareFocalPlant.vue`, `web:components/ui/RoomSelect.vue`, `ios:Views/Components/PTRoomSelect.swift` |
| 61 | `utility.award` | 4 | 4 | 0 | 16px, 24px | badge notifications, milestones | `web:components/NotificationFeed.vue`, `web:components/SocialFeed.vue`, `web:views/Today.vue` +1 more |
| 62 | `utility.badge.check` | 4 | 1 | 3 | n/a (dynamic/default) | verified/badges | `web:components/today/TodayActivity.vue`, `ios:Views/Profile/GamificationDetailView.swift`, `ios:Views/Plant/AddPlantView.swift` |
| 63 | `utility.bell.off` | 4 | 1 | 3 | 28px | notifications muted/empty | `web:components/NotificationCenter.vue`, `ios:Views/Profile/NotificationSettingsView.swift`, `ios:Views/Social/NotificationFeedView.swift` |
| 64 | `utility.bot` | 4 | 4 | 0 | n/a (dynamic/default) | AI badges | `web:components/GamificationModal.vue`, `web:components/BadgeModule.vue`, `web:components/profile/AchievementShelf.vue` |
| 65 | `utility.cloud.lightning` | 4 | 4 | 0 | n/a (dynamic/default) | weather thunderstorm | `web:components/weather/WeatherTabForecast.vue`, `web:components/weather/utils.ts` |
| 66 | `utility.log.out` | 4 | 2 | 2 | 20px | logout | `web:components/Navbar.vue`, `ios:Views/Profile/ProfileView.swift`, `ios:Views/Social/GardenDetailView.swift` |
| 67 | `utility.message.square` | 4 | 4 | 0 | 14px | chat page/sidebar glyph (web) | `web:components/chat/ChatSidebar.vue`, `web:components/plant-details/PlantDetailsHero.vue`, `web:views/AIChat.vue` |
| 68 | `utility.user.x` | 4 | 1 | 3 | 16px | remove member/unfollow | `web:views/PlantDetails.vue`, `ios:Views/Plant/PlantDetailView.swift`, `ios:Views/Social/GardenDetailView.swift` |
| 69 | `utility.wind` | 4 | 4 | 0 | n/a (dynamic/default) | weather wind | `web:components/profile/CareRhythmStrip.vue`, `web:components/weather/WeatherTabForecast.vue`, `web:components/weather/WeatherTabNow.vue` +1 more |
| 70 | `utility.zap` | 4 | 4 | 0 | n/a (dynamic/default) | gamification/landing | `web:components/BadgeModule.vue`, `web:components/GamificationModal.vue`, `web:components/profile/AchievementShelf.vue` +1 more |
| 71 | `weather.cloud` | 4 | 3 | 1 | n/a (dynamic/default) | weather cloudy/offline | `web:components/WeatherWidget.vue`, `web:components/weather/WeatherTabForecast.vue`, `web:components/weather/utils.ts`, `ios:Views/Components/WeatherWidgetView.swift` |
| 72 | `utility.cake` | 3 | 2 | 1 | 18px, 20px | anniversaries/birthday | `web:components/dashboard/DashboardAnniversaryAlerts.vue`, `web:views/Today.vue`, `ios:Views/Profile/ProfileStatsView.swift` |
| 73 | `utility.circle` | 3 | 2 | 1 | 24px | consistency dot/unselected | `web:components/dashboard/DashboardPlantCollection.vue`, `ios:Views/Plant/PlantDetailConsistency.swift` |
| 74 | `utility.cloud.rain` | 3 | 3 | 0 | n/a (dynamic/default) | weather rain | `web:components/profile/LocationPostcard.vue`, `web:components/weather/WeatherTabForecast.vue`, `web:components/weather/utils.ts` |
| 75 | `utility.eye.off` | 3 | 1 | 2 | 20px | hide/visibility off | `web:components/ui/PasswordInput.vue`, `ios:Views/Components/TextField/PTTextField.swift`, `ios:Views/Dashboard/DashboardView.swift` |
| 76 | `utility.filter` | 3 | 2 | 1 | 16px | filters | `web:components/care-calendar/CalendarToolbar.vue`, `ios:Views/Calendar/CalendarView.swift` |
| 77 | `utility.flask.conical` | 3 | 3 | 0 | n/a (dynamic/default) | experiment badges | `web:components/BadgeModule.vue`, `web:components/GamificationModal.vue`, `web:components/profile/AchievementShelf.vue` |
| 78 | `utility.hand` | 3 | 3 | 0 | n/a (dynamic/default) | gamification badges | `web:components/BadgeModule.vue`, `web:components/GamificationModal.vue`, `web:components/profile/AchievementShelf.vue` |
| 79 | `utility.lightbulb` | 3 | 3 | 0 | 12px, 14px | care tips on cards | `web:components/plant-card/PlantListDetailed.vue`, `web:components/plant-card/PlantCardDetailed.vue` |
| 80 | `utility.link` | 3 | 3 | 0 | n/a (dynamic/default) | copy link | `web:components/garden/GardenCard.vue`, `web:views/GardenDetail.vue`, `web:views/PlantDetails.vue` |
| 81 | `utility.rotate.ccw` | 3 | 2 | 1 | 12px, 16px | undo/rotate crop | `web:components/plant-details/ImageCropper.vue`, `web:views/AddPlant.vue`, `ios:Views/Plant/AddPlantView.swift` |
| 82 | `utility.save` | 3 | 3 | 0 | 16px | save (edit care modal) | `web:components/care-calendar/EditCareModal.vue` |
| 83 | `utility.scan.line` | 3 | 1 | 2 | 14px | identify/scan plant | `web:views/AddPlant.vue`, `ios:Views/Plant/AddPlantView.swift`, `ios:Views/Plant/PlantDetailSheets.swift` |
| 84 | `utility.sliders.horizontal` | 3 | 2 | 1 | 14px | preferences/settings sliders | `web:components/CareCalendar.vue`, `web:components/dashboard/DashboardToolbar.vue`, `ios:Views/Calendar/CalendarView.swift` |
| 85 | `utility.snowflake` | 3 | 3 | 0 | n/a (dynamic/default) | weather snow/frost | `web:components/profile/LocationPostcard.vue`, `web:components/weather/WeatherTabForecast.vue`, `web:components/weather/utils.ts` |
| 86 | `utility.tag` | 3 | 1 | 2 | n/a (dynamic/default) | common-name tag select | `web:components/PlantCommonNameSelect.vue`, `ios:Views/Components/PTCommonNameSelect.swift` |
| 87 | `utility.thermometer` | 3 | 2 | 1 | 12px | temperature | `web:components/weather/WeatherTabForecast.vue`, `web:components/weather/WeatherTabNow.vue`, `ios:Views/Components/WeatherForecastTabView.swift` |
| 88 | `utility.thumbs.down` | 3 | 2 | 1 | n/a (dynamic/default) | negative feedback | `web:components/chat/ChatMessages.vue`, `web:components/plant-details/PlantCareInsights.vue`, `ios:Views/Chat/AIChatView.swift` |
| 89 | `utility.thumbs.up` | 3 | 2 | 1 | 14px | positive feedback | `web:components/chat/ChatMessages.vue`, `web:components/plant-details/PlantCareInsights.vue`, `ios:Views/Chat/AIChatView.swift` |
| 90 | `utility.trending.down` | 3 | 3 | 0 | n/a (dynamic/default) | declining trends | `web:components/DaylightSummary.vue`, `web:components/PatternInsights.vue`, `web:components/WeeklyDigest.vue` |
| 91 | `navigation.forward` | 2 | 2 | 0 | 16px | onboarding/hero forward CTA | `web:components/Hero.vue`, `web:views/Onboarding.vue` |
| 92 | `utility.cloud.drizzle` | 2 | 2 | 0 | n/a (dynamic/default) | - | `web:components/weather/WeatherTabForecast.vue`, `web:components/weather/utils.ts` |
| 93 | `utility.cloud.fog` | 2 | 2 | 0 | n/a (dynamic/default) | - | `web:components/weather/WeatherTabForecast.vue`, `web:components/weather/utils.ts` |
| 94 | `utility.cloud.moon` | 2 | 2 | 0 | n/a (dynamic/default) | - | `web:components/weather/WeatherTabForecast.vue`, `web:components/weather/utils.ts` |
| 95 | `utility.cloud.snow` | 2 | 2 | 0 | n/a (dynamic/default) | - | `web:components/weather/WeatherTabForecast.vue`, `web:components/weather/utils.ts` |
| 96 | `utility.grid2x2` | 2 | 1 | 1 | n/a (dynamic/default) | grid layout toggle | `web:components/dashboard/DashboardToolbar.vue`, `ios:Views/Dashboard/DashboardView.swift` |
| 97 | `utility.history` | 2 | 1 | 1 | 16px | missed care history | `web:components/care-calendar/MissedCarePanel.vue`, `ios:Views/Calendar/CalendarView.swift` |
| 98 | `utility.layout.grid` | 2 | 2 | 0 | n/a (dynamic/default) | layout toggle | `web:components/NotificationsModal.vue`, `web:components/dashboard/DashboardToolbar.vue` |
| 99 | `utility.monitor.smartphone` | 2 | 2 | 0 | 20px | system theme option | `web:components/Navbar.vue` |
| 100 | `utility.moon.star` | 2 | 2 | 0 | 14px, 16px | moon phase chart | `web:components/MoonPhaseChart.vue` |
| 101 | `utility.quote` | 2 | 1 | 1 | 16px | notes/quotes | `web:components/profile/LivingCollection.vue`, `ios:Views/Plant/PlantDetailSheets.swift` |
| 102 | `utility.scale` | 2 | 2 | 0 | 14px, 16px | legal pages | `web:views/Impressum.vue`, `web:views/PrivacyPolicy.vue` |
| 103 | `utility.settings` | 2 | 1 | 1 | 16px | notification settings | `web:components/NotificationCenter.vue`, `ios:Views/Profile/NotificationSettingsView.swift` |
| 104 | `utility.shield.check` | 2 | 2 | 0 | n/a (dynamic/default) | landing trust | `web:components/Hero.vue`, `web:views/Landing.vue` |
| 105 | `utility.star.half` | 2 | 2 | 0 | n/a (dynamic/default) | achievements | `web:components/GamificationModal.vue`, `web:components/profile/AchievementShelf.vue` |
| 106 | `utility.swords` | 2 | 2 | 0 | n/a (dynamic/default) | challenge badges | `web:components/GamificationModal.vue`, `web:components/profile/AchievementShelf.vue` |
| 107 | `utility.trees` | 2 | 2 | 0 | n/a (dynamic/default) | collection badges | `web:components/GamificationModal.vue`, `web:components/profile/AchievementShelf.vue` |
| 108 | `utility.undo2` | 2 | 1 | 1 | 14px | crop undo | `web:components/plant-details/ImageCropper.vue`, `ios:Views/Components/ImageCropperView.swift` |
| 109 | `utility.upload.cloud` | 2 | 2 | 0 | 28px, 64px | photo upload dropzones | `web:views/AddPlant.vue`, `web:views/PlantDetails.vue` |
| 110 | `plant.seedling` | 1 | 1 | 0 | 20px | DOC-COMMENT ONLY (ui/PlantimIcon.vue usage example) — not rendered | `web:components/ui/PlantimIcon.vue` |
| 111 | `status.loading` | 1 | 1 | 0 | 32px | verify-email spinner | `web:views/VerifyEmail.vue` |
| 112 | `utility.align.justify` | 1 | 1 | 0 | n/a (dynamic/default) | list density toggle | `web:components/dashboard/DashboardToolbar.vue` |
| 113 | `utility.arrow.down.to.dot` | 1 | 1 | 0 | n/a (dynamic/default) | moonset | `web:components/MoonPhaseChart.vue` |
| 114 | `utility.arrow.up.from.dot` | 1 | 1 | 0 | n/a (dynamic/default) | moonrise | `web:components/MoonPhaseChart.vue` |
| 115 | `utility.baby` | 1 | 1 | 0 | 16px | privacy (children) | `web:views/PrivacyPolicy.vue` |
| 116 | `utility.bar.chart3` | 1 | 1 | 0 | 28px | growth chart empty | `web:components/GrowthChart.vue` |
| 117 | `utility.bug` | 1 | 1 | 0 | n/a (dynamic/default) | chat error/debug | `web:components/chat/ChatMessages.vue` |
| 118 | `utility.calendar.days` | 1 | 1 | 0 | 14px | plant age row | `web:components/plant-details/PlantDetailsHero.vue` |
| 119 | `utility.check.check` | 1 | 1 | 0 | 14px | mark all read | `web:components/NotificationCenter.vue` |
| 120 | `utility.chevrons.up.down` | 1 | 1 | 0 | 12px | table sort | `web:components/ui/DataTable.vue` |
| 121 | `utility.cookie` | 1 | 1 | 0 | 16px | privacy cookies | `web:views/PrivacyPolicy.vue` |
| 122 | `utility.copy` | 1 | 1 | 0 | n/a (dynamic/default) | copy message | `web:components/chat/ChatMessages.vue` |
| 123 | `utility.database` | 1 | 1 | 0 | 16px | privacy data | `web:views/PrivacyPolicy.vue` |
| 124 | `utility.dna` | 1 | 1 | 0 | 16px | species genetics row | `web:components/plant-details/PlantDetailsHero.vue` |
| 125 | `utility.flip.horizontal2` | 1 | 1 | 0 | 16px | crop flip | `web:components/plant-details/ImageCropper.vue` |
| 126 | `utility.handshake` | 1 | 1 | 0 | n/a (dynamic/default) | landing | `web:views/Landing.vue` |
| 127 | `utility.inbox` | 1 | 0 | 1 | n/a (dynamic/default) | feed empty (iOS) | `ios:Views/Social/FeedTabView.swift` |
| 128 | `utility.key` | 1 | 0 | 1 | n/a (dynamic/default) | forgot password (iOS) | `ios:Views/Auth/ForgotPasswordView.swift` |
| 129 | `utility.list` | 1 | 1 | 0 | n/a (dynamic/default) | list layout toggle | `web:components/dashboard/DashboardToolbar.vue` |
| 130 | `utility.mail.check` | 1 | 1 | 0 | 32px | registration email sent | `web:views/Register.vue` |
| 131 | `utility.menu` | 1 | 1 | 0 | 20px | mobile burger | `web:components/Navbar.vue` |
| 132 | `utility.move` | 1 | 1 | 0 | 32px | crop move hint | `web:components/plant-details/ImageCropper.vue` |
| 133 | `utility.orbit` | 1 | 1 | 0 | 14px | moon distance | `web:components/MoonPhaseChart.vue` |
| 134 | `utility.panel.left` | 1 | 0 | 1 | n/a (dynamic/default) | chat sidebar toggle (iOS) | `ios:Views/Chat/AIChatView.swift` |
| 135 | `utility.panel.left.close` | 1 | 1 | 0 | 16px | sidebar collapse (web) | `web:components/templates/SidebarShell.vue` |
| 136 | `utility.panel.left.open` | 1 | 1 | 0 | 16px | sidebar open (web) | `web:components/templates/SidebarShell.vue` |
| 137 | `utility.rotate.cw` | 1 | 1 | 0 | 16px | crop rotate | `web:components/plant-details/ImageCropper.vue` |
| 138 | `utility.settings2` | 1 | 1 | 0 | 16px | quiet corner settings | `web:components/profile/QuietCorner.vue` |
| 139 | `utility.smartphone` | 1 | 1 | 0 | 24px | landing PWA | `web:views/Landing.vue` |
| 140 | `utility.square.pen` | 1 | 1 | 0 | 16px | new chat compose | `web:components/chat/ChatSidebar.vue` |
| 141 | `utility.sunrise` | 1 | 1 | 0 | 16px | sunrise | `web:components/SunArcChart.vue` |
| 142 | `utility.sunset` | 1 | 1 | 0 | 16px | sunset | `web:components/SunArcChart.vue` |
| 143 | `utility.zoom.in` | 1 | 1 | 0 | 16px | crop zoom in | `web:components/plant-details/ImageCropper.vue` |
| 144 | `utility.zoom.out` | 1 | 1 | 0 | 16px | crop zoom out | `web:components/plant-details/ImageCropper.vue` |

---

## 3. Gaps and mismatches

### (a) Needed by the app but missing / semantically wrong in the registry (v2)

1. **Care actions have no dedicated icons and diverge per platform.** The four care categories are mapped ad hoc:
   - Web (`components/care-calendar/presentation-helpers.ts`, `components/today/care-card/careCategoryMeta.ts`, `components/plant-card/usePlantCard.ts`): water → `plant.watering`; prune → `plant.pruning`; fertilize → **`utility.flower2`**; repot → **`plant.sprout`** (Today card + calendar) but **`utility.refresh.cw`** (plant-card quick action) — two different repot glyphs *within web*.
   - iOS (`ios/Plantim/Models/Plant.swift:103-110` `EventType.iconName`): water → `plant.watering`; prune → `plant.pruning`; fertilize → **`plant.growth`**; repot → **`plant.growth`** — fertilize and repot are indistinguishable from each other *and* from the Garden tab icon. (`PTIcon.repot` = `utility.refresh.cw` is separately used as the calendar "regenerate" spinner, `CalendarView.swift:513`.)
   - v3 already ships `care.watering`, `care.fertilizing`, `care.pruning`, `care.repotting` (+`.alt` variants, `care.log`, `care.reminder`, `care.suggestion`) — none adopted.
2. **Plants-tab identity collision**: `plant.sprout` = Plants tab (web) + repot care icon (web) + seedling level/badge glyph. Three meanings, one shape.
3. **Feed identity collision**: `utility.activity` = Feed tab + care-category fallback + Plants empty state (`views/Dashboard.vue:196`) + activity timelines. A generic pulse line carries the whole social surface.
4. **Chat glyph split**: tab `utility.message.circle` vs in-surface `utility.message.square` (web sidebar/page, `PlantDetailsHero` CTA).
5. **Today tab is a generic house**: `navigation.home` also means "room" in RoomSelect on both platforms. v3 `nav.today.leaf/sun/sunrise` candidates exist.
6. **Health status mismatch across platforms**: web plant cards use `status.success.circle` / `status.warning` / `status.error` (`PlantCardDetailed.vue`, `PlantListDetailed.vue`); iOS `HealthStatus.iconName` uses `.statusSuccessCircle` / `.statusWarning` / **`.utilityXCircle`** (`Models/PlantimAPICompat.swift:66-73`) — critical state differs (`status.error` vs `utility.x.circle`). v3 `health.healthy/attention/critical` unadopted.
7. **Notification type icons diverge** (web `NotificationFeed.vue:331` vs iOS `NotificationFeedView.swift:784`):
   - `garden_shared`/`invite`: web `utility.share2` vs iOS `utility.upload`
   - `co_owner_added`: web `utility.share2` vs iOS `account.users`
   - `badge_earned`: web `utility.award` vs iOS `utility.badge.check`
   - `level_up`: web `utility.trending.up` vs iOS `utility.arrow.up`
   - `plant_shared`: web `utility.share2` vs iOS `plant.growth`
8. **Streaks** use `utility.flame` (10 refs) while the registry's dedicated `status.streak` sits unused.
9. **Add-plant identity split**: `action.add` vs `utility.plus.circle` (see §1); v3 `plant.add` unadopted.

### (b) Registry (v2) icons never used by the app — 11 ids

`plant.seedling` (doc comment only), `plant.thriving`, `plant.watering.can`, `plant.wilting`, `status.streak`, `status.warning.alt`, `utility.arrow.down`, `utility.calendar.clock`, `utility.code`, `utility.help.circle`, `utility.square`.
Note: `utility.calendar.clock`, `utility.code`, `utility.arrow.down` have `PTIcon` aliases defined on iOS (`calendarBadgeClock`, `code`, `arrowDown`) that are never referenced. No v3 id is referenced anywhere in the app yet.

### (c) Hardcoded icons bypassing the system

- **iOS: clean.** 0 × `Image(systemName:)` in `ios/Plantim` (SF Symbols fully migrated). Only non-registry vectors: `google.svg`/`github.svg` brand assets and Lottie animations (`empty-state.json`, `hydration.json`).
- **Web — one real bypass**: `client/src/components/ErrorToast.vue:29` — inline heroicons-style close-X `<svg viewBox="0 0 20 20">` (h-4) on the toast dismiss button; should be `navigation.close`.
- Web — acceptable non-icon inline SVG (data-viz / brand / decorative, listed for completeness): `MoonPhaseChart.vue`, `SunArcChart.vue`, `charts/*` (CareHeatmap, GrowthSparkline, HealthRing, SeasonalWheel, WateringTimeline), progress rings in `PlantCardDetailed.vue:91`, `PlantCareInsights.vue:163`, `today/care-card/CarePulseStrip.vue:62`, sparkline in `patterns/StatHighlight.vue:36`, decorative gradient circle in `marketing/CTABanner.vue:37`, Google/GitHub logos in `templates/AuthOAuthButtons.vue`, flag/brand assets in `client/src/assets/` (`flags/*.svg`, `github.svg`, `linkedin.svg`, `profile-placeholder.svg`).
- No `lucide` imports anywhere in `client/src` — the app consumes lucide geometry only through the registry.
- Onboarding uses a separate `Illustration` component with names `onboarding-add-plant`, `onboarding-care-schedule`, `onboarding-track-growth`, `onboarding-complete` (`views/Onboarding.vue:26-31`) — outside the icon registry; v4 could absorb these as 64px+ illustration-grade assets.

### (d) Where main would benefit from a different/updated icon (proposed semantic ids)

| Surface / usage | Today (main) | Proposed for v4 |
|---|---|---|
| Care: water/fertilize/prune/repot rows, calendar chips, quick actions | mixed `plant.watering` / `utility.flower2` / `plant.growth` / `plant.sprout` / `utility.refresh.cw` | adopt `care.watering`, `care.fertilizing`, `care.pruning`, `care.repotting` (both clients, one map) |
| Plant health states | `status.success.circle`/`status.warning`/`status.error` vs iOS `utility.x.circle` | `health.healthy`, `health.attention`, `health.critical` |
| Today tab | `navigation.home` (doubles as "room") | dedicated `nav.today.*` pick (e.g. `nav.today.sun`); keep `navigation.home` for rooms |
| Plants tab | `plant.sprout` (triple-booked) | dedicated plants glyph (`nav.plant.potted` or `nav.plant.leaf`); free `plant.sprout` for seedling/level semantics |
| Feed tab | `utility.activity` (also generic fallback) | dedicated `nav.feed.*` pick; give care-fallback its own `care.log` |
| Chat surface | `utility.message.circle` + `utility.message.square` | unify (contract icon or a `nav.chat.*` pick) |
| Add plant CTA | `action.add` + `utility.plus.circle` | `plant.add` for the flow; keep `action.add` for generic adds |
| Streak chips | `utility.flame` | `status.streak` (or retire `status.streak`) |
| Care reminder notifications | `utility.bell` (generic default too) | `care.reminder` |
| Share notifications | `utility.share2` vs `utility.upload`/`account.users` | one share semantic across platforms |
| Empty states at 48–64px | 24px-grid icons scaled up (`plant.growth` h-16, `utility.activity` h-12, `plant.sprout` h-14, `utility.upload.cloud` h-16) | v3/v4 48/72px size variants (`sizes/*@48/@72`) are built for exactly this — wire them in |

Also worth fixing while touching this area: iOS `nav.careCalendar` label typo "Rythm"; QuickRail's `/rhythm` route override vs contract `/calendar`; web chat label override (`nav.tabChat`) vs contract `nav.plantimChat`.

---

## 4. Android (future) — Material 3 surfaces these icons must satisfy

| M3 surface | Spec | Mapped Plantim ids (from usage above) |
|---|---|---|
| Bottom navigation bar / navigation rail | 24dp glyph in 64dp bar; **active (filled) + inactive (outlined) pair per destination**; badge support | the 6 contract ids `utility.activity`, `plant.growth`, `plant.sprout`, `calendar.date`, `utility.message.circle`, `account.user` (+ `navigation.home` if Today ships). M3 caps bottom nav at 5 destinations — Android will need the iOS-style merge (Garden hosts Plants) or a rail on large screens. v4 must deliver **outlined + solid pairs** for all P0 ids at 24dp (v3 already has outlined/solid styles; verify optical weight parity at 24dp). |
| FAB / extended FAB | 24dp glyph in 56dp container | add-plant: `plant.add` (proposed) / today `action.add` + `utility.plus.circle` |
| App bar actions | 24dp, touch target 48dp | `action.search`, `utility.filter`, `utility.sliders.horizontal`, `utility.more.horizontal`, `utility.bell`, `navigation.close`, `utility.log.out`, `utility.settings` |
| List item leading icons | 24dp (avatar 40dp) | care rows (`care.*` / today `plant.watering`, `plant.pruning`, `utility.flower2`), notification rows (`utility.bell`, `utility.user.plus`, `utility.award`, ...), plant rows (`location.pin`, `calendar.time`, health trio) |
| Chips / assist & filter | **18dp** icon | streak `utility.flame`, weather set (`weather.*`, `utility.cloud.*`), care category chips — must survive 18dp |
| Menus / overflow | 24dp leading | `action.edit`, `action.delete`, `utility.share2`, `utility.link`, `utility.copy` |
| Empty states / onboarding art | 48dp+ | `sizes/*@48` and `@72` variants of `plant.growth`, `utility.activity`, `utility.upload.cloud`, `utility.bell.off`, plus onboarding illustrations |
| Notifications (system) | 24dp monochrome, alpha-only small icon | app icon + `care.reminder`/`utility.bell` must have a silhouette that reads as pure alpha mask |

---

## 5. Prioritized worklist

### P0 — main-tab / section identity (9 ids)

| Id | Role | Combined refs (web+iOS) |
|---|---|---|
| `utility.activity` | Feed tab (both) | 18 |
| `plant.growth` | Garden tab (both) — most-used icon in the app | 78 |
| `plant.sprout` | Plants tab (web-only) | 20 |
| `calendar.date` | Calendar/Rhythm tab (both) | 13 |
| `utility.message.circle` | Chat tab (both) | 7 |
| `account.user` | Profile tab (iOS fallback; web uses avatar) | 5 |
| `navigation.home` | Today tab (web-only) | 4 |
| `action.add` | the add action, incl. add-plant (confirmed: `views/Dashboard.vue:156`, `views/Garden.vue:168`, iOS `DashboardView.swift:918`) | 38 |
| `utility.plus.circle` | add-plant hero CTA variant (web `DashboardHero.vue:37`, iOS `DashboardView.swift:289`) — consolidate with `action.add`/`plant.add` in v4 | 10 |

### P1 — every other id the app uses (134 ids, with combined usage counts)

`navigation.close`(49), `plant.watering`(47), `status.success`(39), `utility.sparkles`(32), `navigation.expand`(29), `status.warning`(25), `utility.camera`(24), `action.delete`(23), `utility.user.plus`(22), `navigation.next`(20), `action.search`(19), `utility.lock`(18), `status.success.circle`(17), `weather.sun`(17), `location.pin`(16), `account.users`(14), `status.error`(14), `utility.x.circle`(14), `calendar.time`(13), `action.edit`(12), `status.success.circle.alt`(12), `utility.globe`(12), `plant.pruning`(11), `status.info`(11), `utility.eye`(11), `utility.flame`(10), `utility.minus`(10), `utility.trending.up`(10), `weather.moon`(10), `navigation.back`(9), `utility.mail`(9), `utility.star`(9), `utility.upload`(9), `utility.bell`(8), `utility.brain`(8), `utility.cloud.sun`(8), `utility.crown`(8), `utility.image`(8), `utility.trophy`(8), `utility.user.check`(8), `navigation.previous`(7), `utility.more.horizontal`(7), `utility.shield`(7), `utility.arrow.up`(6), `utility.share2`(6), `navigation.collapse`(5), `utility.flower2`(5), `utility.heart`(5), `utility.pencil.line`(5), `utility.refresh.cw`(5), `utility.user.minus`(5), `utility.award`(4), `utility.badge.check`(4), `utility.bell.off`(4), `utility.bot`(4), `utility.cloud.lightning`(4), `utility.log.out`(4), `utility.message.square`(4), `utility.user.x`(4), `utility.wind`(4), `utility.zap`(4), `weather.cloud`(4), `utility.cake`(3), `utility.circle`(3), `utility.cloud.rain`(3), `utility.eye.off`(3), `utility.filter`(3), `utility.flask.conical`(3), `utility.hand`(3), `utility.lightbulb`(3), `utility.link`(3), `utility.rotate.ccw`(3), `utility.save`(3), `utility.scan.line`(3), `utility.sliders.horizontal`(3), `utility.snowflake`(3), `utility.tag`(3), `utility.thermometer`(3), `utility.thumbs.down`(3), `utility.thumbs.up`(3), `utility.trending.down`(3), `navigation.forward`(2), `utility.cloud.drizzle`(2), `utility.cloud.fog`(2), `utility.cloud.moon`(2), `utility.cloud.snow`(2), `utility.grid2x2`(2), `utility.history`(2), `utility.layout.grid`(2), `utility.monitor.smartphone`(2), `utility.moon.star`(2), `utility.quote`(2), `utility.scale`(2), `utility.settings`(2), `utility.shield.check`(2), `utility.star.half`(2), `utility.swords`(2), `utility.trees`(2), `utility.undo2`(2), `utility.upload.cloud`(2), `status.loading`(1), `utility.align.justify`(1), `utility.arrow.down.to.dot`(1), `utility.arrow.up.from.dot`(1), `utility.baby`(1), `utility.bar.chart3`(1), `utility.bug`(1), `utility.calendar.days`(1), `utility.check.check`(1), `utility.chevrons.up.down`(1), `utility.cookie`(1), `utility.copy`(1), `utility.database`(1), `utility.dna`(1), `utility.flip.horizontal2`(1), `utility.handshake`(1), `utility.inbox`(1), `utility.key`(1), `utility.list`(1), `utility.mail.check`(1), `utility.menu`(1), `utility.move`(1), `utility.orbit`(1), `utility.panel.left`(1), `utility.panel.left.close`(1), `utility.panel.left.open`(1), `utility.rotate.cw`(1), `utility.settings2`(1), `utility.smartphone`(1), `utility.square.pen`(1), `utility.sunrise`(1), `utility.sunset`(1), `utility.zoom.in`(1), `utility.zoom.out`(1)

Suggested P1 tiering for rework order: top ~20 (counts ≥ 13) cover chevrons, close, care, status, add/delete/search — these render mostly at 12–16px, so redraw them first with small-size legibility as the acceptance bar.

### P2 — registry/v3 icons the app doesn't use yet (remainder)

**94 ids**: the 11 unused v2 ids listed in §3(b) (incl. `plant.seedling`, doc-comment only) + all **83 v3 additions** (`care.*` ×11, `family.*` ×16, `garden.*` ×14, `genus.*` ×12, `health.*` ×3, `nav.*` ×21, `plant.add/related/remove`, `stage.*` ×3, `taxonomy.*` ×3). Of these, `care.*`, `health.*`, `plant.add` and the `nav.*` picks are promoted implicitly by the §3(d) recommendations; the rest stay P2.

---

## Method

- App repo read exclusively from `main` without checkout: `git -C ~/PersonalProjects/Plantim ls-tree -r main --name-only`, `git ... show main:<path>`, `git ... grep <pattern> main -- 'client/src/**' 'ios/Plantim/**'`.
- Web ids: `git grep -nE "['\"](account|action|calendar|location|navigation|plant|status|utility|weather)\.[a-z0-9.]+['\"]" main -- 'client/src/**'` (1,001 raw lines), filtered against the union of `design-tokens/icons/registry.json` + `v3/index.v3.json` ids to drop i18n-key lookalikes (`plant.picture`, `calendar.composable.*`, …), then context-classified (name-attr / icon-prop / map-literal) with a Python pass — 0 i18n collisions in the final set.
- iOS ids: `git grep -nE 'PTIcon\.|PlantimIcon\(|PlantimIconName' main -- 'ios/Plantim/**'` (559 lines), legacy aliases (`PTIcon.leaf`, `PTIcon.Name.trash`, …) resolved to semantic ids via the alias tables in `ios/Plantim/Config/PTIcon.swift`; enum cases mapped back to dotted ids by camelCase inversion against the registry — 0 unresolved references.
- Bypass checks: `git grep 'Image(systemName:' main -- 'ios/Plantim/**'` (0 hits), `git grep -l '<svg' main -- 'client/src/**'` (each hit inspected), `git grep "from ['\"]lucide" main -- 'client/src/**'` (0 hits).
- Labels from `main:client/src/i18n/locales/en.json` and `main:ios/Plantim/Locales/en.json`; contract from `plantim-icons/packages/plantim-icons/src/navigation.ts`.
