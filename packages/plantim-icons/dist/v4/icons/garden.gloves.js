export const GardenGloves = {
    "id": "garden.gloves",
    "label": "Gloves",
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
                                "d": "M8 11a4 4 0 0 1 8 0v5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16 12.5a2 2 0 0 1 .5 4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 19h8v1.5H8z"
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
                                "d": "M8 11a4 4 0 0 1 8 0v5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16 12.5a2 2 0 0 1 .5 4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 19h8v1.5H8z"
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
            "primary": "ink.900"
        }
    }
};
export default GardenGloves;
