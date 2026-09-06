export const GardenFork = {
    "id": "garden.fork",
    "label": "Fork",
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
                                "d": "M12 10L12 21"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 10V4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 10V3"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16 10V4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 10h8"
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
                                "d": "M12 10L12 21"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 10V4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 10V3"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16 10V4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 10h8"
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
export default GardenFork;
