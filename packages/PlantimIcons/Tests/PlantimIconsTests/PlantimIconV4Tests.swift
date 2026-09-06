import XCTest
@testable import PlantimIcons

final class PlantimIconV4Tests: XCTestCase {
    func testCaseCountMatchesGeneratedRegistryCount() {
        XCTAssertEqual(PlantimIconV4Name.allCases.count, PlantimIconsV4Metadata.iconCount)
        XCTAssertEqual(PlantimIconsV4Metadata.version, "4.0.0")
        XCTAssertEqual(PlantimIconsV4Metadata.registryHash.count, 64)
    }

    func testP0RawValuesAreStable() {
        XCTAssertEqual(PlantimIconV4Name.accountUser.rawValue, "account.user")
        XCTAssertEqual(PlantimIconV4Name.actionAdd.rawValue, "action.add")
        XCTAssertEqual(PlantimIconV4Name.calendarDate.rawValue, "calendar.date")
        XCTAssertEqual(PlantimIconV4Name.navigationHome.rawValue, "navigation.home")
        XCTAssertEqual(PlantimIconV4Name.plantGrowth.rawValue, "plant.growth")
        XCTAssertEqual(PlantimIconV4Name.plantSprout.rawValue, "plant.sprout")
        XCTAssertEqual(PlantimIconV4Name.utilityActivity.rawValue, "utility.activity")
        XCTAssertEqual(PlantimIconV4Name.utilityMessageCircle.rawValue, "utility.message.circle")
        XCTAssertEqual(PlantimIconV4Name.utilityPlusCircle.rawValue, "utility.plus.circle")
    }

    func testGradeSelectionMapsAuthoredSizesDirectly() {
        XCTAssertEqual(PlantimIconV4Grade.grade(forSize: 16), .micro)
        XCTAssertEqual(PlantimIconV4Grade.grade(forSize: 20), .micro)
        XCTAssertEqual(PlantimIconV4Grade.grade(forSize: 24), .base)
        XCTAssertEqual(PlantimIconV4Grade.grade(forSize: 32), .base)
        XCTAssertEqual(PlantimIconV4Grade.grade(forSize: 48), .display)
        XCTAssertEqual(PlantimIconV4Grade.grade(forSize: 72), .display)
    }

    func testGradeSelectionPicksNearestForOtherSizes() {
        XCTAssertEqual(PlantimIconV4Grade.grade(forSize: 10), .micro)
        XCTAssertEqual(PlantimIconV4Grade.grade(forSize: 28), .base)
        // Equidistant between 32 (base) and 48 (display): tie goes to the
        // smaller authored size.
        XCTAssertEqual(PlantimIconV4Grade.grade(forSize: 40), .base)
        XCTAssertEqual(PlantimIconV4Grade.grade(forSize: 60), .display)
        XCTAssertEqual(PlantimIconV4Grade.grade(forSize: 200), .display)
    }

    func testGradeStrokeWidthsFollowSizesTable() {
        XCTAssertEqual(PlantimIconV4Grade.micro.strokeWidth, 2.4)
        XCTAssertEqual(PlantimIconV4Grade.base.strokeWidth, 2.0)
        XCTAssertEqual(PlantimIconV4Grade.display.strokeWidth, 1.6)
    }

    func testVariantEnumIsComplete() {
        XCTAssertEqual(
            Set(PlantimIconV4Variant.allCases.map(\.rawValue)),
            ["outline", "solid", "duotone", "multicolor"]
        )
    }

    func testAnimationsAreKeyedOnRegistryField() {
        XCTAssertEqual(PlantimIconV4Name.accountUser.animation, .profileNod)
        XCTAssertEqual(PlantimIconV4Name.actionAdd.animation, .addSpin)
        XCTAssertEqual(PlantimIconV4Name.calendarDate.animation, .datePop)
        XCTAssertEqual(PlantimIconV4Name.navigationHome.animation, .homeSettle)
        XCTAssertEqual(PlantimIconV4Name.plantGrowth.animation, .gardenSway)
        XCTAssertEqual(PlantimIconV4Name.plantSprout.animation, .sproutGrow)
        XCTAssertEqual(PlantimIconV4Name.utilityActivity.animation, .pulseBeat)
        XCTAssertEqual(PlantimIconV4Name.utilityMessageCircle.animation, .chatPop)
        XCTAssertEqual(PlantimIconV4Name.utilityPlusCircle.animation, .ctaBloom)
    }

    func testReduceMotionDegradesToOpacityOnly() {
        for animation in PlantimIconV4Animation.allCases {
            for phase in PlantimTabMotion.phases {
                let spec = PlantimTabMotion.spec(for: animation, phase: phase, reduceMotion: true)
                XCTAssertEqual(spec.scaleX, 1)
                XCTAssertEqual(spec.scaleY, 1)
                XCTAssertEqual(spec.rotationDegrees, 0)
                XCTAssertEqual(spec.offsetY, 0)
            }
        }
    }

    func testMotionSpecsRestAtIdentity() {
        for animation in PlantimIconV4Animation.allCases {
            for reduceMotion in [false, true] {
                XCTAssertEqual(
                    PlantimTabMotion.spec(for: animation, phase: 0, reduceMotion: reduceMotion),
                    PlantimTabMotionSpec()
                )
            }
        }
        XCTAssertEqual(PlantimTabMotion.spec(for: nil, phase: 2, reduceMotion: false), PlantimTabMotionSpec())
        XCTAssertNil(PlantimTabMotion.animation(for: nil, phase: 1, reduceMotion: false))
    }

    @MainActor
    func testTabIconCompilesWithReduceMotionPath() {
        guard #available(iOS 17.0, macOS 14.0, tvOS 17.0, watchOS 10.0, *) else { return }
        let icon = PlantimTabIcon(name: .plantSprout, selected: true)
        XCTAssertEqual(icon.name, .plantSprout)
        XCTAssertTrue(icon.selected)
        XCTAssertEqual(icon.variant, .outline)
        XCTAssertEqual(icon.size, 24)
        let sized = PlantimTabIcon(name: .actionAdd, selected: false, variant: .multicolor, size: 32)
        XCTAssertEqual(sized.size, 32)
    }
}
