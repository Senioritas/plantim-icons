export const AvatarPothos = {
    "id": "avatar.pothos",
    "label": "Pothos",
    "tier": "P1",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "ring",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "12",
                                "r": "9.25"
                            }
                        }
                    ]
                },
                {
                    "name": "plant",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 8.2C10.6 5.8 6.6 6.3 6.6 9.6c0 3.3 3.4 5.6 5.4 7.4 2-1.8 5.4-4.1 5.4-7.4 0-3.3-4-3.8-5.4-1.4Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12.6 7.6c.4-1.6 1.6-2.5 3.4-2.4"
                            }
                        }
                    ]
                }
            ]
        },
        "base": {
            "layers": [
                {
                    "name": "ring",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "12",
                                "r": "9.25"
                            }
                        }
                    ]
                },
                {
                    "name": "plant",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 8.2C10.6 5.8 6.6 6.3 6.6 9.6c0 3.3 3.4 5.6 5.4 7.4 2-1.8 5.4-4.1 5.4-7.4 0-3.3-4-3.8-5.4-1.4Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12.6 7.6c.4-1.6 1.6-2.5 3.4-2.4"
                            }
                        }
                    ]
                },
                {
                    "name": "detail",
                    "role": "secondary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 9.8v5.2"
                            }
                        }
                    ]
                }
            ]
        }
    },
    "solid": {
        "base": {
            "paths": [
                "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM12 8.2C10.6 5.8 6.6 6.3 6.6 9.6c0 3.3 3.4 5.6 5.4 7.4 2-1.8 5.4-4.1 5.4-7.4 0-3.3-4-3.8-5.4-1.4ZM11.67 10L11.67 15.6L12.33 15.6L12.33 10Z"
            ],
            "counters": 1
        }
    },
    "variants": {
        "duotone": {
            "primary": [
                "plant"
            ]
        },
        "multicolor": {
            "ring": "sun.300",
            "plant": "leaf.700",
            "detail": "leaf.500"
        }
    }
};
export default AvatarPothos;
