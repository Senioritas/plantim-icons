// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const AvatarFern: PlantimIconV4Definition = {
  "id": "avatar.fern",
  "label": "Fern",
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
                "d": "M11 18.8c-.6-5.2.4-9.8 3.6-13.3.2 1-.1 1.9-.4 2.7 1-.3 1.7-.1 2.2.5-.9.4-1.6 1-2.1 1.8 1 0 1.7.3 2.2.9-.9.5-1.7 1.2-2.3 2 .9.2 1.5.7 1.8 1.4-1 .3-1.9.9-2.6 1.6.7.4 1 1 1.1 1.7-1.2.1-2.3-.1-3.5-.6Z"
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
                "d": "M11 18.8c-.6-5.2.4-9.8 3.6-13.3.2 1-.1 1.9-.4 2.7 1-.3 1.7-.1 2.2.5-.9.4-1.6 1-2.1 1.8 1 0 1.7.3 2.2.9-.9.5-1.7 1.2-2.3 2 .9.2 1.5.7 1.8 1.4-1 .3-1.9.9-2.6 1.6.7.4 1 1 1.1 1.7-1.2.1-2.3-.1-3.5-.6Z"
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
                "d": "M11.8 16.5c-.2-3.5.5-6.8 2.2-9.6"
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
        "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM11 18.8c-.6-5.2.4-9.8 3.6-13.3.2 1-.1 1.9-.4 2.7 1-.3 1.7-.1 2.2.5-.9.4-1.6 1-2.1 1.8 1 0 1.7.3 2.2.9-.9.5-1.7 1.2-2.3 2 .9.2 1.5.7 1.8 1.4-1 .3-1.9.9-2.6 1.6.7.4 1 1 1.1 1.7-1.2.1-2.3-.1-3.5-.6Z"
      ],
      "counters": 1
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

export default AvatarFern;
