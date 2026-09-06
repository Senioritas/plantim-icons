export const GardenTrowel = {
    "id": "garden.trowel",
    "label": "Trowel",
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
                                "d": "M20 4 14 10"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16.5 5.5 18.5 7.5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M14 10c-3.2 0-6.4 3-8.5 8.5C11 16.4 14 13.2 14 10z"
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
                                "d": "M20 4 14 10"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16.5 5.5 18.5 7.5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M14 10c-3.2 0-6.4 3-8.5 8.5C11 16.4 14 13.2 14 10z"
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
export default GardenTrowel;
