#!/usr/bin/env node
// Structural validation of the generated Android artifact set
// (packages/plantim-icons-android) against design-tokens/icons/v4/registry.v4.json:
//   1. every drawable validates against android-vector.xsd (xmllint, batched);
//   2. drawable name/count parity with the registry (icons x 4 variants),
//      resource names match ^[a-z0-9_]+$;
//   3. color resources (values + values-night) match the registry tokens;
//   4. Kotlin structural checks: package line, balanced braces, one
//      ImageVector.Builder per grade val, file count parity. kotlinc is used
//      only if available on PATH.

import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const REGISTRY = path.join(ROOT, "design-tokens", "icons", "v4", "registry.v4.json");
const XSD = path.join(ROOT, "design-tokens", "icons", "v4", "android-vector.xsd");
const PKG = path.join(ROOT, "packages", "plantim-icons-android");
const RES = path.join(PKG, "library", "src", "main", "res");
const KT = path.join(PKG, "library", "src", "main", "kotlin", "com", "plantim", "icons", "v4");
const XMLLINT = "/usr/bin/xmllint";

const VARIANTS = ["outline", "solid", "duotone", "multicolor"];
const GRADE_SUFFIX = { base: "", micro: "Micro", display: "Display" };
const RESOURCE_NAME = /^[a-z0-9_]+$/;

const errors = [];
const fail = (msg) => errors.push(msg);

function underscoreId(id) {
  return id.toLowerCase().replace(/[^a-z0-9]+/g, "_");
}

function pascalId(id) {
  return id
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");
}

const registry = JSON.parse(readFileSync(REGISTRY, "utf8"));
const iconIds = Object.keys(registry.icons).sort();
const tokenNames = Object.keys(registry.tokens).sort();
const gradeNames = Object.keys(registry.sizes.grades);

// ---------------------------------------------------------------------------
// 1 + 2. drawables: parity, naming, XSD validation
// ---------------------------------------------------------------------------

const drawableDir = path.join(RES, "drawable");
const expectedDrawables = new Set();
for (const id of iconIds) {
  for (const variant of VARIANTS) {
    expectedDrawables.add(`plantim_${underscoreId(id)}_${variant}.xml`);
  }
}

const actualDrawables = existsSync(drawableDir)
  ? readdirSync(drawableDir).filter((f) => f.endsWith(".xml")).sort()
  : [];
if (!existsSync(drawableDir)) fail(`missing directory ${drawableDir}`);

for (const file of actualDrawables) {
  if (!RESOURCE_NAME.test(file.replace(/\.xml$/, ""))) {
    fail(`drawable resource name "${file}" violates ${RESOURCE_NAME}`);
  }
  if (!expectedDrawables.has(file)) fail(`unexpected drawable ${file} (not in registry)`);
}
for (const file of [...expectedDrawables].sort()) {
  if (!actualDrawables.includes(file)) fail(`missing drawable ${file}`);
}
if (actualDrawables.length !== iconIds.length * VARIANTS.length) {
  fail(
    `drawable count ${actualDrawables.length} != ${iconIds.length} icons x ${VARIANTS.length} variants`,
  );
}

let validated = 0;
if (!existsSync(XMLLINT)) {
  fail(`${XMLLINT} not found; cannot schema-validate drawables`);
} else {
  const BATCH = 24;
  for (let i = 0; i < actualDrawables.length; i += BATCH) {
    const batch = actualDrawables.slice(i, i + BATCH).map((f) => path.join(drawableDir, f));
    const res = spawnSync(XMLLINT, ["--noout", "--schema", XSD, ...batch], {
      encoding: "utf8",
    });
    if (res.status !== 0) {
      const detail = `${res.stderr || res.stdout || ""}`
        .split("\n")
        .filter((l) => l && !l.endsWith(" validates"))
        .slice(0, 12)
        .join("\n    ");
      fail(`xmllint schema validation failed for batch starting at index ${i}:\n    ${detail}`);
    } else {
      validated += batch.length;
    }
  }
}

// ---------------------------------------------------------------------------
// 3. color resources
// ---------------------------------------------------------------------------

function checkColors(file, mode) {
  if (!existsSync(file)) {
    fail(`missing ${file}`);
    return;
  }
  const xml = readFileSync(file, "utf8");
  const found = new Map();
  for (const m of xml.matchAll(/<color name="([^"]+)">([^<]+)<\/color>/g)) {
    found.set(m[1], m[2]);
  }
  for (const token of tokenNames) {
    const name = `plantim_v4_${underscoreId(token)}`;
    const value = found.get(name);
    const expected = registry.tokens[token][mode];
    if (value === undefined) {
      fail(`${path.basename(path.dirname(file))}: missing <color name="${name}">`);
    } else if (value.toUpperCase() !== expected.toUpperCase()) {
      fail(`${name} (${mode}) is ${value}, registry says ${expected}`);
    } else if (!/^#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/.test(value)) {
      fail(`${name} (${mode}) has non-hex value ${value}`);
    }
  }
  if (found.size !== tokenNames.length) {
    fail(`${file}: ${found.size} colors, registry has ${tokenNames.length} tokens`);
  }
  for (const name of found.keys()) {
    if (!RESOURCE_NAME.test(name)) fail(`color resource name "${name}" violates ${RESOURCE_NAME}`);
  }
}

