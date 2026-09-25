import Foundation

public enum PlantimNavigationSurface: String, CaseIterable, Sendable {
    case feed
    case garden
    case plants
    case calendar
    case chat
    case profile
}

public struct PlantimNavigationItem: Sendable, Equatable {
    public let id: PlantimNavigationSurface
    public let route: String
    public let labelKey: String
    public let icon: PlantimIconName

    public init(id: PlantimNavigationSurface, route: String, labelKey: String, icon: PlantimIconName) {
        self.id = id
        self.route = route
        self.labelKey = labelKey
        self.icon = icon
    }
}

public enum PlantimNavigation {
    public static let version = "1.1.0"
    public static let registryHash = "d8c5059a9d8d19ddddbb5ec01484ad9eeeed5817290aabd486685e839d1cb857"
    public static let productContractHash = "372c387c30206a80e6d25da4d00c10d13aed442f7a08aad1945c043c3a458a8a"
    public static let feed = PlantimNavigationItem(id: .feed, route: "/inbox", labelKey: "nav.feed", icon: .utilityActivity)
    public static let garden = PlantimNavigationItem(id: .garden, route: "/gardens", labelKey: "nav.gardens", icon: .plantGrowth)
    public static let plants = PlantimNavigationItem(id: .plants, route: "/plants", labelKey: "quickRail.plants", icon: .plantSprout)
    public static let calendar = PlantimNavigationItem(id: .calendar, route: "/rhythm", labelKey: "nav.careCalendar", icon: .calendarDate)
    public static let chat = PlantimNavigationItem(id: .chat, route: "/chat", labelKey: "nav.plantimChat", icon: .utilityMessageCircle)
    public static let profile = PlantimNavigationItem(id: .profile, route: "/profile", labelKey: "nav.tabProfile", icon: .accountUser)
}
