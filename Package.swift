// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "PlantimIcons",
    platforms: [.iOS(.v18), .macOS(.v12)],
    products: [
        .library(name: "PlantimIcons", targets: ["PlantimIcons"])
    ],
    targets: [
        .target(
            name: "PlantimIcons",
            path: "packages/PlantimIcons/Sources/PlantimIcons"
        ),
        .testTarget(
            name: "PlantimIconsTests",
            dependencies: ["PlantimIcons"],
            path: "packages/PlantimIcons/Tests/PlantimIconsTests"
        )
    ]
)
