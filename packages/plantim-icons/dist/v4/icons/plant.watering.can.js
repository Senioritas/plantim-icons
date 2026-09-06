export const PlantWateringCan = {
    "id": "plant.watering.can",
    "label": "Watering Can",
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
                                "d": "M3 18a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H3z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M15 8h2a2 2 0 0 1 2 2v0"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M17 16L21 12"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M17 12L21 16"
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
                                "d": "M3 18a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H3z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M15 8h2a2 2 0 0 1 2 2v0"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M17 16L21 12"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M17 12L21 16"
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
export default PlantWateringCan;
