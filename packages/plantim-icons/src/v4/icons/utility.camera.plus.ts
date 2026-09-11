// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const UtilityCameraPlus: PlantimIconV4Definition = {
  "id": "utility.camera.plus",
  "label": "Add photo",
  "tier": "P1",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "body",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"
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
                "d": "M12 10.5v5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M9.5 13h5"
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
        "body"
      ]
    },
    "multicolor": {
      "body": "ink.900",
      "plus": "leaf.700"
    }
  }
};

export default UtilityCameraPlus;
