# @plantim/icons

[![npm version](https://img.shields.io/npm/v/@plantim/icons?logo=npm)](https://www.npmjs.com/package/@plantim/icons)
[![CI](https://github.com/Senioritas/plantim-icons/actions/workflows/ci.yml/badge.svg)](https://github.com/Senioritas/plantim-icons/actions/workflows/ci.yml)

Plantim's tree-shakeable semantic icon library for Vue 3. Use stable
Plantim-owned names such as `navigation.back`, `action.delete`,
`plant.watering`, and `status.warning` instead of coupling application code to
Lucide names or raw SVG geometry.

## Install

```sh
npm install @plantim/icons
```

Vue 3 is a peer dependency, so the consuming application must provide it.

## Quick start

```vue
<script setup lang="ts">
import { PlantimIcon } from "@plantim/icons";
</script>

<template>
  <PlantimIcon name="plant.watering" :size="24" title="Watering needed" />
  <PlantimIcon name="navigation.back" :size="20" decorative />
</template>
```

Icons are decorative by default unless they have a `title`. Use `title` when
the icon communicates meaning without adjacent text; use `decorative` when the
icon is visual support for a visible label. The component renders semantic
SVG attributes for labelled icons and hides decorative icons from assistive
technology.

## Public entry points

| Import | Use |
| --- | --- |
| `@plantim/icons` | Stable semantic Vue icon component and runtime-safe name helpers |
| `@plantim/icons/metadata` | Accessibility metadata, registry version, and registry hash |
| `@plantim/icons/navigation` | Shared Feed, Garden, Calendar, Chat, and Profile assignments |
| `@plantim/icons/v4` | The v4 renderer, variants, tokens, and 237-icon catalogue |
| `@plantim/icons/v4/icons/<id>` | Tree-shakable v4 icon definitions, for example `plant.sprout` |
| `@plantim/icons/v4/metadata` | v4 labels, tiers, variants, and animation metadata |

The root entry point is the compatibility surface. The v4 catalogue is
additive and is intentionally isolated behind `@plantim/icons/v4`.

## Type-safe dynamic names

```ts
import {
  PLANTIM_ICON_NAMES,
  isPlantimIconName,
  type PlantimIconName,
} from "@plantim/icons";

const nameFromApi: string = "status.warning";
const name: PlantimIconName | undefined = isPlantimIconName(nameFromApi)
  ? nameFromApi
  : undefined;

console.log(PLANTIM_ICON_NAMES.length, name);
```

`isPlantimIconName` is the runtime guard for untrusted strings. The canonical
name list is frozen and the raw SVG registry is not part of the public API.

## v4 catalogue

v4 provides four visual variants (`outline`, `solid`, `duotone`, and
`multicolor`) and optical-size grades for 16, 20, 24, 32, 48, and 72 pixels.
Use the catalogue renderer when you need those variants:

```vue
<script setup lang="ts">
import { PlantimIconV4 } from "@plantim/icons/v4";
import { PlantSprout } from "@plantim/icons/v4/icons/plant.sprout";
</script>

<template>
  <PlantimIconV4
    :icon="PlantSprout"
    variant="multicolor"
    :size="32"
    title="Growing plant"
  />
</template>
```

Importing a specific v4 definition keeps unused icon modules out of a modern
bundler's output. The v4 metadata export is useful for catalogues, diagnostics,
and approved product pickers; it does not expose raw SVG nodes.

## Shared navigation

```ts
import { PlantimNavigation } from "@plantim/icons/navigation";

PlantimNavigation.feed.icon; // "utility.activity"
PlantimNavigation.garden.icon;
```

Web and SwiftUI adapters are generated from one product contract. Bind shared
surfaces through this export instead of duplicating icon assignments in each
client.

## Runtime diagnostics

```ts
import {
  PLANTIM_ICON_METADATA,
  PLANTIM_ICONS_REGISTRY_HASH,
  PLANTIM_ICONS_VERSION,
} from "@plantim/icons/metadata";

console.log({
  version: PLANTIM_ICONS_VERSION,
  registryHash: PLANTIM_ICONS_REGISTRY_HASH,
  warning: PLANTIM_ICON_METADATA["status.warning"],
});
```

Record the version and registry hash with client diagnostics when coordinating
web and native releases. Geometry, semantic IDs, accessibility metadata, and
the generated Swift adapter are released as one contract.

## Compatibility

- Vue consumer: Vue 3.0 or newer
- Runtime: modern ESM-capable browsers or Node.js
- Package tooling: Node.js 22.18+ and npm 11.12+
- Package format: ESM-only

Applications should pin the exact package version used by their coordinated
Swift release. The package has no runtime dependency on Lucide; Lucide is a
generator-only input and its names are not part of the public API.

## Contributing and licensing

The canonical registry is
[`design-tokens/icons/registry.json`](https://github.com/Senioritas/plantim-icons/blob/main/design-tokens/icons/registry.json).
Generated adapters must be regenerated and committed after registry changes.
See the repository's [governance](https://github.com/Senioritas/plantim-icons/blob/main/design-tokens/icons/governance.md),
[security policy](https://github.com/Senioritas/plantim-icons/blob/main/SECURITY.md),
and [changelog](./CHANGELOG.md).

The package is MIT-licensed. Lucide-derived geometry remains attributed in
[`NOTICE`](./NOTICE).
