// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const AvatarLavender: PlantimIconV4Definition = {
  "id": "avatar.lavender",
  "label": "Lavender",
  "tier": "P1",
  "grades": {
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
                "d": "M12 19v-6.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M11.1 16c-2 .2-3.5-.6-4.3-2.4 2-.2 3.5.6 4.3 2.4Z"
              }
            }
          ]
        },
        {
          "name": "accent",
          "role": "accent",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "5.6",
                "r": "1.2"
              }
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "10.5",
                "cy": "7.8",
                "r": "1.2"
              }
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "13.5",
                "cy": "8.6",
                "r": "1.2"
              }
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "10.5",
                "cy": "10.4",
                "r": "1.2"
              }
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "13.5",
                "cy": "11.2",
                "r": "1.2"
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
        "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM11.2 12.5h1.6V19h-1.6ZM11.1 16c-2 .2-3.5-.6-4.3-2.4 2-.2 3.5.6 4.3 2.4ZM10.4 5.6a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0ZM8.9 7.8a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0ZM11.9 8.6a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0ZM8.9 10.4a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0ZM11.9 11.2a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0Z"
      ],
      "counters": 7
    }
  },
  "variants": {
    "duotone": {
      "primary": [
        "plant",
        "accent"
      ]
    },
    "multicolor": {
      "ring": "sun.300",
      "plant": "leaf.700",
      "accent": "bloom.500"
    }
  }
};

export default AvatarLavender;
