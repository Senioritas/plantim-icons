// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 9602ac5dc4533c49ba0bd398380a25061d9a06697a3391cb61ca5d1e1319abe7).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const GardenRake: PlantimIconV4Definition = {
  "id": "garden.rake",
  "label": "Rake",
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
                "d": "M12 3v9"
              }
            }
          ]
        },
        {
          "name": "head",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M6 12h12"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M7 12v4"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 12v4"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M17 12v4"
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
                "d": "M12 3v9"
              }
            }
          ]
        },
        {
          "name": "head",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M6 12h12"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M6.5 12v3.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M9.25 12v3.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 12v3.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M14.75 12v3.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M17.5 12v3.5"
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
      "head": "ink.500"
    }
  }
};

export default GardenRake;
