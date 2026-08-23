# Plantim icon visual parity specification

This document is the acceptance contract for the 154 icons shared by Vue and
SwiftUI. The canonical registry owns geometry; application code owns layout,
color semantics, and accessible wording.

## Exact contract

For every semantic ID, web and iOS must use the same:

- semantic ID and registry hash;
- SVG node order, node type, and normalized attributes;
- `viewBox`;
- fill, stroke, stroke width, line cap, line join, and fill rule;
- explicit filled/outline variant (never a platform substitution).

The canonical geometry comparison is exact: zero unexplained differences are
allowed. Each icon is represented by a generated fixture in
`design-tokens/icons/parity-fixtures.json`; fixtures must never be edited by
hand.

## Rendering matrix

The generated matrix covers sizes 16, 20, 24, 32, and 48 points/pixels;
light and dark schemes; standard and increased contrast; normal and emphasized
stroke; and decorative and named-accessible wrapper behavior. The web gallery
uses a fixed viewport and disables motion. iOS snapshots pin the device,
locale, Dynamic Type, color scheme, contrast, and scale.

## Tolerance policy

Raster pixels are not required to be identical across Chromium and SwiftUI:
anti-aliasing, color management, device scale, and text rendering differ.
Isolated icon cells are compared before full product screens. Approved raster
comparison uses a maximum 1.5% changed-pixel ratio and 97% perceptual
precision; any difference above that threshold is a failure. Geometry, registry
hash, or alignment differences are never accepted as anti-aliasing.

## Ownership and approval

- The registry and generated adapters are the source of truth.
- The npm and Swift adapters are generated artifacts and must be committed.
- Component wrappers own size, color inheritance, accessibility labels, and
  decorative behavior.
- Geometry changes require a registry version change, regenerated fixtures,
  web and iOS snapshot review, and a maintainer approval.
- Metadata-only changes require an accessibility review and do not alter
  geometry hashes.
- New icons require registry validation, fixture coverage, gallery coverage,
  accessibility metadata, and critical-flow coverage before release.

## Review evidence

Every visual-change PR must include the registry hash, changed semantic IDs,
geometry hashes, the web screenshot diff, the iOS snapshot diff, and the
rendering environment. Unexplained differences block merge.
