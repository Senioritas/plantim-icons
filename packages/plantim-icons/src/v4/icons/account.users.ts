// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/v4/registry.v4.json (v4Hash 573a185872b44f38b596f04ea43fd9241a433a2722d278ae1533bc80d82384b1).
// Regenerate with: npm run icons:v4:package
import type { PlantimIconV4Definition } from "../index.js";

export const AccountUsers: PlantimIconV4Definition = {
  "id": "account.users",
  "label": "Users",
  "tier": "P1",
  "grades": {
    "base": {
      "layers": [
        {
          "name": "primary",
          "role": "primary",
          "nodes": [
            {
              "type": "path",
              "attrs": {
                "d": "M18 21a8 8 0 0 0-16 0"
              }
            },
            {
              "type": "circle",
              "attrs": {
                "cx": "10",
                "cy": "8",
                "r": "5"
              }
            },
            {
              "type": "path",
              "attrs": {
                "d": "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"
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
      "primary": "ink.900"
    }
  }
};

export default AccountUsers;
