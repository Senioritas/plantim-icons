export const CareWateringAlt = {
    "id": "care.watering.alt",
    "label": "Watering Alt",
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
                                "d": "M4 12h9v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 12V9.5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2V12"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M13 13.5h3.5l3-2.5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M19.5 12.5L19.5 14.5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M17.5 13.5L17.5 15.5"
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
            "primary": "water.600"
        }
    }
};
export default CareWateringAlt;
