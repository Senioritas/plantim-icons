// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 8918930f0901ef326303681d0b07a17a8d539f03b71776012e2defbe70af3284).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const UtilityCircle: PlantimIconV4Definition = {
  "id": "utility.circle",
  "label": "Circle",
  "tier": "P1",
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
                "cx": "12",
                "cy": "12",
                "r": "10"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 8L12 12"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 16L12.01 16"
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
                "cx": "12",
                "cy": "12",
                "r": "10"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 8L12 12"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 16L12.01 16"
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
      "primary": "ink.900"
    }
  }
};

export default UtilityCircle;
