export const UtilityLightbulb = {
    "id": "utility.lightbulb",
    "label": "Lightbulb",
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
                                "d": "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 18h6"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M10 22h4"
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
                                "d": "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 18h6"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M10 22h4"
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
export default UtilityLightbulb;
