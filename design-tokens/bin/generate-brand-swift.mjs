// Generates packages/PlantimIcons/Sources/PlantimIcons/PlantimBrand.swift from
// registry.brand.json. Rendering semantics mirror lib/brand-render.mjs: filled
// layers on the 24-grid, owner colours with an optional dark-surface colour
// (resolved from the SwiftUI colorScheme), or currentColor-style mono.
// Paths are parsed by the v4 renderer's SVG path parser and cached per layer.

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = path.resolve(import.meta.dirname, "../..");
const registry = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/icons/brand/registry.brand.json"), "utf8"));
const target = path.join(root, "packages/PlantimIcons/Sources/PlantimIcons/PlantimBrand.swift");

const { brandHash, ...payload } = registry;
if (crypto.createHash("sha256").update(JSON.stringify(payload)).digest("hex") !== brandHash) {
  throw new Error("brand registry hash is stale. Run `npm run icons:brand` first.");
}

const GRADES = ["micro", "base", "display"];
const quote = (v) => JSON.stringify(String(v));
const caseName = (id) => id.split(".")[1];
const rgb = (hex) => {
  const m = /^#([0-9A-F]{6})$/.exec(hex);
  if (!m) throw new Error(`bad colour ${hex}`);
  return `PlantimBrandRGB(${[0, 2, 4].map((i) => `0x${m[1].slice(i, i + 2)}`).join(", ")})`;
};

const ids = Object.keys(registry.brands).sort();
const sizeTable = Object.entries(registry.sizes)
  .map(([s, g]) => [Number(s), g])
  .sort((a, b) => a[0] - b[0]);

const layerLiteral = (l) =>
  `PlantimBrandLayer(name: ${quote(l.name)}, d: ${quote(l.d)}, fill: ${rgb(l.fill)}, dark: ${l.dark ? rgb(l.dark) : "nil"}, evenOdd: ${l.evenOdd ? "true" : "false"})`;

const data = ids
  .map((id) => {
    const b = registry.brands[id];
    const grades = GRADES.filter((g) => b.grades[g])
      .map((g) => `        .${g}: [\n${b.grades[g].map((l) => `            ${layerLiteral(l)}`).join(",\n")}\n        ]`)
      .join(",\n");
    return `    .${caseName(id)}: [\n${grades}\n    ]`;
  })
  .join(",\n");

