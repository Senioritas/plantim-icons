export const GardenHose = {
    "id": "garden.hose",
    "label": "Hose",
    "tier": "P2",
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
                                "cx": "9",
                                "cy": "14",
                                "r": "5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M13 11l6-6"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M19 5c1 1 1 2 0 3"
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
                                "cx": "9",
                                "cy": "14",
                                "r": "1"
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
                                "cx": "9",
                                "cy": "14",
                                "r": "5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M13 11l6-6"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M19 5c1 1 1 2 0 3"
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
                                "cx": "9",
                                "cy": "14",
                                "r": "1"
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
            "primary": "water.600",
            "accent": "water.600"
        }
    }
};
export default GardenHose;
