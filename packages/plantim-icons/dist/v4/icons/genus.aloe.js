export const GenusAloe = {
    "id": "genus.aloe",
    "label": "Aloe",
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
                                "d": "M12 16C11 11 9 6 5 3c0 5 2 10 7 13z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 16c1-5 3-10 7-13 0 5-2 10-7 13z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 16V7"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M7 16h10l-1.5 4h-7L7 16z"
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
export default GenusAloe;
