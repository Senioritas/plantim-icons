import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const registry = JSON.parse(
  fs.readFileSync(path.join(root, "design-tokens/icons/registry.json"), "utf8"),
);
const localeRoot = path.join(root, "locales");
const readPath = (object, key) => key.split(".").reduce((value, part) => value?.[part], object);
const statusKeys = [
  ...new Set(
    Object.values(registry.icons)
      .filter((icon) => icon.accessibility === "status")
      .map((icon) => icon.accessibilityLabelKey),
  ),
];

for (const file of fs.readdirSync(localeRoot).filter((name) => name.endsWith(".json"))) {
  const locale = JSON.parse(fs.readFileSync(path.join(localeRoot, file), "utf8"));
  for (const key of statusKeys)
    assert.equal(typeof readPath(locale, key), "string", `${file} is missing ${key}`);
}

console.log(`Status icon labels exist in every locale: ${statusKeys.length} keys.`);
