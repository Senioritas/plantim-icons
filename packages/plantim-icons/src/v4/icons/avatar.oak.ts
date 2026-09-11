// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const AvatarOak: PlantimIconV4Definition = {
  "id": "avatar.oak",
  "label": "Oak",
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
                "d": "M12 5.5c1.3.5 2 1.6 1.8 2.8 1.4-.2 2.4.6 2.4 1.8 0 .8-.4 1.4-1 1.8 1.2.4 1.8 1.4 1.5 2.5-.2.9-1 1.5-2 1.6.4 1.4-.4 2.6-1.8 2.9-.3.4-.6.8-.9 1.1-.3-.3-.6-.7-.9-1.1-1.4-.3-2.2-1.5-1.8-2.9-1-.1-1.8-.7-2-1.6-.3-1.1.3-2.1 1.5-2.5-.6-.4-1-1-1-1.8 0-1.2 1-2 2.4-1.8-.2-1.2.5-2.3 1.8-2.8Z"
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
                "d": "M12 5.5c1.3.5 2 1.6 1.8 2.8 1.4-.2 2.4.6 2.4 1.8 0 .8-.4 1.4-1 1.8 1.2.4 1.8 1.4 1.5 2.5-.2.9-1 1.5-2 1.6.4 1.4-.4 2.6-1.8 2.9-.3.4-.6.8-.9 1.1-.3-.3-.6-.7-.9-1.1-1.4-.3-2.2-1.5-1.8-2.9-1-.1-1.8-.7-2-1.6-.3-1.1.3-2.1 1.5-2.5-.6-.4-1-1-1-1.8 0-1.2 1-2 2.4-1.8-.2-1.2.5-2.3 1.8-2.8Z"
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
                "d": "M12 7.5v9.5"
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
        "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM12 5.5c1.3.5 2 1.6 1.8 2.8 1.4-.2 2.4.6 2.4 1.8 0 .8-.4 1.4-1 1.8 1.2.4 1.8 1.4 1.5 2.5-.2.9-1 1.5-2 1.6.4 1.4-.4 2.6-1.8 2.9-.3.4-.6.8-.9 1.1-.3-.3-.6-.7-.9-1.1-1.4-.3-2.2-1.5-1.8-2.9-1-.1-1.8-.7-2-1.6-.3-1.1.3-2.1 1.5-2.5-.6-.4-1-1-1-1.8 0-1.2 1-2 2.4-1.8-.2-1.2.5-2.3 1.8-2.8Z"
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
      "ring": "sun.300",
      "plant": "earth.600",
      "detail": "earth.400"
    }
  }
};

export default AvatarOak;
