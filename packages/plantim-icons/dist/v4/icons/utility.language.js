export const UtilityLanguage = {
    "id": "utility.language",
    "label": "Language",
    "tier": "P1",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "bubble",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M5 3h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6.5L8 21v-4H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                            }
                        }
                    ]
                },
                {
                    "name": "glyph",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8.3 14.2l3.7-8.4 3.7 8.4"
                            }
                        }
                    ]
                }
            ]
        },
        "base": {
            "layers": [
                {
                    "name": "bubble",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M5 3h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6.5L8 21v-4H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                            }
                        }
                    ]
                },
                {
                    "name": "glyph",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8.5 14l3.5-8 3.5 8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9.9 11h4.2"
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
                "glyph"
            ]
        },
        "multicolor": {
            "bubble": "ink.500",
            "glyph": "leaf.700"
        }
    }
};
export default UtilityLanguage;
