# Cross-platform visual parity

Plantim icons are rendered by different engines: SVG in Vue and native SwiftUI
shapes on iOS. Identical raster pixels are therefore not a reliable contract;
anti-aliasing, color management, and text rendering can differ by browser,
operating system, simulator, and device scale.

The enforceable contract has two layers:

1. **Exact geometry parity.** The semantic ID, viewBox, node geometry, fill,
   stroke, stroke width, line cap, and line join must be identical. The
   generated `design-tokens/icons/parity-fixtures.json` records this contract
   and its per-icon geometry hashes.
2. **Approved visual parity.** Web and iOS galleries render the same fixture
   matrix and retain reviewed screenshots. Screenshot comparisons use a small
   documented tolerance for renderer anti-aliasing. Any geometry change requires
   a registry version change and explicit visual review.

The fixture matrix covers sizes 16, 20, 24, 32, and 48, light and dark color
schemes, and standard and increased contrast. Application components own color,
layout, and accessibility labels; the icon package owns geometry only.

## Change policy

- A geometry change updates the registry hash, fixture hashes, web snapshots,
  iOS snapshots, and package version.
- A new icon must appear in both generated galleries before release.
- An icon must not communicate status through color alone.
- Snapshot diffs caused only by a renderer or OS update require a recorded
  environment change and manual approval.
