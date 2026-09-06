import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const root = path.resolve(import.meta.dirname, "../..");
const distRoot = path.join(root, "packages/plantim-icons/dist");
const entry = path.join(distRoot, "index.js");
const source = fs.readFileSync(entry);
const gzipBytes = zlib.gzipSync(source).byteLength;

function walk(dir, prefix = "") {
  const files = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const relative = prefix ? `${prefix}/${item.name}` : item.name;
    if (item.isDirectory()) files.push(...walk(path.join(dir, item.name), relative));
    else files.push(relative);
  }
  return files;
}

const distFiles = walk(distRoot);
const sizeOf = (file) => fs.statSync(path.join(distRoot, file)).size;

// Legacy (v2) budgets: numbers are frozen and scoped to the legacy dist files
// only. The additive ./v4 subpath (dist/v4/**) has its own budgets below and
// must never eat into the legacy allowance.
const legacyFiles = distFiles.filter((file) => !file.startsWith("v4/"));
const legacyBytes = legacyFiles.reduce((total, file) => total + sizeOf(file), 0);

assert.ok(source.byteLength <= 220 * 1024, `icon entry exceeds 220 KiB: ${source.byteLength} bytes`);
assert.ok(gzipBytes <= 30 * 1024, `gzipped icon entry exceeds 30 KiB: ${gzipBytes} bytes`);
assert.ok(legacyBytes <= 260 * 1024, `published dist exceeds 260 KiB: ${legacyBytes} bytes`);
assert.ok(distFiles.every((file) => !file.endsWith(".map")), "published dist must not contain source maps");

// v4 subpath budgets (additive; independent of the legacy numbers above).
const v4Files = distFiles.filter((file) => file.startsWith("v4/"));
assert.ok(v4Files.includes("v4/index.js"), "missing v4 entry: dist/v4/index.js");
const v4EntryGzip = zlib.gzipSync(fs.readFileSync(path.join(distRoot, "v4/index.js"))).byteLength;
assert.ok(v4EntryGzip <= 10 * 1024, `gzipped v4 entry exceeds 10 KiB: ${v4EntryGzip} bytes`);
for (const file of v4Files.filter((name) => name.startsWith("v4/icons/") && name.endsWith(".js"))) {
  const iconGzip = zlib.gzipSync(fs.readFileSync(path.join(distRoot, file))).byteLength;
  assert.ok(iconGzip <= 4 * 1024, `gzipped v4 icon module exceeds 4 KiB: ${file} (${iconGzip} bytes)`);
}
const v4Bytes = v4Files.reduce((total, file) => total + sizeOf(file), 0);
assert.ok(v4Bytes <= 1024 * 1024, `dist/v4 exceeds 1 MiB: ${v4Bytes} bytes`);

console.log(
  `Icon package size valid: entry ${source.byteLength} bytes (${gzipBytes} bytes gzip), legacy dist ${legacyBytes} bytes, v4 dist ${v4Bytes} bytes (entry ${v4EntryGzip} bytes gzip).`,
);
