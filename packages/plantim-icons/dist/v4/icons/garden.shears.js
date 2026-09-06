export const GardenShears = {
    "id": "garden.shears",
    "label": "Shears",
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
                                "cx": "6",
                                "cy": "18",
                                "r": "3"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "18",
                                "cy": "18",
                                "r": "3"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8.5 16L20 4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M15.5 16L4 4"
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
                                "cx": "6",
                                "cy": "18",
                                "r": "3"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "18",
                                "cy": "18",
                                "r": "3"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8.5 16L20 4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M15.5 16L4 4"
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
export default GardenShears;
