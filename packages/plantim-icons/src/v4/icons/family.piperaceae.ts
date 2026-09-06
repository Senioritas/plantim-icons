// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 5c17109caec158aa49b07c8f61ff61b5c9662d2af484748da61c1ce52112809c).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const FamilyPiperaceae: PlantimIconV4Definition = {
  "id": "family.piperaceae",
  "label": "Piperaceae",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "stalks",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 21 8 13"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 21 16 15"
              }
            }
          ]
        },
        {
          "name": "leaves",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8 13C4.4 13 2.6 10.2 3.4 7.2C4.1 4.5 7 3.2 9.4 4.6C11.3 5.7 11.6 8.6 10 11C9.2 12.2 8.5 13 8 13Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M16 15C13.4 15 12 12.9 12.8 10.6C13.4 8.7 15.6 7.8 17.4 9C18.9 10 19.2 12.2 17.8 13.9C17 14.6 16.6 15 16 15Z"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "stalks",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 21 8 12"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 21 16 14"
              }
            }
          ]
        },
        {
          "name": "leaves",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8 12C4.7 12 3 9.6 3.5 7C4 4.6 6.2 3.2 8.6 4C10.6 4.7 11.6 7.2 10.7 9.6C10.1 11.2 9.3 12 8 12Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M16 14C13.6 14 12.4 12.2 12.9 10.2C13.3 8.5 15 7.6 16.8 8.3C18.3 8.9 19 10.8 18.2 12.5C17.7 13.6 17 14 16 14Z"
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
        "leaves"
      ]
    },
    "multicolor": {
      "stalks": "leaf.700",
      "leaves": "leaf.500"
    }
  }
};

export default FamilyPiperaceae;
