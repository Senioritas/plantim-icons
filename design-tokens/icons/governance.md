# Plantim icon governance

## Ownership

The design-system owner approves semantic meaning and visual changes. Web and
iOS owners approve adapter and product migration changes. A release requires
both platform checks and visual review of the generated galleries.

## Adding an icon

1. Reuse an existing semantic ID when it has the same meaning.
2. Choose a Plantim namespace; never expose Lucide or SF Symbol names.
3. Add normalized geometry and accessibility classification to `registry.json`.
4. Use a custom Plantim SVG only when Lucide geometry is not appropriate.
5. Regenerate adapters, update galleries, and add a changelog entry.

## Versioning

- Patch: documentation, build, or non-contract fixes.
- Minor: additive IDs with new geometry.
- Major: renamed/removed IDs, geometry changes, or accessibility behavior changes.

Aliases document migrations but are not public adapter API. Registry changes
must include a semantic diff and a visual review.

## Release checklist

- `npm run icons:check`, `icons:test`, `icons:accessibility`, and
  `icons:galleries` pass.
- Package API, size budget, and clean tarball checks pass.
- Swift package tests pass.
- Generated Vue and Swift adapters are committed.
- npm and Swift metadata version/hash match the registry.
- A reviewer approves light/dark, size, and accessibility gallery changes.
- Publish `@plantim/icons` with public access, npm provenance, and an
  organization account protected by 2FA.
