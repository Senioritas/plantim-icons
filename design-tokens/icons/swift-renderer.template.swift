import SwiftUI
import Foundation

public enum PlantimIconsMetadata {
    public static let version = "__VERSION__"
    public static let registryHash = "__REGISTRY_HASH__"
}

public enum PlantimIconName: String, CaseIterable, Sendable {
__CASES__
}

private enum PlantimSVGNode {
    case path(String)
    case line(Double, Double, Double, Double)
    case polyline(String)
    case polygon(String)
    case circle(Double, Double, Double)
    case ellipse(Double, Double, Double, Double)
    case rect(Double, Double, Double, Double, Double)

    func add(to path: inout Path) {
        switch self {
        case let .path(value): SVGPathParser(value).add(to: &path)
        case let .line(x1, y1, x2, y2):
            path.move(to: CGPoint(x: x1, y: y1)); path.addLine(to: CGPoint(x: x2, y: y2))
        case let .polyline(value): addPoints(value, to: &path, close: false)
        case let .polygon(value): addPoints(value, to: &path, close: true)
        case let .circle(cx, cy, r): path.addEllipse(in: CGRect(x: cx - r, y: cy - r, width: r * 2, height: r * 2))
        case let .ellipse(cx, cy, rx, ry): path.addEllipse(in: CGRect(x: cx - rx, y: cy - ry, width: rx * 2, height: ry * 2))
        case let .rect(x, y, width, height, radius):
            path.addRoundedRect(in: CGRect(x: x, y: y, width: width, height: height), cornerSize: CGSize(width: radius, height: radius))
        }
    }

    private func addPoints(_ value: String, to path: inout Path, close: Bool) {
        let points = value.split { $0 == " " || $0 == "," }.compactMap { Double($0) }
        guard points.count >= 2 else { return }
        path.move(to: CGPoint(x: points[0], y: points[1]))
        stride(from: 2, to: points.count - 1, by: 2).forEach { path.addLine(to: CGPoint(x: points[$0], y: points[$0 + 1])) }
        if close { path.closeSubpath() }
    }
}

private struct SVGPathParser {
    let tokens: [String]

    init(_ value: String) {
        let regex = try! NSRegularExpression(pattern: "[A-Za-z]|[-+]?(?:\\d*\\.)?\\d+(?:[eE][-+]?\\d+)?")
        let range = NSRange(value.startIndex..., in: value)
        tokens = regex.matches(in: value, range: range).compactMap { Range($0.range, in: value).map { String(value[$0]) } }
    }

