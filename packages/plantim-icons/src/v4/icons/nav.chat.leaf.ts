// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 9602ac5dc4533c49ba0bd398380a25061d9a06697a3391cb61ca5d1e1319abe7).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const NavChatLeaf: PlantimIconV4Definition = {
  "id": "nav.chat.leaf",
  "label": "Chat (leaf)",
  "tier": "P2",
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
        },
        {
          "name": "leaf",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 7.2C9.576 8.6 8.8 10.6 8.8 11.76C8.8 13.04 10.109 14.2 12 14.4C13.891 14.2 15.2 13.04 15.2 11.76C15.2 10.6 14.424 8.6 12 7.2Z"
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
          "name": "leaf",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 7.2C9.727 8.561 9 10.506 9 11.633C9 12.878 10.227 14.006 12 14.2C13.773 14.006 15 12.878 15 11.633C15 10.506 14.273 8.561 12 7.2Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 13.4V9"
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
        "bubble"
      ]
    },
    "multicolor": {
      "bubble": "leaf.700",
      "leaf": "leaf.300"
    }
  }
};

export default NavChatLeaf;
