import SwiftUI
import Foundation
#if os(iOS) || os(tvOS) || os(visionOS)
import UIKit
#elseif os(macOS)
import AppKit
#endif

public enum PlantimIconsV4Metadata {
    public static let version = "4.0.0"
    public static let registryHash = "f12d51dd066e0493bb460f13ca0d9c957e58542320303fbce9aadf893972be4b"
    public static let iconCount = 237
}

public enum PlantimIconV4Name: String, CaseIterable, Sendable {
    case accountUser = "account.user"
    case accountUsers = "account.users"
    case actionAdd = "action.add"
    case actionDelete = "action.delete"
    case actionEdit = "action.edit"
    case actionSearch = "action.search"
    case calendarDate = "calendar.date"
    case calendarTime = "calendar.time"
    case careFertilizing = "care.fertilizing"
    case careFertilizingAlt = "care.fertilizing.alt"
    case careLog = "care.log"
    case carePruning = "care.pruning"
    case carePruningAlt = "care.pruning.alt"
    case careReminder = "care.reminder"
    case careRepotting = "care.repotting"
    case careRepottingAlt = "care.repotting.alt"
    case careSuggestion = "care.suggestion"
    case careWatering = "care.watering"
    case careWateringAlt = "care.watering.alt"
    case familyApiaceae = "family.apiaceae"
    case familyAraceae = "family.araceae"
    case familyArecaceae = "family.arecaceae"
    case familyAsparagaceae = "family.asparagaceae"
    case familyAsphodelaceae = "family.asphodelaceae"
    case familyBegoniaceae = "family.begoniaceae"
    case familyBromeliaceae = "family.bromeliaceae"
    case familyCactaceae = "family.cactaceae"
    case familyCrassulaceae = "family.crassulaceae"
    case familyLamiaceae = "family.lamiaceae"
    case familyMarantaceae = "family.marantaceae"
    case familyMoraceae = "family.moraceae"
    case familyNephrolepidaceae = "family.nephrolepidaceae"
    case familyOrchidaceae = "family.orchidaceae"
    case familyPiperaceae = "family.piperaceae"
    case familyPolypodiaceae = "family.polypodiaceae"
    case gardenCompost = "garden.compost"
    case gardenFork = "garden.fork"
    case gardenGloves = "garden.gloves"
    case gardenGreenhouse = "garden.greenhouse"
    case gardenHoe = "garden.hoe"
    case gardenHose = "garden.hose"
    case gardenPot = "garden.pot"
    case gardenRake = "garden.rake"
    case gardenSeedPacket = "garden.seed-packet"
    case gardenShears = "garden.shears"
    case gardenSpade = "garden.spade"
    case gardenSprinkler = "garden.sprinkler"
    case gardenTrowel = "garden.trowel"
    case gardenWheelbarrow = "garden.wheelbarrow"
    case genusAloe = "genus.aloe"
    case genusCactus = "genus.cactus"
    case genusCalathea = "genus.calathea"
    case genusFern = "genus.fern"
    case genusFicus = "genus.ficus"
    case genusMonstera = "genus.monstera"
    case genusOrchid = "genus.orchid"
    case genusPalm = "genus.palm"
    case genusPeperomia = "genus.peperomia"
    case genusPothos = "genus.pothos"
    case genusSansevieria = "genus.sansevieria"
    case genusSucculent = "genus.succulent"
    case healthAttention = "health.attention"
    case healthCritical = "health.critical"
    case healthHealthy = "health.healthy"
    case locationPin = "location.pin"
    case navCalendarCheck = "nav.calendar.check"
    case navCalendarLeaf = "nav.calendar.leaf"
    case navCalendarPlain = "nav.calendar.plain"
    case navChatBubble = "nav.chat.bubble"
    case navChatDots = "nav.chat.dots"
    case navChatLeaf = "nav.chat.leaf"
    case navFeedCards = "nav.feed.cards"
    case navFeedStream = "nav.feed.stream"
    case navFeedWaves = "nav.feed.waves"
    case navGardenBeds = "nav.garden.beds"
    case navGardenPlot = "nav.garden.plot"
    case navGardenSprouts = "nav.garden.sprouts"
    case navPlantLeaf = "nav.plant.leaf"
    case navPlantPotted = "nav.plant.potted"
    case navPlantSprout = "nav.plant.sprout"
    case navTodayLeaf = "nav.today.leaf"
    case navTodaySun = "nav.today.sun"
    case navTodaySunrise = "nav.today.sunrise"
    case navigationBack = "navigation.back"
    case navigationClose = "navigation.close"
    case navigationCollapse = "navigation.collapse"
    case navigationExpand = "navigation.expand"
    case navigationForward = "navigation.forward"
    case navigationHome = "navigation.home"
    case navigationNext = "navigation.next"
    case navigationPrevious = "navigation.previous"
    case plantAdd = "plant.add"
    case plantGrowth = "plant.growth"
    case plantPruning = "plant.pruning"
    case plantRelated = "plant.related"
    case plantRemove = "plant.remove"
    case plantSeedling = "plant.seedling"
    case plantSprout = "plant.sprout"
    case plantThriving = "plant.thriving"
    case plantWatering = "plant.watering"
    case plantWateringCan = "plant.watering.can"
    case plantWilting = "plant.wilting"
    case stageGrowing = "stage.growing"
    case stageMature = "stage.mature"
    case stageSeedling = "stage.seedling"
    case statusError = "status.error"
    case statusInfo = "status.info"
    case statusLoading = "status.loading"
    case statusStreak = "status.streak"
    case statusSuccess = "status.success"
    case statusSuccessCircle = "status.success.circle"
    case statusSuccessCircleAlt = "status.success.circle.alt"
    case statusWarning = "status.warning"
    case statusWarningAlt = "status.warning.alt"
    case taxonomyFamily = "taxonomy.family"
    case taxonomyGenus = "taxonomy.genus"
    case taxonomySpecies = "taxonomy.species"
    case utilityActivity = "utility.activity"
    case utilityAlignJustify = "utility.align.justify"
    case utilityArrowDown = "utility.arrow.down"
    case utilityArrowDownToDot = "utility.arrow.down.to.dot"
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
    case utilityCalendarClock = "utility.calendar.clock"
    case utilityCalendarDays = "utility.calendar.days"
    case utilityCamera = "utility.camera"
    case utilityCheckCheck = "utility.check.check"
    case utilityChevronsUpDown = "utility.chevrons.up.down"
    case utilityCircle = "utility.circle"
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
    case utilityImage = "utility.image"
    case utilityInbox = "utility.inbox"
    case utilityKey = "utility.key"
    case utilityLayoutGrid = "utility.layout.grid"
    case utilityLightbulb = "utility.lightbulb"
    case utilityLink = "utility.link"
    case utilityList = "utility.list"
    case utilityLock = "utility.lock"
    case utilityLogOut = "utility.log.out"
    case utilityMail = "utility.mail"
    case utilityMailCheck = "utility.mail.check"
    case utilityMenu = "utility.menu"
    case utilityMessageCircle = "utility.message.circle"
    case utilityMessageSquare = "utility.message.square"
    case utilityMinus = "utility.minus"
    case utilityMonitorSmartphone = "utility.monitor.smartphone"
    case utilityMoonStar = "utility.moon.star"
    case utilityMoreHorizontal = "utility.more.horizontal"
    case utilityMove = "utility.move"
    case utilityOrbit = "utility.orbit"
    case utilityPanelLeft = "utility.panel.left"
    case utilityPanelLeftClose = "utility.panel.left.close"
    case utilityPanelLeftOpen = "utility.panel.left.open"
    case utilityPencilLine = "utility.pencil.line"
    case utilityPlusCircle = "utility.plus.circle"
    case utilityQuote = "utility.quote"
    case utilityRefreshCw = "utility.refresh.cw"
    case utilityRotateCcw = "utility.rotate.ccw"
    case utilityRotateCw = "utility.rotate.cw"
    case utilitySave = "utility.save"
    case utilityScale = "utility.scale"
    case utilityScanLine = "utility.scan.line"
    case utilitySettings = "utility.settings"
    case utilitySettings2 = "utility.settings2"
    case utilityShare2 = "utility.share2"
    case utilityShield = "utility.shield"
    case utilityShieldCheck = "utility.shield.check"
    case utilitySlidersHorizontal = "utility.sliders.horizontal"
    case utilitySmartphone = "utility.smartphone"
    case utilitySnowflake = "utility.snowflake"
    case utilitySparkles = "utility.sparkles"
    case utilitySquare = "utility.square"
    case utilitySquarePen = "utility.square.pen"
    case utilityStar = "utility.star"
    case utilityStarHalf = "utility.star.half"
    case utilitySunrise = "utility.sunrise"
    case utilitySunset = "utility.sunset"
    case utilitySwords = "utility.swords"
    case utilityTag = "utility.tag"
    case utilityThermometer = "utility.thermometer"
    case utilityThumbsDown = "utility.thumbs.down"
    case utilityThumbsUp = "utility.thumbs.up"
    case utilityTrees = "utility.trees"
    case utilityTrendingDown = "utility.trending.down"
    case utilityTrendingUp = "utility.trending.up"
    case utilityTrophy = "utility.trophy"
    case utilityUndo2 = "utility.undo2"
    case utilityUpload = "utility.upload"
    case utilityUploadCloud = "utility.upload.cloud"
    case utilityUserCheck = "utility.user.check"
    case utilityUserMinus = "utility.user.minus"
    case utilityUserPlus = "utility.user.plus"
    case utilityUserX = "utility.user.x"
    case utilityWind = "utility.wind"
    case utilityXCircle = "utility.x.circle"
    case utilityZap = "utility.zap"
    case utilityZoomIn = "utility.zoom.in"
    case utilityZoomOut = "utility.zoom.out"
    case weatherCloud = "weather.cloud"
    case weatherMoon = "weather.moon"
    case weatherSun = "weather.sun"
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
    .accountUsers: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M18 21a8 8 0 0 0-16 0", false), .circle(10, 8, 5, false), .path("M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M18 21a8 8 0 0 0-16 0", false), .circle(10, 8, 5, false), .path("M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M18 21a8 8 0 0 0-16 0", false), .circle(10, 8, 5, false), .path("M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
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
    .actionDelete: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M10 11v6", false), .path("M14 11v6", false), .path("M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", false), .path("M3 6h18", false), .path("M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M10 11v6", false), .path("M14 11v6", false), .path("M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", false), .path("M3 6h18", false), .path("M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M10 11v6", false), .path("M14 11v6", false), .path("M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", false), .path("M3 6h18", false), .path("M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .actionEdit: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M13 21h8", false), .path("m15 5 4 4", false), .path("M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M13 21h8", false), .path("m15 5 4 4", false), .path("M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M13 21h8", false), .path("m15 5 4 4", false), .path("M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .actionSearch: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(11, 11, 8, false), .path("m21 21-4.3-4.3", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(11, 11, 8, false), .path("m21 21-4.3-4.3", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(11, 11, 8, false), .path("m21 21-4.3-4.3", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
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
    .calendarTime: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("M12 6v6l2-4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("M12 6v6l2-4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("M12 6v6l2-4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .careFertilizing: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M4 18h16", false), .path("M12 18L12 14", false), .path("M12 15c-1-1.5-3-1.5-4 0", false), .path("M12 15c1-1.5 3-1.5 4 0", false)]),
                PlantimV4Layer("accent", [.circle(8, 7, 1, false), .circle(12, 5, 1, false), .circle(16, 7, 1, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M4 18h16", false), .path("M12 18L12 14", false), .path("M12 15c-1-1.5-3-1.5-4 0", false), .path("M12 15c1-1.5 3-1.5 4 0", false)]),
                PlantimV4Layer("accent", [.circle(8, 7, 1, false), .circle(12, 5, 1, false), .circle(16, 7, 1, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M4 18h16", false), .path("M12 18L12 14", false), .path("M12 15c-1-1.5-3-1.5-4 0", false), .path("M12 15c1-1.5 3-1.5 4 0", false)]),
                PlantimV4Layer("accent", [.circle(8, 7, 1, false), .circle(12, 5, 1, false), .circle(16, 7, 1, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf500, "accent": .leaf500]
    ),
    .careFertilizingAlt: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M6 9h12l-1.2 11H7.2z", false), .path("M9 9V6h6v3", false), .path("M10.5 14.5c0-1.4 1.3-2.5 3-2.5 0 1.4-1.3 2.5-3 2.5z", false), .path("M10.5 14.5l2.4-2", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M6 9h12l-1.2 11H7.2z", false), .path("M9 9V6h6v3", false), .path("M10.5 14.5c0-1.4 1.3-2.5 3-2.5 0 1.4-1.3 2.5-3 2.5z", false), .path("M10.5 14.5l2.4-2", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M6 9h12l-1.2 11H7.2z", false), .path("M9 9V6h6v3", false), .path("M10.5 14.5c0-1.4 1.3-2.5 3-2.5 0 1.4-1.3 2.5-3 2.5z", false), .path("M10.5 14.5l2.4-2", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf500]
    ),
    .careLog: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M7 4h10a2 2 0 0 1 2 2v13a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-13a2 2 0 0 1 2 -2Z", false), .path("M9 3h6v3H9z", false), .path("M9 12l2 2 4-4", false), .path("M9 17L15 17", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M7 4h10a2 2 0 0 1 2 2v13a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-13a2 2 0 0 1 2 -2Z", false), .path("M9 3h6v3H9z", false), .path("M9 12l2 2 4-4", false), .path("M9 17L15 17", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M7 4h10a2 2 0 0 1 2 2v13a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-13a2 2 0 0 1 2 -2Z", false), .path("M9 3h6v3H9z", false), .path("M9 12l2 2 4-4", false), .path("M9 17L15 17", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .carePruning: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M5 19C5 12 10 6 18 6c0 8-6 13-13 13z", false), .path("M5 19 14 10", false), .path("M17 4l-3 3", false), .path("M20 7l-3-3", false)]),
                PlantimV4Layer("accent", [.circle(15.5, 5.5, 0.9, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M5 19C5 12 10 6 18 6c0 8-6 13-13 13z", false), .path("M5 19 14 10", false), .path("M17 4l-3 3", false), .path("M20 7l-3-3", false)]),
                PlantimV4Layer("accent", [.circle(15.5, 5.5, 0.9, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M5 19C5 12 10 6 18 6c0 8-6 13-13 13z", false), .path("M5 19 14 10", false), .path("M17 4l-3 3", false), .path("M20 7l-3-3", false)]),
                PlantimV4Layer("accent", [.circle(15.5, 5.5, 0.9, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700, "accent": .leaf700]
    ),
    .carePruningAlt: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(6, 7, 2.5, false), .circle(6, 17, 2.5, false), .path("M8.2 8.2 20 20", false), .path("M20 4 8.2 15.8", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(6, 7, 2.5, false), .circle(6, 17, 2.5, false), .path("M8.2 8.2 20 20", false), .path("M20 4 8.2 15.8", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(6, 7, 2.5, false), .circle(6, 17, 2.5, false), .path("M8.2 8.2 20 20", false), .path("M20 4 8.2 15.8", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .careReminder: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M18 15H6l1.4-2V10a4.6 4.6 0 0 1 9.2 0v3z", false), .path("M10.5 18.5a2 2 0 0 0 3 0", false), .circle(17.5, 6.5, 1.8, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M18 15H6l1.4-2V10a4.6 4.6 0 0 1 9.2 0v3z", false), .path("M10.5 18.5a2 2 0 0 0 3 0", false), .circle(17.5, 6.5, 1.8, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M18 15H6l1.4-2V10a4.6 4.6 0 0 1 9.2 0v3z", false), .path("M10.5 18.5a2 2 0 0 0 3 0", false), .circle(17.5, 6.5, 1.8, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .sun500]
    ),
    .careRepotting: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M6 15L18 15", false), .path("M7 15l1.3 5h7.4l1.3-5", false), .path("M12 13L12 6", false), .path("M12 8c-1.2-1.2-3-1-3.5.6", false), .path("M12 8c1.2-1.2 3-1 3.5.6", false), .path("M11 13l-1.5 1.5", false), .path("M13 13l1.5 1.5", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M6 15L18 15", false), .path("M7 15l1.3 5h7.4l1.3-5", false), .path("M12 13L12 6", false), .path("M12 8c-1.2-1.2-3-1-3.5.6", false), .path("M12 8c1.2-1.2 3-1 3.5.6", false), .path("M11 13l-1.5 1.5", false), .path("M13 13l1.5 1.5", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M6 15L18 15", false), .path("M7 15l1.3 5h7.4l1.3-5", false), .path("M12 13L12 6", false), .path("M12 8c-1.2-1.2-3-1-3.5.6", false), .path("M12 8c1.2-1.2 3-1 3.5.6", false), .path("M11 13l-1.5 1.5", false), .path("M13 13l1.5 1.5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .earth600]
    ),
    .careRepottingAlt: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M6 14L18 14", false), .path("M7.5 14l1.1 6h6.8l1.1-6", false), .path("M12 14L12 10", false), .path("M12 11.5c-1-1-2.7-.8-3.2.5", false), .path("M12 11.5c1-1 2.7-.8 3.2.5", false), .path("M8 6a6 6 0 0 1 9-1", false), .path("M17 3v2.5h-2.5", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M6 14L18 14", false), .path("M7.5 14l1.1 6h6.8l1.1-6", false), .path("M12 14L12 10", false), .path("M12 11.5c-1-1-2.7-.8-3.2.5", false), .path("M12 11.5c1-1 2.7-.8 3.2.5", false), .path("M8 6a6 6 0 0 1 9-1", false), .path("M17 3v2.5h-2.5", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M6 14L18 14", false), .path("M7.5 14l1.1 6h6.8l1.1-6", false), .path("M12 14L12 10", false), .path("M12 11.5c-1-1-2.7-.8-3.2.5", false), .path("M12 11.5c1-1 2.7-.8 3.2.5", false), .path("M8 6a6 6 0 0 1 9-1", false), .path("M17 3v2.5h-2.5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .earth600]
    ),
    .careSuggestion: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z", false), .path("M18 14l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6z", false)]),
                PlantimV4Layer("accent", [.circle(6.5, 18, 1, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z", false), .path("M18 14l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6z", false)]),
                PlantimV4Layer("accent", [.circle(6.5, 18, 1, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z", false), .path("M18 14l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6z", false)]),
                PlantimV4Layer("accent", [.circle(6.5, 18, 1, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .sun500, "accent": .sun500]
    ),
    .careWatering: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 3C9 7 7 9.5 7 12a5 5 0 0 0 10 0c0-2.5-2-5-5-9z", false), .path("M10 12.5a2 2 0 0 0 2 2", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 3C9 7 7 9.5 7 12a5 5 0 0 0 10 0c0-2.5-2-5-5-9z", false), .path("M10 12.5a2 2 0 0 0 2 2", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 3C9 7 7 9.5 7 12a5 5 0 0 0 10 0c0-2.5-2-5-5-9z", false), .path("M10 12.5a2 2 0 0 0 2 2", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water600]
    ),
    .careWateringAlt: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M4 12h9v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z", false), .path("M4 12V9.5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2V12", false), .path("M13 13.5h3.5l3-2.5", false), .path("M19.5 12.5L19.5 14.5", false), .path("M17.5 13.5L17.5 15.5", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M4 12h9v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z", false), .path("M4 12V9.5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2V12", false), .path("M13 13.5h3.5l3-2.5", false), .path("M19.5 12.5L19.5 14.5", false), .path("M17.5 13.5L17.5 15.5", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M4 12h9v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z", false), .path("M4 12V9.5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2V12", false), .path("M13 13.5h3.5l3-2.5", false), .path("M19.5 12.5L19.5 14.5", false), .path("M17.5 13.5L17.5 15.5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water600]
    ),
    .familyApiaceae: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("stem", [.path("M12 21v-8", false)]),
                PlantimV4Layer("stalks", [.path("M12 13 6 8", false), .path("M12 13V6", false), .path("M12 13 18 8", false)]),
                PlantimV4Layer("flowers", [.circle(5.5, 7.5, 1.7, true), .circle(12, 5, 1.7, true), .circle(18.5, 7.5, 1.7, true)]),
            ],
            .base: [
                PlantimV4Layer("stem", [.path("M12 21v-9", false)]),
                PlantimV4Layer("stalks", [.path("M12 12 5 7", false), .path("M12 12 8.5 5.5", false), .path("M12 12v-6.5", false), .path("M12 12 15.5 5.5", false), .path("M12 12 19 7", false)]),
                PlantimV4Layer("flowers", [.circle(4.5, 6.5, 1.4, true), .circle(8, 5, 1.4, true), .circle(12, 4.6, 1.4, true), .circle(16, 5, 1.4, true), .circle(19.5, 6.5, 1.4, true)]),
            ],
            .display: [
                PlantimV4Layer("stem", [.path("M12 21v-9", false)]),
                PlantimV4Layer("stalks", [.path("M12 12 5 7", false), .path("M12 12 8.5 5.5", false), .path("M12 12v-6.5", false), .path("M12 12 15.5 5.5", false), .path("M12 12 19 7", false)]),
                PlantimV4Layer("flowers", [.circle(4.5, 6.5, 1.4, true), .circle(8, 5, 1.4, true), .circle(12, 4.6, 1.4, true), .circle(16, 5, 1.4, true), .circle(19.5, 6.5, 1.4, true)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["stem", "stalks", "flowers"],
        multicolor: ["stem": .leaf700, "stalks": .leaf500, "flowers": .leaf700]
    ),
    .familyAraceae: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("stem", [.path("M12 21v-4", false)]),
                PlantimV4Layer("leaf", [.path("M12 17C6.8 16 3 11.7 3 8C3 5.3 5.1 3.5 7.4 3.5C9.5 3.5 11.2 5 12 6.7C12.8 5 14.5 3.5 16.6 3.5C18.9 3.5 21 5.3 21 8C21 11.7 17.2 16 12 17Z", false)]),
            ],
            .base: [
                PlantimV4Layer("stem", [.path("M12 21v-4.5", false)]),
                PlantimV4Layer("leaf", [.path("M12 16.5C7 15.5 3.5 11.5 3.5 8C3.5 5.5 5.5 4 7.5 4C9.5 4 11.2 5.4 12 7C12.8 5.4 14.5 4 16.5 4C18.5 4 20.5 5.5 20.5 8C20.5 11.5 17 15.5 12 16.5Z", false)]),
                PlantimV4Layer("midrib", [.path("M12 15v-6", false)]),
            ],
            .display: [
                PlantimV4Layer("stem", [.path("M12 21v-4.5", false)]),
                PlantimV4Layer("leaf", [.path("M12 16.5C7 15.5 3.5 11.5 3.5 8C3.5 5.5 5.5 4 7.5 4C9.5 4 11.2 5.4 12 7C12.8 5.4 14.5 4 16.5 4C18.5 4 20.5 5.5 20.5 8C20.5 11.5 17 15.5 12 16.5Z", false)]),
                PlantimV4Layer("midrib", [.path("M12 15v-6", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["leaf", "midrib"],
        multicolor: ["stem": .leaf700, "leaf": .leaf500, "midrib": .leaf700]
    ),
    .familyArecaceae: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M11 22c0-6 .5-11 1-14", false), .path("M12 6C9 3 5 3 2 6", false), .path("M12 6c3-3 7-3 10 0", false), .path("M12 6C9.5 4 6 5 4 9", false), .path("M12 6c2.5-2 6-1 8 3", false), .path("M9 22h6", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M11 22c0-6 .5-11 1-14", false), .path("M12 6C9 3 5 3 2 6", false), .path("M12 6c3-3 7-3 10 0", false), .path("M12 6C9.5 4 6 5 4 9", false), .path("M12 6c2.5-2 6-1 8 3", false), .path("M9 22h6", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M11 22c0-6 .5-11 1-14", false), .path("M12 6C9 3 5 3 2 6", false), .path("M12 6c3-3 7-3 10 0", false), .path("M12 6C9.5 4 6 5 4 9", false), .path("M12 6c2.5-2 6-1 8 3", false), .path("M9 22h6", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .familyAsparagaceae: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M6 22C5 15 5 8 7 2", false), .path("M12 22c-1-8-1-15 0-20", false), .path("M18 22c1-7 1-14-1-20", false), .path("M4 22h16", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M6 22C5 15 5 8 7 2", false), .path("M12 22c-1-8-1-15 0-20", false), .path("M18 22c1-7 1-14-1-20", false), .path("M4 22h16", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M6 22C5 15 5 8 7 2", false), .path("M12 22c-1-8-1-15 0-20", false), .path("M18 22c1-7 1-14-1-20", false), .path("M4 22h16", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .familyAsphodelaceae: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 22V4", false), .path("M12 20C8 18 5 13 6 7", false), .path("M12 20c4-2 7-7 6-13", false), .path("M12 17C9.5 15 8 12 8.5 9", false), .path("M12 17c2.5-2 4-5 3.5-8", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 22V4", false), .path("M12 20C8 18 5 13 6 7", false), .path("M12 20c4-2 7-7 6-13", false), .path("M12 17C9.5 15 8 12 8.5 9", false), .path("M12 17c2.5-2 4-5 3.5-8", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 22V4", false), .path("M12 20C8 18 5 13 6 7", false), .path("M12 20c4-2 7-7 6-13", false), .path("M12 17C9.5 15 8 12 8.5 9", false), .path("M12 17c2.5-2 4-5 3.5-8", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .familyBegoniaceae: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("stem", [.path("M16 21C15 18.5 14 16.5 12.5 15", false)]),
                PlantimV4Layer("leaf", [.path("M12.5 15C6 15.5 2 10.8 3.3 6.6C4.3 3.2 8.5 2.2 11.5 3.8C14.1 5.1 15 8 15.5 10.5C16 8 16.5 4.8 18 3C19.7 6.6 19.5 11.2 12.5 15Z", false)]),
            ],
            .base: [
                PlantimV4Layer("stem", [.path("M16 21C15 18.5 14 16.5 12.5 15", false)]),
                PlantimV4Layer("leaf", [.path("M12.5 15C6.5 15.5 2.5 11 3.5 7C4.4 3.5 8.5 2.5 11.5 4C14 5.2 15 8 15.5 10.5C16 8 16.5 5 18 3C19.5 6.5 19.5 11 12.5 15Z", false)]),
                PlantimV4Layer("midrib", [.path("M12.5 14.5C9.5 12 7 10 5 9", false)]),
            ],
            .display: [
                PlantimV4Layer("stem", [.path("M16 21C15 18.5 14 16.5 12.5 15", false)]),
                PlantimV4Layer("leaf", [.path("M12.5 15C6.5 15.5 2.5 11 3.5 7C4.4 3.5 8.5 2.5 11.5 4C14 5.2 15 8 15.5 10.5C16 8 16.5 5 18 3C19.5 6.5 19.5 11 12.5 15Z", false)]),
                PlantimV4Layer("midrib", [.path("M12.5 14.5C9.5 12 7 10 5 9", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["leaf", "midrib"],
        multicolor: ["stem": .leaf700, "leaf": .leaf500, "midrib": .leaf700]
    ),
    .familyBromeliaceae: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("blades", [.path("M12 20C8 18 5 14 3.5 8C7 9 10 12 12 20Z", false), .path("M12 20C11 15 10.5 10 11 3.5C13 8 13.5 13 12 20Z", false), .path("M12 20C16 18 19 14 20.5 8C17 9 14 12 12 20Z", false)]),
                PlantimV4Layer("base", [.path("M8 20h8", false)]),
            ],
            .base: [
                PlantimV4Layer("blades", [.path("M12 20C9 18 6 15 4 9C7 9.5 10 12 12 20Z", false), .path("M12 20C11 16 10.5 11 11 4C12.5 8 13 13 12 20Z", false), .path("M12 20C15 18 18 15 20 9C17 9.5 14 12 12 20Z", false), .path("M12 20C10.5 17 8.5 14.5 6.5 12C5.5 15 8 18 12 20Z", false), .path("M12 20C13.5 17 15.5 14.5 17.5 12C18.5 15 16 18 12 20Z", false)]),
                PlantimV4Layer("base", [.path("M8 20h8", false)]),
            ],
            .display: [
                PlantimV4Layer("blades", [.path("M12 20C9 18 6 15 4 9C7 9.5 10 12 12 20Z", false), .path("M12 20C11 16 10.5 11 11 4C12.5 8 13 13 12 20Z", false), .path("M12 20C15 18 18 15 20 9C17 9.5 14 12 12 20Z", false), .path("M12 20C10.5 17 8.5 14.5 6.5 12C5.5 15 8 18 12 20Z", false), .path("M12 20C13.5 17 15.5 14.5 17.5 12C18.5 15 16 18 12 20Z", false)]),
                PlantimV4Layer("base", [.path("M8 20h8", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["blades"],
        multicolor: ["blades": .leaf500, "base": .leaf700]
    ),
    .familyCactaceae: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 22V5", false), .path("M12 15H8.5A2.5 2.5 0 0 1 6 12.5V10", false), .path("M12 12h3.5A2.5 2.5 0 0 0 18 9.5V8", false), .path("M9 22h6", false)]),
                PlantimV4Layer("accent", [.circle(12, 8, 1.1, true), .circle(6, 8, 1.1, true), .circle(18, 5, 1.1, true)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 22V5", false), .path("M12 15H8.5A2.5 2.5 0 0 1 6 12.5V10", false), .path("M12 12h3.5A2.5 2.5 0 0 0 18 9.5V8", false), .path("M9 22h6", false)]),
                PlantimV4Layer("accent", [.circle(12, 8, 1.1, true), .circle(6, 8, 1.1, true), .circle(18, 5, 1.1, true)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 22V5", false), .path("M12 15H8.5A2.5 2.5 0 0 1 6 12.5V10", false), .path("M12 12h3.5A2.5 2.5 0 0 0 18 9.5V8", false), .path("M9 22h6", false)]),
                PlantimV4Layer("accent", [.circle(12, 8, 1.1, true), .circle(6, 8, 1.1, true), .circle(18, 5, 1.1, true)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700, "accent": .leaf700]
    ),
    .familyCrassulaceae: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 2L15 8L12 6L9 8Z", false), .path("M22 12L16 15L18 12L16 9Z", false), .path("M12 22L9 16L12 18L15 16Z", false), .path("M2 12L8 9L6 12L8 15Z", false), .circle(12, 12, 3, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 2L15 8L12 6L9 8Z", false), .path("M22 12L16 15L18 12L16 9Z", false), .path("M12 22L9 16L12 18L15 16Z", false), .path("M2 12L8 9L6 12L8 15Z", false), .circle(12, 12, 3, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 2L15 8L12 6L9 8Z", false), .path("M22 12L16 15L18 12L16 9Z", false), .path("M12 22L9 16L12 18L15 16Z", false), .path("M2 12L8 9L6 12L8 15Z", false), .circle(12, 12, 3, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .familyLamiaceae: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 22V4", false), .path("M12 16c-2 0-4-1-5-3 2-1 4-1 5 1", false), .path("M12 16c2 0 4-1 5-3-2-1-4-1-5 1", false), .path("M12 10C10 10 8 9 7 7c2-1 4-1 5 1", false), .path("M12 10c2 0 4-1 5-3-2-1-4-1-5 1", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 22V4", false), .path("M12 16c-2 0-4-1-5-3 2-1 4-1 5 1", false), .path("M12 16c2 0 4-1 5-3-2-1-4-1-5 1", false), .path("M12 10C10 10 8 9 7 7c2-1 4-1 5 1", false), .path("M12 10c2 0 4-1 5-3-2-1-4-1-5 1", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 22V4", false), .path("M12 16c-2 0-4-1-5-3 2-1 4-1 5 1", false), .path("M12 16c2 0 4-1 5-3-2-1-4-1-5 1", false), .path("M12 10C10 10 8 9 7 7c2-1 4-1 5 1", false), .path("M12 10c2 0 4-1 5-3-2-1-4-1-5 1", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .familyMarantaceae: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M6 12a6 9.5 0 1 0 12 0a6 9.5 0 1 0 -12 0", false), .path("M12 3v18", false), .path("M12 8 8 6", false), .path("M12 8l4-2", false), .path("M12 14l-4 2", false), .path("M12 14l4 2", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M6 12a6 9.5 0 1 0 12 0a6 9.5 0 1 0 -12 0", false), .path("M12 3v18", false), .path("M12 8 8 6", false), .path("M12 8l4-2", false), .path("M12 14l-4 2", false), .path("M12 14l4 2", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M6 12a6 9.5 0 1 0 12 0a6 9.5 0 1 0 -12 0", false), .path("M12 3v18", false), .path("M12 8 8 6", false), .path("M12 8l4-2", false), .path("M12 14l-4 2", false), .path("M12 14l4 2", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .familyMoraceae: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 22c-4-1-6-4-5-7-2-1-2-4 0-5-1-3 1-6 5-8 4 2 6 5 5 8 2 1 2 4 0 5 1 3-1 6-5 7Z", false), .path("M12 21V4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 22c-4-1-6-4-5-7-2-1-2-4 0-5-1-3 1-6 5-8 4 2 6 5 5 8 2 1 2 4 0 5 1 3-1 6-5 7Z", false), .path("M12 21V4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 22c-4-1-6-4-5-7-2-1-2-4 0-5-1-3 1-6 5-8 4 2 6 5 5 8 2 1 2 4 0 5 1 3-1 6-5 7Z", false), .path("M12 21V4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .familyNephrolepidaceae: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("rachis", [.path("M12 21V5", false)]),
                PlantimV4Layer("leaflets", [.path("M12 17.5 5.5 15", false), .path("M12 17.5 18.5 15", false), .path("M12 12.5 6 11", false), .path("M12 12.5 18 11", false), .path("M12 8 7.5 7", false), .path("M12 8 16.5 7", false)]),
            ],
            .base: [
                PlantimV4Layer("rachis", [.path("M12 21V4", false)]),
                PlantimV4Layer("leaflets", [.path("M12 18 5.5 15.5", false), .path("M12 18 18.5 15.5", false), .path("M12 14 6 12", false), .path("M12 14 18 12", false), .path("M12 10 6.8 8.8", false), .path("M12 10 17.2 8.8", false), .path("M12 6.5 8.5 5.5", false), .path("M12 6.5 15.5 5.5", false)]),
            ],
            .display: [
                PlantimV4Layer("rachis", [.path("M12 21V4", false)]),
                PlantimV4Layer("leaflets", [.path("M12 18 5.5 15.5", false), .path("M12 18 18.5 15.5", false), .path("M12 14 6 12", false), .path("M12 14 18 12", false), .path("M12 10 6.8 8.8", false), .path("M12 10 17.2 8.8", false), .path("M12 6.5 8.5 5.5", false), .path("M12 6.5 15.5 5.5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["rachis", "leaflets"],
        multicolor: ["rachis": .leaf700, "leaflets": .leaf500]
    ),
    .familyOrchidaceae: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 22c-3-4-3-7 0-9", false), .path("M4 8.5a3.5 2.5 0 1 0 7 0a3.5 2.5 0 1 0 -7 0", false), .path("M13 8.5a3.5 2.5 0 1 0 7 0a3.5 2.5 0 1 0 -7 0", false), .path("M12 9c-2-2-2-4 0-6 2 2 2 4 0 6Z", false)]),
                PlantimV4Layer("accent", [.circle(12, 12, 1.5, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 22c-3-4-3-7 0-9", false), .path("M4 8.5a3.5 2.5 0 1 0 7 0a3.5 2.5 0 1 0 -7 0", false), .path("M13 8.5a3.5 2.5 0 1 0 7 0a3.5 2.5 0 1 0 -7 0", false), .path("M12 9c-2-2-2-4 0-6 2 2 2 4 0 6Z", false)]),
                PlantimV4Layer("accent", [.circle(12, 12, 1.5, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 22c-3-4-3-7 0-9", false), .path("M4 8.5a3.5 2.5 0 1 0 7 0a3.5 2.5 0 1 0 -7 0", false), .path("M13 8.5a3.5 2.5 0 1 0 7 0a3.5 2.5 0 1 0 -7 0", false), .path("M12 9c-2-2-2-4 0-6 2 2 2 4 0 6Z", false)]),
                PlantimV4Layer("accent", [.circle(12, 12, 1.5, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700, "accent": .leaf700]
    ),
    .familyPiperaceae: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("stalks", [.path("M12 21 8 13", false), .path("M12 21 16 15", false)]),
                PlantimV4Layer("leaves", [.path("M8 13C4.4 13 2.6 10.2 3.4 7.2C4.1 4.5 7 3.2 9.4 4.6C11.3 5.7 11.6 8.6 10 11C9.2 12.2 8.5 13 8 13Z", false), .path("M16 15C13.4 15 12 12.9 12.8 10.6C13.4 8.7 15.6 7.8 17.4 9C18.9 10 19.2 12.2 17.8 13.9C17 14.6 16.6 15 16 15Z", false)]),
            ],
            .base: [
                PlantimV4Layer("stalks", [.path("M12 21 8 12", false), .path("M12 21 16 14", false)]),
                PlantimV4Layer("leaves", [.path("M8 12C4.7 12 3 9.6 3.5 7C4 4.6 6.2 3.2 8.6 4C10.6 4.7 11.6 7.2 10.7 9.6C10.1 11.2 9.3 12 8 12Z", false), .path("M16 14C13.6 14 12.4 12.2 12.9 10.2C13.3 8.5 15 7.6 16.8 8.3C18.3 8.9 19 10.8 18.2 12.5C17.7 13.6 17 14 16 14Z", false)]),
            ],
            .display: [
                PlantimV4Layer("stalks", [.path("M12 21 8 12", false), .path("M12 21 16 14", false)]),
                PlantimV4Layer("leaves", [.path("M8 12C4.7 12 3 9.6 3.5 7C4 4.6 6.2 3.2 8.6 4C10.6 4.7 11.6 7.2 10.7 9.6C10.1 11.2 9.3 12 8 12Z", false), .path("M16 14C13.6 14 12.4 12.2 12.9 10.2C13.3 8.5 15 7.6 16.8 8.3C18.3 8.9 19 10.8 18.2 12.5C17.7 13.6 17 14 16 14Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["leaves"],
        multicolor: ["stalks": .leaf700, "leaves": .leaf500]
    ),
    .familyPolypodiaceae: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("rachis", [.path("M12 21V6", false)]),
                PlantimV4Layer("blade", [.path("M12 18.5C7 18.5 3 16 3 11C6 12 8 13.5 9.5 16C8.5 11.5 6.5 9 3.5 8C7 8 9.5 9.5 11 12.5C10.5 8 10 6 12 4Z", false), .path("M12 18.5C17 18.5 21 16 21 11C18 12 16 13.5 14.5 16C15.5 11.5 17.5 9 20.5 8C17 8 14.5 9.5 13 12.5C13.5 8 14 6 12 4Z", false)]),
            ],
            .base: [
                PlantimV4Layer("rachis", [.path("M12 21V6", false)]),
                PlantimV4Layer("blade", [.path("M12 19C8 19 4 17 3.5 12.5C6 13 7.5 14 9 15.5C8 12 6 10 3.5 8.5C6.5 8.5 9 9.5 10.5 11.5C10 8 9 6 12 4Z", false), .path("M12 19C16 19 20 17 20.5 12.5C18 13 16.5 14 15 15.5C16 12 18 10 20.5 8.5C17.5 8.5 15 9.5 13.5 11.5C14 8 15 6 12 4Z", false)]),
            ],
            .display: [
                PlantimV4Layer("rachis", [.path("M12 21V6", false)]),
                PlantimV4Layer("blade", [.path("M12 19C8 19 4 17 3.5 12.5C6 13 7.5 14 9 15.5C8 12 6 10 3.5 8.5C6.5 8.5 9 9.5 10.5 11.5C10 8 9 6 12 4Z", false), .path("M12 19C16 19 20 17 20.5 12.5C18 13 16.5 14 15 15.5C16 12 18 10 20.5 8.5C17.5 8.5 15 9.5 13.5 11.5C14 8 15 6 12 4Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["rachis", "blade"],
        multicolor: ["rachis": .leaf700, "blade": .leaf500]
    ),
    .gardenCompost: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M4 8h16l-1.5 12H5.5z", false), .path("M3 8h18", false), .path("M12 17c-2 0-3.5-1.5-3.5-3.5C8.5 11 12 11 12 14c0-3 3.5-3 3.5.5C15.5 15.5 14 17 12 17z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M4 8h16l-1.5 12H5.5z", false), .path("M3 8h18", false), .path("M12 17c-2 0-3.5-1.5-3.5-3.5C8.5 11 12 11 12 14c0-3 3.5-3 3.5.5C15.5 15.5 14 17 12 17z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M4 8h16l-1.5 12H5.5z", false), .path("M3 8h18", false), .path("M12 17c-2 0-3.5-1.5-3.5-3.5C8.5 11 12 11 12 14c0-3 3.5-3 3.5.5C15.5 15.5 14 17 12 17z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .earth600]
    ),
    .gardenFork: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 10L12 21", false), .path("M8 10V4", false), .path("M12 10V3", false), .path("M16 10V4", false), .path("M8 10h8", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 10L12 21", false), .path("M8 10V4", false), .path("M12 10V3", false), .path("M16 10V4", false), .path("M8 10h8", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 10L12 21", false), .path("M8 10V4", false), .path("M12 10V3", false), .path("M16 10V4", false), .path("M8 10h8", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .gardenGloves: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("glove", [.path("M8 21a3 3 0 0 1-3-3v-4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v2a5 5 0 0 1-3 4.6V21Z", false), .path("M9 12V7.5a1.3 1.3 0 0 1 2.6 0V12", false), .path("M11.6 12V6.5a1.3 1.3 0 0 1 2.6 0V12", false), .path("M5 16a2.5 2.5 0 0 1 0-5", false)]),
                PlantimV4Layer("cuff", [.path("M7.5 21h6", false)]),
            ],
            .base: [
                PlantimV4Layer("glove", [.path("M8 21a3 3 0 0 1-3-3v-4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v2a5 5 0 0 1-3 4.6V21Z", false), .path("M9 12V7.5a1.3 1.3 0 0 1 2.6 0V12", false), .path("M11.6 12V6.5a1.3 1.3 0 0 1 2.6 0V12", false), .path("M5 16a2.5 2.5 0 0 1 0-5", false)]),
                PlantimV4Layer("cuff", [.path("M7.5 21h6", false)]),
            ],
            .display: [
                PlantimV4Layer("glove", [.path("M8 21a3 3 0 0 1-3-3v-4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v2a5 5 0 0 1-3 4.6V21Z", false), .path("M9 12V7.5a1.3 1.3 0 0 1 2.6 0V12", false), .path("M11.6 12V6.5a1.3 1.3 0 0 1 2.6 0V12", false), .path("M5 16a2.5 2.5 0 0 1 0-5", false)]),
                PlantimV4Layer("cuff", [.path("M7.5 21h6", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["glove"],
        multicolor: ["glove": .ink900, "cuff": .leaf500]
    ),
    .gardenGreenhouse: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M4 20V9l8-5 8 5v11z", false), .path("M9 6.5L9 20", false), .path("M15 6.5L15 20", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M4 20V9l8-5 8 5v11z", false), .path("M9 6.5L9 20", false), .path("M15 6.5L15 20", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M4 20V9l8-5 8 5v11z", false), .path("M9 6.5L9 20", false), .path("M15 6.5L15 20", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .gardenHoe: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("handle", [.path("M18.5 4.5 8 15", false)]),
                PlantimV4Layer("head", [.path("M8 15l-3.5 3.5a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0L13 17Z", false)]),
            ],
            .base: [
                PlantimV4Layer("handle", [.path("M18.5 4.5 8 15", false)]),
                PlantimV4Layer("head", [.path("M8 15l-3.5 3.5a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0L13 17Z", false)]),
            ],
            .display: [
                PlantimV4Layer("handle", [.path("M18.5 4.5 8 15", false)]),
                PlantimV4Layer("head", [.path("M8 15l-3.5 3.5a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0L13 17Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["handle"],
        multicolor: ["handle": .ink900, "head": .ink500]
    ),
    .gardenHose: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("coil", [.path("M11 20a5 5 0 1 1 5-5v-1a3 3 0 0 1 3-3", false)]),
                PlantimV4Layer("nozzle", [.path("M18 8l4 3-2.5 2.5L16 11Z", false)]),
            ],
            .base: [
                PlantimV4Layer("coil", [.path("M11 20a5 5 0 1 1 5-5v-1a3 3 0 0 1 3-3", false)]),
                PlantimV4Layer("nozzle", [.path("M18 8l4 3-2.5 2.5L16 11Z", false)]),
            ],
            .display: [
                PlantimV4Layer("coil", [.path("M11 20a5 5 0 1 1 5-5v-1a3 3 0 0 1 3-3", false)]),
                PlantimV4Layer("nozzle", [.path("M18 8l4 3-2.5 2.5L16 11Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["coil"],
        multicolor: ["coil": .water600, "nozzle": .ink900]
    ),
    .gardenPot: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M4 7h16", false), .path("M4 7l2 13h12l2-13", false), .path("M4 7L4 4", false), .path("M20 7L20 4", false), .path("M4 4L20 4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M4 7h16", false), .path("M4 7l2 13h12l2-13", false), .path("M4 7L4 4", false), .path("M20 7L20 4", false), .path("M4 4L20 4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M4 7h16", false), .path("M4 7l2 13h12l2-13", false), .path("M4 7L4 4", false), .path("M20 7L20 4", false), .path("M4 4L20 4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .earth600]
    ),
    .gardenRake: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("handle", [.path("M12 3v9", false)]),
                PlantimV4Layer("head", [.path("M6 12h12", false), .path("M7 12v4", false), .path("M12 12v4", false), .path("M17 12v4", false)]),
            ],
            .base: [
                PlantimV4Layer("handle", [.path("M12 3v9", false)]),
                PlantimV4Layer("head", [.path("M6 12h12", false), .path("M6.5 12v3.5", false), .path("M9.25 12v3.5", false), .path("M12 12v3.5", false), .path("M14.75 12v3.5", false), .path("M17.5 12v3.5", false)]),
            ],
            .display: [
                PlantimV4Layer("handle", [.path("M12 3v9", false)]),
                PlantimV4Layer("head", [.path("M6 12h12", false), .path("M6.5 12v3.5", false), .path("M9.25 12v3.5", false), .path("M12 12v3.5", false), .path("M14.75 12v3.5", false), .path("M17.5 12v3.5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["handle"],
        multicolor: ["handle": .ink900, "head": .ink500]
    ),
    .gardenSeedPacket: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1Z", false), .path("M12 17L12 12", false), .path("M12 12c-2 0-3-1-3-3 2 0 3 1 3 3z", false), .path("M12 13c2 0 3-1 3-3-2 0-3 1-3 3z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1Z", false), .path("M12 17L12 12", false), .path("M12 12c-2 0-3-1-3-3 2 0 3 1 3 3z", false), .path("M12 13c2 0 3-1 3-3-2 0-3 1-3 3z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1Z", false), .path("M12 17L12 12", false), .path("M12 12c-2 0-3-1-3-3 2 0 3 1 3 3z", false), .path("M12 13c2 0 3-1 3-3-2 0-3 1-3 3z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf500]
    ),
    .gardenShears: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(6, 18, 3, false), .circle(18, 18, 3, false), .path("M8.5 16L20 4", false), .path("M15.5 16L4 4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(6, 18, 3, false), .circle(18, 18, 3, false), .path("M8.5 16L20 4", false), .path("M15.5 16L4 4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(6, 18, 3, false), .circle(18, 18, 3, false), .path("M8.5 16L20 4", false), .path("M15.5 16L4 4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .gardenSpade: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("handle", [.path("M8 4h8", false), .path("M12 4v11", false)]),
                PlantimV4Layer("blade", [.path("M9 15h6l-3 5.5Z", false)]),
            ],
            .base: [
                PlantimV4Layer("handle", [.path("M8 4h8", false), .path("M12 4v11", false)]),
                PlantimV4Layer("blade", [.path("M9 15h6l-3 5.5Z", false)]),
            ],
            .display: [
                PlantimV4Layer("handle", [.path("M8 4h8", false), .path("M12 4v11", false)]),
                PlantimV4Layer("blade", [.path("M9 15h6l-3 5.5Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["handle"],
        multicolor: ["handle": .ink900, "blade": .ink500]
    ),
    .gardenSprinkler: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("base", [.path("M8 21h8", false), .path("M12 21v-5", false), .path("M9.5 16h5l-1-2h-3Z", false)]),
                PlantimV4Layer("water", [.path("M12 14c-2-1-3.5-3-3.5-6", false), .path("M12 14c2-1 3.5-3 3.5-6", false)]),
            ],
            .base: [
                PlantimV4Layer("base", [.path("M8 21h8", false), .path("M12 21v-5", false), .path("M9.5 16h5l-1-2h-3Z", false)]),
                PlantimV4Layer("water", [.path("M12 14c-2.5-1-4-3-4.5-6", false), .path("M12 14c2.5-1 4-3 4.5-6", false), .path("M12 14V6", false)]),
            ],
            .display: [
                PlantimV4Layer("base", [.path("M8 21h8", false), .path("M12 21v-5", false), .path("M9.5 16h5l-1-2h-3Z", false)]),
                PlantimV4Layer("water", [.path("M12 14c-2.5-1-4-3-4.5-6", false), .path("M12 14c2.5-1 4-3 4.5-6", false), .path("M12 14V6", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["base"],
        multicolor: ["base": .ink900, "water": .water600]
    ),
    .gardenTrowel: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("handle", [.path("M13.5 10.5 18 6", false), .path("M16 4l4 4-2 2-4-4Z", false)]),
                PlantimV4Layer("blade", [.path("M4 20c-1-3 .5-7 3.5-8.5l4 4C10 18.5 6 20.5 4 20Z", false)]),
            ],
            .base: [
                PlantimV4Layer("handle", [.path("M13.5 10.5 18 6", false), .path("M16 4l4 4-2 2-4-4Z", false)]),
                PlantimV4Layer("blade", [.path("M4 20c-1-3 .5-7 3.5-8.5l4 4C10 18.5 6 20.5 4 20Z", false)]),
            ],
            .display: [
                PlantimV4Layer("handle", [.path("M13.5 10.5 18 6", false), .path("M16 4l4 4-2 2-4-4Z", false)]),
                PlantimV4Layer("blade", [.path("M4 20c-1-3 .5-7 3.5-8.5l4 4C10 18.5 6 20.5 4 20Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["handle"],
        multicolor: ["handle": .ink900, "blade": .ink500]
    ),
    .gardenWheelbarrow: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(7, 18, 2, false), .path("M3 5h2l2 9h8l4-7H6", false), .path("M15 14l4 4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(7, 18, 2, false), .path("M3 5h2l2 9h8l4-7H6", false), .path("M15 14l4 4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(7, 18, 2, false), .path("M3 5h2l2 9h8l4-7H6", false), .path("M15 14l4 4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .genusAloe: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 16C11 11 9 6 5 3c0 5 2 10 7 13z", false), .path("M12 16c1-5 3-10 7-13 0 5-2 10-7 13z", false), .path("M12 16V7", false), .path("M7 16h10l-1.5 4h-7L7 16z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 16C11 11 9 6 5 3c0 5 2 10 7 13z", false), .path("M12 16c1-5 3-10 7-13 0 5-2 10-7 13z", false), .path("M12 16V7", false), .path("M7 16h10l-1.5 4h-7L7 16z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 16C11 11 9 6 5 3c0 5 2 10 7 13z", false), .path("M12 16c1-5 3-10 7-13 0 5-2 10-7 13z", false), .path("M12 16V7", false), .path("M7 16h10l-1.5 4h-7L7 16z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .genusCactus: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("body", [.path("M10 18V7a2 2 0 0 1 4 0v11", false), .path("M10 13H7.5V10.5", false), .path("M14 11.5h2.5V14", false)]),
                PlantimV4Layer("pot", [.path("M9 18h6l-.6 3h-4.8Z", false)]),
            ],
            .base: [
                PlantimV4Layer("body", [.path("M10 18V6.5a2 2 0 0 1 4 0V18", false), .path("M10 13H8.3A1.8 1.8 0 0 1 6.5 11.2V9.5", false), .path("M14 11h1.7a1.8 1.8 0 0 1 1.8 1.8V15", false)]),
                PlantimV4Layer("pot", [.path("M9 18h6l-.6 3h-4.8Z", false)]),
            ],
            .display: [
                PlantimV4Layer("body", [.path("M10 18V6.5a2 2 0 0 1 4 0V18", false), .path("M10 13H8.3A1.8 1.8 0 0 1 6.5 11.2V9.5", false), .path("M14 11h1.7a1.8 1.8 0 0 1 1.8 1.8V15", false)]),
                PlantimV4Layer("pot", [.path("M9 18h6l-.6 3h-4.8Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["body"],
        multicolor: ["body": .leaf700, "pot": .earth600]
    ),
    .genusCalathea: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 3c-4 2-6 6-6 10s2 6 6 8c4-2 6-4 6-8s-2-8-6-10z", false), .path("M12 3v18", false), .path("M12 9l-3 2", false), .path("M12 9l3 2", false), .path("M12 15l-3 2", false), .path("M12 15l3 2", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 3c-4 2-6 6-6 10s2 6 6 8c4-2 6-4 6-8s-2-8-6-10z", false), .path("M12 3v18", false), .path("M12 9l-3 2", false), .path("M12 9l3 2", false), .path("M12 15l-3 2", false), .path("M12 15l3 2", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 3c-4 2-6 6-6 10s2 6 6 8c4-2 6-4 6-8s-2-8-6-10z", false), .path("M12 3v18", false), .path("M12 9l-3 2", false), .path("M12 9l3 2", false), .path("M12 15l-3 2", false), .path("M12 15l3 2", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .genusFern: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 17V4", false), .path("M12 6c-1.5-1.5-3-2-5-2 0 2 .5 3.5 2 5", false), .path("M12 6c1.5-1.5 3-2 5-2 0 2-.5 3.5-2 5", false), .path("M12 11c-1.3-1.3-2.6-1.7-4.3-1.7 0 1.7.4 3 1.7 4.3", false), .path("M12 11c1.3-1.3 2.6-1.7 4.3-1.7 0 1.7-.4 3-1.7 4.3", false), .path("M8 17h8l-1 4H9l-1-4z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 17V4", false), .path("M12 6c-1.5-1.5-3-2-5-2 0 2 .5 3.5 2 5", false), .path("M12 6c1.5-1.5 3-2 5-2 0 2-.5 3.5-2 5", false), .path("M12 11c-1.3-1.3-2.6-1.7-4.3-1.7 0 1.7.4 3 1.7 4.3", false), .path("M12 11c1.3-1.3 2.6-1.7 4.3-1.7 0 1.7-.4 3-1.7 4.3", false), .path("M8 17h8l-1 4H9l-1-4z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 17V4", false), .path("M12 6c-1.5-1.5-3-2-5-2 0 2 .5 3.5 2 5", false), .path("M12 6c1.5-1.5 3-2 5-2 0 2-.5 3.5-2 5", false), .path("M12 11c-1.3-1.3-2.6-1.7-4.3-1.7 0 1.7.4 3 1.7 4.3", false), .path("M12 11c1.3-1.3 2.6-1.7 4.3-1.7 0 1.7-.4 3-1.7 4.3", false), .path("M8 17h8l-1 4H9l-1-4z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .genusFicus: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("trunk", [.path("M12 19v-7", false)]),
                PlantimV4Layer("leaves", [.path("M12 12C9 12 6.5 10 6.5 6.5C10 6.5 12 8.5 12 12Z", false), .path("M12 12C15 12 17.5 10 17.5 6.5C14 6.5 12 8.5 12 12Z", false), .path("M12 9V4", false)]),
                PlantimV4Layer("pot", [.path("M9 19h6l-.6 2.5h-4.8Z", false)]),
            ],
            .base: [
                PlantimV4Layer("trunk", [.path("M12 19v-7", false)]),
                PlantimV4Layer("leaves", [.path("M12 12C9 12 6.5 10 6.5 6.5C10 6.5 12 8.5 12 12Z", false), .path("M12 12C15 12 17.5 10 17.5 6.5C14 6.5 12 8.5 12 12Z", false), .path("M12 9C10 8 8.7 6 9.2 3.5C11.4 4 12.5 6.5 12 9Z", false), .path("M12 9C14 8 15.3 6 14.8 3.5C12.6 4 11.5 6.5 12 9Z", false)]),
                PlantimV4Layer("pot", [.path("M9 19h6l-.6 2.5h-4.8Z", false)]),
            ],
            .display: [
                PlantimV4Layer("trunk", [.path("M12 19v-7", false)]),
                PlantimV4Layer("leaves", [.path("M12 12C9 12 6.5 10 6.5 6.5C10 6.5 12 8.5 12 12Z", false), .path("M12 12C15 12 17.5 10 17.5 6.5C14 6.5 12 8.5 12 12Z", false), .path("M12 9C10 8 8.7 6 9.2 3.5C11.4 4 12.5 6.5 12 9Z", false), .path("M12 9C14 8 15.3 6 14.8 3.5C12.6 4 11.5 6.5 12 9Z", false)]),
                PlantimV4Layer("pot", [.path("M9 19h6l-.6 2.5h-4.8Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["trunk"],
        multicolor: ["trunk": .earth600, "leaves": .leaf700, "pot": .earth600]
    ),
    .genusMonstera: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 21c7-1 9-6 9-11 0-3-2-6-4-6-1 2-3 2-5 2s-4 0-5-2C5 4 3 7 3 10c0 5 2 10 9 11z", false), .path("M12 21V9", false), .path("M8 8l-3 2", false), .path("M16 8l3 2", false), .path("M9 14l-3 1", false), .path("M15 14l3 1", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 21c7-1 9-6 9-11 0-3-2-6-4-6-1 2-3 2-5 2s-4 0-5-2C5 4 3 7 3 10c0 5 2 10 9 11z", false), .path("M12 21V9", false), .path("M8 8l-3 2", false), .path("M16 8l3 2", false), .path("M9 14l-3 1", false), .path("M15 14l3 1", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 21c7-1 9-6 9-11 0-3-2-6-4-6-1 2-3 2-5 2s-4 0-5-2C5 4 3 7 3 10c0 5 2 10 9 11z", false), .path("M12 21V9", false), .path("M8 8l-3 2", false), .path("M16 8l3 2", false), .path("M9 14l-3 1", false), .path("M15 14l3 1", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .genusOrchid: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("stem", [.path("M12 21c0-4-1-6.5-3-8.5", false)]),
                PlantimV4Layer("leaves", [.path("M12 21c-3 .2-5.2-1.6-5.4-4.6C9.6 16.2 11.8 18 12 21Z", false)]),
                PlantimV4Layer("flower", [.circle(12, 6.5, 2.2, true), .circle(8.4, 6, 1.8, false), .circle(15.6, 6, 1.8, false)]),
            ],
            .base: [
                PlantimV4Layer("stem", [.path("M12 21c0-4-1-6.5-3-8.5", false)]),
                PlantimV4Layer("leaves", [.path("M12 21c-3 .2-5.2-1.6-5.4-4.6C9.6 16.2 11.8 18 12 21Z", false), .path("M12 21c3 .2 5.2-1.6 5.4-4.6C14.4 16.2 12.2 18 12 21Z", false)]),
                PlantimV4Layer("flower", [.circle(12, 7, 2, true), .circle(8.6, 5.4, 1.6, false), .circle(15.4, 5.4, 1.6, false), .circle(9.6, 9.4, 1.6, false), .circle(14.4, 9.4, 1.6, false)]),
            ],
            .display: [
                PlantimV4Layer("stem", [.path("M12 21c0-4-1-6.5-3-8.5", false)]),
                PlantimV4Layer("leaves", [.path("M12 21c-3 .2-5.2-1.6-5.4-4.6C9.6 16.2 11.8 18 12 21Z", false), .path("M12 21c3 .2 5.2-1.6 5.4-4.6C14.4 16.2 12.2 18 12 21Z", false)]),
                PlantimV4Layer("flower", [.circle(12, 7, 2, true), .circle(8.6, 5.4, 1.6, false), .circle(15.4, 5.4, 1.6, false), .circle(9.6, 9.4, 1.6, false), .circle(14.4, 9.4, 1.6, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["stem"],
        multicolor: ["stem": .leaf700, "leaves": .leaf700, "flower": .bloom500]
    ),
    .genusPalm: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("trunk", [.path("M12 21v-9", false)]),
                PlantimV4Layer("fronds", [.path("M12 12C8 11 5 8.5 4 5", false), .path("M12 12C16 11 19 8.5 20 5", false), .path("M12 12C11 8.5 11 5.5 12 3", false)]),
            ],
            .base: [
                PlantimV4Layer("trunk", [.path("M12 21v-9", false)]),
                PlantimV4Layer("fronds", [.path("M12 12C8.5 11 5.5 8 4.5 4.5", false), .path("M12 12C15.5 11 18.5 8 19.5 4.5", false), .path("M12 12C10.5 8.5 10 5.5 11 3", false), .path("M12 12C13.5 8.5 14 5.5 13 3", false), .path("M12 12C8.5 12.5 5.5 12 3.5 10.5", false), .path("M12 12C15.5 12.5 18.5 12 20.5 10.5", false)]),
            ],
            .display: [
                PlantimV4Layer("trunk", [.path("M12 21v-9", false)]),
                PlantimV4Layer("fronds", [.path("M12 12C8.5 11 5.5 8 4.5 4.5", false), .path("M12 12C15.5 11 18.5 8 19.5 4.5", false), .path("M12 12C10.5 8.5 10 5.5 11 3", false), .path("M12 12C13.5 8.5 14 5.5 13 3", false), .path("M12 12C8.5 12.5 5.5 12 3.5 10.5", false), .path("M12 12C15.5 12.5 18.5 12 20.5 10.5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["trunk"],
        multicolor: ["trunk": .earth600, "fronds": .leaf700]
    ),
    .genusPeperomia: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M4 8a3 2.5 0 1 0 6 0a3 2.5 0 1 0 -6 0", false), .path("M11 6a3 2.5 0 1 0 6 0a3 2.5 0 1 0 -6 0", false), .path("M14 11a3 2.5 0 1 0 6 0a3 2.5 0 1 0 -6 0", false), .path("M8 11l3 5", false), .path("M15 9l-3 7", false), .path("M8 16h8l-1 5H9l-1-5z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M4 8a3 2.5 0 1 0 6 0a3 2.5 0 1 0 -6 0", false), .path("M11 6a3 2.5 0 1 0 6 0a3 2.5 0 1 0 -6 0", false), .path("M14 11a3 2.5 0 1 0 6 0a3 2.5 0 1 0 -6 0", false), .path("M8 11l3 5", false), .path("M15 9l-3 7", false), .path("M8 16h8l-1 5H9l-1-5z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M4 8a3 2.5 0 1 0 6 0a3 2.5 0 1 0 -6 0", false), .path("M11 6a3 2.5 0 1 0 6 0a3 2.5 0 1 0 -6 0", false), .path("M14 11a3 2.5 0 1 0 6 0a3 2.5 0 1 0 -6 0", false), .path("M8 11l3 5", false), .path("M15 9l-3 7", false), .path("M8 16h8l-1 5H9l-1-5z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .genusPothos: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M4 4c0 6 3 11 8 16", false), .path("M4 8c0-1.5 1-2.5 2.5-2.5S9 6.5 8 8c-1 1.5-2.5 1-4 0z", false), .path("M7 14c-.5-1.4.3-2.7 1.7-3S12 11.5 11 13c-1 1.5-2.6 1.4-4 1z", false), .path("M12 19c-1-1-1-2.5.2-3.4s2.7-.4 3 1c.3 1.4-1.2 2.7-3.2 2.4z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M4 4c0 6 3 11 8 16", false), .path("M4 8c0-1.5 1-2.5 2.5-2.5S9 6.5 8 8c-1 1.5-2.5 1-4 0z", false), .path("M7 14c-.5-1.4.3-2.7 1.7-3S12 11.5 11 13c-1 1.5-2.6 1.4-4 1z", false), .path("M12 19c-1-1-1-2.5.2-3.4s2.7-.4 3 1c.3 1.4-1.2 2.7-3.2 2.4z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M4 4c0 6 3 11 8 16", false), .path("M4 8c0-1.5 1-2.5 2.5-2.5S9 6.5 8 8c-1 1.5-2.5 1-4 0z", false), .path("M7 14c-.5-1.4.3-2.7 1.7-3S12 11.5 11 13c-1 1.5-2.6 1.4-4 1z", false), .path("M12 19c-1-1-1-2.5.2-3.4s2.7-.4 3 1c.3 1.4-1.2 2.7-3.2 2.4z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .genusSansevieria: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 17C11 12 10 6 8 3c-1 4-1 10 0 14", false), .path("M12 17c1-5 2-11 4-14 1 4 1 10 0 14", false), .path("M12 17V6", false), .path("M7 17h10l-1 4H8l-1-4z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 17C11 12 10 6 8 3c-1 4-1 10 0 14", false), .path("M12 17c1-5 2-11 4-14 1 4 1 10 0 14", false), .path("M12 17V6", false), .path("M7 17h10l-1 4H8l-1-4z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 17C11 12 10 6 8 3c-1 4-1 10 0 14", false), .path("M12 17c1-5 2-11 4-14 1 4 1 10 0 14", false), .path("M12 17V6", false), .path("M7 17h10l-1 4H8l-1-4z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .genusSucculent: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("rosette", [.path("M12 18V9", false), .path("M12 18C8.5 17 6.5 13.5 7 9.5", false), .path("M12 18C15.5 17 17.5 13.5 17 9.5", false)]),
                PlantimV4Layer("pot", [.path("M9 18h6l-.6 3h-4.8Z", false)]),
            ],
            .base: [
                PlantimV4Layer("rosette", [.path("M12 18V8", false), .path("M12 18C8.5 17 6.5 13.5 7 9.5", false), .path("M12 18C15.5 17 17.5 13.5 17 9.5", false), .path("M12 18C10 16 9 12.5 10 9", false), .path("M12 18C14 16 15 12.5 14 9", false)]),
                PlantimV4Layer("pot", [.path("M9 18h6l-.6 3h-4.8Z", false)]),
            ],
            .display: [
                PlantimV4Layer("rosette", [.path("M12 18V8", false), .path("M12 18C8.5 17 6.5 13.5 7 9.5", false), .path("M12 18C15.5 17 17.5 13.5 17 9.5", false), .path("M12 18C10 16 9 12.5 10 9", false), .path("M12 18C14 16 15 12.5 14 9", false)]),
                PlantimV4Layer("pot", [.path("M9 18h6l-.6 3h-4.8Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["rosette"],
        multicolor: ["rosette": .leaf700, "pot": .earth600]
    ),
    .healthAttention: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("leaf", [.path("M17.5 3.5C9.5 4 4 9.5 4 17.5C12 17 17 11.5 17.5 3.5Z", false)]),
                PlantimV4Layer("badge", [.path("M17.5 14.5v3.4", false), .circle(17.5, 20.4, 1, true)]),
            ],
            .base: [
                PlantimV4Layer("leaf", [.path("M17.5 3.5C9.5 4 4 9.5 4 17.5C12 17 17 11.5 17.5 3.5Z", false), .path("M7.5 14 14 7.5", false)]),
                PlantimV4Layer("badge", [.path("M17.5 14.5v3.4", false), .circle(17.5, 20.4, 1, true)]),
            ],
            .display: [
                PlantimV4Layer("leaf", [.path("M17.5 3.5C9.5 4 4 9.5 4 17.5C12 17 17 11.5 17.5 3.5Z", false), .path("M7.5 14 14 7.5", false)]),
                PlantimV4Layer("badge", [.path("M17.5 14.5v3.4", false), .circle(17.5, 20.4, 1, true)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["leaf", "badge"],
        multicolor: ["leaf": .statusWarning, "badge": .statusWarning]
    ),
    .healthCritical: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("leaf", [.path("M17.5 3.5C9.5 4 4 9.5 4 17.5C12 17 17 11.5 17.5 3.5Z", false)]),
                PlantimV4Layer("badge", [.path("M15.4 15.4l4.2 4.2", false), .path("M19.6 15.4l-4.2 4.2", false)]),
            ],
            .base: [
                PlantimV4Layer("leaf", [.path("M17.5 3.5C9.5 4 4 9.5 4 17.5C12 17 17 11.5 17.5 3.5Z", false), .path("M7.5 14 14 7.5", false)]),
                PlantimV4Layer("badge", [.path("M15.4 15.4l4.2 4.2", false), .path("M19.6 15.4l-4.2 4.2", false)]),
            ],
            .display: [
                PlantimV4Layer("leaf", [.path("M17.5 3.5C9.5 4 4 9.5 4 17.5C12 17 17 11.5 17.5 3.5Z", false), .path("M7.5 14 14 7.5", false)]),
                PlantimV4Layer("badge", [.path("M15.4 15.4l4.2 4.2", false), .path("M19.6 15.4l-4.2 4.2", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["leaf", "badge"],
        multicolor: ["leaf": .statusError, "badge": .statusError]
    ),
    .healthHealthy: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("leaf", [.path("M17.5 3.5C9.5 4 4 9.5 4 17.5C12 17 17 11.5 17.5 3.5Z", false)]),
                PlantimV4Layer("badge", [.path("M14.5 18l1.8 1.8 3.2-3.4", false)]),
            ],
            .base: [
                PlantimV4Layer("leaf", [.path("M17.5 3.5C9.5 4 4 9.5 4 17.5C12 17 17 11.5 17.5 3.5Z", false), .path("M7.5 14 14 7.5", false)]),
                PlantimV4Layer("badge", [.path("M14.5 18l1.8 1.8 3.2-3.4", false)]),
            ],
            .display: [
                PlantimV4Layer("leaf", [.path("M17.5 3.5C9.5 4 4 9.5 4 17.5C12 17 17 11.5 17.5 3.5Z", false), .path("M7.5 14 14 7.5", false)]),
                PlantimV4Layer("badge", [.path("M14.5 18l1.8 1.8 3.2-3.4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["leaf", "badge"],
        multicolor: ["leaf": .statusSuccess, "badge": .statusSuccess]
    ),
    .locationPin: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M20 10.5C20 15.5 12 22 12 22s-8-6.5-8-11.5a8 8 0 0 1 16 0Z", false), .circle(12, 10.5, 3, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M20 10.5C20 15.5 12 22 12 22s-8-6.5-8-11.5a8 8 0 0 1 16 0Z", false), .circle(12, 10.5, 3, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M20 10.5C20 15.5 12 22 12 22s-8-6.5-8-11.5a8 8 0 0 1 16 0Z", false), .circle(12, 10.5, 3, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .bloom500]
    ),
    .navCalendarCheck: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-13a2 2 0 0 1 2 -2Z", false), .path("M3 9L21 9", false), .path("M8 2L8 6", false), .path("M16 2L16 6", false), .path("M8.5 15.5l2.5 2.5 4.5-5", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-13a2 2 0 0 1 2 -2Z", false), .path("M3 9L21 9", false), .path("M8 2L8 6", false), .path("M16 2L16 6", false), .path("M8.5 15.5l2.5 2.5 4.5-5", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-13a2 2 0 0 1 2 -2Z", false), .path("M3 9L21 9", false), .path("M8 2L8 6", false), .path("M16 2L16 6", false), .path("M8.5 15.5l2.5 2.5 4.5-5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .navCalendarLeaf: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("frame", [.path("M4 6.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z", false)]),
                PlantimV4Layer("header", [.path("M4 8.6h16", false)]),
                PlantimV4Layer("leaf", [.path("M12 10.6C9.273 12.039 8.4 14.094 8.4 15.287C8.4 16.602 9.873 17.794 12 18C14.127 17.794 15.6 16.602 15.6 15.287C15.6 14.094 14.727 12.039 12 10.6Z", false)]),
            ],
            .base: [
                PlantimV4Layer("frame", [.path("M4 6.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z", false)]),
                PlantimV4Layer("header", [.path("M4 8.5h16", false), .path("M8 3.5v3", false), .path("M16 3.5v3", false)]),
                PlantimV4Layer("leaf", [.path("M12 10.4C9.424 11.8 8.6 13.8 8.6 14.96C8.6 16.24 9.991 17.4 12 17.6C14.009 17.4 15.4 16.24 15.4 14.96C15.4 13.8 14.576 11.8 12 10.4Z", false), .path("M12 16.4V12", false)]),
            ],
            .display: [
                PlantimV4Layer("frame", [.path("M4 6.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z", false)]),
                PlantimV4Layer("header", [.path("M4 8.5h16", false), .path("M8 3.5v3", false), .path("M16 3.5v3", false)]),
                PlantimV4Layer("leaf", [.path("M12 10.4C9.424 11.8 8.6 13.8 8.6 14.96C8.6 16.24 9.991 17.4 12 17.6C14.009 17.4 15.4 16.24 15.4 14.96C15.4 13.8 14.576 11.8 12 10.4Z", false), .path("M12 16.4V12", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["frame", "header"],
        multicolor: ["frame": .ink900, "header": .ink900, "leaf": .leaf500]
    ),
    .navCalendarPlain: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-13a2 2 0 0 1 2 -2Z", false), .path("M3 9L21 9", false), .path("M8 2L8 6", false), .path("M16 2L16 6", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-13a2 2 0 0 1 2 -2Z", false), .path("M3 9L21 9", false), .path("M8 2L8 6", false), .path("M16 2L16 6", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-13a2 2 0 0 1 2 -2Z", false), .path("M3 9L21 9", false), .path("M8 2L8 6", false), .path("M16 2L16 6", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .navChatBubble: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", false), .path("M8 9L16 9", false), .path("M8 12.5L13 12.5", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", false), .path("M8 9L16 9", false), .path("M8 12.5L13 12.5", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", false), .path("M8 9L16 9", false), .path("M8 12.5L13 12.5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .navChatDots: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("bubble", [.path("M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z", false)]),
                PlantimV4Layer("dots", [.circle(8.2, 12, 1.6, true), .circle(12, 12, 1.6, true), .circle(15.8, 12, 1.6, true)]),
            ],
            .base: [
                PlantimV4Layer("bubble", [.path("M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z", false)]),
                PlantimV4Layer("dots", [.circle(8.1, 12, 1.2, true), .circle(11.9, 12, 1.2, true), .circle(15.7, 12, 1.2, true)]),
            ],
            .display: [
                PlantimV4Layer("bubble", [.path("M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z", false)]),
                PlantimV4Layer("dots", [.circle(8.1, 12, 1.2, true), .circle(11.9, 12, 1.2, true), .circle(15.7, 12, 1.2, true)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["bubble"],
        multicolor: ["bubble": .leaf700, "dots": .leaf300]
    ),
    .navChatLeaf: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("bubble", [.path("M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z", false)]),
                PlantimV4Layer("leaf", [.path("M12 7.2C9.576 8.6 8.8 10.6 8.8 11.76C8.8 13.04 10.109 14.2 12 14.4C13.891 14.2 15.2 13.04 15.2 11.76C15.2 10.6 14.424 8.6 12 7.2Z", false)]),
            ],
            .base: [
                PlantimV4Layer("bubble", [.path("M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z", false)]),
                PlantimV4Layer("leaf", [.path("M12 7.2C9.727 8.561 9 10.506 9 11.633C9 12.878 10.227 14.006 12 14.2C13.773 14.006 15 12.878 15 11.633C15 10.506 14.273 8.561 12 7.2Z", false), .path("M12 13.4V9", false)]),
            ],
            .display: [
                PlantimV4Layer("bubble", [.path("M8.1 19.6A8.5 8.5 0 1 0 4.35 15.9L3.1 20.9Z", false)]),
                PlantimV4Layer("leaf", [.path("M12 7.2C9.727 8.561 9 10.506 9 11.633C9 12.878 10.227 14.006 12 14.2C13.773 14.006 15 12.878 15 11.633C15 10.506 14.273 8.561 12 7.2Z", false), .path("M12 13.4V9", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["bubble"],
        multicolor: ["bubble": .leaf700, "leaf": .leaf300]
    ),
    .navFeedCards: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("back", [.path("M7.5 7h11a1.5 1.5 0 0 1 1.5 1.5v7.5", false)]),
                PlantimV4Layer("front", [.rect(3.5, 9.5, 13, 10.5, 2, false)]),
            ],
            .base: [
                PlantimV4Layer("back", [.path("M7 6.5h12a1.5 1.5 0 0 1 1.5 1.5v8", false)]),
                PlantimV4Layer("front", [.rect(3.5, 9, 13, 11, 2, false)]),
            ],
            .display: [
                PlantimV4Layer("back", [.path("M7 6.5h12a1.5 1.5 0 0 1 1.5 1.5v8", false)]),
                PlantimV4Layer("front", [.rect(3.5, 9, 13, 11, 2, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["front"],
        multicolor: ["front": .ink900, "back": .ink500]
    ),
    .navFeedStream: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M4 5h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1Z", false), .path("M9 6.2L21 6.2", false), .path("M9 8.4L17 8.4", false), .path("M4 14h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1Z", false), .path("M9 15.2L21 15.2", false), .path("M9 17.4L17 17.4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M4 5h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1Z", false), .path("M9 6.2L21 6.2", false), .path("M9 8.4L17 8.4", false), .path("M4 14h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1Z", false), .path("M9 15.2L21 15.2", false), .path("M9 17.4L17 17.4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M4 5h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1Z", false), .path("M9 6.2L21 6.2", false), .path("M9 8.4L17 8.4", false), .path("M4 14h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1Z", false), .path("M9 15.2L21 15.2", false), .path("M9 17.4L17 17.4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .navFeedWaves: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M5 13a6 6 0 0 1 6 6", false), .path("M5 7a12 12 0 0 1 12 12", false)]),
                PlantimV4Layer("accent", [.circle(5.5, 18.5, 1.4, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M5 13a6 6 0 0 1 6 6", false), .path("M5 7a12 12 0 0 1 12 12", false)]),
                PlantimV4Layer("accent", [.circle(5.5, 18.5, 1.4, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M5 13a6 6 0 0 1 6 6", false), .path("M5 7a12 12 0 0 1 12 12", false)]),
                PlantimV4Layer("accent", [.circle(5.5, 18.5, 1.4, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900, "accent": .ink900]
    ),
    .navGardenBeds: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M3 9c3-2 15-2 18 0", false), .path("M3 14c3-2 15-2 18 0", false), .path("M3 19c3-2 15-2 18 0", false)]),
                PlantimV4Layer("accent", [.circle(8, 6, 1, false), .circle(16, 6, 1, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M3 9c3-2 15-2 18 0", false), .path("M3 14c3-2 15-2 18 0", false), .path("M3 19c3-2 15-2 18 0", false)]),
                PlantimV4Layer("accent", [.circle(8, 6, 1, false), .circle(16, 6, 1, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M3 9c3-2 15-2 18 0", false), .path("M3 14c3-2 15-2 18 0", false), .path("M3 19c3-2 15-2 18 0", false)]),
                PlantimV4Layer("accent", [.circle(8, 6, 1, false), .circle(16, 6, 1, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900, "accent": .ink900]
    ),
    .navGardenPlot: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M12 3L12 21", false), .path("M3 12L21 12", false)]),
                PlantimV4Layer("accent", [.circle(7.5, 7.5, 1.3, false), .circle(16.5, 16.5, 1.3, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M12 3L12 21", false), .path("M3 12L21 12", false)]),
                PlantimV4Layer("accent", [.circle(7.5, 7.5, 1.3, false), .circle(16.5, 16.5, 1.3, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M12 3L12 21", false), .path("M3 12L21 12", false)]),
                PlantimV4Layer("accent", [.circle(7.5, 7.5, 1.3, false), .circle(16.5, 16.5, 1.3, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900, "accent": .ink900]
    ),
    .navGardenSprouts: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M4 20h16", false), .path("M12 20L12 12", false), .path("M12 14c-1.4-1-3.4-.6-3.8 1", false), .path("M12 12c1.4-1 3.4-.6 3.8 1", false), .path("M7.5 20L7.5 16", false), .path("M7.5 17.5c-1-.8-2.4-.4-2.7.8", false), .path("M16.5 20L16.5 16", false), .path("M16.5 17.5c1-.8 2.4-.4 2.7.8", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M4 20h16", false), .path("M12 20L12 12", false), .path("M12 14c-1.4-1-3.4-.6-3.8 1", false), .path("M12 12c1.4-1 3.4-.6 3.8 1", false), .path("M7.5 20L7.5 16", false), .path("M7.5 17.5c-1-.8-2.4-.4-2.7.8", false), .path("M16.5 20L16.5 16", false), .path("M16.5 17.5c1-.8 2.4-.4 2.7.8", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M4 20h16", false), .path("M12 20L12 12", false), .path("M12 14c-1.4-1-3.4-.6-3.8 1", false), .path("M12 12c1.4-1 3.4-.6 3.8 1", false), .path("M7.5 20L7.5 16", false), .path("M7.5 17.5c-1-.8-2.4-.4-2.7.8", false), .path("M16.5 20L16.5 16", false), .path("M16.5 17.5c1-.8 2.4-.4 2.7.8", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .navPlantLeaf: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("leaf", [.path("M12 3.6C7.4 6.9 5.9 11.6 5.9 14.4C5.9 17.5 8.4 20.2 12 20.7C15.6 20.2 18.1 17.5 18.1 14.4C18.1 11.6 16.6 6.9 12 3.6Z", false)]),
                PlantimV4Layer("midrib", [.path("M12 18.8V7.2", false)]),
            ],
            .base: [
                PlantimV4Layer("leaf", [.path("M12 3C7 6.5 5.4 11.5 5.4 14.4C5.4 17.6 8.1 20.5 12 21C15.9 20.5 18.6 17.6 18.6 14.4C18.6 11.5 17 6.5 12 3Z", false)]),
                PlantimV4Layer("midrib", [.path("M12 19.5V6.5", false)]),
            ],
            .display: [
                PlantimV4Layer("leaf", [.path("M12 3C7 6.5 5.4 11.5 5.4 14.4C5.4 17.6 8.1 20.5 12 21C15.9 20.5 18.6 17.6 18.6 14.4C18.6 11.5 17 6.5 12 3Z", false)]),
                PlantimV4Layer("midrib", [.path("M12 19.5V6.5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["leaf"],
        multicolor: ["leaf": .leaf700, "midrib": .leaf500]
    ),
    .navPlantPotted: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M6 13L18 13", false), .path("M7 13l1.2 7h7.6l1.2-7", false), .path("M12 13L12 8", false), .path("M12 11C10 11 8.5 9.5 8.5 7.5c2 0 3.5 1.5 3.5 3.5z", false), .path("M12 10C14 10 15.5 8.5 15.5 6.5c-2 0-3.5 1.5-3.5 3.5z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M6 13L18 13", false), .path("M7 13l1.2 7h7.6l1.2-7", false), .path("M12 13L12 8", false), .path("M12 11C10 11 8.5 9.5 8.5 7.5c2 0 3.5 1.5 3.5 3.5z", false), .path("M12 10C14 10 15.5 8.5 15.5 6.5c-2 0-3.5 1.5-3.5 3.5z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M6 13L18 13", false), .path("M7 13l1.2 7h7.6l1.2-7", false), .path("M12 13L12 8", false), .path("M12 11C10 11 8.5 9.5 8.5 7.5c2 0 3.5 1.5 3.5 3.5z", false), .path("M12 10C14 10 15.5 8.5 15.5 6.5c-2 0-3.5 1.5-3.5 3.5z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .navPlantSprout: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M6 18h12", false), .path("M12 18L12 10", false), .path("M12 13C9.5 13 8 11 8 8.5c2.5 0 4 2 4 4.5z", false), .path("M12 11C14.5 11 16 9 16 6.5c-2.5 0-4 2-4 4.5z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M6 18h12", false), .path("M12 18L12 10", false), .path("M12 13C9.5 13 8 11 8 8.5c2.5 0 4 2 4 4.5z", false), .path("M12 11C14.5 11 16 9 16 6.5c-2.5 0-4 2-4 4.5z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M6 18h12", false), .path("M12 18L12 10", false), .path("M12 13C9.5 13 8 11 8 8.5c2.5 0 4 2 4 4.5z", false), .path("M12 11C14.5 11 16 9 16 6.5c-2.5 0-4 2-4 4.5z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .navTodayLeaf: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("leaf", [.path("M12 3.6C7.4 6.9 5.9 11.6 5.9 14.4C5.9 17.5 8.4 20.2 12 20.7C15.6 20.2 18.1 17.5 18.1 14.4C18.1 11.6 16.6 6.9 12 3.6Z", false)]),
                PlantimV4Layer("midrib", [.path("M12 18.8V7.2", false)]),
            ],
            .base: [
                PlantimV4Layer("leaf", [.path("M12 3C7 6.5 5.4 11.5 5.4 14.4C5.4 17.6 8.1 20.5 12 21C15.9 20.5 18.6 17.6 18.6 14.4C18.6 11.5 17 6.5 12 3Z", false)]),
                PlantimV4Layer("midrib", [.path("M12 19.5V6.5", false)]),
            ],
            .display: [
                PlantimV4Layer("leaf", [.path("M12 3C7 6.5 5.4 11.5 5.4 14.4C5.4 17.6 8.1 20.5 12 21C15.9 20.5 18.6 17.6 18.6 14.4C18.6 11.5 17 6.5 12 3Z", false)]),
                PlantimV4Layer("midrib", [.path("M12 19.5V6.5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["leaf"],
        multicolor: ["leaf": .leaf700, "midrib": .leaf500]
    ),
    .navTodaySun: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 12, 4, false), .path("M12 3L12 5", false), .path("M12 19L12 21", false), .path("M3 12L5 12", false), .path("M19 12L21 12", false), .path("M5.6 5.6 7 7", false), .path("M17 17l1.4 1.4", false), .path("M18.4 5.6 17 7", false), .path("M5.6 18.4 7 17", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 12, 4, false), .path("M12 3L12 5", false), .path("M12 19L12 21", false), .path("M3 12L5 12", false), .path("M19 12L21 12", false), .path("M5.6 5.6 7 7", false), .path("M17 17l1.4 1.4", false), .path("M18.4 5.6 17 7", false), .path("M5.6 18.4 7 17", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 12, 4, false), .path("M12 3L12 5", false), .path("M12 19L12 21", false), .path("M3 12L5 12", false), .path("M19 12L21 12", false), .path("M5.6 5.6 7 7", false), .path("M17 17l1.4 1.4", false), .path("M18.4 5.6 17 7", false), .path("M5.6 18.4 7 17", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .navTodaySunrise: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M3 19h18", false), .path("M7.5 19a4.5 4.5 0 0 1 9 0", false), .path("M12 5L12 7", false), .path("M5.5 11l1.3 1.3", false), .path("M18.5 11 17.2 12.3", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M3 19h18", false), .path("M7.5 19a4.5 4.5 0 0 1 9 0", false), .path("M12 5L12 7", false), .path("M5.5 11l1.3 1.3", false), .path("M18.5 11 17.2 12.3", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M3 19h18", false), .path("M7.5 19a4.5 4.5 0 0 1 9 0", false), .path("M12 5L12 7", false), .path("M5.5 11l1.3 1.3", false), .path("M18.5 11 17.2 12.3", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .navigationBack: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m12 8-4 4 4 4", false), .path("M16 12H8", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m12 8-4 4 4 4", false), .path("M16 12H8", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m12 8-4 4 4 4", false), .path("M16 12H8", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .navigationClose: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m15 9-6 6", false), .path("m9 9 6 6", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m15 9-6 6", false), .path("m9 9 6 6", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m15 9-6 6", false), .path("m9 9 6 6", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .navigationCollapse: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m8 14 4-4 4 4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m8 14 4-4 4 4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m8 14 4-4 4 4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .navigationExpand: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m16 10-4 4-4-4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m16 10-4 4-4-4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m16 10-4 4-4-4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .navigationForward: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m12 16 4-4-4-4", false), .path("M8 12h8", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m12 16 4-4-4-4", false), .path("M8 12h8", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m12 16 4-4-4-4", false), .path("M8 12h8", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
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
    .navigationNext: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m10 8 4 4-4 4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m10 8 4 4-4 4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m10 8 4 4-4 4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .navigationPrevious: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m14 16-4-4 4-4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m14 16-4-4 4-4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m14 16-4-4 4-4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .plantAdd: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("ground", [.path("M3 21h11", false)]),
                PlantimV4Layer("stem", [.path("M8.5 21v-6", false)]),
                PlantimV4Layer("leaves", [.path("M8.5 15C6.7 15.4 4.7 14.4 4.3 11.9C6.6 11.5 8.4 12.7 8.5 15Z", false), .path("M8.5 15C10.3 15.4 12.3 14.4 12.7 11.9C10.4 11.5 8.6 12.7 8.5 15Z", false)]),
                PlantimV4Layer("badge", [.circle(18, 6.5, 4.5, false), .path("M18 4.5v4", false), .path("M15.5 6.5h5", false)]),
            ],
            .base: [
                PlantimV4Layer("ground", [.path("M3 21h11", false)]),
                PlantimV4Layer("stem", [.path("M8.5 21v-6", false)]),
                PlantimV4Layer("leaves", [.path("M8.5 15C6.7 15.4 4.7 14.4 4.3 11.9C6.6 11.5 8.4 12.7 8.5 15Z", false), .path("M8.5 15C10.3 15.4 12.3 14.4 12.7 11.9C10.4 11.5 8.6 12.7 8.5 15Z", false)]),
                PlantimV4Layer("badge", [.circle(18, 7, 4, false), .path("M18 5.2v3.6", false), .path("M16.2 7h3.6", false)]),
            ],
            .display: [
                PlantimV4Layer("ground", [.path("M3 21h11", false)]),
                PlantimV4Layer("stem", [.path("M8.5 21v-6", false)]),
                PlantimV4Layer("leaves", [.path("M8.5 15C6.7 15.4 4.7 14.4 4.3 11.9C6.6 11.5 8.4 12.7 8.5 15Z", false), .path("M8.5 15C10.3 15.4 12.3 14.4 12.7 11.9C10.4 11.5 8.6 12.7 8.5 15Z", false)]),
                PlantimV4Layer("badge", [.circle(18, 7, 4, false), .path("M18 5.2v3.6", false), .path("M16.2 7h3.6", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["stem", "leaves", "badge"],
        multicolor: ["ground": .earth600, "stem": .leaf700, "leaves": .leaf500, "badge": .leaf700]
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
                PlantimV4Layer("leaves", [.path("M8.8 12C6.9 12.4 4.6 11.6 4.1 9.4C4 8.9 4 8.4 4.1 7.9C6.7 7.5 8.7 9.4 8.8 12Z", false), .path("M15.2 9.5C17.1 9.9 19.4 9.1 19.9 6.9C20 6.4 20 5.9 19.9 5.4C17.3 5 15.3 6.9 15.2 9.5Z", false), .path("M5.6 9C7 9.8 8.2 10.8 8.8 12", false), .path("M18.4 6.5C17 7.3 15.8 8.3 15.2 9.5", false)]),
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
    .plantPruning: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(6, 6, 3, false), .circle(6, 18, 3, false), .path("M20 4 8.12 15.88", false), .path("M14.47 14.48 20 20", false), .path("M8.12 8.12 12 12", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(6, 6, 3, false), .circle(6, 18, 3, false), .path("M20 4 8.12 15.88", false), .path("M14.47 14.48 20 20", false), .path("M8.12 8.12 12 12", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(6, 6, 3, false), .circle(6, 18, 3, false), .path("M20 4 8.12 15.88", false), .path("M14.47 14.48 20 20", false), .path("M8.12 8.12 12 12", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .plantRelated: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("back", [.path("M15.5 4C9.5 5 5.5 9.5 6 15.5C12 15 16 10.5 15.5 4Z", false)]),
                PlantimV4Layer("front", [.path("M19 9C14.5 9.8 11.5 13.2 12 17.8C16.5 17 19.5 13.6 19 9Z", false)]),
            ],
            .base: [
                PlantimV4Layer("back", [.path("M15.5 4C9.5 5 5.5 9.5 6 15.5C12 15 16 10.5 15.5 4Z", false), .path("M8.5 13 13.5 7", false)]),
                PlantimV4Layer("front", [.path("M19 9C14.5 9.8 11.5 13.2 12 17.8C16.5 17 19.5 13.6 19 9Z", false)]),
            ],
            .display: [
                PlantimV4Layer("back", [.path("M15.5 4C9.5 5 5.5 9.5 6 15.5C12 15 16 10.5 15.5 4Z", false), .path("M8.5 13 13.5 7", false)]),
                PlantimV4Layer("front", [.path("M19 9C14.5 9.8 11.5 13.2 12 17.8C16.5 17 19.5 13.6 19 9Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["front"],
        multicolor: ["back": .leaf300, "front": .leaf700]
    ),
    .plantRemove: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("ground", [.path("M3 21h11", false)]),
                PlantimV4Layer("stem", [.path("M8.5 21v-6", false)]),
                PlantimV4Layer("leaves", [.path("M8.5 15C6.7 15.4 4.7 14.4 4.3 11.9C6.6 11.5 8.4 12.7 8.5 15Z", false), .path("M8.5 15C10.3 15.4 12.3 14.4 12.7 11.9C10.4 11.5 8.6 12.7 8.5 15Z", false)]),
                PlantimV4Layer("badge", [.circle(18, 6.5, 4.5, false), .path("M15.5 6.5h5", false)]),
            ],
            .base: [
                PlantimV4Layer("ground", [.path("M3 21h11", false)]),
                PlantimV4Layer("stem", [.path("M8.5 21v-6", false)]),
                PlantimV4Layer("leaves", [.path("M8.5 15C6.7 15.4 4.7 14.4 4.3 11.9C6.6 11.5 8.4 12.7 8.5 15Z", false), .path("M8.5 15C10.3 15.4 12.3 14.4 12.7 11.9C10.4 11.5 8.6 12.7 8.5 15Z", false)]),
                PlantimV4Layer("badge", [.circle(18, 7, 4, false), .path("M16.2 7h3.6", false)]),
            ],
            .display: [
                PlantimV4Layer("ground", [.path("M3 21h11", false)]),
                PlantimV4Layer("stem", [.path("M8.5 21v-6", false)]),
                PlantimV4Layer("leaves", [.path("M8.5 15C6.7 15.4 4.7 14.4 4.3 11.9C6.6 11.5 8.4 12.7 8.5 15Z", false), .path("M8.5 15C10.3 15.4 12.3 14.4 12.7 11.9C10.4 11.5 8.6 12.7 8.5 15Z", false)]),
                PlantimV4Layer("badge", [.circle(18, 7, 4, false), .path("M16.2 7h3.6", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["stem", "leaves", "badge"],
        multicolor: ["ground": .earth600, "stem": .leaf700, "leaves": .leaf500, "badge": .statusError]
    ),
    .plantSeedling: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("soil", [.path("M5 20h14", false)]),
                PlantimV4Layer("stem", [.path("M12 20v-6", false)]),
                PlantimV4Layer("leaf", [.path("M12 14C9.6 14 7.6 12 7.6 9.5C10 9.5 12 11.5 12 14Z", false)]),
                PlantimV4Layer("seed", [.path("M9 20c0-1.7 1.3-3 3-3s3 1.3 3 3Z", false)]),
            ],
            .base: [
                PlantimV4Layer("soil", [.path("M5 20h14", false)]),
                PlantimV4Layer("stem", [.path("M12 20v-6", false)]),
                PlantimV4Layer("leaf", [.path("M12 14C9.6 14 7.6 12 7.6 9.5C10 9.5 12 11.5 12 14Z", false)]),
                PlantimV4Layer("seed", [.path("M9 20c0-1.7 1.3-3 3-3s3 1.3 3 3Z", false)]),
            ],
            .display: [
                PlantimV4Layer("soil", [.path("M5 20h14", false)]),
                PlantimV4Layer("stem", [.path("M12 20v-6", false)]),
                PlantimV4Layer("leaf", [.path("M12 14C9.6 14 7.6 12 7.6 9.5C10 9.5 12 11.5 12 14Z", false)]),
                PlantimV4Layer("seed", [.path("M9 20c0-1.7 1.3-3 3-3s3 1.3 3 3Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["stem", "leaf"],
        multicolor: ["soil": .earth600, "stem": .leaf700, "leaf": .leaf500, "seed": .earth400]
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
                PlantimV4Layer("leaves", [.path("M12 13C9.6 13.9 6.2 13.2 5 10.3C4.5 9.2 4.6 8 4.8 7C8.5 6.3 11.7 8.9 12 13Z", false), .path("M12 13C14.4 13.9 17.8 13.2 19 10.3C19.5 9.2 19.4 8 19.2 7C15.5 6.3 12.3 8.9 12 13Z", false), .path("M6.6 8.2C8.4 9.3 10.8 11.1 12 13", false), .path("M17.4 8.2C15.6 9.3 13.2 11.1 12 13", false)]),
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
    .plantThriving: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("ground", [.path("M6 21h12", false)]),
                PlantimV4Layer("stem", [.path("M12 21V9", false)]),
                PlantimV4Layer("leaves", [.path("M12 16C9.5 16.4 6.8 15 6.4 12C9 11.6 11.6 13 12 16Z", false), .path("M12 13C14.5 13.4 17.2 12 17.6 9C15 8.6 12.4 10 12 13Z", false)]),
            ],
            .base: [
                PlantimV4Layer("ground", [.path("M6 21h12", false)]),
                PlantimV4Layer("stem", [.path("M12 21V8", false)]),
                PlantimV4Layer("leaves", [.path("M12 16C9.5 16.4 6.8 15 6.4 12C9 11.6 11.6 13 12 16Z", false), .path("M12 13C14.5 13.4 17.2 12 17.6 9C15 8.6 12.4 10 12 13Z", false), .path("M12 8.5C10 8 8.5 6 8.6 3.5C11 4 12.4 6 12 8.5Z", false)]),
                PlantimV4Layer("spark", [.path("M18 3.5v3", false), .path("M16.5 5h3", false)]),
            ],
            .display: [
                PlantimV4Layer("ground", [.path("M6 21h12", false)]),
                PlantimV4Layer("stem", [.path("M12 21V8", false)]),
                PlantimV4Layer("leaves", [.path("M12 16C9.5 16.4 6.8 15 6.4 12C9 11.6 11.6 13 12 16Z", false), .path("M12 13C14.5 13.4 17.2 12 17.6 9C15 8.6 12.4 10 12 13Z", false), .path("M12 8.5C10 8 8.5 6 8.6 3.5C11 4 12.4 6 12 8.5Z", false)]),
                PlantimV4Layer("spark", [.path("M18 3.5v3", false), .path("M16.5 5h3", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["stem", "leaves"],
        multicolor: ["ground": .earth600, "stem": .leaf700, "leaves": .leaf500, "spark": .sun500]
    ),
    .plantWatering: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 3s6.5 6.6 6.5 10.5a6.5 6.5 0 0 1-13 0C5.5 9.6 12 3 12 3Z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 3s6.5 6.6 6.5 10.5a6.5 6.5 0 0 1-13 0C5.5 9.6 12 3 12 3Z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 3s6.5 6.6 6.5 10.5a6.5 6.5 0 0 1-13 0C5.5 9.6 12 3 12 3Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water600]
    ),
    .plantWateringCan: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("can", [.path("M6 11h9a2 2 0 0 1 2 2v4a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-5a1 1 0 0 1 1-1Z", false), .path("M15 12l4-3v6", false)]),
                PlantimV4Layer("water", [.path("M20.5 18v3", false)]),
            ],
            .base: [
                PlantimV4Layer("can", [.path("M6 11h9a2 2 0 0 1 2 2v4a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-5a1 1 0 0 1 1-1Z", false), .path("M15 12l4-3v6", false), .path("M8 11V9a2 2 0 0 1 4 0v2", false)]),
                PlantimV4Layer("water", [.path("M20 18v2.5", false), .path("M22 17v2.5", false)]),
            ],
            .display: [
                PlantimV4Layer("can", [.path("M6 11h9a2 2 0 0 1 2 2v4a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-5a1 1 0 0 1 1-1Z", false), .path("M15 12l4-3v6", false), .path("M8 11V9a2 2 0 0 1 4 0v2", false)]),
                PlantimV4Layer("water", [.path("M20 18v2.5", false), .path("M22 17v2.5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["can"],
        multicolor: ["can": .ink900, "water": .water600]
    ),
    .plantWilting: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 21V8", false), .path("M12 8C12 8 8 6 7 3c3 0 5 1 5 5z", false), .path("M12 8C12 8 16 6 17 3c-3 0-5 1-5 5z", false), .path("M9 14c-1 1-3 1-4 0", false), .path("M15 14c1 1 3 1 4 0", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 21V8", false), .path("M12 8C12 8 8 6 7 3c3 0 5 1 5 5z", false), .path("M12 8C12 8 16 6 17 3c-3 0-5 1-5 5z", false), .path("M9 14c-1 1-3 1-4 0", false), .path("M15 14c1 1 3 1 4 0", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 21V8", false), .path("M12 8C12 8 8 6 7 3c3 0 5 1 5 5z", false), .path("M12 8C12 8 16 6 17 3c-3 0-5 1-5 5z", false), .path("M9 14c-1 1-3 1-4 0", false), .path("M15 14c1 1 3 1 4 0", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf500]
    ),
    .stageGrowing: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("ground", [.path("M6 21h12", false)]),
                PlantimV4Layer("stem", [.path("M12 21v-9", false)]),
                PlantimV4Layer("leaves", [.path("M12 15C9.7 15.4 7.2 14 6.8 11.2C9.3 10.8 11.6 12.2 12 15Z", false), .path("M12 12C14.3 12.4 16.8 11 17.2 8.2C14.7 7.8 12.4 9.2 12 12Z", false)]),
            ],
            .base: [
                PlantimV4Layer("ground", [.path("M6 21h12", false)]),
                PlantimV4Layer("stem", [.path("M12 21v-9", false)]),
                PlantimV4Layer("leaves", [.path("M12 15C9.7 15.4 7.2 14 6.8 11.2C9.3 10.8 11.6 12.2 12 15Z", false), .path("M12 12C14.3 12.4 16.8 11 17.2 8.2C14.7 7.8 12.4 9.2 12 12Z", false)]),
            ],
            .display: [
                PlantimV4Layer("ground", [.path("M6 21h12", false)]),
                PlantimV4Layer("stem", [.path("M12 21v-9", false)]),
                PlantimV4Layer("leaves", [.path("M12 15C9.7 15.4 7.2 14 6.8 11.2C9.3 10.8 11.6 12.2 12 15Z", false), .path("M12 12C14.3 12.4 16.8 11 17.2 8.2C14.7 7.8 12.4 9.2 12 12Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["stem", "leaves"],
        multicolor: ["ground": .earth600, "stem": .leaf700, "leaves": .leaf500]
    ),
    .stageMature: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("trunk", [.path("M12 21v-5", false)]),
                PlantimV4Layer("canopy", [.path("M9 16a4 4 0 0 1-2.4-7.2A4.5 4.5 0 0 1 12 3.2a4.5 4.5 0 0 1 5.4 5.6A4 4 0 0 1 15 16Z", false)]),
            ],
            .base: [
                PlantimV4Layer("trunk", [.path("M12 21v-6", false)]),
                PlantimV4Layer("canopy", [.path("M9 16a4 4 0 0 1-2.4-7.2A4.5 4.5 0 0 1 12 3.2a4.5 4.5 0 0 1 5.4 5.6A4 4 0 0 1 15 16Z", false)]),
                PlantimV4Layer("ground", [.path("M8 21h8", false)]),
            ],
            .display: [
                PlantimV4Layer("trunk", [.path("M12 21v-6", false)]),
                PlantimV4Layer("canopy", [.path("M9 16a4 4 0 0 1-2.4-7.2A4.5 4.5 0 0 1 12 3.2a4.5 4.5 0 0 1 5.4 5.6A4 4 0 0 1 15 16Z", false)]),
                PlantimV4Layer("ground", [.path("M8 21h8", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["canopy", "trunk"],
        multicolor: ["trunk": .earth600, "canopy": .leaf700, "ground": .earth400]
    ),
    .stageSeedling: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M6 20h12", false), .path("M12 20L12 15", false), .path("M12 16c-.8-1-2.2-.8-2.6.4", false), .path("M12 15c.8-1 2.2-.8 2.6.4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M6 20h12", false), .path("M12 20L12 15", false), .path("M12 16c-.8-1-2.2-.8-2.6.4", false), .path("M12 15c.8-1 2.2-.8 2.6.4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M6 20h12", false), .path("M12 20L12 15", false), .path("M12 16c-.8-1-2.2-.8-2.6.4", false), .path("M12 15c.8-1 2.2-.8 2.6.4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .statusError: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("M12 8L12 12", false), .path("M12 16L12.01 16", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("M12 8L12 12", false), .path("M12 16L12.01 16", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("M12 8L12 12", false), .path("M12 16L12.01 16", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .statusError]
    ),
    .statusInfo: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("M12 16v-4", false)]),
                PlantimV4Layer("accent", [.circle(12, 8, 1.1, true)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("M12 16v-4", false)]),
                PlantimV4Layer("accent", [.circle(12, 8, 1.1, true)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("M12 16v-4", false)]),
                PlantimV4Layer("accent", [.circle(12, 8, 1.1, true)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .statusInfo, "accent": .statusInfo]
    ),
    .statusLoading: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M21 12a9 9 0 1 1-6.219-8.56", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M21 12a9 9 0 1 1-6.219-8.56", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M21 12a9 9 0 1 1-6.219-8.56", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink500]
    ),
    .statusStreak: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .sun500]
    ),
    .statusSuccess: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M21.801 10A10 10 0 1 1 17 3.335", false), .path("m9 11 3 3L22 4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M21.801 10A10 10 0 1 1 17 3.335", false), .path("m9 11 3 3L22 4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M21.801 10A10 10 0 1 1 17 3.335", false), .path("m9 11 3 3L22 4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .statusSuccess]
    ),
    .statusSuccessCircle: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M21.801 10A10 10 0 1 1 17 3.335", false), .path("m9 11 3 3L22 4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M21.801 10A10 10 0 1 1 17 3.335", false), .path("m9 11 3 3L22 4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M21.801 10A10 10 0 1 1 17 3.335", false), .path("m9 11 3 3L22 4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .statusSuccess]
    ),
    .statusSuccessCircleAlt: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m9 12 2 2 4-4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m9 12 2 2 4-4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m9 12 2 2 4-4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .statusSuccess]
    ),
    .statusWarning: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", false), .path("M12 9v4", false)]),
                PlantimV4Layer("accent", [.circle(12, 17, 1.1, true)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", false), .path("M12 9v4", false)]),
                PlantimV4Layer("accent", [.circle(12, 17, 1.1, true)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", false), .path("M12 9v4", false)]),
                PlantimV4Layer("accent", [.circle(12, 17, 1.1, true)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .statusWarning, "accent": .statusWarning]
    ),
    .statusWarningAlt: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", false), .path("M12 9v4", false)]),
                PlantimV4Layer("accent", [.circle(12, 17, 1.1, true)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", false), .path("M12 9v4", false)]),
                PlantimV4Layer("accent", [.circle(12, 17, 1.1, true)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3", false), .path("M12 9v4", false)]),
                PlantimV4Layer("accent", [.circle(12, 17, 1.1, true)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900, "accent": .ink900]
    ),
    .taxonomyFamily: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 3c-2 1-3 2.5-3 4.5S10.5 11 12 11c1.5 0 3-1 3-3.5S14 4 12 3z", false), .path("M12 11L12 14", false), .path("M6 20v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2", false), .path("M6 20L6 21", false), .path("M12 14L12 21", false), .path("M18 20L18 21", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 3c-2 1-3 2.5-3 4.5S10.5 11 12 11c1.5 0 3-1 3-3.5S14 4 12 3z", false), .path("M12 11L12 14", false), .path("M6 20v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2", false), .path("M6 20L6 21", false), .path("M12 14L12 21", false), .path("M18 20L18 21", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 3c-2 1-3 2.5-3 4.5S10.5 11 12 11c1.5 0 3-1 3-3.5S14 4 12 3z", false), .path("M12 11L12 14", false), .path("M6 20v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2", false), .path("M6 20L6 21", false), .path("M12 14L12 21", false), .path("M18 20L18 21", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .taxonomyGenus: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 4, 2, false), .path("M9 10h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1Z", false), .path("M12 6L12 10", false), .path("M6 20v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2", false), .path("M18 8c1.5-.5 2.5 0 3 1-1 .5-2 .3-3-1z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 4, 2, false), .path("M9 10h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1Z", false), .path("M12 6L12 10", false), .path("M6 20v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2", false), .path("M18 8c1.5-.5 2.5 0 3 1-1 .5-2 .3-3-1z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 4, 2, false), .path("M9 10h6a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1Z", false), .path("M12 6L12 10", false), .path("M6 20v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2", false), .path("M18 8c1.5-.5 2.5 0 3 1-1 .5-2 .3-3-1z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .taxonomySpecies: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M11 3C6 4 3 8 3 13c5 0 9-3 10-8z", false), .path("M4 20L9 12", false), .path("M13 12l7-2 1 4-7 2a2 2 0 0 1-1-4z", false)]),
                PlantimV4Layer("accent", [.circle(18.5, 12.5, 0.5, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M11 3C6 4 3 8 3 13c5 0 9-3 10-8z", false), .path("M4 20L9 12", false), .path("M13 12l7-2 1 4-7 2a2 2 0 0 1-1-4z", false)]),
                PlantimV4Layer("accent", [.circle(18.5, 12.5, 0.5, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M11 3C6 4 3 8 3 13c5 0 9-3 10-8z", false), .path("M4 20L9 12", false), .path("M13 12l7-2 1 4-7 2a2 2 0 0 1-1-4z", false)]),
                PlantimV4Layer("accent", [.circle(18.5, 12.5, 0.5, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700, "accent": .leaf700]
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
    .utilityAlignJustify: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M3 5h18", false), .path("M3 12h18", false), .path("M3 19h18", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M3 5h18", false), .path("M3 12h18", false), .path("M3 19h18", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M3 5h18", false), .path("M3 12h18", false), .path("M3 19h18", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityArrowDown: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("m3 16 4 4 4-4", false), .path("M7 20V4", false), .path("M20 8h-5", false), .path("M15 10V6.5a2.5 2.5 0 0 1 5 0V10", false), .path("M15 14h5l-5 6h5", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("m3 16 4 4 4-4", false), .path("M7 20V4", false), .path("M20 8h-5", false), .path("M15 10V6.5a2.5 2.5 0 0 1 5 0V10", false), .path("M15 14h5l-5 6h5", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("m3 16 4 4 4-4", false), .path("M7 20V4", false), .path("M20 8h-5", false), .path("M15 10V6.5a2.5 2.5 0 0 1 5 0V10", false), .path("M15 14h5l-5 6h5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityArrowDownToDot: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 2v14", false), .path("m19 9-7 7-7-7", false)]),
                PlantimV4Layer("accent", [.circle(12, 21, 1, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 2v14", false), .path("m19 9-7 7-7-7", false)]),
                PlantimV4Layer("accent", [.circle(12, 21, 1, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 2v14", false), .path("m19 9-7 7-7-7", false)]),
                PlantimV4Layer("accent", [.circle(12, 21, 1, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900, "accent": .ink900]
    ),
    .utilityArrowUp: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("m3 8 4-4 4 4", false), .path("M7 4v16", false), .path("M20 8h-5", false), .path("M15 10V6.5a2.5 2.5 0 0 1 5 0V10", false), .path("M15 14h5l-5 6h5", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("m3 8 4-4 4 4", false), .path("M7 4v16", false), .path("M20 8h-5", false), .path("M15 10V6.5a2.5 2.5 0 0 1 5 0V10", false), .path("M15 14h5l-5 6h5", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("m3 8 4-4 4 4", false), .path("M7 4v16", false), .path("M20 8h-5", false), .path("M15 10V6.5a2.5 2.5 0 0 1 5 0V10", false), .path("M15 14h5l-5 6h5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityArrowUpFromDot: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("m5 9 7-7 7 7", false), .path("M12 16V2", false)]),
                PlantimV4Layer("accent", [.circle(12, 21, 1, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("m5 9 7-7 7 7", false), .path("M12 16V2", false)]),
                PlantimV4Layer("accent", [.circle(12, 21, 1, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("m5 9 7-7 7 7", false), .path("M12 16V2", false)]),
                PlantimV4Layer("accent", [.circle(12, 21, 1, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900, "accent": .ink900]
    ),
    .utilityAward: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526", false), .circle(12, 8, 6, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526", false), .circle(12, 8, 6, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526", false), .circle(12, 8, 6, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .sun500]
    ),
    .utilityBaby: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", false), .path("M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1", false)]),
                PlantimV4Layer("accent", [.circle(15, 12, 1.1, true), .circle(9, 12, 1.1, true)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", false), .path("M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1", false)]),
                PlantimV4Layer("accent", [.circle(15, 12, 1.1, true), .circle(9, 12, 1.1, true)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", false), .path("M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1", false)]),
                PlantimV4Layer("accent", [.circle(15, 12, 1.1, true), .circle(9, 12, 1.1, true)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .bloom500, "accent": .bloom500]
    ),
    .utilityBadgeCheck: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", false), .path("m9 12 2 2 4-4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", false), .path("m9 12 2 2 4-4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z", false), .path("m9 12 2 2 4-4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityBarChart3: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M3 3v16a2 2 0 0 0 2 2h16", false), .path("M18 17V9", false), .path("M13 17V5", false), .path("M8 17v-3", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M3 3v16a2 2 0 0 0 2 2h16", false), .path("M18 17V9", false), .path("M13 17V5", false), .path("M8 17v-3", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M3 3v16a2 2 0 0 0 2 2h16", false), .path("M18 17V9", false), .path("M13 17V5", false), .path("M8 17v-3", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityBell: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M10.268 21a2 2 0 0 0 3.464 0", false), .path("M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348", false), .circle(18, 5, 3, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M10.268 21a2 2 0 0 0 3.464 0", false), .path("M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348", false), .circle(18, 5, 3, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M10.268 21a2 2 0 0 0 3.464 0", false), .path("M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348", false), .circle(18, 5, 3, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityBellOff: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M10.268 21a2 2 0 0 0 3.464 0", false), .path("M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742", false), .path("m2 2 20 20", false), .path("M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M10.268 21a2 2 0 0 0 3.464 0", false), .path("M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742", false), .path("m2 2 20 20", false), .path("M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M10.268 21a2 2 0 0 0 3.464 0", false), .path("M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742", false), .path("m2 2 20 20", false), .path("M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityBot: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 6V2H8", false), .path("M15 11v2", false), .path("M2 12h2", false), .path("M20 12h2", false), .path("M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z", false), .path("M9 11v2", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 6V2H8", false), .path("M15 11v2", false), .path("M2 12h2", false), .path("M20 12h2", false), .path("M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z", false), .path("M9 11v2", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 6V2H8", false), .path("M15 11v2", false), .path("M2 12h2", false), .path("M20 12h2", false), .path("M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z", false), .path("M9 11v2", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water600]
    ),
    .utilityBrain: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("skull", [.path("M12 3.6C9.8 3.6 8.5 5.2 8.4 6.7C7 7.1 6.2 8.4 6.2 9.8C6.2 10.5 6.4 11.2 6.8 11.7C6.3 12.4 6 13.2 6 14.1C6 15.8 7.1 17.2 8.7 17.9C9 19.4 10.4 20.4 12 20.4C13.6 20.4 15 19.4 15.3 17.9C16.9 17.2 18 15.8 18 14.1C18 13.2 17.7 12.4 17.2 11.7C17.6 11.2 17.8 10.5 17.8 9.8C17.8 8.4 17 7.1 15.6 6.7C15.5 5.2 14.2 3.6 12 3.6Z", false)]),
                PlantimV4Layer("folds", [.path("M12 4V20", false)]),
            ],
            .base: [
                PlantimV4Layer("skull", [.path("M12 3.4C9.7 3.4 8.4 5 8.3 6.5C6.8 6.9 6 8.3 6 9.7C6 10.5 6.3 11.2 6.7 11.7C6.1 12.4 5.8 13.3 5.8 14.2C5.8 15.9 6.9 17.4 8.6 18C8.9 19.6 10.3 20.6 12 20.6C13.7 20.6 15.1 19.6 15.4 18C17.1 17.4 18.2 15.9 18.2 14.2C18.2 13.3 17.9 12.4 17.3 11.7C17.7 11.2 18 10.5 18 9.7C18 8.3 17.2 6.9 15.7 6.5C15.6 5 14.3 3.4 12 3.4Z", false)]),
                PlantimV4Layer("folds", [.path("M12 3.6V20.4", false), .path("M8.4 8.4C9.6 8.9 10.4 9.9 10.6 11", false), .path("M15.6 8.4C14.4 8.9 13.6 9.9 13.4 11", false), .path("M9 14.6C10 14.2 10.9 14.4 11.6 15.2", false), .path("M15 14.6C14 14.2 13.1 14.4 12.4 15.2", false)]),
            ],
            .display: [
                PlantimV4Layer("skull", [.path("M12 3.4C9.7 3.4 8.4 5 8.3 6.5C6.8 6.9 6 8.3 6 9.7C6 10.5 6.3 11.2 6.7 11.7C6.1 12.4 5.8 13.3 5.8 14.2C5.8 15.9 6.9 17.4 8.6 18C8.9 19.6 10.3 20.6 12 20.6C13.7 20.6 15.1 19.6 15.4 18C17.1 17.4 18.2 15.9 18.2 14.2C18.2 13.3 17.9 12.4 17.3 11.7C17.7 11.2 18 10.5 18 9.7C18 8.3 17.2 6.9 15.7 6.5C15.6 5 14.3 3.4 12 3.4Z", false)]),
                PlantimV4Layer("folds", [.path("M12 3.6V20.4", false), .path("M8.4 8.4C9.6 8.9 10.4 9.9 10.6 11", false), .path("M15.6 8.4C14.4 8.9 13.6 9.9 13.4 11", false), .path("M9 14.6C10 14.2 10.9 14.4 11.6 15.2", false), .path("M15 14.6C14 14.2 13.1 14.4 12.4 15.2", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["skull"],
        multicolor: ["skull": .bloom500, "folds": .bloom500]
    ),
    .utilityBug: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 20v-8", false), .path("M12.656 7H14a4 4 0 0 1 4 4v1.344", false), .path("M14.12 3.88 16 2", false), .path("M17.123 17.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287", false), .path("M21 5a4 4 0 0 1-3.55 3.97", false), .path("M22 13h-3.344", false), .path("M3 21a4 4 0 0 1 3.81-4", false), .path("M3 5a4 4 0 0 0 3.55 3.97", false), .path("M6 13H2", false), .path("m8 2 1.88 1.88", false), .path("M9.712 4.06A3 3 0 0 1 15 6v1.13", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 20v-8", false), .path("M12.656 7H14a4 4 0 0 1 4 4v1.344", false), .path("M14.12 3.88 16 2", false), .path("M17.123 17.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287", false), .path("M21 5a4 4 0 0 1-3.55 3.97", false), .path("M22 13h-3.344", false), .path("M3 21a4 4 0 0 1 3.81-4", false), .path("M3 5a4 4 0 0 0 3.55 3.97", false), .path("M6 13H2", false), .path("m8 2 1.88 1.88", false), .path("M9.712 4.06A3 3 0 0 1 15 6v1.13", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 20v-8", false), .path("M12.656 7H14a4 4 0 0 1 4 4v1.344", false), .path("M14.12 3.88 16 2", false), .path("M17.123 17.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287", false), .path("M21 5a4 4 0 0 1-3.55 3.97", false), .path("M22 13h-3.344", false), .path("M3 21a4 4 0 0 1 3.81-4", false), .path("M3 5a4 4 0 0 0 3.55 3.97", false), .path("M6 13H2", false), .path("m8 2 1.88 1.88", false), .path("M9.712 4.06A3 3 0 0 1 15 6v1.13", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .utilityCake: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M16 13H3", false), .path("M16 17H3", false), .path("m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6", false), .circle(9, 7, 2, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M16 13H3", false), .path("M16 17H3", false), .path("m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6", false), .circle(9, 7, 2, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M16 13H3", false), .path("M16 17H3", false), .path("m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6", false), .circle(9, 7, 2, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .bloom500]
    ),
    .utilityCalendarClock: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M16 14v2.2l1.6 1", false), .path("M16 2v4", false), .path("M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", false), .path("M3 10h5", false), .path("M8 2v4", false), .circle(16, 16, 6, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M16 14v2.2l1.6 1", false), .path("M16 2v4", false), .path("M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", false), .path("M3 10h5", false), .path("M8 2v4", false), .circle(16, 16, 6, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M16 14v2.2l1.6 1", false), .path("M16 2v4", false), .path("M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", false), .path("M3 10h5", false), .path("M8 2v4", false), .circle(16, 16, 6, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityCalendarDays: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M8 2v4", false), .path("M16 2v4", false), .path("M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M3 10h18", false)]),
                PlantimV4Layer("accent", [.circle(8, 14, 1.1, true), .circle(12, 14, 1.1, true), .circle(16, 14, 1.1, true), .circle(8, 18, 1.1, true), .circle(12, 18, 1.1, true), .circle(16, 18, 1.1, true)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M8 2v4", false), .path("M16 2v4", false), .path("M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M3 10h18", false)]),
                PlantimV4Layer("accent", [.circle(8, 14, 1.1, true), .circle(12, 14, 1.1, true), .circle(16, 14, 1.1, true), .circle(8, 18, 1.1, true), .circle(12, 18, 1.1, true), .circle(16, 18, 1.1, true)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M8 2v4", false), .path("M16 2v4", false), .path("M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M3 10h18", false)]),
                PlantimV4Layer("accent", [.circle(8, 14, 1.1, true), .circle(12, 14, 1.1, true), .circle(16, 14, 1.1, true), .circle(8, 18, 1.1, true), .circle(12, 18, 1.1, true), .circle(16, 18, 1.1, true)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900, "accent": .ink900]
    ),
    .utilityCamera: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z", false), .circle(12, 13, 3, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z", false), .circle(12, 13, 3, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z", false), .circle(12, 13, 3, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityCheckCheck: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M18 6 7 17l-5-5", false), .path("m22 10-7.5 7.5L13 16", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M18 6 7 17l-5-5", false), .path("m22 10-7.5 7.5L13 16", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M18 6 7 17l-5-5", false), .path("m22 10-7.5 7.5L13 16", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityChevronsUpDown: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("m7 15 5 5 5-5", false), .path("m7 9 5-5 5 5", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("m7 15 5 5 5-5", false), .path("m7 9 5-5 5 5", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("m7 15 5 5 5-5", false), .path("m7 9 5-5 5 5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityCircle: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("M12 8L12 12", false), .path("M12 16L12.01 16", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("M12 8L12 12", false), .path("M12 16L12.01 16", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("M12 8L12 12", false), .path("M12 16L12.01 16", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityCloudDrizzle: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", false), .path("M8 19v1", false), .path("M8 14v1", false), .path("M16 19v1", false), .path("M16 14v1", false), .path("M12 21v1", false), .path("M12 16v1", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", false), .path("M8 19v1", false), .path("M8 14v1", false), .path("M16 19v1", false), .path("M16 14v1", false), .path("M12 21v1", false), .path("M12 16v1", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", false), .path("M8 19v1", false), .path("M8 14v1", false), .path("M16 19v1", false), .path("M16 14v1", false), .path("M12 21v1", false), .path("M12 16v1", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water300]
    ),
    .utilityCloudFog: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", false), .path("M16 17H7", false), .path("M17 21H9", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", false), .path("M16 17H7", false), .path("M17 21H9", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", false), .path("M16 17H7", false), .path("M17 21H9", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water300]
    ),
    .utilityCloudLightning: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973", false), .path("m13 12-3 5h4l-3 5", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973", false), .path("m13 12-3 5h4l-3 5", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973", false), .path("m13 12-3 5h4l-3 5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water300]
    ),
    .utilityCloudMoon: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M11 20v2", false), .path("M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36", false), .path("M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", false), .path("M7 19v2", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M11 20v2", false), .path("M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36", false), .path("M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", false), .path("M7 19v2", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M11 20v2", false), .path("M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36", false), .path("M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", false), .path("M7 19v2", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water300]
    ),
    .utilityCloudRain: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", false), .path("m9.2 22 3-7", false), .path("m9 13-3 7", false), .path("m17 13-3 7", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", false), .path("m9.2 22 3-7", false), .path("m9 13-3 7", false), .path("m17 13-3 7", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", false), .path("m9.2 22 3-7", false), .path("m9 13-3 7", false), .path("m17 13-3 7", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water300]
    ),
    .utilityCloudSnow: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", false)]),
                PlantimV4Layer("accent", [.circle(8, 15, 1.1, true), .circle(8, 19, 1.1, true), .circle(12, 17, 1.1, true), .circle(12, 21, 1.1, true), .circle(16, 15, 1.1, true), .circle(16, 19, 1.1, true)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", false)]),
                PlantimV4Layer("accent", [.circle(8, 15, 1.1, true), .circle(8, 19, 1.1, true), .circle(12, 17, 1.1, true), .circle(12, 21, 1.1, true), .circle(16, 15, 1.1, true), .circle(16, 19, 1.1, true)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", false)]),
                PlantimV4Layer("accent", [.circle(8, 15, 1.1, true), .circle(8, 19, 1.1, true), .circle(12, 17, 1.1, true), .circle(12, 21, 1.1, true), .circle(16, 15, 1.1, true), .circle(16, 19, 1.1, true)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water300, "accent": .water600]
    ),
    .utilityCloudSun: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 2v2", false), .path("m4.93 4.93 1.41 1.41", false), .path("M20 12h2", false), .path("m19.07 4.93-1.41 1.41", false), .path("M15.947 12.65a4 4 0 0 0-5.925-4.128", false), .path("M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", false), .path("M11 20v2", false), .path("M7 19v2", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 2v2", false), .path("m4.93 4.93 1.41 1.41", false), .path("M20 12h2", false), .path("m19.07 4.93-1.41 1.41", false), .path("M15.947 12.65a4 4 0 0 0-5.925-4.128", false), .path("M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", false), .path("M11 20v2", false), .path("M7 19v2", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 2v2", false), .path("m4.93 4.93 1.41 1.41", false), .path("M20 12h2", false), .path("m19.07 4.93-1.41 1.41", false), .path("M15.947 12.65a4 4 0 0 0-5.925-4.128", false), .path("M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", false), .path("M11 20v2", false), .path("M7 19v2", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water300]
    ),
    .utilityCode: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("m18 16 4-4-4-4", false), .path("m6 8-4 4 4 4", false), .path("m14.5 4-5 16", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("m18 16 4-4-4-4", false), .path("m6 8-4 4 4 4", false), .path("m14.5 4-5 16", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("m18 16 4-4-4-4", false), .path("m6 8-4 4 4 4", false), .path("m14.5 4-5 16", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityCookie: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5", false)]),
                PlantimV4Layer("accent", [.circle(8.5, 8.5, 1.1, true), .circle(16, 15.5, 1.1, true), .circle(12, 12, 1.1, true), .circle(11, 17, 1.1, true), .circle(7, 14, 1.1, true)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5", false)]),
                PlantimV4Layer("accent", [.circle(8.5, 8.5, 1.1, true), .circle(16, 15.5, 1.1, true), .circle(12, 12, 1.1, true), .circle(11, 17, 1.1, true), .circle(7, 14, 1.1, true)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5", false)]),
                PlantimV4Layer("accent", [.circle(8.5, 8.5, 1.1, true), .circle(16, 15.5, 1.1, true), .circle(12, 12, 1.1, true), .circle(11, 17, 1.1, true), .circle(7, 14, 1.1, true)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .earth600, "accent": .earth400]
    ),
    .utilityCopy: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("m12 15 2 2 4-4", false), .path("M10 8h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2Z", false), .path("M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("m12 15 2 2 4-4", false), .path("M10 8h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2Z", false), .path("M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("m12 15 2 2 4-4", false), .path("M10 8h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2Z", false), .path("M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityCrown: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z", false), .path("M5 21h14", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z", false), .path("M5 21h14", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z", false), .path("M5 21h14", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .sun500]
    ),
    .utilityDatabase: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M3 5a9 3 0 1 0 18 0a9 3 0 1 0 -18 0", false), .path("M3 5v14a9 3 0 0 0 18 0V5", false), .path("M3 12a9 3 0 0 0 18 0", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M3 5a9 3 0 1 0 18 0a9 3 0 1 0 -18 0", false), .path("M3 5v14a9 3 0 0 0 18 0V5", false), .path("M3 12a9 3 0 0 0 18 0", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M3 5a9 3 0 1 0 18 0a9 3 0 1 0 -18 0", false), .path("M3 5v14a9 3 0 0 0 18 0V5", false), .path("M3 12a9 3 0 0 0 18 0", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water600]
    ),
    .utilityDna: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M9 3c0 4 6 5 6 9s-6 5-6 9", false), .path("M15 3c0 4-6 5-6 9s6 5 6 9", false), .path("M8.5 7h7", false), .path("M8 12h8", false), .path("M8.5 17h7", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M9 3c0 4 6 5 6 9s-6 5-6 9", false), .path("M15 3c0 4-6 5-6 9s6 5 6 9", false), .path("M8.5 7h7", false), .path("M8 12h8", false), .path("M8.5 17h7", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M9 3c0 4 6 5 6 9s-6 5-6 9", false), .path("M15 3c0 4-6 5-6 9s6 5 6 9", false), .path("M8.5 7h7", false), .path("M8 12h8", false), .path("M8.5 17h7", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityEye: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", false), .circle(12, 12, 3, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", false), .circle(12, 12, 3, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", false), .circle(12, 12, 3, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityEyeOff: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49", false), .path("M14.084 14.158a3 3 0 0 1-4.242-4.242", false), .path("M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143", false), .path("m2 2 20 20", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49", false), .path("M14.084 14.158a3 3 0 0 1-4.242-4.242", false), .path("M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143", false), .path("m2 2 20 20", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49", false), .path("M14.084 14.158a3 3 0 0 1-4.242-4.242", false), .path("M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143", false), .path("m2 2 20 20", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityFilter: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityFlame: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z", false), .path("m5 22 14-4", false), .path("m5 18 14 4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z", false), .path("m5 22 14-4", false), .path("m5 18 14 4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z", false), .path("m5 22 14-4", false), .path("m5 18 14 4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .sun500]
    ),
    .utilityFlaskConical: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2", false), .path("M8.5 2h7", false), .path("M7 16h10", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2", false), .path("M8.5 2h7", false), .path("M7 16h10", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2", false), .path("M8.5 2h7", false), .path("M7 16h10", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityFlipHorizontal2: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("m3 7 5 5-5 5V7", false), .path("m21 7-5 5 5 5V7", false), .path("M12 20v2", false), .path("M12 14v2", false), .path("M12 8v2", false), .path("M12 2v2", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("m3 7 5 5-5 5V7", false), .path("m21 7-5 5 5 5V7", false), .path("M12 20v2", false), .path("M12 14v2", false), .path("M12 8v2", false), .path("M12 2v2", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("m3 7 5 5-5 5V7", false), .path("m21 7-5 5 5 5V7", false), .path("M12 20v2", false), .path("M12 14v2", false), .path("M12 8v2", false), .path("M12 2v2", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityFlower2: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1", false), .circle(12, 8, 2, false), .path("M12 10v12", false), .path("M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z", false), .path("M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1", false), .circle(12, 8, 2, false), .path("M12 10v12", false), .path("M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z", false), .path("M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1", false), .circle(12, 8, 2, false), .path("M12 10v12", false), .path("M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z", false), .path("M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf500]
    ),
    .utilityGlobe: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M21.54 15H17a2 2 0 0 0-2 2v4.54", false), .path("M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17", false), .path("M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", false), .circle(12, 12, 10, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M21.54 15H17a2 2 0 0 0-2 2v4.54", false), .path("M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17", false), .path("M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", false), .circle(12, 12, 10, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M21.54 15H17a2 2 0 0 0-2 2v4.54", false), .path("M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17", false), .path("M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", false), .circle(12, 12, 10, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water600]
    ),
    .utilityGrid2x2: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3", false), .path("m16 19 2 2 4-4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3", false), .path("m16 19 2 2 4-4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3", false), .path("m16 19 2 2 4-4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityHand: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("hand", [.path("M6.6 13.2V6.6a1.4 1.4 0 0 1 2.8 0V11", false), .path("M9.4 10.4V4.8a1.4 1.4 0 0 1 2.8 0V10.4", false), .path("M12.2 10.4V4.4a1.4 1.4 0 0 1 2.8 0V11", false), .path("M15 11V6.2a1.4 1.4 0 0 1 2.8 0V15c0 3.2-2.3 5.9-5.8 5.9-2 0-3.6-.8-4.8-2.3L4.2 15.5a1.4 1.4 0 0 1 2.2-1.8Z", false)]),
            ],
            .base: [
                PlantimV4Layer("hand", [.path("M6.5 13V6.4a1.3 1.3 0 0 1 2.6 0V11", false), .path("M9.1 10.2V4.6a1.3 1.3 0 0 1 2.6 0V10.4", false), .path("M11.7 10.4V4.2a1.3 1.3 0 0 1 2.6 0V10.8", false), .path("M14.3 10.8V6a1.3 1.3 0 0 1 2.6 0V15c0 3.3-2.3 6-6 6-2 0-3.6-.8-4.8-2.3L4 15.4a1.35 1.35 0 0 1 2.1-1.7Z", false)]),
            ],
            .display: [
                PlantimV4Layer("hand", [.path("M6.5 13V6.4a1.3 1.3 0 0 1 2.6 0V11", false), .path("M9.1 10.2V4.6a1.3 1.3 0 0 1 2.6 0V10.4", false), .path("M11.7 10.4V4.2a1.3 1.3 0 0 1 2.6 0V10.8", false), .path("M14.3 10.8V6a1.3 1.3 0 0 1 2.6 0V15c0 3.3-2.3 6-6 6-2 0-3.6-.8-4.8-2.3L4 15.4a1.35 1.35 0 0 1 2.1-1.7Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["hand"],
        multicolor: ["hand": .ink900]
    ),
    .utilityHandshake: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("m11 17 2 2a1 1 0 1 0 3-3", false), .path("m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4", false), .path("m21 3 1 11h-2", false), .path("M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", false), .path("M3 4h8", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("m11 17 2 2a1 1 0 1 0 3-3", false), .path("m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4", false), .path("m21 3 1 11h-2", false), .path("M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", false), .path("M3 4h8", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("m11 17 2 2a1 1 0 1 0 3-3", false), .path("m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4", false), .path("m21 3 1 11h-2", false), .path("M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", false), .path("M3 4h8", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityHeart: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.5 4 3 5.5l7 7Z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.5 4 3 5.5l7 7Z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.5 4 3 5.5l7 7Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .bloom500]
    ),
    .utilityHelpCircle: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", false)]),
                PlantimV4Layer("accent", [.circle(12, 17, 1.1, true)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", false)]),
                PlantimV4Layer("accent", [.circle(12, 17, 1.1, true)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", false)]),
                PlantimV4Layer("accent", [.circle(12, 17, 1.1, true)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900, "accent": .ink900]
    ),
    .utilityHistory: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", false), .path("M3 3v5h5", false), .path("M12 7v5l4 2", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", false), .path("M3 3v5h5", false), .path("M12 7v5l4 2", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", false), .path("M3 3v5h5", false), .path("M12 7v5l4 2", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityImage: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21", false), .circle(9, 9, 2, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21", false), .circle(9, 9, 2, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21", false), .circle(9, 9, 2, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water600]
    ),
    .utilityInbox: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M22 12L16 12L14 15L10 15L8 12L2 12", false), .path("M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M22 12L16 12L14 15L10 15L8 12L2 12", false), .path("M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M22 12L16 12L14 15L10 15L8 12L2 12", false), .path("M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityKey: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z", false)]),
                PlantimV4Layer("accent", [.circle(16.5, 7.5, 0.5, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z", false)]),
                PlantimV4Layer("accent", [.circle(16.5, 7.5, 0.5, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z", false)]),
                PlantimV4Layer("accent", [.circle(16.5, 7.5, 0.5, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .sun500, "accent": .sun500]
    ),
    .utilityLayoutGrid: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M4 3h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1Z", false), .path("M15 3h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1Z", false), .path("M15 14h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1Z", false), .path("M4 14h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1Z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M4 3h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1Z", false), .path("M15 3h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1Z", false), .path("M15 14h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1Z", false), .path("M4 14h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1Z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M4 3h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1Z", false), .path("M15 3h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1Z", false), .path("M15 14h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1Z", false), .path("M4 14h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityLightbulb: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5", false), .path("M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5", false), .path("M9 18h6", false), .path("M10 22h4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5", false), .path("M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5", false), .path("M9 18h6", false), .path("M10 22h4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5", false), .path("M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5", false), .path("M9 18h6", false), .path("M10 22h4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityLink: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M9 17H7A5 5 0 0 1 7 7", false), .path("M15 7h2a5 5 0 0 1 4 8", false), .path("M8 12L12 12", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M9 17H7A5 5 0 0 1 7 7", false), .path("M15 7h2a5 5 0 0 1 4 8", false), .path("M8 12L12 12", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M9 17H7A5 5 0 0 1 7 7", false), .path("M15 7h2a5 5 0 0 1 4 8", false), .path("M8 12L12 12", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityList: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M21 5H11", false), .path("M21 12H11", false), .path("M21 19H11", false), .path("m7 8-4 4 4 4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M21 5H11", false), .path("M21 12H11", false), .path("M21 19H11", false), .path("m7 8-4 4 4 4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M21 5H11", false), .path("M21 12H11", false), .path("M21 19H11", false), .path("m7 8-4 4 4 4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityLock: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-7a2 2 0 0 1 2 -2Z", false), .path("M7 11V7a5 5 0 0 1 10 0v4", false)]),
                PlantimV4Layer("accent", [.circle(12, 16, 1, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-7a2 2 0 0 1 2 -2Z", false), .path("M7 11V7a5 5 0 0 1 10 0v4", false)]),
                PlantimV4Layer("accent", [.circle(12, 16, 1, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-7a2 2 0 0 1 2 -2Z", false), .path("M7 11V7a5 5 0 0 1 10 0v4", false)]),
                PlantimV4Layer("accent", [.circle(12, 16, 1, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900, "accent": .ink900]
    ),
    .utilityLogOut: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("m16 17 5-5-5-5", false), .path("M21 12H9", false), .path("M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("m16 17 5-5-5-5", false), .path("M21 12H9", false), .path("M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("m16 17 5-5-5-5", false), .path("M21 12H9", false), .path("M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityMail: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5", false), .path("m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5", false), .path("m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5", false), .path("m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water600]
    ),
    .utilityMailCheck: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", false), .path("m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", false), .path("m16 19 2 2 4-4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", false), .path("m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", false), .path("m16 19 2 2 4-4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", false), .path("m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", false), .path("m16 19 2 2 4-4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water600]
    ),
    .utilityMenu: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M7 8h10", false), .path("M7 12h10", false), .path("M7 16h10", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M7 8h10", false), .path("M7 12h10", false), .path("M7 16h10", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M7 8h10", false), .path("M7 12h10", false), .path("M7 16h10", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
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
    .utilityMessageSquare: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z", false), .path("m9 11 2 2 4-4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z", false), .path("m9 11 2 2 4-4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z", false), .path("m9 11 2 2 4-4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityMinus: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("M8 12h8", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("M8 12h8", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("M8 12h8", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityMonitorSmartphone: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8", false), .path("M10 19v-3.96 3.15", false), .path("M7 19h5", false), .path("M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2Z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8", false), .path("M10 19v-3.96 3.15", false), .path("M7 19h5", false), .path("M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2Z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8", false), .path("M10 19v-3.96 3.15", false), .path("M7 19h5", false), .path("M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityMoonStar: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("moon", [.path("M20.5 15.6A8.6 8.6 0 1 1 9.6 4.4A6.9 6.9 0 0 0 20.5 15.6Z", false)]),
                PlantimV4Layer("star", [.path("M18.2 2.8 19.3 5.25 22 5.55 20 7.4 20.55 10 18.2 8.65 15.85 10 16.4 7.4 14.4 5.55 17.1 5.25Z", false)]),
            ],
            .base: [
                PlantimV4Layer("moon", [.path("M20.5 15.2A8.4 8.4 0 1 1 10 4.2A6.6 6.6 0 0 0 20.5 15.2Z", false)]),
                PlantimV4Layer("star", [.path("M18.2 3.2 19.15 5.35 21.5 5.6 19.75 7.2 20.25 9.5 18.2 8.3 16.15 9.5 16.65 7.2 14.9 5.6 17.25 5.35Z", false)]),
            ],
            .display: [
                PlantimV4Layer("moon", [.path("M20.5 15.2A8.4 8.4 0 1 1 10 4.2A6.6 6.6 0 0 0 20.5 15.2Z", false)]),
                PlantimV4Layer("star", [.path("M18.2 3.2 19.15 5.35 21.5 5.6 19.75 7.2 20.25 9.5 18.2 8.3 16.15 9.5 16.65 7.2 14.9 5.6 17.25 5.35Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["moon"],
        multicolor: ["moon": .ink900, "star": .sun300]
    ),
    .utilityMoreHorizontal: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 12, 1, false), .circle(19, 12, 1, false), .circle(5, 12, 1, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 12, 1, false), .circle(19, 12, 1, false), .circle(5, 12, 1, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 12, 1, false), .circle(19, 12, 1, false), .circle(5, 12, 1, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityMove: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("cross", [.path("M12 3.4V20.6", false), .path("M3.4 12H20.6", false)]),
                PlantimV4Layer("heads", [.path("M8.8 6.2 12 3 15.2 6.2", false), .path("M8.8 17.8 12 21 15.2 17.8", false), .path("M6.2 8.8 3 12 6.2 15.2", false), .path("M17.8 8.8 21 12 17.8 15.2", false)]),
            ],
            .base: [
                PlantimV4Layer("cross", [.path("M12 3.2V20.8", false), .path("M3.2 12H20.8", false)]),
                PlantimV4Layer("heads", [.path("M9 6 12 3 15 6", false), .path("M9 18 12 21 15 18", false), .path("M6 9 3 12 6 15", false), .path("M18 9 21 12 18 15", false)]),
            ],
            .display: [
                PlantimV4Layer("cross", [.path("M12 3.2V20.8", false), .path("M3.2 12H20.8", false)]),
                PlantimV4Layer("heads", [.path("M9 6 12 3 15 6", false), .path("M9 18 12 21 15 18", false), .path("M6 9 3 12 6 15", false), .path("M18 9 21 12 18 15", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["cross", "heads"],
        multicolor: ["cross": .ink900, "heads": .ink900]
    ),
    .utilityOrbit: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M20.341 6.484A10 10 0 0 1 10.266 21.85", false), .path("M3.659 17.516A10 10 0 0 1 13.74 2.152", false), .circle(12, 12, 3, false), .circle(19, 5, 2, false), .circle(5, 19, 2, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M20.341 6.484A10 10 0 0 1 10.266 21.85", false), .path("M3.659 17.516A10 10 0 0 1 13.74 2.152", false), .circle(12, 12, 3, false), .circle(19, 5, 2, false), .circle(5, 19, 2, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M20.341 6.484A10 10 0 0 1 10.266 21.85", false), .path("M3.659 17.516A10 10 0 0 1 13.74 2.152", false), .circle(12, 12, 3, false), .circle(19, 5, 2, false), .circle(5, 19, 2, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityPanelLeft: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M9 3v18", false), .path("m16 15-3-3 3-3", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M9 3v18", false), .path("m16 15-3-3 3-3", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M9 3v18", false), .path("m16 15-3-3 3-3", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityPanelLeftClose: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M9 3v18", false), .path("m16 15-3-3 3-3", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M9 3v18", false), .path("m16 15-3-3 3-3", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M9 3v18", false), .path("m16 15-3-3 3-3", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityPanelLeftOpen: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M9 3v18", false), .path("m14 9 3 3-3 3", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M9 3v18", false), .path("m14 9 3 3-3 3", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M9 3v18", false), .path("m14 9 3 3-3 3", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityPencilLine: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M13 21h8", false), .path("m15 5 4 4", false), .path("M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M13 21h8", false), .path("m15 5 4 4", false), .path("M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M13 21h8", false), .path("m15 5 4 4", false), .path("M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
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
    ),
    .utilityQuote: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z", false), .path("M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z", false), .path("M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z", false), .path("M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityRefreshCw: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47", false), .path("M8 16H3v5", false), .path("M3 12C3 9.51 4 7.26 5.64 5.64", false), .path("m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64", false), .path("M21 12c0 1-.16 1.97-.47 2.87", false), .path("M21 3v5h-5", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47", false), .path("M8 16H3v5", false), .path("M3 12C3 9.51 4 7.26 5.64 5.64", false), .path("m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64", false), .path("M21 12c0 1-.16 1.97-.47 2.87", false), .path("M21 3v5h-5", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47", false), .path("M8 16H3v5", false), .path("M3 12C3 9.51 4 7.26 5.64 5.64", false), .path("m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64", false), .path("M21 12c0 1-.16 1.97-.47 2.87", false), .path("M21 3v5h-5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityRotateCcw: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8", false), .path("M3 3v5h5", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8", false), .path("M3 3v5h5", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8", false), .path("M3 3v5h5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityRotateCw: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", false), .path("M21 3v5h-5", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", false), .path("M21 3v5h-5", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", false), .path("M21 3v5h-5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilitySave: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M10 2v3a1 1 0 0 0 1 1h5", false), .path("M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6", false), .path("M18 22H4a2 2 0 0 1-2-2V6", false), .path("M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M10 2v3a1 1 0 0 0 1 1h5", false), .path("M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6", false), .path("M18 22H4a2 2 0 0 1-2-2V6", false), .path("M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M10 2v3a1 1 0 0 0 1 1h5", false), .path("M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6", false), .path("M18 22H4a2 2 0 0 1-2-2V6", false), .path("M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityScale: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M5 7v11a1 1 0 0 0 1 1h11", false), .path("M5.293 18.707 11 13", false), .circle(19, 19, 2, false), .circle(5, 5, 2, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M5 7v11a1 1 0 0 0 1 1h11", false), .path("M5.293 18.707 11 13", false), .circle(19, 19, 2, false), .circle(5, 5, 2, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M5 7v11a1 1 0 0 0 1 1h11", false), .path("M5.293 18.707 11 13", false), .circle(19, 19, 2, false), .circle(5, 5, 2, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityScanLine: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M3 7V5a2 2 0 0 1 2-2h2", false), .path("M17 3h2a2 2 0 0 1 2 2v2", false), .path("M21 17v2a2 2 0 0 1-2 2h-2", false), .path("M7 21H5a2 2 0 0 1-2-2v-2", false), .path("M7 12h10", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M3 7V5a2 2 0 0 1 2-2h2", false), .path("M17 3h2a2 2 0 0 1 2 2v2", false), .path("M21 17v2a2 2 0 0 1-2 2h-2", false), .path("M7 21H5a2 2 0 0 1-2-2v-2", false), .path("M7 12h10", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M3 7V5a2 2 0 0 1 2-2h2", false), .path("M17 3h2a2 2 0 0 1 2 2v2", false), .path("M21 17v2a2 2 0 0 1-2 2h-2", false), .path("M7 21H5a2 2 0 0 1-2-2v-2", false), .path("M7 12h10", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilitySettings: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z", false), .circle(12, 12, 3, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z", false), .circle(12, 12, 3, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z", false), .circle(12, 12, 3, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilitySettings2: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M14 17H5", false), .path("M19 7h-9", false), .circle(17, 17, 3, false), .circle(7, 7, 3, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M14 17H5", false), .path("M19 7h-9", false), .circle(17, 17, 3, false), .circle(7, 7, 3, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M14 17H5", false), .path("M19 7h-9", false), .circle(17, 17, 3, false), .circle(7, 7, 3, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityShare2: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(18, 5, 3, false), .circle(6, 12, 3, false), .circle(18, 19, 3, false), .path("M8.59 13.51L15.42 17.49", false), .path("M15.41 6.51L8.59 10.49", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(18, 5, 3, false), .circle(6, 12, 3, false), .circle(18, 19, 3, false), .path("M8.59 13.51L15.42 17.49", false), .path("M15.41 6.51L8.59 10.49", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(18, 5, 3, false), .circle(6, 12, 3, false), .circle(18, 19, 3, false), .path("M8.59 13.51L15.42 17.49", false), .path("M15.41 6.51L8.59 10.49", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityShield: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityShieldCheck: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", false), .path("m9 12 2 2 4-4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", false), .path("m9 12 2 2 4-4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", false), .path("m9 12 2 2 4-4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilitySlidersHorizontal: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M10 5H3", false), .path("M12 19H3", false), .path("M14 3v4", false), .path("M16 17v4", false), .path("M21 12h-9", false), .path("M21 19h-5", false), .path("M21 5h-7", false), .path("M8 10v4", false), .path("M8 12H3", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M10 5H3", false), .path("M12 19H3", false), .path("M14 3v4", false), .path("M16 17v4", false), .path("M21 12h-9", false), .path("M21 19h-5", false), .path("M21 5h-7", false), .path("M8 10v4", false), .path("M8 12H3", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M10 5H3", false), .path("M12 19H3", false), .path("M14 3v4", false), .path("M16 17v4", false), .path("M21 12h-9", false), .path("M21 19h-5", false), .path("M21 5h-7", false), .path("M8 10v4", false), .path("M8 12H3", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilitySmartphone: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M3 6h5a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1Z", false), .path("M13 8.32a7.43 7.43 0 0 1 0 7.36", false), .path("M16.46 6.21a11.76 11.76 0 0 1 0 11.58", false), .path("M19.91 4.1a15.91 15.91 0 0 1 .01 15.8", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M3 6h5a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1Z", false), .path("M13 8.32a7.43 7.43 0 0 1 0 7.36", false), .path("M16.46 6.21a11.76 11.76 0 0 1 0 11.58", false), .path("M19.91 4.1a15.91 15.91 0 0 1 .01 15.8", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M3 6h5a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1Z", false), .path("M13 8.32a7.43 7.43 0 0 1 0 7.36", false), .path("M16.46 6.21a11.76 11.76 0 0 1 0 11.58", false), .path("M19.91 4.1a15.91 15.91 0 0 1 .01 15.8", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilitySnowflake: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("m10 20-1.25-2.5L6 18", false), .path("M10 4 8.75 6.5 6 6", false), .path("m14 20 1.25-2.5L18 18", false), .path("m14 4 1.25 2.5L18 6", false), .path("m17 21-3-6h-4", false), .path("m17 3-3 6 1.5 3", false), .path("M2 12h6.5L10 9", false), .path("m20 10-1.5 2 1.5 2", false), .path("M22 12h-6.5L14 15", false), .path("m4 10 1.5 2L4 14", false), .path("m7 21 3-6-1.5-3", false), .path("m7 3 3 6h4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("m10 20-1.25-2.5L6 18", false), .path("M10 4 8.75 6.5 6 6", false), .path("m14 20 1.25-2.5L18 18", false), .path("m14 4 1.25 2.5L18 6", false), .path("m17 21-3-6h-4", false), .path("m17 3-3 6 1.5 3", false), .path("M2 12h6.5L10 9", false), .path("m20 10-1.5 2 1.5 2", false), .path("M22 12h-6.5L14 15", false), .path("m4 10 1.5 2L4 14", false), .path("m7 21 3-6-1.5-3", false), .path("m7 3 3 6h4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("m10 20-1.25-2.5L6 18", false), .path("M10 4 8.75 6.5 6 6", false), .path("m14 20 1.25-2.5L18 18", false), .path("m14 4 1.25 2.5L18 6", false), .path("m17 21-3-6h-4", false), .path("m17 3-3 6 1.5 3", false), .path("M2 12h6.5L10 9", false), .path("m20 10-1.5 2 1.5 2", false), .path("M22 12h-6.5L14 15", false), .path("m4 10 1.5 2L4 14", false), .path("m7 21 3-6-1.5-3", false), .path("m7 3 3 6h4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water300]
    ),
    .utilitySparkles: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z", false), .path("M20 2v4", false), .path("M22 4h-4", false), .circle(4, 20, 2, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z", false), .path("M20 2v4", false), .path("M22 4h-4", false), .circle(4, 20, 2, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z", false), .path("M20 2v4", false), .path("M22 4h-4", false), .circle(4, 20, 2, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .sun500]
    ),
    .utilitySquare: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M17 12h-2l-2 5-2-10-2 5H7", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M17 12h-2l-2 5-2-10-2 5H7", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2Z", false), .path("M17 12h-2l-2 5-2-10-2 5H7", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilitySquarePen: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", false), .path("M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", false), .path("M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", false), .path("M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityStar: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .sun500]
    ),
    .utilityStarHalf: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .sun500]
    ),
    .utilitySunrise: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 2v8", false), .path("m4.93 10.93 1.41 1.41", false), .path("M2 18h2", false), .path("M20 18h2", false), .path("m19.07 10.93-1.41 1.41", false), .path("M22 22H2", false), .path("m8 6 4-4 4 4", false), .path("M16 18a4 4 0 0 0-8 0", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 2v8", false), .path("m4.93 10.93 1.41 1.41", false), .path("M2 18h2", false), .path("M20 18h2", false), .path("m19.07 10.93-1.41 1.41", false), .path("M22 22H2", false), .path("m8 6 4-4 4 4", false), .path("M16 18a4 4 0 0 0-8 0", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 2v8", false), .path("m4.93 10.93 1.41 1.41", false), .path("M2 18h2", false), .path("M20 18h2", false), .path("m19.07 10.93-1.41 1.41", false), .path("M22 22H2", false), .path("m8 6 4-4 4 4", false), .path("M16 18a4 4 0 0 0-8 0", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .sun500]
    ),
    .utilitySunset: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 10V2", false), .path("m4.93 10.93 1.41 1.41", false), .path("M2 18h2", false), .path("M20 18h2", false), .path("m19.07 10.93-1.41 1.41", false), .path("M22 22H2", false), .path("m16 6-4 4-4-4", false), .path("M16 18a4 4 0 0 0-8 0", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 10V2", false), .path("m4.93 10.93 1.41 1.41", false), .path("M2 18h2", false), .path("M20 18h2", false), .path("m19.07 10.93-1.41 1.41", false), .path("M22 22H2", false), .path("m16 6-4 4-4-4", false), .path("M16 18a4 4 0 0 0-8 0", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 10V2", false), .path("m4.93 10.93 1.41 1.41", false), .path("M2 18h2", false), .path("M20 18h2", false), .path("m19.07 10.93-1.41 1.41", false), .path("M22 22H2", false), .path("m16 6-4 4-4-4", false), .path("M16 18a4 4 0 0 0-8 0", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .sun500]
    ),
    .utilitySwords: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M14.5 17.5L3 6L3 3L6 3L17.5 14.5", false), .path("M13 19L19 13", false), .path("M16 16L20 20", false), .path("M19 21L21 19", false), .path("M14.5 6.5L18 3L21 3L21 6L17.5 9.5", false), .path("M5 14L9 18", false), .path("M7 17L4 20", false), .path("M3 19L5 21", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M14.5 17.5L3 6L3 3L6 3L17.5 14.5", false), .path("M13 19L19 13", false), .path("M16 16L20 20", false), .path("M19 21L21 19", false), .path("M14.5 6.5L18 3L21 3L21 6L17.5 9.5", false), .path("M5 14L9 18", false), .path("M7 17L4 20", false), .path("M3 19L5 21", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M14.5 17.5L3 6L3 3L6 3L17.5 14.5", false), .path("M13 19L19 13", false), .path("M16 16L20 20", false), .path("M19 21L21 19", false), .path("M14.5 6.5L18 3L21 3L21 6L17.5 9.5", false), .path("M5 14L9 18", false), .path("M7 17L4 20", false), .path("M3 19L5 21", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityTag: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z", false)]),
                PlantimV4Layer("accent", [.circle(7.5, 7.5, 0.5, false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z", false)]),
                PlantimV4Layer("accent", [.circle(7.5, 7.5, 0.5, false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z", false)]),
                PlantimV4Layer("accent", [.circle(7.5, 7.5, 0.5, false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .bloom500, "accent": .bloom500]
    ),
    .utilityThermometer: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .statusError]
    ),
    .utilityThumbsDown: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z", false), .path("M17 14V2", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z", false), .path("M17 14V2", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z", false), .path("M17 14V2", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityThumbsUp: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z", false), .path("M7 10v12", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z", false), .path("M7 10v12", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z", false), .path("M7 10v12", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityTrees: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z", false), .path("M7 16v6", false), .path("M13 19v3", false), .path("M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z", false), .path("M7 16v6", false), .path("M13 19v3", false), .path("M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z", false), .path("M7 16v6", false), .path("M13 19v3", false), .path("M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .leaf700]
    ),
    .utilityTrendingDown: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M16 17h6v-6", false), .path("m22 17-8.5-8.5-5 5L2 7", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M16 17h6v-6", false), .path("m22 17-8.5-8.5-5 5L2 7", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M16 17h6v-6", false), .path("m22 17-8.5-8.5-5 5L2 7", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityTrendingUp: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("m21 3-9 9-4-4-6 6", false), .path("M21 8V3h-5", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("m21 3-9 9-4-4-6 6", false), .path("M21 8V3h-5", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("m21 3-9 9-4-4-6 6", false), .path("M21 8V3h-5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityTrophy: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978", false), .path("M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978", false), .path("M18 9h1.5a1 1 0 0 0 0-5H18", false), .path("M4 22h16", false), .path("M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z", false), .path("M6 9H4.5a1 1 0 0 1 0-5H6", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978", false), .path("M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978", false), .path("M18 9h1.5a1 1 0 0 0 0-5H18", false), .path("M4 22h16", false), .path("M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z", false), .path("M6 9H4.5a1 1 0 0 1 0-5H6", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978", false), .path("M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978", false), .path("M18 9h1.5a1 1 0 0 0 0-5H18", false), .path("M4 22h16", false), .path("M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z", false), .path("M6 9H4.5a1 1 0 0 1 0-5H6", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .sun500]
    ),
    .utilityUndo2: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M9 14 4 9l5-5", false), .path("M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M9 14 4 9l5-5", false), .path("M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M9 14 4 9l5-5", false), .path("M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityUpload: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", false), .path("M17 8l-5-5-5 5", false), .path("M12 3v12", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", false), .path("M17 8l-5-5-5 5", false), .path("M12 3v12", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", false), .path("M17 8l-5-5-5 5", false), .path("M12 3v12", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water600]
    ),
    .utilityUploadCloud: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12 13v8", false), .path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", false), .path("m8 17 4-4 4 4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12 13v8", false), .path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", false), .path("m8 17 4-4 4 4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12 13v8", false), .path("M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", false), .path("m8 17 4-4 4 4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water600]
    ),
    .utilityUserCheck: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M2 21a8 8 0 0 1 13.292-6", false), .circle(10, 8, 5, false), .path("m16 19 2 2 4-4", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M2 21a8 8 0 0 1 13.292-6", false), .circle(10, 8, 5, false), .path("m16 19 2 2 4-4", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M2 21a8 8 0 0 1 13.292-6", false), .circle(10, 8, 5, false), .path("m16 19 2 2 4-4", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityUserMinus: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M2 21a8 8 0 0 1 13.292-6", false), .circle(10, 8, 5, false), .path("M22 19h-6", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M2 21a8 8 0 0 1 13.292-6", false), .circle(10, 8, 5, false), .path("M22 19h-6", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M2 21a8 8 0 0 1 13.292-6", false), .circle(10, 8, 5, false), .path("M22 19h-6", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityUserPlus: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M2 21a8 8 0 0 1 13.292-6", false), .circle(10, 8, 5, false), .path("M19 16v6", false), .path("M22 19h-6", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M2 21a8 8 0 0 1 13.292-6", false), .circle(10, 8, 5, false), .path("M19 16v6", false), .path("M22 19h-6", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M2 21a8 8 0 0 1 13.292-6", false), .circle(10, 8, 5, false), .path("M19 16v6", false), .path("M22 19h-6", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityUserX: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M2 21a8 8 0 0 1 11.873-7", false), .circle(10, 8, 5, false), .path("m17 17 5 5", false), .path("m22 17-5 5", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M2 21a8 8 0 0 1 11.873-7", false), .circle(10, 8, 5, false), .path("m17 17 5 5", false), .path("m22 17-5 5", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M2 21a8 8 0 0 1 11.873-7", false), .circle(10, 8, 5, false), .path("m17 17 5 5", false), .path("m22 17-5 5", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityWind: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M12.8 21.6A2 2 0 1 0 14 18H2", false), .path("M17.5 10a2.5 2.5 0 1 1 2 4H2", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M12.8 21.6A2 2 0 1 0 14 18H2", false), .path("M17.5 10a2.5 2.5 0 1 1 2 4H2", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M12.8 21.6A2 2 0 1 0 14 18H2", false), .path("M17.5 10a2.5 2.5 0 1 1 2 4H2", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityXCircle: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m15 9-6 6", false), .path("m9 9 6 6", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m15 9-6 6", false), .path("m9 9 6 6", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 12, 10, false), .path("m15 9-6 6", false), .path("m9 9 6 6", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityZap: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317", false), .path("M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773", false), .path("M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317", false), .path("M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773", false), .path("M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317", false), .path("M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773", false), .path("M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .sun500]
    ),
    .utilityZoomIn: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(11, 11, 8, false), .path("M21 21L16.65 16.65", false), .path("M11 8L11 14", false), .path("M8 11L14 11", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(11, 11, 8, false), .path("M21 21L16.65 16.65", false), .path("M11 8L11 14", false), .path("M8 11L14 11", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(11, 11, 8, false), .path("M21 21L16.65 16.65", false), .path("M11 8L11 14", false), .path("M8 11L14 11", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .utilityZoomOut: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(11, 11, 8, false), .path("M21 21L16.65 16.65", false), .path("M8 11L14 11", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(11, 11, 8, false), .path("M21 21L16.65 16.65", false), .path("M8 11L14 11", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(11, 11, 8, false), .path("M21 21L16.65 16.65", false), .path("M8 11L14 11", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .ink900]
    ),
    .weatherCloud: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .water300]
    ),
    .weatherMoon: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.path("M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401", false)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.path("M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401", false)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.path("M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401", false)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .sun300]
    ),
    .weatherSun: PlantimV4IconData(
        grades: [
            .micro: [
                PlantimV4Layer("primary", [.circle(12, 12, 4, false)]),
                PlantimV4Layer("accent", [.circle(12, 4, 1.1, true), .circle(20, 12, 1.1, true), .circle(12, 20, 1.1, true), .circle(4, 12, 1.1, true), .circle(17.657, 6.343, 1.1, true), .circle(17.657, 17.657, 1.1, true), .circle(6.343, 17.657, 1.1, true), .circle(6.343, 6.343, 1.1, true)]),
            ],
            .base: [
                PlantimV4Layer("primary", [.circle(12, 12, 4, false)]),
                PlantimV4Layer("accent", [.circle(12, 4, 1.1, true), .circle(20, 12, 1.1, true), .circle(12, 20, 1.1, true), .circle(4, 12, 1.1, true), .circle(17.657, 6.343, 1.1, true), .circle(17.657, 17.657, 1.1, true), .circle(6.343, 17.657, 1.1, true), .circle(6.343, 6.343, 1.1, true)]),
            ],
            .display: [
                PlantimV4Layer("primary", [.circle(12, 12, 4, false)]),
                PlantimV4Layer("accent", [.circle(12, 4, 1.1, true), .circle(20, 12, 1.1, true), .circle(12, 20, 1.1, true), .circle(4, 12, 1.1, true), .circle(17.657, 6.343, 1.1, true), .circle(17.657, 17.657, 1.1, true), .circle(6.343, 17.657, 1.1, true), .circle(6.343, 6.343, 1.1, true)]),
            ],
        ],
        solid: [
            .micro: .bold(3.3),
            .base: .bold(3.1),
        ],
        duotonePrimary: ["primary"],
        multicolor: ["primary": .sun500, "accent": .sun500]
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
