# Plantim icon contract

`registry.json` is the only production source of icon geometry and semantic names.
Lucide names are implementation metadata; application code must use Plantim IDs.

The public contract is versioned. IDs are grouped by Plantim-owned namespaces:
`account`, `action`, `calendar`, `content`, `location`, `navigation`, `plant`,
`status`, `utility`, and `weather`. `lucide.*` is never a valid public ID.
Former Lucide IDs are registry-only aliases used to document migrations; adapters
do not expose them.

Regenerate every adapter from the repository root:

```sh
npm run icons:generate
npm run icons:check
npm run icons:accessibility
npm run icons:galleries
```

The generated Vue adapter is published as `@plantim/icons`. The generated SwiftUI
adapter is the `PlantimIcons` Swift package. Registry geometry changes require
visual review and a coordinated package version change.

Status icons have localized accessibility label keys in every supported locale.
They must not be the sole way an interface communicates state: provide visible
text or an explicit accessible label at the consuming control.

See [`governance.md`](governance.md) for naming, review, versioning, and release
requirements.
