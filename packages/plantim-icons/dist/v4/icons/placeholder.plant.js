export const PlaceholderPlant = {
    "id": "placeholder.plant",
    "label": "Plant photo placeholder",
    "tier": "P1",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "frame",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "rect",
                            "attrs": {
                                "x": "3",
                                "y": "3",
                                "width": "18",
                                "height": "18",
                                "rx": "2"
                            }
                        }
                    ]
                },
                {
                    "name": "leaf",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16.5 7.5C10.5 8 7.5 11.5 7.5 16.5C13.5 16 16.5 12.5 16.5 7.5Z"
                            }
                        }
                    ]
                }
            ]
        },
        "base": {
            "layers": [
                {
                    "name": "frame",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "rect",
                            "attrs": {
                                "x": "3",
                                "y": "3",
                                "width": "18",
                                "height": "18",
                                "rx": "2"
                            }
                        }
                    ]
                },
                {
                    "name": "leaf",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16.5 7.5C10.5 8 7.5 11.5 7.5 16.5C13.5 16 16.5 12.5 16.5 7.5Z"
                            }
                        }
                    ]
                },
                {
                    "name": "vein",
                    "role": "secondary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9.5 14.5 14.5 9.5"
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
                "M5 2h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3ZM17 7C10.2 7.6 7 11.6 7 17C13.4 16.4 16.6 12.4 17 7Z"
            ],
            "counters": 1
        }
    },
    "variants": {
        "duotone": {
            "primary": [
                "leaf",
                "vein"
            ]
        },
        "multicolor": {
            "frame": "ink.300",
            "leaf": "leaf.300",
            "vein": "leaf.300"
        }
    }
};
export default PlaceholderPlant;
