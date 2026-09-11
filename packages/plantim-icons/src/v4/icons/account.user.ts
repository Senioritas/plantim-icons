// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 9602ac5dc4533c49ba0bd398380a25061d9a06697a3391cb61ca5d1e1319abe7).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const AccountUser: PlantimIconV4Definition = {
  "id": "account.user",
  "label": "Profile",
  "tier": "P0",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "ring",
          "role": "container",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "12",
                "r": "9.4"
              }
            }
          ]
        },
        {
          "name": "person",
          "role": "primary",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "9.4",
                "r": "3.5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M5.6 18.9a7.9 7.9 0 0 1 12.8 0"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "ring",
          "role": "container",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "12",
                "r": "9.25"
              }
            }
          ]
        },
        {
          "name": "person",
          "role": "primary",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "9.6",
                "r": "3.3"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M5.9 18.7a7.7 7.7 0 0 1 12.2 0"
              }
            }
          ]
        }
      ]
    },
    "display": {
      "layers": [
        {
          "name": "ring",
          "role": "container",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "12",
                "r": "9.25"
              }
            }
          ]
        },
        {
          "name": "person",
          "role": "primary",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "9.6",
                "r": "3.3"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M5.9 18.7a7.7 7.7 0 0 1 12.2 0"
              }
            }
          ]
        }
      ]
    }
  },
  "solid": {
    "micro": {
      "paths": [
        "M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5Zm0 4.4a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2Zm0 15.1a9.4 9.4 0 0 1-6.8-2.9 8.7 8.7 0 0 1 13.6 0 9.4 9.4 0 0 1-6.8 2.9Z"
      ],
      "counters": 2
    },
    "base": {
      "paths": [
        "M12 1.75C6.34 1.75 1.75 6.34 1.75 12c0 5.66 4.59 10.25 10.25 10.25S22.25 17.66 22.25 12 17.66 1.75 12 1.75Zm0 4.55a3.9 3.9 0 1 1 0 7.8 3.9 3.9 0 0 1 0-7.8Zm0 15a9.2 9.2 0 0 1-6.6-2.8 8.5 8.5 0 0 1 13.2 0 9.2 9.2 0 0 1-6.6 2.8Z"
      ],
      "counters": 2
    }
  },
  "variants": {
    "duotone": {
      "primary": [
        "person"
      ]
    },
    "multicolor": {
      "ring": "ink.500",
      "person": "leaf.700"
    }
  },
  "animation": "profileNod"
};

export default AccountUser;
