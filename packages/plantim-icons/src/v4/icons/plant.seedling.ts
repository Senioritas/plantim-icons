// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash f12d51dd066e0493bb460f13ca0d9c957e58542320303fbce9aadf893972be4b).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const PlantSeedling: PlantimIconV4Definition = {
  "id": "plant.seedling",
  "label": "Seedling",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "soil",
          "role": "container",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M5 20h14"
              }
            }
          ]
        },
        {
          "name": "stem",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 20v-6"
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
                "d": "M12 14C9.6 14 7.6 12 7.6 9.5C10 9.5 12 11.5 12 14Z"
              }
            }
          ]
        },
        {
          "name": "seed",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M9 20c0-1.7 1.3-3 3-3s3 1.3 3 3Z"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "soil",
          "role": "container",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M5 20h14"
              }
            }
          ]
        },
        {
          "name": "stem",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 20v-6"
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
                "d": "M12 14C9.6 14 7.6 12 7.6 9.5C10 9.5 12 11.5 12 14Z"
              }
            }
          ]
        },
        {
          "name": "seed",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M9 20c0-1.7 1.3-3 3-3s3 1.3 3 3Z"
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
        "stem",
        "leaf"
      ]
    },
    "multicolor": {
      "soil": "earth.600",
      "stem": "leaf.700",
      "leaf": "leaf.500",
      "seed": "earth.400"
    }
  }
};

export default PlantSeedling;
