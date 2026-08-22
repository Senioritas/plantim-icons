# Plantim Icons — v3 (multi-color + multi-size showcase)

v3 is an **additive** set built *alongside* the governed v2 registry. It does not modify v2, the
published `@plantim/icons` npm package, the SwiftUI package, or any existing CI check. It exists to:

1. give every icon **three baked sizes** — 24 / 48 / 72 px (1×/2×/3×), exposed via a `sizes` property;
2. give every icon **one multi-color SVG** using a systematic, category-based palette;
3. serve as a trusted, human-inspectable foundation and a portfolio showcase before the Android MVP.

## Source of truth

v3 geometry is **derived from v2** — `design-tokens/icons/registry.json` remains the single geometry
source, so v3 can never drift from v2. The only hand-authored v3 input is:

- **`palette.json`** — the category → color mapping, size set, stroke policy, node-role rules, and a
  small semantic override table (e.g. `weather.sun` → amber, `utility.flame` → orange).

Everything else is **generated** and should not be hand-edited:

- `registry.v3.json` — superset per icon: v2 geometry + per-node `role`/`color` + `sizes`. Carries
  `derivedFrom`, `sourceRegistryHash` (the v2 hash it was built from), and its own `v3Hash`.
- `index.v3.json` — lightweight manifest (ids, categories, palette, file paths per icon).
- `multicolor/<id>.svg` — the colored 24×24 master for each icon.
- `sizes/<id>@24.svg`, `sizes/<id>@48.svg`, `sizes/<id>@72.svg` — one file per size.

## The multicolor transform

Icons are monochrome line art (`stroke="currentColor"`). Each node is assigned a **role**, then a
**color** from the icon's category palette (first match wins):

1. **accent** — a point/dot: a `circle` with `r ≤ 2`, a near-zero-length `line` (e.g. `x1=12 x2=12.01`,
   how Lucide draws alert dots), or a tiny dot `path` (`d` contains `.01` and is very short).
2. **secondary** — a container/frame: `rect`, `ellipse`, or `circle` with `r ≥ 8` (outer rings).
3. **primary** (default) — the main glyph strokes.

Adjustments: if an icon would have *no* primary node (e.g. an all-rectangle grid), its secondary
nodes are promoted to primary so it is never fully muted. `plant` icons use **stem two-tone** — the
first glyph stroke (stem/spine) is primary, the remaining strokes (foliage) are secondary. Categories
flagged `containerTint` also render a faint `bg`-filled disc/rect behind container nodes. `status`
icons keep **semantic color** (success green, warning amber, error red, info blue).

## Regenerate

```bash
node design-tokens/bin/generate-v3-icons.mjs     # svgs + registry.v3.json + index.v3.json
node design-tokens/bin/check-v3-icons.mjs         # optional self-check (hash, counts, coverage)
```

Generation is deterministic (no timestamps, stable ordering), so re-running produces a byte-identical
tree — `git diff --exit-code design-tokens/icons/v3` is a valid drift check.

## Reports (portfolio)

```bash
node design-tokens/bin/generate-v3-report.mjs     # reports/plantim-icons-v3-report.pdf  (process log)
node design-tokens/bin/generate-v3-catalog.mjs    # reports/plantim-icons-v3-catalog.pdf (visual catalog)
```
