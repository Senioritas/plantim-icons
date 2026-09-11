// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash f12d51dd066e0493bb460f13ca0d9c957e58542320303fbce9aadf893972be4b).
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
