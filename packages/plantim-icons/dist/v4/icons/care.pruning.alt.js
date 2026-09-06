export const CarePruningAlt = {
    "id": "care.pruning.alt",
    "label": "Pruning Alt",
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
                                "cy": "7",
                                "r": "2.5"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "6",
                                "cy": "17",
                                "r": "2.5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8.2 8.2 20 20"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M20 4 8.2 15.8"
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
                                "cy": "7",
                                "r": "2.5"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "6",
                                "cy": "17",
                                "r": "2.5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8.2 8.2 20 20"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M20 4 8.2 15.8"
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
            "primary": "leaf.700"
        }
    }
};
export default CarePruningAlt;
