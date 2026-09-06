// v4 gallery — demonstrates the tree-shakable @plantim/icons/v4 API with every
// variant and optical size. Kept as a separate page from the v2 snapshot-tested
// gallery at "/"; the comprehensive interactive catalog lives in
// reports/plantim-icons-v4-catalog.html.
import { createApp, defineComponent, h } from "vue";
import { PlantimIconV4 } from "@plantim/icons/v4";
import { PLANTIM_ICON_V4_METADATA } from "@plantim/icons/v4/metadata";
import "./style.css";

const VARIANTS = ["outline", "solid", "duotone", "multicolor"] as const;

async function loadIcon(id: string) {
  // per-icon dynamic import proves tree-shakability
  const mod = await import(`@plantim/icons/v4/icons/${id}.js`);
  return mod.default;
}

const Gallery = defineComponent({
  name: "PlantimIconV4Gallery",
  async setup() {
    const meta = Object.values(PLANTIM_ICON_V4_METADATA).sort((a, b) => a.id.localeCompare(b.id));
    const defs = new Map<string, unknown>();
    await Promise.all(meta.map(async (m) => defs.set(m.id, await loadIcon(m.id))));

    return () =>
      h("main", { class: "gallery" }, [
        h("header", { class: "gallery__header" }, [
          h("p", { class: "eyebrow" }, "Plantim design system"),
          h("h1", "Icon gallery — v4"),
          h("p", { class: "intro" }, `${meta.length} icons · 4 variants · optical sizes 16–72`),
        ]),
        h(
          "section",
          { class: "gallery__grid", "aria-label": "Plantim v4 icons" },
          meta.map((m) =>
            h("article", { class: "icon-card", key: m.id }, [
              h(
                "div",
                { class: "icon-card__preview" },
                VARIANTS.map((variant) =>
                  h("span", { class: "icon-sample", key: variant }, [
                    h(PlantimIconV4, { icon: defs.get(m.id), variant, size: 32, title: `${m.id} ${variant}` }),
                    h("small", variant),
                  ]),
                ),
              ),
              h("div", { class: "icon-card__preview" }, [16, 20, 24, 32, 48, 72].map((size) =>
                h("span", { class: "icon-sample", key: size }, [
                  h(PlantimIconV4, { icon: defs.get(m.id), variant: "outline", size, title: `${m.id} ${size}` }),
                  h("small", `${size}`),
                ]),
              )),
              h("code", `${m.id}`),
              h("small", { class: "eyebrow" }, `${m.tier} · ${m.verdict}`),
            ]),
          ),
        ),
      ]);
  },
});

createApp(Gallery).mount("#app");
