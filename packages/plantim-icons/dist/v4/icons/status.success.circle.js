export const StatusSuccessCircle = {
    "id": "status.success.circle",
    "label": "Success Circle",
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
                                "d": "M21.801 10A10 10 0 1 1 17 3.335"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m9 11 3 3L22 4"
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
            "primary": "status.success"
        }
    }
};
export default StatusSuccessCircle;
