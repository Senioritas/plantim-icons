export const FlagUnknown = {
    "id": "flag.unknown",
    "code": "unknown",
    "label": "Region not set",
    "accessibilityLabelKey": "a11y.icons.flag.unknown",
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
                    "fill": "#CFD8DC"
                }
            ]
        },
        {
            "name": "glyph",
            "micro": true,
            "shapes": [
                {
                    "type": "spath",
                    "d": "M8.2 5.2a1.9 1.9 0 0 1 3.6.6c0 1.3-1.8 1.9-1.8 1.9",
                    "stroke": "#607D8B",
                    "width": 1.5
                },
                {
                    "type": "circle",
                    "cx": 10,
                    "cy": 10.6,
                    "r": 0.85,
                    "fill": "#607D8B"
                }
            ]
        }
    ],
    "mono": {
        "base": [
            {
                "type": "path",
                "attrs": {
                    "d": "M10.2 10.2a1.9 1.9 0 0 1 3.6.6c0 1.3-1.8 1.9-1.8 1.9"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "16.2",
                    "r": "1.5"
                },
                "filled": true
            }
        ]
    }
};
export default FlagUnknown;
