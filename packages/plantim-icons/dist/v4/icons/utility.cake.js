export const UtilityCake = {
    "id": "utility.cake",
    "label": "Cake",
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
                                "d": "M16 13H3"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16 17H3"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "9",
                                "cy": "7",
                                "r": "2"
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
            "primary": "bloom.500"
        }
    }
};
export default UtilityCake;
