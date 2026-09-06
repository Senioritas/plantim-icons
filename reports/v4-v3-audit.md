# v4 audit of the v3 icon set

Method: every v3 icon rendered to contact sheets (4 styles × light/dark at 128 px
vector + true 24/16 px) via `design-tokens/bin/render-v4-sheets.mjs v3`, inspected
zoomed at 400–800%. Verdicts: **keep** (geometry survives into v4 with size/variant
work only), **refine** (metaphor right, geometry reworked), **redraw** (new geometry
and/or new metaphor). All 237 icons get true v4 solid/duotone/multicolor variants
regardless of verdict — v3's "solid" is mostly a thicker outline, not a fill.

## Recurring defect catalog

1. **Fake solids.** Most v3 "solid" SVGs just re-stroke the outline thicker; true
   fills exist only where Lucide shipped them. Where fills exist they collapse
   interior detail (health.* all become identical featureless lenses; genus/nav
   leaves become blank lenses; fertilizing.alt's leaf counter vanishes → reads as
   a trash bin).
2. **Wrong source glyphs on semantic ids** (Codex-era mapping defects):
   `action.search` (has ! in lens), `utility.eye` (closed eye), `utility.lock`
   (unlocked), `utility.link` (slashed), `utility.lightbulb` (off), `utility.zap`
   (off), `utility.bug` (off), `utility.dna` (off), `utility.flask.conical` (off),
   `utility.filter` (x), `utility.refresh.cw` (off), `utility.mail` (question),
   `utility.image` (down-arrow), `utility.wind` (down-arrow), `utility.database`
   (backup), `utility.thermometer` (snowflake), `utility.trending.up` (up-down),
   `utility.message.circle` (question — and it is the **Chat tab icon**),
   `weather.cloud` (download arrow), `weather.moon` (plus), `utility.rotate.ccw`
   (key inside). v4 corrects all of these to the plain semantic meaning.
3. **Variant identity collisions.** `utility.heart` outline is a *broken* heart,
   its solid a whole heart. `nav.plant.leaf` and `nav.today.leaf` share the same
   solid. `utility.star` and `utility.sparkles` are the same glyph;
   `utility.settings`≡`settings2`, `utility.square`≡`utility.activity`,
   `utility.upload`≡`upload.cloud`, `utility.moon.star`≡`weather.moon`,
   `status.success`≡`status.success.circle`.
4. **Multicolor role bugs** (geometry-heuristic assignment): `account.user` and
   `calendar.date` lose their entire foreground in multicolor (empty circle /
   empty square); floating accent dots on care.pruning, nav.today.leaf,
   garden.hose.
5. **Blob anatomy on the hand-built sets** (garden/family/genus/lifecycle/
   taxonomy): near-zero-length dashes, colliding strokes, unreadable metaphors —
   wheelbarrow reads as shopping cart, trowel as dagger, piperaceae as Mickey
   Mouse, orchidaceae as a face, fern as a totem, watering.alt as a video camera.
6. **P0 failures.** `plant.growth` (Gardens tab): slash reads as "prohibited",
   solid isn't solid. `utility.message.circle` (Chat): question-mark glyph.
   `utility.activity` (Feed): activity pulse is generic and weak at 16 px.
   `calendar.date`/`account.user`: multicolor loses identity.

## Verdicts by category

### care (11) — 5 redraw / 6 refine
| id | verdict | reason |
|---|---|---|
| care.fertilizing | redraw | granules-over-mound reads as moustache; mush at 16 |
| care.fertilizing.alt | redraw | reads as trash bin; solid loses leaf counter |
| care.log | refine | clipboard fine; cramped check/line spacing at 16 |
| care.pruning | redraw | solid = featureless lens; floating accent dot |
| care.pruning.alt | refine | scissors fine; asymmetric blades, heavy pivot blobs |
| care.reminder | refine | bell ok; clapper dot merges with rim; solid amorphous |
| care.repotting | redraw | T-with-dots plant reads as scarecrow/lamp |
| care.repotting.alt | refine | transfer-arrow pot ok; arrow chunky, rim muddy |
| care.suggestion | refine | main spark ok; stray satellite dot floats disconnected |
| care.watering | refine | drop fine; inner dot reads as a hole at small sizes |
| care.watering.alt | redraw | watering can reads as a video camera |

### nav (18) — 6 redraw / 8 refine / 4 keep
| id | verdict | reason |
|---|---|---|
| nav.calendar.check | keep | clean; good counters |
| nav.calendar.leaf | refine | leaf blobby in solid |
| nav.calendar.plain | keep | clean |
| nav.chat.bubble | refine | solid drops text-line counters |
| nav.chat.dots | refine | solid identical to chat.bubble solid |
| nav.chat.leaf | refine | solid identical to chat.bubble solid |
| nav.feed.cards | redraw | overlapping outlines tangle; unreadable |
| nav.feed.stream | redraw | reads as sliders; muddy stroke merges |
| nav.feed.waves | keep | classic RSS, crisp |
| nav.garden.beds | redraw | three arcs + dots read as eyebrows; 16 px mush |
| nav.garden.plot | refine | 2×2 plot ok; busy interior dots |
| nav.garden.sprouts | redraw | mound blob unreadable at every size |
| nav.plant.leaf | redraw | jagged inner veins; solid = blank lens (collides with today.leaf) |
| nav.plant.potted | refine | leaf pair blobs at 16; double rim muddy |
| nav.plant.sprout | refine | good metaphor; stem/leaf junction muddy in solid |
| nav.today.leaf | redraw | solid = blank lens; floating blue dot in multicolor |
| nav.today.sun | keep | fixed 8-ray sun reads well |
| nav.today.sunrise | refine | ray dash/dot balance at 16 |

