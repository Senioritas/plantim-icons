import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = path.resolve(import.meta.dirname, "../..");
const registry = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/registry.json"), "utf8"));
const migrations = path.join(root, "MIGRATIONS.md");
assert.ok(fs.existsSync(migrations), "MIGRATIONS.md is required");

const expected = Object.values(registry.icons)
  .flatMap((icon) => (icon.aliases ?? []).map((alias) => `| \`${alias}\` | \`${icon.replacement ?? icon.id}\` |`))
  .sort();
const actual = fs.readFileSync(migrations, "utf8")
  .split("\n")
  .filter((line) => line.startsWith("| `") && line.endsWith(" |"))
  .map((line) => line.replace(/ \| (Migration alias|Deprecated) \|$/, " |"))
  .sort();
assert.deepEqual(actual, expected, "MIGRATIONS.md is stale; run npm run icons:migrations");

const generated = execFileSync(process.execPath, [path.join(root, "design-tokens/bin/generate-icon-migrations.mjs")], { encoding: "utf8" });
assert.match(generated, /Generated MIGRATIONS\.md/);
const regenerated = fs.readFileSync(migrations, "utf8");
assert.equal(regenerated, fs.readFileSync(migrations, "utf8"));
console.log(`Icon migration contract valid: ${expected.length} aliases.`);
