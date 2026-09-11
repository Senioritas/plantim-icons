// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const WeatherSun: PlantimIconV4Definition = {
  "id": "weather.sun",
  "label": "Sun",
  "tier": "P1",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "primary",
          "role": "primary",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "12",
                "r": "4"
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
                "cy": "4",
                "r": "1.1"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "20",
                "cy": "12",
                "r": "1.1"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "20",
                "r": "1.1"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "4",
                "cy": "12",
                "r": "1.1"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "17.657",
                "cy": "6.343",
                "r": "1.1"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "17.657",
                "cy": "17.657",
                "r": "1.1"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "6.343",
                "cy": "17.657",
                "r": "1.1"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "6.343",
                "cy": "6.343",
                "r": "1.1"
              },
              "filled": true
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
        "primary"
      ]
    },
    "multicolor": {
      "primary": "sun.500",
      "accent": "sun.500"
    }
  }
};

export default WeatherSun;
