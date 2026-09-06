export const UtilityZoomIn = {
    "id": "utility.zoom.in",
    "label": "Zoom In",
    "tier": "P1",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "primary",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "11",
                                "cy": "11",
                                "r": "8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M21 21L16.65 16.65"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M11 8L11 14"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 11L14 11"
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
                            "type": "circle",
                            "attrs": {
                                "cx": "11",
                                "cy": "11",
                                "r": "8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M21 21L16.65 16.65"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M11 8L11 14"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 11L14 11"
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
export default UtilityZoomIn;