const swift = `// GENERATED FILE - do not edit by hand.
// Source: design-tokens/icons/brand/registry.brand.json (brandHash ${brandHash}).
// Regenerate with: npm run icons:brand:swift
import Foundation
import SwiftUI

/// Brand marks are an asset class, not semantic icons: their colours belong
/// to their owners and never re-theme through Plantim tokens. Third-party marks
/// (Google, GitHub, Apple) are the owners' unmodified artwork — use them only
/// in sign-in and linked-account UI. See TRADEMARKS.md.
public enum PlantimBrandMetadata {
    public static let version = ${quote(registry.version)}
    public static let brandHash = ${quote(brandHash)}
    public static let brandCount = ${ids.length}
}

public enum PlantimBrandName: String, CaseIterable, Sendable {
${ids.map((id) => `    case ${caseName(id)} = ${quote(id)}`).join("\n")}

    /// The brand's name. Brand names are not translated.
    public var label: String {
        switch self {
${ids.map((id) => `        case .${caseName(id)}: return ${quote(registry.brands[id].label)}`).join("\n")}
        }
    }

    public var accessibilityLabelKey: String {
        switch self {
${ids.map((id) => `        case .${caseName(id)}: return ${quote(registry.brands[id].accessibilityLabelKey)}`).join("\n")}
        }
    }
}

public enum PlantimBrandVariant: String, CaseIterable, Sendable {
    /// The owner's colours; Apple and GitHub switch to white in dark mode.
    case color
    /// Every layer in the current foreground style.
    case mono
}

public enum PlantimBrandGrade: String, CaseIterable, Sendable {
${GRADES.map((g) => `    case ${g}`).join("\n")}

    static let sizeTable: [(size: CGFloat, grade: PlantimBrandGrade)] = [
${sizeTable.map(([s, g]) => `        (${s}, .${g})`).join(",\n")}
    ]

    /// Exact table sizes map directly; other sizes take the nearest listed
    /// size, ties going to the smaller one (same rule as the Vue adapter).
    public static func grade(forSize size: CGFloat) -> PlantimBrandGrade {
        var best = sizeTable[0]
        var bestDelta = CGFloat.greatestFiniteMagnitude
        for entry in sizeTable {
            let delta = abs(entry.size - size)
            if delta < bestDelta { best = entry; bestDelta = delta }
        }
        return best.grade
    }
}

struct PlantimBrandRGB: Sendable, Equatable {
    let red: Double
    let green: Double
    let blue: Double

    init(_ red: Int, _ green: Int, _ blue: Int) {
        self.red = Double(red) / 255
        self.green = Double(green) / 255
        self.blue = Double(blue) / 255
    }

    var color: Color { Color(.sRGB, red: red, green: green, blue: blue, opacity: 1) }
}

struct PlantimBrandLayer: Sendable {
    let name: String
    let d: String
    let fill: PlantimBrandRGB
    let dark: PlantimBrandRGB?
    let evenOdd: Bool

    func color(for scheme: ColorScheme) -> PlantimBrandRGB {
        scheme == .dark ? (dark ?? fill) : fill
    }
}

let plantimBrandData: [PlantimBrandName: [PlantimBrandGrade: [PlantimBrandLayer]]] = [
${data}
]

func plantimBrandLayers(_ name: PlantimBrandName, grade: PlantimBrandGrade) -> [PlantimBrandLayer] {
    let grades = plantimBrandData[name] ?? [:]
    return grades[grade] ?? grades[.base] ?? []
}

/// Parsed paths in 24-grid units. The Plantim logo's display grade is a large
/// path, so each layer is parsed once per process instead of on every layout.
final class PlantimBrandPathCache: @unchecked Sendable {
    static let shared = PlantimBrandPathCache()
    private let lock = NSLock()
    private var paths: [String: Path] = [:]

    func path(for d: String) -> Path {
        lock.lock()
        defer { lock.unlock() }
        if let cached = paths[d] { return cached }
        var path = Path()
        PlantimV4SVGPathParser(d).add(to: &path)
        paths[d] = path
        return path
    }
}

private struct PlantimBrandShape: Shape {
    let d: String

    func path(in rect: CGRect) -> Path {
        let scale = min(rect.width / 24, rect.height / 24)
        return PlantimBrandPathCache.shared.path(for: d).applying(CGAffineTransform(scaleX: scale, y: scale))
    }
}

/// Renders one brand mark at a square size.
///
///     PlantimBrand(.plantim, size: 64)
///     PlantimBrand(.google, size: 20)                 // decorative next to "Continue with Google"
///     PlantimBrand(.plantim, size: 80, accessibilityLabel: "Plantim")
public struct PlantimBrand: View {
    public let name: PlantimBrandName
    public var variant: PlantimBrandVariant
    public var size: CGFloat
    /// VoiceOver name. nil hides the mark from accessibility (use when
    /// adjacent text already names the brand).
    public var accessibilityLabel: String?

    @Environment(\\.colorScheme) private var colorScheme

    nonisolated public init(
        _ name: PlantimBrandName,
        variant: PlantimBrandVariant = .color,
        size: CGFloat = 24,
        accessibilityLabel: String? = nil
    ) {
        self.name = name
        self.variant = variant
        self.size = size
        self.accessibilityLabel = accessibilityLabel
    }

    public var body: some View {
        let layers = plantimBrandLayers(name, grade: PlantimBrandGrade.grade(forSize: size))
        let mark = ZStack {
            ForEach(layers.indices, id: \\.self) { index in
                let layer = layers[index]
                let style = FillStyle(eoFill: layer.evenOdd)
                switch variant {
                case .color:
                    PlantimBrandShape(d: layer.d).fill(layer.color(for: colorScheme).color, style: style)
                case .mono:
                    PlantimBrandShape(d: layer.d).fill(style: style)
                }
            }
        }
        .frame(width: size, height: size)

        if let accessibilityLabel {
            mark
                .accessibilityElement(children: .ignore)
                .accessibilityLabel(Text(accessibilityLabel))
                .accessibilityAddTraits(.isImage)
        } else {
            mark.accessibilityHidden(true)
        }
    }
}
`;

fs.writeFileSync(target, swift);
console.log(`Generated PlantimBrand.swift: ${ids.length} marks.`);
