export const UtilityCloudSnow = {
    "id": "utility.cloud.snow",
    "label": "Cloud Snow",
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
                        }
                    ]
                },
                {
                    "name": "accent",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "8",
                                "cy": "15",
                                "r": "1.1"
                            },
                            "filled": true
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "8",
                                "cy": "19",
                                "r": "1.1"
                            },
                            "filled": true
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "17",
                                "r": "1.1"
                            },
                            "filled": true
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "21",
                                "r": "1.1"
                            },
                            "filled": true
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "16",
                                "cy": "15",
                                "r": "1.1"
                            },
                            "filled": true
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "16",
                                "cy": "19",
                                "r": "1.1"
                            },
                            "filled": true
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
            "primary": "water.300",
            "accent": "water.600"
        }
    }
};
export default UtilityCloudSnow;
