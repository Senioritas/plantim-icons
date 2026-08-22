import XCTest
@testable import PlantimIcons

final class PlantimIconsTests: XCTestCase {
    func testGeneratedRegistryMetadataIsPresent() {
        XCTAssertEqual(PlantimIconsMetadata.version, "2.1.0")
        XCTAssertEqual(PlantimIconsMetadata.registryHash.count, 64)
    }

    func testGeneratedNavigationContractUsesOneFeedIcon() {
        XCTAssertEqual(PlantimNavigation.feed.icon, .utilityActivity)
        XCTAssertEqual(PlantimNavigation.feed.route, "/feed")
        XCTAssertEqual(PlantimNavigation.feed.labelKey, "nav.feed")
        XCTAssertEqual(PlantimNavigation.productContractHash.count, 64)
    }

    func testEveryGeneratedIconNameIsCaseIterableAndStable() {
        XCTAssertEqual(PlantimIconName.allCases.count, 154)
        XCTAssertEqual(PlantimIconName.navigationBack.rawValue, "navigation.back")
        XCTAssertEqual(PlantimIconName.plantWatering.rawValue, "plant.watering")
    }

    @MainActor
    func testAccessibilityDefaultsFollowCanonicalRegistry() {
        XCTAssertTrue(PlantimIcon(.plantGrowth).decorative)
        XCTAssertTrue(PlantimIcon(.statusWarning).decorative)
        XCTAssertFalse(PlantimIcon(.statusWarning, accessibilityLabel: "Warning").decorative)
    }
}
