export const GardenSpade = {
    "id": "garden.spade",
    "label": "Spade",
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
                                "d": "M8 3h8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 3v3a4 4 0 0 0 4 4 4 4 0 0 0 4-4V3"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 10L12 15"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 15h8l-1 5a3 3 0 0 1-6 0z"
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
                                "d": "M8 3h8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 3v3a4 4 0 0 0 4 4 4 4 0 0 0 4-4V3"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 10L12 15"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 15h8l-1 5a3 3 0 0 1-6 0z"
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
export default GardenSpade;
