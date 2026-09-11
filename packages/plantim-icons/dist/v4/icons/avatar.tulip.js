export const AvatarTulip = {
    "id": "avatar.tulip",
    "label": "Tulip",
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
                                "d": "M7.5 8c0 4.6 2 8 4.5 8.5 2.5-.5 4.5-3.9 4.5-8.5-1.2.8-2.2 1.3-3 1.5-.5-.8-1-1.8-1.5-3-.5 1.2-1 2.2-1.5 3-.8-.2-1.8-.7-3-1.5Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 17v2.5"
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
                                "d": "M7.5 8c0 4.6 2 8 4.5 8.5 2.5-.5 4.5-3.9 4.5-8.5-1.2.8-2.2 1.3-3 1.5-.5-.8-1-1.8-1.5-3-.5 1.2-1 2.2-1.5 3-.8-.2-1.8-.7-3-1.5Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 17v2.5"
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
                                "d": "M12 10v5.5"
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
                "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM7.5 8c0 4.6 2 8 4.5 8.5 2.5-.5 4.5-3.9 4.5-8.5-1.2.8-2.2 1.3-3 1.5-.5-.8-1-1.8-1.5-3-.5 1.2-1 2.2-1.5 3-.8-.2-1.8-.7-3-1.5ZM11 17h2v2.5h-2Z"
            ],
            "counters": 2
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
            "plant": "bloom.500",
            "detail": "bloom.500"
        }
    }
};
export default AvatarTulip;
