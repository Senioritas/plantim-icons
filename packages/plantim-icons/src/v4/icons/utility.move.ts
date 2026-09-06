// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 5c17109caec158aa49b07c8f61ff61b5c9662d2af484748da61c1ce52112809c).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const UtilityMove: PlantimIconV4Definition = {
  "id": "utility.move",
  "label": "Move",
  "tier": "P1",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "cross",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 3.4V20.6"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M3.4 12H20.6"
              }
            }
          ]
        },
        {
          "name": "heads",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8.8 6.2 12 3 15.2 6.2"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M8.8 17.8 12 21 15.2 17.8"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M6.2 8.8 3 12 6.2 15.2"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M17.8 8.8 21 12 17.8 15.2"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "cross",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 3.2V20.8"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M3.2 12H20.8"
              }
            }
          ]
        },
        {
          "name": "heads",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M9 6 12 3 15 6"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M9 18 12 21 15 18"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M6 9 3 12 6 15"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M18 9 21 12 18 15"
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
        "cross",
        "heads"
      ]
    },
    "multicolor": {
      "cross": "ink.900",
      "heads": "ink.900"
    }
  }
};

export default UtilityMove;
