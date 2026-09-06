import SwiftUI
import Foundation
#if os(iOS) || os(tvOS) || os(visionOS)
import UIKit
#elseif os(macOS)
import AppKit
#endif

public enum PlantimIconsV4Metadata {
    public static let version = "__VERSION__"
    public static let registryHash = "__V4_HASH__"
    public static let iconCount = __ICON_COUNT__
}

public enum PlantimIconV4Name: String, CaseIterable, Sendable {
__CASES__
}

public enum PlantimIconV4Variant: String, CaseIterable, Sendable {
    case outline
    case solid
    case duotone
    case multicolor
}

public enum PlantimIconV4Grade: String, CaseIterable, Sendable {
    case micro
    case base
    case display

    /// Stroke width in 24-grid units for this optical grade.
    public var strokeWidth: CGFloat {
        switch self {
__GRADE_STROKE_CASES__
        }
    }

    /// Grade for a rendered point size. Authored sizes map directly; any other
    /// size picks the grade of the nearest authored size (ties go to the
    /// smaller authored size).
    public static func grade(forSize size: CGFloat) -> PlantimIconV4Grade {
        guard var best = plantimV4SizeGrades.first else { return .base }
        var bestDistance = abs(best.size - size)
        for entry in plantimV4SizeGrades.dropFirst() {
            let distance = abs(entry.size - size)
            if distance < bestDistance {
                best = entry
                bestDistance = distance
            }
        }
        return best.grade
    }
}

private let plantimV4SizeGrades: [(size: CGFloat, grade: PlantimIconV4Grade)] = [
__SIZE_GRADE_ENTRIES__
]

public enum PlantimIconV4TokenName: String, CaseIterable, Sendable {
__TOKEN_CASES__
}

private struct PlantimV4RGB: Sendable {
    let red: Double
    let green: Double
    let blue: Double

    init(_ red: Int, _ green: Int, _ blue: Int) {
        self.red = Double(red) / 255
        self.green = Double(green) / 255
        self.blue = Double(blue) / 255
    }
}

private struct PlantimV4TokenValue: Sendable {
    let light: PlantimV4RGB
    let dark: PlantimV4RGB
}

private let plantimV4TokenValues: [PlantimIconV4TokenName: PlantimV4TokenValue] = [
__TOKEN_VALUES__
]

private extension Color {
    /// Dynamic light/dark color that resolves from the platform appearance.
    init(plantimLight light: PlantimV4RGB, dark: PlantimV4RGB) {
#if os(iOS) || os(tvOS) || os(visionOS)
        self.init(uiColor: UIColor { traits in
            let rgb = traits.userInterfaceStyle == .dark ? dark : light
            return UIColor(red: rgb.red, green: rgb.green, blue: rgb.blue, alpha: 1)
        })
#elseif os(macOS)
        self.init(nsColor: NSColor(name: nil, dynamicProvider: { appearance in
            let rgb = appearance.bestMatch(from: [.aqua, .darkAqua]) == .darkAqua ? dark : light
            return NSColor(srgbRed: rgb.red, green: rgb.green, blue: rgb.blue, alpha: 1)
        }))
#else
        self.init(red: light.red, green: light.green, blue: light.blue)
#endif
    }
}

public extension PlantimIconV4TokenName {
    /// Token color from tokens.json; light/dark resolve automatically.
    var color: Color {
        guard let value = plantimV4TokenValues[self] else { return .primary }
        return Color(plantimLight: value.light, dark: value.dark)
    }
}

public enum PlantimIconV4Animation: String, CaseIterable, Sendable {
__ANIMATION_CASES__
}

private let plantimV4IconAnimations: [PlantimIconV4Name: PlantimIconV4Animation] = __ANIMATION_MAP__

public extension PlantimIconV4Name {
    /// Selection-animation family from the v4 registry (P0 icons only).
    var animation: PlantimIconV4Animation? { plantimV4IconAnimations[self] }
}

private enum PlantimV4Node: Sendable {
    case path(String, Bool)
    case line(Double, Double, Double, Double, Bool)
    case polyline(String, Bool)
    case polygon(String, Bool)
    case circle(Double, Double, Double, Bool)
    case ellipse(Double, Double, Double, Double, Bool)
    case rect(Double, Double, Double, Double, Double, Bool)

    var isFilled: Bool {
        switch self {
        case let .path(_, filled): return filled
        case let .line(_, _, _, _, filled): return filled
        case let .polyline(_, filled): return filled
        case let .polygon(_, filled): return filled
        case let .circle(_, _, _, filled): return filled
        case let .ellipse(_, _, _, _, filled): return filled
        case let .rect(_, _, _, _, _, filled): return filled
        }
    }