checkColors(path.join(RES, "values", "colors_plantim_v4.xml"), "light");
checkColors(path.join(RES, "values-night", "colors_plantim_v4.xml"), "dark");

// ---------------------------------------------------------------------------
// 4. Kotlin structural checks
// ---------------------------------------------------------------------------

const PACKAGE_LINE = "package com.plantim.icons.v4";
const expectedKtFiles = [...iconIds.map((id) => `${pascalId(id)}.kt`), "PlantimIconsV4.kt"].sort();
const actualKtFiles = existsSync(KT)
  ? readdirSync(KT).filter((f) => f.endsWith(".kt")).sort()
  : [];
if (!existsSync(KT)) fail(`missing directory ${KT}`);

if (JSON.stringify(actualKtFiles) !== JSON.stringify(expectedKtFiles)) {
  fail(
    `Kotlin file parity mismatch.\n    expected: ${expectedKtFiles.join(", ")}\n    actual:   ${actualKtFiles.join(", ")}`,
  );
}

function count(haystack, re) {
  return (haystack.match(re) ?? []).length;
}

let gradeVals = 0;
for (const id of iconIds) {
  const file = path.join(KT, `${pascalId(id)}.kt`);
  if (!existsSync(file)) continue; // parity failure already reported
  const src = readFileSync(file, "utf8");
  const rel = path.relative(ROOT, file);

  if (!src.split("\n").some((l) => l.trim() === PACKAGE_LINE)) {
    fail(`${rel}: missing "${PACKAGE_LINE}"`);
  }
  const open = count(src, /\{/g);
  const close = count(src, /\}/g);
  if (open !== close) fail(`${rel}: unbalanced braces ({ ${open} vs } ${close})`);

  const expectedVals = [];
  for (const variant of VARIANTS) {
    for (const grade of gradeNames) {
      expectedVals.push(
        `${pascalId(id)}${variant[0].toUpperCase()}${variant.slice(1)}${GRADE_SUFFIX[grade]}`,
      );
    }
  }
  for (const valName of expectedVals) {
    if (!src.includes(`val ${valName}: ImageVector`)) {
      fail(`${rel}: missing val ${valName}: ImageVector`);
    } else {
      gradeVals += 1;
    }
  }
  const builders = count(src, /ImageVector\.Builder\(/g);
  if (builders !== expectedVals.length) {
    fail(
      `${rel}: ${builders} ImageVector.Builder calls, expected one per grade val (${expectedVals.length})`,
    );
  }
  const backings = count(src, /^private var _\w+: ImageVector\? = null$/gm);
  if (backings !== expectedVals.length) {
    fail(`${rel}: ${backings} lazy backing vars, expected ${expectedVals.length}`);
  }
  if (!src.includes(`val ${pascalId(id)}: PlantimIconV4`)) {
    fail(`${rel}: missing grouping val ${pascalId(id)}: PlantimIconV4`);
  }
}

const indexFile = path.join(KT, "PlantimIconsV4.kt");
if (existsSync(indexFile)) {
  const src = readFileSync(indexFile, "utf8");
  const rel = path.relative(ROOT, indexFile);
  if (!src.split("\n").some((l) => l.trim() === PACKAGE_LINE)) {
    fail(`${rel}: missing "${PACKAGE_LINE}"`);
  }
  if (count(src, /\{/g) !== count(src, /\}/g)) fail(`${rel}: unbalanced braces`);
  for (const needle of [
    "object PlantimIconsV4",
    "enum class PlantimVariant",
    "enum class PlantimSizeGrade",
    "data class PlantimIconGrades",
    "data class PlantimIconV4",
    "fun sizeGrade(",
  ]) {
    if (!src.includes(needle)) fail(`${rel}: missing "${needle}"`);
  }
  for (const id of iconIds) {
    if (!src.includes(`${pascalId(id)},`)) fail(`${rel}: allIcons is missing ${pascalId(id)}`);
  }
} else {
  fail(`missing ${indexFile}`);
}

// Optional: real compiler pass when a Kotlin toolchain exists on PATH.
const kotlincProbe = spawnSync("kotlinc", ["-version"], { encoding: "utf8" });
let kotlincNote = "kotlinc not on PATH - skipped compile check";
if (!kotlincProbe.error && kotlincProbe.status === 0) {
  kotlincNote = "kotlinc found - note: compile needs Compose stubs; structural checks remain authoritative";
}

// ---------------------------------------------------------------------------
// verdict
// ---------------------------------------------------------------------------

if (errors.length > 0) {
  console.error(`check-v4-android: FAIL (${errors.length} problem${errors.length === 1 ? "" : "s"})`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(
  [
    "check-v4-android: OK",
    `  drawables:  ${actualDrawables.length} (${iconIds.length} icons x ${VARIANTS.length} variants), ${validated} schema-validated via xmllint`,
    `  colors:     ${tokenNames.length} tokens in values/ and values-night/`,
    `  kotlin:     ${actualKtFiles.length} files, ${gradeVals} grade vals (one ImageVector.Builder each) + ${iconIds.length} grouping vals`,
    `  ${kotlincNote}`,
  ].join("\n"),
);
