// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const UtilityActivity: PlantimIconV4Definition = {
  "id": "utility.activity",
  "label": "Feed",
  "tier": "P0",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "pulse",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M2.5 12h3.6L9 5.5l5.6 13 2.9-6.5h4"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "pulse",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M2.8 12h3.7L9.3 5.2l5.4 13.6 2.8-6.8h3.7"
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
        "pulse"
      ]
    },
    "multicolor": {
      "pulse": "leaf.700"
    }
  },
  "animation": "pulseBeat"
};

export default UtilityActivity;
