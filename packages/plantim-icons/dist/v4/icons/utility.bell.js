export const UtilityBell = {
    "id": "utility.bell",
    "label": "Bell",
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
                                "d": "M10.268 21a2 2 0 0 0 3.464 0"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "18",
                                "cy": "5",
                                "r": "3"
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
                                "d": "M10.268 21a2 2 0 0 0 3.464 0"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "18",
                                "cy": "5",
                                "r": "3"
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
export default UtilityBell;
