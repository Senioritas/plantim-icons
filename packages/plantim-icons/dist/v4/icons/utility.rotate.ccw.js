export const UtilityRotateCcw = {
    "id": "utility.rotate.ccw",
    "label": "Rotate Ccw",
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
                                "d": "M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 3v5h5"
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
export default UtilityRotateCcw;
