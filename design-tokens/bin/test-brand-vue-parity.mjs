// Parity test for the ./brand npm subpath.
//
// Brand geometry is rendered twice: the build writes static SVGs through
// design-tokens/bin/lib/brand-render.mjs, and the published Vue component
// renders at runtime from the same registry. This test server-renders every
// mark in every variant/theme/size and compares the normalized markup against
// the committed SVG, so a consumer always sees the mark that was reviewed.

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createSSRApp, h } from "vue";
import { renderToString } from "vue/server-renderer";

const root = path.resolve(import.meta.dirname, "../..");
const brandRoot = path.join(root, "design-tokens/icons/brand");
const index = JSON.parse(fs.readFileSync(path.join(brandRoot, "index.brand.json"), "utf8"));
const registry = JSON.parse(fs.readFileSync(path.join(brandRoot, "registry.brand.json"), "utf8"));
const api = await import(path.join(root, "packages/plantim-icons/dist/brand/index.js"));
const metadata = await import(path.join(root, "packages/plantim-icons/dist/brand/metadata.js"));

const { PlantimBrand, PLANTIM_BRAND_NAMES, isPlantimBrandName, PLANTIM_BRAND_VERSION, PLANTIM_BRAND_HASH, plantimBrandGradeForSize } = api;

assert.equal(PLANTIM_BRAND_VERSION, registry.version, "brand entry version must match the registry");
assert.equal(PLANTIM_BRAND_HASH, registry.brandHash, "brand entry hash must match the registry");
assert.deepEqual(
  [...PLANTIM_BRAND_NAMES].sort(),
  Object.keys(registry.brands).map((id) => id.split(".")[1]).sort(),
  "exported names must match the registry",
);
assert.equal(isPlantimBrandName("plantim"), true);
assert.equal(isPlantimBrandName("twitter"), false);
assert.deepEqual(Object.keys(metadata.PLANTIM_BRAND_METADATA).sort(), [...PLANTIM_BRAND_NAMES].sort(), "metadata must cover every mark");
assert.equal(JSON.stringify(metadata.PLANTIM_BRAND_METADATA).includes('"grades"'), false, "metadata must stay free of geometry");
assert.equal(plantimBrandGradeForSize(16), "micro");
assert.equal(plantimBrandGradeForSize(32), "base");
assert.equal(plantimBrandGradeForSize(512), "display");
assert.equal(plantimBrandGradeForSize(1024), "display", "sizes beyond the table take the display grade");

/** Canonical element sequence for one SVG body (see test-flag-vue-parity.mjs). */
function canonical(svg) {
  const body = svg
    .replace(/<svg[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "")
    .replace(/<title>[^<]*<\/title>/g, "")
    .replace(/<([a-zA-Z][\w:-]*)((?:\s+[\w:-]+="[^"]*")*)\s*\/>/g, "<$1$2></$1>");
  const out = [];
  const element = /<(\/?)([a-zA-Z][\w:-]*)((?:\s+[\w:-]+="[^"]*")*)\s*>/g;
  let match;
  while ((match = element.exec(body))) {
    const [, closing, tag, attrString] = match;
    if (closing) {
      out.push(`</${tag}>`);
      continue;
    }
    const attrs = [...attrString.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, k, v]) => `${k}=${v}`).sort();
    out.push(`<${tag} ${attrs.join(" ")}>`);
  }
  assert.ok(out.length > 0, "canonical() parsed no elements");
  return out.join("");
}

const PROPS = {
  color: { variant: "color", theme: "light" },
  "color.dark": { variant: "color", theme: "dark" },
  mono: { variant: "mono" },
};

let compared = 0;
for (const entry of index.brands) {
  const name = entry.id.split(".")[1];
  const mark = (await import(path.join(root, `packages/plantim-icons/dist/brand/brands/${name}.js`))).default;
  assert.equal(mark.id, entry.id, `${name}: module default export must be the definition`);

  for (const [variant, sizes] of Object.entries(entry.files)) {
    for (const [size, rel] of Object.entries(sizes)) {
      const app = createSSRApp({
        render: () => h(PlantimBrand, { brand: mark, ...PROPS[variant], size: Number(size), title: mark.label }),
      });
      const rendered = await renderToString(app);
      const expected = fs.readFileSync(path.join(brandRoot, rel), "utf8");
      assert.equal(canonical(rendered), canonical(expected), `${entry.id} @${size} ${variant}: Vue render differs from ${rel}`);
      assert.ok(rendered.includes(`width="${size}"`), `${entry.id} @${size} ${variant}: wrong width`);
      compared += 1;
    }
  }
}

// Accessibility contract: a mark names its brand, and only opts out explicitly.
const google = (await import(path.join(root, "packages/plantim-icons/dist/brand/brands/google.js"))).default;
const decorative = await renderToString(createSSRApp({ render: () => h(PlantimBrand, { brand: google }) }));
assert.ok(decorative.includes('aria-hidden="true"'), "an untitled mark must be decorative");
assert.ok(!decorative.includes("<title>"), "an untitled mark must not emit a title");
const labelled = await renderToString(createSSRApp({ render: () => h(PlantimBrand, { brand: google, title: "Google" }) }));
assert.ok(labelled.includes('role="img"') && labelled.includes('aria-label="Google"'), "a titled mark must expose its name");

console.log(`Brand Vue parity valid: ${compared} renders match the generated SVGs across ${index.brands.length} marks.`);
