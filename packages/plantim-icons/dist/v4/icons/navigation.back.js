export const NavigationBack = {
    "id": "navigation.back",
    "label": "Back",
    "tier": "P1",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "primary",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "12",
                                "r": "10"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m12 8-4 4 4 4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16 12H8"
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
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "12",
                                "r": "10"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m12 8-4 4 4 4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16 12H8"
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
export default NavigationBack;
