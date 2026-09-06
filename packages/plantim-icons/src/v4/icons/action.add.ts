// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 467e42dfdc05a0d93e9b26d62c1d9a4e81591244adffcca1165662ea98bf6399).
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
