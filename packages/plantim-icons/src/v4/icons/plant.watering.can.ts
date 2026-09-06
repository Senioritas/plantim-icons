// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 5c17109caec158aa49b07c8f61ff61b5c9662d2af484748da61c1ce52112809c).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const PlantWateringCan: PlantimIconV4Definition = {
  "id": "plant.watering.can",
  "label": "Watering can",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "can",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M6 11h9a2 2 0 0 1 2 2v4a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-5a1 1 0 0 1 1-1Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M15 12l4-3v6"
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
                "d": "M20.5 18v3"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "can",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M6 11h9a2 2 0 0 1 2 2v4a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-5a1 1 0 0 1 1-1Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M15 12l4-3v6"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M8 11V9a2 2 0 0 1 4 0v2"
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
                "d": "M20 18v2.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M22 17v2.5"
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
        "can"
      ]
    },
    "multicolor": {
      "can": "ink.900",
      "water": "water.600"
    }
  }
};

export default PlantWateringCan;
