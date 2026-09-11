export const GardenHose = {
    "id": "garden.hose",
    "label": "Hose",
    "tier": "P2",
    "grades": {
        "base": {
            "layers": [
                {
                    "name": "coil",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M11 20a5 5 0 1 1 5-5v-1a3 3 0 0 1 3-3"
                            }
                        }
                    ]
                },
                {
                    "name": "nozzle",
                    "role": "accent",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M18 8l4 3-2.5 2.5L16 11Z"
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
                "coil"
            ]
        },
        "multicolor": {
            "coil": "water.600",
            "nozzle": "ink.900"
        }
    }
};
export default GardenHose;
