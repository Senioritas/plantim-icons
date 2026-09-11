export const UtilityCloudRain = {
    "id": "utility.cloud.rain",
    "label": "Cloud Rain",
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
                                "d": "m9.2 22 3-7"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m9 13-3 7"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m17 13-3 7"
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
export default UtilityCloudRain;
