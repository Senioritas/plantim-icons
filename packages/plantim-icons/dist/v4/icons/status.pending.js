export const StatusPending = {
    "id": "status.pending",
    "label": "Pending",
    "tier": "P1",
    "grades": {
        "base": {
            "layers": [
                {
                    "name": "caps",
                    "role": "secondary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M6 3h12"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M6 21h12"
                            }
                        }
                    ]
                },
                {
                    "name": "glass",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 3v3.6c0 1.6 3.2 4.1 3.2 5.4s-3.2 3.8-3.2 5.4V21"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16 3v3.6c0 1.6-3.2 4.1-3.2 5.4s3.2 3.8 3.2 5.4V21"
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
                "glass"
            ]
        },
        "multicolor": {
            "caps": "ink.500",
            "glass": "sun.500"
        }
    }
};
export default StatusPending;
