// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash f12d51dd066e0493bb460f13ca0d9c957e58542320303fbce9aadf893972be4b).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const NavCalendarLeaf: PlantimIconV4Definition = {
  "id": "nav.calendar.leaf",
  "label": "Calendar (leaf)",
  "tier": "P2",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "frame",
          "role": "container",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M4 6.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
              }
            }
          ]
        },
        {
          "name": "header",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M4 8.6h16"
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
                "d": "M12 10.6C9.273 12.039 8.4 14.094 8.4 15.287C8.4 16.602 9.873 17.794 12 18C14.127 17.794 15.6 16.602 15.6 15.287C15.6 14.094 14.727 12.039 12 10.6Z"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "frame",
          "role": "container",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M4 6.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
              }
            }
          ]
        },
        {
          "name": "header",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M4 8.5h16"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M8 3.5v3"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M16 3.5v3"
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
                "d": "M12 10.4C9.424 11.8 8.6 13.8 8.6 14.96C8.6 16.24 9.991 17.4 12 17.6C14.009 17.4 15.4 16.24 15.4 14.96C15.4 13.8 14.576 11.8 12 10.4Z"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M12 16.4V12"
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
        "frame",
        "header"
      ]
    },
    "multicolor": {
      "frame": "ink.900",
      "header": "ink.900",
      "leaf": "leaf.500"
    }
  }
};

export default NavCalendarLeaf;
