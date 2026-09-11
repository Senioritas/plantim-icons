export const UtilitySort = {
    "id": "utility.sort",
    "label": "Sort",
    "tier": "P1",
    "grades": {
        "base": {
            "layers": [
                {
                    "name": "up",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M7 20V4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 8l4-4 4 4"
                            }
                        }
                    ]
                },
                {
                    "name": "down",
                    "role": "secondary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M17 4v16"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M13 16l4 4 4-4"
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
                "up"
            ]
        },
        "multicolor": {
            "up": "ink.900",
            "down": "ink.500"
        }
    }
};
export default UtilitySort;
