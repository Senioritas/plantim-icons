export const CareWatering = {
    "id": "care.watering",
    "label": "Watering",
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
                                "d": "M12 3C9 7 7 9.5 7 12a5 5 0 0 0 10 0c0-2.5-2-5-5-9z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M10 12.5a2 2 0 0 0 2 2"
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
                                "d": "M12 3C9 7 7 9.5 7 12a5 5 0 0 0 10 0c0-2.5-2-5-5-9z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M10 12.5a2 2 0 0 0 2 2"
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
            "primary": "water.600"
        }
    }
};
export default CareWatering;
