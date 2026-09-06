export const GenusFicus = {
    "id": "genus.ficus",
    "label": "Ficus",
    "tier": "P2",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "trunk",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 19v-7"
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
                                "d": "M12 12C9 12 6.5 10 6.5 6.5C10 6.5 12 8.5 12 12Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 12C15 12 17.5 10 17.5 6.5C14 6.5 12 8.5 12 12Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 9V4"
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
                                "d": "M9 19h6l-.6 2.5h-4.8Z"
                            }
                        }
                    ]
                }
            ]
        },
        "base": {
            "layers": [
                {
                    "name": "trunk",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 19v-7"
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
                                "d": "M12 12C9 12 6.5 10 6.5 6.5C10 6.5 12 8.5 12 12Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 12C15 12 17.5 10 17.5 6.5C14 6.5 12 8.5 12 12Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 9C10 8 8.7 6 9.2 3.5C11.4 4 12.5 6.5 12 9Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 9C14 8 15.3 6 14.8 3.5C12.6 4 11.5 6.5 12 9Z"
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
                                "d": "M9 19h6l-.6 2.5h-4.8Z"
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
                "trunk"
            ]
        },
        "multicolor": {
            "trunk": "earth.600",
            "leaves": "leaf.700",
            "pot": "earth.600"
        }
    }
};
export default GenusFicus;
