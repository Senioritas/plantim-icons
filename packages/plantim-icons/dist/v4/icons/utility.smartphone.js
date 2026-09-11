export const UtilitySmartphone = {
    "id": "utility.smartphone",
    "label": "Smartphone",
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
                                "d": "M3 6h5a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M13 8.32a7.43 7.43 0 0 1 0 7.36"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16.46 6.21a11.76 11.76 0 0 1 0 11.58"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"
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
export default UtilitySmartphone;
