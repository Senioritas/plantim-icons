# @plantim/icons

Open-source semantic icon library for Plantim Vue applications.

The package is generated from the canonical registry at
`design-tokens/icons/registry.json`. Semantic IDs and geometry are the public
contract; Lucide names and source files are implementation details.

```vue
<script setup lang="ts">
import { PlantimIcon } from "@plantim/icons";
</script>

<PlantimIcon name="navigation.back" :size="20" decorative />
```

Use Plantim-owned semantic IDs such as `navigation.back`, `action.delete`,
`plant.watering`, `utility.camera`, and `status.warning`. Do not import
`lucide-vue-next` or depend on raw Lucide names in application code.

## Release contract

Registry geometry, semantic IDs, and accessibility metadata are versioned. A
geometry change requires visual review and a coordinated npm/Swift release.
The package is published as a public scoped package:

```sh
npm run icons:generate
npm run icons:test
npm run icons:package:check
npm publish --access public
```

The generated metadata export exposes the registry version and hash for runtime
diagnostics:

```ts
import { PLANTIM_ICON_METADATA, PLANTIM_ICONS_REGISTRY_HASH } from "@plantim/icons/metadata";

console.log(PLANTIM_ICONS_REGISTRY_HASH, PLANTIM_ICON_METADATA["status.warning"]);
```

The public API intentionally does not expose SVG nodes, Lucide component names,
or a mutable registry. Use `PlantimIconName`, `PLANTIM_ICON_NAMES`, and
`isPlantimIconName` for typed or runtime-safe semantic selection. Pass `title`
for an icon that conveys meaning without adjacent text; decorative icons remain
hidden from assistive technology by default.

## Consumer compatibility

The package is ESM-only, requires Node.js 22.18 or newer for tooling, and has
Vue 3 as a peer dependency. Applications should pin the exact package version
used by the coordinated Swift release and record the exported registry hash in
their diagnostics.
