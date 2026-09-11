// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash f12d51dd066e0493bb460f13ca0d9c957e58542320303fbce9aadf893972be4b).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const GenusOrchid: PlantimIconV4Definition = {
  "id": "genus.orchid",
  "label": "Orchid",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "stem",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 21c0-4-1-6.5-3-8.5"
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
                "d": "M12 21c-3 .2-5.2-1.6-5.4-4.6C9.6 16.2 11.8 18 12 21Z"
              }
            }
          ]
        },
        {
          "name": "flower",
          "role": "accent",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "6.5",
                "r": "2.2"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "8.4",
                "cy": "6",
                "r": "1.8"
              }
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "15.6",
                "cy": "6",
                "r": "1.8"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "stem",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 21c0-4-1-6.5-3-8.5"
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
                "d": "M12 21c-3 .2-5.2-1.6-5.4-4.6C9.6 16.2 11.8 18 12 21Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 21c3 .2 5.2-1.6 5.4-4.6C14.4 16.2 12.2 18 12 21Z"
              }
            }
          ]
        },
        {
          "name": "flower",
          "role": "accent",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "7",
                "r": "2"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "8.6",
                "cy": "5.4",
                "r": "1.6"
              }
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "15.4",
                "cy": "5.4",
                "r": "1.6"
              }
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "9.6",
                "cy": "9.4",
                "r": "1.6"
              }
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "14.4",
                "cy": "9.4",
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
        "stem"
      ]
    },
    "multicolor": {
      "stem": "leaf.700",
      "leaves": "leaf.700",
      "flower": "bloom.500"
    }
  }
};

export default GenusOrchid;
