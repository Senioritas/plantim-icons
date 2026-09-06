export const GardenGloves = {
    "id": "garden.gloves",
    "label": "Gardening gloves",
    "tier": "P2",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "glove",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 21a3 3 0 0 1-3-3v-4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v2a5 5 0 0 1-3 4.6V21Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 12V7.5a1.3 1.3 0 0 1 2.6 0V12"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M11.6 12V6.5a1.3 1.3 0 0 1 2.6 0V12"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M5 16a2.5 2.5 0 0 1 0-5"
                            }
                        }
                    ]
                },
                {
                    "name": "cuff",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M7.5 21h6"
                            }
                        }
                    ]
                }
            ]
        },
        "base": {
            "layers": [
                {
                    "name": "glove",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 21a3 3 0 0 1-3-3v-4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v2a5 5 0 0 1-3 4.6V21Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 12V7.5a1.3 1.3 0 0 1 2.6 0V12"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M11.6 12V6.5a1.3 1.3 0 0 1 2.6 0V12"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M5 16a2.5 2.5 0 0 1 0-5"
                            }
                        }
                    ]
                },
                {
                    "name": "cuff",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M7.5 21h6"
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
                "glove"
            ]
        },
        "multicolor": {
            "glove": "ink.900",
            "cuff": "leaf.500"
        }
    }
};
export default GardenGloves;
