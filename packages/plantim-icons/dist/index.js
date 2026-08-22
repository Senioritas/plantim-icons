import { defineComponent, h } from "vue";
export const PLANTIM_ICONS_VERSION = "2.0.1";
export const PLANTIM_ICONS_REGISTRY_HASH = "dd50bd6712fa6917a5c8c9b3ba0ff65924ab44a12dc5812923238fa0eee2cbfb";
const iconRegistry = {
    "utility.activity": {
        "id": "utility.activity",
        "lucide": "Activity",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "rect",
                "attrs": {
                    "width": "18",
                    "height": "18",
                    "x": "3",
                    "y": "3",
                    "rx": "2",
                    "key": "afitv7"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M17 12h-2l-2 5-2-10-2 5H7",
                    "key": "15hlnc"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.activity"
        ],
        "category": "utility"
    },
    "status.error": {
        "id": "status.error",
        "lucide": "AlertCircle",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "12",
                    "x2": "12",
                    "y1": "8",
                    "y2": "12",
                    "key": "1pkeuh"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "12",
                    "x2": "12.01",
                    "y1": "16",
                    "y2": "16",
                    "key": "4dfq90"
                }
            }
        ],
        "accessibility": "status",
        "category": "status",
        "accessibilityLabelKey": "a11y.icons.status.error"
    },
    "status.warning": {
        "id": "status.warning",
        "lucide": "AlertTriangle",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
                    "key": "wmoenq"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 9v4",
                    "key": "juzpu7"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 17h.01",
                    "key": "p32p05"
                }
            }
        ],
        "accessibility": "status",
        "category": "status",
        "accessibilityLabelKey": "a11y.icons.status.warning"
    },
    "utility.align.justify": {
        "id": "utility.align.justify",
        "lucide": "AlignJustify",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M3 5h18",
                    "key": "1u36vt"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 12h18",
                    "key": "1i2n21"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 19h18",
                    "key": "awlh7x"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.align.justify"
        ],
        "category": "utility"
    },
    "utility.arrow.down": {
        "id": "utility.arrow.down",
        "lucide": "ArrowDown",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "m3 16 4 4 4-4",
                    "key": "1co6wj"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M7 20V4",
                    "key": "1yoxec"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M20 8h-5",
                    "key": "1vsyxs"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M15 10V6.5a2.5 2.5 0 0 1 5 0V10",
                    "key": "ag13bf"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M15 14h5l-5 6h5",
                    "key": "ur5jdg"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.arrow.down"
        ],
        "category": "utility"
    },
    "utility.arrow.down.to.dot": {
        "id": "utility.arrow.down.to.dot",
        "lucide": "ArrowDownToDot",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 2v14",
                    "key": "jyx4ut"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m19 9-7 7-7-7",
                    "key": "1oe3oy"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "21",
                    "r": "1",
                    "key": "o0uj5v"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.arrow.down.to.dot"
        ],
        "category": "utility"
    },
    "navigation.back": {
        "id": "navigation.back",
        "lucide": "ArrowLeft",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m12 8-4 4 4 4",
                    "key": "15vm53"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16 12H8",
                    "key": "1fr5h0"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "navigation"
    },
    "navigation.forward": {
        "id": "navigation.forward",
        "lucide": "ArrowRight",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m12 16 4-4-4-4",
                    "key": "1i9zcv"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 12h8",
                    "key": "1wcyev"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "navigation"
    },
    "utility.arrow.up": {
        "id": "utility.arrow.up",
        "lucide": "ArrowUp",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "m3 8 4-4 4 4",
                    "key": "11wl7u"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M7 4v16",
                    "key": "1glfcx"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M20 8h-5",
                    "key": "1vsyxs"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M15 10V6.5a2.5 2.5 0 0 1 5 0V10",
                    "key": "ag13bf"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M15 14h5l-5 6h5",
                    "key": "ur5jdg"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.arrow.up"
        ],
        "category": "utility"
    },
    "utility.arrow.up.from.dot": {
        "id": "utility.arrow.up.from.dot",
        "lucide": "ArrowUpFromDot",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "m5 9 7-7 7 7",
                    "key": "1hw5ic"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 16V2",
                    "key": "ywoabb"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "21",
                    "r": "1",
                    "key": "o0uj5v"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.arrow.up.from.dot"
        ],
        "category": "utility"
    },
    "utility.award": {
        "id": "utility.award",
        "lucide": "Award",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
                    "key": "1yiouv"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "8",
                    "r": "6",
                    "key": "1vp47v"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.award"
        ],
        "category": "utility"
    },
    "utility.baby": {
        "id": "utility.baby",
        "lucide": "Baby",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",
                    "key": "1u7htd"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M15 12h.01",
                    "key": "1k8ypt"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
                    "key": "11xh7x"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M9 12h.01",
                    "key": "157uk2"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.baby"
        ],
        "category": "utility"
    },
    "utility.badge.check": {
        "id": "utility.badge.check",
        "lucide": "BadgeCheck",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
                    "key": "3c2336"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m9 12 2 2 4-4",
                    "key": "dzmm74"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.badge.check"
        ],
        "category": "utility"
    },
    "utility.bar.chart3": {
        "id": "utility.bar.chart3",
        "lucide": "BarChart3",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M3 3v16a2 2 0 0 0 2 2h16",
                    "key": "c24i48"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M18 17V9",
                    "key": "2bz60n"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M13 17V5",
                    "key": "1frdt8"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 17v-3",
                    "key": "17ska0"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.bar.chart3"
        ],
        "category": "utility"
    },
    "utility.bell": {
        "id": "utility.bell",
        "lucide": "Bell",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M10.268 21a2 2 0 0 0 3.464 0",
                    "key": "vwvbt9"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348",
                    "key": "xaq59h"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "18",
                    "cy": "5",
                    "r": "3",
                    "key": "gq8acd"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.bell"
        ],
        "category": "utility"
    },
    "utility.bell.off": {
        "id": "utility.bell.off",
        "lucide": "BellOff",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M10.268 21a2 2 0 0 0 3.464 0",
                    "key": "vwvbt9"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",
                    "key": "178tsu"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m2 2 20 20",
                    "key": "1ooewy"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",
                    "key": "1hqiys"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.bell.off"
        ],
        "category": "utility"
    },
    "utility.bot": {
        "id": "utility.bot",
        "lucide": "Bot",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 6V2H8",
                    "key": "1155em"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M15 11v2",
                    "key": "i11awn"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M2 12h2",
                    "key": "1t8f8n"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M20 12h2",
                    "key": "1q8mjw"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z",
                    "key": "11gyqh"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M9 11v2",
                    "key": "1ueba0"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.bot"
        ],
        "category": "utility"
    },
    "utility.brain": {
        "id": "utility.brain",
        "lucide": "Brain",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
                    "key": "l5xja"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M9 13a4.5 4.5 0 0 0 3-4",
                    "key": "10igwf"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M6.003 5.125A3 3 0 0 0 6.401 6.5",
                    "key": "105sqy"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3.477 10.896a4 4 0 0 1 .585-.396",
                    "key": "ql3yin"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M6 18a4 4 0 0 1-1.967-.516",
                    "key": "2e4loj"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 13h4",
                    "key": "1ku699"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 18h6a2 2 0 0 1 2 2v1",
                    "key": "105ag5"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 8h8",
                    "key": "1lhi5i"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16 8V5a2 2 0 0 1 2-2",
                    "key": "u6izg6"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "16",
                    "cy": "13",
                    "r": ".5",
                    "key": "ry7gng"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "18",
                    "cy": "3",
                    "r": ".5",
                    "key": "1aiba7"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "20",
                    "cy": "21",
                    "r": ".5",
                    "key": "yhc1fs"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "20",
                    "cy": "8",
                    "r": ".5",
                    "key": "1e43v0"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.brain"
        ],
        "category": "utility"
    },
    "utility.bug": {
        "id": "utility.bug",
        "lucide": "Bug",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 20v-8",
                    "key": "i3yub9"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12.656 7H14a4 4 0 0 1 4 4v1.344",
                    "key": "vvueyn"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M14.12 3.88 16 2",
                    "key": "qol33r"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M17.123 17.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287",
                    "key": "1cu21y"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m2 2 20 20",
                    "key": "1ooewy"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M21 5a4 4 0 0 1-3.55 3.97",
                    "key": "5cxbf6"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M22 13h-3.344",
                    "key": "qb08am"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 21a4 4 0 0 1 3.81-4",
                    "key": "1fjd4g"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 5a4 4 0 0 0 3.55 3.97",
                    "key": "1d7oge"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M6 13H2",
                    "key": "82j7cp"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m8 2 1.88 1.88",
                    "key": "fmnt4t"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M9.712 4.06A3 3 0 0 1 15 6v1.13",
                    "key": "1bvup6"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.bug"
        ],
        "category": "utility"
    },
    "utility.cake": {
        "id": "utility.cake",
        "lucide": "Cake",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M16 13H3",
                    "key": "1wpj08"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16 17H3",
                    "key": "3lvfcd"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6",
                    "key": "1gmhf7"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "9",
                    "cy": "7",
                    "r": "2",
                    "key": "1305pl"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.cake"
        ],
        "category": "utility"
    },
    "calendar.date": {
        "id": "calendar.date",
        "lucide": "Calendar",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M11 14h1v4",
                    "key": "fy54vd"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16 2v4",
                    "key": "4m81vk"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 10h18",
                    "key": "8toen8"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 2v4",
                    "key": "1cmpym"
                }
            },
            {
                "type": "rect",
                "attrs": {
                    "x": "3",
                    "y": "4",
                    "width": "18",
                    "height": "18",
                    "rx": "2",
                    "key": "12vinp"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "calendar"
    },
    "utility.calendar.clock": {
        "id": "utility.calendar.clock",
        "lucide": "CalendarClock",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M16 14v2.2l1.6 1",
                    "key": "fo4ql5"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16 2v4",
                    "key": "4m81vk"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",
                    "key": "1osxxc"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 10h5",
                    "key": "r794hk"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 2v4",
                    "key": "1cmpym"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "16",
                    "cy": "16",
                    "r": "6",
                    "key": "qoo3c4"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.calendar.clock"
        ],
        "category": "utility"
    },
    "utility.calendar.days": {
        "id": "utility.calendar.days",
        "lucide": "CalendarDays",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M8 2v4",
                    "key": "1cmpym"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16 2v4",
                    "key": "4m81vk"
                }
            },
            {
                "type": "rect",
                "attrs": {
                    "width": "18",
                    "height": "18",
                    "x": "3",
                    "y": "4",
                    "rx": "2",
                    "key": "1hopcy"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 10h18",
                    "key": "8toen8"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 14h.01",
                    "key": "6423bh"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 14h.01",
                    "key": "1etili"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16 14h.01",
                    "key": "1gbofw"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 18h.01",
                    "key": "lrp35t"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 18h.01",
                    "key": "mhygvu"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16 18h.01",
                    "key": "kzsmim"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.calendar.days"
        ],
        "category": "utility"
    },
    "utility.camera": {
        "id": "utility.camera",
        "lucide": "Camera",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
                    "key": "18u6gg"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "13",
                    "r": "3",
                    "key": "1vg3eu"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.camera"
        ],
        "category": "utility"
    },
    "status.success": {
        "id": "status.success",
        "lucide": "Check",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M21.801 10A10 10 0 1 1 17 3.335",
                    "key": "yps3ct"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m9 11 3 3L22 4",
                    "key": "1pflzl"
                }
            }
        ],
        "accessibility": "status",
        "category": "status",
        "accessibilityLabelKey": "a11y.icons.status.success"
    },
    "utility.check.check": {
        "id": "utility.check.check",
        "lucide": "CheckCheck",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M18 6 7 17l-5-5",
                    "key": "116fxf"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m22 10-7.5 7.5L13 16",
                    "key": "ke71qq"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.check.check"
        ],
        "category": "utility"
    },
    "status.success.circle": {
        "id": "status.success.circle",
        "lucide": "CheckCircle",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M21.801 10A10 10 0 1 1 17 3.335",
                    "key": "yps3ct"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m9 11 3 3L22 4",
                    "key": "1pflzl"
                }
            }
        ],
        "accessibility": "status",
        "category": "status",
        "accessibilityLabelKey": "a11y.icons.status.success"
    },
    "status.success.circle.alt": {
        "id": "status.success.circle.alt",
        "lucide": "CheckCircle2",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m9 12 2 2 4-4",
                    "key": "dzmm74"
                }
            }
        ],
        "accessibility": "status",
        "category": "status",
        "accessibilityLabelKey": "a11y.icons.status.success"
    },
    "navigation.expand": {
        "id": "navigation.expand",
        "lucide": "ChevronDown",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m16 10-4 4-4-4",
                    "key": "894hmk"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "navigation"
    },
    "navigation.previous": {
        "id": "navigation.previous",
        "lucide": "ChevronLeft",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m14 16-4-4 4-4",
                    "key": "ojs7w8"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "navigation"
    },
    "navigation.next": {
        "id": "navigation.next",
        "lucide": "ChevronRight",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m10 8 4 4-4 4",
                    "key": "1wy4r4"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "navigation"
    },
    "navigation.collapse": {
        "id": "navigation.collapse",
        "lucide": "ChevronUp",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m8 14 4-4 4 4",
                    "key": "fy2ptz"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "navigation"
    },
    "utility.chevrons.up.down": {
        "id": "utility.chevrons.up.down",
        "lucide": "ChevronsUpDown",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "m7 15 5 5 5-5",
                    "key": "1hf1tw"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m7 9 5-5 5 5",
                    "key": "sgt6xg"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.chevrons.up.down"
        ],
        "category": "utility"
    },
    "utility.circle": {
        "id": "utility.circle",
        "lucide": "Circle",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "12",
                    "x2": "12",
                    "y1": "8",
                    "y2": "12",
                    "key": "1pkeuh"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "12",
                    "x2": "12.01",
                    "y1": "16",
                    "y2": "16",
                    "key": "4dfq90"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.circle"
        ],
        "category": "utility"
    },
    "calendar.time": {
        "id": "calendar.time",
        "lucide": "Clock",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 6v6l2-4",
                    "key": "miptyd"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "calendar"
    },
    "weather.cloud": {
        "id": "weather.cloud",
        "lucide": "Cloud",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 13v8l-4-4",
                    "key": "1f5nwf"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m12 21 4-4",
                    "key": "1lfcce"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",
                    "key": "ui1hmy"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "weather"
    },
    "utility.cloud.drizzle": {
        "id": "utility.cloud.drizzle",
        "lucide": "CloudDrizzle",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
                    "key": "1pljnt"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 19v1",
                    "key": "1dk2by"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 14v1",
                    "key": "84yxot"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16 19v1",
                    "key": "v220m7"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16 14v1",
                    "key": "g12gj6"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 21v1",
                    "key": "q8vafk"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 16v1",
                    "key": "1mx6rx"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.cloud.drizzle"
        ],
        "category": "utility"
    },
    "utility.cloud.fog": {
        "id": "utility.cloud.fog",
        "lucide": "CloudFog",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
                    "key": "1pljnt"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16 17H7",
                    "key": "pygtm1"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M17 21H9",
                    "key": "1u2q02"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.cloud.fog"
        ],
        "category": "utility"
    },
    "utility.cloud.lightning": {
        "id": "utility.cloud.lightning",
        "lucide": "CloudLightning",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",
                    "key": "1cez44"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m13 12-3 5h4l-3 5",
                    "key": "1t22er"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.cloud.lightning"
        ],
        "category": "utility"
    },
    "utility.cloud.moon": {
        "id": "utility.cloud.moon",
        "lucide": "CloudMoon",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M11 20v2",
                    "key": "174qtz"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36",
                    "key": "zwnc1e"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",
                    "key": "1qmrp3"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M7 19v2",
                    "key": "12npes"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.cloud.moon"
        ],
        "category": "utility"
    },
    "utility.cloud.rain": {
        "id": "utility.cloud.rain",
        "lucide": "CloudRain",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
                    "key": "1pljnt"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m9.2 22 3-7",
                    "key": "sb5f6j"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m9 13-3 7",
                    "key": "500co5"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m17 13-3 7",
                    "key": "8t2fiy"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.cloud.rain"
        ],
        "category": "utility"
    },
    "utility.cloud.snow": {
        "id": "utility.cloud.snow",
        "lucide": "CloudSnow",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
                    "key": "1pljnt"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 15h.01",
                    "key": "a7atzg"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 19h.01",
                    "key": "puxtts"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 17h.01",
                    "key": "p32p05"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 21h.01",
                    "key": "h35vbk"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16 15h.01",
                    "key": "rnfrdf"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16 19h.01",
                    "key": "1vcnzz"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.cloud.snow"
        ],
        "category": "utility"
    },
    "utility.cloud.sun": {
        "id": "utility.cloud.sun",
        "lucide": "CloudSun",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 2v2",
                    "key": "tus03m"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m4.93 4.93 1.41 1.41",
                    "key": "149t6j"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M20 12h2",
                    "key": "1q8mjw"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m19.07 4.93-1.41 1.41",
                    "key": "1shlcs"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M15.947 12.65a4 4 0 0 0-5.925-4.128",
                    "key": "dpwdj0"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",
                    "key": "1qmrp3"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M11 20v2",
                    "key": "174qtz"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M7 19v2",
                    "key": "12npes"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.cloud.sun"
        ],
        "category": "utility"
    },
    "utility.code": {
        "id": "utility.code",
        "lucide": "Code",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "m18 16 4-4-4-4",
                    "key": "1inbqp"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m6 8-4 4 4 4",
                    "key": "15zrgr"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m14.5 4-5 16",
                    "key": "e7oirm"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.code"
        ],
        "category": "utility"
    },
    "utility.cookie": {
        "id": "utility.cookie",
        "lucide": "Cookie",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",
                    "key": "laymnq"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8.5 8.5v.01",
                    "key": "ue8clq"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16 15.5v.01",
                    "key": "14dtrp"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 12v.01",
                    "key": "u5ubse"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M11 17v.01",
                    "key": "1hyl5a"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M7 14v.01",
                    "key": "uct60s"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.cookie"
        ],
        "category": "utility"
    },
    "utility.copy": {
        "id": "utility.copy",
        "lucide": "Copy",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "m12 15 2 2 4-4",
                    "key": "2c609p"
                }
            },
            {
                "type": "rect",
                "attrs": {
                    "width": "14",
                    "height": "14",
                    "x": "8",
                    "y": "8",
                    "rx": "2",
                    "ry": "2",
                    "key": "17jyea"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
                    "key": "zix9uf"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.copy"
        ],
        "category": "utility"
    },
    "utility.crown": {
        "id": "utility.crown",
        "lucide": "Crown",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
                    "key": "1vdc57"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M5 21h14",
                    "key": "11awu3"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.crown"
        ],
        "category": "utility"
    },
    "utility.database": {
        "id": "utility.database",
        "lucide": "Database",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "ellipse",
                "attrs": {
                    "cx": "12",
                    "cy": "5",
                    "rx": "9",
                    "ry": "3",
                    "key": "msslwz"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 12a9 3 0 0 0 5 2.69",
                    "key": "1ui2ym"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M21 9.3V5",
                    "key": "6k6cib"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 5v14a9 3 0 0 0 6.47 2.88",
                    "key": "i62tjy"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 12v4h4",
                    "key": "1bxaet"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",
                    "key": "1f4ei9"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.database"
        ],
        "category": "utility"
    },
    "utility.dna": {
        "id": "utility.dna",
        "lucide": "Dna",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8",
                    "key": "1bivrr"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m17 6-2.891-2.891",
                    "key": "xu6p2f"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M2 15c3.333-3 6.667-3 10-3",
                    "key": "nxix30"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m2 2 20 20",
                    "key": "1ooewy"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m20 9 .891.891",
                    "key": "3xwk7g"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1",
                    "key": "18cutr"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3.109 14.109 4 15",
                    "key": "q76aoh"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m6.5 12.5 1 1",
                    "key": "cs35ky"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m7 18 2.891 2.891",
                    "key": "1sisit"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16",
                    "key": "rlvei3"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.dna"
        ],
        "category": "utility"
    },
    "plant.watering": {
        "id": "plant.watering",
        "lucide": "Droplets",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
                    "key": "1ptgy4"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
                    "key": "1sl1rz"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "plant"
    },
    "utility.eye": {
        "id": "utility.eye",
        "lucide": "Eye",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "m15 18-.722-3.25",
                    "key": "1j64jw"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M2 8a10.645 10.645 0 0 0 20 0",
                    "key": "1e7gxb"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m20 15-1.726-2.05",
                    "key": "1cnuld"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m4 15 1.726-2.05",
                    "key": "1dsqqd"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m9 18 .722-3.25",
                    "key": "ypw2yx"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.eye"
        ],
        "category": "utility"
    },
    "utility.eye.off": {
        "id": "utility.eye.off",
        "lucide": "EyeOff",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
                    "key": "ct8e1f"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M14.084 14.158a3 3 0 0 1-4.242-4.242",
                    "key": "151rxh"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
                    "key": "13bj9a"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m2 2 20 20",
                    "key": "1ooewy"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.eye.off"
        ],
        "category": "utility"
    },
    "utility.filter": {
        "id": "utility.filter",
        "lucide": "Filter",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473",
                    "key": "ol2ft2"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m16.5 3.5 5 5",
                    "key": "15e6fa"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m21.5 3.5-5 5",
                    "key": "m0lwru"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.filter"
        ],
        "category": "utility"
    },
    "utility.flame": {
        "id": "utility.flame",
        "lucide": "Flame",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",
                    "key": "1ir223"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m5 22 14-4",
                    "key": "1brv4h"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m5 18 14 4",
                    "key": "lgyyje"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.flame"
        ],
        "category": "utility"
    },
    "utility.flask.conical": {
        "id": "utility.flask.conical",
        "lucide": "FlaskConical",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M10 2v2.343",
                    "key": "15t272"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M14 2v6.343",
                    "key": "sxr80q"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m2 2 20 20",
                    "key": "1ooewy"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563",
                    "key": "k0duyd"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M6.453 15H15",
                    "key": "1f0z33"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8.5 2h7",
                    "key": "csnxdl"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.flask.conical"
        ],
        "category": "utility"
    },
    "utility.flip.horizontal2": {
        "id": "utility.flip.horizontal2",
        "lucide": "FlipHorizontal2",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "m3 7 5 5-5 5V7",
                    "key": "couhi7"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m21 7-5 5 5 5V7",
                    "key": "6ouia7"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 20v2",
                    "key": "1lh1kg"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 14v2",
                    "key": "8jcxud"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 8v2",
                    "key": "1woqiv"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 2v2",
                    "key": "tus03m"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.flip.horizontal2"
        ],
        "category": "utility"
    },
    "utility.flower2": {
        "id": "utility.flower2",
        "lucide": "Flower2",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
                    "key": "3pnvol"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "8",
                    "r": "2",
                    "key": "1822b1"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 10v12",
                    "key": "6ubwww"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",
                    "key": "9hd38g"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",
                    "key": "ufn41s"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.flower2"
        ],
        "category": "utility"
    },
    "utility.globe": {
        "id": "utility.globe",
        "lucide": "Globe",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M21.54 15H17a2 2 0 0 0-2 2v4.54",
                    "key": "1djwo0"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
                    "key": "1tzkfa"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
                    "key": "14pb5j"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.globe"
        ],
        "category": "utility"
    },
    "utility.grid2x2": {
        "id": "utility.grid2x2",
        "lucide": "Grid2x2",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
                    "key": "11za1p"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m16 19 2 2 4-4",
                    "key": "1b14m6"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.grid2x2"
        ],
        "category": "utility"
    },
    "utility.hand": {
        "id": "utility.hand",
        "lucide": "Hand",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4",
                    "key": "edstyy"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",
                    "key": "19wdwo"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5",
                    "key": "1lugqo"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2",
                    "key": "1hbeus"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",
                    "key": "1etffm"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.hand"
        ],
        "category": "utility"
    },
    "utility.handshake": {
        "id": "utility.handshake",
        "lucide": "Handshake",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "m11 17 2 2a1 1 0 1 0 3-3",
                    "key": "efffak"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
                    "key": "9pr0kb"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m21 3 1 11h-2",
                    "key": "1tisrp"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",
                    "key": "1uvwmv"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 4h8",
                    "key": "1ep09j"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.handshake"
        ],
        "category": "utility"
    },
    "utility.heart": {
        "id": "utility.heart",
        "lucide": "Heart",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15",
                    "key": "idzbju"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z",
                    "key": "1su70f"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.heart"
        ],
        "category": "utility"
    },
    "utility.help.circle": {
        "id": "utility.help.circle",
        "lucide": "HelpCircle",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
                    "key": "1u773s"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 17h.01",
                    "key": "p32p05"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.help.circle"
        ],
        "category": "utility"
    },
    "utility.history": {
        "id": "utility.history",
        "lucide": "History",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
                    "key": "1357e3"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 3v5h5",
                    "key": "1xhq8a"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 7v5l4 2",
                    "key": "1fdv2h"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.history"
        ],
        "category": "utility"
    },
    "navigation.home": {
        "id": "navigation.home",
        "lucide": "Home",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
                    "key": "5wwlr5"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
                    "key": "r6nss1"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "navigation"
    },
    "utility.image": {
        "id": "utility.image",
        "lucide": "Image",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",
                    "key": "9csbqa"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m14 19 3 3v-5.5",
                    "key": "9ldu5r"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m17 22 3-3",
                    "key": "1nkfve"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "9",
                    "cy": "9",
                    "r": "2",
                    "key": "af1f0g"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.image"
        ],
        "category": "utility"
    },
    "utility.inbox": {
        "id": "utility.inbox",
        "lucide": "Inbox",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "polyline",
                "attrs": {
                    "points": "22 12 16 12 14 15 10 15 8 12 2 12",
                    "key": "o97t9d"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
                    "key": "oot6mr"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.inbox"
        ],
        "category": "utility"
    },
    "status.info": {
        "id": "status.info",
        "lucide": "Info",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 16v-4",
                    "key": "1dtifu"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 8h.01",
                    "key": "e9boi3"
                }
            }
        ],
        "accessibility": "status",
        "category": "status",
        "accessibilityLabelKey": "a11y.icons.status.info"
    },
    "utility.key": {
        "id": "utility.key",
        "lucide": "Key",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
                    "key": "1s6t7t"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "16.5",
                    "cy": "7.5",
                    "r": ".5",
                    "fill": "currentColor",
                    "key": "w0ekpg"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.key"
        ],
        "category": "utility"
    },
    "utility.layout.grid": {
        "id": "utility.layout.grid",
        "lucide": "LayoutGrid",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "rect",
                "attrs": {
                    "width": "7",
                    "height": "7",
                    "x": "3",
                    "y": "3",
                    "rx": "1",
                    "key": "1g98yp"
                }
            },
            {
                "type": "rect",
                "attrs": {
                    "width": "7",
                    "height": "7",
                    "x": "14",
                    "y": "3",
                    "rx": "1",
                    "key": "6d4xhi"
                }
            },
            {
                "type": "rect",
                "attrs": {
                    "width": "7",
                    "height": "7",
                    "x": "14",
                    "y": "14",
                    "rx": "1",
                    "key": "nxv5o0"
                }
            },
            {
                "type": "rect",
                "attrs": {
                    "width": "7",
                    "height": "7",
                    "x": "3",
                    "y": "14",
                    "rx": "1",
                    "key": "1bb6yr"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.layout.grid"
        ],
        "category": "utility"
    },
    "plant.growth": {
        "id": "plant.growth",
        "lucide": "Leaf",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",
                    "key": "1134nt"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M2 22 17 7",
                    "key": "1q7jp2"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "plant"
    },
    "utility.lightbulb": {
        "id": "utility.lightbulb",
        "lucide": "Lightbulb",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",
                    "key": "1fkcox"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m2 2 20 20",
                    "key": "1ooewy"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",
                    "key": "10m8kw"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M9 18h6",
                    "key": "x1upvd"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M10 22h4",
                    "key": "ceow96"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.lightbulb"
        ],
        "category": "utility"
    },
    "utility.link": {
        "id": "utility.link",
        "lucide": "Link",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M9 17H7A5 5 0 0 1 7 7",
                    "key": "10o201"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M15 7h2a5 5 0 0 1 4 8",
                    "key": "1d3206"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "8",
                    "x2": "12",
                    "y1": "12",
                    "y2": "12",
                    "key": "rvw6j4"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "2",
                    "x2": "22",
                    "y1": "2",
                    "y2": "22",
                    "key": "a6p6uj"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.link"
        ],
        "category": "utility"
    },
    "utility.list": {
        "id": "utility.list",
        "lucide": "List",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M21 5H11",
                    "key": "us1j55"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M21 12H11",
                    "key": "wd7e0v"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M21 19H11",
                    "key": "saa85w"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m7 8-4 4 4 4",
                    "key": "o5hrat"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.list"
        ],
        "category": "utility"
    },
    "utility.lock": {
        "id": "utility.lock",
        "lucide": "Lock",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "16",
                    "r": "1",
                    "key": "1au0dj"
                }
            },
            {
                "type": "rect",
                "attrs": {
                    "width": "18",
                    "height": "12",
                    "x": "3",
                    "y": "10",
                    "rx": "2",
                    "key": "l0tzu3"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M7 10V7a5 5 0 0 1 9.33-2.5",
                    "key": "car5b7"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.lock"
        ],
        "category": "utility"
    },
    "utility.log.out": {
        "id": "utility.log.out",
        "lucide": "LogOut",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "m16 17 5-5-5-5",
                    "key": "1bji2h"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M21 12H9",
                    "key": "dn1m92"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
                    "key": "1uf3rs"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.log.out"
        ],
        "category": "utility"
    },
    "utility.mail": {
        "id": "utility.mail",
        "lucide": "Mail",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",
                    "key": "e61zoh"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
                    "key": "1ocrg3"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",
                    "key": "7z9rxb"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M20 22v.01",
                    "key": "12bgn6"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.mail"
        ],
        "category": "utility"
    },
    "utility.mail.check": {
        "id": "utility.mail.check",
        "lucide": "MailCheck",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
                    "key": "12jkf8"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
                    "key": "1ocrg3"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m16 19 2 2 4-4",
                    "key": "1b14m6"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.mail.check"
        ],
        "category": "utility"
    },
    "location.pin": {
        "id": "location.pin",
        "lucide": "MapPin",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468",
                    "key": "1fahp3"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
                    "key": "1817ys"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "10",
                    "cy": "10",
                    "r": "3",
                    "key": "1ns7v1"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "location"
    },
    "utility.menu": {
        "id": "utility.menu",
        "lucide": "Menu",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "rect",
                "attrs": {
                    "width": "18",
                    "height": "18",
                    "x": "3",
                    "y": "3",
                    "rx": "2",
                    "key": "afitv7"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M7 8h10",
                    "key": "1jw688"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M7 12h10",
                    "key": "b7w52i"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M7 16h10",
                    "key": "wp8him"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.menu"
        ],
        "category": "utility"
    },
    "utility.message.circle": {
        "id": "utility.message.circle",
        "lucide": "MessageCircle",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
                    "key": "1sd12s"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
                    "key": "1u773s"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 17h.01",
                    "key": "p32p05"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.message.circle"
        ],
        "category": "utility"
    },
    "utility.message.square": {
        "id": "utility.message.square",
        "lucide": "MessageSquare",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
                    "key": "m0kn7k"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m9 11 2 2 4-4",
                    "key": "kz4plv"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.message.square"
        ],
        "category": "utility"
    },
    "utility.minus": {
        "id": "utility.minus",
        "lucide": "Minus",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 12h8",
                    "key": "1wcyev"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.minus"
        ],
        "category": "utility"
    },
    "utility.monitor.smartphone": {
        "id": "utility.monitor.smartphone",
        "lucide": "MonitorSmartphone",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",
                    "key": "10dyio"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M10 19v-3.96 3.15",
                    "key": "1irgej"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M7 19h5",
                    "key": "qswx4l"
                }
            },
            {
                "type": "rect",
                "attrs": {
                    "width": "6",
                    "height": "10",
                    "x": "16",
                    "y": "12",
                    "rx": "2",
                    "key": "1egngj"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.monitor.smartphone"
        ],
        "category": "utility"
    },
    "weather.moon": {
        "id": "weather.moon",
        "lucide": "Moon",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M18 5h4",
                    "key": "1lhgn2"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M20 3v4",
                    "key": "1olli1"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
                    "key": "kfwtm"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "weather"
    },
    "utility.moon.star": {
        "id": "utility.moon.star",
        "lucide": "MoonStar",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M18 5h4",
                    "key": "1lhgn2"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M20 3v4",
                    "key": "1olli1"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
                    "key": "kfwtm"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.moon.star"
        ],
        "category": "utility"
    },
    "utility.more.horizontal": {
        "id": "utility.more.horizontal",
        "lucide": "MoreHorizontal",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "1",
                    "key": "41hilf"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "19",
                    "cy": "12",
                    "r": "1",
                    "key": "1wjl8i"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "5",
                    "cy": "12",
                    "r": "1",
                    "key": "1pcz8c"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.more.horizontal"
        ],
        "category": "utility"
    },
    "utility.move": {
        "id": "utility.move",
        "lucide": "Move",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M5 3v16h16",
                    "key": "1mqmf9"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m5 19 6-6",
                    "key": "jh6hbb"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m2 6 3-3 3 3",
                    "key": "tkyvxa"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m18 16 3 3-3 3",
                    "key": "1d4glt"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.move"
        ],
        "category": "utility"
    },
    "utility.orbit": {
        "id": "utility.orbit",
        "lucide": "Orbit",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M20.341 6.484A10 10 0 0 1 10.266 21.85",
                    "key": "1enhxb"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3.659 17.516A10 10 0 0 1 13.74 2.152",
                    "key": "1crzgf"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "3",
                    "key": "1v7zrd"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "19",
                    "cy": "5",
                    "r": "2",
                    "key": "mhkx31"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "5",
                    "cy": "19",
                    "r": "2",
                    "key": "v8kfzx"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.orbit"
        ],
        "category": "utility"
    },
    "utility.panel.left": {
        "id": "utility.panel.left",
        "lucide": "PanelLeft",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "rect",
                "attrs": {
                    "width": "18",
                    "height": "18",
                    "x": "3",
                    "y": "3",
                    "rx": "2",
                    "key": "afitv7"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M9 3v18",
                    "key": "fh3hqa"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m16 15-3-3 3-3",
                    "key": "14y99z"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.panel.left"
        ],
        "category": "utility"
    },
    "utility.panel.left.close": {
        "id": "utility.panel.left.close",
        "lucide": "PanelLeftClose",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "rect",
                "attrs": {
                    "width": "18",
                    "height": "18",
                    "x": "3",
                    "y": "3",
                    "rx": "2",
                    "key": "afitv7"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M9 3v18",
                    "key": "fh3hqa"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m16 15-3-3 3-3",
                    "key": "14y99z"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.panel.left.close"
        ],
        "category": "utility"
    },
    "utility.panel.left.open": {
        "id": "utility.panel.left.open",
        "lucide": "PanelLeftOpen",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "rect",
                "attrs": {
                    "width": "18",
                    "height": "18",
                    "x": "3",
                    "y": "3",
                    "rx": "2",
                    "key": "afitv7"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M9 3v18",
                    "key": "fh3hqa"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m14 9 3 3-3 3",
                    "key": "8010ee"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.panel.left.open"
        ],
        "category": "utility"
    },
    "action.edit": {
        "id": "action.edit",
        "lucide": "Pencil",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M13 21h8",
                    "key": "1jsn5i"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m15 5 4 4",
                    "key": "1mk7zo"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
                    "key": "1a8usu"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "action"
    },
    "utility.pencil.line": {
        "id": "utility.pencil.line",
        "lucide": "PencilLine",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M13 21h8",
                    "key": "1jsn5i"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m15 5 4 4",
                    "key": "1mk7zo"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
                    "key": "1a8usu"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.pencil.line"
        ],
        "category": "utility"
    },
    "action.add": {
        "id": "action.add",
        "lucide": "Plus",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 12h8",
                    "key": "1wcyev"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 8v8",
                    "key": "napkw2"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "action"
    },
    "utility.plus.circle": {
        "id": "utility.plus.circle",
        "lucide": "PlusCircle",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 12h8",
                    "key": "1wcyev"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 8v8",
                    "key": "napkw2"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.plus.circle"
        ],
        "category": "utility"
    },
    "utility.quote": {
        "id": "utility.quote",
        "lucide": "Quote",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
                    "key": "rib7q0"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
                    "key": "1ymkrd"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.quote"
        ],
        "category": "utility"
    },
    "utility.refresh.cw": {
        "id": "utility.refresh.cw",
        "lucide": "RefreshCw",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",
                    "key": "1krf6h"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 16H3v5",
                    "key": "1cv678"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 12C3 9.51 4 7.26 5.64 5.64",
                    "key": "ruvoct"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",
                    "key": "19q130"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M21 12c0 1-.16 1.97-.47 2.87",
                    "key": "4w8emr"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M21 3v5h-5",
                    "key": "1q7to0"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M22 22 2 2",
                    "key": "1r8tn9"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.refresh.cw"
        ],
        "category": "utility"
    },
    "utility.rotate.ccw": {
        "id": "utility.rotate.ccw",
        "lucide": "RotateCcw",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 7v6",
                    "key": "lw1j43"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 9h2",
                    "key": "1lpap9"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8",
                    "key": "g2jlw"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 3v5h5",
                    "key": "1xhq8a"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "15",
                    "r": "2",
                    "key": "1vpstw"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.rotate.ccw"
        ],
        "category": "utility"
    },
    "utility.rotate.cw": {
        "id": "utility.rotate.cw",
        "lucide": "RotateCw",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
                    "key": "1p45f6"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M21 3v5h-5",
                    "key": "1q7to0"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.rotate.cw"
        ],
        "category": "utility"
    },
    "utility.save": {
        "id": "utility.save",
        "lucide": "Save",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M10 2v3a1 1 0 0 0 1 1h5",
                    "key": "1xspal"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6",
                    "key": "1ra60u"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M18 22H4a2 2 0 0 1-2-2V6",
                    "key": "pblm9e"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z",
                    "key": "1yve0x"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.save"
        ],
        "category": "utility"
    },
    "utility.scale": {
        "id": "utility.scale",
        "lucide": "Scale",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M5 7v11a1 1 0 0 0 1 1h11",
                    "key": "13dt1j"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M5.293 18.707 11 13",
                    "key": "ezgbsx"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "19",
                    "cy": "19",
                    "r": "2",
                    "key": "17f5cg"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "5",
                    "cy": "5",
                    "r": "2",
                    "key": "1gwv83"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.scale"
        ],
        "category": "utility"
    },
    "utility.scan.line": {
        "id": "utility.scan.line",
        "lucide": "ScanLine",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M3 7V5a2 2 0 0 1 2-2h2",
                    "key": "aa7l1z"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M17 3h2a2 2 0 0 1 2 2v2",
                    "key": "4qcy5o"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M21 17v2a2 2 0 0 1-2 2h-2",
                    "key": "6vwrx8"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M7 21H5a2 2 0 0 1-2-2v-2",
                    "key": "ioqczr"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M7 12h10",
                    "key": "b7w52i"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.scan.line"
        ],
        "category": "utility"
    },
    "plant.pruning": {
        "id": "plant.pruning",
        "lucide": "Scissors",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "line",
                "attrs": {
                    "x1": "5",
                    "y1": "3",
                    "x2": "19",
                    "y2": "3",
                    "key": "x74652"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "3",
                    "y1": "5",
                    "x2": "3",
                    "y2": "19",
                    "key": "31ivqu"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "21",
                    "y1": "5",
                    "x2": "21",
                    "y2": "19",
                    "key": "1am4cd"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "9",
                    "y1": "21",
                    "x2": "10",
                    "y2": "21",
                    "key": "sb02er"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "14",
                    "y1": "21",
                    "x2": "15",
                    "y2": "21",
                    "key": "1bvb1m"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M 3 5 A2 2 0 0 1 5 3",
                    "key": "dbypyf"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M 19 3 A2 2 0 0 1 21 5",
                    "key": "y6haui"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M 5 21 A2 2 0 0 1 3 19",
                    "key": "kb75wq"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M 21 19 A2 2 0 0 1 19 21",
                    "key": "1p3zbf"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "8.5",
                    "cy": "8.5",
                    "r": "1.5",
                    "key": "cn5opk"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "9.56066",
                    "y1": "9.56066",
                    "x2": "12",
                    "y2": "12",
                    "key": "mksg6j"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "17",
                    "y1": "17",
                    "x2": "14.82",
                    "y2": "14.82",
                    "key": "1lwi1d"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "8.5",
                    "cy": "15.5",
                    "r": "1.5",
                    "key": "12hfy1"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "9.56066",
                    "y1": "14.43934",
                    "x2": "17",
                    "y2": "7",
                    "key": "4jyfgs"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "plant"
    },
    "action.search": {
        "id": "action.search",
        "lucide": "Search",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "11",
                    "cy": "11",
                    "r": "8",
                    "key": "4ej97u"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m21 21-4.3-4.3",
                    "key": "1qie3q"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M11 7v4",
                    "key": "m2edmq"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M11 15h.01",
                    "key": "k85uqc"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "action"
    },
    "utility.settings": {
        "id": "utility.settings",
        "lucide": "Settings",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M14 17H5",
                    "key": "gfn3mx"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M19 7h-9",
                    "key": "6i9tg"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "17",
                    "cy": "17",
                    "r": "3",
                    "key": "18b49y"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "7",
                    "cy": "7",
                    "r": "3",
                    "key": "dfmy0x"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.settings"
        ],
        "category": "utility"
    },
    "utility.settings2": {
        "id": "utility.settings2",
        "lucide": "Settings2",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M14 17H5",
                    "key": "gfn3mx"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M19 7h-9",
                    "key": "6i9tg"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "17",
                    "cy": "17",
                    "r": "3",
                    "key": "18b49y"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "7",
                    "cy": "7",
                    "r": "3",
                    "key": "dfmy0x"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.settings2"
        ],
        "category": "utility"
    },
    "utility.share2": {
        "id": "utility.share2",
        "lucide": "Share2",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "18",
                    "cy": "5",
                    "r": "3",
                    "key": "gq8acd"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "6",
                    "cy": "12",
                    "r": "3",
                    "key": "w7nqdw"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "18",
                    "cy": "19",
                    "r": "3",
                    "key": "1xt0gg"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "8.59",
                    "x2": "15.42",
                    "y1": "13.51",
                    "y2": "17.49",
                    "key": "47mynk"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "15.41",
                    "x2": "8.59",
                    "y1": "6.51",
                    "y2": "10.49",
                    "key": "1n3mei"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.share2"
        ],
        "category": "utility"
    },
    "utility.shield": {
        "id": "utility.shield",
        "lucide": "Shield",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
                    "key": "oel41y"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",
                    "key": "mhlwft"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 17h.01",
                    "key": "p32p05"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.shield"
        ],
        "category": "utility"
    },
    "utility.shield.check": {
        "id": "utility.shield.check",
        "lucide": "ShieldCheck",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
                    "key": "oel41y"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m9 12 2 2 4-4",
                    "key": "dzmm74"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.shield.check"
        ],
        "category": "utility"
    },
    "utility.sliders.horizontal": {
        "id": "utility.sliders.horizontal",
        "lucide": "SlidersHorizontal",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M10 5H3",
                    "key": "1qgfaw"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 19H3",
                    "key": "yhmn1j"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M14 3v4",
                    "key": "1sua03"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16 17v4",
                    "key": "1q0r14"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M21 12h-9",
                    "key": "1o4lsq"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M21 19h-5",
                    "key": "1rlt1p"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M21 5h-7",
                    "key": "1oszz2"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 10v4",
                    "key": "tgpxqk"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 12H3",
                    "key": "a7s4jb"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.sliders.horizontal"
        ],
        "category": "utility"
    },
    "utility.smartphone": {
        "id": "utility.smartphone",
        "lucide": "Smartphone",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "rect",
                "attrs": {
                    "width": "7",
                    "height": "12",
                    "x": "2",
                    "y": "6",
                    "rx": "1",
                    "key": "5nje8w"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M13 8.32a7.43 7.43 0 0 1 0 7.36",
                    "key": "1g306n"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16.46 6.21a11.76 11.76 0 0 1 0 11.58",
                    "key": "uqvjvo"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",
                    "key": "ujntz3"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.smartphone"
        ],
        "category": "utility"
    },
    "utility.snowflake": {
        "id": "utility.snowflake",
        "lucide": "Snowflake",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "m10 20-1.25-2.5L6 18",
                    "key": "18frcb"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M10 4 8.75 6.5 6 6",
                    "key": "7mghy3"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m14 20 1.25-2.5L18 18",
                    "key": "1chtki"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m14 4 1.25 2.5L18 6",
                    "key": "1b4wsy"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m17 21-3-6h-4",
                    "key": "15hhxa"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m17 3-3 6 1.5 3",
                    "key": "11697g"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M2 12h6.5L10 9",
                    "key": "kv9z4n"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m20 10-1.5 2 1.5 2",
                    "key": "1swlpi"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M22 12h-6.5L14 15",
                    "key": "1mxi28"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m4 10 1.5 2L4 14",
                    "key": "k9enpj"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m7 21 3-6-1.5-3",
                    "key": "j8hb9u"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m7 3 3 6h4",
                    "key": "1otusx"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.snowflake"
        ],
        "category": "utility"
    },
    "utility.sparkles": {
        "id": "utility.sparkles",
        "lucide": "Sparkles",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
                    "key": "1s2grr"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M20 2v4",
                    "key": "1rf3ol"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M22 4h-4",
                    "key": "gwowj6"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "4",
                    "cy": "20",
                    "r": "2",
                    "key": "6kqj1y"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.sparkles"
        ],
        "category": "utility"
    },
    "plant.sprout": {
        "id": "plant.sprout",
        "lucide": "Sprout",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",
                    "key": "139s4v"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4",
                    "key": "1dlkgp"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M5 21h14",
                    "key": "11awu3"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "plant"
    },
    "utility.square": {
        "id": "utility.square",
        "lucide": "Square",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "rect",
                "attrs": {
                    "width": "18",
                    "height": "18",
                    "x": "3",
                    "y": "3",
                    "rx": "2",
                    "key": "afitv7"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M17 12h-2l-2 5-2-10-2 5H7",
                    "key": "15hlnc"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.square"
        ],
        "category": "utility"
    },
    "utility.square.pen": {
        "id": "utility.square.pen",
        "lucide": "SquarePen",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
                    "key": "1m0v6g"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
                    "key": "ohrbg2"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.square.pen"
        ],
        "category": "utility"
    },
    "utility.star": {
        "id": "utility.star",
        "lucide": "Star",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
                    "key": "1s2grr"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M20 2v4",
                    "key": "1rf3ol"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M22 4h-4",
                    "key": "gwowj6"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "4",
                    "cy": "20",
                    "r": "2",
                    "key": "6kqj1y"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.star"
        ],
        "category": "utility"
    },
    "utility.star.half": {
        "id": "utility.star.half",
        "lucide": "StarHalf",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",
                    "key": "2ksp49"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.star.half"
        ],
        "category": "utility"
    },
    "weather.sun": {
        "id": "weather.sun",
        "lucide": "Sun",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "4",
                    "key": "4exip2"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 4h.01",
                    "key": "1ujb9j"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M20 12h.01",
                    "key": "1ykeid"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 20h.01",
                    "key": "zekei9"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M4 12h.01",
                    "key": "158zrr"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M17.657 6.343h.01",
                    "key": "31pqzk"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M17.657 17.657h.01",
                    "key": "jehnf4"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M6.343 17.657h.01",
                    "key": "gdk6ow"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M6.343 6.343h.01",
                    "key": "1uurf0"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "weather"
    },
    "utility.sunrise": {
        "id": "utility.sunrise",
        "lucide": "Sunrise",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 2v8",
                    "key": "1q4o3n"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m4.93 10.93 1.41 1.41",
                    "key": "2a7f42"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M2 18h2",
                    "key": "j10viu"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M20 18h2",
                    "key": "wocana"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m19.07 10.93-1.41 1.41",
                    "key": "15zs5n"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M22 22H2",
                    "key": "19qnx5"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m8 6 4-4 4 4",
                    "key": "ybng9g"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16 18a4 4 0 0 0-8 0",
                    "key": "1lzouq"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.sunrise"
        ],
        "category": "utility"
    },
    "utility.sunset": {
        "id": "utility.sunset",
        "lucide": "Sunset",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 10V2",
                    "key": "16sf7g"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m4.93 10.93 1.41 1.41",
                    "key": "2a7f42"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M2 18h2",
                    "key": "j10viu"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M20 18h2",
                    "key": "wocana"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m19.07 10.93-1.41 1.41",
                    "key": "15zs5n"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M22 22H2",
                    "key": "19qnx5"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m16 6-4 4-4-4",
                    "key": "6wukr"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16 18a4 4 0 0 0-8 0",
                    "key": "1lzouq"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.sunset"
        ],
        "category": "utility"
    },
    "utility.swords": {
        "id": "utility.swords",
        "lucide": "Swords",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "polyline",
                "attrs": {
                    "points": "14.5 17.5 3 6 3 3 6 3 17.5 14.5",
                    "key": "1hfsw2"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "13",
                    "x2": "19",
                    "y1": "19",
                    "y2": "13",
                    "key": "1vrmhu"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "16",
                    "x2": "20",
                    "y1": "16",
                    "y2": "20",
                    "key": "1bron3"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "19",
                    "x2": "21",
                    "y1": "21",
                    "y2": "19",
                    "key": "13pww6"
                }
            },
            {
                "type": "polyline",
                "attrs": {
                    "points": "14.5 6.5 18 3 21 3 21 6 17.5 9.5",
                    "key": "hbey2j"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "5",
                    "x2": "9",
                    "y1": "14",
                    "y2": "18",
                    "key": "1hf58s"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "7",
                    "x2": "4",
                    "y1": "17",
                    "y2": "20",
                    "key": "pidxm4"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "3",
                    "x2": "5",
                    "y1": "19",
                    "y2": "21",
                    "key": "1pehsh"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.swords"
        ],
        "category": "utility"
    },
    "utility.tag": {
        "id": "utility.tag",
        "lucide": "Tag",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
                    "key": "vktsd0"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "7.5",
                    "cy": "7.5",
                    "r": ".5",
                    "fill": "currentColor",
                    "key": "kqv944"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.tag"
        ],
        "category": "utility"
    },
    "utility.thermometer": {
        "id": "utility.thermometer",
        "lucide": "Thermometer",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "m10 20-1.25-2.5L6 18",
                    "key": "18frcb"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M10 4 8.75 6.5 6 6",
                    "key": "7mghy3"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M10.585 15H10",
                    "key": "4nqulp"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M2 12h6.5L10 9",
                    "key": "kv9z4n"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z",
                    "key": "yu0u2z"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m4 10 1.5 2L4 14",
                    "key": "k9enpj"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m7 21 3-6-1.5-3",
                    "key": "j8hb9u"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m7 3 3 6h2",
                    "key": "1bbqgq"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.thermometer"
        ],
        "category": "utility"
    },
    "utility.thumbs.down": {
        "id": "utility.thumbs.down",
        "lucide": "ThumbsDown",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
                    "key": "m61m77"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M17 14V2",
                    "key": "8ymqnk"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.thumbs.down"
        ],
        "category": "utility"
    },
    "utility.thumbs.up": {
        "id": "utility.thumbs.up",
        "lucide": "ThumbsUp",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
                    "key": "emmmcr"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M7 10v12",
                    "key": "1qc93n"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.thumbs.up"
        ],
        "category": "utility"
    },
    "action.delete": {
        "id": "action.delete",
        "lucide": "Trash2",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M10 11v6",
                    "key": "nco0om"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M14 11v6",
                    "key": "outv1u"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
                    "key": "miytrc"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 6h18",
                    "key": "d0wm0j"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
                    "key": "e791ji"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "action"
    },
    "utility.trees": {
        "id": "utility.trees",
        "lucide": "Trees",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",
                    "key": "1l6gj6"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M7 16v6",
                    "key": "1a82de"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M13 19v3",
                    "key": "13sx9i"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
                    "key": "1sj9kv"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.trees"
        ],
        "category": "utility"
    },
    "utility.trending.down": {
        "id": "utility.trending.down",
        "lucide": "TrendingDown",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M16 17h6v-6",
                    "key": "t6n2it"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m22 17-8.5-8.5-5 5L2 7",
                    "key": "x473p"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.trending.down"
        ],
        "category": "utility"
    },
    "utility.trending.up": {
        "id": "utility.trending.up",
        "lucide": "TrendingUp",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M14.828 14.828 21 21",
                    "key": "ar5fw7"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M21 16v5h-5",
                    "key": "1ck2sf"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m21 3-9 9-4-4-6 6",
                    "key": "1h02xo"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M21 8V3h-5",
                    "key": "1qoq8a"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.trending.up"
        ],
        "category": "utility"
    },
    "status.warning.alt": {
        "id": "status.warning.alt",
        "lucide": "TriangleAlert",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
                    "key": "wmoenq"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 9v4",
                    "key": "juzpu7"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 17h.01",
                    "key": "p32p05"
                }
            }
        ],
        "accessibility": "status",
        "category": "status",
        "accessibilityLabelKey": "a11y.icons.status.warning"
    },
    "utility.trophy": {
        "id": "utility.trophy",
        "lucide": "Trophy",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
                    "key": "1n3hpd"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
                    "key": "rfe1zi"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M18 9h1.5a1 1 0 0 0 0-5H18",
                    "key": "7xy6bh"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M4 22h16",
                    "key": "57wxv0"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
                    "key": "1mhfuq"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M6 9H4.5a1 1 0 0 1 0-5H6",
                    "key": "tex48p"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.trophy"
        ],
        "category": "utility"
    },
    "utility.undo2": {
        "id": "utility.undo2",
        "lucide": "Undo2",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M9 14 4 9l5-5",
                    "key": "102s5s"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
                    "key": "f3b9sd"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.undo2"
        ],
        "category": "utility"
    },
    "utility.upload": {
        "id": "utility.upload",
        "lucide": "Upload",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 13v8",
                    "key": "1l5pq0"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
                    "key": "1pljnt"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m8 17 4-4 4 4",
                    "key": "1quai1"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.upload"
        ],
        "category": "utility"
    },
    "utility.upload.cloud": {
        "id": "utility.upload.cloud",
        "lucide": "UploadCloud",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 13v8",
                    "key": "1l5pq0"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
                    "key": "1pljnt"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m8 17 4-4 4 4",
                    "key": "1quai1"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.upload.cloud"
        ],
        "category": "utility"
    },
    "account.user": {
        "id": "account.user",
        "lucide": "User",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M18 20a6 6 0 0 0-12 0",
                    "key": "1qehca"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "10",
                    "r": "4",
                    "key": "1h16sb"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "account"
    },
    "utility.user.check": {
        "id": "utility.user.check",
        "lucide": "UserCheck",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M2 21a8 8 0 0 1 13.292-6",
                    "key": "bjp14o"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "10",
                    "cy": "8",
                    "r": "5",
                    "key": "o932ke"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m16 19 2 2 4-4",
                    "key": "1b14m6"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.user.check"
        ],
        "category": "utility"
    },
    "utility.user.minus": {
        "id": "utility.user.minus",
        "lucide": "UserMinus",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M2 21a8 8 0 0 1 13.292-6",
                    "key": "bjp14o"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "10",
                    "cy": "8",
                    "r": "5",
                    "key": "o932ke"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M22 19h-6",
                    "key": "vcuq98"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.user.minus"
        ],
        "category": "utility"
    },
    "utility.user.plus": {
        "id": "utility.user.plus",
        "lucide": "UserPlus",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M2 21a8 8 0 0 1 13.292-6",
                    "key": "bjp14o"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "10",
                    "cy": "8",
                    "r": "5",
                    "key": "o932ke"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M19 16v6",
                    "key": "tddt3s"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M22 19h-6",
                    "key": "vcuq98"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.user.plus"
        ],
        "category": "utility"
    },
    "utility.user.x": {
        "id": "utility.user.x",
        "lucide": "UserX",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M2 21a8 8 0 0 1 11.873-7",
                    "key": "74fkxq"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "10",
                    "cy": "8",
                    "r": "5",
                    "key": "o932ke"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m17 17 5 5",
                    "key": "p7ous7"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m22 17-5 5",
                    "key": "gqnmv0"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.user.x"
        ],
        "category": "utility"
    },
    "account.users": {
        "id": "account.users",
        "lucide": "Users",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M18 21a8 8 0 0 0-16 0",
                    "key": "3ypg7q"
                }
            },
            {
                "type": "circle",
                "attrs": {
                    "cx": "10",
                    "cy": "8",
                    "r": "5",
                    "key": "o932ke"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",
                    "key": "10s06x"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "account"
    },
    "utility.wind": {
        "id": "utility.wind",
        "lucide": "Wind",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M10 2v8",
                    "key": "d4bbey"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12.8 21.6A2 2 0 1 0 14 18H2",
                    "key": "19kp1d"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M17.5 10a2.5 2.5 0 1 1 2 4H2",
                    "key": "19kpjc"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m6 6 4 4 4-4",
                    "key": "k13n16"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.wind"
        ],
        "category": "utility"
    },
    "navigation.close": {
        "id": "navigation.close",
        "lucide": "X",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m15 9-6 6",
                    "key": "1uzhvr"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m9 9 6 6",
                    "key": "z0biqf"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "navigation"
    },
    "utility.x.circle": {
        "id": "utility.x.circle",
        "lucide": "XCircle",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "12",
                    "cy": "12",
                    "r": "10",
                    "key": "1mglay"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m15 9-6 6",
                    "key": "1uzhvr"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m9 9 6 6",
                    "key": "z0biqf"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.x.circle"
        ],
        "category": "utility"
    },
    "utility.zap": {
        "id": "utility.zap",
        "lucide": "Zap",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",
                    "key": "193nxd"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",
                    "key": "27a7lr"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",
                    "key": "1e0qe9"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "m2 2 20 20",
                    "key": "1ooewy"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.zap"
        ],
        "category": "utility"
    },
    "utility.zoom.in": {
        "id": "utility.zoom.in",
        "lucide": "ZoomIn",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "11",
                    "cy": "11",
                    "r": "8",
                    "key": "4ej97u"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "21",
                    "x2": "16.65",
                    "y1": "21",
                    "y2": "16.65",
                    "key": "13gj7c"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "11",
                    "x2": "11",
                    "y1": "8",
                    "y2": "14",
                    "key": "1vmskp"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "8",
                    "x2": "14",
                    "y1": "11",
                    "y2": "11",
                    "key": "durymu"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.zoom.in"
        ],
        "category": "utility"
    },
    "utility.zoom.out": {
        "id": "utility.zoom.out",
        "lucide": "ZoomOut",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "circle",
                "attrs": {
                    "cx": "11",
                    "cy": "11",
                    "r": "8",
                    "key": "4ej97u"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "21",
                    "x2": "16.65",
                    "y1": "21",
                    "y2": "16.65",
                    "key": "13gj7c"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "8",
                    "x2": "14",
                    "y1": "11",
                    "y2": "11",
                    "key": "durymu"
                }
            }
        ],
        "accessibility": "decorative",
        "aliases": [
            "lucide.zoom.out"
        ],
        "category": "utility"
    },
    "status.loading": {
        "id": "status.loading",
        "lucide": "Loader2",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M21 12a9 9 0 1 1-6.219-8.56"
                }
            }
        ],
        "accessibility": "status",
        "category": "status",
        "accessibilityLabelKey": "a11y.icons.status.loading"
    },
    "plant.seedling": {
        "id": "plant.seedling",
        "custom": true,
        "source": "seedling-sprout.svg",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 21V10"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M7 10c0-4 2.5-6 5-6s5 2 5 6"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M7 14c0 0 1-3 5-3"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "plant"
    },
    "plant.watering.can": {
        "id": "plant.watering.can",
        "custom": true,
        "source": "watering-can.svg",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M3 18a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H3z"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M15 8h2a2 2 0 0 1 2 2v0"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M3 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "17",
                    "y1": "16",
                    "x2": "21",
                    "y2": "12"
                }
            },
            {
                "type": "line",
                "attrs": {
                    "x1": "17",
                    "y1": "12",
                    "x2": "21",
                    "y2": "16"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "plant"
    },
    "plant.wilting": {
        "id": "plant.wilting",
        "custom": true,
        "source": "wilting.svg",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 21V8"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 8C12 8 8 6 7 3c3 0 5 1 5 5z"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M12 8C12 8 16 6 17 3c-3 0-5 1-5 5z"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M9 14c-1 1-3 1-4 0"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M15 14c1 1 3 1 4 0"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "plant"
    },
    "status.streak": {
        "id": "status.streak",
        "custom": true,
        "source": "streak-flame.svg",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M8.5 14.5A2.5 2.5 0 0 0 11 17c1.38 0 2.5-1.12 2.5-2.5 0-1.5-1.5-2.5-1.5-4.5 0 0 2 1 2 3.5A4 4 0 0 0 18 9.5c-2 0-3-1-4-3-1 2-4 2-5 6A4 4 0 0 0 8.5 14.5z"
                }
            }
        ],
        "accessibility": "status",
        "category": "status",
        "accessibilityLabelKey": "a11y.icons.status.streak"
    },
    "plant.thriving": {
        "id": "plant.thriving",
        "custom": true,
        "source": "thriving.svg",
        "viewBox": "0 0 24 24",
        "nodes": [
            {
                "type": "path",
                "attrs": {
                    "d": "M12 21V12"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M5 12C5 7 8 4 12 4s7 3 7 8"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M9 16c0 0 1.5-3 3-3s3 3 3 3"
                }
            },
            {
                "type": "path",
                "attrs": {
                    "d": "M7 9c0 0 2-1 5-1"
                }
            }
        ],
        "accessibility": "decorative",
        "category": "plant"
    }
};
export const PLANTIM_ICON_NAMES = Object.freeze(Object.keys(iconRegistry));
export const isPlantimIconName = (value) => Object.prototype.hasOwnProperty.call(iconRegistry, value);
export const PlantimIcon = defineComponent({
    name: "PlantimIcon",
    props: { name: { type: String, required: true }, size: { type: [Number, String], default: "1em" }, strokeWidth: { type: Number, default: 2 }, title: String, decorative: Boolean },
    setup(props, { attrs }) {
        return () => {
            const icon = iconRegistry[props.name];
            if (!icon)
                throw new Error("[PlantimIcons] Unknown semantic icon: " + String(props.name));
            const labelled = Boolean(props.title);
            const decorative = props.decorative || !labelled;
            const children = icon.nodes.map((node, index) => h(node.type, { ...node.attrs, key: index }));
            return h("svg", { ...attrs, width: props.size, height: props.size, viewBox: icon.viewBox, fill: "none", stroke: "currentColor", "stroke-width": props.strokeWidth, "stroke-linecap": "round", "stroke-linejoin": "round", role: decorative ? undefined : "img", "aria-hidden": decorative ? "true" : undefined, "aria-label": decorative ? undefined : props.title }, [!decorative && props.title ? h("title", props.title) : null, ...children]);
        };
    }
});
const Activity = defineComponent({ name: "Activity", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.activity" }); } });
const AlertCircle = defineComponent({ name: "AlertCircle", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "status.error" }); } });
const AlertTriangle = defineComponent({ name: "AlertTriangle", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "status.warning" }); } });
const AlignJustify = defineComponent({ name: "AlignJustify", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.align.justify" }); } });
const ArrowDown = defineComponent({ name: "ArrowDown", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.arrow.down" }); } });
const ArrowDownToDot = defineComponent({ name: "ArrowDownToDot", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.arrow.down.to.dot" }); } });
const ArrowLeft = defineComponent({ name: "ArrowLeft", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "navigation.back" }); } });
const ArrowRight = defineComponent({ name: "ArrowRight", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "navigation.forward" }); } });
const ArrowUp = defineComponent({ name: "ArrowUp", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.arrow.up" }); } });
const ArrowUpFromDot = defineComponent({ name: "ArrowUpFromDot", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.arrow.up.from.dot" }); } });
const Award = defineComponent({ name: "Award", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.award" }); } });
const Baby = defineComponent({ name: "Baby", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.baby" }); } });
const BadgeCheck = defineComponent({ name: "BadgeCheck", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.badge.check" }); } });
const BarChart3 = defineComponent({ name: "BarChart3", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.bar.chart3" }); } });
const Bell = defineComponent({ name: "Bell", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.bell" }); } });
const BellOff = defineComponent({ name: "BellOff", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.bell.off" }); } });
const Bot = defineComponent({ name: "Bot", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.bot" }); } });
const Brain = defineComponent({ name: "Brain", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.brain" }); } });
const Bug = defineComponent({ name: "Bug", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.bug" }); } });
const Cake = defineComponent({ name: "Cake", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.cake" }); } });
const Calendar = defineComponent({ name: "Calendar", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "calendar.date" }); } });
const CalendarClock = defineComponent({ name: "CalendarClock", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.calendar.clock" }); } });
const CalendarDays = defineComponent({ name: "CalendarDays", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.calendar.days" }); } });
const Camera = defineComponent({ name: "Camera", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.camera" }); } });
const Check = defineComponent({ name: "Check", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "status.success" }); } });
const CheckCheck = defineComponent({ name: "CheckCheck", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.check.check" }); } });
const CheckCircle = defineComponent({ name: "CheckCircle", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "status.success.circle" }); } });
const CheckCircle2 = defineComponent({ name: "CheckCircle2", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "status.success.circle.alt" }); } });
const ChevronDown = defineComponent({ name: "ChevronDown", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "navigation.expand" }); } });
const ChevronLeft = defineComponent({ name: "ChevronLeft", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "navigation.previous" }); } });
const ChevronRight = defineComponent({ name: "ChevronRight", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "navigation.next" }); } });
const ChevronUp = defineComponent({ name: "ChevronUp", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "navigation.collapse" }); } });
const ChevronsUpDown = defineComponent({ name: "ChevronsUpDown", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.chevrons.up.down" }); } });
const Circle = defineComponent({ name: "Circle", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.circle" }); } });
const Clock = defineComponent({ name: "Clock", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "calendar.time" }); } });
const Cloud = defineComponent({ name: "Cloud", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "weather.cloud" }); } });
const CloudDrizzle = defineComponent({ name: "CloudDrizzle", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.cloud.drizzle" }); } });
const CloudFog = defineComponent({ name: "CloudFog", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.cloud.fog" }); } });
const CloudLightning = defineComponent({ name: "CloudLightning", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.cloud.lightning" }); } });
const CloudMoon = defineComponent({ name: "CloudMoon", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.cloud.moon" }); } });
const CloudRain = defineComponent({ name: "CloudRain", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.cloud.rain" }); } });
const CloudSnow = defineComponent({ name: "CloudSnow", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.cloud.snow" }); } });
const CloudSun = defineComponent({ name: "CloudSun", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.cloud.sun" }); } });
const Code = defineComponent({ name: "Code", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.code" }); } });
const Cookie = defineComponent({ name: "Cookie", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.cookie" }); } });
const Copy = defineComponent({ name: "Copy", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.copy" }); } });
const Crown = defineComponent({ name: "Crown", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.crown" }); } });
const Database = defineComponent({ name: "Database", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.database" }); } });
const Dna = defineComponent({ name: "Dna", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.dna" }); } });
const Droplets = defineComponent({ name: "Droplets", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "plant.watering" }); } });
const Eye = defineComponent({ name: "Eye", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.eye" }); } });
const EyeOff = defineComponent({ name: "EyeOff", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.eye.off" }); } });
const Filter = defineComponent({ name: "Filter", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.filter" }); } });
const Flame = defineComponent({ name: "Flame", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.flame" }); } });
const FlaskConical = defineComponent({ name: "FlaskConical", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.flask.conical" }); } });
const FlipHorizontal2 = defineComponent({ name: "FlipHorizontal2", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.flip.horizontal2" }); } });
const Flower2 = defineComponent({ name: "Flower2", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.flower2" }); } });
const Globe = defineComponent({ name: "Globe", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.globe" }); } });
const Grid2x2 = defineComponent({ name: "Grid2x2", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.grid2x2" }); } });
const Hand = defineComponent({ name: "Hand", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.hand" }); } });
const Handshake = defineComponent({ name: "Handshake", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.handshake" }); } });
const Heart = defineComponent({ name: "Heart", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.heart" }); } });
const HelpCircle = defineComponent({ name: "HelpCircle", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.help.circle" }); } });
const History = defineComponent({ name: "History", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.history" }); } });
const Home = defineComponent({ name: "Home", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "navigation.home" }); } });
const Image = defineComponent({ name: "Image", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.image" }); } });
const Inbox = defineComponent({ name: "Inbox", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.inbox" }); } });
const Info = defineComponent({ name: "Info", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "status.info" }); } });
const Key = defineComponent({ name: "Key", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.key" }); } });
const LayoutGrid = defineComponent({ name: "LayoutGrid", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.layout.grid" }); } });
const Leaf = defineComponent({ name: "Leaf", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "plant.growth" }); } });
const Lightbulb = defineComponent({ name: "Lightbulb", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.lightbulb" }); } });
const Link = defineComponent({ name: "Link", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.link" }); } });
const List = defineComponent({ name: "List", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.list" }); } });
const Lock = defineComponent({ name: "Lock", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.lock" }); } });
const LogOut = defineComponent({ name: "LogOut", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.log.out" }); } });
const Mail = defineComponent({ name: "Mail", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.mail" }); } });
const MailCheck = defineComponent({ name: "MailCheck", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.mail.check" }); } });
const MapPin = defineComponent({ name: "MapPin", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "location.pin" }); } });
const Menu = defineComponent({ name: "Menu", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.menu" }); } });
const MessageCircle = defineComponent({ name: "MessageCircle", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.message.circle" }); } });
const MessageSquare = defineComponent({ name: "MessageSquare", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.message.square" }); } });
const Minus = defineComponent({ name: "Minus", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.minus" }); } });
const MonitorSmartphone = defineComponent({ name: "MonitorSmartphone", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.monitor.smartphone" }); } });
const Moon = defineComponent({ name: "Moon", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "weather.moon" }); } });
const MoonStar = defineComponent({ name: "MoonStar", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.moon.star" }); } });
const MoreHorizontal = defineComponent({ name: "MoreHorizontal", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.more.horizontal" }); } });
const Move = defineComponent({ name: "Move", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.move" }); } });
const Orbit = defineComponent({ name: "Orbit", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.orbit" }); } });
const PanelLeft = defineComponent({ name: "PanelLeft", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.panel.left" }); } });
const PanelLeftClose = defineComponent({ name: "PanelLeftClose", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.panel.left.close" }); } });
const PanelLeftOpen = defineComponent({ name: "PanelLeftOpen", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.panel.left.open" }); } });
const Pencil = defineComponent({ name: "Pencil", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "action.edit" }); } });
const PencilLine = defineComponent({ name: "PencilLine", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.pencil.line" }); } });
const Plus = defineComponent({ name: "Plus", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "action.add" }); } });
const PlusCircle = defineComponent({ name: "PlusCircle", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.plus.circle" }); } });
const Quote = defineComponent({ name: "Quote", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.quote" }); } });
const RefreshCw = defineComponent({ name: "RefreshCw", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.refresh.cw" }); } });
const RotateCcw = defineComponent({ name: "RotateCcw", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.rotate.ccw" }); } });
const RotateCw = defineComponent({ name: "RotateCw", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.rotate.cw" }); } });
const Save = defineComponent({ name: "Save", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.save" }); } });
const Scale = defineComponent({ name: "Scale", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.scale" }); } });
const ScanLine = defineComponent({ name: "ScanLine", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.scan.line" }); } });
const Scissors = defineComponent({ name: "Scissors", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "plant.pruning" }); } });
const Search = defineComponent({ name: "Search", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "action.search" }); } });
const Settings = defineComponent({ name: "Settings", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.settings" }); } });
const Settings2 = defineComponent({ name: "Settings2", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.settings2" }); } });
const Share2 = defineComponent({ name: "Share2", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.share2" }); } });
const Shield = defineComponent({ name: "Shield", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.shield" }); } });
const ShieldCheck = defineComponent({ name: "ShieldCheck", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.shield.check" }); } });
const SlidersHorizontal = defineComponent({ name: "SlidersHorizontal", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.sliders.horizontal" }); } });
const Smartphone = defineComponent({ name: "Smartphone", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.smartphone" }); } });
const Snowflake = defineComponent({ name: "Snowflake", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.snowflake" }); } });
const Sparkles = defineComponent({ name: "Sparkles", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.sparkles" }); } });
const Sprout = defineComponent({ name: "Sprout", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "plant.sprout" }); } });
const Square = defineComponent({ name: "Square", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.square" }); } });
const SquarePen = defineComponent({ name: "SquarePen", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.square.pen" }); } });
const Star = defineComponent({ name: "Star", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.star" }); } });
const StarHalf = defineComponent({ name: "StarHalf", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.star.half" }); } });
const Sun = defineComponent({ name: "Sun", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "weather.sun" }); } });
const Sunrise = defineComponent({ name: "Sunrise", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.sunrise" }); } });
const Sunset = defineComponent({ name: "Sunset", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.sunset" }); } });
const Swords = defineComponent({ name: "Swords", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.swords" }); } });
const Tag = defineComponent({ name: "Tag", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.tag" }); } });
const Thermometer = defineComponent({ name: "Thermometer", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.thermometer" }); } });
const ThumbsDown = defineComponent({ name: "ThumbsDown", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.thumbs.down" }); } });
const ThumbsUp = defineComponent({ name: "ThumbsUp", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.thumbs.up" }); } });
const Trash2 = defineComponent({ name: "Trash2", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "action.delete" }); } });
const Trees = defineComponent({ name: "Trees", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.trees" }); } });
const TrendingDown = defineComponent({ name: "TrendingDown", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.trending.down" }); } });
const TrendingUp = defineComponent({ name: "TrendingUp", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.trending.up" }); } });
const TriangleAlert = defineComponent({ name: "TriangleAlert", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "status.warning.alt" }); } });
const Trophy = defineComponent({ name: "Trophy", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.trophy" }); } });
const Undo2 = defineComponent({ name: "Undo2", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.undo2" }); } });
const Upload = defineComponent({ name: "Upload", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.upload" }); } });
const UploadCloud = defineComponent({ name: "UploadCloud", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.upload.cloud" }); } });
const User = defineComponent({ name: "User", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "account.user" }); } });
const UserCheck = defineComponent({ name: "UserCheck", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.user.check" }); } });
const UserMinus = defineComponent({ name: "UserMinus", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.user.minus" }); } });
const UserPlus = defineComponent({ name: "UserPlus", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.user.plus" }); } });
const UserX = defineComponent({ name: "UserX", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.user.x" }); } });
const Users = defineComponent({ name: "Users", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "account.users" }); } });
const Wind = defineComponent({ name: "Wind", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.wind" }); } });
const X = defineComponent({ name: "X", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "navigation.close" }); } });
const XCircle = defineComponent({ name: "XCircle", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.x.circle" }); } });
const Zap = defineComponent({ name: "Zap", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.zap" }); } });
const ZoomIn = defineComponent({ name: "ZoomIn", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.zoom.in" }); } });
const ZoomOut = defineComponent({ name: "ZoomOut", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "utility.zoom.out" }); } });
const Loader2 = defineComponent({ name: "Loader2", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "status.loading" }); } });
const CustomSeedlingSprout = defineComponent({ name: "CustomSeedlingSprout", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "plant.seedling" }); } });
const CustomWateringCan = defineComponent({ name: "CustomWateringCan", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "plant.watering.can" }); } });
const CustomWilting = defineComponent({ name: "CustomWilting", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "plant.wilting" }); } });
const CustomStreakFlame = defineComponent({ name: "CustomStreakFlame", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "status.streak" }); } });
const CustomThriving = defineComponent({ name: "CustomThriving", inheritAttrs: false, setup(_, ctx) { return () => h(PlantimIcon, { ...ctx.attrs, name: "plant.thriving" }); } });
