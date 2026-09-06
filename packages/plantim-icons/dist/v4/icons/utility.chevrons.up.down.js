export const UtilityChevronsUpDown = {
    "id": "utility.chevrons.up.down",
    "label": "Chevrons Up Down",
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
                                "d": "m7 15 5 5 5-5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m7 9 5-5 5 5"
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
                                "d": "m7 15 5 5 5-5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m7 9 5-5 5 5"
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
export default UtilityChevronsUpDown;
