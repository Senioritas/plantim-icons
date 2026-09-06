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
    public static let version = "1.0.0"
    public static let registryHash = "6e37c9e631574cc64b8172b3c63adafb794e18829adf58b7a72547fb4d0adbd7"
    public static let productContractHash = "48a78d8df7b06de2f9c77fdb8082c261959fb4ef2fe836ff0cda3adaaeaa3a26"
    public static let feed = PlantimNavigationItem(id: .feed, route: "/feed", labelKey: "nav.feed", icon: .utilityActivity)
    public static let garden = PlantimNavigationItem(id: .garden, route: "/gardens", labelKey: "nav.gardens", icon: .plantGrowth)
    public static let plants = PlantimNavigationItem(id: .plants, route: "/plants", labelKey: "quickRail.plants", icon: .plantSprout)
    public static let calendar = PlantimNavigationItem(id: .calendar, route: "/calendar", labelKey: "nav.careCalendar", icon: .calendarDate)
    public static let chat = PlantimNavigationItem(id: .chat, route: "/chat", labelKey: "nav.plantimChat", icon: .utilityMessageCircle)
    public static let profile = PlantimNavigationItem(id: .profile, route: "/profile", labelKey: "nav.tabProfile", icon: .accountUser)
}
