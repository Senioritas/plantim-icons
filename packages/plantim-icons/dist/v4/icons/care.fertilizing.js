export const CareFertilizing = {
    "id": "care.fertilizing",
    "label": "Fertilizing",
    "tier": "P2",
    "grades": {
        "base": {
            "layers": [
                {
                    "name": "primary",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 18h16"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 18L12 14"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 15c-1-1.5-3-1.5-4 0"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 15c1-1.5 3-1.5 4 0"
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
                                "cx": "8",
                                "cy": "7",
                                "r": "1"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "5",
                                "r": "1"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "16",
                                "cy": "7",
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
            "primary": "leaf.500",
            "accent": "leaf.500"
        }
    }
};
export default CareFertilizing;