    func add(to path: inout Path) {
        var index = 0
        var command = ""
        var relative = false
        var current = CGPoint.zero
        var subpathStart = CGPoint.zero
        var previousControl = CGPoint.zero
        var previousCommand = ""

        func read() -> Double? {
            guard index < tokens.count, let value = Double(tokens[index]) else { return nil }
            index += 1
            return value
        }
        func point(_ x: Double, _ y: Double) -> CGPoint {
            CGPoint(x: (relative ? current.x : 0) + x, y: (relative ? current.y : 0) + y)
        }

        while index < tokens.count {
            if tokens[index].first?.isLetter == true {
                let raw = tokens[index]
                command = raw.lowercased()
                relative = raw.first?.isLowercase == true
                index += 1
            }
            guard !command.isEmpty else { index += 1; continue }

            switch command {
            case "m":
                guard let x = read(), let y = read() else { return }
                let next = point(x, y); path.move(to: next); current = next; subpathStart = next
                command = "l"; previousCommand = "m"
            case "l":
                guard let x = read(), let y = read() else { return }
                let next = point(x, y); path.addLine(to: next); current = next; previousCommand = "l"
            case "h":
                guard let x = read() else { return }
                current = CGPoint(x: (relative ? current.x : 0) + x, y: current.y); path.addLine(to: current); previousCommand = "h"
            case "v":
                guard let y = read() else { return }
                current = CGPoint(x: current.x, y: (relative ? current.y : 0) + y); path.addLine(to: current); previousCommand = "v"
            case "c":
                guard let x1 = read(), let y1 = read(), let x2 = read(), let y2 = read(), let x = read(), let y = read() else { return }
                let control1 = point(x1, y1); let control2 = point(x2, y2); let next = point(x, y)
                path.addCurve(to: next, control1: control1, control2: control2); current = next; previousControl = control2; previousCommand = "c"
            case "s":
                guard let x2 = read(), let y2 = read(), let x = read(), let y = read() else { return }
                let control1 = (previousCommand == "c" || previousCommand == "s") ? CGPoint(x: 2 * current.x - previousControl.x, y: 2 * current.y - previousControl.y) : current
                let control2 = point(x2, y2); let next = point(x, y)
                path.addCurve(to: next, control1: control1, control2: control2); current = next; previousControl = control2; previousCommand = "s"
            case "q":
                guard let x1 = read(), let y1 = read(), let x = read(), let y = read() else { return }
                let quadratic = point(x1, y1); let next = point(x, y)
                let control1 = CGPoint(x: current.x + 2.0 / 3.0 * (quadratic.x - current.x), y: current.y + 2.0 / 3.0 * (quadratic.y - current.y))
                let control2 = CGPoint(x: next.x + 2.0 / 3.0 * (quadratic.x - next.x), y: next.y + 2.0 / 3.0 * (quadratic.y - next.y))
                path.addCurve(to: next, control1: control1, control2: control2); current = next; previousControl = quadratic; previousCommand = "q"
            case "t":
                guard let x = read(), let y = read() else { return }
                let quadratic = (previousCommand == "q" || previousCommand == "t") ? CGPoint(x: 2 * current.x - previousControl.x, y: 2 * current.y - previousControl.y) : current
                let next = point(x, y)
                let control1 = CGPoint(x: current.x + 2.0 / 3.0 * (quadratic.x - current.x), y: current.y + 2.0 / 3.0 * (quadratic.y - current.y))
                let control2 = CGPoint(x: next.x + 2.0 / 3.0 * (quadratic.x - next.x), y: next.y + 2.0 / 3.0 * (quadratic.y - next.y))
                path.addCurve(to: next, control1: control1, control2: control2); current = next; previousControl = quadratic; previousCommand = "t"
            case "a":
                guard let rx = read(), let ry = read(), let rotation = read(), let largeArc = read(), let sweep = read(), let x = read(), let y = read() else { return }
                let next = point(x, y)
                addArc(from: current, to: next, rx: abs(rx), ry: abs(ry), rotation: rotation, largeArc: largeArc != 0, sweep: sweep != 0, to: &path)
                current = next; previousCommand = "a"
            case "z":
                path.closeSubpath(); current = subpathStart; command = ""; previousCommand = "z"
            default:
                index += 1
            }
        }
    }

