// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const UtilitySort: PlantimIconV4Definition = {
  "id": "utility.sort",
  "label": "Sort",
  "tier": "P1",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "up",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M7 20V4"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M3 8l4-4 4 4"
              }
            }
          ]
        },
        {
          "name": "down",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M17 4v16"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M13 16l4 4 4-4"
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
        "up"
      ]
    },
    "multicolor": {
      "up": "ink.900",
      "down": "ink.500"
    }
  }
};

export default UtilitySort;
