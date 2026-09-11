// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const CalendarDate: PlantimIconV4Definition = {
  "id": "calendar.date",
  "label": "Calendar",
  "tier": "P0",
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
                "y": "5.5",
                "width": "17",
                "height": "15",
                "rx": "3"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M3.5 10.8h17"
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
          "name": "date",
          "role": "accent",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "15.9",
                "r": "2"
              },
              "filled": true
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
          "name": "date",
          "role": "accent",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "15.7",
                "r": "1.7"
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
          "name": "date",
          "role": "accent",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "9.4",
                "cy": "14.4",
                "r": "1.5"
              },
              "filled": true
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "14.6",
                "cy": "17",
                "r": "1.5"
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
        "M2.5 8.5a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-10Zm2.1 3.2a.95.95 0 0 0 0 1.9h14.8a.95.95 0 0 0 0-1.9H4.6Zm7.4 2.7a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 1 0 0-4.8Z",
        "M6.9 2.4a1.1 1.1 0 0 1 2.2 0V7a1.1 1.1 0 0 1-2.2 0V2.4Z",
        "M14.9 2.4a1.1 1.1 0 0 1 2.2 0V7a1.1 1.1 0 0 1-2.2 0V2.4Z"
      ],
      "counters": 2
    },
    "base": {
      "paths": [
        "M2.5 8a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v10.5a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3V8Zm2 3.3a.85.85 0 0 0 0 1.7h15a.85.85 0 0 0 0-1.7h-15Zm7.5 2.7a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 1 0 0-4.2Z",
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
        "date"
      ]
    },
    "multicolor": {
      "frame": "ink.900",
      "rings": "ink.500",
      "date": "leaf.500"
    }
  },
  "animation": "datePop"
};

export default CalendarDate;
