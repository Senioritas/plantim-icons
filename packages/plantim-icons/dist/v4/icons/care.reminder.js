export const CareReminder = {
    "id": "care.reminder",
    "label": "Reminder",
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
                                "d": "M18 15H6l1.4-2V10a4.6 4.6 0 0 1 9.2 0v3z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M10.5 18.5a2 2 0 0 0 3 0"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "17.5",
                                "cy": "6.5",
                                "r": "1.8"
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
            "primary": "sun.500"
        }
    }
};
export default CareReminder;
