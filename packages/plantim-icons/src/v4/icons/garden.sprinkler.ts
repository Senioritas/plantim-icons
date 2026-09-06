// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 5c17109caec158aa49b07c8f61ff61b5c9662d2af484748da61c1ce52112809c).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const GardenSprinkler: PlantimIconV4Definition = {
  "id": "garden.sprinkler",
  "label": "Sprinkler",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "base",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8 21h8"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 21v-5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M9.5 16h5l-1-2h-3Z"
              }
            }
          ]
        },
        {
          "name": "water",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 14c-2-1-3.5-3-3.5-6"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 14c2-1 3.5-3 3.5-6"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "base",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8 21h8"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 21v-5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M9.5 16h5l-1-2h-3Z"
              }
            }
          ]
        },
        {
          "name": "water",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 14c-2.5-1-4-3-4.5-6"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 14c2.5-1 4-3 4.5-6"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 14V6"
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
        "base"
      ]
    },
    "multicolor": {
      "base": "ink.900",
      "water": "water.600"
    }
  }
};

export default GardenSprinkler;
