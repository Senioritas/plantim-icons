// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 8918930f0901ef326303681d0b07a17a8d539f03b71776012e2defbe70af3284).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const NavTodayLeaf: PlantimIconV4Definition = {
  "id": "nav.today.leaf",
  "label": "Today Leaf",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "primary",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M4 20C4 12 12 4 20 4c0 8-8 16-16 16Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M4 20L20 4"
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
                "cx": "14",
                "cy": "9",
                "r": "1.6"
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
              "type": "path",
              "attrs": {
                "d": "M4 20C4 12 12 4 20 4c0 8-8 16-16 16Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M4 20L20 4"
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
                "cx": "14",
                "cy": "9",
                "r": "1.6"
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
      "primary": "ink.900",
      "accent": "ink.900"
    }
  }
};

export default NavTodayLeaf;
