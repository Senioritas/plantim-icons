export const ActionDelete = {
    "id": "action.delete",
    "label": "Delete",
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
                                "d": "M10 11v6"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M14 11v6"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 6h18"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
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
export default ActionDelete;
