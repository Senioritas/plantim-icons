# Releasing Plantim Icons

Plantim Icons is released as coordinated npm and Swift Package Manager
artifacts. The registry version, npm package version, Swift package tag, and
registry hash must describe the same source state.

## Maintainer checklist

1. Update `design-tokens/icons/registry.json` and its `registryHash`.
2. Regenerate adapters, migrations, galleries, and metadata.
3. Update `packages/plantim-icons/CHANGELOG.md`.
4. Run `npm run icons:validate` and `npm run gallery:test`.
5. Review every gallery geometry change in light and dark appearances.
6. Merge the pull request after required CI and code-owner review pass.
7. Create the annotated tag `icons-v<version>` from the merged commit.
8. Push the tag. The release workflow validates Swift and publishes npm with
   provenance.
9. Create the matching SwiftPM tag `v<version>` if it is not created by the
   release automation.
10. Verify the npm tarball, provenance statement, registry hash, and SwiftPM
    resolution before updating consumers.

## Trusted publishing

The release workflow requests `id-token: write` and publishes with npm
provenance. For tokenless npm Trusted Publishing, configure the npm package's
trusted publisher to GitHub Actions with:

- repository: `Senioritas/plantim-icons`;
- workflow: `.github/workflows/icons-release.yml`;
- environment: none, unless the npm package is configured with one.

The release workflow is configured for tokenless Trusted Publishing and does
not use an `NPM_TOKEN` or `NODE_AUTH_TOKEN` fallback. Do not reintroduce a
long-lived npm token without a documented security review.

## Versioning

- Additive semantic icons are minor releases.
- Geometry, accessibility behavior, alias removal, renames, or public API
  changes are major releases.
- Documentation, generator, and CI-only changes are patches unless they alter
  published behavior.
- npm and Swift versions must match exactly.
