// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash f12d51dd066e0493bb460f13ca0d9c957e58542320303fbce9aadf893972be4b).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const FamilyBegoniaceae: PlantimIconV4Definition = {
  "id": "family.begoniaceae",
  "label": "Begoniaceae",
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
                "d": "M16 21C15 18.5 14 16.5 12.5 15"
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
                "d": "M12.5 15C6 15.5 2 10.8 3.3 6.6C4.3 3.2 8.5 2.2 11.5 3.8C14.1 5.1 15 8 15.5 10.5C16 8 16.5 4.8 18 3C19.7 6.6 19.5 11.2 12.5 15Z"
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
                "d": "M16 21C15 18.5 14 16.5 12.5 15"
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
                "d": "M12.5 15C6.5 15.5 2.5 11 3.5 7C4.4 3.5 8.5 2.5 11.5 4C14 5.2 15 8 15.5 10.5C16 8 16.5 5 18 3C19.5 6.5 19.5 11 12.5 15Z"
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
                "d": "M12.5 14.5C9.5 12 7 10 5 9"
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

export default FamilyBegoniaceae;
