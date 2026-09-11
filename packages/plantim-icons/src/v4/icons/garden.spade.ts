// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash f12d51dd066e0493bb460f13ca0d9c957e58542320303fbce9aadf893972be4b).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const GardenSpade: PlantimIconV4Definition = {
  "id": "garden.spade",
  "label": "Spade",
  "tier": "P2",
  "grades": {
    "micro": {
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
    },
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
