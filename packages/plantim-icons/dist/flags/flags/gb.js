export const FlagGb = {
    "id": "flag.gb",
    "code": "gb",
    "label": "United Kingdom",
    "accessibilityLabelKey": "a11y.icons.flag.gb",
    "layers": [
        {
            "name": "field",
            "micro": true,
            "shapes": [
                {
                    "type": "rect",
                    "x": 0,
                    "y": 0,
                    "w": 20,
                    "h": 14,
                    "fill": "#012169"
                }
            ]
        },
        {
            "name": "saltire",
            "micro": false,
            "shapes": [
                {
                    "type": "line",
                    "x1": 0,
                    "y1": 0,
                    "x2": 20,
                    "y2": 14,
                    "stroke": "#FFFFFF",
                    "width": 2.8
                },
                {
                    "type": "line",
                    "x1": 20,
                    "y1": 0,
                    "x2": 0,
                    "y2": 14,
                    "stroke": "#FFFFFF",
                    "width": 2.8
                },
                {
                    "type": "line",
                    "x1": 0,
                    "y1": 0,
                    "x2": 20,
                    "y2": 14,
                    "stroke": "#C8102E",
                    "width": 1
                },
                {
                    "type": "line",
                    "x1": 20,
                    "y1": 0,
                    "x2": 0,
                    "y2": 14,
                    "stroke": "#C8102E",
                    "width": 1
                }
            ]
        },
        {
            "name": "cross",
            "micro": true,
            "shapes": [
                {
                    "type": "rect",
                    "x": 8,
                    "y": 0,
                    "w": 4,
                    "h": 14,
                    "fill": "#FFFFFF"
                },
                {
                    "type": "rect",
                    "x": 0,
                    "y": 5,
                    "w": 20,
                    "h": 4,
                    "fill": "#FFFFFF"
                },
                {
                    "type": "rect",
                    "x": 8.8,
                    "y": 0,
                    "w": 2.4,
                    "h": 14,
                    "fill": "#C8102E"
                },
                {
                    "type": "rect",
                    "x": 0,
                    "y": 5.8,
                    "w": 20,
                    "h": 2.4,
                    "fill": "#C8102E"
                }
            ]
        }
    ],
    "mono": {
        "base": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 5v14"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M2 12h20"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M2 5l20 14"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M22 5 2 19"
                }
            }
        ],
        "micro": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 5v14"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M2 12h20"
                }
            }
        ]
    }
};
export default FlagGb;
