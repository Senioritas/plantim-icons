// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash f12d51dd066e0493bb460f13ca0d9c957e58542320303fbce9aadf893972be4b).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const GenusPalm: PlantimIconV4Definition = {
  "id": "genus.palm",
  "label": "Palm",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "trunk",
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
          "name": "fronds",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 12C8 11 5 8.5 4 5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 12C16 11 19 8.5 20 5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 12C11 8.5 11 5.5 12 3"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "trunk",
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
          "name": "fronds",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 12C8.5 11 5.5 8 4.5 4.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 12C15.5 11 18.5 8 19.5 4.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 12C10.5 8.5 10 5.5 11 3"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 12C13.5 8.5 14 5.5 13 3"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 12C8.5 12.5 5.5 12 3.5 10.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 12C15.5 12.5 18.5 12 20.5 10.5"
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
        "trunk"
      ]
    },
    "multicolor": {
      "trunk": "earth.600",
      "fronds": "leaf.700"
    }
  }
};

export default GenusPalm;
