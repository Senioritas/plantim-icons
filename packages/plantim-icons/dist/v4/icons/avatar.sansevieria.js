export const AvatarSansevieria = {
    "id": "avatar.sansevieria",
    "label": "Snake plant",
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
                                "d": "M12.85 18.2L12 5L11.15 18.2Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M10.575 17.495L4.801 8.446L9.074 18.293Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M14.926 18.293L19.199 8.446L13.425 17.495Z"
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
                                "d": "M12.85 18.2L12 5L11.15 18.2Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M10.575 17.495L4.801 8.446L9.074 18.293Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M14.926 18.293L19.199 8.446L13.425 17.495Z"
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
                                "d": "M12 8.5v8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8.6 12l.9 4.6"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M15.4 12l-.9 4.6"
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
                "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM12.85 18.2L12 5L11.15 18.2ZM10.575 17.495L4.801 8.446L9.074 18.293ZM14.926 18.293L19.199 8.446L13.425 17.495Z"
            ],
            "counters": 3
        }
    },
    "variants": {
        "duotone": {
            "primary": [
                "plant"
            ]
        },
        "multicolor": {
            "ring": "earth.400",
            "plant": "leaf.700",
            "detail": "sun.300"
        }
    }
};
export default AvatarSansevieria;
