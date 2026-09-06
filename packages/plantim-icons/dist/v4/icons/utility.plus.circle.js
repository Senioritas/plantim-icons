export const UtilityPlusCircle = {
    "id": "utility.plus.circle",
    "label": "Add (circle)",
    "tier": "P0",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "ring",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "12",
                                "r": "9.4"
                            }
                        }
                    ]
                },
                {
                    "name": "plus",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 7.6v8.8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M7.6 12h8.8"
                            }
                        }
                    ]
                }
            ]
        },
        "base": {
            "layers": [
                {
                    "name": "ring",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "12",
                                "r": "9.25"
                            }
                        }
                    ]
                },
                {
                    "name": "plus",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 8v8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 12h8"
                            }
                        }
                    ]
                }
            ]
        },
        "display": {
            "layers": [
                {
                    "name": "ring",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "12",
                                "r": "9.25"
                            }
                        }
                    ]
                },
                {
                    "name": "plus",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 8v8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 12h8"
                            }
                        }
                    ]
                }
            ]
        }
    },
    "solid": {
        "micro": {
            "paths": [
                "M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5Zm-1.2 5.9a1.2 1.2 0 0 1 2.4 0v3.4h3.4a1.2 1.2 0 0 1 0 2.4h-3.4v3.4a1.2 1.2 0 0 1-2.4 0v-3.4H7.4a1.2 1.2 0 0 1 0-2.4h3.4V7.4Z"
            ],
            "counters": 1
        },
        "base": {
            "paths": [
                "M12 1.75C6.34 1.75 1.75 6.34 1.75 12c0 5.66 4.59 10.25 10.25 10.25S22.25 17.66 22.25 12 17.66 1.75 12 1.75Zm-1.1 6.05a1.1 1.1 0 0 1 2.2 0v3.1h3.1a1.1 1.1 0 0 1 0 2.2h-3.1v3.1a1.1 1.1 0 0 1-2.2 0v-3.1H7.8a1.1 1.1 0 0 1 0-2.2h3.1V7.8Z"
            ],
            "counters": 1
        }
    },
    "variants": {
        "duotone": {
            "primary": [
                "plus"
            ]
        },
        "multicolor": {
            "ring": "leaf.700",
            "plus": "leaf.500"
        }
    },
    "animation": "ctaBloom"
};
export default UtilityPlusCircle;
