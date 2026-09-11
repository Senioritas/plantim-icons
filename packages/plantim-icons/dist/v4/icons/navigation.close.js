export const NavigationClose = {
    "id": "navigation.close",
    "label": "Close",
    "tier": "P1",
    "grades": {
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
                                "d": "m15 9-6 6"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m9 9 6 6"
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
export default NavigationClose;
