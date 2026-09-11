// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const PlantHumidity: PlantimIconV4Definition = {
  "id": "plant.humidity",
  "label": "Humidity",
  "tier": "P1",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "drop",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M15.5 4.5C12.7 8.3 10.3 11.2 10.3 14.7a5.2 5.2 0 0 0 10.4 0C20.7 11.2 18.3 8.3 15.5 4.5Z"
              }
            }
          ]
        },
        {
          "name": "droplet",
          "role": "secondary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M5 11.5c-1.6 2.2-2.8 3.8-2.8 5.5a2.8 2.8 0 0 0 5.6 0C7.8 15.3 6.6 13.7 5 11.5Z"
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
        "drop"
      ]
    },
    "multicolor": {
      "drop": "water.600",
      "droplet": "water.300"
    }
  }
};

export default PlantHumidity;
