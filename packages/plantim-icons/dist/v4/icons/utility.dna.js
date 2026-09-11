export const UtilityDna = {
    "id": "utility.dna",
    "label": "Dna",
    "tier": "P1",
    "grades": {
        "base": {
            "layers": [
                {
                    "name": "primary",
                    "role": "primary",
                    "nodes": [
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M9 3c0 4 6 5 6 9s-6 5-6 9"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M15 3c0 4-6 5-6 9s6 5 6 9"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8.5 7h7"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8 12h8"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M8.5 17h7"
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
export default UtilityDna;
