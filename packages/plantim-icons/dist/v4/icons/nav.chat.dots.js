export const NavChatDots = {
    "id": "nav.chat.dots",
    "label": "Chat (typing)",
    "tier": "P2",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "bubble",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z"
                            }
                        }
                    ]
                },
                {
                    "name": "dots",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "8.2",
                                "cy": "12",
                                "r": "1.6"
                            },
                            "filled": true
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "12",
                                "r": "1.6"
                            },
                            "filled": true
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "15.8",
                                "cy": "12",
                                "r": "1.6"
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
                    "name": "bubble",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z"
                            }
                        }
                    ]
                },
                {
                    "name": "dots",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "8.1",
                                "cy": "12",
                                "r": "1.2"
                            },
                            "filled": true
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "11.9",
                                "cy": "12",
                                "r": "1.2"
                            },
                            "filled": true
                        },
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "15.7",
                                "cy": "12",
                                "r": "1.2"
                            },
                            "filled": true
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
                "bubble"
            ]
        },
        "multicolor": {
            "bubble": "leaf.700",
            "dots": "leaf.300"
        }
    }
};
export default NavChatDots;
