// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const UtilityLanguage: PlantimIconV4Definition = {
  "id": "utility.language",
  "label": "Language",
  "tier": "P1",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "bubble",
          "role": "container",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M5 3h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6.5L8 21v-4H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
              }
            }
          ]
        },
        {
          "name": "glyph",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8.3 14.2l3.7-8.4 3.7 8.4"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "bubble",
          "role": "container",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M5 3h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6.5L8 21v-4H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
              }
            }
          ]
        },
        {
          "name": "glyph",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8.5 14l3.5-8 3.5 8"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M9.9 11h4.2"
              }
            }
          ]
        }
      ]
    }
  },
  "solid": {
    "micro": {
      "mode": "bold",
      "strokeWidth": 3.3,
      "counters": 0
    },
    "base": {
      "mode": "bold",
      "strokeWidth": 3.1,
      "counters": 0
    }
  },
  "variants": {
    "duotone": {
      "primary": [
        "glyph"
      ]
    },
    "multicolor": {
      "bubble": "ink.500",
      "glyph": "leaf.700"
    }
  }
};

export default UtilityLanguage;
