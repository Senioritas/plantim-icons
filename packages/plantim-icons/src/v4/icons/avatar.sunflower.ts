// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const AvatarSunflower: PlantimIconV4Definition = {
  "id": "avatar.sunflower",
  "label": "Sunflower",
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
                "d": "M12.385 8.6Q14.2 6.845 12 4.7Q9.8 6.845 11.615 8.6Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M14.676 9.868Q17.201 9.91 17.162 6.838Q14.09 6.799 14.132 9.324Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M15.4 12.385Q17.155 14.2 19.3 12Q17.155 9.8 15.4 11.615Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M14.132 14.676Q14.09 17.201 17.162 17.162Q17.201 14.09 14.676 14.132Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M11.615 15.4Q9.8 17.155 12 19.3Q14.2 17.155 12.385 15.4Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M9.324 14.132Q6.799 14.09 6.838 17.162Q9.91 17.201 9.868 14.676Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M8.6 11.615Q6.845 9.8 4.7 12Q6.845 14.2 8.6 12.385Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M9.868 9.324Q9.91 6.799 6.838 6.838Q6.799 9.91 9.324 9.868Z"
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
                "cy": "12",
                "r": "2.4"
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
        "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM12.385 8.6Q14.2 6.845 12 4.7Q9.8 6.845 11.615 8.6ZM14.676 9.868Q17.201 9.91 17.162 6.838Q14.09 6.799 14.132 9.324ZM15.4 12.385Q17.155 14.2 19.3 12Q17.155 9.8 15.4 11.615ZM14.132 14.676Q14.09 17.201 17.162 17.162Q17.201 14.09 14.676 14.132ZM11.615 15.4Q9.8 17.155 12 19.3Q14.2 17.155 12.385 15.4ZM9.324 14.132Q6.799 14.09 6.838 17.162Q9.91 17.201 9.868 14.676ZM8.6 11.615Q6.845 9.8 4.7 12Q6.845 14.2 8.6 12.385ZM9.868 9.324Q9.91 6.799 6.838 6.838Q6.799 9.91 9.324 9.868ZM9.6 12a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0Z"
      ],
      "counters": 9
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
      "ring": "water.300",
      "plant": "sun.500",
      "accent": "earth.600"
    }
  }
};

export default AvatarSunflower;
