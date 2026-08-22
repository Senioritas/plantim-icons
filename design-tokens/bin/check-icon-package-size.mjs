import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const root = path.resolve(import.meta.dirname, "../..");
const entry = path.join(root, "packages/plantim-icons/dist/index.js");
const source = fs.readFileSync(entry);
const gzipBytes = zlib.gzipSync(source).byteLength;
const distFiles = fs.readdirSync(path.join(root, "packages/plantim-icons/dist"));
const distBytes = distFiles.reduce(
  (total, file) => total + fs.statSync(path.join(root, "packages/plantim-icons/dist", file)).size,
  0,
);

assert.ok(source.byteLength <= 220 * 1024, `icon entry exceeds 220 KiB: ${source.byteLength} bytes`);
assert.ok(gzipBytes <= 30 * 1024, `gzipped icon entry exceeds 30 KiB: ${gzipBytes} bytes`);
assert.ok(distBytes <= 260 * 1024, `published dist exceeds 260 KiB: ${distBytes} bytes`);
assert.ok(distFiles.every((file) => !file.endsWith(".map")), "published dist must not contain source maps");

console.log(`Icon package size valid: entry ${source.byteLength} bytes (${gzipBytes} bytes gzip), dist ${distBytes} bytes.`);
