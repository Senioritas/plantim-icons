export const PlantWilting = {
    "id": "plant.wilting",
    "label": "Wilting",
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
                                "d": "M12 21V8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 8C12 8 8 6 7 3c3 0 5 1 5 5z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 8C12 8 16 6 17 3c-3 0-5 1-5 5z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 14c-1 1-3 1-4 0"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M15 14c1 1 3 1 4 0"
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
            "primary": "leaf.500"
        }
    }
};
export default PlantWilting;
