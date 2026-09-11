// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 9602ac5dc4533c49ba0bd398380a25061d9a06697a3391cb61ca5d1e1319abe7).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const NavigationHome: PlantimIconV4Definition = {
  "id": "navigation.home",
  "label": "Today",
  "tier": "P0",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "shell",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M3.6 10.5a2 2 0 0 1 .74-1.55l6.4-5.25a2 2 0 0 1 2.52 0l6.4 5.25a2 2 0 0 1 .74 1.55V19a2 2 0 0 1-2 2H5.6a2 2 0 0 1-2-2Z"
              }
            }
          ]
        },
        {
          "name": "door",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M10 21v-3.9a2 2 0 0 1 4 0V21"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "shell",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M3.9 10.4a2 2 0 0 1 .74-1.55l6.1-5a2 2 0 0 1 2.52 0l6.1 5a2 2 0 0 1 .74 1.55V19a2 2 0 0 1-2 2H5.9a2 2 0 0 1-2-2Z"
              }
            }
          ]
        },
        {
          "name": "door",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M10.2 21v-4.3a1.8 1.8 0 0 1 3.6 0V21"
              }
            }
          ]
        }
      ]
    },
    "display": {
      "layers": [
        {
          "name": "shell",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M3.9 10.4a2 2 0 0 1 .74-1.55l6.1-5a2 2 0 0 1 2.52 0l6.1 5a2 2 0 0 1 .74 1.55V19a2 2 0 0 1-2 2H5.9a2 2 0 0 1-2-2Z"
              }
            }
          ]
        },
        {
          "name": "door",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M10.2 21v-4.3a1.8 1.8 0 0 1 3.6 0V21"
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
        "M13.6 2.86a3 3 0 0 0-3.2 0L4 8.1a3 3 0 0 0-1.4 2.4V19a3 3 0 0 0 3 3h4.3v-3.8a2.1 2.1 0 0 1 4.2 0V22h4.3a3 3 0 0 0 3-3v-8.5A3 3 0 0 0 20 8.1L13.6 2.86Z"
      ],
      "counters": 0
    },
    "base": {
      "paths": [
        "M13.55 3.06a2.9 2.9 0 0 0-3.1 0l-6.1 5A3 3 0 0 0 2.9 10.4V19a3 3 0 0 0 3 3h4.05v-4a2 2 0 0 1 4 0V22h4.05a3 3 0 0 0 3-3v-8.6a3 3 0 0 0-1.45-2.34l-6.1-5Z"
      ],
      "counters": 0
    }
  },
  "variants": {
    "duotone": {
      "primary": [
        "shell"
      ]
    },
    "multicolor": {
      "shell": "ink.900",
      "door": "leaf.700"
    }
  },
  "animation": "homeSettle"
};

export default NavigationHome;
