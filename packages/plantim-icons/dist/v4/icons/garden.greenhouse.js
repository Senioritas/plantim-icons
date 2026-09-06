export const GardenGreenhouse = {
    "id": "garden.greenhouse",
    "label": "Greenhouse",
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
                                "d": "M4 20V9l8-5 8 5v11z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 6.5L9 20"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M15 6.5L15 20"
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
                                "d": "M4 20V9l8-5 8 5v11z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 6.5L9 20"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M15 6.5L15 20"
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
            "primary": "leaf.700"
        }
    }
};
export default GardenGreenhouse;
