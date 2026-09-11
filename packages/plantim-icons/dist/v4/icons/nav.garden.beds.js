export const NavGardenBeds = {
    "id": "nav.garden.beds",
    "label": "Garden Beds",
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
                                "d": "M3 9c3-2 15-2 18 0"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 14c3-2 15-2 18 0"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M3 19c3-2 15-2 18 0"
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
                                "cx": "8",
                                "cy": "6",
                                "r": "1"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "16",
                                "cy": "6",
                                "r": "1"
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
export default NavGardenBeds;
