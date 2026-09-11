// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const StatusOffline: PlantimIconV4Definition = {
  "id": "status.offline",
  "label": "Offline",
  "tier": "P1",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "cloud",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
              }
            }
          ]
        },
        {
          "name": "slash",
          "role": "accent",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M3 3l18 18"
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
        "cloud",
        "slash"
      ]
    },
    "multicolor": {
      "cloud": "ink.500",
      "slash": "status.error"
    }
  }
};

export default StatusOffline;
