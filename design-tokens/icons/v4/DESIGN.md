# Plantim Icons v4 — design language

v4 is the hand-crafted, additive rework of the full set. Everything here is
normative: generators and gates enforce what can be enforced mechanically; the
rest is enforced by the render → zoom → inspect → rework loop. v2/v3 stay
untouched; v4 maps 1:1 onto existing semantic ids (plus audit-driven additions).

## 1. Grid and metrics (24 px master)

- ViewBox is always `0 0 24 24`. Live area 20×20 (2 px padding each side);
  optical overshoot for round shapes up to 1 px into the padding is allowed
  (circles read smaller than squares — compensate).
- Stroke: 2 px, `stroke-linecap="round"`, `stroke-linejoin="round"`, no fills
  in the outline variant except deliberate dots (see §4).
- **Half-pixel snapping:** every stroke centerline that is horizontal or
  vertical sits on x.0 or x.5 coordinates so 1 px edges rasterize crisp at
  16/24/32. Diagonals and curves are exempt but endpoints snap.
- Key shapes for optical balance: square 18×18 (3..21), circle Ø 20 (2..22),
  wide rect 20×15, tall rect 15×20. Sibling icons in one category must carry
  equal optical weight — compare in the contact sheet, not by area math alone.
- Coordinates are written with at most 3 decimals (`fmt()` clamps; the
  structural gate rejects more).

## 2. Optical grades → six sizes

Three authored grades map onto six rendered sizes. A grade is a complete
geometry set; sizes inside a grade differ only by raster scale.

| grade | renders at | stroke (24-grid units) | detail rules |
|---|---|---|---|
| `micro` | 16, 20 | 2.4 | ≤ 2 interior details; min gap between parallel strokes 3 px; dots Ø ≥ 3; drop tertiary layers (declare in `drops`) |
| `base` | 24, 32 | 2.0 | canonical master; everything derives from it |
| `display` | 48, 72 | 1.6 | may add detail (leaf veins, texture) — never change silhouette |

Rendered stroke ≈ grade stroke × (size/24): micro\@16 → 1.6 px, base\@24 → 2 px,
display\@72 → 4.8 px. This mirrors SF Symbols' scale behaviour: small sizes get
relatively thicker, simplified strokes; large sizes relax to finer lines.

Authoring effort by tier: P0 = all three grades authored by hand. P1 = base +
micro authored, display derived (= base with display stroke). P2 = base
authored, micro and display derived. The registry records `authored: true|false`
per grade so coverage is auditable and upgradeable.

## 3. Layers and semantic color roles

Geometry is authored as **named layers** with hand-assigned roles — never
geometry heuristics. Roles: `primary` (the identity stroke), `secondary`
(supporting anatomy), `accent` (small emphasis: badge dot, water drop),
`container` (pot/frame/background shape).

- One silhouette across variants is structural: duotone and multicolor are pure
  color mappings over the same layer list; they cannot drift from the outline.
- Status semantics must survive every variant: a health icon's state glyph
  lives on its own layer and is preserved in solid via counters or badge.

## 4. Stroke grammar (what "hand-drawn but consistent" means)

- Terminals end at 0°, 45° or 90° except where anatomy demands otherwise;
  matching terminals across a glyph must match angles.
- Minimum stroke segment 2.5 px. **No near-zero-length "dot" dashes** (the v3
  `h.01` disease). Deliberate dots are circles with explicit radius ≥ 1.5.
- Corner radii: outer corners r=2, inner corners r=1, chosen per family and
  kept consistent across siblings (all garden tools share the same radii).
- Curves: single inflection per segment where possible; tangent-continuous
  joins; no tangent collisions (two strokes meeting at a near-tangent angle —
  see v3 garden.rake, family.apiaceae for the failure mode).
- Interior glyphs (check, !, ?) keep ≥ 2.5 px clearance from surrounding
  strokes at base grade, ≥ 3.5 at micro.
- Counter-examples (from `reports/v4-v3-audit.md`): wheelbarrow-as-shopping-
  cart (wrong anatomy), trowel-as-dagger (silhouette ambiguity), piperaceae-as-
  Mickey (blob anatomy), health solids as blank lenses (lost counters).

## 5. Variants

- `outline` — the master. `currentColor` stroke, no fill.
- `solid` — separately authored fill geometry sharing the outline's silhouette
  (silhouette IoU ≥ 0.90 enforced by raster gate). `fill-rule="evenodd"`, and
  the icon declares its intended counter count (`counters: n`); the raster gate
  flood-fills and fails on any accidental island. Identity details survive as
  counters (calendar date digit, camera lens, health state glyph) — a solid
  variant that erases identity is a defect, not a style.
