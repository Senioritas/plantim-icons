// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 8918930f0901ef326303681d0b07a17a8d539f03b71776012e2defbe70af3284).
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
          "name": "primary",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M5 19C5 12 10 6 19 6c0 9-7 13-14 13z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M5 19 14 10"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 11.5L12 14"
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
                "cx": "12",
                "cy": "16.5",
                "r": "1.1"
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
          "name": "primary",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M5 19C5 12 10 6 19 6c0 9-7 13-14 13z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M5 19 14 10"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 11.5L12 14"
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
                "cx": "12",
                "cy": "16.5",
                "r": "1.1"
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
        "primary"
      ]
    },
    "multicolor": {
      "primary": "status.warning",
      "accent": "status.warning"
    }
  }
};

export default HealthAttention;
