// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const CalendarAdd: PlantimIconV4Definition = {
  "id": "calendar.add",
  "label": "Add event",
  "tier": "P1",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "frame",
          "role": "container",
          "nodes": [
            {
              "type": "rect",
              "attrs": {
                "x": "3.5",
                "y": "5",
                "width": "17",
                "height": "15.5",
                "rx": "3"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M3.5 10.5h17"
              }
            }
          ]
        },
        {
          "name": "rings",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8 3v4"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M16 3v4"
              }
            }
          ]
        },
        {
          "name": "plus",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 12.5v6"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M9 15.5h6"
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
              "type": "rect",
              "attrs": {
                "x": "3.5",
                "y": "5",
                "width": "17",
                "height": "15.5",
                "rx": "3"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M3.5 10.5h17"
              }
            }
          ]
        },
        {
          "name": "rings",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M8 3v4"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M16 3v4"
              }
            }
          ]
        },
        {
          "name": "plus",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 13v5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M9.5 15.5h5"
              }
            }
          ]
        }
      ]
    }
  },
  "solid": {
    "base": {
      "paths": [
        "M2.5 8a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v10.5a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3V8Zm2 3.3a.85.85 0 0 0 0 1.7h15a.85.85 0 0 0 0-1.7h-15Zm6.6 1h1.8v2.3h2.3v1.8h-2.3v2.3h-1.8v-2.3H8.8v-1.8h2.3Z",
        "M7 2.5a1 1 0 0 1 2 0V7a1 1 0 0 1-2 0V2.5Z",
        "M15 2.5a1 1 0 0 1 2 0V7a1 1 0 0 1-2 0V2.5Z"
      ],
      "counters": 2
    }
  },
  "variants": {
    "duotone": {
      "primary": [
        "frame",
        "plus"
      ]
    },
    "multicolor": {
      "frame": "ink.900",
      "rings": "ink.500",
      "plus": "leaf.500"
    }
  }
};

export default CalendarAdd;
