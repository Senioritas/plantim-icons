import SwiftUI
import PlantimIcons

/// Embed this view in any SwiftUI host app for visual review of every registry icon.
public struct PlantimIconGallery: View {
  public init() {}

  public var body: some View {
    List(PlantimIconName.allCases, id: \.self) { icon in
      HStack(spacing: 16) {
        ForEach([CGFloat(16), 24, 32], id: \.self) { size in
          PlantimIcon(icon, size: size)
            .frame(width: 32, height: 32)
            .accessibilityHidden(true)
        }
        Text(icon.rawValue)
          .font(.caption.monospaced())
          .textSelection(.enabled)
      }
    }
    .navigationTitle("Plantim Icons")
  }
}

/// v4 gallery — every icon in all four variants at the base optical size.
@available(iOS 17, macOS 14, *)
public struct PlantimIconV4Gallery: View {
  public init() {}

  private let variants: [PlantimIconV4Variant] = [.outline, .solid, .duotone, .multicolor]

  public var body: some View {
    List(PlantimIconV4Name.allCases, id: \.self) { icon in
      HStack(spacing: 16) {
        ForEach(variants, id: \.self) { variant in
          PlantimIconV4(icon, variant: variant, size: 28)
            .frame(width: 32, height: 32)
            .accessibilityHidden(true)
        }
        Text(icon.rawValue)
          .font(.caption.monospaced())
          .textSelection(.enabled)
      }
    }
    .navigationTitle("Plantim Icons v4")
  }
}
