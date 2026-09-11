export const UtilityLink = {
    "id": "utility.link",
    "label": "Link",
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
                                "d": "M9 17H7A5 5 0 0 1 7 7"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M15 7h2a5 5 0 0 1 4 8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 12L12 12"
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
export default UtilityLink;
