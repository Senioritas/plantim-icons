// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 5c17109caec158aa49b07c8f61ff61b5c9662d2af484748da61c1ce52112809c).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const GenusCactus: PlantimIconV4Definition = {
  "id": "genus.cactus",
  "label": "Cactus",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "body",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M10 18V7a2 2 0 0 1 4 0v11"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M10 13H7.5V10.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M14 11.5h2.5V14"
              }
            }
          ]
        },
        {
          "name": "pot",
          "role": "container",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M9 18h6l-.6 3h-4.8Z"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "body",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M10 18V6.5a2 2 0 0 1 4 0V18"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M10 13H8.3A1.8 1.8 0 0 1 6.5 11.2V9.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M14 11h1.7a1.8 1.8 0 0 1 1.8 1.8V15"
              }
            }
          ]
        },
        {
          "name": "pot",
          "role": "container",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M9 18h6l-.6 3h-4.8Z"
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
        "body"
      ]
    },
    "multicolor": {
      "body": "leaf.700",
      "pot": "earth.600"
    }
  }
};

export default GenusCactus;
