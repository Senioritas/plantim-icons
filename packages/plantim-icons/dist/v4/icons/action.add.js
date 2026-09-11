export const ActionAdd = {
    "id": "action.add",
    "label": "Add",
    "tier": "P0",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "plus",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 5v14"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M5 12h14"
                            }
                        }
                    ]
                }
            ]
        },
        "base": {
            "layers": [
                {
                    "name": "plus",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 5.5v13"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M5.5 12h13"
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
            "strokeWidth": 3.4,
            "counters": 0
        },
        "base": {
            "mode": "bold",
            "strokeWidth": 3.2,
            "counters": 0
        }
    },
    "variants": {
        "duotone": {
            "primary": [
                "plus"
            ]
        },
        "multicolor": {
            "plus": "leaf.700"
        }
    },
    "animation": "addSpin"
};
export default ActionAdd;
