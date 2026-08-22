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
