// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 9602ac5dc4533c49ba0bd398380a25061d9a06697a3391cb61ca5d1e1319abe7).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const UtilityBrain: PlantimIconV4Definition = {
  "id": "utility.brain",
  "label": "Brain",
  "tier": "P1",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "skull",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 3.6C9.8 3.6 8.5 5.2 8.4 6.7C7 7.1 6.2 8.4 6.2 9.8C6.2 10.5 6.4 11.2 6.8 11.7C6.3 12.4 6 13.2 6 14.1C6 15.8 7.1 17.2 8.7 17.9C9 19.4 10.4 20.4 12 20.4C13.6 20.4 15 19.4 15.3 17.9C16.9 17.2 18 15.8 18 14.1C18 13.2 17.7 12.4 17.2 11.7C17.6 11.2 17.8 10.5 17.8 9.8C17.8 8.4 17 7.1 15.6 6.7C15.5 5.2 14.2 3.6 12 3.6Z"
              }
            }
          ]
        },
        {
          "name": "folds",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 4V20"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "skull",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 3.4C9.7 3.4 8.4 5 8.3 6.5C6.8 6.9 6 8.3 6 9.7C6 10.5 6.3 11.2 6.7 11.7C6.1 12.4 5.8 13.3 5.8 14.2C5.8 15.9 6.9 17.4 8.6 18C8.9 19.6 10.3 20.6 12 20.6C13.7 20.6 15.1 19.6 15.4 18C17.1 17.4 18.2 15.9 18.2 14.2C18.2 13.3 17.9 12.4 17.3 11.7C17.7 11.2 18 10.5 18 9.7C18 8.3 17.2 6.9 15.7 6.5C15.6 5 14.3 3.4 12 3.4Z"
              }
            }
          ]
        },
        {
          "name": "folds",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 3.6V20.4"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M8.4 8.4C9.6 8.9 10.4 9.9 10.6 11"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M15.6 8.4C14.4 8.9 13.6 9.9 13.4 11"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M9 14.6C10 14.2 10.9 14.4 11.6 15.2"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M15 14.6C14 14.2 13.1 14.4 12.4 15.2"
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
        "skull"
      ]
    },
    "multicolor": {
      "skull": "bloom.500",
      "folds": "bloom.500"
    }
  }
};

export default UtilityBrain;
