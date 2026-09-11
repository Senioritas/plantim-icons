// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const FamilyOrchidaceae: PlantimIconV4Definition = {
  "id": "family.orchidaceae",
  "label": "Orchidaceae",
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
                "d": "M12 22c-3-4-3-7 0-9"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M4 8.5a3.5 2.5 0 1 0 7 0a3.5 2.5 0 1 0 -7 0"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M13 8.5a3.5 2.5 0 1 0 7 0a3.5 2.5 0 1 0 -7 0"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 9c-2-2-2-4 0-6 2 2 2 4 0 6Z"
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
                "r": "1.5"
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
      "primary": "leaf.700",
      "accent": "leaf.700"
    }
  }
};

export default FamilyOrchidaceae;
