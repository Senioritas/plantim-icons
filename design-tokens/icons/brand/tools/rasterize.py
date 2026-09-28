"""Rasterize one optical grade of the Plantim logo to a 1-bit PBM for potrace.

Usage: python3 rasterize.py <micro|base|display> <out.pbm>

The logo's hairline gaps (strand separations, leaf veins) are 0.2-0.4 grid
units wide. Below 48 px they fall under one device pixel and smear into mush,
so the small grades are derived from the real artwork instead of redrawn:

1. `close`     morphological closing (grid units) fills gaps narrower than
               roughly 2 x close inside the bowl and trunk.
2. `keepOrig`  polygons (grid units) where the untouched artwork wins, so the
               roots and twigs keep their real shape at every size.
3. `keepDilate` thickens those preserved parts for the micro grade.
4. `fillHoles` drops the fragments the closing left behind.
5. `cut`       re-cuts the logo's main gaps as tapered cubic strokes, wide
               enough to survive at the grade's sizes. Each entry is a cubic
               bezier on the 24-grid plus [start, mid, end] widths.

Requires Pillow. Grades live in plantim-grades.json.
"""

import json
import math
import sys
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFilter

HERE = Path(__file__).parent
N = 1280  # working raster; the 640 px logo is ~21.65 px per grid unit, so 43.3 here
PX_PER_UNIT = 43.3
# grid = x640 * S + O  (the logo's bounding box fitted to y 2..22, centred on x 12)
S, OX, OY = 0.04608, -2.783, -1.601


def to_px(g):
    return ((g[0] - OX) / S * 2, (g[1] - OY) / S * 2)


def taper(c, w, steps=60):
    left, right = [], []
    for i in range(steps + 1):
        t = i / steps
        u = 1 - t
        p = [u**3 * c[0][k] + 3 * u * u * t * c[1][k] + 3 * u * t * t * c[2][k] + t**3 * c[3][k] for k in (0, 1)]
        d = [3 * u * u * (c[1][k] - c[0][k]) + 6 * u * t * (c[2][k] - c[1][k]) + 3 * t * t * (c[3][k] - c[2][k]) for k in (0, 1)]
        m = math.hypot(*d) or 1
        half = (w[0] + (w[1] - w[0]) * t / 0.5 if t < 0.5 else w[1] + (w[2] - w[1]) * (t - 0.5) / 0.5) / 2
        nx, ny = -d[1] / m, d[0] / m
        left.append(to_px((p[0] + nx * half, p[1] + ny * half)))
        right.append(to_px((p[0] - nx * half, p[1] - ny * half)))
    return left + right[::-1]


def main(grade, out):
    cfg = json.loads((HERE / "plantim-grades.json").read_text())[grade]
    logo = Image.open(HERE / "plantim-logo.png").convert("RGBA")
    ground = Image.new("RGBA", logo.size, "white")
    ground.alpha_composite(logo)
    # green = 255
    g = ground.convert("L").resize((N, N), Image.LANCZOS).point(lambda v: 255 if v < 170 else 0)

    orig = g.copy()
    for _ in range(round(cfg.get("keepDilate", 0) * PX_PER_UNIT)):
        orig = orig.filter(ImageFilter.MaxFilter(3))

    n = round(cfg["close"] * PX_PER_UNIT)
    for _ in range(n):
        g = g.filter(ImageFilter.MaxFilter(3))
    for _ in range(n):
        g = g.filter(ImageFilter.MinFilter(3))
    g = g.point(lambda v: 255 if v > 127 else 0)

    keep = Image.new("L", (N, N), 0)
    kd = ImageDraw.Draw(keep)
    for poly in cfg.get("keepOrig", []):
        kd.polygon([to_px(p) for p in poly], fill=255)
    g = ImageChops.lighter(ImageChops.darker(g, ImageChops.invert(keep)), ImageChops.darker(orig, keep))

    if cfg.get("fillHoles"):
        inv = g.copy()
        ImageDraw.floodfill(inv, (0, 0), 128)
        g = inv.point(lambda v: 0 if v == 128 else 255)

    draw = ImageDraw.Draw(g)
    for s in cfg.get("cut", []):
        draw.polygon(taper(s["c"], s["w"]), fill=0)

    # potrace traces black
    g.point(lambda v: 0 if v > 127 else 255).convert("1").save(out)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2])
