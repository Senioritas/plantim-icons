export const StageSeedling = {
    "id": "stage.seedling",
    "label": "Seedling",
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
                                "d": "M6 20h12"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 20L12 15"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 16c-.8-1-2.2-.8-2.6.4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 15c.8-1 2.2-.8 2.6.4"
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
                                "d": "M6 20h12"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 20L12 15"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 16c-.8-1-2.2-.8-2.6.4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 15c.8-1 2.2-.8 2.6.4"
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
export default StageSeedling;
