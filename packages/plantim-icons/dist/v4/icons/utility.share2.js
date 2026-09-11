export const UtilityShare2 = {
    "id": "utility.share2",
    "label": "Share2",
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
                                "cx": "18",
                                "cy": "5",
                                "r": "3"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "6",
                                "cy": "12",
                                "r": "3"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "18",
                                "cy": "19",
                                "r": "3"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8.59 13.51L15.42 17.49"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M15.41 6.51L8.59 10.49"
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
            "primary": "ink.900"
        }
    }
};
export default UtilityShare2;
