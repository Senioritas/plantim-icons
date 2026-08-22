import XCTest
@testable import PlantimIcons

final class PlantimIconsTests: XCTestCase {
    func testGeneratedRegistryMetadataIsPresent() {
        XCTAssertEqual(PlantimIconsMetadata.version, "2.0.0")
        XCTAssertEqual(PlantimIconsMetadata.registryHash.count, 64)
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
