export const PlantLight = {
    "id": "plant.light",
    "label": "Light",
    "tier": "P1",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "leaf",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 20C4 12.5 9 8.5 14.5 9.5C14 15.5 10 20 4 20Z"
                            }
                        }
                    ]
                },
                {
                    "name": "rays",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M21 5.5V9"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M18.5 3H15"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M19.2 4.8l-2.5 2.5"
                            }
                        }
                    ]
                }
            ]
        },
        "base": {
            "layers": [
                {
                    "name": "leaf",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 20C4 12.5 9 8.5 14.5 9.5C14 15.5 10 20 4 20Z"
                            }
                        }
                    ]
                },
                {
                    "name": "vein",
                    "role": "secondary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M6 18 11.5 12.5"
                            }
                        }
                    ]
                },
                {
                    "name": "rays",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M21 5.5V9"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M18.5 3H15"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M19.2 4.8l-2.5 2.5"
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
                "leaf",
                "vein"
            ]
        },
        "multicolor": {
            "leaf": "leaf.700",
            "vein": "leaf.700",
            "rays": "sun.500"
        }
    }
};
export default PlantLight;
