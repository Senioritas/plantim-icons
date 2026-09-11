export const AvatarPine = {
    "id": "avatar.pine",
    "label": "Pine",
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
                                "d": "M12 5l4 6h-2.2l3.2 5H13v2.5h-2V16H7l3.2-5H8Z"
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
                "M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 1 0 0-20.5ZM12 5l4 6h-2.2l3.2 5H13v2.5h-2V16H7l3.2-5H8Z"
            ],
            "counters": 1
        }
    },
    "variants": {
        "duotone": {
            "primary": [
                "plant"
            ]
        },
        "multicolor": {
            "ring": "ink.300",
            "plant": "leaf.700"
        }
    }
};
export default AvatarPine;
