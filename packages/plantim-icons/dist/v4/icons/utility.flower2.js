export const UtilityFlower2 = {
    "id": "utility.flower2",
    "label": "Flower2",
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
                                "d": "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "8",
                                "r": "2"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 10v12"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"
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
            "primary": "leaf.500"
        }
    }
};
export default UtilityFlower2;
