// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const PlantPetUnsafe: PlantimIconV4Definition = {
  "id": "plant.pet.unsafe",
  "label": "Toxic to pets",
  "tier": "P2",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "pad",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 21c-2.6 0-5-1.6-5-4 0-1.9 2.2-3.4 5-3.4s5 1.5 5 3.4c0 2.4-2.4 4-5 4Z"
              }
            }
          ]
        },
        {
          "name": "toes",
          "role": "secondary",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "5.5",
                "cy": "10.5",
                "r": "1.9"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "9.5",
                "cy": "6.5",
                "r": "1.9"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "14.5",
                "cy": "6.5",
                "r": "1.9"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "18.5",
                "cy": "10.5",
                "r": "1.9"
              },
              "filled": true
            }
          ]
        },
        {
          "name": "slash",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M4 4l16 16"
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
        "pad",
        "slash"
      ]
    },
    "multicolor": {
      "pad": "ink.500",
      "toes": "ink.500",
      "slash": "status.error"
    }
  }
};

export default PlantPetUnsafe;
