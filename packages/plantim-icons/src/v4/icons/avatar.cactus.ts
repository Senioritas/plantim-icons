// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const AvatarCactus: PlantimIconV4Definition = {
  "id": "avatar.cactus",
  "label": "Cactus",
  "tier": "P1",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "ring",
          "role": "container",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "12",
                "r": "9.25"
              }
            }
          ]
        },
        {
          "name": "plant",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M10 18.5V7.5a2 2 0 0 1 4 0v11Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M10 13H8.5A1.5 1.5 0 0 1 7 11.5V9.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M14 11.5h1.5A1.5 1.5 0 0 0 17 10V8"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "ring",
          "role": "container",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "12",
                "r": "9.25"
              }
            }
          ]
        },
        {
          "name": "plant",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M10 18.5V7.5a2 2 0 0 1 4 0v11Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M10 13H8.5A1.5 1.5 0 0 1 7 11.5V9.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M14 11.5h1.5A1.5 1.5 0 0 0 17 10V8"
              }
            }
          ]
        },
        {
          "name": "detail",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 9v7"
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
        "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM10 18.5V7.5a2 2 0 0 1 4 0v11ZM6.5 9.5h2v2.5h.8v2H8.5a2 2 0 0 1-2-2ZM15.5 8h2v3.5a2 2 0 0 1-2 2h-.8v-2h.8Z"
      ],
      "counters": 3
    }
  },
  "variants": {
    "duotone": {
      "primary": [
        "plant"
      ]
    },
    "multicolor": {
      "ring": "sun.300",
      "plant": "leaf.700",
      "detail": "leaf.500"
    }
  }
};

export default AvatarCactus;
