export const PlaceholderAvatar = {
    "id": "placeholder.avatar",
    "label": "Avatar placeholder",
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
                                "r": "9.4"
                            }
                        }
                    ]
                },
                {
                    "name": "bust",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "8.6",
                                "r": "3.1"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M5.6 19.4C6.6 15.9 9.1 14.4 12 14.4s5.4 1.5 6.4 5"
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
                    "name": "bust",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "8.8",
                                "r": "2.9"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M5.9 19.2C6.9 15.9 9.2 14.2 12 14.2s5.1 1.7 6.1 5"
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
                "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM5.8 17.45A8.25 8.25 0 1 1 18.2 17.45C17.2 14.9 14.8 13.4 12 13.4s-5.2 1.5-6.2 4.05ZM12 5.3a3.5 3.5 0 1 0 0 7a3.5 3.5 0 1 0 0-7Z"
            ],
            "counters": 1
        }
    },
    "variants": {
        "duotone": {
            "primary": [
                "bust"
            ]
        },
        "multicolor": {
            "ring": "ink.300",
            "bust": "ink.500"
        }
    }
};
export default PlaceholderAvatar;
