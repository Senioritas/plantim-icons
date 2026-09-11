// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const UtilityScale: PlantimIconV4Definition = {
  "id": "utility.scale",
  "label": "Scale",
  "tier": "P1",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "primary",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M5 7v11a1 1 0 0 0 1 1h11"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M5.293 18.707 11 13"
              }
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "19",
                "cy": "19",
                "r": "2"
              }
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "5",
                "cy": "5",
                "r": "2"
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

export default UtilityScale;
