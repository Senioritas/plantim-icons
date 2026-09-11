// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const PlantThriving: PlantimIconV4Definition = {
  "id": "plant.thriving",
  "label": "Thriving",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "ground",
          "role": "container",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M6 21h12"
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
                "d": "M12 21V9"
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
                "d": "M12 16C9.5 16.4 6.8 15 6.4 12C9 11.6 11.6 13 12 16Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 13C14.5 13.4 17.2 12 17.6 9C15 8.6 12.4 10 12 13Z"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "ground",
          "role": "container",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M6 21h12"
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
                "d": "M12 21V8"
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
                "d": "M12 16C9.5 16.4 6.8 15 6.4 12C9 11.6 11.6 13 12 16Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 13C14.5 13.4 17.2 12 17.6 9C15 8.6 12.4 10 12 13Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 8.5C10 8 8.5 6 8.6 3.5C11 4 12.4 6 12 8.5Z"
              }
            }
          ]
        },
        {
          "name": "spark",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M18 3.5v3"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M16.5 5h3"
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
        "leaves"
      ]
    },
    "multicolor": {
      "ground": "earth.600",
      "stem": "leaf.700",
      "leaves": "leaf.500",
      "spark": "sun.500"
    }
  }
};

export default PlantThriving;
