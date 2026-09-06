export const HealthHealthy = {
    "id": "health.healthy",
    "label": "Healthy",
    "tier": "P2",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "leaf",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M17.5 3.5C9.5 4 4 9.5 4 17.5C12 17 17 11.5 17.5 3.5Z"
                            }
                        }
                    ]
                },
                {
                    "name": "badge",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M14.5 18l1.8 1.8 3.2-3.4"
                            }
                        }
                    ]
                }
            ]
        },
        "base": {
            "layers": [
                {
                    "name": "leaf",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M17.5 3.5C9.5 4 4 9.5 4 17.5C12 17 17 11.5 17.5 3.5Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M7.5 14 14 7.5"
                            }
                        }
                    ]
                },
                {
                    "name": "badge",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M14.5 18l1.8 1.8 3.2-3.4"
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
                "leaf",
                "badge"
            ]
        },
        "multicolor": {
            "leaf": "status.success",
            "badge": "status.success"
        }
    }
};
export default HealthHealthy;
