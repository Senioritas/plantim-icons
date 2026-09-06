export const StageGrowing = {
    "id": "stage.growing",
    "label": "Growing",
    "tier": "P2",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "ground",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M6 21h12"
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
                                "d": "M12 21v-9"
                            }
                        }
                    ]
                },
                {
                    "name": "leaves",
                    "role": "secondary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 15C9.7 15.4 7.2 14 6.8 11.2C9.3 10.8 11.6 12.2 12 15Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 12C14.3 12.4 16.8 11 17.2 8.2C14.7 7.8 12.4 9.2 12 12Z"
                            }
                        }
                    ]
                }
            ]
        },
        "base": {
            "layers": [
                {
                    "name": "ground",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M6 21h12"
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
                                "d": "M12 21v-9"
                            }
                        }
                    ]
                },
                {
                    "name": "leaves",
                    "role": "secondary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 15C9.7 15.4 7.2 14 6.8 11.2C9.3 10.8 11.6 12.2 12 15Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 12C14.3 12.4 16.8 11 17.2 8.2C14.7 7.8 12.4 9.2 12 12Z"
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
                "leaves"
            ]
        },
        "multicolor": {
            "ground": "earth.600",
            "stem": "leaf.700",
            "leaves": "leaf.500"
        }
    }
};
export default StageGrowing;
