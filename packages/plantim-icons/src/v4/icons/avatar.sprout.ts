// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const AvatarSprout: PlantimIconV4Definition = {
  "id": "avatar.sprout",
  "label": "Sprout",
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
                "d": "M12 12C9.5 12.3 7.2 10.8 6.8 8C9.8 7.8 11.9 9.5 12 12Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 12C14.5 12.3 16.8 10.8 17.2 8C14.2 7.8 12.1 9.5 12 12Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 12.5v6"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M8 18.5h8"
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
        "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM12 12C9.5 12.3 7.2 10.8 6.8 8C9.8 7.8 11.9 9.5 12 12ZM12 12C14.5 12.3 16.8 10.8 17.2 8C14.2 7.8 12.1 9.5 12 12ZM11 12.6h2v5h4.5v1.8h-11v-1.8H11Z"
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
      "ring": "leaf.300",
      "plant": "leaf.700"
    }
  }
};

export default AvatarSprout;
