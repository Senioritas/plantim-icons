export const NavCalendarPlain = {
    "id": "nav.calendar.plain",
    "label": "Calendar Plain",
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
                                "d": "M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-13a2 2 0 0 1 2 -2Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 9L21 9"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 2L8 6"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16 2L16 6"
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
export default NavCalendarPlain;
