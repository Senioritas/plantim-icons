export const UtilityTrendingDown = {
    "id": "utility.trending.down",
    "label": "Trending Down",
    "tier": "P1",
    "grades": {
        "micro": {
            "layers": [
                {
                    "name": "primary",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16 17h6v-6"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m22 17-8.5-8.5-5 5L2 7"
                            }
                        }
                    ]
                }
            ]
        },
        "base": {
            "layers": [
                {
                    "name": "primary",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M16 17h6v-6"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "m22 17-8.5-8.5-5 5L2 7"
                            }
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
                "primary"
            ]
        },
        "multicolor": {
            "primary": "ink.900"
        }
    }
};
export default UtilityTrendingDown;
