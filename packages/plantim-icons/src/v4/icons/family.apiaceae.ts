// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash f12d51dd066e0493bb460f13ca0d9c957e58542320303fbce9aadf893972be4b).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const FamilyApiaceae: PlantimIconV4Definition = {
  "id": "family.apiaceae",
  "label": "Apiaceae",
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
                "d": "M12 21v-8"
              }
            }
          ]
        },
        {
          "name": "stalks",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 13 6 8"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 13V6"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 13 18 8"
              }
            }
          ]
        },
        {
          "name": "flowers",
          "role": "accent",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "5.5",
                "cy": "7.5",
                "r": "1.7"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "5",
                "r": "1.7"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "18.5",
                "cy": "7.5",
                "r": "1.7"
              },
              "filled": true
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
                "d": "M12 21v-9"
              }
            }
          ]
        },
        {
          "name": "stalks",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 12 5 7"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 12 8.5 5.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 12v-6.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 12 15.5 5.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 12 19 7"
              }
            }
          ]
        },
        {
          "name": "flowers",
          "role": "accent",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "4.5",
                "cy": "6.5",
                "r": "1.4"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "8",
                "cy": "5",
                "r": "1.4"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "4.6",
                "r": "1.4"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "16",
                "cy": "5",
                "r": "1.4"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "19.5",
                "cy": "6.5",
                "r": "1.4"
              },
              "filled": true
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
        "stalks",
        "flowers"
      ]
    },
    "multicolor": {
      "stem": "leaf.700",
      "stalks": "leaf.500",
      "flowers": "leaf.700"
    }
  }
};

export default FamilyApiaceae;
