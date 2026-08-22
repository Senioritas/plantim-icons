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
              h("div", { class: "icon-card__preview" }, [
                h(PlantimIcon, { name, size: 32, title: name }),
              ]),
              h("code", name),
            ]),
          ),
        ),
      ]);
  },
});

createApp(Gallery).mount("#app");
