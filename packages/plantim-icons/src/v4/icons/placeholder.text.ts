// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const PlaceholderText: PlantimIconV4Definition = {
  "id": "placeholder.text",
  "label": "Text skeleton",
  "tier": "P1",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "lines",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M4 7h16"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M4 12h16"
              }
            }
          ]
        },
        {
          "name": "tail",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M4 17h10"
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
        "lines"
      ]
    },
    "multicolor": {
      "lines": "ink.500",
      "tail": "ink.300"
    }
  }
};

export default PlaceholderText;
