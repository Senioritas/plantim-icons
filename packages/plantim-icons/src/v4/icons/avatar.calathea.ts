// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const AvatarCalathea: PlantimIconV4Definition = {
  "id": "avatar.calathea",
  "label": "Calathea",
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
                "d": "M12 5.5c3.3 0 5 3.4 5 7s-1.7 6.5-5 6.5-5-2.9-5-6.5 1.7-7 5-7Z"
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
                "d": "M12 5.5c3.3 0 5 3.4 5 7s-1.7 6.5-5 6.5-5-2.9-5-6.5 1.7-7 5-7Z"
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
                "d": "M12 7v10"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 9l-2.5 1.2"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 9l2.5 1.2"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 12.5l-3 1.4"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 12.5l3 1.4"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 15.5l-2.2 1"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 15.5l2.2 1"
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
        "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM12 5.5c3.3 0 5 3.4 5 7s-1.7 6.5-5 6.5-5-2.9-5-6.5 1.7-7 5-7ZM11.107 8.82L9.507 9.92L9.893 10.48L11.493 9.38ZM12.507 9.38L14.107 10.48L14.493 9.92L12.893 8.82ZM11.108 12.219L9.208 13.519L9.592 14.081L11.492 12.781ZM12.508 12.781L14.408 14.081L14.792 13.519L12.892 12.219ZM11.106 15.22L9.806 16.12L10.194 16.68L11.494 15.78ZM12.506 15.78L13.806 16.68L14.194 16.12L12.894 15.22Z"
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
      "ring": "bloom.500",
      "plant": "leaf.700",
      "detail": "leaf.300"
    }
  }
};

export default AvatarCalathea;
