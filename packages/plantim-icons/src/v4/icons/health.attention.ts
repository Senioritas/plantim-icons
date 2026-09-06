// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 5bb26078101916dcab888a399aaaa4dbef858532ec4bec3fd820d80f7f986011).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const HealthAttention: PlantimIconV4Definition = {
  "id": "health.attention",
  "label": "Attention",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "leaf",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M17.5 3.5C9.5 4 4 9.5 4 17.5C12 17 17 11.5 17.5 3.5Z"
              }
            }
          ]
        },
        {
          "name": "badge",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M17.5 14.5v3.4"
              }
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "17.5",
                "cy": "20.4",
                "r": "1"
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
          "name": "leaf",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M17.5 3.5C9.5 4 4 9.5 4 17.5C12 17 17 11.5 17.5 3.5Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M7.5 14 14 7.5"
              }
            }
          ]
        },
        {
          "name": "badge",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M17.5 14.5v3.4"
              }
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "17.5",
                "cy": "20.4",
                "r": "1"
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
        "leaf",
        "badge"
      ]
    },
    "multicolor": {
      "leaf": "status.warning",
      "badge": "status.warning"
    }
  }
};

export default HealthAttention;
