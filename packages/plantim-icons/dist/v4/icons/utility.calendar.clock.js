export const UtilityCalendarClock = {
    "id": "utility.calendar.clock",
    "label": "Calendar Clock",
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
                                "d": "M16 14v2.2l1.6 1"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16 2v4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 10h5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 2v4"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "16",
                                "cy": "16",
                                "r": "6"
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
                                "d": "M16 14v2.2l1.6 1"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16 2v4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 10h5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 2v4"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "16",
                                "cy": "16",
                                "r": "6"
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
export default UtilityCalendarClock;
