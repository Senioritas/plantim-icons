# Plantim Icons v4 — Android artifact set

Generated Android resources and Jetpack Compose sources for the Plantim v4
icon set. There is no Android client yet: this package is the future artifact
set, produced from the canonical registry at
`design-tokens/icons/v4/registry.v4.json` by
`design-tokens/bin/generate-v4-android.mjs` and validated by
`design-tokens/bin/check-v4-android.mjs` (root script: `npm run icons:v4:android`).

Everything under `library/src` is generated — do not edit by hand; edit the
registry sources and regenerate.

## Layout

```
library/src/main/
  res/drawable/plantim_<id>_<variant>.xml   VectorDrawables, base grade, 24dp
  res/values/colors_plantim_v4.xml          light token colors
  res/values-night/colors_plantim_v4.xml    dark token colors
  kotlin/com/plantim/icons/v4/<PascalId>.kt Compose ImageVectors, all grades
  kotlin/com/plantim/icons/v4/PlantimIconsV4.kt  index object + enums
```

## How a future Android client consumes this

- **Copy-in module (today):** copy `library/src/main` into an Android library
  module (e.g. `:plantim-icons`) of the app repo. The Kotlin sources need only
  `androidx.compose.ui:ui` (they use `ImageVector.Builder` directly, no
  material-icons dependency). The XML drawables and color resources need no
  dependency at all.
- **Maven artifact (future):** the same tree becomes the `main` source set of a
  published AAR; the generator output is already shaped as a library source
  set, so only a `build.gradle.kts` and manifest need to be added at release
  time.

## Naming scheme

| Thing | Pattern | Example |
|---|---|---|
| Drawable | `plantim_<id_underscored>_<variant>` | `plantim_account_user_outline` |
| Color | `plantim_v4_<token_underscored>` | `plantim_v4_leaf_700` |
| Compose val | `<PascalId><Variant>[<Grade>]` | `AccountUserOutline`, `AccountUserSolidMicro` |
| Grouping val | `<PascalId>` (`PlantimIconV4`) | `AccountUser` |

Variants: `outline`, `solid`, `duotone`, `multicolor`. Grades: base (no
suffix), `Micro`, `Display`. Drawables ship the **base grade only**; Compose
vals cover all three grades.

## Variant semantics

- `outline` / `solid` — drawn in `#FF000000`; tint them (see below). Solids are
  `evenOdd` fills; line-only icons ("bold" solids) are the outline geometry at
  a heavier stroke.
- `duotone` — single color; non-primary layers at 35% alpha.
- `multicolor` — XML strokes reference `@color/plantim_v4_*`, so they re-theme
  automatically in dark mode via `values-night`. The Compose multicolor vals
  bake the **light** palette (an `ImageVector` cannot resolve resources); for a
  dark-aware multicolor icon prefer the XML drawable, or map tokens yourself.

## Tinting

- **Views/XML:** `android:tint="?attr/colorControlNormal"` on the
  `ImageView`/drawable, or `ImageViewCompat.setImageTintList(...)`. Outline,
  solid and duotone are template icons drawn in black precisely so tint fully
  recolors them.
- **Compose:** `Icon(PlantimIconsV4.byId("account.user")!!.outline.base,
  contentDescription = null, tint = MaterialTheme.colorScheme.onSurface)` —
  or any `ImageVector` val directly, e.g. `Icon(AccountUserOutline, ...)`.

## Dark mode

Token colors live once per mode: `values/colors_plantim_v4.xml` (light) and
`values-night/colors_plantim_v4.xml` (dark). Multicolor drawables switch
automatically with the system theme. Tinted (mono) variants follow whatever
theme color you tint them with.

## Material 3 usage

Bottom navigation / navigation bar at 24 dp: use the **outline** drawable for
the inactive state and **solid** for the active state, e.g.

```xml
<item android:state_checked="false" android:drawable="@drawable/plantim_navigation_home_outline"/>
<item android:state_checked="true"  android:drawable="@drawable/plantim_navigation_home_solid"/>
```

In Compose, pick `NavigationHomeOutline` / `NavigationHomeSolid` per
`selected`. Colors come from the M3 `NavigationBarItemDefaults` tints.

## Size grades (`sizeGrade` rule)

Three authored optical grades map onto six rendered sizes; sizes inside a
grade differ only by raster scale:

| grade | render at (dp) | stroke (24-grid) |
|---|---|---|
| Micro | 16, 20 | 2.4 |
| Base | 24, 32 | 2.0 |
| Display | 48, 72 | 1.6 |

`PlantimIconsV4.sizeGrade(sizeDp)` picks the grade for an arbitrary dp size
(≤ 20 → Micro, ≤ 32 → Base, else Display):

```kotlin
val grade = PlantimIconsV4.sizeGrade(sizeDp = 18)          // Micro
val vector = AccountUser.imageVector(PlantimVariant.Outline, grade)
Icon(vector, contentDescription = null, modifier = Modifier.size(18.dp))
```

All `ImageVector`s use the 24-unit viewport; grades change geometry and stroke
weight, not the viewport, so `Modifier.size(...)` scales them like any icon.
