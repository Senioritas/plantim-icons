// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const AvatarFicus: PlantimIconV4Definition = {
  "id": "avatar.ficus",
  "label": "Fiddle-leaf fig",
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
                "d": "M12 4.8c1.7 0 2.9 1.2 2.9 2.7 0 1-.5 1.8-1.1 2.3 2 .9 3.4 2.7 3.4 4.9 0 2.9-2.3 4.9-5.2 4.9s-5.2-2-5.2-4.9c0-2.2 1.4-4 3.4-4.9-.6-.5-1.1-1.3-1.1-2.3 0-1.5 1.2-2.7 2.9-2.7Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 20.6v-1.6"
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
                "d": "M12 4.8c1.7 0 2.9 1.2 2.9 2.7 0 1-.5 1.8-1.1 2.3 2 .9 3.4 2.7 3.4 4.9 0 2.9-2.3 4.9-5.2 4.9s-5.2-2-5.2-4.9c0-2.2 1.4-4 3.4-4.9-.6-.5-1.1-1.3-1.1-2.3 0-1.5 1.2-2.7 2.9-2.7Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 20.6v-1.6"
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
                "d": "M12 6.6v11.2"
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
        "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM12 4.8c1.7 0 2.9 1.2 2.9 2.7 0 1-.5 1.8-1.1 2.3 2 .9 3.4 2.7 3.4 4.9 0 2.9-2.3 4.9-5.2 4.9s-5.2-2-5.2-4.9c0-2.2 1.4-4 3.4-4.9-.6-.5-1.1-1.3-1.1-2.3 0-1.5 1.2-2.7 2.9-2.7ZM11.1 19.1h1.8v1.6h-1.8Z"
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
      "ring": "earth.400",
      "plant": "leaf.700",
      "detail": "leaf.500"
    }
  }
};

export default AvatarFicus;
