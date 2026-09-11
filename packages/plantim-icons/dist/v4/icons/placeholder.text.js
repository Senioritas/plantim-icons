export const PlaceholderText = {
    "id": "placeholder.text",
    "label": "Text skeleton",
    "tier": "P1",
    "grades": {
        "base": {
            "layers": [
                {
                    "name": "lines",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 7h16"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 12h16"
                            }
                        }
                    ]
                },
                {
                    "name": "tail",
                    "role": "secondary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 17h10"
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
            "strokeWidth": 3.6,
            "counters": 0
        },
        "base": {
            "mode": "bold",
            "strokeWidth": 3.4,
            "counters": 0
        }
    },
    "variants": {
        "duotone": {
            "primary": [
                "lines"
            ]
        },
        "multicolor": {
            "lines": "ink.500",
            "tail": "ink.300"
        }
    }
};
export default PlaceholderText;
