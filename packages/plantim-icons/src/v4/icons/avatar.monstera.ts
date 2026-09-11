// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const AvatarMonstera: PlantimIconV4Definition = {
  "id": "avatar.monstera",
  "label": "Monstera",
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
                "d": "M12 5.5c-2.2 0-3.8 1.4-3.8 3.1 0 .8.4 1.5 1 2-.7.5-1.2 1.3-1.2 2.2 0 1.8 1.6 3.2 4 3.5 2.4-.3 4-1.7 4-3.5 0-.9-.5-1.7-1.2-2.2.6-.5 1-1.2 1-2 0-1.7-1.6-3.1-3.8-3.1Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 16.6v2.6"
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
                "d": "M12 5.5c-2.2 0-3.8 1.4-3.8 3.1 0 .8.4 1.5 1 2-.7.5-1.2 1.3-1.2 2.2 0 1.8 1.6 3.2 4 3.5 2.4-.3 4-1.7 4-3.5 0-.9-.5-1.7-1.2-2.2.6-.5 1-1.2 1-2 0-1.7-1.6-3.1-3.8-3.1Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 16.6v2.6"
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
                "d": "M12 7.5v7"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M8.7 10.9l2.4-.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M15.3 13.2l-2.4.5"
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
        "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM12 5.5c-2.2 0-3.8 1.4-3.8 3.1 0 .8.4 1.5 1 2-.7.5-1.2 1.3-1.2 2.2 0 1.8 1.6 3.2 4 3.5 2.4-.3 4-1.7 4-3.5 0-.9-.5-1.7-1.2-2.2.6-.5 1-1.2 1-2 0-1.7-1.6-3.1-3.8-3.1ZM11 16.6h2v2.6h-2ZM9.791 11.24L11.291 10.89L11.109 10.11L9.609 10.46ZM14.209 12.76L12.709 13.11L12.891 13.89L14.391 13.54Z"
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
      "ring": "leaf.300",
      "plant": "leaf.700",
      "detail": "leaf.500"
    }
  }
};

export default AvatarMonstera;
