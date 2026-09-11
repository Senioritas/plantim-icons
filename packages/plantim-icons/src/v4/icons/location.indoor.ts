// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const LocationIndoor: PlantimIconV4Definition = {
  "id": "location.indoor",
  "label": "Indoor",
  "tier": "P2",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "frame",
          "role": "container",
          "nodes": [
            {
              "type": "rect",
              "attrs": {
                "x": "4",
                "y": "3",
                "width": "16",
                "height": "15",
                "rx": "1.5"
              }
            }
          ]
        },
        {
          "name": "mullions",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 3v15"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M4 10.5h16"
              }
            }
          ]
        },
        {
          "name": "sill",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M2 21h20"
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
        "mullions"
      ]
    },
    "multicolor": {
      "frame": "ink.900",
      "mullions": "ink.500",
      "sill": "earth.600"
    }
  }
};

export default LocationIndoor;
