export const PlaceholderChart = {
    "id": "placeholder.chart",
    "label": "Chart skeleton",
    "tier": "P2",
    "grades": {
        "base": {
            "layers": [
                {
                    "name": "axes",
                    "role": "container",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M4 4v16h16"
                            }
                        }
                    ]
                },
                {
                    "name": "bars",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 17v-5"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M13.5 17v-9"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M18 17v-3"
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
            "strokeWidth": 3.6,
            "counters": 0
        },
        "base": {
            "mode": "bold",
            "strokeWidth": 3.4,
            "counters": 0
        }
    },
    "variants": {
        "duotone": {
            "primary": [
                "bars"
            ]
        },
        "multicolor": {
            "axes": "ink.300",
            "bars": "ink.500"
        }
    }
};
export default PlaceholderChart;
