export const UtilityExternalLink = {
    "id": "utility.external.link",
    "label": "External link",
    "tier": "P1",
    "grades": {
        "base": {
            "layers": [
                {
                    "name": "box",
                    "role": "secondary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                            }
                        }
                    ]
                },
                {
                    "name": "arrow",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M15 3h6v6"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M10 14 21 3"
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
                "arrow"
            ]
        },
        "multicolor": {
            "box": "ink.500",
            "arrow": "ink.900"
        }
    }
};
export default UtilityExternalLink;
