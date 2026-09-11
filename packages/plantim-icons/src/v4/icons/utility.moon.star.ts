// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 9602ac5dc4533c49ba0bd398380a25061d9a06697a3391cb61ca5d1e1319abe7).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const UtilityMoonStar: PlantimIconV4Definition = {
  "id": "utility.moon.star",
  "label": "Moon & star",
  "tier": "P1",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "moon",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M20.5 15.6A8.6 8.6 0 1 1 9.6 4.4A6.9 6.9 0 0 0 20.5 15.6Z"
              }
            }
          ]
        },
        {
          "name": "star",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M18.2 2.8 19.3 5.25 22 5.55 20 7.4 20.55 10 18.2 8.65 15.85 10 16.4 7.4 14.4 5.55 17.1 5.25Z"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "moon",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M20.5 15.2A8.4 8.4 0 1 1 10 4.2A6.6 6.6 0 0 0 20.5 15.2Z"
              }
            }
          ]
        },
        {
          "name": "star",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M18.2 3.2 19.15 5.35 21.5 5.6 19.75 7.2 20.25 9.5 18.2 8.3 16.15 9.5 16.65 7.2 14.9 5.6 17.25 5.35Z"
              }
            }
          ]
        }
      ]
    }
  },
  "solid": {
    "micro": {
      "mode": "bold",
      "strokeWidth": 3.3,
      "counters": 0
    },
    "base": {
      "mode": "bold",
      "strokeWidth": 3.1,
      "counters": 0
    }
  },
  "variants": {
    "duotone": {
      "primary": [
        "moon"
      ]
    },
    "multicolor": {
      "moon": "ink.900",
      "star": "sun.300"
    }
  }
};

export default UtilityMoonStar;
