// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 8918930f0901ef326303681d0b07a17a8d539f03b71776012e2defbe70af3284).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const ActionAdd: PlantimIconV4Definition = {
  "id": "action.add",
  "label": "Add",
  "tier": "P0",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "plus",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 5v14"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M5 12h14"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "plus",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 5.5v13"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M5.5 12h13"
              }
            }
          ]
        }
      ]
    },
    "display": {
      "layers": [
        {
          "name": "plus",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 5.5v13"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M5.5 12h13"
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
      "strokeWidth": 3.4,
      "counters": 0
    },
    "base": {
      "mode": "bold",
      "strokeWidth": 3.2,
      "counters": 0
    }
  },
  "variants": {
    "duotone": {
      "primary": [
        "plus"
      ]
    },
    "multicolor": {
      "plus": "leaf.700"
    }
  },
  "animation": "addSpin"
};

export default ActionAdd;
