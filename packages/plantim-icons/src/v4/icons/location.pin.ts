// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 8918930f0901ef326303681d0b07a17a8d539f03b71776012e2defbe70af3284).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const LocationPin: PlantimIconV4Definition = {
  "id": "location.pin",
  "label": "Pin",
  "tier": "P1",
  "grades": {
    "micro": {
      "layers": [
        {
          "name": "primary",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M20 10.5C20 15.5 12 22 12 22s-8-6.5-8-11.5a8 8 0 0 1 16 0Z"
              }
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "10.5",
                "r": "3"
              }
            }
          ]
        }
      ]
    },
    "base": {
      "layers": [
        {
          "name": "primary",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M20 10.5C20 15.5 12 22 12 22s-8-6.5-8-11.5a8 8 0 0 1 16 0Z"
              }
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "12",
                "cy": "10.5",
                "r": "3"
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
        "primary"
      ]
    },
    "multicolor": {
      "primary": "bloom.500"
    }
  }
};

export default LocationPin;
