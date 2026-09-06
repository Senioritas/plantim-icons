export const StageMature = {
    "id": "stage.mature",
    "label": "Mature",
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
                                "d": "M12 21L12 15"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M6.5 15a5.5 5.5 0 1 1 11 0z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8.5 21L15.5 21"
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
                                "d": "M12 21L12 15"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M6.5 15a5.5 5.5 0 1 1 11 0z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8.5 21L15.5 21"
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
export default StageMature;
