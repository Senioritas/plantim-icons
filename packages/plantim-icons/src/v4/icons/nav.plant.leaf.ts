// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 9602ac5dc4533c49ba0bd398380a25061d9a06697a3391cb61ca5d1e1319abe7).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const NavPlantLeaf: PlantimIconV4Definition = {
  "id": "nav.plant.leaf",
  "label": "Plant (leaf)",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "leaf",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 3.6C7.4 6.9 5.9 11.6 5.9 14.4C5.9 17.5 8.4 20.2 12 20.7C15.6 20.2 18.1 17.5 18.1 14.4C18.1 11.6 16.6 6.9 12 3.6Z"
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
                "d": "M12 18.8V7.2"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "leaf",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 3C7 6.5 5.4 11.5 5.4 14.4C5.4 17.6 8.1 20.5 12 21C15.9 20.5 18.6 17.6 18.6 14.4C18.6 11.5 17 6.5 12 3Z"
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
                "d": "M12 19.5V6.5"
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
        "leaf"
      ]
    },
    "multicolor": {
      "leaf": "leaf.700",
      "midrib": "leaf.500"
    }
  }
};

export default NavPlantLeaf;
