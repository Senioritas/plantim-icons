// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 5c17109caec158aa49b07c8f61ff61b5c9662d2af484748da61c1ce52112809c).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const PlantRemove: PlantimIconV4Definition = {
  "id": "plant.remove",
  "label": "Remove plant",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "ground",
          "role": "container",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M3 21h11"
              }
            }
          ]
        },
        {
          "name": "stem",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8.5 21v-6"
              }
            }
          ]
        },
        {
          "name": "leaves",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8.5 15C6.7 15.4 4.7 14.4 4.3 11.9C6.6 11.5 8.4 12.7 8.5 15Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M8.5 15C10.3 15.4 12.3 14.4 12.7 11.9C10.4 11.5 8.6 12.7 8.5 15Z"
              }
            }
          ]
        },
        {
          "name": "badge",
          "role": "accent",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "18",
                "cy": "6.5",
                "r": "4.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M15.5 6.5h5"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "ground",
          "role": "container",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M3 21h11"
              }
            }
          ]
        },
        {
          "name": "stem",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8.5 21v-6"
              }
            }
          ]
        },
        {
          "name": "leaves",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8.5 15C6.7 15.4 4.7 14.4 4.3 11.9C6.6 11.5 8.4 12.7 8.5 15Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M8.5 15C10.3 15.4 12.3 14.4 12.7 11.9C10.4 11.5 8.6 12.7 8.5 15Z"
              }
            }
          ]
        },
        {
          "name": "badge",
          "role": "accent",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "18",
                "cy": "7",
                "r": "4"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M16.2 7h3.6"
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
        "stem",
        "leaves",
        "badge"
      ]
    },
    "multicolor": {
      "ground": "earth.600",
      "stem": "leaf.700",
      "leaves": "leaf.500",
      "badge": "status.error"
    }
  }
};

export default PlantRemove;
