export const StageMature = {
    "id": "stage.mature",
    "label": "Mature",
    "tier": "P2",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "trunk",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 21v-5"
                            }
                        }
                    ]
                },
                {
                    "name": "canopy",
                    "role": "secondary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 16a4 4 0 0 1-2.4-7.2A4.5 4.5 0 0 1 12 3.2a4.5 4.5 0 0 1 5.4 5.6A4 4 0 0 1 15 16Z"
                            }
                        }
                    ]
                }
            ]
        },
        "base": {
            "layers": [
                {
                    "name": "trunk",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 21v-6"
                            }
                        }
                    ]
                },
                {
                    "name": "canopy",
                    "role": "secondary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 16a4 4 0 0 1-2.4-7.2A4.5 4.5 0 0 1 12 3.2a4.5 4.5 0 0 1 5.4 5.6A4 4 0 0 1 15 16Z"
                            }
                        }
                    ]
                },
                {
                    "name": "ground",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 21h8"
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
                "canopy",
                "trunk"
            ]
        },
        "multicolor": {
            "trunk": "earth.600",
            "canopy": "leaf.700",
            "ground": "earth.400"
        }
    }
};
export default StageMature;
