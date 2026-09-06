// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 8918930f0901ef326303681d0b07a17a8d539f03b71776012e2defbe70af3284).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const GardenHose: PlantimIconV4Definition = {
  "id": "garden.hose",
  "label": "Hose",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "primary",
          "role": "primary",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "9",
                "cy": "14",
                "r": "5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M13 11l6-6"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M19 5c1 1 1 2 0 3"
              }
            }
          ]
        },
        {
          "name": "accent",
          "role": "accent",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "9",
                "cy": "14",
                "r": "1"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "primary",
          "role": "primary",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "9",
                "cy": "14",
                "r": "5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M13 11l6-6"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M19 5c1 1 1 2 0 3"
              }
            }
          ]
        },
        {
          "name": "accent",
          "role": "accent",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "9",
                "cy": "14",
                "r": "1"
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
        "primary"
      ]
    },
    "multicolor": {
      "primary": "water.600",
      "accent": "water.600"
    }
  }
};

export default GardenHose;
