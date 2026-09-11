export const FlagPt = {
    "id": "flag.pt",
    "code": "pt",
    "label": "Portugal",
    "accessibilityLabelKey": "a11y.icons.flag.pt",
    "layers": [
        {
            "name": "field",
            "micro": true,
            "shapes": [
                {
                    "type": "rect",
                    "x": 0,
                    "y": 0,
                    "w": 8,
                    "h": 14,
                    "fill": "#006600"
                },
                {
                    "type": "rect",
                    "x": 8,
                    "y": 0,
                    "w": 12,
                    "h": 14,
                    "fill": "#FF0000"
                }
            ]
        },
        {
            "name": "sphere",
            "micro": true,
            "shapes": [
                {
                    "type": "circle",
                    "cx": 8,
                    "cy": 7,
                    "r": 2.9,
                    "fill": "#FFE000"
                },
                {
                    "type": "circle",
                    "cx": 8,
                    "cy": 7,
                    "r": 2.1,
                    "fill": "#FF0000"
                }
            ]
        },
        {
            "name": "shield",
            "micro": false,
            "shapes": [
                {
                    "type": "circle",
                    "cx": 8,
                    "cy": 7,
                    "r": 1.4,
                    "fill": "#FFFFFF"
                }
            ]
        }
    ],
    "mono": {
        "base": [
            {
                "type": "path",
                "attrs": {
                    "d": "M10 5v14"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "10",
                    "cy": "12",
                    "r": "2.5"
                }
            }
        ]
    }
};
export default FlagPt;
