import { createApp, defineComponent, h } from "vue";
import { PLANTIM_ICON_NAMES, PlantimIcon } from "@plantim/icons";
import "./style.css";

const Gallery = defineComponent({
  name: "PlantimIconGallery",
  setup() {
    const names = [...PLANTIM_ICON_NAMES].sort();

    return () =>
      h("main", { class: "gallery" }, [
        h("header", { class: "gallery__header" }, [
          h("p", { class: "eyebrow" }, "Plantim design system"),
          h("h1", "Semantic icon gallery"),
          h(
            "p",
            { class: "intro" },
            `${names.length} registered icons · light and dark rendering reference`,
          ),
        ]),
        h(
          "section",
          { class: "gallery__grid", "aria-label": "Registered Plantim icons" },
          names.map((name) =>
            h("article", { class: "icon-card", key: name }, [
              h(
                "div",
                { class: "icon-card__preview", "aria-label": `${name} size matrix` },
                [16, 20, 24, 32, 48].map((size) =>
                  h("span", { class: "icon-sample", key: size }, [
                    h(PlantimIcon, { name, size, title: `${name} ${size}px` }),
                    h("small", `${size}`),
                  ]),
                ),
              ),
              h("code", name),
            ]),
          ),
        ),
      ]);
  },
});

createApp(Gallery).mount("#app");
