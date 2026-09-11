// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const AvatarLotus: PlantimIconV4Definition = {
  "id": "avatar.lotus",
  "label": "Lotus",
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
                "d": "M12.473 12.1Q14.7 9.355 12 6Q9.3 9.355 11.528 12.1Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M13.864 12.931Q16.885 12.412 16.885 8.678Q13.208 9.326 13.221 12.392Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M10.779 12.392Q10.792 9.326 7.115 8.678Q7.115 12.412 10.136 12.931Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M14.428 14.378Q16.566 15.779 18.26 13.169Q15.651 11.475 14.268 13.624Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M9.732 13.624Q8.349 11.475 5.74 13.169Q7.434 15.779 9.572 14.378Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M5.5 18.6h13"
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
        "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM12.473 12.1Q14.7 9.355 12 6Q9.3 9.355 11.528 12.1ZM13.864 12.931Q16.885 12.412 16.885 8.678Q13.208 9.326 13.221 12.392ZM10.779 12.392Q10.792 9.326 7.115 8.678Q7.115 12.412 10.136 12.931ZM14.428 14.378Q16.566 15.779 18.26 13.169Q15.651 11.475 14.268 13.624ZM9.732 13.624Q8.349 11.475 5.74 13.169Q7.434 15.779 9.572 14.378ZM5.5 17.7h13v1.8h-13Z"
      ],
      "counters": 6
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
      "plant": "bloom.500"
    }
  }
};

export default AvatarLotus;
