// Additive self-check for the v3 set. Not wired into the required v2 validation chain.
// Verifies: v3Hash integrity, file counts, one <svg> root per file, valid hex colors,
// and that every idOverride still matches a real icon.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = path.resolve(import.meta.dirname, "..", "..");
const v3Dir = path.join(root, "design-tokens/icons/v3");
const registryPath = path.join(root, "design-tokens/icons/registry.json");

const errors = [];
const fail = (msg) => errors.push(msg);

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const palette = JSON.parse(fs.readFileSync(path.join(v3Dir, "palette.json"), "utf8"));
const v3 = JSON.parse(fs.readFileSync(path.join(v3Dir, "registry.v3.json"), "utf8"));
const manifest = JSON.parse(fs.readFileSync(path.join(v3Dir, "index.v3.json"), "utf8"));

// 1. v3Hash integrity.
const { v3Hash, ...payload } = v3;
const recomputed = crypto.createHash("sha256").update(JSON.stringify(payload)).digest("hex");
if (v3Hash !== recomputed) fail(`registry.v3.json hash mismatch (stale). Re-run generate-v3-icons.mjs.`);

// 2. Derived-from the current v2 registry.
if (v3.sourceRegistryHash !== registry.registryHash) {
  fail("v3 sourceRegistryHash does not match the current v2 registryHash — v3 is out of date.");
}

// 3. Counts line up with the v2 registry.
const expectedCount = Object.keys(registry.icons).length;
if (Object.keys(v3.icons).length !== expectedCount) fail(`registry.v3.json has ${Object.keys(v3.icons).length} icons, expected ${expectedCount}.`);
if (manifest.count !== expectedCount) fail(`index.v3.json count ${manifest.count} != ${expectedCount}.`);

const sizes = palette.sizes;
const hex = /^#[0-9A-Fa-f]{6}$/;

// 4. Every icon: files exist, single <svg> root, valid colors.
for (const [name, icon] of Object.entries(v3.icons)) {
  const master = path.join(v3Dir, "multicolor", `${icon.id}.svg`);
  if (!fs.existsSync(master)) fail(`${name}: missing multicolor/${icon.id}.svg`);
  else assertSvg(master, name);

  for (const size of sizes) {
    const file = path.join(v3Dir, "sizes", `${icon.id}@${size}.svg`);
    if (!fs.existsSync(file)) fail(`${name}: missing sizes/${icon.id}@${size}.svg`);
    else {
      assertSvg(file, `${name}@${size}`);
      const src = fs.readFileSync(file, "utf8");
      if (!src.includes(`width="${size}"`) || !src.includes(`height="${size}"`)) {
        fail(`${name}@${size}: width/height not ${size}.`);
      }
    }
  }

  for (const role of ["primary", "secondary", "accent", "bg"]) {
    if (!hex.test(icon.palette[role])) fail(`${name}: palette.${role} "${icon.palette[role]}" is not a #RRGGBB hex.`);
  }
  for (const node of icon.nodes) {
    if (!hex.test(node.color)) fail(`${name}: node color "${node.color}" is not a #RRGGBB hex.`);
    if (!["primary", "secondary", "accent"].includes(node.role)) fail(`${name}: unexpected node role "${node.role}".`);
  }
}

// 5. File-count totals (no stale files).
countFiles("multicolor", expectedCount);
countFiles("sizes", expectedCount * sizes.length);

// 6. Overrides all resolve.
const knownIds = new Set(Object.values(registry.icons).map((i) => i.id));
for (const id of Object.keys(palette.idOverrides ?? {})) {
  if (!knownIds.has(id)) fail(`palette idOverride "${id}" matches no icon.`);
}

function assertSvg(file, label) {
  const src = fs.readFileSync(file, "utf8");
  const opens = (src.match(/<svg\b/g) ?? []).length;
  const closes = (src.match(/<\/svg>/g) ?? []).length;
  if (opens !== 1 || closes !== 1) fail(`${label}: expected exactly one <svg> root (found ${opens}/${closes}).`);
}

function countFiles(dir, expected) {
  const found = fs.readdirSync(path.join(v3Dir, dir)).filter((f) => f.endsWith(".svg")).length;
  if (found !== expected) fail(`${dir}/ has ${found} svg files, expected ${expected}.`);
}

if (errors.length) {
  console.error(`v3 self-check FAILED with ${errors.length} problem(s):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(
  `v3 self-check passed: ${expectedCount} icons, ${expectedCount * (sizes.length + 1)} SVG files, hash OK.`,
);
