export const LocationOutdoor = {
    "id": "location.outdoor",
    "label": "Outdoor",
    "tier": "P2",
    "grades": {
        "base": {
            "layers": [
                {
                    "name": "crown",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "circle",
                            "attrs": {
                                "cx": "12",
                                "cy": "9.5",
                                "r": "6.5"
                            }
                        }
                    ]
                },
                {
                    "name": "trunk",
                    "role": "secondary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 16v5"
                            }
                        }
                    ]
                },
                {
                    "name": "ground",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M6 21h12"
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
                "M12 2a7.5 7.5 0 1 0 0 15a7.5 7.5 0 1 0 0-15Z",
                "M11 17h2v3h6v2H5v-2h6Z"
            ],
            "counters": 0
        }
    },
    "variants": {
        "duotone": {
            "primary": [
                "crown"
            ]
        },
        "multicolor": {
            "crown": "leaf.500",
            "trunk": "earth.600",
            "ground": "earth.400"
        }
    }
};
export default LocationOutdoor;
