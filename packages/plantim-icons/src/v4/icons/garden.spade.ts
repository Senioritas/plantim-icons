// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const GardenSpade: PlantimIconV4Definition = {
  "id": "garden.spade",
  "label": "Spade",
  "tier": "P2",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "handle",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8 4h8"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 4v11"
              }
            }
          ]
        },
        {
          "name": "blade",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M9 15h6l-3 5.5Z"
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
        "handle"
      ]
    },
    "multicolor": {
      "handle": "ink.900",
      "blade": "ink.500"
    }
  }
};

export default GardenSpade;
