export const FlagCh = {
    "id": "flag.ch",
    "code": "ch",
    "label": "Switzerland",
    "accessibilityLabelKey": "a11y.icons.flag.ch",
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
                    "fill": "#DA291C"
                }
            ]
        },
        {
            "name": "cross",
            "micro": true,
            "shapes": [
                {
                    "type": "rect",
                    "x": 8.5,
                    "y": 2.5,
                    "w": 3,
                    "h": 9,
                    "fill": "#FFFFFF"
                },
                {
                    "type": "rect",
                    "x": 5.5,
                    "y": 5.5,
                    "w": 9,
                    "h": 3,
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
                    "d": "M12 8v8"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 12h8"
                }
            }
        ]
    }
};
export default FlagCh;
