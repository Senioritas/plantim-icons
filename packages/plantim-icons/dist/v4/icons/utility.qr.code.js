export const UtilityQrCode = {
    "id": "utility.qr.code",
    "label": "QR code",
    "tier": "P2",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "finders",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "rect",
                            "attrs": {
                                "x": "3",
                                "y": "3",
                                "width": "7",
                                "height": "7",
                                "rx": "1.5"
                            }
                        },
                        {
                            "type": "rect",
                            "attrs": {
                                "x": "14",
                                "y": "3",
                                "width": "7",
                                "height": "7",
                                "rx": "1.5"
                            }
                        },
                        {
                            "type": "rect",
                            "attrs": {
                                "x": "3",
                                "y": "14",
                                "width": "7",
                                "height": "7",
                                "rx": "1.5"
                            }
                        }
                    ]
                },
                {
                    "name": "modules",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M14 14h3v3"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "20",
                                "cy": "20.5",
                                "r": "1.7"
                            },
                            "filled": true
                        }
                    ]
                }
            ]
        },
        "base": {
            "layers": [
                {
                    "name": "finders",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "rect",
                            "attrs": {
                                "x": "3",
                                "y": "3",
                                "width": "7",
                                "height": "7",
                                "rx": "1.5"
                            }
                        },
                        {
                            "type": "rect",
                            "attrs": {
                                "x": "14",
                                "y": "3",
                                "width": "7",
                                "height": "7",
                                "rx": "1.5"
                            }
                        },
                        {
                            "type": "rect",
                            "attrs": {
                                "x": "3",
                                "y": "14",
                                "width": "7",
                                "height": "7",
                                "rx": "1.5"
                            }
                        }
                    ]
                },
                {
                    "name": "eyes",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "6.5",
                                "cy": "6.5",
                                "r": "1.5"
                            },
                            "filled": true
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "17.5",
                                "cy": "6.5",
                                "r": "1.5"
                            },
                            "filled": true
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "6.5",
                                "cy": "17.5",
                                "r": "1.5"
                            },
                            "filled": true
                        }
                    ]
                },
                {
                    "name": "modules",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M14 14h3v3"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M21 14v3"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M14 21h3"
                            }
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "20",
                                "cy": "20.5",
                                "r": "1.5"
                            },
                            "filled": true
                        }
                    ]
                }
            ]
        }
    },
    "solid": {
        "base": {
            "paths": [
                "M4 2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2ZM4 4h5v5H4ZM5.5 5.5h2v2h-2Z",
                "M15 2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2ZM15 4h5v5h-5ZM16.5 5.5h2v2h-2Z",
                "M4 13h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2ZM4 15h5v5H4ZM5.5 16.5h2v2h-2Z",
                "M13 13h5v2h-3v3h-2Z",
                "M20 13h2v5h-2Z",
                "M13 20h5v2h-5Z",
                "M20 19a1.5 1.5 0 1 0 0 3a1.5 1.5 0 1 0 0-3Z"
            ],
            "counters": 3
        }
    },
    "variants": {
        "duotone": {
            "primary": [
                "finders",
                "eyes"
            ]
        },
        "multicolor": {
            "finders": "ink.900",
            "eyes": "ink.900",
            "modules": "ink.500"
        }
    }
};
export default UtilityQrCode;
