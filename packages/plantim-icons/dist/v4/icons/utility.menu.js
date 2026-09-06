export const UtilityMenu = {
    "id": "utility.menu",
    "label": "Menu",
    "tier": "P1",
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
                                "d": "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M7 8h10"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M7 12h10"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M7 16h10"
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
                                "d": "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M7 8h10"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M7 12h10"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M7 16h10"
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
export default UtilityMenu;
