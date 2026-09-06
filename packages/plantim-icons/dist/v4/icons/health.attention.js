export const HealthAttention = {
    "id": "health.attention",
    "label": "Attention",
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
                                "d": "M12 11.5L12 14"
                            }
                        }
                    ]
                },
                {
                    "name": "accent",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "16.5",
                                "r": "1.1"
                            },
                            "filled": true
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
                                "d": "M12 11.5L12 14"
                            }
                        }
                    ]
                },
                {
                    "name": "accent",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "16.5",
                                "r": "1.1"
                            },
                            "filled": true
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
            "primary": "status.warning",
            "accent": "status.warning"
        }
    }
};
export default HealthAttention;
