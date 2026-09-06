export const GenusOrchid = {
    "id": "genus.orchid",
    "label": "Orchid",
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
                                "d": "M10 18C6 15 5 10 8 7"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "8",
                                "cy": "6",
                                "r": "2"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 18h6l-1 3H9l-1-3z"
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
                                "cx": "5",
                                "cy": "8",
                                "r": "1.5"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "11",
                                "cy": "8",
                                "r": "1.5"
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
                                "d": "M10 18C6 15 5 10 8 7"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "8",
                                "cy": "6",
                                "r": "2"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 18h6l-1 3H9l-1-3z"
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
                                "cx": "5",
                                "cy": "8",
                                "r": "1.5"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "11",
                                "cy": "8",
                                "r": "1.5"
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
            "primary": "leaf.700",
            "accent": "leaf.700"
        }
    }
};
export default GenusOrchid;
