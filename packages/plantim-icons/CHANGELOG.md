# Changelog

All notable icon contract changes are recorded here. Geometry changes, removals,
renames, and accessibility changes require coordinated package releases.

## 2.3.0

- Grow the v4 icon set from 237 to 289 ids: loading-state placeholders
  (`placeholder.*`, `status.loading.dots`, `status.pending`, `status.offline`),
  25 plant profile avatars (`avatar.*`), and the specific cases the clients
  previously faked with a neighbouring glyph (`utility.download`, `utility.sort`,
  `utility.drag.handle`, `utility.qr.code`, `utility.external.link`,
  `utility.language`, `utility.camera.plus`, `calendar.add`, `plant.identify`,
  `plant.humidity`, `plant.light`, `plant.pet.safe`, `plant.pet.unsafe`,
  `care.misting`, `care.rotating`, `location.room`, `location.indoor`,
  `location.outdoor`). The v4 registry moves to 4.1.0; no existing id changes.
- Add `@plantim/icons/flags`: a `PlantimFlag` component and 14 tree-shakable
  flag modules in four shapes (`color`, `mono`, `circle`, `circle.mono`).
  Flags are a separate asset class with fixed colours, so they are not part of
  the semantic registry and never re-theme.
- Stop emitting micro and display grades that are byte-identical to base. The
  component already falls back to base, so rendering is unchanged while
  `dist/v4` shrinks from 846 KB (237 icons) to 786 KB (289 icons).
- Add localized accessibility labels for every new status, semantic and flag id
  in en, de and tr.

## 2.2.1

- Improve npm metadata and package discoverability.
- Expand the package README with installation, accessibility, v4 catalogue,
  tree-shaking, diagnostics, and compatibility guidance.

## 2.2.0

- Add the Plantim Icons v4 catalogue and 237-icon cross-platform icon set.
- Expose tree-shakable `@plantim/icons/v4` and `@plantim/icons/v4/icons/*`
  entry points with metadata and optical-size variants.
- Include the coordinated generated Vue and Swift adapter metadata for the
  v4 registry.

## 2.1.0

- Add the generated product navigation contract for shared Plantim surfaces.
- Export `@plantim/icons/navigation` with the product contract version and hash.
- Generate the equivalent `PlantimNavigation` Swift API.
- Add CI validation that prevents Vue and Swift surface mappings from drifting.

## 2.0.0

- Replaced Lucide-branded public IDs with Plantim-owned semantic `utility.*` IDs.
- Recorded former `lucide.*` IDs as registry-only migration aliases.
- Added release metadata and stricter generated-adapter validation.

## 1.0.0

- Initial semantic Plantim icon registry and generated Vue adapter.
# 2.0.1

- Replace the SwiftUI `Canvas` renderer with a native `Shape` renderer so
  semantic icons render reliably inside `TabView` and `Label` containers.
- Preserve the canonical geometry, accessibility contract, and public API.