### plant (8) — 7 redraw / 1 refine
| id | verdict | reason |
|---|---|---|
| plant.growth | **redraw (P0)** | Gardens tab: slash reads as "prohibited"; solid not solid |
| plant.pruning | redraw | scissors-in-dashed-box clutter; dup of care.pruning.alt |
| plant.seedling | redraw | hook reads as umbrella handle |
| plant.sprout | **redraw (P0)** | Plants tab: junction muddy, leaves unbalanced |
| plant.thriving | redraw | arc-over-arrow reads as mushroom/umbrella |
| plant.watering | redraw | nested drops merge into blob; app's most-used icon |
| plant.watering.can | redraw | reads as fuel canister with error X; X is semantically wrong |
| plant.wilting | refine | droopy plant reads; tune weights |

### garden (14) — 10 redraw / 3 refine / 1 keep
compost (redraw: @-swirl, solid loses all), fork (redraw: stumpy tines),
gloves (redraw: reads as bottle/bag), greenhouse (refine: solid must keep panes),
hoe (redraw: golf club), hose (redraw: frying pan), **pot (keep)**,
rake (redraw: tine collision), seed-packet (refine: sprout glyph blobby),
shears (refine: differentiate from scissors), spade (redraw: figure-8 blob),
sprinkler (redraw: reads as plane/cross), trowel (redraw: dagger),
wheelbarrow (redraw: shopping cart).

### family (16) — 14 redraw / 2 refine
arecaceae (refine: palm reads) and cactaceae (refine: saguaro reads) survive;
all 14 others redraw — apiaceae (spiky mess), araceae (solid = plain heart),
asparagaceae (fence), asphodelaceae (blob), begoniaceae (slash artifacts),
bromeliaceae (muddy), crassulaceae (compass star), lamiaceae (blobs),
marantaceae (beetle), moraceae (brain), nephrolepidaceae (caterpillar),
orchidaceae (face), piperaceae (Mickey Mouse), polypodiaceae (barbed wire).

### genus (15) — 13 redraw / 2 refine
palm (refine), sansevieria (refine); redraw: aloe (solid = bat wing),
cactus (hydrant), calathea (peace-sign veins; solid blank), fern (totem),
ficus (cloud person), monstera (mask; deserves iconic split leaf),
orchid (solid = mushroom), peperomia (balloons), pothos (pea pod),
succulent (mouse head), taxonomy.family / taxonomy.genus (alien robots),
taxonomy.species (reads as digit 9 + soap).

### health (3) — 3 redraw
healthy/attention/critical: interior glyphs merge with leaf rim; all three
solids are **identical featureless lenses** — status must survive every variant.

### lifecycle (6) — 6 redraw
plant.add & plant.remove (crown-topped pot, awkward badge overlap — the add icon
is P0-adjacent), plant.related (dumbbell), stage.growing (mush),
stage.mature (umbrella), stage.seedling (comma).

### status (9) — 7 keep / 1 refine / 1 redraw
keep: error, info, loading, success, success.circle.alt, warning, warning.alt.
refine: success.circle (identical to success — differentiate).
redraw: streak (flame is a lumpy blob).

### navigation (8) — 7 keep / 1 refine
Circled chevron/arrow set is clean and consistent — keep. refine: home
(solid must keep the door counter).

### action (4) — 3 keep / 1 redraw
keep add/delete/edit. redraw: search (exclamation-mark lens → plain magnifier).

### account (2) — 2 refine
user (P0 Profile: geometry fine; multicolor loses person entirely),
users (second head reads as squiggle-3).

### calendar (2) — 2 refine
date (P0 Calendar: multicolor drops all interior), time (hands merge into blob).

### location (1) — 1 redraw
pin: detached blob beside pin reads as separate object; solid amorphous.

### weather (3) — 2 redraw / 1 keep
cloud (download-cloud → plain cloud), moon (moon-plus → plain moon), sun keep.

### utility (117) — ~78 keep / ~37 refine / 2 redraw
redraw: **message.circle (P0 Chat — question-mark bubble → clean chat bubble)**,
star.half (zigzag doesn't read as half star).
refine (wrong-glyph corrections from defect catalog §2 plus): award,
badge.check, bell, bot, brain, cake, calendar.clock, camera, database, dna, eye,
filter, flask.conical, heart (broken/whole mismatch), image, inbox, lightbulb,
link, lock, mail, message.square, moon.star (dedupe vs weather.moon),
refresh.cw, rotate.ccw, settings2 (dedupe), shield, shield.check, sparkles,
star (proper star glyph, dedupe from sparkles), thermometer, trending.up,
upload.cloud (dedupe), wind, zap, activity (P0 Feed — polish for tab-bar duty).
keep: the remainder (arrows, chevrons, weather clouds, users, panels, zoom,
lists, charts, media, etc.) — solid Lucide geometry that meets the bar with v4
variant/size treatment.

## Totals

| verdict | count |
|---|---|
| keep | ~101 |
| refine | ~65 |
| redraw | ~71 |

These verdicts seed `design-tokens/icons/v4/tiers.json`; P0/P1 tier assignment
comes from `reports/v4-app-icon-audit.md`.
