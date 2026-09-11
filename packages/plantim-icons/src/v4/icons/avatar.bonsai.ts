// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const AvatarBonsai: PlantimIconV4Definition = {
  "id": "avatar.bonsai",
  "label": "Bonsai",
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
                "d": "M6.5 11.5c0-1.8 1.4-2.8 3-2.6C9.8 7.2 11.4 6 13 6.3c2.2.3 3 2 2.8 3.4 1.5.3 2.4 1.4 2.4 2.6 0 1.6-1.4 2.6-3 2.6H9.2c-1.6 0-2.7-1.1-2.7-3.4Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 17.5v-2.4"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M6.5 17.5h11l-.8 2H7.3Z"
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
        "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM6.5 11.5c0-1.8 1.4-2.8 3-2.6C9.8 7.2 11.4 6 13 6.3c2.2.3 3 2 2.8 3.4 1.5.3 2.4 1.4 2.4 2.6 0 1.6-1.4 2.6-3 2.6H9.2c-1.6 0-2.7-1.1-2.7-3.4ZM11 15.2h2v2.1h-2ZM6.5 17.5h11l-.8 2H7.3Z"
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
      "ring": "earth.400",
      "plant": "leaf.700"
    }
  }
};

export default AvatarBonsai;
