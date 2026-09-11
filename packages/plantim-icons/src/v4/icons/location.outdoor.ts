// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const LocationOutdoor: PlantimIconV4Definition = {
  "id": "location.outdoor",
  "label": "Outdoor",
  "tier": "P2",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "crown",
          "role": "primary",
          "nodes": [
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "9.5",
                "r": "6.5"
              }
            }
          ]
        },
        {
          "name": "trunk",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M12 16v5"
              }
            }
          ]
        },
        {
          "name": "ground",
          "role": "container",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M6 21h12"
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
        "M12 2a7.5 7.5 0 1 0 0 15a7.5 7.5 0 1 0 0-15Z",
        "M11 17h2v3h6v2H5v-2h6Z"
      ],
      "counters": 0
    }
  },
  "variants": {
    "duotone": {
      "primary": [
        "crown"
      ]
    },
    "multicolor": {
      "crown": "leaf.500",
      "trunk": "earth.600",
      "ground": "earth.400"
    }
  }
};

export default LocationOutdoor;
