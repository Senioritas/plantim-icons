export const CareRotating = {
    "id": "care.rotating",
    "label": "Rotating",
    "tier": "P2",
    "grades": {
        "base": {
            "layers": [
                {
                    "name": "pot",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M7 14h10l-1.5 7h-7Z"
                            }
                        }
                    ]
                },
                {
                    "name": "arrow",
                    "role": "secondary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4.5 12A7.5 7.5 0 0 1 17.6 6.8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M18 3v4h-4"
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
                "arrow"
            ]
        },
        "multicolor": {
            "pot": "earth.600",
            "arrow": "ink.500"
        }
    }
};
export default CareRotating;
