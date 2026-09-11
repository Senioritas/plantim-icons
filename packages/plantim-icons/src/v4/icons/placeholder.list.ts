// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const PlaceholderList: PlantimIconV4Definition = {
  "id": "placeholder.list",
  "label": "List row skeleton",
  "tier": "P1",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "avatar",
          "role": "container",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "7",
                "cy": "12",
                "r": "4"
              }
            }
          ]
        },
        {
          "name": "lines",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M14 9.5h7"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M14 14.5h4.5"
              }
            }
          ]
        }
      ]
    }
  },
  "solid": {
    "base": {
      "paths": [
        "M7 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10Z",
        "M14.25 8.25h6.5a1.25 1.25 0 0 1 0 2.5h-6.5a1.25 1.25 0 0 1 0-2.5Z",
        "M14.25 13.25h4a1.25 1.25 0 0 1 0 2.5h-4a1.25 1.25 0 0 1 0-2.5Z"
      ],
      "counters": 0
    }
  },
  "variants": {
    "duotone": {
      "primary": [
        "lines"
      ]
    },
    "multicolor": {
      "avatar": "ink.300",
      "lines": "ink.500"
    }
  }
};

export default PlaceholderList;
