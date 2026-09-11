export const PlantPruning = {
    "id": "plant.pruning",
    "label": "Pruning",
    "tier": "P1",
    "grades": {
        "base": {
            "layers": [
                {
                    "name": "primary",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "6",
                                "cy": "6",
                                "r": "3"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "6",
                                "cy": "18",
                                "r": "3"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M20 4 8.12 15.88"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M14.47 14.48 20 20"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8.12 8.12 12 12"
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
export default PlantPruning;
