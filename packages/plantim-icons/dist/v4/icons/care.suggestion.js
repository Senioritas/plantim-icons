export const CareSuggestion = {
    "id": "care.suggestion",
    "label": "Suggestion",
    "tier": "P2",
    "grades": {
        "base": {
            "layers": [
                {
                    "name": "primary",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M18 14l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6z"
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
                                "cx": "6.5",
                                "cy": "18",
                                "r": "1"
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
            "primary": "sun.500",
            "accent": "sun.500"
        }
    }
};
export default CareSuggestion;
