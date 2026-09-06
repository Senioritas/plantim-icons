export const GenusSucculent = {
    "id": "genus.succulent",
    "label": "Succulent",
    "tier": "P2",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "rosette",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 18V9"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 18C8.5 17 6.5 13.5 7 9.5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 18C15.5 17 17.5 13.5 17 9.5"
                            }
                        }
                    ]
                },
                {
                    "name": "pot",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 18h6l-.6 3h-4.8Z"
                            }
                        }
                    ]
                }
            ]
        },
        "base": {
            "layers": [
                {
                    "name": "rosette",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 18V8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 18C8.5 17 6.5 13.5 7 9.5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 18C15.5 17 17.5 13.5 17 9.5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 18C10 16 9 12.5 10 9"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 18C14 16 15 12.5 14 9"
                            }
                        }
                    ]
                },
                {
                    "name": "pot",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 18h6l-.6 3h-4.8Z"
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
                "rosette"
            ]
        },
        "multicolor": {
            "rosette": "leaf.700",
            "pot": "earth.600"
        }
    }
};
export default GenusSucculent;
