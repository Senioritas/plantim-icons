export const UtilityLogOut = {
    "id": "utility.log.out",
    "label": "Log Out",
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
                                "d": "m16 17 5-5-5-5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M21 12H9"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
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
export default UtilityLogOut;
