// Hand-authored v3-only icons (node geometry, 24x24, stroke-only).
// These are ingested by generate-v3-icons.mjs exactly like the custom-src SVGs, but
// authored as data for precision. Ids here must match palette.json idOverrides where set.
// Groups drive the catalog / HTML grouping; keywords feed the searchable catalog.

const p = (d) => ({ type: "path", attrs: { d } });
const c = (cx, cy, r) => ({ type: "circle", attrs: { cx: `${cx}`, cy: `${cy}`, r: `${r}` } });
const l = (x1, y1, x2, y2) => ({ type: "line", attrs: { x1: `${x1}`, y1: `${y1}`, x2: `${x2}`, y2: `${y2}` } });
const rect = (x, y, w, h, rx) => ({ type: "rect", attrs: { x: `${x}`, y: `${y}`, width: `${w}`, height: `${h}`, rx: `${rx}` } });

export const authoredIcons = [
  // ============ TAB ALTERNATIVES ============
  // --- Today (replace Home) ---
  { id: "nav.today.sun", category: "nav", group: "Today", label: "Sun (new day)", keywords: ["today", "day", "sun", "home"], nodes: [
    c(12, 12, 4), l(12, 3, 12, 5), l(12, 19, 12, 21), l(3, 12, 5, 12), l(19, 12, 21, 12),
    p("M5.6 5.6 7 7"), p("M17 17l1.4 1.4"), p("M18.4 5.6 17 7"), p("M5.6 18.4 7 17") ] },
  { id: "nav.today.sunrise", category: "nav", group: "Today", label: "Sunrise", keywords: ["today", "sunrise", "morning", "day"], nodes: [
    p("M3 19h18"), p("M7.5 19a4.5 4.5 0 0 1 9 0"), l(12, 5, 12, 7), p("M5.5 11l1.3 1.3"), p("M18.5 11 17.2 12.3") ] },
  { id: "nav.today.leaf", category: "nav", group: "Today", label: "Leaf & dew", keywords: ["today", "leaf", "daily", "garden"], nodes: [
    p("M4 20C4 12 12 4 20 4c0 8-8 16-16 16Z"), l(4, 20, 20, 4), c(14, 9, 1.6) ] },

  // --- Garden ---
  { id: "nav.garden.beds", category: "nav", group: "Garden (tab)", label: "Beds / rows", keywords: ["garden", "beds", "rows", "plot"], nodes: [
    p("M3 9c3-2 15-2 18 0"), p("M3 14c3-2 15-2 18 0"), p("M3 19c3-2 15-2 18 0"), c(8, 6, 1), c(16, 6, 1) ] },
  { id: "nav.garden.plot", category: "nav", group: "Garden (tab)", label: "Plot map", keywords: ["garden", "plot", "map", "grid"], nodes: [
    rect(3, 3, 18, 18, 2), l(12, 3, 12, 21), l(3, 12, 21, 12), c(7.5, 7.5, 1.3), c(16.5, 16.5, 1.3) ] },
  { id: "nav.garden.sprouts", category: "nav", group: "Garden (tab)", label: "Sprouts", keywords: ["garden", "sprouts", "plants", "grow"], nodes: [
    p("M4 20h16"), l(12, 20, 12, 12), p("M12 14c-1.4-1-3.4-.6-3.8 1"), p("M12 12c1.4-1 3.4-.6 3.8 1"),
    l(7.5, 20, 7.5, 16), p("M7.5 17.5c-1-.8-2.4-.4-2.7.8"), l(16.5, 20, 16.5, 16), p("M16.5 17.5c1-.8 2.4-.4 2.7.8") ] },

  // --- Plant ---
  { id: "nav.plant.potted", category: "nav", group: "Plant (tab)", label: "Potted plant", keywords: ["plant", "pot", "potted", "houseplant"], nodes: [
    l(6, 13, 18, 13), p("M7 13l1.2 7h7.6l1.2-7"), l(12, 13, 12, 8),
    p("M12 11C10 11 8.5 9.5 8.5 7.5c2 0 3.5 1.5 3.5 3.5z"), p("M12 10C14 10 15.5 8.5 15.5 6.5c-2 0-3.5 1.5-3.5 3.5z") ] },
  { id: "nav.plant.leaf", category: "nav", group: "Plant (tab)", label: "Leaf", keywords: ["plant", "leaf", "foliage"], nodes: [
    p("M4 20C4 12 12 4 20 4c0 8-8 16-16 16Z"), l(4, 20, 20, 4), p("M9.5 14.5l3-.8"), p("M12.5 11.5l3-.8") ] },
  { id: "nav.plant.sprout", category: "nav", group: "Plant (tab)", label: "Sprout", keywords: ["plant", "sprout", "young", "seedling"], nodes: [
    p("M6 18h12"), l(12, 18, 12, 10),
    p("M12 13C9.5 13 8 11 8 8.5c2.5 0 4 2 4 4.5z"), p("M12 11C14.5 11 16 9 16 6.5c-2.5 0-4 2-4 4.5z") ] },

  // --- Calendar ---
  { id: "nav.calendar.plain", category: "nav", group: "Calendar (tab)", label: "Calendar", keywords: ["calendar", "date", "schedule"], nodes: [
    rect(3, 4, 18, 17, 2), l(3, 9, 21, 9), l(8, 2, 8, 6), l(16, 2, 16, 6) ] },
  { id: "nav.calendar.leaf", category: "nav", group: "Calendar (tab)", label: "Care calendar", keywords: ["calendar", "care", "leaf", "schedule"], nodes: [
    rect(3, 4, 18, 17, 2), l(3, 9, 21, 9), l(8, 2, 8, 6), l(16, 2, 16, 6),
    p("M9 16.5c0-2.2 1.8-4 4.5-4 0 2.2-1.8 4-4.5 4z"), p("M9 16.5l3.5-3") ] },
  { id: "nav.calendar.check", category: "nav", group: "Calendar (tab)", label: "Task done", keywords: ["calendar", "check", "done", "task"], nodes: [
    rect(3, 4, 18, 17, 2), l(3, 9, 21, 9), l(8, 2, 8, 6), l(16, 2, 16, 6), p("M8.5 15.5l2.5 2.5 4.5-5") ] },

  // --- Feed ---
  { id: "nav.feed.stream", category: "nav", group: "Feed (tab)", label: "Stream", keywords: ["feed", "stream", "activity", "list"], nodes: [
    rect(3, 5, 4, 4, 1), l(9, 6.2, 21, 6.2), l(9, 8.4, 17, 8.4), rect(3, 14, 4, 4, 1), l(9, 15.2, 21, 15.2), l(9, 17.4, 17, 17.4) ] },
  { id: "nav.feed.cards", category: "nav", group: "Feed (tab)", label: "Cards", keywords: ["feed", "cards", "posts", "stack"], nodes: [
    rect(7, 3.5, 14, 13, 2), rect(3, 7.5, 14, 13, 2), l(6, 12.5, 14, 12.5), l(6, 15.5, 11, 15.5) ] },
  { id: "nav.feed.waves", category: "nav", group: "Feed (tab)", label: "Waves (RSS)", keywords: ["feed", "rss", "waves", "subscribe"], nodes: [
    c(5.5, 18.5, 1.4), p("M5 13a6 6 0 0 1 6 6"), p("M5 7a12 12 0 0 1 12 12") ] },

  // --- Chat ---
  { id: "nav.chat.bubble", category: "nav", group: "Chat (tab)", label: "Bubble", keywords: ["chat", "message", "bubble", "talk"], nodes: [
    p("M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"), l(8, 9, 16, 9), l(8, 12.5, 13, 12.5) ] },
  { id: "nav.chat.leaf", category: "nav", group: "Chat (tab)", label: "Garden chat", keywords: ["chat", "leaf", "community", "advice"], nodes: [
    p("M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"),
    p("M9 12c0-1.8 1.5-3.2 3.6-3.2 0 1.8-1.5 3.2-3.6 3.2z"), p("M9 12l2.6-2.2") ] },
  { id: "nav.chat.dots", category: "nav", group: "Chat (tab)", label: "Typing", keywords: ["chat", "typing", "dots", "message"], nodes: [
    p("M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"), c(8.5, 10, 1), c(12, 10, 1), c(15.5, 10, 1) ] },

  // ============ CARE ACTIONS ============
  { id: "care.watering", category: "care", group: "Care actions", label: "Watering", keywords: ["water", "watering", "drop", "hydrate", "care"], nodes: [
    p("M12 3C9 7 7 9.5 7 12a5 5 0 0 0 10 0c0-2.5-2-5-5-9z"), p("M10 12.5a2 2 0 0 0 2 2") ] },
  { id: "care.watering.alt", category: "care", group: "Care actions", label: "Watering (can)", keywords: ["water", "watering can", "care"], nodes: [
    p("M4 12h9v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"), p("M4 12V9.5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2V12"),
    p("M13 13.5h3.5l3-2.5"), l(19.5, 12.5, 19.5, 14.5), l(17.5, 13.5, 17.5, 15.5) ] },
  { id: "care.fertilizing", category: "care", group: "Care actions", label: "Fertilizing", keywords: ["fertilize", "fertilizing", "nutrients", "feed", "care"], nodes: [
    p("M4 18h16"), l(12, 18, 12, 14), p("M12 15c-1-1.5-3-1.5-4 0"), p("M12 15c1-1.5 3-1.5 4 0"),
    c(8, 7, 1), c(12, 5, 1), c(16, 7, 1) ] },
  { id: "care.fertilizing.alt", category: "care", group: "Care actions", label: "Feed (bag)", keywords: ["fertilizer", "bag", "plant food", "care"], nodes: [
    p("M6 9h12l-1.2 11H7.2z"), p("M9 9V6h6v3"), p("M10.5 14.5c0-1.4 1.3-2.5 3-2.5 0 1.4-1.3 2.5-3 2.5z"), p("M10.5 14.5l2.4-2") ] },
  { id: "care.repotting", category: "care", group: "Care actions", label: "Repotting", keywords: ["repot", "repotting", "transplant", "pot", "care"], nodes: [
    l(6, 15, 18, 15), p("M7 15l1.3 5h7.4l1.3-5"), l(12, 13, 12, 6),
    p("M12 8c-1.2-1.2-3-1-3.5.6"), p("M12 8c1.2-1.2 3-1 3.5.6"), p("M11 13l-1.5 1.5"), p("M13 13l1.5 1.5") ] },
  { id: "care.repotting.alt", category: "care", group: "Care actions", label: "Repot (refresh)", keywords: ["repot", "refresh", "renew", "pot", "care"], nodes: [
    l(6, 14, 18, 14), p("M7.5 14l1.1 6h6.8l1.1-6"), l(12, 14, 12, 10),
    p("M12 11.5c-1-1-2.7-.8-3.2.5"), p("M12 11.5c1-1 2.7-.8 3.2.5"),
    p("M8 6a6 6 0 0 1 9-1"), p("M17 3v2.5h-2.5") ] },
  { id: "care.pruning", category: "care", group: "Care actions", label: "Pruning", keywords: ["prune", "pruning", "trim", "cut", "care"], nodes: [
    p("M5 19C5 12 10 6 18 6c0 8-6 13-13 13z"), p("M5 19 14 10"), p("M17 4l-3 3"), p("M20 7l-3-3"), c(15.5, 5.5, 0.9) ] },
  { id: "care.pruning.alt", category: "care", group: "Care actions", label: "Shears", keywords: ["prune", "shears", "scissors", "cut", "care"], nodes: [
    c(6, 7, 2.5), c(6, 17, 2.5), p("M8.2 8.2 20 20"), p("M20 4 8.2 15.8") ] },
  { id: "care.log", category: "care", group: "Care actions", label: "Log care", keywords: ["log", "record", "care", "checklist", "history"], nodes: [
    rect(5, 4, 14, 17, 2), p("M9 3h6v3H9z"), p("M9 12l2 2 4-4"), l(9, 17, 15, 17) ] },
  { id: "care.reminder", category: "care", group: "Care actions", label: "Reminder", keywords: ["reminder", "notify", "bell", "care", "schedule"], nodes: [
    p("M18 15H6l1.4-2V10a4.6 4.6 0 0 1 9.2 0v3z"), p("M10.5 18.5a2 2 0 0 0 3 0"), c(17.5, 6.5, 1.8) ] },
  { id: "care.suggestion", category: "care", group: "Care actions", label: "Suggestion", keywords: ["suggestion", "ai", "tip", "recommend", "sparkles"], nodes: [
    p("M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z"),
    p("M18 14l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6z"), c(6.5, 18, 1) ] },

  // ============ PLANT LIFECYCLE ============
  { id: "plant.add", category: "lifecycle", group: "Plant lifecycle", label: "Add plant", keywords: ["add", "new plant", "create", "plus"], nodes: [
    l(5, 13, 13, 13), p("M6 13l1 7h5l1-7"), l(9.5, 13, 9.5, 9),
    p("M9.5 10.5c-1-1-2.5-.8-3 .5"), p("M9.5 10.5c1-1 2.5-.8 3 .5"), l(18, 5, 18, 10), l(15.5, 7.5, 20.5, 7.5) ] },
  { id: "plant.remove", category: "lifecycle", group: "Plant lifecycle", label: "Remove plant", keywords: ["remove", "delete", "minus", "plant"], nodes: [
    l(5, 13, 13, 13), p("M6 13l1 7h5l1-7"), l(9.5, 13, 9.5, 9),
    p("M9.5 10.5c-1-1-2.5-.8-3 .5"), p("M9.5 10.5c1-1 2.5-.8 3 .5"), l(15.5, 7.5, 20.5, 7.5) ] },
  { id: "plant.related", category: "lifecycle", group: "Plant lifecycle", label: "Related plants", keywords: ["related", "similar", "link", "connections"], nodes: [
    p("M6 11C6 8 8 6 11 6c0 3-2 5-5 5z"), p("M18 14c0 3-2 5-5 5 0-3 2-5 5-5z"), p("M10.5 9.5l3 5") ] },

  // ============ PLANT HEALTH ============
  { id: "health.healthy", category: "health", group: "Plant health", label: "Healthy", keywords: ["healthy", "good", "check", "thriving"], nodes: [
    p("M5 19C5 12 10 6 19 6c0 9-7 13-14 13z"), p("M5 19 14 10"), p("M9 14l2.5 2.5 4.5-5") ] },
  { id: "health.attention", category: "health", group: "Plant health", label: "Needs attention", keywords: ["attention", "warning", "check plant", "caution"], nodes: [
    p("M5 19C5 12 10 6 19 6c0 9-7 13-14 13z"), p("M5 19 14 10"), l(12, 11.5, 12, 14), p("M12 16.5h.01") ] },
  { id: "health.critical", category: "health", group: "Plant health", label: "Critical", keywords: ["critical", "danger", "dying", "alert"], nodes: [
    p("M5 19C5 12 10 6 19 6c0 9-7 13-14 13z"), p("M10 12l4 4"), p("M14 12l-4 4") ] },

  // ============ GROWTH STAGES ============
  { id: "stage.seedling", category: "lifecycle", group: "Growth stages", label: "Seedling", keywords: ["seedling", "sprout", "young", "stage"], nodes: [
    p("M6 20h12"), l(12, 20, 12, 15), p("M12 16c-.8-1-2.2-.8-2.6.4"), p("M12 15c.8-1 2.2-.8 2.6.4") ] },
  { id: "stage.growing", category: "lifecycle", group: "Growth stages", label: "Growing", keywords: ["growing", "vegetative", "medium", "stage"], nodes: [
    p("M5 20h14"), l(12, 20, 12, 10),
    p("M12 15c-1.3-1.3-3.3-1-3.8.7"), p("M12 15c1.3-1.3 3.3-1 3.8.7"),
    p("M12 12c-1.1-1.1-2.8-.9-3.2.6"), p("M12 12c1.1-1.1 2.8-.9 3.2.6") ] },
  { id: "stage.mature", category: "lifecycle", group: "Growth stages", label: "Mature", keywords: ["mature", "full", "grown", "tree", "stage"], nodes: [
    l(12, 21, 12, 15), p("M6.5 15a5.5 5.5 0 1 1 11 0z"), l(8.5, 21, 15.5, 21) ] },
];
