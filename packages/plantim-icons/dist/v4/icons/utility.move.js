export const UtilityMove = {
    "id": "utility.move",
    "label": "Move",
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
                                "d": "M5 3v16h16"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m5 19 6-6"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m2 6 3-3 3 3"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m18 16 3 3-3 3"
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
                                "d": "M5 3v16h16"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m5 19 6-6"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m2 6 3-3 3 3"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m18 16 3 3-3 3"
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
export default UtilityMove;
