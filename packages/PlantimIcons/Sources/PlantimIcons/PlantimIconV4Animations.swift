// Hand-written tab-bar selection motion for v4 P0 icons.
// Keyed on the registry's `animation` field via `PlantimIconV4Name.animation`.
// Motion contract (DESIGN.md §7): 200–300 ms, transform/opacity only, no
// layout shift; `accessibilityReduceMotion` degrades to a 150 ms opacity
// crossfade. New animation families added to the registry surface here as a
// compile error, forcing a hand-authored motion spec.
import SwiftUI

/// One visual state of a selection animation. Identity (`PlantimTabMotionSpec()`)
/// is the rest state; the phase cycle always returns to it, so tab layout never
/// shifts.
struct PlantimTabMotionSpec: Equatable {
    var scaleX: CGFloat = 1
    var scaleY: CGFloat = 1
    var rotationDegrees: Double = 0
    var offsetY: CGFloat = 0
    var anchor: UnitPoint = .center
    var opacity: Double = 1
}

/// Pure, deterministic motion table: (animation family, phase) → spec.
/// Phase 0 is rest; phases 1 and 2 are the two animated steps of the impulse.
enum PlantimTabMotion {
    static let phases = [0, 1, 2]

    static func spec(
        for animation: PlantimIconV4Animation?,
        phase: Int,
        reduceMotion: Bool
    ) -> PlantimTabMotionSpec {
        guard let animation, phase != 0 else { return PlantimTabMotionSpec() }
        if reduceMotion {
            // Opacity-only crossfade; every transform stays at identity.
            return PlantimTabMotionSpec(opacity: phase == 1 ? 0.55 : 1)
        }
        switch animation {
        case .sproutGrow:
            // Leaves grow from the ground line: scale 0.85 → 1.06 → 1 with a
            // slight y-settle.
            return phase == 1
                ? PlantimTabMotionSpec(scaleX: 0.85, scaleY: 0.85, offsetY: 0.6, anchor: .bottom)
                : PlantimTabMotionSpec(scaleX: 1.06, scaleY: 1.06, offsetY: -0.35, anchor: .bottom)
        case .gardenSway:
            // 2° rotate sway around the bed.
            return phase == 1
                ? PlantimTabMotionSpec(rotationDegrees: -2, anchor: .bottom)
                : PlantimTabMotionSpec(rotationDegrees: 2, anchor: .bottom)
        case .datePop:
            // Whole-icon scale pop.
            return phase == 1
                ? PlantimTabMotionSpec(scaleX: 0.92, scaleY: 0.92)
                : PlantimTabMotionSpec(scaleX: 1.08, scaleY: 1.08)
        case .chatPop:
            // Bubble bounce: squash down, then overshoot up.
            return phase == 1
                ? PlantimTabMotionSpec(scaleX: 0.9, scaleY: 0.9, offsetY: 0.8)
                : PlantimTabMotionSpec(scaleX: 1.08, scaleY: 1.08, offsetY: -0.8)
        case .pulseBeat:
            // Horizontal pulse, like the trace stretching.
            return phase == 1
                ? PlantimTabMotionSpec(scaleX: 0.9)
                : PlantimTabMotionSpec(scaleX: 1.12)
        case .profileNod:
            // Small y bounce.
            return phase == 1
                ? PlantimTabMotionSpec(offsetY: 1.1)
                : PlantimTabMotionSpec(offsetY: -0.55)
        case .homeSettle:
            // Lift, then settle back onto the baseline.
            return phase == 1
                ? PlantimTabMotionSpec(offsetY: -1.2)
                : PlantimTabMotionSpec(offsetY: 0.5)
        case .addSpin, .ctaBloom:
            // 90° rotate-in of the plus: near-instant jump to -90°, then
            // rotate in with a small overshoot before settling at 0°.
            return phase == 1
                ? PlantimTabMotionSpec(rotationDegrees: -90)
                : PlantimTabMotionSpec(rotationDegrees: 6)
        }
    }

    /// Per-step timing. Full-motion total ≈ 260 ms (spin variant ≈ 250 ms);
    /// reduce-motion total ≈ 150 ms. Easing follows the v4 motion curve
    /// cubic-bezier(.2, 0, .2, 1).
    static func animation(
        for animation: PlantimIconV4Animation?,
        phase: Int,
        reduceMotion: Bool
    ) -> Animation? {
        guard let animation else { return nil }
        if reduceMotion { return .easeInOut(duration: 0.075) }
        switch animation {
        case .addSpin, .ctaBloom:
            switch phase {
            case 1: return .linear(duration: 0.02)
            case 2: return .timingCurve(0.2, 0, 0.2, 1, duration: 0.15)
            default: return .timingCurve(0.2, 0, 0.2, 1, duration: 0.08)
            }
        default:
            switch phase {
            case 1: return .timingCurve(0.2, 0, 0.2, 1, duration: 0.09)
            case 2: return .timingCurve(0.2, 0, 0.2, 1, duration: 0.1)
            default: return .timingCurve(0.2, 0, 0.2, 1, duration: 0.07)
            }
        }
    }
}

/// Tab-bar icon with a per-family selection animation. Icons without a
/// registry `animation` (P1/P2) render statically. The frame is fixed at
/// `size` × `size`; all motion is render transforms, so layout never shifts.
@available(iOS 17.0, macOS 14.0, tvOS 17.0, watchOS 10.0, *)
public struct PlantimTabIcon: View {
    public let name: PlantimIconV4Name
    public let selected: Bool
    public var variant: PlantimIconV4Variant
    public var size: CGFloat

    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    public init(
        name: PlantimIconV4Name,
        selected: Bool,
        variant: PlantimIconV4Variant = .outline,
        size: CGFloat = 24
    ) {
        self.name = name
        self.selected = selected
        self.variant = variant
        self.size = size
    }

    public var body: some View {
        PlantimIconV4(name, variant: variant, size: size)
            .phaseAnimator(PlantimTabMotion.phases, trigger: selected) { view, phase in
                // Only animate into selection; deselection snaps to rest.
                let spec = PlantimTabMotion.spec(
                    for: name.animation,
                    phase: selected ? phase : 0,
                    reduceMotion: reduceMotion
                )
                view
                    .scaleEffect(x: spec.scaleX, y: spec.scaleY, anchor: spec.anchor)
                    .rotationEffect(.degrees(spec.rotationDegrees), anchor: spec.anchor)
                    .offset(y: spec.offsetY * size / 24)
                    .opacity(spec.opacity)
            } animation: { phase in
                PlantimTabMotion.animation(for: name.animation, phase: phase, reduceMotion: reduceMotion)
            }
            .frame(width: size, height: size)
    }
}
