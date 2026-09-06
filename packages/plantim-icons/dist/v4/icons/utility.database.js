export const UtilityDatabase = {
    "id": "utility.database",
    "label": "Database",
    "tier": "P1",
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
                                "d": "M3 5a9 3 0 1 0 18 0a9 3 0 1 0 -18 0"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 5v14a9 3 0 0 0 18 0V5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 12a9 3 0 0 0 18 0"
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
                                "d": "M3 5a9 3 0 1 0 18 0a9 3 0 1 0 -18 0"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 5v14a9 3 0 0 0 18 0V5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 12a9 3 0 0 0 18 0"
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
            "primary": "water.600"
        }
    }
};
export default UtilityDatabase;
