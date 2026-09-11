export const TaxonomyFamily = {
    "id": "taxonomy.family",
    "label": "Family",
    "tier": "P2",
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
                                "d": "M12 3c-2 1-3 2.5-3 4.5S10.5 11 12 11c1.5 0 3-1 3-3.5S14 4 12 3z"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 11L12 14"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M6 20v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M6 20L6 21"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M12 14L12 21"
                            }
                        },
                        {
                            "type": "path",
                            "attrs": {
                                "d": "M18 20L18 21"
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
            "primary": "leaf.700"
        }
    }
};
export default TaxonomyFamily;
