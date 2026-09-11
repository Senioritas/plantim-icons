export const AvatarOrchid = {
    "id": "avatar.orchid",
    "label": "Orchid",
    "tier": "P1",
    "grades": {
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
                                "d": "M12.525 9.7Q15 7.495 12 4.8Q9 7.495 11.475 9.7Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M14.35 11.789Q17.212 13.461 18.848 9.775Q15.357 7.755 14.025 10.79Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12.927 14.169Q12.221 17.408 16.232 17.825Q17.075 13.881 13.777 13.552Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M10.223 13.552Q6.925 13.881 7.768 17.825Q11.779 17.408 11.073 14.169Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9.975 10.79Q8.643 7.755 5.152 9.775Q6.788 13.461 9.65 11.789Z"
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
                                "cx": "12",
                                "cy": "12",
                                "r": "1.5"
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
                "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM12.525 9.7Q15 7.495 12 4.8Q9 7.495 11.475 9.7ZM14.35 11.789Q17.212 13.461 18.848 9.775Q15.357 7.755 14.025 10.79ZM12.927 14.169Q12.221 17.408 16.232 17.825Q17.075 13.881 13.777 13.552ZM10.223 13.552Q6.925 13.881 7.768 17.825Q11.779 17.408 11.073 14.169ZM9.975 10.79Q8.643 7.755 5.152 9.775Q6.788 13.461 9.65 11.789ZM10.5 12a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0Z"
            ],
            "counters": 6
        }
    },
    "variants": {
        "duotone": {
            "primary": [
                "plant",
                "accent"
            ]
        },
        "multicolor": {
            "ring": "leaf.300",
            "plant": "bloom.500",
            "accent": "sun.500"
        }
    }
};
export default AvatarOrchid;
