// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const UtilityDownload: PlantimIconV4Definition = {
  "id": "utility.download",
  "label": "Download",
  "tier": "P1",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "tray",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              }
            }
          ]
        },
        {
          "name": "arrow",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M7 10l5 5 5-5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 15V3"
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
        "arrow"
      ]
    },
    "multicolor": {
      "tray": "water.600",
      "arrow": "water.600"
    }
  }
};

export default UtilityDownload;
