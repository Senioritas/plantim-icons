export const UtilityUserCheck = {
    "id": "utility.user.check",
    "label": "User Check",
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
                                "d": "M2 21a8 8 0 0 1 13.292-6"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "10",
                                "cy": "8",
                                "r": "5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m16 19 2 2 4-4"
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
export default UtilityUserCheck;
