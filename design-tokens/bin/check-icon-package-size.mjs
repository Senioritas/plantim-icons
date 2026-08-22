import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const root = path.resolve(import.meta.dirname, "../..");
const entry = path.join(root, "packages/plantim-icons/dist/index.js");
const source = fs.readFileSync(entry);
const gzipBytes = zlib.gzipSync(source).byteLength;

assert.ok(source.byteLength <= 220 * 1024, `icon entry exceeds 220 KiB: ${source.byteLength} bytes`);
assert.ok(gzipBytes <= 30 * 1024, `gzipped icon entry exceeds 30 KiB: ${gzipBytes} bytes`);

console.log(`Icon package size valid: ${source.byteLength} bytes (${gzipBytes} bytes gzip).`);
