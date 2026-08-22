import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const currentPath = path.join(root, "design-tokens/icons/registry.json");
const previousPath = process.argv[2];

if (!previousPath) {
  console.error("Usage: node design-tokens/bin/diff-icon-registry.mjs <previous-registry.json>");
  process.exit(2);
}

const current = JSON.parse(fs.readFileSync(currentPath, "utf8"));
const previous = JSON.parse(fs.readFileSync(path.resolve(previousPath), "utf8"));
const currentIcons = new Map(Object.values(current.icons).map((icon) => [icon.id, icon]));
const previousIcons = new Map(Object.values(previous.icons).map((icon) => [icon.id, icon]));
let added = [...currentIcons.keys()].filter((id) => !previousIcons.has(id)).sort();
let removed = [...previousIcons.keys()].filter((id) => !currentIcons.has(id)).sort();
const renamed = [];
for (const [id, icon] of currentIcons) {
  if (previousIcons.has(id)) continue;
  const formerId = (icon.aliases ?? []).find((alias) => previousIcons.has(alias));
  if (formerId) renamed.push({ from: formerId, to: id });
}
if (renamed.length) {
  const renamedFrom = new Set(renamed.map((change) => change.from));
  const renamedTo = new Set(renamed.map((change) => change.to));
  added = added.filter((id) => !renamedTo.has(id));
  removed = removed.filter((id) => !renamedFrom.has(id));
}
const geometryChanged = [];
const accessibilityChanged = [];

for (const id of [...currentIcons.keys()].filter((key) => previousIcons.has(key)).sort()) {
  const before = previousIcons.get(id);
  const after = currentIcons.get(id);
  if (
    JSON.stringify({
      viewBox: before.viewBox,
      nodes: before.nodes,
      rendering: before.rendering,
    }) !==
    JSON.stringify({ viewBox: after.viewBox, nodes: after.nodes, rendering: after.rendering })
  )
    geometryChanged.push(id);
  if (JSON.stringify(before.accessibility) !== JSON.stringify(after.accessibility))
    accessibilityChanged.push(id);
}

const aliasChanged = [];
for (const id of [...currentIcons.keys()].filter((key) => previousIcons.has(key)).sort()) {
  if (JSON.stringify(previousIcons.get(id).aliases ?? []) !== JSON.stringify(currentIcons.get(id).aliases ?? []))
    aliasChanged.push(id);
}
const groups = { added, removed, renamed, geometryChanged, accessibilityChanged, aliasChanged };
const changed = Object.values(groups).some((items) => items.length);
console.log(
  JSON.stringify(
    {
      previousVersion: previous.version,
      currentVersion: current.version,
      previousHash: previous.registryHash,
      currentHash: current.registryHash,
      ...groups,
    },
    null,
    2,
  ),
);

if (changed && previous.version === current.version) {
  console.error("Icon registry changed without a version change.");
  process.exit(1);
}