    func add(to path: inout Path) {
        switch self {
        case let .path(value, _): PlantimV4SVGPathParser(value).add(to: &path)
        case let .line(x1, y1, x2, y2, _):
            path.move(to: CGPoint(x: x1, y: y1)); path.addLine(to: CGPoint(x: x2, y: y2))
        case let .polyline(value, _): addPoints(value, to: &path, close: false)
        case let .polygon(value, _): addPoints(value, to: &path, close: true)
        case let .circle(cx, cy, r, _): path.addEllipse(in: CGRect(x: cx - r, y: cy - r, width: r * 2, height: r * 2))
        case let .ellipse(cx, cy, rx, ry, _): path.addEllipse(in: CGRect(x: cx - rx, y: cy - ry, width: rx * 2, height: ry * 2))
        case let .rect(x, y, width, height, radius, _):
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

private struct PlantimV4SVGPathParser {
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

private struct PlantimV4Layer: Sendable {
    let name: String
    let nodes: [PlantimV4Node]

    init(_ name: String, _ nodes: [PlantimV4Node]) {
        self.name = name
        self.nodes = nodes
    }
}

private enum PlantimV4Solid: Sendable {
    case fill([String])
    case bold(Double)
}

private struct PlantimV4IconData: Sendable {
    let grades: [PlantimIconV4Grade: [PlantimV4Layer]]
    let solid: [PlantimIconV4Grade: PlantimV4Solid]
    let duotonePrimary: [String]
    let multicolor: [String: PlantimIconV4TokenName]
}

private let plantimV4IconData: [PlantimIconV4Name: PlantimV4IconData] = [
__DATA_CASES__
]

private struct PlantimV4Shape: Shape {
    let nodes: [PlantimV4Node]

    func path(in rect: CGRect) -> Path {
        var path = Path()
        nodes.forEach { $0.add(to: &path) }
        let scale = min(rect.width / 24, rect.height / 24)
        return path.applying(CGAffineTransform(scaleX: scale, y: scale))
    }
}

private struct PlantimV4PathShape: Shape {
    let d: String

    func path(in rect: CGRect) -> Path {
        var path = Path()
        PlantimV4SVGPathParser(d).add(to: &path)
        let scale = min(rect.width / 24, rect.height / 24)
        return path.applying(CGAffineTransform(scaleX: scale, y: scale))
    }
}

private struct PlantimV4LayerView: View {
    let layer: PlantimV4Layer
    let strokeWidth: CGFloat
    let color: Color?
    let opacity: Double

    var body: some View {
        let stroked = layer.nodes.filter { !$0.isFilled }
        let filled = layer.nodes.filter(\.isFilled)
        let style = StrokeStyle(lineWidth: strokeWidth, lineCap: .round, lineJoin: .round)
        ZStack {
            if !stroked.isEmpty {
                if let color {
                    PlantimV4Shape(nodes: stroked).stroke(color, style: style)
                } else {
                    PlantimV4Shape(nodes: stroked).stroke(style: style)
                }
            }
            if !filled.isEmpty {
                if let color {
                    PlantimV4Shape(nodes: filled).fill(color)
                } else {
                    PlantimV4Shape(nodes: filled).fill()
                }
            }
        }
        .opacity(opacity)
    }
}

/// Renders one v4 icon. Outline/solid/duotone tint via `foregroundStyle`
/// (same contract as `PlantimIcon`); multicolor uses the token table.
public struct PlantimIconV4: View {
    public let name: PlantimIconV4Name
    public var variant: PlantimIconV4Variant
    public var size: CGFloat

    nonisolated public init(_ name: PlantimIconV4Name, variant: PlantimIconV4Variant = .outline, size: CGFloat = 24) {
        self.name = name
        self.variant = variant
        self.size = size
    }

    public var body: some View {
        let grade = PlantimIconV4Grade.grade(forSize: size)
        ZStack {
            if let data = plantimV4IconData[name] {
                variantContent(data: data, grade: grade)
            }
        }
        .frame(width: size, height: size)
        .accessibilityHidden(true)
    }

    @ViewBuilder
    private func variantContent(data: PlantimV4IconData, grade: PlantimIconV4Grade) -> some View {
        let layers = data.grades[grade] ?? data.grades[.base] ?? []
        let renderScale = size / 24
        switch variant {
        case .outline:
            ForEach(layers.indices, id: \.self) { index in
                PlantimV4LayerView(layer: layers[index], strokeWidth: grade.strokeWidth * renderScale, color: nil, opacity: 1)
            }
        case .duotone:
            let primary = data.duotonePrimary.isEmpty ? Set(layers.prefix(1).map(\.name)) : Set(data.duotonePrimary)
            ForEach(layers.indices, id: \.self) { index in
                PlantimV4LayerView(
                    layer: layers[index],
                    strokeWidth: grade.strokeWidth * renderScale,
                    color: nil,
                    opacity: primary.contains(layers[index].name) ? 1 : 0.35
                )
            }
        case .multicolor:
            ForEach(layers.indices, id: \.self) { index in
                PlantimV4LayerView(
                    layer: layers[index],
                    strokeWidth: grade.strokeWidth * renderScale,
                    color: data.multicolor[layers[index].name]?.color,
                    opacity: 1
                )
            }
        case .solid:
            switch data.solid[grade] ?? data.solid[.base] {
            case let .fill(paths):
                ForEach(paths.indices, id: \.self) { index in
                    PlantimV4PathShape(d: paths[index]).fill(style: FillStyle(eoFill: true))
                }
            case let .bold(width):
                ForEach(layers.indices, id: \.self) { index in
                    PlantimV4LayerView(layer: layers[index], strokeWidth: width * renderScale, color: nil, opacity: 1)
                }
            case nil:
                ForEach(layers.indices, id: \.self) { index in
                    PlantimV4LayerView(layer: layers[index], strokeWidth: grade.strokeWidth * renderScale, color: nil, opacity: 1)
                }
            }
        }
    }
}

private struct PlantimV4ScaledIcon: View {
    @ScaledMetric private var scaledSize: CGFloat
    private let name: PlantimIconV4Name
    private let variant: PlantimIconV4Variant

    init(name: PlantimIconV4Name, variant: PlantimIconV4Variant, baseSize: CGFloat, textStyle: Font.TextStyle) {
        self.name = name
        self.variant = variant
        _scaledSize = ScaledMetric(wrappedValue: baseSize, relativeTo: textStyle)
    }

    var body: some View {
        PlantimIconV4(name, variant: variant, size: scaledSize)
    }
}

public extension PlantimIconV4 {
    /// Scales the icon with Dynamic Type relative to a text style.
    func plantimScaled(relativeTo textStyle: Font.TextStyle = .body) -> some View {
        PlantimV4ScaledIcon(name: name, variant: variant, baseSize: size, textStyle: textStyle)
    }
}
