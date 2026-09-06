export const GardenHoe = {
    "id": "garden.hoe",
    "label": "Hoe",
    "tier": "P2",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "handle",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M18.5 4.5 8 15"
                            }
                        }
                    ]
                },
                {
                    "name": "head",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 15l-3.5 3.5a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0L13 17Z"
                            }
                        }
                    ]
                }
            ]
        },
        "base": {
            "layers": [
                {
                    "name": "handle",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M18.5 4.5 8 15"
                            }
                        }
                    ]
                },
                {
                    "name": "head",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 15l-3.5 3.5a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0L13 17Z"
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
            "head": "ink.500"
        }
    }
};
export default GardenHoe;
