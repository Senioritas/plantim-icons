# Plantim flags — an asset class, not semantic icons

`flag.*` ships alongside the v4 semantic icon set but is deliberately kept out
of it. The v4 registry guarantees four variants sharing one silhouette,
`currentColor` strokes and theme tokens. A flag has none of those properties:
its colours are fixed by vexillology, an "outline flag" is meaningless, and it
must not re-theme in dark mode. Forcing flags through the v4 gates would either
weaken those gates or produce wrong flags, so flags get their own DSL,
renderer, registry and gate with equivalent guarantees.

## Shapes

Two shapes, each in a colour and a mono treatment:

| variant | what it is | use it for |
| --- | --- | --- |
| `color` | the flag clipped to a 20×14 rounded rect at (2,5) on the 24-grid | settings rows, language lists |
| `mono` | rect frame plus partition lines in `currentColor` | tinted lists, inactive states, monochrome contexts |
| `circle` | the same flag cropped into the Ø18.5 disc the avatars use | locale chips, next to a profile picture |
| `circle.mono` | disc outline plus the same partitions | tinted circular contexts |

Both colour shapes carry a 12 % black hairline inset border, so white edges
(PL, AT, NL) keep a silhouette on light backgrounds and saturated fields stay
soft on dark ones. Dark mode is handled by that border, never by re-colouring.

The circular shapes scale the flag to cover the disc height (×1.321) and crop
the sides, which is the standard circle-flag treatment. Inside the scaled group
the mono stroke is divided by the scale, so it still renders at exactly the
grade weight.

## Sizes

The same six sizes and three optical grades as v4, read from
`design-tokens/icons/v4/sizes.json`, so a flag and an icon in one row are the
same height and the mono stroke matches the icon stroke. At the micro grade
(16/20 px) layers flagged `micro: false` drop — the US stars, the GB saltire,
the PT shield — and the EU stars grow so the ring closes.

## Simplification policy

No coats of arms (ES), seven stripes and eight stars (US), a single-layer
saltire (GB), the armillary sphere as three discs (PT). The goal is recognition
at 16 px, not heraldic accuracy. This is the policy every icon-size flag set
follows.

## Accessibility

Every flag is `semantic` and carries a localized label key
(`a11y.icons.flag.<code>`) present in every file under `locales/`. A language
picker announces "Deutschland", not "flag". The generator refuses to build if a
label is missing from any locale.

## Layout

```
flags/
  README.md
  src/flags.mjs           hand-authored, using design-tokens/bin/lib/flag-dsl.mjs
  registry.flags.json     compiled, self-hashed (generated)
  index.flags.json        manifest for catalogs and sheets (generated)
  svg/<variant>/<id>@<size>.svg    generated: 4 variants × 6 sizes per flag
```

## Commands

```sh
npm run icons:flags          # generate + gate + regenerate the npm subpath
npm run icons:flags:check    # structural gate only
npm run icons:flags:test     # Vue component vs generated SVG parity
npm run icons:flags:sheets   # contact sheets -> reports/v4-sheets/flags/
```

## Rules (enforced by `check-flag-icons.mjs`)

- Hash integrity and deterministic regeneration, as for the icon registry.
- Ids are `flag.<ISO 3166-1 alpha-2>`, plus `flag.eu` and `flag.unknown`.
- Geometry stays inside the 20×14 flag box; coordinates clamp to 3 decimals.
- Colours are uppercase 6-digit hex, authored per flag, never theme tokens.
  A colour shape may not contain `currentColor`; a mono shape must stroke it.
- Every flag keeps at least one layer at the micro grade.
- Every flag has a localized accessible name in every shipped locale.
- No flag id may collide with a v4 semantic icon id.

## Consuming

```ts
import { PlantimFlag } from "@plantim/icons/flags";
import FlagDe from "@plantim/icons/flags/de";

// <PlantimFlag :flag="FlagDe" variant="circle" :size="24" title="Deutschland" />
```

Per-flag modules are tree-shakable, so an app that shows three locales ships
three flags. `@plantim/icons/flags/metadata` exposes labels and label keys
without geometry.

## Adding a flag

One `flag()` call in `src/flags.mjs`, a label in every locale, then
`npm run icons:flags`. Nothing else is count-aware.

## Not yet shipped

iOS and Android flag adapters. The v4 semantic icons regenerate for both
platforms; flags are web-first in 4.1 because the Swift and Compose renderers
need a fixed-colour path that has not been written or compiled yet. Tracked in
the 4.1 release notes.
