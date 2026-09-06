import SwiftUI
import Foundation
#if os(iOS) || os(tvOS) || os(visionOS)
import UIKit
#elseif os(macOS)
import AppKit
#endif

public enum PlantimIconsV4Metadata {
    public static let version = "4.0.0"
    public static let registryHash = "467e42dfdc05a0d93e9b26d62c1d9a4e81591244adffcca1165662ea98bf6399"
    public static let iconCount = 9
}

public enum PlantimIconV4Name: String, CaseIterable, Sendable {
    case accountUser = "account.user"
    case actionAdd = "action.add"
    case calendarDate = "calendar.date"
    case navigationHome = "navigation.home"
    case plantGrowth = "plant.growth"
    case plantSprout = "plant.sprout"
    case utilityActivity = "utility.activity"
    case utilityMessageCircle = "utility.message.circle"
    case utilityPlusCircle = "utility.plus.circle"
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
        case .micro: return 2.4
        case .base: return 2
        case .display: return 1.6
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
    (size: 16, grade: .micro),
    (size: 20, grade: .micro),
    (size: 24, grade: .base),
    (size: 32, grade: .base),
    (size: 48, grade: .display),
    (size: 72, grade: .display)
]

public enum PlantimIconV4TokenName: String, CaseIterable, Sendable {
    case leaf700 = "leaf.700"
    case leaf500 = "leaf.500"
    case leaf300 = "leaf.300"
    case earth600 = "earth.600"
    case earth400 = "earth.400"
    case water600 = "water.600"
    case water300 = "water.300"
    case sun500 = "sun.500"
    case sun300 = "sun.300"
    case bloom500 = "bloom.500"
    case ink900 = "ink.900"
    case ink500 = "ink.500"
    case ink300 = "ink.300"
    case statusSuccess = "status.success"
    case statusWarning = "status.warning"
    case statusError = "status.error"
    case statusInfo = "status.info"
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
    .leaf700: PlantimV4TokenValue(light: PlantimV4RGB(0x2E, 0x7D, 0x32), dark: PlantimV4RGB(0x66, 0xBB, 0x6A)),
    .leaf500: PlantimV4TokenValue(light: PlantimV4RGB(0x43, 0xA0, 0x47), dark: PlantimV4RGB(0x81, 0xC7, 0x84)),
    .leaf300: PlantimV4TokenValue(light: PlantimV4RGB(0xA5, 0xD6, 0xA7), dark: PlantimV4RGB(0xC8, 0xE6, 0xC9)),
    .earth600: PlantimV4TokenValue(light: PlantimV4RGB(0x6D, 0x4C, 0x41), dark: PlantimV4RGB(0xA1, 0x88, 0x7F)),
    .earth400: PlantimV4TokenValue(light: PlantimV4RGB(0xA1, 0x88, 0x7F), dark: PlantimV4RGB(0xBC, 0xAA, 0xA4)),
    .water600: PlantimV4TokenValue(light: PlantimV4RGB(0x1E, 0x88, 0xE5), dark: PlantimV4RGB(0x64, 0xB5, 0xF6)),
    .water300: PlantimV4TokenValue(light: PlantimV4RGB(0x90, 0xCA, 0xF9), dark: PlantimV4RGB(0xBB, 0xDE, 0xFB)),
    .sun500: PlantimV4TokenValue(light: PlantimV4RGB(0xF9, 0xA8, 0x25), dark: PlantimV4RGB(0xFD, 0xD8, 0x35)),
    .sun300: PlantimV4TokenValue(light: PlantimV4RGB(0xFD, 0xD8, 0x35), dark: PlantimV4RGB(0xFF, 0xF5, 0x9D)),
    .bloom500: PlantimV4TokenValue(light: PlantimV4RGB(0xD8, 0x1B, 0x60), dark: PlantimV4RGB(0xF0, 0x62, 0x92)),
    .ink900: PlantimV4TokenValue(light: PlantimV4RGB(0x26, 0x32, 0x38), dark: PlantimV4RGB(0xEC, 0xEF, 0xF1)),
    .ink500: PlantimV4TokenValue(light: PlantimV4RGB(0x60, 0x7D, 0x8B), dark: PlantimV4RGB(0x90, 0xA4, 0xAE)),
    .ink300: PlantimV4TokenValue(light: PlantimV4RGB(0xB0, 0xBE, 0xC5), dark: PlantimV4RGB(0x54, 0x6E, 0x7A)),
    .statusSuccess: PlantimV4TokenValue(light: PlantimV4RGB(0x2E, 0x7D, 0x32), dark: PlantimV4RGB(0x66, 0xBB, 0x6A)),
    .statusWarning: PlantimV4TokenValue(light: PlantimV4RGB(0xF9, 0xA8, 0x25), dark: PlantimV4RGB(0xFD, 0xD8, 0x35)),
    .statusError: PlantimV4TokenValue(light: PlantimV4RGB(0xE5, 0x39, 0x35), dark: PlantimV4RGB(0xEF, 0x9A, 0x9A)),
    .statusInfo: PlantimV4TokenValue(light: PlantimV4RGB(0x1E, 0x88, 0xE5), dark: PlantimV4RGB(0x64, 0xB5, 0xF6))
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
    case addSpin = "addSpin"
    case chatPop = "chatPop"
    case ctaBloom = "ctaBloom"
    case datePop = "datePop"
    case gardenSway = "gardenSway"
    case homeSettle = "homeSettle"
    case profileNod = "profileNod"
    case pulseBeat = "pulseBeat"
    case sproutGrow = "sproutGrow"
}

