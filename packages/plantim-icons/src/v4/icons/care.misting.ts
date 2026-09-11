// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const CareMisting: PlantimIconV4Definition = {
  "id": "care.misting",
  "label": "Misting",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "bottle",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8 11h7v8.5A1.5 1.5 0 0 1 13.5 21h-4A1.5 1.5 0 0 1 8 19.5Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M10.5 11V8h2.5v3"
              }
            }
          ]
        },
        {
          "name": "head",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M10.5 8H18"
              }
            }
          ]
        },
        {
          "name": "mist",
          "role": "accent",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "20.8",
                "cy": "5",
                "r": "1.7"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "21.2",
                "cy": "9",
                "r": "1.7"
              },
              "filled": true
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "bottle",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8 11h7v8.5A1.5 1.5 0 0 1 13.5 21h-4A1.5 1.5 0 0 1 8 19.5Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M10.5 11V8h2.5v3"
              }
            }
          ]
        },
        {
          "name": "head",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M10.5 8H18"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M16 8v3.5"
              }
            }
          ]
        },
        {
          "name": "mist",
          "role": "accent",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "20.8",
                "cy": "5",
                "r": "1.5"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "21.2",
                "cy": "9",
                "r": "1.5"
              },
              "filled": true
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
        "bottle",
        "head"
      ]
    },
    "multicolor": {
      "bottle": "water.600",
      "head": "ink.500",
      "mist": "water.300"
    }
  }
};

export default CareMisting;
