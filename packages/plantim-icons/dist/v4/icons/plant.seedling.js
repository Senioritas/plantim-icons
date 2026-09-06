export const PlantSeedling = {
    "id": "plant.seedling",
    "label": "Seedling",
    "tier": "P2",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "soil",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M5 20h14"
                            }
                        }
                    ]
                },
                {
                    "name": "stem",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 20v-6"
                            }
                        }
                    ]
                },
                {
                    "name": "leaf",
                    "role": "secondary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 14C9.6 14 7.6 12 7.6 9.5C10 9.5 12 11.5 12 14Z"
                            }
                        }
                    ]
                },
                {
                    "name": "seed",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 20c0-1.7 1.3-3 3-3s3 1.3 3 3Z"
                            }
                        }
                    ]
                }
            ]
        },
        "base": {
            "layers": [
                {
                    "name": "soil",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M5 20h14"
                            }
                        }
                    ]
                },
                {
                    "name": "stem",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 20v-6"
                            }
                        }
                    ]
                },
                {
                    "name": "leaf",
                    "role": "secondary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 14C9.6 14 7.6 12 7.6 9.5C10 9.5 12 11.5 12 14Z"
                            }
                        }
                    ]
                },
                {
                    "name": "seed",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 20c0-1.7 1.3-3 3-3s3 1.3 3 3Z"
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
                "stem",
                "leaf"
            ]
        },
        "multicolor": {
            "soil": "earth.600",
            "stem": "leaf.700",
            "leaf": "leaf.500",
            "seed": "earth.400"
        }
    }
};
export default PlantSeedling;
