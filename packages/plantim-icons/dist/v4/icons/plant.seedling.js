export const PlantSeedling = {
    "id": "plant.seedling",
    "label": "Seedling",
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
                                "d": "M12 21V10"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M7 10c0-4 2.5-6 5-6s5 2 5 6"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M7 14c0 0 1-3 5-3"
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
                                "d": "M12 21V10"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M7 10c0-4 2.5-6 5-6s5 2 5 6"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M7 14c0 0 1-3 5-3"
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
export default PlantSeedling;
