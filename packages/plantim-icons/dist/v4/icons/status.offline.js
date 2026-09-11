export const StatusOffline = {
    "id": "status.offline",
    "label": "Offline",
    "tier": "P1",
    "grades": {
        "base": {
            "layers": [
                {
                    "name": "cloud",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
                            }
                        }
                    ]
                },
                {
                    "name": "slash",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 3l18 18"
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
                "cloud",
                "slash"
            ]
        },
        "multicolor": {
            "cloud": "ink.500",
            "slash": "status.error"
        }
    }
};
export default StatusOffline;
