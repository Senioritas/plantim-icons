import SwiftUI
import Foundation

public enum PlantimIconsMetadata {
    public static let version = "2.0.0"
    public static let registryHash = "7bd691a72d4547801898bf845183e01817bd70bbfc6dee2e535db3e0be4bdc7f"
}

public enum PlantimIconName: String, CaseIterable, Sendable {
    case utilityActivity = "utility.activity"
    case statusError = "status.error"
    case statusWarning = "status.warning"
    case utilityAlignJustify = "utility.align.justify"
    case utilityArrowDown = "utility.arrow.down"
    case utilityArrowDownToDot = "utility.arrow.down.to.dot"
    case navigationBack = "navigation.back"
    case navigationForward = "navigation.forward"
    case utilityArrowUp = "utility.arrow.up"
    case utilityArrowUpFromDot = "utility.arrow.up.from.dot"
    case utilityAward = "utility.award"
    case utilityBaby = "utility.baby"
    case utilityBadgeCheck = "utility.badge.check"
    case utilityBarChart3 = "utility.bar.chart3"
    case utilityBell = "utility.bell"
    case utilityBellOff = "utility.bell.off"
    case utilityBot = "utility.bot"
    case utilityBrain = "utility.brain"
    case utilityBug = "utility.bug"
    case utilityCake = "utility.cake"
    case calendarDate = "calendar.date"
    case utilityCalendarClock = "utility.calendar.clock"
    case utilityCalendarDays = "utility.calendar.days"
    case utilityCamera = "utility.camera"
    case statusSuccess = "status.success"
    case utilityCheckCheck = "utility.check.check"
    case statusSuccessCircle = "status.success.circle"
    case statusSuccessCircleAlt = "status.success.circle.alt"
    case navigationExpand = "navigation.expand"
    case navigationPrevious = "navigation.previous"
    case navigationNext = "navigation.next"
    case navigationCollapse = "navigation.collapse"
    case utilityChevronsUpDown = "utility.chevrons.up.down"
    case utilityCircle = "utility.circle"
    case calendarTime = "calendar.time"
    case weatherCloud = "weather.cloud"
    case utilityCloudDrizzle = "utility.cloud.drizzle"
    case utilityCloudFog = "utility.cloud.fog"
    case utilityCloudLightning = "utility.cloud.lightning"
    case utilityCloudMoon = "utility.cloud.moon"
    case utilityCloudRain = "utility.cloud.rain"
    case utilityCloudSnow = "utility.cloud.snow"
    case utilityCloudSun = "utility.cloud.sun"
    case utilityCode = "utility.code"
    case utilityCookie = "utility.cookie"
    case utilityCopy = "utility.copy"
    case utilityCrown = "utility.crown"
    case utilityDatabase = "utility.database"
    case utilityDna = "utility.dna"
    case plantWatering = "plant.watering"
    case utilityEye = "utility.eye"
    case utilityEyeOff = "utility.eye.off"
    case utilityFilter = "utility.filter"
    case utilityFlame = "utility.flame"
    case utilityFlaskConical = "utility.flask.conical"
    case utilityFlipHorizontal2 = "utility.flip.horizontal2"
    case utilityFlower2 = "utility.flower2"
    case utilityGlobe = "utility.globe"
    case utilityGrid2x2 = "utility.grid2x2"
    case utilityHand = "utility.hand"
    case utilityHandshake = "utility.handshake"
    case utilityHeart = "utility.heart"
    case utilityHelpCircle = "utility.help.circle"
    case utilityHistory = "utility.history"
    case navigationHome = "navigation.home"
    case utilityImage = "utility.image"
    case utilityInbox = "utility.inbox"
    case statusInfo = "status.info"
    case utilityKey = "utility.key"
    case utilityLayoutGrid = "utility.layout.grid"
    case plantGrowth = "plant.growth"
    case utilityLightbulb = "utility.lightbulb"
    case utilityLink = "utility.link"
    case utilityList = "utility.list"
    case utilityLock = "utility.lock"
    case utilityLogOut = "utility.log.out"
    case utilityMail = "utility.mail"
    case utilityMailCheck = "utility.mail.check"
    case locationPin = "location.pin"
    case utilityMenu = "utility.menu"
    case utilityMessageCircle = "utility.message.circle"
    case utilityMessageSquare = "utility.message.square"
    case utilityMinus = "utility.minus"
    case utilityMonitorSmartphone = "utility.monitor.smartphone"
    case weatherMoon = "weather.moon"
    case utilityMoonStar = "utility.moon.star"
    case utilityMoreHorizontal = "utility.more.horizontal"
    case utilityMove = "utility.move"
    case utilityOrbit = "utility.orbit"
    case utilityPanelLeft = "utility.panel.left"
    case utilityPanelLeftClose = "utility.panel.left.close"
    case utilityPanelLeftOpen = "utility.panel.left.open"
    case actionEdit = "action.edit"
    case utilityPencilLine = "utility.pencil.line"
    case actionAdd = "action.add"
    case utilityPlusCircle = "utility.plus.circle"
    case utilityQuote = "utility.quote"
    case utilityRefreshCw = "utility.refresh.cw"
    case utilityRotateCcw = "utility.rotate.ccw"
    case utilityRotateCw = "utility.rotate.cw"
    case utilitySave = "utility.save"
    case utilityScale = "utility.scale"
    case utilityScanLine = "utility.scan.line"
    case plantPruning = "plant.pruning"
    case actionSearch = "action.search"
    case utilitySettings = "utility.settings"
    case utilitySettings2 = "utility.settings2"
    case utilityShare2 = "utility.share2"
    case utilityShield = "utility.shield"
    case utilityShieldCheck = "utility.shield.check"
    case utilitySlidersHorizontal = "utility.sliders.horizontal"
    case utilitySmartphone = "utility.smartphone"
    case utilitySnowflake = "utility.snowflake"
    case utilitySparkles = "utility.sparkles"
    case plantSprout = "plant.sprout"
    case utilitySquare = "utility.square"
    case utilitySquarePen = "utility.square.pen"
    case utilityStar = "utility.star"
    case utilityStarHalf = "utility.star.half"
    case weatherSun = "weather.sun"
    case utilitySunrise = "utility.sunrise"
    case utilitySunset = "utility.sunset"
    case utilitySwords = "utility.swords"
    case utilityTag = "utility.tag"
    case utilityThermometer = "utility.thermometer"
    case utilityThumbsDown = "utility.thumbs.down"
    case utilityThumbsUp = "utility.thumbs.up"
    case actionDelete = "action.delete"
    case utilityTrees = "utility.trees"
    case utilityTrendingDown = "utility.trending.down"
    case utilityTrendingUp = "utility.trending.up"
    case statusWarningAlt = "status.warning.alt"
    case utilityTrophy = "utility.trophy"
    case utilityUndo2 = "utility.undo2"
    case utilityUpload = "utility.upload"
    case utilityUploadCloud = "utility.upload.cloud"
    case accountUser = "account.user"
    case utilityUserCheck = "utility.user.check"
    case utilityUserMinus = "utility.user.minus"
    case utilityUserPlus = "utility.user.plus"
    case utilityUserX = "utility.user.x"
    case accountUsers = "account.users"
    case utilityWind = "utility.wind"
    case navigationClose = "navigation.close"
    case utilityXCircle = "utility.x.circle"
    case utilityZap = "utility.zap"
    case utilityZoomIn = "utility.zoom.in"
    case utilityZoomOut = "utility.zoom.out"
    case statusLoading = "status.loading"
    case plantSeedling = "plant.seedling"
    case plantWateringCan = "plant.watering.can"
    case plantWilting = "plant.wilting"
    case statusStreak = "status.streak"
    case plantThriving = "plant.thriving"
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
        .utilityActivity: [.rect(3, 3, 18, 18, 2), .path("M17 12h-2l-2 5-2-10-2 5H7")],
        .statusError: [.circle(12, 12, 10), .line(12, 8, 12, 12), .line(12, 16, 12.01, 16)],
        .statusWarning: [.path("m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"), .path("M12 9v4"), .path("M12 17h.01")],
        .utilityAlignJustify: [.path("M3 5h18"), .path("M3 12h18"), .path("M3 19h18")],
        .utilityArrowDown: [.path("m3 16 4 4 4-4"), .path("M7 20V4"), .path("M20 8h-5"), .path("M15 10V6.5a2.5 2.5 0 0 1 5 0V10"), .path("M15 14h5l-5 6h5")],
        .utilityArrowDownToDot: [.path("M12 2v14"), .path("m19 9-7 7-7-7"), .circle(12, 21, 1)],
        .navigationBack: [.circle(12, 12, 10), .path("m12 8-4 4 4 4"), .path("M16 12H8")],
        .navigationForward: [.circle(12, 12, 10), .path("m12 16 4-4-4-4"), .path("M8 12h8")],
        .utilityArrowUp: [.path("m3 8 4-4 4 4"), .path("M7 4v16"), .path("M20 8h-5"), .path("M15 10V6.5a2.5 2.5 0 0 1 5 0V10"), .path("M15 14h5l-5 6h5")],
        .utilityArrowUpFromDot: [.path("m5 9 7-7 7 7"), .path("M12 16V2"), .circle(12, 21, 1)],
        .utilityAward: [.path("m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"), .circle(12, 8, 6)],
        .utilityBaby: [.path("M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"), .path("M15 12h.01"), .path("M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"), .path("M9 12h.01")],
        .utilityBadgeCheck: [.path("M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"), .path("m9 12 2 2 4-4")],
        .utilityBarChart3: [.path("M3 3v16a2 2 0 0 0 2 2h16"), .path("M18 17V9"), .path("M13 17V5"), .path("M8 17v-3")],
        .utilityBell: [.path("M10.268 21a2 2 0 0 0 3.464 0"), .path("M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348"), .circle(18, 5, 3)],
        .utilityBellOff: [.path("M10.268 21a2 2 0 0 0 3.464 0"), .path("M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"), .path("m2 2 20 20"), .path("M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05")],
        .utilityBot: [.path("M12 6V2H8"), .path("M15 11v2"), .path("M2 12h2"), .path("M20 12h2"), .path("M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"), .path("M9 11v2")],
        .utilityBrain: [.path("M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"), .path("M9 13a4.5 4.5 0 0 0 3-4"), .path("M6.003 5.125A3 3 0 0 0 6.401 6.5"), .path("M3.477 10.896a4 4 0 0 1 .585-.396"), .path("M6 18a4 4 0 0 1-1.967-.516"), .path("M12 13h4"), .path("M12 18h6a2 2 0 0 1 2 2v1"), .path("M12 8h8"), .path("M16 8V5a2 2 0 0 1 2-2"), .circle(16, 13, 0.5), .circle(18, 3, 0.5), .circle(20, 21, 0.5), .circle(20, 8, 0.5)],
        .utilityBug: [.path("M12 20v-8"), .path("M12.656 7H14a4 4 0 0 1 4 4v1.344"), .path("M14.12 3.88 16 2"), .path("M17.123 17.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287"), .path("m2 2 20 20"), .path("M21 5a4 4 0 0 1-3.55 3.97"), .path("M22 13h-3.344"), .path("M3 21a4 4 0 0 1 3.81-4"), .path("M3 5a4 4 0 0 0 3.55 3.97"), .path("M6 13H2"), .path("m8 2 1.88 1.88"), .path("M9.712 4.06A3 3 0 0 1 15 6v1.13")],
        .utilityCake: [.path("M16 13H3"), .path("M16 17H3"), .path("m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6"), .circle(9, 7, 2)],
        .calendarDate: [.path("M11 14h1v4"), .path("M16 2v4"), .path("M3 10h18"), .path("M8 2v4"), .rect(3, 4, 18, 18, 2)],
        .utilityCalendarClock: [.path("M16 14v2.2l1.6 1"), .path("M16 2v4"), .path("M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"), .path("M3 10h5"), .path("M8 2v4"), .circle(16, 16, 6)],
        .utilityCalendarDays: [.path("M8 2v4"), .path("M16 2v4"), .rect(3, 4, 18, 18, 2), .path("M3 10h18"), .path("M8 14h.01"), .path("M12 14h.01"), .path("M16 14h.01"), .path("M8 18h.01"), .path("M12 18h.01"), .path("M16 18h.01")],
        .utilityCamera: [.path("M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"), .circle(12, 13, 3)],
        .statusSuccess: [.path("M21.801 10A10 10 0 1 1 17 3.335"), .path("m9 11 3 3L22 4")],
        .utilityCheckCheck: [.path("M18 6 7 17l-5-5"), .path("m22 10-7.5 7.5L13 16")],
        .statusSuccessCircle: [.path("M21.801 10A10 10 0 1 1 17 3.335"), .path("m9 11 3 3L22 4")],
        .statusSuccessCircleAlt: [.circle(12, 12, 10), .path("m9 12 2 2 4-4")],
        .navigationExpand: [.circle(12, 12, 10), .path("m16 10-4 4-4-4")],
        .navigationPrevious: [.circle(12, 12, 10), .path("m14 16-4-4 4-4")],
        .navigationNext: [.circle(12, 12, 10), .path("m10 8 4 4-4 4")],
        .navigationCollapse: [.circle(12, 12, 10), .path("m8 14 4-4 4 4")],
        .utilityChevronsUpDown: [.path("m7 15 5 5 5-5"), .path("m7 9 5-5 5 5")],
        .utilityCircle: [.circle(12, 12, 10), .line(12, 8, 12, 12), .line(12, 16, 12.01, 16)],
        .calendarTime: [.circle(12, 12, 10), .path("M12 6v6l2-4")],
        .weatherCloud: [.path("M12 13v8l-4-4"), .path("m12 21 4-4"), .path("M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284")],
        .utilityCloudDrizzle: [.path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"), .path("M8 19v1"), .path("M8 14v1"), .path("M16 19v1"), .path("M16 14v1"), .path("M12 21v1"), .path("M12 16v1")],
        .utilityCloudFog: [.path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"), .path("M16 17H7"), .path("M17 21H9")],
        .utilityCloudLightning: [.path("M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"), .path("m13 12-3 5h4l-3 5")],
        .utilityCloudMoon: [.path("M11 20v2"), .path("M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36"), .path("M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"), .path("M7 19v2")],
        .utilityCloudRain: [.path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"), .path("m9.2 22 3-7"), .path("m9 13-3 7"), .path("m17 13-3 7")],
        .utilityCloudSnow: [.path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"), .path("M8 15h.01"), .path("M8 19h.01"), .path("M12 17h.01"), .path("M12 21h.01"), .path("M16 15h.01"), .path("M16 19h.01")],
        .utilityCloudSun: [.path("M12 2v2"), .path("m4.93 4.93 1.41 1.41"), .path("M20 12h2"), .path("m19.07 4.93-1.41 1.41"), .path("M15.947 12.65a4 4 0 0 0-5.925-4.128"), .path("M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"), .path("M11 20v2"), .path("M7 19v2")],
        .utilityCode: [.path("m18 16 4-4-4-4"), .path("m6 8-4 4 4 4"), .path("m14.5 4-5 16")],
        .utilityCookie: [.path("M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"), .path("M8.5 8.5v.01"), .path("M16 15.5v.01"), .path("M12 12v.01"), .path("M11 17v.01"), .path("M7 14v.01")],
        .utilityCopy: [.path("m12 15 2 2 4-4"), .rect(8, 8, 14, 14, 2), .path("M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2")],
        .utilityCrown: [.path("M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"), .path("M5 21h14")],
        .utilityDatabase: [.ellipse(12, 5, 9, 3), .path("M3 12a9 3 0 0 0 5 2.69"), .path("M21 9.3V5"), .path("M3 5v14a9 3 0 0 0 6.47 2.88"), .path("M12 12v4h4"), .path("M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16")],
        .utilityDna: [.path("M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8"), .path("m17 6-2.891-2.891"), .path("M2 15c3.333-3 6.667-3 10-3"), .path("m2 2 20 20"), .path("m20 9 .891.891"), .path("M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1"), .path("M3.109 14.109 4 15"), .path("m6.5 12.5 1 1"), .path("m7 18 2.891 2.891"), .path("M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16")],
        .plantWatering: [.path("M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"), .path("M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97")],
        .utilityEye: [.path("m15 18-.722-3.25"), .path("M2 8a10.645 10.645 0 0 0 20 0"), .path("m20 15-1.726-2.05"), .path("m4 15 1.726-2.05"), .path("m9 18 .722-3.25")],
        .utilityEyeOff: [.path("M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"), .path("M14.084 14.158a3 3 0 0 1-4.242-4.242"), .path("M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"), .path("m2 2 20 20")],
        .utilityFilter: [.path("M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"), .path("m16.5 3.5 5 5"), .path("m21.5 3.5-5 5")],
        .utilityFlame: [.path("M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"), .path("m5 22 14-4"), .path("m5 18 14 4")],
        .utilityFlaskConical: [.path("M10 2v2.343"), .path("M14 2v6.343"), .path("m2 2 20 20"), .path("M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563"), .path("M6.453 15H15"), .path("M8.5 2h7")],
        .utilityFlipHorizontal2: [.path("m3 7 5 5-5 5V7"), .path("m21 7-5 5 5 5V7"), .path("M12 20v2"), .path("M12 14v2"), .path("M12 8v2"), .path("M12 2v2")],
        .utilityFlower2: [.path("M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"), .circle(12, 8, 2), .path("M12 10v12"), .path("M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"), .path("M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z")],
        .utilityGlobe: [.path("M21.54 15H17a2 2 0 0 0-2 2v4.54"), .path("M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"), .path("M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"), .circle(12, 12, 10)],
        .utilityGrid2x2: [.path("M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"), .path("m16 19 2 2 4-4")],
        .utilityHand: [.path("M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"), .path("M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"), .path("M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"), .path("M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"), .path("M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0")],
        .utilityHandshake: [.path("m11 17 2 2a1 1 0 1 0 3-3"), .path("m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"), .path("m21 3 1 11h-2"), .path("M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"), .path("M3 4h8")],
        .utilityHeart: [.path("M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15"), .path("M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z")],
        .utilityHelpCircle: [.circle(12, 12, 10), .path("M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"), .path("M12 17h.01")],
        .utilityHistory: [.path("M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"), .path("M3 3v5h5"), .path("M12 7v5l4 2")],
        .navigationHome: [.path("M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"), .path("M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z")],
        .utilityImage: [.path("M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"), .path("m14 19 3 3v-5.5"), .path("m17 22 3-3"), .circle(9, 9, 2)],
        .utilityInbox: [.polyline("22 12 16 12 14 15 10 15 8 12 2 12"), .path("M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z")],
        .statusInfo: [.circle(12, 12, 10), .path("M12 16v-4"), .path("M12 8h.01")],
        .utilityKey: [.path("M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"), .circle(16.5, 7.5, 0.5)],
        .utilityLayoutGrid: [.rect(3, 3, 7, 7, 1), .rect(14, 3, 7, 7, 1), .rect(14, 14, 7, 7, 1), .rect(3, 14, 7, 7, 1)],
        .plantGrowth: [.path("M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"), .path("M2 22 17 7")],
        .utilityLightbulb: [.path("M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"), .path("m2 2 20 20"), .path("M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"), .path("M9 18h6"), .path("M10 22h4")],
        .utilityLink: [.path("M9 17H7A5 5 0 0 1 7 7"), .path("M15 7h2a5 5 0 0 1 4 8"), .line(8, 12, 12, 12), .line(2, 2, 22, 22)],
        .utilityList: [.path("M21 5H11"), .path("M21 12H11"), .path("M21 19H11"), .path("m7 8-4 4 4 4")],
        .utilityLock: [.circle(12, 16, 1), .rect(3, 10, 18, 12, 2), .path("M7 10V7a5 5 0 0 1 9.33-2.5")],
        .utilityLogOut: [.path("m16 17 5-5-5-5"), .path("M21 12H9"), .path("M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4")],
        .utilityMail: [.path("M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"), .path("m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"), .path("M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"), .path("M20 22v.01")],
        .utilityMailCheck: [.path("M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"), .path("m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"), .path("m16 19 2 2 4-4")],
        .locationPin: [.path("M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468"), .path("M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"), .circle(10, 10, 3)],
        .utilityMenu: [.rect(3, 3, 18, 18, 2), .path("M7 8h10"), .path("M7 12h10"), .path("M7 16h10")],
        .utilityMessageCircle: [.path("M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"), .path("M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"), .path("M12 17h.01")],
        .utilityMessageSquare: [.path("M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"), .path("m9 11 2 2 4-4")],
        .utilityMinus: [.circle(12, 12, 10), .path("M8 12h8")],
        .utilityMonitorSmartphone: [.path("M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"), .path("M10 19v-3.96 3.15"), .path("M7 19h5"), .rect(16, 12, 6, 10, 2)],
        .weatherMoon: [.path("M18 5h4"), .path("M20 3v4"), .path("M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401")],
        .utilityMoonStar: [.path("M18 5h4"), .path("M20 3v4"), .path("M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401")],
        .utilityMoreHorizontal: [.circle(12, 12, 1), .circle(19, 12, 1), .circle(5, 12, 1)],
        .utilityMove: [.path("M5 3v16h16"), .path("m5 19 6-6"), .path("m2 6 3-3 3 3"), .path("m18 16 3 3-3 3")],
        .utilityOrbit: [.path("M20.341 6.484A10 10 0 0 1 10.266 21.85"), .path("M3.659 17.516A10 10 0 0 1 13.74 2.152"), .circle(12, 12, 3), .circle(19, 5, 2), .circle(5, 19, 2)],
        .utilityPanelLeft: [.rect(3, 3, 18, 18, 2), .path("M9 3v18"), .path("m16 15-3-3 3-3")],
        .utilityPanelLeftClose: [.rect(3, 3, 18, 18, 2), .path("M9 3v18"), .path("m16 15-3-3 3-3")],
        .utilityPanelLeftOpen: [.rect(3, 3, 18, 18, 2), .path("M9 3v18"), .path("m14 9 3 3-3 3")],
        .actionEdit: [.path("M13 21h8"), .path("m15 5 4 4"), .path("M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z")],
        .utilityPencilLine: [.path("M13 21h8"), .path("m15 5 4 4"), .path("M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z")],
        .actionAdd: [.circle(12, 12, 10), .path("M8 12h8"), .path("M12 8v8")],
        .utilityPlusCircle: [.circle(12, 12, 10), .path("M8 12h8"), .path("M12 8v8")],
        .utilityQuote: [.path("M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"), .path("M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z")],
        .utilityRefreshCw: [.path("M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"), .path("M8 16H3v5"), .path("M3 12C3 9.51 4 7.26 5.64 5.64"), .path("m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"), .path("M21 12c0 1-.16 1.97-.47 2.87"), .path("M21 3v5h-5"), .path("M22 22 2 2")],
        .utilityRotateCcw: [.path("M12 7v6"), .path("M12 9h2"), .path("M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8"), .path("M3 3v5h5"), .circle(12, 15, 2)],
        .utilityRotateCw: [.path("M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"), .path("M21 3v5h-5")],
        .utilitySave: [.path("M10 2v3a1 1 0 0 0 1 1h5"), .path("M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"), .path("M18 22H4a2 2 0 0 1-2-2V6"), .path("M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z")],
        .utilityScale: [.path("M5 7v11a1 1 0 0 0 1 1h11"), .path("M5.293 18.707 11 13"), .circle(19, 19, 2), .circle(5, 5, 2)],
        .utilityScanLine: [.path("M3 7V5a2 2 0 0 1 2-2h2"), .path("M17 3h2a2 2 0 0 1 2 2v2"), .path("M21 17v2a2 2 0 0 1-2 2h-2"), .path("M7 21H5a2 2 0 0 1-2-2v-2"), .path("M7 12h10")],
        .plantPruning: [.line(5, 3, 19, 3), .line(3, 5, 3, 19), .line(21, 5, 21, 19), .line(9, 21, 10, 21), .line(14, 21, 15, 21), .path("M 3 5 A2 2 0 0 1 5 3"), .path("M 19 3 A2 2 0 0 1 21 5"), .path("M 5 21 A2 2 0 0 1 3 19"), .path("M 21 19 A2 2 0 0 1 19 21"), .circle(8.5, 8.5, 1.5), .line(9.56066, 9.56066, 12, 12), .line(17, 17, 14.82, 14.82), .circle(8.5, 15.5, 1.5), .line(9.56066, 14.43934, 17, 7)],
        .actionSearch: [.circle(11, 11, 8), .path("m21 21-4.3-4.3"), .path("M11 7v4"), .path("M11 15h.01")],
        .utilitySettings: [.path("M14 17H5"), .path("M19 7h-9"), .circle(17, 17, 3), .circle(7, 7, 3)],
        .utilitySettings2: [.path("M14 17H5"), .path("M19 7h-9"), .circle(17, 17, 3), .circle(7, 7, 3)],
        .utilityShare2: [.circle(18, 5, 3), .circle(6, 12, 3), .circle(18, 19, 3), .line(8.59, 13.51, 15.42, 17.49), .line(15.41, 6.51, 8.59, 10.49)],
        .utilityShield: [.path("M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"), .path("M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"), .path("M12 17h.01")],
        .utilityShieldCheck: [.path("M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"), .path("m9 12 2 2 4-4")],
        .utilitySlidersHorizontal: [.path("M10 5H3"), .path("M12 19H3"), .path("M14 3v4"), .path("M16 17v4"), .path("M21 12h-9"), .path("M21 19h-5"), .path("M21 5h-7"), .path("M8 10v4"), .path("M8 12H3")],
        .utilitySmartphone: [.rect(2, 6, 7, 12, 1), .path("M13 8.32a7.43 7.43 0 0 1 0 7.36"), .path("M16.46 6.21a11.76 11.76 0 0 1 0 11.58"), .path("M19.91 4.1a15.91 15.91 0 0 1 .01 15.8")],
        .utilitySnowflake: [.path("m10 20-1.25-2.5L6 18"), .path("M10 4 8.75 6.5 6 6"), .path("m14 20 1.25-2.5L18 18"), .path("m14 4 1.25 2.5L18 6"), .path("m17 21-3-6h-4"), .path("m17 3-3 6 1.5 3"), .path("M2 12h6.5L10 9"), .path("m20 10-1.5 2 1.5 2"), .path("M22 12h-6.5L14 15"), .path("m4 10 1.5 2L4 14"), .path("m7 21 3-6-1.5-3"), .path("m7 3 3 6h4")],
        .utilitySparkles: [.path("M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"), .path("M20 2v4"), .path("M22 4h-4"), .circle(4, 20, 2)],
        .plantSprout: [.path("M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"), .path("M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"), .path("M5 21h14")],
        .utilitySquare: [.rect(3, 3, 18, 18, 2), .path("M17 12h-2l-2 5-2-10-2 5H7")],
        .utilitySquarePen: [.path("M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"), .path("M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z")],
        .utilityStar: [.path("M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"), .path("M20 2v4"), .path("M22 4h-4"), .circle(4, 20, 2)],
        .utilityStarHalf: [.path("M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2")],
        .weatherSun: [.circle(12, 12, 4), .path("M12 4h.01"), .path("M20 12h.01"), .path("M12 20h.01"), .path("M4 12h.01"), .path("M17.657 6.343h.01"), .path("M17.657 17.657h.01"), .path("M6.343 17.657h.01"), .path("M6.343 6.343h.01")],
        .utilitySunrise: [.path("M12 2v8"), .path("m4.93 10.93 1.41 1.41"), .path("M2 18h2"), .path("M20 18h2"), .path("m19.07 10.93-1.41 1.41"), .path("M22 22H2"), .path("m8 6 4-4 4 4"), .path("M16 18a4 4 0 0 0-8 0")],
        .utilitySunset: [.path("M12 10V2"), .path("m4.93 10.93 1.41 1.41"), .path("M2 18h2"), .path("M20 18h2"), .path("m19.07 10.93-1.41 1.41"), .path("M22 22H2"), .path("m16 6-4 4-4-4"), .path("M16 18a4 4 0 0 0-8 0")],
        .utilitySwords: [.polyline("14.5 17.5 3 6 3 3 6 3 17.5 14.5"), .line(13, 19, 19, 13), .line(16, 16, 20, 20), .line(19, 21, 21, 19), .polyline("14.5 6.5 18 3 21 3 21 6 17.5 9.5"), .line(5, 14, 9, 18), .line(7, 17, 4, 20), .line(3, 19, 5, 21)],
        .utilityTag: [.path("M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"), .circle(7.5, 7.5, 0.5)],
        .utilityThermometer: [.path("m10 20-1.25-2.5L6 18"), .path("M10 4 8.75 6.5 6 6"), .path("M10.585 15H10"), .path("M2 12h6.5L10 9"), .path("M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"), .path("m4 10 1.5 2L4 14"), .path("m7 21 3-6-1.5-3"), .path("m7 3 3 6h2")],
        .utilityThumbsDown: [.path("M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"), .path("M17 14V2")],
        .utilityThumbsUp: [.path("M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"), .path("M7 10v12")],
        .actionDelete: [.path("M10 11v6"), .path("M14 11v6"), .path("M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"), .path("M3 6h18"), .path("M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2")],
        .utilityTrees: [.path("M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"), .path("M7 16v6"), .path("M13 19v3"), .path("M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5")],
        .utilityTrendingDown: [.path("M16 17h6v-6"), .path("m22 17-8.5-8.5-5 5L2 7")],
        .utilityTrendingUp: [.path("M14.828 14.828 21 21"), .path("M21 16v5h-5"), .path("m21 3-9 9-4-4-6 6"), .path("M21 8V3h-5")],
        .statusWarningAlt: [.path("m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"), .path("M12 9v4"), .path("M12 17h.01")],
        .utilityTrophy: [.path("M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"), .path("M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"), .path("M18 9h1.5a1 1 0 0 0 0-5H18"), .path("M4 22h16"), .path("M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"), .path("M6 9H4.5a1 1 0 0 1 0-5H6")],
        .utilityUndo2: [.path("M9 14 4 9l5-5"), .path("M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11")],
        .utilityUpload: [.path("M12 13v8"), .path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"), .path("m8 17 4-4 4 4")],
        .utilityUploadCloud: [.path("M12 13v8"), .path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"), .path("m8 17 4-4 4 4")],
        .accountUser: [.path("M18 20a6 6 0 0 0-12 0"), .circle(12, 10, 4), .circle(12, 12, 10)],
        .utilityUserCheck: [.path("M2 21a8 8 0 0 1 13.292-6"), .circle(10, 8, 5), .path("m16 19 2 2 4-4")],
        .utilityUserMinus: [.path("M2 21a8 8 0 0 1 13.292-6"), .circle(10, 8, 5), .path("M22 19h-6")],
        .utilityUserPlus: [.path("M2 21a8 8 0 0 1 13.292-6"), .circle(10, 8, 5), .path("M19 16v6"), .path("M22 19h-6")],
        .utilityUserX: [.path("M2 21a8 8 0 0 1 11.873-7"), .circle(10, 8, 5), .path("m17 17 5 5"), .path("m22 17-5 5")],
        .accountUsers: [.path("M18 21a8 8 0 0 0-16 0"), .circle(10, 8, 5), .path("M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3")],
        .utilityWind: [.path("M10 2v8"), .path("M12.8 21.6A2 2 0 1 0 14 18H2"), .path("M17.5 10a2.5 2.5 0 1 1 2 4H2"), .path("m6 6 4 4 4-4")],
        .navigationClose: [.circle(12, 12, 10), .path("m15 9-6 6"), .path("m9 9 6 6")],
        .utilityXCircle: [.circle(12, 12, 10), .path("m15 9-6 6"), .path("m9 9 6 6")],
        .utilityZap: [.path("M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"), .path("M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"), .path("M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"), .path("m2 2 20 20")],
        .utilityZoomIn: [.circle(11, 11, 8), .line(21, 21, 16.65, 16.65), .line(11, 8, 11, 14), .line(8, 11, 14, 11)],
        .utilityZoomOut: [.circle(11, 11, 8), .line(21, 21, 16.65, 16.65), .line(8, 11, 14, 11)],
        .statusLoading: [.path("M21 12a9 9 0 1 1-6.219-8.56")],
        .plantSeedling: [.path("M12 21V10"), .path("M7 10c0-4 2.5-6 5-6s5 2 5 6"), .path("M7 14c0 0 1-3 5-3")],
        .plantWateringCan: [.path("M3 18a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H3z"), .path("M15 8h2a2 2 0 0 1 2 2v0"), .path("M3 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"), .line(17, 16, 21, 12), .line(17, 12, 21, 16)],
        .plantWilting: [.path("M12 21V8"), .path("M12 8C12 8 8 6 7 3c3 0 5 1 5 5z"), .path("M12 8C12 8 16 6 17 3c-3 0-5 1-5 5z"), .path("M9 14c-1 1-3 1-4 0"), .path("M15 14c1 1 3 1 4 0")],
        .statusStreak: [.path("M8.5 14.5A2.5 2.5 0 0 0 11 17c1.38 0 2.5-1.12 2.5-2.5 0-1.5-1.5-2.5-1.5-4.5 0 0 2 1 2 3.5A4 4 0 0 0 18 9.5c-2 0-3-1-4-3-1 2-4 2-5 6A4 4 0 0 0 8.5 14.5z")],
        .plantThriving: [.path("M12 21V12"), .path("M5 12C5 7 8 4 12 4s7 3 7 8"), .path("M9 16c0 0 1.5-3 3-3s3 3 3 3"), .path("M7 9c0 0 2-1 5-1")]
]

private let plantimIconAccessibility: [PlantimIconName: String] = [
    .utilityActivity: "decorative",
    .statusError: "status",
    .statusWarning: "status",
    .utilityAlignJustify: "decorative",
    .utilityArrowDown: "decorative",
    .utilityArrowDownToDot: "decorative",
    .navigationBack: "decorative",
    .navigationForward: "decorative",
    .utilityArrowUp: "decorative",
    .utilityArrowUpFromDot: "decorative",
    .utilityAward: "decorative",
    .utilityBaby: "decorative",
    .utilityBadgeCheck: "decorative",
    .utilityBarChart3: "decorative",
    .utilityBell: "decorative",
    .utilityBellOff: "decorative",
    .utilityBot: "decorative",
    .utilityBrain: "decorative",
    .utilityBug: "decorative",
    .utilityCake: "decorative",
    .calendarDate: "decorative",
    .utilityCalendarClock: "decorative",
    .utilityCalendarDays: "decorative",
    .utilityCamera: "decorative",
    .statusSuccess: "status",
    .utilityCheckCheck: "decorative",
    .statusSuccessCircle: "status",
    .statusSuccessCircleAlt: "status",
    .navigationExpand: "decorative",
    .navigationPrevious: "decorative",
    .navigationNext: "decorative",
    .navigationCollapse: "decorative",
    .utilityChevronsUpDown: "decorative",
    .utilityCircle: "decorative",
    .calendarTime: "decorative",
    .weatherCloud: "decorative",
    .utilityCloudDrizzle: "decorative",
    .utilityCloudFog: "decorative",
    .utilityCloudLightning: "decorative",
    .utilityCloudMoon: "decorative",
    .utilityCloudRain: "decorative",
    .utilityCloudSnow: "decorative",
    .utilityCloudSun: "decorative",
    .utilityCode: "decorative",
    .utilityCookie: "decorative",
    .utilityCopy: "decorative",
    .utilityCrown: "decorative",
    .utilityDatabase: "decorative",
    .utilityDna: "decorative",
    .plantWatering: "decorative",
    .utilityEye: "decorative",
    .utilityEyeOff: "decorative",
    .utilityFilter: "decorative",
    .utilityFlame: "decorative",
    .utilityFlaskConical: "decorative",
    .utilityFlipHorizontal2: "decorative",
    .utilityFlower2: "decorative",
    .utilityGlobe: "decorative",
    .utilityGrid2x2: "decorative",
    .utilityHand: "decorative",
    .utilityHandshake: "decorative",
    .utilityHeart: "decorative",
    .utilityHelpCircle: "decorative",
    .utilityHistory: "decorative",
    .navigationHome: "decorative",
    .utilityImage: "decorative",
    .utilityInbox: "decorative",
    .statusInfo: "status",
    .utilityKey: "decorative",
    .utilityLayoutGrid: "decorative",
    .plantGrowth: "decorative",
    .utilityLightbulb: "decorative",
    .utilityLink: "decorative",
    .utilityList: "decorative",
    .utilityLock: "decorative",
    .utilityLogOut: "decorative",
    .utilityMail: "decorative",
    .utilityMailCheck: "decorative",
    .locationPin: "decorative",
    .utilityMenu: "decorative",
    .utilityMessageCircle: "decorative",
    .utilityMessageSquare: "decorative",
    .utilityMinus: "decorative",
    .utilityMonitorSmartphone: "decorative",
    .weatherMoon: "decorative",
    .utilityMoonStar: "decorative",
    .utilityMoreHorizontal: "decorative",
    .utilityMove: "decorative",
    .utilityOrbit: "decorative",
    .utilityPanelLeft: "decorative",
    .utilityPanelLeftClose: "decorative",
    .utilityPanelLeftOpen: "decorative",
    .actionEdit: "decorative",
    .utilityPencilLine: "decorative",
    .actionAdd: "decorative",
    .utilityPlusCircle: "decorative",
    .utilityQuote: "decorative",
    .utilityRefreshCw: "decorative",
    .utilityRotateCcw: "decorative",
    .utilityRotateCw: "decorative",
    .utilitySave: "decorative",
    .utilityScale: "decorative",
    .utilityScanLine: "decorative",
    .plantPruning: "decorative",
    .actionSearch: "decorative",
    .utilitySettings: "decorative",
    .utilitySettings2: "decorative",
    .utilityShare2: "decorative",
    .utilityShield: "decorative",
    .utilityShieldCheck: "decorative",
    .utilitySlidersHorizontal: "decorative",
    .utilitySmartphone: "decorative",
    .utilitySnowflake: "decorative",
    .utilitySparkles: "decorative",
    .plantSprout: "decorative",
    .utilitySquare: "decorative",
    .utilitySquarePen: "decorative",
    .utilityStar: "decorative",
    .utilityStarHalf: "decorative",
    .weatherSun: "decorative",
    .utilitySunrise: "decorative",
    .utilitySunset: "decorative",
    .utilitySwords: "decorative",
    .utilityTag: "decorative",
    .utilityThermometer: "decorative",
    .utilityThumbsDown: "decorative",
    .utilityThumbsUp: "decorative",
    .actionDelete: "decorative",
    .utilityTrees: "decorative",
    .utilityTrendingDown: "decorative",
    .utilityTrendingUp: "decorative",
    .statusWarningAlt: "status",
    .utilityTrophy: "decorative",
    .utilityUndo2: "decorative",
    .utilityUpload: "decorative",
    .utilityUploadCloud: "decorative",
    .accountUser: "decorative",
    .utilityUserCheck: "decorative",
    .utilityUserMinus: "decorative",
    .utilityUserPlus: "decorative",
    .utilityUserX: "decorative",
    .accountUsers: "decorative",
    .utilityWind: "decorative",
    .navigationClose: "decorative",
    .utilityXCircle: "decorative",
    .utilityZap: "decorative",
    .utilityZoomIn: "decorative",
    .utilityZoomOut: "decorative",
    .statusLoading: "status",
    .plantSeedling: "decorative",
    .plantWateringCan: "decorative",
    .plantWilting: "decorative",
    .statusStreak: "status",
    .plantThriving: "decorative"
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