    private func addArc(from start: CGPoint, to end: CGPoint, rx: Double, ry: Double, rotation: Double, largeArc: Bool, sweep: Bool, to path: inout Path) {
        guard rx > 0, ry > 0, start != end else { path.addLine(to: end); return }
        let angle = rotation * .pi / 180; let cosAngle = cos(angle); let sinAngle = sin(angle)
        let dx = (start.x - end.x) / 2; let dy = (start.y - end.y) / 2
        let xPrime = cosAngle * dx + sinAngle * dy; let yPrime = -sinAngle * dx + cosAngle * dy
        let scale = max(1, (xPrime * xPrime) / (rx * rx) + (yPrime * yPrime) / (ry * ry))
        let scaledRx = rx * sqrt(scale); let scaledRy = ry * sqrt(scale)
        let sign = largeArc == sweep ? -1.0 : 1.0
        let denominator = scaledRx * scaledRx * yPrime * yPrime + scaledRy * scaledRy * xPrime * xPrime
        let numerator = max(0, (scaledRx * scaledRx * scaledRy * scaledRy - scaledRx * scaledRx * yPrime * yPrime - scaledRy * scaledRy * xPrime * xPrime) / max(denominator, 0.000001))
        let coefficient = sign * sqrt(numerator)
        let cxPrime = coefficient * (scaledRx * yPrime / scaledRy); let cyPrime = coefficient * (-scaledRy * xPrime / scaledRx)
        let center = CGPoint(x: cosAngle * cxPrime - sinAngle * cyPrime + (start.x + end.x) / 2, y: sinAngle * cxPrime + cosAngle * cyPrime + (start.y + end.y) / 2)
        let vectorStart = CGPoint(x: (xPrime - cxPrime) / scaledRx, y: (yPrime - cyPrime) / scaledRy)
        let vectorEnd = CGPoint(x: (-xPrime - cxPrime) / scaledRx, y: (-yPrime - cyPrime) / scaledRy)
        let startAngle = atan2(vectorStart.y, vectorStart.x)
        var delta = atan2(vectorStart.x * vectorEnd.y - vectorStart.y * vectorEnd.x, vectorStart.x * vectorEnd.x + vectorStart.y * vectorEnd.y)
        if !sweep && delta > 0 { delta -= 2 * .pi }; if sweep && delta < 0 { delta += 2 * .pi }
        let segments = max(1, Int(ceil(abs(delta) / (.pi / 2)))); let step = delta / Double(segments)
        for segment in 0..<segments {
            let a0 = startAngle + Double(segment) * step; let a1 = a0 + step; let alpha = 4.0 / 3.0 * tan((a1 - a0) / 4.0)
            func point(_ a: Double) -> CGPoint { CGPoint(x: center.x + scaledRx * cosAngle * cos(a) - scaledRy * sinAngle * sin(a), y: center.y + scaledRx * sinAngle * cos(a) + scaledRy * cosAngle * sin(a)) }
            func tangent(_ a: Double) -> CGPoint { CGPoint(x: -scaledRx * cosAngle * sin(a) - scaledRy * sinAngle * cos(a), y: -scaledRx * sinAngle * sin(a) + scaledRy * cosAngle * cos(a)) }
            let p0 = point(a0); let p1 = point(a1); let t0 = tangent(a0); let t1 = tangent(a1)
            if segment == 0 { path.move(to: p0) }
            path.addCurve(to: p1, control1: CGPoint(x: p0.x + alpha * t0.x, y: p0.y + alpha * t0.y), control2: CGPoint(x: p1.x - alpha * t1.x, y: p1.y - alpha * t1.y))
        }
    }
}

private let plantimIconNodes: [PlantimIconName: [PlantimSVGNode]] = [
__DATA_CASES__
]

private let plantimIconAccessibility: [PlantimIconName: String] = [
__ACCESSIBILITY_CASES__
]

public struct PlantimIcon: View {
    public let name: PlantimIconName
    public var size: CGFloat
    public var strokeWidth: CGFloat
    public var accessibilityLabel: String?
    public var decorative: Bool

    nonisolated public init(_ name: PlantimIconName, size: CGFloat = 24, strokeWidth: CGFloat = 2, accessibilityLabel: String? = nil, decorative: Bool? = nil) {
        self.name = name; self.size = size; self.strokeWidth = strokeWidth; self.accessibilityLabel = accessibilityLabel; self.decorative = decorative ?? (accessibilityLabel == nil || plantimIconAccessibility[name] == "decorative")
    }

    public var body: some View {
        let canvas = Canvas { context, _ in
            context.scaleBy(x: size / 24, y: size / 24)
            var path = Path(); plantimIconNodes[name, default: []].forEach { $0.add(to: &path) }
            context.stroke(path, with: .foreground, lineWidth: strokeWidth)
        }
        .frame(width: size, height: size)
        if decorative {
            canvas.accessibilityHidden(true)
        } else if let accessibilityLabel {
            canvas.accessibilityLabel(accessibilityLabel)
        } else {
            canvas.accessibilityHidden(true)
        }
    }
}
