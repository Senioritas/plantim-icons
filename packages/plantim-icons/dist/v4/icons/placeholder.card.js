export const PlaceholderCard = {
    "id": "placeholder.card",
    "label": "Card skeleton",
    "tier": "P1",
    "grades": {
        "base": {
            "layers": [
                {
                    "name": "block",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "rect",
                            "attrs": {
                                "x": "3",
                                "y": "3",
                                "width": "18",
                                "height": "9",
                                "rx": "2"
                            }
                        }
                    ]
                },
                {
                    "name": "lines",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 16h16"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 20h9"
                            }
                        }
                    ]
                }
            ]
        }
    },
    "solid": {
        "base": {
            "paths": [
                "M5 2h14a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z",
                "M4.5 14.5h15a1.5 1.5 0 0 1 0 3h-15a1.5 1.5 0 0 1 0-3Z",
                "M4.5 18.5h8a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1 0-3Z"
            ],
            "counters": 0
        }
    },
    "variants": {
        "duotone": {
            "primary": [
                "block"
            ]
        },
        "multicolor": {
            "block": "ink.300",
            "lines": "ink.500"
        }
    }
};
export default PlaceholderCard;
