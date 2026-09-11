// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const AvatarRose: PlantimIconV4Definition = {
  "id": "avatar.rose",
  "label": "Rose",
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
                "d": "M12.525 8Q15 6.47 12 4.6Q9 6.47 11.475 8Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M15.966 11.263Q18.186 13.144 19.038 9.713Q16.332 7.438 15.642 10.265Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M13.926 15.545Q12.823 18.237 16.35 17.987Q17.678 14.711 14.776 14.927Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M9.224 14.927Q6.322 14.711 7.65 17.987Q11.177 18.237 10.074 15.545Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M8.358 10.265Q7.668 7.438 4.962 9.713Q5.814 13.144 8.034 11.263Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M13.047 11.154Q15.017 11.25 14.175 9.007Q11.781 8.899 12.481 10.743Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M13.128 12.735Q13.645 14.638 15.519 13.143Q14.882 10.833 13.345 12.069Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M11.65 13.3Q10 14.38 12 15.7Q14 14.38 12.35 13.3Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M10.655 12.069Q9.118 10.833 8.481 13.143Q10.355 14.638 10.872 12.735Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M11.519 10.743Q12.219 8.899 9.825 9.007Q8.983 11.25 10.953 11.154Z"
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
                "r": "0.9"
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
        "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM12.525 8Q15 6.47 12 4.6Q9 6.47 11.475 8ZM15.966 11.263Q18.186 13.144 19.038 9.713Q16.332 7.438 15.642 10.265ZM13.926 15.545Q12.823 18.237 16.35 17.987Q17.678 14.711 14.776 14.927ZM9.224 14.927Q6.322 14.711 7.65 17.987Q11.177 18.237 10.074 15.545ZM8.358 10.265Q7.668 7.438 4.962 9.713Q5.814 13.144 8.034 11.263ZM13.047 11.154Q15.017 11.25 14.175 9.007Q11.781 8.899 12.481 10.743ZM13.128 12.735Q13.645 14.638 15.519 13.143Q14.882 10.833 13.345 12.069ZM11.65 13.3Q10 14.38 12 15.7Q14 14.38 12.35 13.3ZM10.655 12.069Q9.118 10.833 8.481 13.143Q10.355 14.638 10.872 12.735ZM11.519 10.743Q12.219 8.899 9.825 9.007Q8.983 11.25 10.953 11.154ZM11.1 12a0.9 0.9 0 1 0 1.8 0a0.9 0.9 0 1 0 -1.8 0Z"
      ],
      "counters": 11
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
      "ring": "leaf.300",
      "plant": "bloom.500",
      "accent": "sun.500"
    }
  }
};

export default AvatarRose;
