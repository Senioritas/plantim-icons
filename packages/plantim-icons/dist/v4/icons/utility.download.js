export const UtilityDownload = {
    "id": "utility.download",
    "label": "Download",
    "tier": "P1",
    "grades": {
        "base": {
            "layers": [
                {
                    "name": "tray",
                    "role": "secondary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
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
                                "d": "M7 10l5 5 5-5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 15V3"
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
            "tray": "water.600",
            "arrow": "water.600"
        }
    }
};
export default UtilityDownload;
