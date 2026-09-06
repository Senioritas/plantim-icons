export const NavTodayLeaf = {
    "id": "nav.today.leaf",
    "label": "Today Leaf",
    "tier": "P2",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "primary",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 20C4 12 12 4 20 4c0 8-8 16-16 16Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 20L20 4"
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
                                "cx": "14",
                                "cy": "9",
                                "r": "1.6"
                            }
                        }
                    ]
                }
            ]
        },
        "base": {
            "layers": [
                {
                    "name": "primary",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 20C4 12 12 4 20 4c0 8-8 16-16 16Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 20L20 4"
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
                                "cx": "14",
                                "cy": "9",
                                "r": "1.6"
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
            "primary": "ink.900",
            "accent": "ink.900"
        }
    }
};
export default NavTodayLeaf;
