export const HealthCritical = {
    "id": "health.critical",
    "label": "Critical",
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
                                "d": "M5 19C5 12 10 6 19 6c0 9-7 13-14 13z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M10 12l4 4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M14 12l-4 4"
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
                                "d": "M5 19C5 12 10 6 19 6c0 9-7 13-14 13z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M10 12l4 4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M14 12l-4 4"
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
            "primary": "status.error"
        }
    }
};
export default HealthCritical;
