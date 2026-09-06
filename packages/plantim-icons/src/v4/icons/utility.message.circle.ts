// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 467e42dfdc05a0d93e9b26d62c1d9a4e81591244adffcca1165662ea98bf6399).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const UtilityMessageCircle: PlantimIconV4Definition = {
  "id": "utility.message.circle",
  "label": "Chat",
  "tier": "P0",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "bubble",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "bubble",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z"
              }
            }
          ]
        },
        {
          "name": "dots",
          "role": "accent",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "8.1",
                "cy": "12",
                "r": "1.15"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "11.9",
                "cy": "12",
                "r": "1.15"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "15.7",
                "cy": "12",
                "r": "1.15"
              },
              "filled": true
            }
          ]
        }
      ]
    },
    "display": {
      "layers": [
        {
          "name": "bubble",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z"
              }
            }
          ]
        },
        {
          "name": "dots",
          "role": "accent",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "8.1",
                "cy": "12",
                "r": "1.15"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "11.9",
                "cy": "12",
                "r": "1.15"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "15.7",
                "cy": "12",
                "r": "1.15"
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
      "paths": [
        "M11.9 21.7a9.7 9.7 0 1 0 0-19.4 9.7 9.7 0 0 0 0 19.4Z",
        "M8.4 19.4 3 21.1 4.4 15.5C5.3 17.1 6.8 18.5 8.4 19.4Z"
      ],
      "counters": 0
    },
    "base": {
      "paths": [
        "M11.9 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM8.1 10.7a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Zm3.8 0a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Zm3.8 0a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z",
        "M8.4 19.3 3.1 20.9 4.5 15.6C5.4 17.1 6.8 18.4 8.4 19.3Z"
      ],
      "counters": 3
    }
  },
  "variants": {
    "duotone": {
      "primary": [
        "bubble"
      ]
    },
    "multicolor": {
      "bubble": "leaf.700",
      "dots": "leaf.300"
    }
  },
  "animation": "chatPop"
};

export default UtilityMessageCircle;
