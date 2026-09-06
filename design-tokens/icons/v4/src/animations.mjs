/**
 * Plantim Icons v4 — P0 tab-selection motion specs (DESIGN.md §7).
 *
 * Hand-written spec table consumed by design-tokens/bin/generate-v4-lottie.mjs.
 *
 * Timing model: frames at fr = 60. Durations are 13–16 frames (216–267 ms);
 * every spec here uses 14–15 frames so playback lands inside the 220–260 ms
 * window. Easing "std" compiles to the Lottie bezier o:{x:.2,y:0} i:{x:.8,y:1},
 * matching cubic-bezier(.2,0,.2,1).
 *
 * Property subset (universal lottie-web / lottie-ios / lottie-android support):
 *   scale     — percent, uniform, applied around `anchor` (24-grid coords)
 *   position  — [dx, dy] offset from rest, in 24-grid units
 *   rotation  — degrees, applied around `anchor`
 *   opacity   — percent (0–100), layer opacity
 *   trimEnd   — 0..1, compiled to a "tm" trim-path modifier (draw-on)
 *
 * Shape: animationName → { duration, tracks: [track] } where each track is
 *   { layersAffected: "all" | [layerName], anchor?: [x, y],
 *     keyframes: { <property>: [{ t, v, easing? }] },
 *     splitNodes?: boolean, staggerFrames?: number }
 * `splitNodes` emits each node of the affected layer as its own Lottie layer
 * (same nm) and offsets that layer's keyframes by staggerFrames * nodeIndex.
 *
 * All motion is viewBox-contained on the 24-grid (max excursion checked
 * against stroke extents); no layout shift — anchors pin the geometry.
 */

const STD = 'std';

export const FRAME_RATE = 60;

export const animations = {
  // plant.sprout — leaves swell up from the stem tip; ground line settles.
  sproutGrow: {
    duration: 15,
    tracks: [
      {
        layersAffected: ['leaves'],
        anchor: [12, 13], // stem top, where both leaves meet
        keyframes: {
          scale: [
            { t: 0, v: 85 },
            { t: 9, v: 106, easing: STD },
            { t: 15, v: 100, easing: STD },
          ],
        },
      },
      {
        layersAffected: ['ground'],
        anchor: [12, 21],
        keyframes: {
          position: [
            { t: 0, v: [0, 0.8] },
            { t: 10, v: [0, -0.2], easing: STD },
            { t: 15, v: [0, 0], easing: STD },
          ],
        },
      },
    ],
  },

  // plant.growth — stems and leaves sway once, hinged at the bed rim.
  gardenSway: {
    duration: 15,
    tracks: [
      {
        layersAffected: ['stems', 'leaves'],
        anchor: [12, 15.5], // top edge of the bed
        keyframes: {
          rotation: [
            { t: 0, v: -2.5 },
            { t: 8, v: 2, easing: STD },
            { t: 15, v: 0, easing: STD },
          ],
        },
      },
    ],
  },

  // calendar.date — the date dot pops in from nothing with a soft overshoot.
  datePop: {
    duration: 14,
    tracks: [
      {
        layersAffected: ['date'],
        anchor: [12, 15.7], // dot centre
        keyframes: {
          scale: [
            { t: 0, v: 0 },
            { t: 9, v: 120, easing: STD },
            { t: 14, v: 100, easing: STD },
          ],
        },
      },
    ],
  },

  // utility.message.circle — bubble pops; typing dots fade in left→right.
  chatPop: {
    duration: 15,
    tracks: [
      {
        layersAffected: 'all',
        anchor: [12, 12],
        keyframes: {
          scale: [
            { t: 0, v: 92 },
            { t: 9, v: 104, easing: STD },
            { t: 15, v: 100, easing: STD },
          ],
        },
      },
      {
        layersAffected: ['dots'],
        splitNodes: true,
        staggerFrames: 2,
        keyframes: {
          opacity: [
            { t: 1, v: 0 },
            { t: 7, v: 100, easing: STD },
          ],
        },
      },
    ],
  },

  // utility.activity — the pulse line draws itself on (trim path).
  pulseBeat: {
    duration: 15,
    tracks: [
      {
        layersAffected: ['pulse'],
        keyframes: {
          trimEnd: [
            { t: 0, v: 0 },
            { t: 15, v: 1, easing: STD },
          ],
        },
      },
    ],
  },

  // account.user — person dips in from below and settles with an overshoot.
  profileNod: {
    duration: 14,
    tracks: [
      {
        layersAffected: ['person'],
        anchor: [12, 12],
        keyframes: {
          position: [
            { t: 0, v: [0, 1.2] },
            { t: 9, v: [0, -0.25], easing: STD },
            { t: 14, v: [0, 0], easing: STD },
          ],
        },
      },
    ],
  },

  // navigation.home — whole house drops in and settles.
  homeSettle: {
    duration: 15,
    tracks: [
      {
        layersAffected: 'all',
        anchor: [12, 12],
        keyframes: {
          position: [
            { t: 0, v: [0, -1.5] },
            { t: 9, v: [0, 0.4], easing: STD },
            { t: 15, v: [0, 0], easing: STD },
          ],
        },
      },
    ],
  },

  // action.add — plus quarter-spins into place.
  addSpin: {
    duration: 14,
    tracks: [
      {
        layersAffected: ['plus'],
        anchor: [12, 12],
        keyframes: {
          rotation: [
            { t: 0, v: -90 },
            { t: 14, v: 0, easing: STD },
          ],
        },
      },
    ],
  },

  // utility.plus.circle — ring blooms open while the plus quarter-spins in.
  ctaBloom: {
    duration: 15,
    tracks: [
      {
        layersAffected: ['ring'],
        anchor: [12, 12],
        keyframes: {
          scale: [
            { t: 0, v: 90 },
            { t: 15, v: 100, easing: STD },
          ],
        },
      },
      {
        layersAffected: ['plus'],
        anchor: [12, 12],
        keyframes: {
          rotation: [
            { t: 0, v: -90 },
            { t: 15, v: 0, easing: STD },
          ],
        },
      },
    ],
  },
};

export default animations;
