// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 5c17109caec158aa49b07c8f61ff61b5c9662d2af484748da61c1ce52112809c).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const FamilyAraceae: PlantimIconV4Definition = {
  "id": "family.araceae",
  "label": "Araceae",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "stem",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 21v-4"
              }
            }
          ]
        },
        {
          "name": "leaf",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 17C6.8 16 3 11.7 3 8C3 5.3 5.1 3.5 7.4 3.5C9.5 3.5 11.2 5 12 6.7C12.8 5 14.5 3.5 16.6 3.5C18.9 3.5 21 5.3 21 8C21 11.7 17.2 16 12 17Z"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "stem",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 21v-4.5"
              }
            }
          ]
        },
        {
          "name": "leaf",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 16.5C7 15.5 3.5 11.5 3.5 8C3.5 5.5 5.5 4 7.5 4C9.5 4 11.2 5.4 12 7C12.8 5.4 14.5 4 16.5 4C18.5 4 20.5 5.5 20.5 8C20.5 11.5 17 15.5 12 16.5Z"
              }
            }
          ]
        },
        {
          "name": "midrib",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 15v-6"
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
        "leaf",
        "midrib"
      ]
    },
    "multicolor": {
      "stem": "leaf.700",
      "leaf": "leaf.500",
      "midrib": "leaf.700"
    }
  }
};

export default FamilyAraceae;
