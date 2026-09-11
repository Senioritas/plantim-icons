// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const AvatarPilea: PlantimIconV4Definition = {
  "id": "avatar.pilea",
  "label": "Pilea",
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
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "10.2",
                "r": "5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 15.5v3.5"
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
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "10.2",
                "r": "5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 15.5v3.5"
              }
            }
          ]
        },
        {
          "name": "detail",
          "role": "secondary",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "10.2",
                "r": "1.2"
              },
              "filled": true
            }
          ]
        }
      ]
    }
  },
  "solid": {
    "base": {
      "paths": [
        "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM7 10.2a5 5 0 1 0 10 0a5 5 0 1 0 -10 0ZM11 15.6h2V19h-2Z"
      ],
      "counters": 2
    }
  },
  "variants": {
    "duotone": {
      "primary": [
        "plant"
      ]
    },
    "multicolor": {
      "ring": "water.300",
      "plant": "leaf.700",
      "detail": "leaf.500"
    }
  }
};

export default AvatarPilea;
