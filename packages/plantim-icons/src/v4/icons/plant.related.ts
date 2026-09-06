// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 5c17109caec158aa49b07c8f61ff61b5c9662d2af484748da61c1ce52112809c).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const PlantRelated: PlantimIconV4Definition = {
  "id": "plant.related",
  "label": "Related plants",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "back",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M15.5 4C9.5 5 5.5 9.5 6 15.5C12 15 16 10.5 15.5 4Z"
              }
            }
          ]
        },
        {
          "name": "front",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M19 9C14.5 9.8 11.5 13.2 12 17.8C16.5 17 19.5 13.6 19 9Z"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "back",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M15.5 4C9.5 5 5.5 9.5 6 15.5C12 15 16 10.5 15.5 4Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M8.5 13 13.5 7"
              }
            }
          ]
        },
        {
          "name": "front",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M19 9C14.5 9.8 11.5 13.2 12 17.8C16.5 17 19.5 13.6 19 9Z"
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
        "front"
      ]
    },
    "multicolor": {
      "back": "leaf.300",
      "front": "leaf.700"
    }
  }
};

export default PlantRelated;
