export const NavPlantLeaf = {
    "id": "nav.plant.leaf",
    "label": "Plant Leaf",
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
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9.5 14.5l3-.8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12.5 11.5l3-.8"
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
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9.5 14.5l3-.8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12.5 11.5l3-.8"
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
export default NavPlantLeaf;
