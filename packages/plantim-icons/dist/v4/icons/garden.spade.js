export const GardenSpade = {
    "id": "garden.spade",
    "label": "Spade",
    "tier": "P2",
    "grades": {
        "base": {
            "layers": [
                {
                    "name": "handle",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 4h8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 4v11"
                            }
                        }
                    ]
                },
                {
                    "name": "blade",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 15h6l-3 5.5Z"
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
                "handle"
            ]
        },
        "multicolor": {
            "handle": "ink.900",
            "blade": "ink.500"
        }
    }
};
export default GardenSpade;
