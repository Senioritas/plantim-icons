// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const GardenWheelbarrow: PlantimIconV4Definition = {
  "id": "garden.wheelbarrow",
  "label": "Wheelbarrow",
  "tier": "P2",
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
                "cx": "7",
                "cy": "18",
                "r": "2"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M3 5h2l2 9h8l4-7H6"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M15 14l4 4"
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
      "primary": "ink.900"
    }
  }
};

export default GardenWheelbarrow;
