import assert from "node:assert/strict";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const api = await import(path.join(root, "packages/plantim-icons/dist/index.js"));
const { PlantimIcon, PLANTIM_ICON_NAMES } = api;

for (const name of PLANTIM_ICON_NAMES) {
  const render = PlantimIcon.setup({ name, size: 24, strokeWidth: 2, decorative: false }, { attrs: {} });
  const vnode = render();
  assert.equal(vnode.type, "svg", `${name} must render an SVG root`);
  assert.equal(vnode.props.viewBox, "0 0 24 24", `${name} must preserve the canonical viewBox`);
  assert.equal(vnode.props["aria-hidden"], "true", `${name} must default to decorative`);
  assert.ok(Array.isArray(vnode.children), `${name} must render geometry children`);
}

const labelled = PlantimIcon.setup({ name: "status.warning", size: 24, strokeWidth: 2, title: "Warning", decorative: false }, { attrs: { class: "icon" } })();
assert.equal(labelled.props.role, "img");
assert.equal(labelled.props["aria-label"], "Warning");
assert.equal(labelled.props["aria-hidden"], undefined);
assert.equal(labelled.props.class, "icon");
assert.equal(labelled.children[0].type, "title");

assert.throws(
  () => PlantimIcon.setup({ name: "sf.symbol", size: 24, strokeWidth: 2, decorative: false }, { attrs: {} })(),
  /Unknown semantic icon/,
);
console.log(`Vue API behavior valid for ${PLANTIM_ICON_NAMES.length} icons.`);
