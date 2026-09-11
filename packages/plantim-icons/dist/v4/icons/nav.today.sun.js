export const NavTodaySun = {
    "id": "nav.today.sun",
    "label": "Today Sun",
    "tier": "P2",
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
                                "cx": "12",
                                "cy": "12",
                                "r": "4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 3L12 5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 19L12 21"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 12L5 12"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M19 12L21 12"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M5.6 5.6 7 7"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M17 17l1.4 1.4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M18.4 5.6 17 7"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M5.6 18.4 7 17"
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
export default NavTodaySun;
