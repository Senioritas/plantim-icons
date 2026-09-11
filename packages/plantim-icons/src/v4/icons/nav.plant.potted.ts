// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const NavPlantPotted: PlantimIconV4Definition = {
  "id": "nav.plant.potted",
  "label": "Plant Potted",
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
                "d": "M6 13L18 13"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M7 13l1.2 7h7.6l1.2-7"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 13L12 8"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 11C10 11 8.5 9.5 8.5 7.5c2 0 3.5 1.5 3.5 3.5z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 10C14 10 15.5 8.5 15.5 6.5c-2 0-3.5 1.5-3.5 3.5z"
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

export default NavPlantPotted;
