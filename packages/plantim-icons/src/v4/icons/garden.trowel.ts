// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash f12d51dd066e0493bb460f13ca0d9c957e58542320303fbce9aadf893972be4b).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const GardenTrowel: PlantimIconV4Definition = {
  "id": "garden.trowel",
  "label": "Trowel",
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
                "d": "M13.5 10.5 18 6"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M16 4l4 4-2 2-4-4Z"
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
                "d": "M4 20c-1-3 .5-7 3.5-8.5l4 4C10 18.5 6 20.5 4 20Z"
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
                "d": "M13.5 10.5 18 6"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M16 4l4 4-2 2-4-4Z"
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
                "d": "M4 20c-1-3 .5-7 3.5-8.5l4 4C10 18.5 6 20.5 4 20Z"
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

export default GardenTrowel;
