export const StatusInfo = {
    "id": "status.info",
    "label": "Info",
    "tier": "P1",
    "grades": {
        "base": {
            "layers": [
                {
                    "name": "primary",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "12",
                                "r": "10"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 16v-4"
                            }
                        }
                    ]
                },
                {
                    "name": "accent",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "8",
                                "r": "1.1"
                            },
                            "filled": true
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
            "primary": "status.info",
            "accent": "status.info"
        }
    }
};
export default StatusInfo;
