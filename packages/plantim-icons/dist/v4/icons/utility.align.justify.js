export const UtilityAlignJustify = {
    "id": "utility.align.justify",
    "label": "Align Justify",
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
                                "d": "M3 5h18"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 12h18"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 19h18"
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
export default UtilityAlignJustify;
