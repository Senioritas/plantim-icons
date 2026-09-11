// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const PlantIdentify: PlantimIconV4Definition = {
  "id": "plant.identify",
  "label": "Identify plant",
  "tier": "P1",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "brackets",
          "role": "container",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M3 8V5a2 2 0 0 1 2-2h3"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M16 3h3a2 2 0 0 1 2 2v3"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M21 16v3a2 2 0 0 1-2 2h-3"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M8 21H5a2 2 0 0 1-2-2v-3"
              }
            }
          ]
        },
        {
          "name": "leaf",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M16 8C10.5 8.5 8 11.5 8 16.5C13 16 15.5 13 16 8Z"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "brackets",
          "role": "container",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M3 8V5a2 2 0 0 1 2-2h3"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M16 3h3a2 2 0 0 1 2 2v3"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M21 16v3a2 2 0 0 1-2 2h-3"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M8 21H5a2 2 0 0 1-2-2v-3"
              }
            }
          ]
        },
        {
          "name": "leaf",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M16 8C10.5 8.5 8 11.5 8 16.5C13 16 15.5 13 16 8Z"
              }
            }
          ]
        },
        {
          "name": "vein",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M9.8 14.7 14.2 9.8"
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
        "leaf",
        "vein"
      ]
    },
    "multicolor": {
      "brackets": "ink.500",
      "leaf": "leaf.700",
      "vein": "leaf.700"
    }
  }
};

export default PlantIdentify;
