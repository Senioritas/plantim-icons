import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const fixturePath = path.join(root, "design-tokens/icons/parity-fixtures.json");
const fixture = JSON.parse(fs.readFileSync(fixturePath, "utf8"));
const args = new Map();
for (let index = 2; index < process.argv.length; index += 2) args.set(process.argv[index], process.argv[index + 1]);

const readJson = (name) => {
  const file = args.get(name);
  return file ? JSON.parse(fs.readFileSync(path.resolve(process.cwd(), file), "utf8")) : null;
};

const web = readJson("--web");
const ios = readJson("--ios");
const report = {
  schemaVersion: "1.0.0",
  registryHash: fixture.registryHash,
  iconCount: fixture.iconCount,
  thresholds: { maxDiffPixelRatio: 0.015, minPerceptualPrecision: 0.97 },
  classifications: [],
};

const byId = (value) => new Map((value?.icons ?? []).map((icon) => [icon.id, icon]));
const webById = byId(web);
const iosById = byId(ios);
for (const expected of fixture.icons) {
  const webIcon = webById.get(expected.id);
  const iosIcon = iosById.get(expected.id);
  if (!webIcon || !iosIcon) {
    report.classifications.push({ id: expected.id, classification: "geometry mismatch", reason: "missing platform fixture" });
    continue;
  }
  if (webIcon.registryHash !== fixture.registryHash || iosIcon.registryHash !== fixture.registryHash) {
    report.classifications.push({ id: expected.id, classification: "geometry mismatch", reason: "registry hash mismatch" });
  } else if (webIcon.geometryHash !== expected.geometryHash || iosIcon.geometryHash !== expected.geometryHash) {
    report.classifications.push({ id: expected.id, classification: "geometry mismatch", reason: "geometry hash mismatch" });
  } else if (webIcon.viewBox !== expected.viewBox || iosIcon.viewBox !== expected.viewBox) {
    report.classifications.push({ id: expected.id, classification: "alignment mismatch", reason: "viewBox mismatch" });
  } else {
    report.classifications.push({ id: expected.id, classification: "exact geometry parity" });
  }
}

const rasterInputs = [web, ios].flatMap((value) => value?.raster ?? []);
for (const sample of rasterInputs) {
  const ratio = Number(sample.changedPixelRatio ?? 0);
  const precision = Number(sample.perceptualPrecision ?? 1);
  const classification = ratio > report.thresholds.maxDiffPixelRatio
    ? "platform rendering difference"
    : precision < report.thresholds.minPerceptualPrecision
      ? "anti-aliasing-only difference"
      : "approved perceptual parity";
  report.classifications.push({ id: sample.id, sample: sample.name, classification, changedPixelRatio: ratio, perceptualPrecision: precision });
}

const failures = report.classifications.filter((item) => ["geometry mismatch", "stroke mismatch", "alignment mismatch", "color mismatch"].includes(item.classification));
const output = args.get("--report");
if (output) fs.writeFileSync(path.resolve(process.cwd(), output), `${JSON.stringify(report, null, 2)}\n`);
console.log(`Icon parity report: ${fixture.iconCount} canonical icons, ${failures.length} exact-contract failures.`);
if (failures.length) process.exit(1);
