// Parity test for the ./flags npm subpath.
//
// The flag geometry is rendered twice by two independent code paths: the build
// pipeline writes static SVGs through design-tokens/bin/lib/flag-render.mjs,
// and the published Vue component renders at runtime from the same registry.
// They must agree, or a consumer sees a different flag from the one that was
// reviewed. This test server-renders every flag in every variant and compares
// the normalized markup against the committed SVG.

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { createSSRApp, h } from "vue";
import { renderToString } from "vue/server-renderer";

const root = path.resolve(import.meta.dirname, "../..");
const flagsRoot = path.join(root, "design-tokens/icons/flags");
const index = JSON.parse(fs.readFileSync(path.join(flagsRoot, "index.flags.json"), "utf8"));
const api = await import(path.join(root, "packages/plantim-icons/dist/flags/index.js"));
const metadata = await import(path.join(root, "packages/plantim-icons/dist/flags/metadata.js"));

const { PlantimFlag, PLANTIM_FLAG_CODES, isPlantimFlagCode, PLANTIM_FLAGS_VERSION, PLANTIM_FLAGS_HASH } = api;
const registry = JSON.parse(fs.readFileSync(path.join(flagsRoot, "registry.flags.json"), "utf8"));

assert.equal(PLANTIM_FLAGS_VERSION, registry.version, "flags entry version must match the registry");
assert.equal(PLANTIM_FLAGS_HASH, registry.flagsHash, "flags entry hash must match the registry");
assert.deepEqual(
  [...PLANTIM_FLAG_CODES].sort(),
  Object.keys(registry.flags).map((id) => id.split(".")[1]).sort(),
  "exported codes must match the registry",
);
assert.equal(isPlantimFlagCode("de"), true);
assert.equal(isPlantimFlagCode("zz"), false);
assert.deepEqual(
  Object.keys(metadata.PLANTIM_FLAG_METADATA).sort(),
  [...PLANTIM_FLAG_CODES].sort(),
  "metadata must cover every flag",
);
assert.equal(
  JSON.stringify(metadata.PLANTIM_FLAG_METADATA).includes('"layers"'),
  false,
  "metadata must stay free of geometry",
);

/**
 * Canonical element sequence for one SVG body.
 *
 * The two renderers serialize differently without differing in meaning: the
 * build writes self-closing leaves ("<rect ... />") while Vue's SSR writes
 * paired tags, and the two emit attributes in different orders. Comparing raw
 * strings would fail on both. Parsing into "tag{sorted attrs}" compares what
 * actually reaches the screen, and still catches a changed coordinate,
 * colour, transform, clip or stroke width.
 */
function canonical(svg) {
  const body = svg
    .replace(/<svg[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "")
    .replace(/<title>[^<]*<\/title>/g, "")
    // self-closing leaf -> paired, so close tags line up between renderers
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

let compared = 0;
for (const entry of index.flags) {
  const code = entry.id.split(".")[1];
  const flag = (await import(path.join(root, `packages/plantim-icons/dist/flags/flags/${code}.js`))).default;
  assert.equal(flag.id, entry.id, `${code}: module default export must be the definition`);

  for (const [variant, sizes] of Object.entries(entry.files)) {
    for (const [size, rel] of Object.entries(sizes)) {
      const app = createSSRApp({
        render: () => h(PlantimFlag, { flag, variant, size: Number(size), title: flag.label }),
      });
      const rendered = await renderToString(app);
      const expected = fs.readFileSync(path.join(flagsRoot, rel), "utf8");

      // The component adds the accessible name; the static asset has no title.
      assert.equal(
        canonical(rendered),
        canonical(expected),
        `${entry.id} @${size} ${variant}: Vue render differs from ${rel}`,
      );
      assert.ok(rendered.includes(`width="${size}"`), `${entry.id} @${size} ${variant}: wrong width`);
      compared += 1;
    }
  }
}

// Accessibility contract: a flag names its region, and only opts out explicitly.
const de = (await import(path.join(root, "packages/plantim-icons/dist/flags/flags/de.js"))).default;
const tr = (await import(path.join(root, "packages/plantim-icons/dist/flags/flags/tr.js"))).default;

const decorative = await renderToString(createSSRApp({ render: () => h(PlantimFlag, { flag: de }) }));
assert.ok(decorative.includes('aria-hidden="true"'), "an untitled flag must be decorative");
assert.ok(!decorative.includes("<title>"), "an untitled flag must not emit a title");

const labelled = await renderToString(
  createSSRApp({ render: () => h(PlantimFlag, { flag: tr, title: "Türkiye" }) }),
);
assert.ok(labelled.includes('role="img"'), "a titled flag must expose role=img");
assert.ok(labelled.includes('aria-label="Türkiye"'), "a titled flag must expose its accessible name");

console.log(`Flag Vue parity valid: ${compared} renders match the generated SVGs across ${index.flags.length} flags.`);
