// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const LocationRoom: PlantimIconV4Definition = {
  "id": "location.room",
  "label": "Room",
  "tier": "P1",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "door",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M4 21V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v17"
              }
            }
          ]
        },
        {
          "name": "floor",
          "role": "container",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M2 21h20"
              }
            }
          ]
        },
        {
          "name": "knob",
          "role": "accent",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "15.5",
                "cy": "12.5",
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
    "base": {
      "paths": [
        "M1 22v-2h2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16h2v2ZM15.5 11a1.5 1.5 0 1 0 0 3a1.5 1.5 0 1 0 0-3Z"
      ],
      "counters": 1
    }
  },
  "variants": {
    "duotone": {
      "primary": [
        "door",
        "knob"
      ]
    },
    "multicolor": {
      "door": "earth.600",
      "floor": "ink.500",
      "knob": "sun.500"
    }
  }
};

export default LocationRoom;
