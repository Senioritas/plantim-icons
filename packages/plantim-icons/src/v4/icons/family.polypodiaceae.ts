// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash f12d51dd066e0493bb460f13ca0d9c957e58542320303fbce9aadf893972be4b).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const FamilyPolypodiaceae: PlantimIconV4Definition = {
  "id": "family.polypodiaceae",
  "label": "Polypodiaceae",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "rachis",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 21V6"
              }
            }
          ]
        },
        {
          "name": "blade",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 18.5C7 18.5 3 16 3 11C6 12 8 13.5 9.5 16C8.5 11.5 6.5 9 3.5 8C7 8 9.5 9.5 11 12.5C10.5 8 10 6 12 4Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 18.5C17 18.5 21 16 21 11C18 12 16 13.5 14.5 16C15.5 11.5 17.5 9 20.5 8C17 8 14.5 9.5 13 12.5C13.5 8 14 6 12 4Z"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "rachis",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 21V6"
              }
            }
          ]
        },
        {
          "name": "blade",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 19C8 19 4 17 3.5 12.5C6 13 7.5 14 9 15.5C8 12 6 10 3.5 8.5C6.5 8.5 9 9.5 10.5 11.5C10 8 9 6 12 4Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 19C16 19 20 17 20.5 12.5C18 13 16.5 14 15 15.5C16 12 18 10 20.5 8.5C17.5 8.5 15 9.5 13.5 11.5C14 8 15 6 12 4Z"
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
        "rachis",
        "blade"
      ]
    },
    "multicolor": {
      "rachis": "leaf.700",
      "blade": "leaf.500"
    }
  }
};

export default FamilyPolypodiaceae;
