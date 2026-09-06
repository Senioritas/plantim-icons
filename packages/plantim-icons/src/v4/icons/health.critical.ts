// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 5c17109caec158aa49b07c8f61ff61b5c9662d2af484748da61c1ce52112809c).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const HealthCritical: PlantimIconV4Definition = {
  "id": "health.critical",
  "label": "Critical",
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
                "d": "M17.5 3.5C9.5 4 4 9.5 4 17.5C12 17 17 11.5 17.5 3.5Z"
              }
            }
          ]
        },
        {
          "name": "badge",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M15.4 15.4l4.2 4.2"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M19.6 15.4l-4.2 4.2"
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
                "d": "M17.5 3.5C9.5 4 4 9.5 4 17.5C12 17 17 11.5 17.5 3.5Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M7.5 14 14 7.5"
              }
            }
          ]
        },
        {
          "name": "badge",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M15.4 15.4l4.2 4.2"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M19.6 15.4l-4.2 4.2"
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
        "leaf",
        "badge"
      ]
    },
    "multicolor": {
      "leaf": "status.error",
      "badge": "status.error"
    }
  }
};

export default HealthCritical;
