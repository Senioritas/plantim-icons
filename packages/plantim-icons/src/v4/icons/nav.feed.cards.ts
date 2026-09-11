// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 9602ac5dc4533c49ba0bd398380a25061d9a06697a3391cb61ca5d1e1319abe7).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const NavFeedCards: PlantimIconV4Definition = {
  "id": "nav.feed.cards",
  "label": "Feed (cards)",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "back",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M7.5 7h11a1.5 1.5 0 0 1 1.5 1.5v7.5"
              }
            }
          ]
        },
        {
          "name": "front",
          "role": "primary",
          "nodes": [
            {
              "type": "rect",
              "attrs": {
                "x": "3.5",
                "y": "9.5",
                "width": "13",
                "height": "10.5",
                "rx": "2"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "back",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M7 6.5h12a1.5 1.5 0 0 1 1.5 1.5v8"
              }
            }
          ]
        },
        {
          "name": "front",
          "role": "primary",
          "nodes": [
            {
              "type": "rect",
              "attrs": {
                "x": "3.5",
                "y": "9",
                "width": "13",
                "height": "11",
                "rx": "2"
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
        "front"
      ]
    },
    "multicolor": {
      "front": "ink.900",
      "back": "ink.500"
    }
  }
};

export default NavFeedCards;
