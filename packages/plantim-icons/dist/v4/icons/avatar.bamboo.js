export const AvatarBamboo = {
    "id": "avatar.bamboo",
    "label": "Bamboo",
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
                                "d": "M10.6 6.4a1.4 1.4 0 0 1 2.8 0v12.2a1.4 1.4 0 0 1-2.8 0Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M14.051 8.973Q17.098 9.789 19.092 6.502Q15.375 5.523 13.749 8.227Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M10.251 13.027Q8.625 10.323 4.908 11.302Q6.902 14.589 9.949 13.773Z"
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
                                "d": "M10.6 6.4a1.4 1.4 0 0 1 2.8 0v12.2a1.4 1.4 0 0 1-2.8 0Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M14.051 8.973Q17.098 9.789 19.092 6.502Q15.375 5.523 13.749 8.227Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M10.251 13.027Q8.625 10.323 4.908 11.302Q6.902 14.589 9.949 13.773Z"
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
                                "d": "M10.6 10.2h2.8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M10.6 15h2.8"
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
                "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM10.6 6.4a1.4 1.4 0 0 1 2.8 0v12.2a1.4 1.4 0 0 1-2.8 0ZM10.75 10.52L13.25 10.52L13.25 9.88L10.75 9.88ZM10.75 15.32L13.25 15.32L13.25 14.68L10.75 14.68ZM14.051 8.973Q17.098 9.789 19.092 6.502Q15.375 5.523 13.749 8.227ZM10.251 13.027Q8.625 10.323 4.908 11.302Q6.902 14.589 9.949 13.773Z"
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
            "ring": "leaf.300",
            "plant": "leaf.700",
            "detail": "leaf.300"
        }
    }
};
export default AvatarBamboo;
