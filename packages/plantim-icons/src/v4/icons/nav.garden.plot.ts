// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const NavGardenPlot: PlantimIconV4Definition = {
  "id": "nav.garden.plot",
  "label": "Garden Plot",
  "tier": "P2",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "primary",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 3L12 21"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M3 12L21 12"
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
                "cx": "7.5",
                "cy": "7.5",
                "r": "1.3"
              }
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "16.5",
                "cy": "16.5",
                "r": "1.3"
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
        "primary"
      ]
    },
    "multicolor": {
      "primary": "ink.900",
      "accent": "ink.900"
    }
  }
};

export default NavGardenPlot;
