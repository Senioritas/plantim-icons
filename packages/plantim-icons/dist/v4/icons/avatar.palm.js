export const AvatarPalm = {
    "id": "avatar.palm",
    "label": "Palm",
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
                                "d": "M10.109 8.705Q8.266 6.201 5.106 8.284Q7.363 11.322 9.951 9.601Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M11.226 7.601Q11.692 4.527 7.985 3.766Q7.433 7.51 10.48 8.123Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M13.52 8.123Q16.567 7.51 16.015 3.766Q12.308 4.527 12.774 7.601Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M14.049 9.601Q16.637 11.322 18.894 8.284Q15.734 6.201 13.891 8.705Z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 11.8v7"
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
                "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM10.109 8.705Q8.266 6.201 5.106 8.284Q7.363 11.322 9.951 9.601ZM11.226 7.601Q11.692 4.527 7.985 3.766Q7.433 7.51 10.48 8.123ZM13.52 8.123Q16.567 7.51 16.015 3.766Q12.308 4.527 12.774 7.601ZM14.049 9.601Q16.637 11.322 18.894 8.284Q15.734 6.201 13.891 8.705ZM11 11.8h2v7h-2Z"
            ],
            "counters": 5
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
            "plant": "leaf.700"
        }
    }
};
export default AvatarPalm;