private let plantimV4IconAnimations: [PlantimIconV4Name: PlantimIconV4Animation] = [
    .accountUser: .profileNod,
    .actionAdd: .addSpin,
    .calendarDate: .datePop,
    .navigationHome: .homeSettle,
    .plantGrowth: .gardenSway,
    .plantSprout: .sproutGrow,
    .utilityActivity: .pulseBeat,
    .utilityMessageCircle: .chatPop,
    .utilityPlusCircle: .ctaBloom,
]

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
    .accountUser: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("ring", [.circle(12, 12, 9.4, false)]),
                PlantimV4Layer("person", [.circle(12, 9.4, 3.5, false), .path("M5.6 18.9a7.9 7.9 0 0 1 12.8 0", false)]),
            ],
            .base: [
                PlantimV4Layer("ring", [.circle(12, 12, 9.25, false)]),
                PlantimV4Layer("person", [.circle(12, 9.6, 3.3, false), .path("M5.9 18.7a7.7 7.7 0 0 1 12.2 0", false)]),
            ],
            .display: [
                PlantimV4Layer("ring", [.circle(12, 12, 9.25, false)]),
                PlantimV4Layer("person", [.circle(12, 9.6, 3.3, false), .path("M5.9 18.7a7.7 7.7 0 0 1 12.2 0", false)]),
            ],
        ],
        solid: [
            .micro: .fill(["M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5Zm0 4.4a4.1 4.1 0 1 1 0 8.2 4.1 4.1 0 0 1 0-8.2Zm0 15.1a9.4 9.4 0 0 1-6.8-2.9 8.7 8.7 0 0 1 13.6 0 9.4 9.4 0 0 1-6.8 2.9Z"]),
            .base: .fill(["M12 1.75C6.34 1.75 1.75 6.34 1.75 12c0 5.66 4.59 10.25 10.25 10.25S22.25 17.66 22.25 12 17.66 1.75 12 1.75Zm0 4.55a3.9 3.9 0 1 1 0 7.8 3.9 3.9 0 0 1 0-7.8Zm0 15a9.2 9.2 0 0 1-6.6-2.8 8.5 8.5 0 0 1 13.2 0 9.2 9.2 0 0 1-6.6 2.8Z"]),
        ],
        duotonePrimary: ["person"],
        multicolor: ["ring": .ink500, "person": .leaf700]
    ),
    .actionAdd: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("plus", [.path("M12 5v14", false), .path("M5 12h14", false)]),
            ],
            .base: [
                PlantimV4Layer("plus", [.path("M12 5.5v13", false), .path("M5.5 12h13", false)]),
            ],
            .display: [
                PlantimV4Layer("plus", [.path("M12 5.5v13", false), .path("M5.5 12h13", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.4),
            .base: .bold(3.2),
        ],
        duotonePrimary: ["plus"],
        multicolor: ["plus": .leaf700]
    ),
    .calendarDate: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("frame", [.rect(3.5, 5.5, 17, 15, 3, false), .path("M3.5 10.8h17", false)]),
                PlantimV4Layer("rings", [.path("M8 3v4", false), .path("M16 3v4", false)]),
                PlantimV4Layer("date", [.circle(12, 15.9, 2, true)]),
            ],
            .base: [
                PlantimV4Layer("frame", [.rect(3.5, 5, 17, 15.5, 3, false), .path("M3.5 10.5h17", false)]),
                PlantimV4Layer("rings", [.path("M8 3v4", false), .path("M16 3v4", false)]),
                PlantimV4Layer("date", [.circle(12, 15.7, 1.7, true)]),
            ],
            .display: [
                PlantimV4Layer("frame", [.rect(3.5, 5, 17, 15.5, 3, false), .path("M3.5 10.5h17", false)]),
                PlantimV4Layer("rings", [.path("M8 3v4", false), .path("M16 3v4", false)]),
                PlantimV4Layer("date", [.circle(9.4, 14.4, 1.5, true), .circle(14.6, 17, 1.5, true)]),
            ],
        ],
        solid: [
            .micro: .fill(["M2.5 8.5a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-10Zm2.1 3.2a.95.95 0 0 0 0 1.9h14.8a.95.95 0 0 0 0-1.9H4.6Zm7.4 2.7a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 1 0 0-4.8Z", "M6.9 2.4a1.1 1.1 0 0 1 2.2 0V7a1.1 1.1 0 0 1-2.2 0V2.4Z", "M14.9 2.4a1.1 1.1 0 0 1 2.2 0V7a1.1 1.1 0 0 1-2.2 0V2.4Z"]),
            .base: .fill(["M2.5 8a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v10.5a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3V8Zm2 3.3a.85.85 0 0 0 0 1.7h15a.85.85 0 0 0 0-1.7h-15Zm7.5 2.7a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 1 0 0-4.2Z", "M7 2.5a1 1 0 0 1 2 0V7a1 1 0 0 1-2 0V2.5Z", "M15 2.5a1 1 0 0 1 2 0V7a1 1 0 0 1-2 0V2.5Z"]),
        ],
        duotonePrimary: ["frame", "date"],
        multicolor: ["frame": .ink900, "rings": .ink500, "date": .leaf500]
    ),
    .navigationHome: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("shell", [.path("M3.6 10.5a2 2 0 0 1 .74-1.55l6.4-5.25a2 2 0 0 1 2.52 0l6.4 5.25a2 2 0 0 1 .74 1.55V19a2 2 0 0 1-2 2H5.6a2 2 0 0 1-2-2Z", false)]),
                PlantimV4Layer("door", [.path("M10 21v-3.9a2 2 0 0 1 4 0V21", false)]),
            ],
            .base: [
                PlantimV4Layer("shell", [.path("M3.9 10.4a2 2 0 0 1 .74-1.55l6.1-5a2 2 0 0 1 2.52 0l6.1 5a2 2 0 0 1 .74 1.55V19a2 2 0 0 1-2 2H5.9a2 2 0 0 1-2-2Z", false)]),
                PlantimV4Layer("door", [.path("M10.2 21v-4.3a1.8 1.8 0 0 1 3.6 0V21", false)]),
            ],
            .display: [
                PlantimV4Layer("shell", [.path("M3.9 10.4a2 2 0 0 1 .74-1.55l6.1-5a2 2 0 0 1 2.52 0l6.1 5a2 2 0 0 1 .74 1.55V19a2 2 0 0 1-2 2H5.9a2 2 0 0 1-2-2Z", false)]),
                PlantimV4Layer("door", [.path("M10.2 21v-4.3a1.8 1.8 0 0 1 3.6 0V21", false)]),
            ],
        ],
        solid: [
            .micro: .fill(["M13.6 2.86a3 3 0 0 0-3.2 0L4 8.1a3 3 0 0 0-1.4 2.4V19a3 3 0 0 0 3 3h4.3v-3.8a2.1 2.1 0 0 1 4.2 0V22h4.3a3 3 0 0 0 3-3v-8.5A3 3 0 0 0 20 8.1L13.6 2.86Z"]),
            .base: .fill(["M13.55 3.06a2.9 2.9 0 0 0-3.1 0l-6.1 5A3 3 0 0 0 2.9 10.4V19a3 3 0 0 0 3 3h4.05v-4a2 2 0 0 1 4 0V22h4.05a3 3 0 0 0 3-3v-8.6a3 3 0 0 0-1.45-2.34l-6.1-5Z"]),
        ],
        duotonePrimary: ["shell"],
        multicolor: ["shell": .ink900, "door": .leaf700]
    ),
    .plantGrowth: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("bed", [.path("M4 15.5h16v1.5a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 17Z", false)]),
                PlantimV4Layer("stems", [.path("M8.8 15.5v-3", false), .path("M15.2 15.5V8.9", false)]),
                PlantimV4Layer("leaves", [.path("M8.8 12.5C7 12.9 4.7 12.1 4.2 10C4.1 9.5 4.1 9 4.2 8.5C6.8 8.1 8.7 10 8.8 12.5Z", false), .path("M15.2 8.9C17.1 9.3 19.4 8.5 19.9 6.3C20 5.8 20 5.3 19.9 4.8C17.3 4.4 15.3 6.3 15.2 8.9Z", false)]),
            ],
            .base: [
                PlantimV4Layer("bed", [.path("M4 15.5h16v2a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 17.5Z", false)]),
                PlantimV4Layer("stems", [.path("M8.8 15.5V12", false), .path("M15.2 15.5V9.5", false)]),
                PlantimV4Layer("leaves", [.path("M8.8 12C6.9 12.4 4.6 11.6 4.1 9.4C4 8.9 4 8.4 4.1 7.9C6.7 7.5 8.7 9.4 8.8 12Z", false), .path("M15.2 9.5C17.1 9.9 19.4 9.1 19.9 6.9C20 6.4 20 5.9 19.9 5.4C17.3 5 15.3 6.9 15.2 9.5Z", false)]),
            ],
            .display: [
                PlantimV4Layer("bed", [.path("M4 15.5h16v2a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 17.5Z", false), .path("M7 18.8h10", false)]),
                PlantimV4Layer("stems", [.path("M8.8 15.5V12", false), .path("M15.2 15.5V9.5", false)]),
                PlantimV4Layer("leaves", [.path("M8.8 12C6.9 12.4 4.6 11.6 4.1 9.4C4 8.9 4 8.4 4.1 7.9C6.7 7.5 8.7 9.4 8.8 12Z", false), .path("M15.2 9.5C17.1 9.9 19.4 9.1 19.9 6.9C20 6.4 20 5.9 19.9 5.4C17.3 5 15.3 6.9 15.2 9.5Z", false), .path("M6.2 9C7.3 9.8 8.3 10.8 8.8 12", false), .path("M17.8 6.5C16.7 7.3 15.7 8.3 15.2 9.5", false)]),
            ],
        ],
        solid: [
            .micro: .fill(["M3 14.5h18v2.5A4.5 4.5 0 0 1 16.5 21.5h-9A4.5 4.5 0 0 1 3 17Z", "M7.7 13.5h2.2V9.9H7.7v3.6Z", "M14.1 13.5h2.2V6.8h-2.2v6.7Z", "M9.8 12.9C7.5 13.9 4.3 13 3.3 10.2C3.1 9.5 3.1 8.6 3.3 7.7C7.1 6.9 9.9 9.2 10 12.3A1 1 0 0 1 9.8 12.9Z", "M14.2 9.3C16.5 10.3 19.7 9.4 20.7 6.6C20.9 5.9 20.9 5 20.7 4.1C16.9 3.3 14.1 5.6 14 8.7A1 1 0 0 0 14.2 9.3Z"]),
            .base: .fill(["M3 14.5h18v3A4.5 4.5 0 0 1 16.5 22h-9A4.5 4.5 0 0 1 3 17.5Z", "M7.8 13.5h2V9.7h-2v3.8Z", "M14.2 13.5h2V7.2h-2v6.3Z", "M9.6 12.4C7.5 13.3 4.4 12.5 3.4 9.7C3.2 9 3.2 8.2 3.4 7.3C7 6.5 9.6 8.8 9.8 11.8A1 1 0 0 1 9.6 12.4Z", "M14.4 9.9C16.5 10.8 19.6 10 20.6 7.2C20.8 6.5 20.8 5.7 20.6 4.8C17 4 14.4 6.3 14.2 9.3A1 1 0 0 0 14.4 9.9Z"]),
        ],
        duotonePrimary: ["stems", "leaves"],
        multicolor: ["bed": .earth600, "stems": .leaf700, "leaves": .leaf500]
    ),
    .plantSprout: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("ground", [.path("M5.5 21h13", false)]),
                PlantimV4Layer("stem", [.path("M12 21v-7.5", false)]),
                PlantimV4Layer("leaves", [.path("M12 13.5C9.7 14.3 6.6 13.6 5.5 11C5.1 10 5.2 8.9 5.4 8C8.8 7.4 11.7 9.8 12 13.5Z", false), .path("M12 13.5C14.3 14.3 17.4 13.6 18.5 11C18.9 10 18.8 8.9 18.6 8C15.2 7.4 12.3 9.8 12 13.5Z", false)]),
            ],
            .base: [
                PlantimV4Layer("ground", [.path("M5 21h14", false)]),
                PlantimV4Layer("stem", [.path("M12 21v-8", false)]),
                PlantimV4Layer("leaves", [.path("M12 13C9.6 13.9 6.2 13.2 5 10.3C4.5 9.2 4.6 8 4.8 7C8.5 6.3 11.7 8.9 12 13Z", false), .path("M12 13C14.4 13.9 17.8 13.2 19 10.3C19.5 9.2 19.4 8 19.2 7C15.5 6.3 12.3 8.9 12 13Z", false)]),
            ],
            .display: [
                PlantimV4Layer("ground", [.path("M5 21h14", false)]),
                PlantimV4Layer("stem", [.path("M12 21v-8", false)]),
                PlantimV4Layer("leaves", [.path("M12 13C9.6 13.9 6.2 13.2 5 10.3C4.5 9.2 4.6 8 4.8 7C8.5 6.3 11.7 8.9 12 13Z", false), .path("M12 13C14.4 13.9 17.8 13.2 19 10.3C19.5 9.2 19.4 8 19.2 7C15.5 6.3 12.3 8.9 12 13Z", false), .path("M8 9.4C9.7 10.3 11.4 11.6 12 13", false), .path("M16 9.4C14.3 10.3 12.6 11.6 12 13", false)]),
            ],
        ],
        solid: [
            .micro: .fill(["M5.4 20a1 1 0 0 0 0 2h13.2a1 1 0 0 0 0-2H5.4Z", "M10.8 19.8h2.4V13.5h-2.4v6.3Z", "M13.1 13.9C10.2 15.5 6 14.7 4.5 11.4C4 10.2 4.1 8.8 4.4 7.5C8.8 6.4 12.7 9.3 13.2 13.5a1 1 0 0 1-.1.4Z", "M10.9 13.9C13.8 15.5 18 14.7 19.5 11.4C20 10.2 19.9 8.8 19.6 7.5C15.2 6.4 11.3 9.3 10.8 13.5a1 1 0 0 0 .1.4Z"]),
            .base: .fill(["M4.9 20a1 1 0 0 0 0 2h14.2a1 1 0 0 0 0-2H4.9Z", "M11 19.8h2V13h-2v6.8Z", "M13 13.3C10 14.9 5.6 14.2 4 10.7C3.4 9.3 3.6 7.7 3.9 6.3C8.6 5.2 12.7 8.2 13.1 12.9a1 1 0 0 1-.1.4Z", "M11 13.3C14 14.9 18.4 14.2 20 10.7C20.6 9.3 20.4 7.7 20.1 6.3C15.4 5.2 11.3 8.2 10.9 12.9a1 1 0 0 0 .1.4Z"]),
        ],
        duotonePrimary: ["stem", "leaves"],
        multicolor: ["ground": .earth600, "stem": .leaf700, "leaves": .leaf500]
    ),
    .utilityActivity: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("pulse", [.path("M2.5 12h3.6L9 5.5l5.6 13 2.9-6.5h4", false)]),
            ],
            .base: [
                PlantimV4Layer("pulse", [.path("M2.8 12h3.7L9.3 5.2l5.4 13.6 2.8-6.8h3.7", false)]),
            ],
            .display: [
                PlantimV4Layer("pulse", [.path("M2.8 12h3.7L9.3 5.2l5.4 13.6 2.8-6.8h3.7", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["pulse"],
        multicolor: ["pulse": .leaf700]
    ),
    .utilityMessageCircle: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("bubble", [.path("M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z", false)]),
            ],
            .base: [
                PlantimV4Layer("bubble", [.path("M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z", false)]),
                PlantimV4Layer("dots", [.circle(8.1, 12, 1.15, true), .circle(11.9, 12, 1.15, true), .circle(15.7, 12, 1.15, true)]),
            ],
            .display: [
                PlantimV4Layer("bubble", [.path("M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z", false)]),
                PlantimV4Layer("dots", [.circle(8.1, 12, 1.15, true), .circle(11.9, 12, 1.15, true), .circle(15.7, 12, 1.15, true)]),
            ],
        ],
        solid: [
            .micro: .fill(["M11.9 21.7a9.7 9.7 0 1 0 0-19.4 9.7 9.7 0 0 0 0 19.4Z", "M8.4 19.4 3 21.1 4.4 15.5C5.3 17.1 6.8 18.5 8.4 19.4Z"]),
            .base: .fill(["M11.9 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM8.1 10.7a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Zm3.8 0a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Zm3.8 0a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Z", "M8.4 19.3 3.1 20.9 4.5 15.6C5.4 17.1 6.8 18.4 8.4 19.3Z"]),
        ],
        duotonePrimary: ["bubble"],
        multicolor: ["bubble": .leaf700, "dots": .leaf300]
    ),
    .utilityPlusCircle: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("ring", [.circle(12, 12, 9.4, false)]),
                PlantimV4Layer("plus", [.path("M12 7.6v8.8", false), .path("M7.6 12h8.8", false)]),
            ],
            .base: [
                PlantimV4Layer("ring", [.circle(12, 12, 9.25, false)]),
                PlantimV4Layer("plus", [.path("M12 8v8", false), .path("M8 12h8", false)]),
            ],
            .display: [
                PlantimV4Layer("ring", [.circle(12, 12, 9.25, false)]),
                PlantimV4Layer("plus", [.path("M12 8v8", false), .path("M8 12h8", false)]),
            ],
        ],
        solid: [
            .micro: .fill(["M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5Zm-1.2 5.9a1.2 1.2 0 0 1 2.4 0v3.4h3.4a1.2 1.2 0 0 1 0 2.4h-3.4v3.4a1.2 1.2 0 0 1-2.4 0v-3.4H7.4a1.2 1.2 0 0 1 0-2.4h3.4V7.4Z"]),
            .base: .fill(["M12 1.75C6.34 1.75 1.75 6.34 1.75 12c0 5.66 4.59 10.25 10.25 10.25S22.25 17.66 22.25 12 17.66 1.75 12 1.75Zm-1.1 6.05a1.1 1.1 0 0 1 2.2 0v3.1h3.1a1.1 1.1 0 0 1 0 2.2h-3.1v3.1a1.1 1.1 0 0 1-2.2 0v-3.1H7.8a1.1 1.1 0 0 1 0-2.2h3.1V7.8Z"]),
        ],
        duotonePrimary: ["plus"],
        multicolor: ["ring": .leaf700, "plus": .leaf500]
    )
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
