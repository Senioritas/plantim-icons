export const UtilityCloudFog = {
    "id": "utility.cloud.fog",
    "label": "Cloud Fog",
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
                                "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16 17H7"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M17 21H9"
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
            "primary": "water.300"
        }
    }
};
export default UtilityCloudFog;
