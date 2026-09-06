// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 8d5fe9b18f917e8c095caf0517d42e674ebd7e2672453b9ffe210c682a95530c).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const ActionSearch: PlantimIconV4Definition = {
  "id": "action.search",
  "label": "Search",
  "tier": "P1",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "primary",
          "role": "primary",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "11",
                "cy": "11",
                "r": "8"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "m21 21-4.3-4.3"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "primary",
          "role": "primary",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "11",
                "cy": "11",
                "r": "8"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "m21 21-4.3-4.3"
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
        "primary"
      ]
    },
    "multicolor": {
      "primary": "ink.900"
    }
  }
};

export default ActionSearch;