- `duotone` — outline layers at two emphasis levels: `primary` layers at
  `currentColor`, all others at `currentColor` with `opacity="0.35"`. Pure
  mapping; no new geometry.
- `multicolor` — per-layer token colors (§6), hand-assigned per icon in the
  authoring module. Fills only where the solid variant fills.

## 6. Color tokens (multicolor + theming)

Tokens live in `tokens.json` as `role → { light, dark }`. SVGs emit the light
value plus `data-token="<name>"` on each colored node; catalogs and platform
adapters re-theme via the token table (web: CSS vars; iOS: dynamic Color;
Android: values / values-night).

Palette (light values): `leaf.700 #2E7D32`, `leaf.500 #43A047`,
`leaf.300 #A5D6A7`, `earth.600 #6D4C41`, `earth.400 #A1887F`,
`water.600 #1E88E5`, `water.300 #90CAF9`, `sun.500 #F9A825`,
`sun.300 #FDD835`, `bloom.500 #D81B60`, `ink.900 #263238`, `ink.500 #607D8B`,
`ink.300 #B0BEC5`, `status.success #2E7D32`, `status.warning #F9A825`,
`status.error #E53935`, `status.info #1E88E5`. Status colors are semantic and
never repurposed decoratively. Dark values lift lightness ~1 step
(e.g. leaf.700→#66BB6A) and are tuned on the dark contact sheet.

Tab-bar contrast rule: active state uses `leaf.700`/dark `leaf.300` (or the
platform accent); inactive uses `ink.500`/`ink.300`. Mono variants must read at
3:1 against both bar backgrounds at 16 px — verified in the tab-bar mock sheet.

## 7. Motion (P0 only)

Selection animation per P0 icon: 220–260 ms, easing `cubic-bezier(.2,0,.2,1)`,
transform/opacity/trim-path subset only (universal Lottie support), no layout
shift (animate within the 24-grid), `prefers-reduced-motion` → 150 ms opacity
crossfade. Specs live in `v4/src/animations.mjs`; compiled Lottie in
`v4/animations/<id>.json`; SwiftUI equivalents in
`PlantimIconV4Animations.swift`. P1/P2 do not animate.

## 8. File and registry model

```
design-tokens/icons/v4/
  DESIGN.md  tokens.json  sizes.json  tiers.json
  src/<category>.mjs      ← hand-authored geometry (one module per category)
  src/animations.mjs      ← P0 motion specs
  registry.v4.json        ← compiled, self-hashed (generated)
  index.v4.json           ← manifest for galleries/reports (generated)
  svg/<variant>/<id>@<size>.svg   ← 4 × 6 × N (generated)
  animations/<id>.json    ← compiled Lottie (generated)
```

Authoring DSL (in `src/*.mjs`): each icon exports
`{ id, tier, verdict, label, keywords, layers: { base: [...], micro?, display? }, solid: {...}, variants: {...}, provenance }`
using helpers from `../lib/v4-dsl.mjs` (`P(d)`, `C(cx,cy,r)`, `L(x1,y1,x2,y2)`,
`R(x,y,w,h,rx)`, all through `fmt()`). Determinism: no `Date.now`/`Math.random`
(grep-gated), sorted emission, hash-verified regeneration.

`registry.v4.json` records per icon: tier, verdict, provenance (v2/v3 ids),
per-grade `authored` flags, declared counters, variant color mappings,
animation refs, and geometry/svg hashes. Top level: `version: "4.0.0"`,
`derivedFrom` (v2 version+hash, v3 hash), global `sizes` table, resolved
tokens, `v4Hash` self-check (v3 pattern).

## 9. Gates (mechanical)

`check-v4-icons.mjs` (structural): hash integrity; id parity vs registry/tiers;
size-set completeness (4 variants × 6 sizes per icon); viewBox/coordinate
bounds; stroke width/caps/joins per grade; 3-decimal clamp; no `h.01` dashes;
duotone/multicolor layer-identity with outline; a11y metadata; token refs
resolve; regen determinism. `check-v4-raster.mjs`: solid-gap flood-fill
(islands == declared counters, ≥ 20 px² at 512²) and outline↔solid silhouette
IoU ≥ 0.90 (threshold tuned on P0; recorded here once final).

## 10. The loop (human)

Nothing ships on generator output alone. Per icon, per change:
`icons:v4` → `icons:v4:sheets` → inspect at 400/800% (all variants × 6 sizes ×
light/dark; P0 also in iOS/Material tab-bar mocks, active+inactive) → rework.
P0 minimum two full passes even if the first looks right. Category agents run
the same loop and hand sheets to the orchestrator for final sign-off.
