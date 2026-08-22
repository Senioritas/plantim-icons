import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const registryPath = path.join(root, "design-tokens/icons/registry.json");
const outputPath = path.join(root, "MIGRATIONS.md");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));

const rows = Object.values(registry.icons)
  .flatMap((icon) => (icon.aliases ?? []).map((alias) => ({ alias, id: icon.id, deprecated: icon.deprecated ?? false, replacement: icon.replacement })))
  .sort((a, b) => a.alias.localeCompare(b.alias));

const body = [
  "# Icon migrations",
  "",
  `Generated from \`design-tokens/icons/registry.json\` for registry ${registry.version} (${registry.registryHash}).`,
  "",
  "Semantic IDs are the only supported application API. Aliases are compatibility references for migration tooling and must not be added to new product code.",
  "",
  "## Compatibility aliases",
  "",
  "| Legacy/source reference | Canonical semantic ID | Status |",
  "| --- | --- | --- |",
  ...rows.map(({ alias, id, deprecated, replacement }) => `| \`${alias}\` | \`${replacement ?? id}\` | ${deprecated ? "Deprecated" : "Migration alias"} |`),
  "",
  "## Policy",
  "",
  "- New code uses canonical semantic IDs only.",
  "- An alias may remain during a migration, but it must point to exactly one canonical ID.",
  "- Renames and removals require a major release and an entry here with a documented replacement.",
  "- Geometry changes are not aliases: they require visual review, registry hash change, and coordinated npm/Swift release.",
  "",
].join("\n");

fs.writeFileSync(outputPath, body);
console.log(`Generated ${path.relative(root, outputPath)} with ${rows.length} compatibility aliases.`);
