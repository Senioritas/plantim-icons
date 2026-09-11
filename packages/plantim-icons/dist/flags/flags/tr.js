export const FlagTr = {
    "id": "flag.tr",
    "code": "tr",
    "label": "Türkiye",
    "accessibilityLabelKey": "a11y.icons.flag.tr",
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
                    "fill": "#E30A17"
                }
            ]
        },
        {
            "name": "crescent",
            "micro": true,
            "shapes": [
                {
                    "type": "circle",
                    "cx": 7.2,
                    "cy": 7,
                    "r": 3.8,
                    "fill": "#FFFFFF"
                },
                {
                    "type": "circle",
                    "cx": 8.3,
                    "cy": 7,
                    "r": 3,
                    "fill": "#E30A17"
                }
            ]
        },
        {
            "name": "star",
            "micro": true,
            "shapes": [
                {
                    "type": "path",
                    "d": "M10.5 7L11.813 6.573L11.813 5.193L12.624 6.31L13.937 5.883L13.126 7L13.937 8.117L12.624 7.69L11.813 8.807L11.813 7.427Z",
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
                    "d": "M11.1 9.06A3.4 3.4 0 1 0 11.1 14.94"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "14.7",
                    "cy": "12",
                    "r": "1.5"
                },
                "filled": true
            }
        ]
    }
};
export default FlagTr;
