// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const UtilityZoomIn: PlantimIconV4Definition = {
  "id": "utility.zoom.in",
  "label": "Zoom In",
  "tier": "P1",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "primary",
          "role": "primary",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "11",
                "cy": "11",
                "r": "8"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M21 21L16.65 16.65"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M11 8L11 14"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M8 11L14 11"
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

export default UtilityZoomIn;
