export const GardenHoe = {
    "id": "garden.hoe",
    "label": "Hoe",
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
                                "d": "M20 4 8.5 15.5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 15h6v3H4z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8.5 15.5 7 16.5"
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
                                "d": "M20 4 8.5 15.5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 15h6v3H4z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8.5 15.5 7 16.5"
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
export default GardenHoe;
