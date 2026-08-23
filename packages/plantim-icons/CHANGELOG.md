# Changelog

All notable icon contract changes are recorded here. Geometry changes, removals,
renames, and accessibility changes require coordinated package releases.

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
