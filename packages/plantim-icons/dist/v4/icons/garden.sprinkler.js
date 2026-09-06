export const GardenSprinkler = {
    "id": "garden.sprinkler",
    "label": "Sprinkler",
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
                                "d": "M8 21h8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 21L12 12"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 12c-3-2-5-2-8 0"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 12c3-2 5-2 8 0"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 12L12 6"
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
                                "d": "M8 21h8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 21L12 12"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 12c-3-2-5-2-8 0"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 12c3-2 5-2 8 0"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 12L12 6"
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
            "primary": "water.600"
        }
    }
};
export default GardenSprinkler;
