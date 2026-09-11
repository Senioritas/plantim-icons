export const UtilityDragHandle = {
    "id": "utility.drag.handle",
    "label": "Drag handle",
    "tier": "P2",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "dots",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "9",
                                "cy": "6",
                                "r": "1"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "9",
                                "cy": "12",
                                "r": "1"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "9",
                                "cy": "18",
                                "r": "1"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "15",
                                "cy": "6",
                                "r": "1"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "15",
                                "cy": "12",
                                "r": "1"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "15",
                                "cy": "18",
                                "r": "1"
                            }
                        }
                    ]
                }
            ]
        },
        "base": {
            "layers": [
                {
                    "name": "dots",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "9",
                                "cy": "6",
                                "r": "0.8"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "9",
                                "cy": "12",
                                "r": "0.8"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "9",
                                "cy": "18",
                                "r": "0.8"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "15",
                                "cy": "6",
                                "r": "0.8"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "15",
                                "cy": "12",
                                "r": "0.8"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "15",
                                "cy": "18",
                                "r": "0.8"
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
                "dots"
            ]
        },
        "multicolor": {
            "dots": "ink.500"
        }
    }
};
export default UtilityDragHandle;
