// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const UtilityExternalLink: PlantimIconV4Definition = {
  "id": "utility.external.link",
  "label": "External link",
  "tier": "P1",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "box",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
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
                "d": "M15 3h6v6"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M10 14 21 3"
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
      "box": "ink.500",
      "arrow": "ink.900"
    }
  }
};

export default UtilityExternalLink;
