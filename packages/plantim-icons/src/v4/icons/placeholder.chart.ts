// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const PlaceholderChart: PlantimIconV4Definition = {
  "id": "placeholder.chart",
  "label": "Chart skeleton",
  "tier": "P2",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "axes",
          "role": "container",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M4 4v16h16"
              }
            }
          ]
        },
        {
          "name": "bars",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M9 17v-5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M13.5 17v-9"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M18 17v-3"
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
      "strokeWidth": 3.6,
      "counters": 0
    },
    "base": {
      "mode": "bold",
      "strokeWidth": 3.4,
      "counters": 0
    }
  },
  "variants": {
    "duotone": {
      "primary": [
        "bars"
      ]
    },
    "multicolor": {
      "axes": "ink.300",
      "bars": "ink.500"
    }
  }
};

export default PlaceholderChart;
