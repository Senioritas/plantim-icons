// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const AvatarIvy: PlantimIconV4Definition = {
  "id": "avatar.ivy",
  "label": "Ivy",
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
                "d": "M12 6c1.2 1.5 2.5 2 4.5 2 .3 1.8-.5 3.2-1.8 4 1.5 1 2 2.8 1.3 4.5-1.8-.2-3.2-1-4-2.3-.8 1.3-2.2 2.1-4 2.3-.7-1.7-.2-3.5 1.3-4.5C8 12 7.2 10.6 7.5 8.8c2-.1 3.3-.5 4.5-2.8Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 14.6v4.4"
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
                "d": "M12 6c1.2 1.5 2.5 2 4.5 2 .3 1.8-.5 3.2-1.8 4 1.5 1 2 2.8 1.3 4.5-1.8-.2-3.2-1-4-2.3-.8 1.3-2.2 2.1-4 2.3-.7-1.7-.2-3.5 1.3-4.5C8 12 7.2 10.6 7.5 8.8c2-.1 3.3-.5 4.5-2.8Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 14.6v4.4"
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
                "d": "M12 8.5v5"
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
        "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM12 6c1.2 1.5 2.5 2 4.5 2 .3 1.8-.5 3.2-1.8 4 1.5 1 2 2.8 1.3 4.5-1.8-.2-3.2-1-4-2.3-.8 1.3-2.2 2.1-4 2.3-.7-1.7-.2-3.5 1.3-4.5C8 12 7.2 10.6 7.5 8.8c2-.1 3.3-.5 4.5-2.8ZM11 14.8h2V19h-2Z"
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
      "ring": "ink.300",
      "plant": "leaf.700",
      "detail": "leaf.500"
    }
  }
};

export default AvatarIvy;
