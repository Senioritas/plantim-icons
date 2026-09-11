export const UtilityCalendarDays = {
    "id": "utility.calendar.days",
    "label": "Calendar Days",
    "tier": "P1",
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
                                "d": "M8 2v4"
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
                                "d": "M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 10h18"
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
                                "cx": "8",
                                "cy": "14",
                                "r": "1.1"
                            },
                            "filled": true
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "14",
                                "r": "1.1"
                            },
                            "filled": true
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "16",
                                "cy": "14",
                                "r": "1.1"
                            },
                            "filled": true
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "8",
                                "cy": "18",
                                "r": "1.1"
                            },
                            "filled": true
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "18",
                                "r": "1.1"
                            },
                            "filled": true
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "16",
                                "cy": "18",
                                "r": "1.1"
                            },
                            "filled": true
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
            "primary": "ink.900",
            "accent": "ink.900"
        }
    }
};
export default UtilityCalendarDays;
