// Ids reworked by hand in dedicated v4 src modules (from the decision-record
// feedback). The transcription registries (p1-registry, p2-registry) skip these
// so the hand-authored geometry is the single source. Keep in sync with the
// rework modules' exports.
export const REWORKED = new Set([
  // P0 leaves are authored in plant.mjs already (not transcribed) — not listed here.
  // lifecycle + health
  "plant.add", "plant.remove", "plant.related", "plant.seedling", "plant.thriving",
  "plant.watering.can", "stage.growing", "stage.mature",
  "health.healthy", "health.attention", "health.critical",
  // garden tools
  "garden.gloves", "garden.hoe", "garden.hose", "garden.rake", "garden.spade",
  "garden.sprinkler", "garden.trowel",
  // genus
  "genus.cactus", "genus.ficus", "genus.orchid", "genus.palm", "genus.succulent",
  // nav
  "nav.today.leaf", "nav.plant.leaf", "nav.calendar.leaf", "nav.chat.leaf",
  "nav.chat.dots", "nav.feed.cards",
  // family
  "family.apiaceae", "family.araceae", "family.begoniaceae", "family.bromeliaceae",
  "family.nephrolepidaceae", "family.piperaceae", "family.polypodiaceae",
  // utility
  "utility.brain", "utility.hand", "utility.moon.star", "utility.move",
]);
