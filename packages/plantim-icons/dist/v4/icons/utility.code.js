export const UtilityCode = {
    "id": "utility.code",
    "label": "Code",
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
                                "d": "m18 16 4-4-4-4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m6 8-4 4 4 4"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m14.5 4-5 16"
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
export default UtilityCode;
