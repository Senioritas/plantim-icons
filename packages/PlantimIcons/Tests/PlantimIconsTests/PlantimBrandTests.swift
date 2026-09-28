import SwiftUI
import XCTest
@testable import PlantimIcons

final class PlantimBrandTests: XCTestCase {
    func testMetadataMatchesRegistry() {
        XCTAssertEqual(PlantimBrandMetadata.version, "4.2.0")
        XCTAssertEqual(PlantimBrandMetadata.brandHash.count, 64)
        XCTAssertEqual(PlantimBrandName.allCases.count, PlantimBrandMetadata.brandCount)
    }

    func testRawValuesAndLabelsAreStable() {
        XCTAssertEqual(PlantimBrandName.plantim.rawValue, "brand.plantim")
        XCTAssertEqual(PlantimBrandName.google.rawValue, "brand.google")
        XCTAssertEqual(PlantimBrandName.github.rawValue, "brand.github")
        XCTAssertEqual(PlantimBrandName.apple.rawValue, "brand.apple")
        XCTAssertEqual(PlantimBrandName.github.label, "GitHub")
        XCTAssertEqual(PlantimBrandName.plantim.accessibilityLabelKey, "a11y.icons.brand.plantim")
    }

    func testGradeSelectionCoversLargeSizes() {
        XCTAssertEqual(PlantimBrandGrade.grade(forSize: 16), .micro)
        XCTAssertEqual(PlantimBrandGrade.grade(forSize: 24), .base)
        XCTAssertEqual(PlantimBrandGrade.grade(forSize: 40), .base, "ties go to the smaller size")
        XCTAssertEqual(PlantimBrandGrade.grade(forSize: 64), .display)
        XCTAssertEqual(PlantimBrandGrade.grade(forSize: 512), .display)
        XCTAssertEqual(PlantimBrandGrade.grade(forSize: 1024), .display)
    }

    func testPlantimHasThreeAuthoredGrades() {
        let micro = plantimBrandLayers(.plantim, grade: .micro)
        let display = plantimBrandLayers(.plantim, grade: .display)
        XCTAssertEqual(micro.count, 1)
        XCTAssertNotEqual(micro.first?.d, display.first?.d, "the small grade must be the simplified geometry")
        XCTAssertTrue(display.allSatisfy(\.evenOdd))
    }

    func testThirdPartyMarksFallBackToBaseGeometry() {
        XCTAssertEqual(plantimBrandLayers(.google, grade: .micro).map(\.d), plantimBrandLayers(.google, grade: .base).map(\.d))
        XCTAssertEqual(plantimBrandLayers(.google, grade: .base).count, 4)
    }

    func testDarkSurfaceColours() {
        let apple = plantimBrandLayers(.apple, grade: .base)[0]
        XCTAssertEqual(apple.color(for: .light), PlantimBrandRGB(0x00, 0x00, 0x00))
        XCTAssertEqual(apple.color(for: .dark), PlantimBrandRGB(0xFF, 0xFF, 0xFF))
        let plantim = plantimBrandLayers(.plantim, grade: .base)[0]
        XCTAssertEqual(plantim.color(for: .dark), plantim.color(for: .light), "the Plantim green never re-themes")
    }

    func testEveryLayerParsesInsideTheGrid() {
        for name in PlantimBrandName.allCases {
            for grade in PlantimBrandGrade.allCases {
                for layer in plantimBrandLayers(name, grade: grade) {
                    let bounds = PlantimBrandPathCache.shared.path(for: layer.d).boundingRect
                    XCTAssertFalse(bounds.isEmpty, "\(name) \(grade) \(layer.name) parsed to an empty path")
                    XCTAssertGreaterThanOrEqual(bounds.minX, 1)
                    XCTAssertLessThanOrEqual(bounds.maxX, 23)
                    XCTAssertGreaterThanOrEqual(bounds.minY, 1)
                    XCTAssertLessThanOrEqual(bounds.maxY, 23)
                }
            }
        }
    }
}
