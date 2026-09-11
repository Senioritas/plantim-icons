// Path-walking bounds check shared by the v4 structural gate and the v4.1
// proposal gate. Tracks absolute position through every SVG path command
// (arcs sampled via the endpoint parametrization) and collects numeric tokens
// with more than three decimals. Pure; no I/O.

/** Walk a path's commands tracking absolute position; returns {minX,maxX,minY,maxY,badDecimals}. */
export function pathBounds(d) {
  const tokens = d.match(/[a-zA-Z]|-?\d*\.?\d+/g) ?? [];
  let i = 0;
  let cmd = "";
  let x = 0, y = 0, sx = 0, sy = 0;
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  const badDecimals = [];
  const num = () => {
    const t = tokens[i++];
    if (t === undefined || /[a-zA-Z]/.test(t)) throw new Error(`path parse error in "${d}"`);
    if (t.includes(".") && t.split(".")[1].length > 3) badDecimals.push(t);
    return Number(t);
  };
  const track = (px, py) => {
    minX = Math.min(minX, px); maxX = Math.max(maxX, px);
    minY = Math.min(minY, py); maxY = Math.max(maxY, py);
  };
  track(0, 0); minX = Infinity; maxX = -Infinity; minY = Infinity; maxY = -Infinity;
  while (i < tokens.length) {
    if (/[a-zA-Z]/.test(tokens[i])) cmd = tokens[i++];
    const rel = cmd === cmd.toLowerCase() && cmd !== "z" && cmd !== "Z";
    switch (cmd.toUpperCase()) {
      case "M": case "L": {
        const nx = num(), ny = num();
        x = rel ? x + nx : nx; y = rel ? y + ny : ny;
        if (cmd.toUpperCase() === "M") { sx = x; sy = y; cmd = rel ? "l" : "L"; }
        track(x, y);
        break;
      }
      case "H": { const nx = num(); x = rel ? x + nx : nx; track(x, y); break; }
      case "V": { const ny = num(); y = rel ? y + ny : ny; track(x, y); break; }
      case "C": {
        const c1x = num(), c1y = num(), c2x = num(), c2y = num(), ex = num(), ey = num();
        const ax1 = rel ? x + c1x : c1x, ay1 = rel ? y + c1y : c1y;
        const ax2 = rel ? x + c2x : c2x, ay2 = rel ? y + c2y : c2y;
        x = rel ? x + ex : ex; y = rel ? y + ey : ey;
        track(ax1, ay1); track(ax2, ay2); track(x, y);
        break;
      }
      case "S": case "Q": {
        const cx = num(), cy = num(), ex = num(), ey = num();
        track(rel ? x + cx : cx, rel ? y + cy : cy);
        x = rel ? x + ex : ex; y = rel ? y + ey : ey;
        track(x, y);
        break;
      }
      case "T": { const ex = num(), ey = num(); x = rel ? x + ex : ex; y = rel ? y + ey : ey; track(x, y); break; }
      case "A": {
        let rx = num(), ry = num();
        const phi = (num() * Math.PI) / 180, largeArc = num(), sweep = num();
        const ex0 = num(), ey0 = num();
        const px = x, py = y;
        x = rel ? x + ex0 : ex0; y = rel ? y + ey0 : ey0;
        // exact arc bbox via endpoint parametrization (SVG spec F.6.5)
        rx = Math.abs(rx); ry = Math.abs(ry);
        if (rx === 0 || ry === 0 || (px === x && py === y)) { track(x, y); break; }
        const cosP = Math.cos(phi), sinP = Math.sin(phi);
        const dx2 = (px - x) / 2, dy2 = (py - y) / 2;
        const x1 = cosP * dx2 + sinP * dy2, y1 = -sinP * dx2 + cosP * dy2;
        const lambda = (x1 * x1) / (rx * rx) + (y1 * y1) / (ry * ry);
        if (lambda > 1) { const s = Math.sqrt(lambda); rx *= s; ry *= s; }
        let sign = largeArc !== sweep ? 1 : -1;
        const denom = rx * rx * y1 * y1 + ry * ry * x1 * x1;
        const numer = Math.max(0, rx * rx * ry * ry - denom);
        const co = sign * Math.sqrt(numer / denom);
        const cxp = (co * rx * y1) / ry, cyp = (-co * ry * x1) / rx;
        const cx = cosP * cxp - sinP * cyp + (px + x) / 2;
        const cy = sinP * cxp + cosP * cyp + (py + y) / 2;
        const angle = (ux, uy) => Math.atan2(uy, ux);
        const theta1 = angle((x1 - cxp) / rx, (y1 - cyp) / ry);
        let dTheta = angle((-x1 - cxp) / rx, (-y1 - cyp) / ry) - theta1;
        if (!sweep && dTheta > 0) dTheta -= 2 * Math.PI;
        if (sweep && dTheta < 0) dTheta += 2 * Math.PI;
        track(px, py); track(x, y);
        // sample the arc — 32 steps is plenty for a bounds gate
        for (let s = 1; s < 32; s++) {
          const t = theta1 + (dTheta * s) / 32;
          track(cx + rx * Math.cos(t) * cosP - ry * Math.sin(t) * sinP,
                cy + rx * Math.cos(t) * sinP + ry * Math.sin(t) * cosP);
        }
        break;
      }
      case "Z": x = sx; y = sy; break;
      default: throw new Error(`unsupported path command "${cmd}" in "${d}"`);
    }
  }
  return { minX, maxX, minY, maxY, badDecimals };
}
