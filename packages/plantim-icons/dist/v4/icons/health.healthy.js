export const HealthHealthy = {
    "id": "health.healthy",
    "label": "Healthy",
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
                                "d": "M5 19 14 10"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 14l2.5 2.5 4.5-5"
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
                                "d": "M5 19 14 10"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 14l2.5 2.5 4.5-5"
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
            "primary": "status.success"
        }
    }
};
export default HealthHealthy;
