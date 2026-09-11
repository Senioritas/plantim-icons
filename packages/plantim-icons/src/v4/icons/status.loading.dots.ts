// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const StatusLoadingDots: PlantimIconV4Definition = {
  "id": "status.loading.dots",
  "label": "Loading (dots)",
  "tier": "P1",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "lead",
          "role": "primary",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "5",
                "cy": "13.5",
                "r": "1.4"
              }
            }
          ]
        },
        {
          "name": "mid",
          "role": "secondary",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "10.5",
                "r": "1.4"
              }
            }
          ]
        },
        {
          "name": "trail",
          "role": "secondary",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "19",
                "cy": "13.5",
                "r": "1.4"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "lead",
          "role": "primary",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "5",
                "cy": "13.5",
                "r": "1.2"
              }
            }
          ]
        },
        {
          "name": "mid",
          "role": "secondary",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "10.5",
                "r": "1.2"
              }
            }
          ]
        },
        {
          "name": "trail",
          "role": "secondary",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "19",
                "cy": "13.5",
                "r": "1.2"
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
        "lead",
        "mid"
      ]
    },
    "multicolor": {
      "lead": "ink.500",
      "mid": "ink.500",
      "trail": "ink.300"
    }
  }
};

export default StatusLoadingDots;
