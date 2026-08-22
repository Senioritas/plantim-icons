import SwiftUI

/// A deterministic gallery used by visual review and consumer previews.
/// Keep this view in the package so the web and native galleries are generated
/// from the same `PlantimIconName.allCases` source.
public struct PlantimIconGallery: View {
  private let columns = [GridItem(.adaptive(minimum: 96), spacing: 16)]

  public init() {}

  public var body: some View {
    ScrollView {
      LazyVGrid(columns: columns, spacing: 16) {
        ForEach(PlantimIconName.allCases, id: \.rawValue) { name in
          VStack(spacing: 8) {
            PlantimIcon(name, size: 28)
              .frame(width: 44, height: 44)
            Text(name.rawValue)
              .font(.caption2)
              .multilineTextAlignment(.center)
              .lineLimit(2)
          }
          .frame(maxWidth: .infinity, minHeight: 80)
          .accessibilityElement(children: .combine)
          .accessibilityLabel(name.rawValue)
        }
      }
      .padding()
    }
    .navigationTitle("Plantim Icons")
  }
}

#Preview {
  PlantimIconGallery()
}
