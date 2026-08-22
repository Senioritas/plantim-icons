# Contributing

1. Open an issue for new semantic meanings or geometry changes.
2. Choose a Plantim-owned namespace; never add SF Symbol or Lucide names as
   public IDs.
3. Update the canonical registry, regenerate all adapters, and update the
   changelog and galleries.
4. Run `npm run icons:validate` before opening a pull request.
5. Include visual review notes for geometry or accessibility changes.

New icons are additive minor releases. Renames, removals, geometry changes, and
accessibility behavior changes require a major release.
