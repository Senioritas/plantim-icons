export const GardenPot = {
    "id": "garden.pot",
    "label": "Pot",
    "tier": "P2",
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
                                "d": "M4 7h16"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 7l2 13h12l2-13"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 7L4 4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M20 7L20 4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 4L20 4"
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
                                "d": "M4 7h16"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 7l2 13h12l2-13"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 7L4 4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M20 7L20 4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 4L20 4"
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
            "primary": "earth.600"
        }
    }
};
export default GardenPot;
