export { PLANTIM_ICONS_REGISTRY_HASH, PLANTIM_ICONS_VERSION } from "./index.js";

export type PlantimIconMetadata = { readonly id: string; readonly category: string; readonly accessibility: "decorative" | "semantic" | "status"; readonly accessibilityLabelKey?: string; readonly deprecated?: boolean; readonly replacement?: string };

export const PLANTIM_ICON_METADATA = Object.freeze({
  "utility.activity": {
    "id": "utility.activity",
    "category": "utility",
    "accessibility": "decorative"
  },
  "status.error": {
    "id": "status.error",
    "category": "status",
    "accessibility": "status",
    "accessibilityLabelKey": "a11y.icons.status.error"
  },
  "status.warning": {
    "id": "status.warning",
    "category": "status",
    "accessibility": "status",
    "accessibilityLabelKey": "a11y.icons.status.warning"
  },
  "utility.align.justify": {
    "id": "utility.align.justify",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.arrow.down": {
    "id": "utility.arrow.down",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.arrow.down.to.dot": {
    "id": "utility.arrow.down.to.dot",
    "category": "utility",
    "accessibility": "decorative"
  },
  "navigation.back": {
    "id": "navigation.back",
    "category": "navigation",
    "accessibility": "decorative"
  },
  "navigation.forward": {
    "id": "navigation.forward",
    "category": "navigation",
    "accessibility": "decorative"
  },
  "utility.arrow.up": {
    "id": "utility.arrow.up",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.arrow.up.from.dot": {
    "id": "utility.arrow.up.from.dot",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.award": {
    "id": "utility.award",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.baby": {
    "id": "utility.baby",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.badge.check": {
    "id": "utility.badge.check",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.bar.chart3": {
    "id": "utility.bar.chart3",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.bell": {
    "id": "utility.bell",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.bell.off": {
    "id": "utility.bell.off",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.bot": {
    "id": "utility.bot",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.brain": {
    "id": "utility.brain",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.bug": {
    "id": "utility.bug",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.cake": {
    "id": "utility.cake",
    "category": "utility",
    "accessibility": "decorative"
  },
  "calendar.date": {
    "id": "calendar.date",
    "category": "calendar",
    "accessibility": "decorative"
  },
  "utility.calendar.clock": {
    "id": "utility.calendar.clock",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.calendar.days": {
    "id": "utility.calendar.days",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.camera": {
    "id": "utility.camera",
    "category": "utility",
    "accessibility": "decorative"
  },
  "status.success": {
    "id": "status.success",
    "category": "status",
    "accessibility": "status",
    "accessibilityLabelKey": "a11y.icons.status.success"
  },
  "utility.check.check": {
    "id": "utility.check.check",
    "category": "utility",
    "accessibility": "decorative"
  },
  "status.success.circle": {
    "id": "status.success.circle",
    "category": "status",
    "accessibility": "status",
    "accessibilityLabelKey": "a11y.icons.status.success"
  },
  "status.success.circle.alt": {
    "id": "status.success.circle.alt",
    "category": "status",
    "accessibility": "status",
    "accessibilityLabelKey": "a11y.icons.status.success"
  },
  "navigation.expand": {
    "id": "navigation.expand",
    "category": "navigation",
    "accessibility": "decorative"
  },
  "navigation.previous": {
    "id": "navigation.previous",
    "category": "navigation",
    "accessibility": "decorative"
  },
  "navigation.next": {
    "id": "navigation.next",
    "category": "navigation",
    "accessibility": "decorative"
  },
  "navigation.collapse": {
    "id": "navigation.collapse",
    "category": "navigation",
    "accessibility": "decorative"
  },
  "utility.chevrons.up.down": {
    "id": "utility.chevrons.up.down",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.circle": {
    "id": "utility.circle",
    "category": "utility",
    "accessibility": "decorative"
  },
  "calendar.time": {
    "id": "calendar.time",
    "category": "calendar",
    "accessibility": "decorative"
  },
  "weather.cloud": {
    "id": "weather.cloud",
    "category": "weather",
    "accessibility": "decorative"
  },
  "utility.cloud.drizzle": {
    "id": "utility.cloud.drizzle",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.cloud.fog": {
    "id": "utility.cloud.fog",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.cloud.lightning": {
    "id": "utility.cloud.lightning",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.cloud.moon": {
    "id": "utility.cloud.moon",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.cloud.rain": {
    "id": "utility.cloud.rain",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.cloud.snow": {
    "id": "utility.cloud.snow",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.cloud.sun": {
    "id": "utility.cloud.sun",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.code": {
    "id": "utility.code",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.cookie": {
    "id": "utility.cookie",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.copy": {
    "id": "utility.copy",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.crown": {
    "id": "utility.crown",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.database": {
    "id": "utility.database",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.dna": {
    "id": "utility.dna",
    "category": "utility",
    "accessibility": "decorative"
  },
  "plant.watering": {
    "id": "plant.watering",
    "category": "plant",
    "accessibility": "decorative"
  },
  "utility.eye": {
    "id": "utility.eye",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.eye.off": {
    "id": "utility.eye.off",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.filter": {
    "id": "utility.filter",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.flame": {
    "id": "utility.flame",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.flask.conical": {
    "id": "utility.flask.conical",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.flip.horizontal2": {
    "id": "utility.flip.horizontal2",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.flower2": {
    "id": "utility.flower2",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.globe": {
    "id": "utility.globe",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.grid2x2": {
    "id": "utility.grid2x2",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.hand": {
    "id": "utility.hand",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.handshake": {
    "id": "utility.handshake",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.heart": {
    "id": "utility.heart",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.help.circle": {
    "id": "utility.help.circle",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.history": {
    "id": "utility.history",
    "category": "utility",
    "accessibility": "decorative"
  },
  "navigation.home": {
    "id": "navigation.home",
    "category": "navigation",
    "accessibility": "decorative"
  },
  "utility.image": {
    "id": "utility.image",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.inbox": {
    "id": "utility.inbox",
    "category": "utility",
    "accessibility": "decorative"
  },
  "status.info": {
    "id": "status.info",
    "category": "status",
    "accessibility": "status",
    "accessibilityLabelKey": "a11y.icons.status.info"
  },
  "utility.key": {
    "id": "utility.key",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.layout.grid": {
    "id": "utility.layout.grid",
    "category": "utility",
    "accessibility": "decorative"
  },
  "plant.growth": {
    "id": "plant.growth",
    "category": "plant",
    "accessibility": "decorative"
  },
  "utility.lightbulb": {
    "id": "utility.lightbulb",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.link": {
    "id": "utility.link",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.list": {
    "id": "utility.list",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.lock": {
    "id": "utility.lock",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.log.out": {
    "id": "utility.log.out",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.mail": {
    "id": "utility.mail",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.mail.check": {
    "id": "utility.mail.check",
    "category": "utility",
    "accessibility": "decorative"
  },
  "location.pin": {
    "id": "location.pin",
    "category": "location",
    "accessibility": "decorative"
  },
  "utility.menu": {
    "id": "utility.menu",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.message.circle": {
    "id": "utility.message.circle",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.message.square": {
    "id": "utility.message.square",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.minus": {
    "id": "utility.minus",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.monitor.smartphone": {
    "id": "utility.monitor.smartphone",
    "category": "utility",
    "accessibility": "decorative"
  },
  "weather.moon": {
    "id": "weather.moon",
    "category": "weather",
    "accessibility": "decorative"
  },
  "utility.moon.star": {
    "id": "utility.moon.star",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.more.horizontal": {
    "id": "utility.more.horizontal",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.move": {
    "id": "utility.move",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.orbit": {
    "id": "utility.orbit",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.panel.left": {
    "id": "utility.panel.left",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.panel.left.close": {
    "id": "utility.panel.left.close",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.panel.left.open": {
    "id": "utility.panel.left.open",
    "category": "utility",
    "accessibility": "decorative"
  },
  "action.edit": {
    "id": "action.edit",
    "category": "action",
    "accessibility": "decorative"
  },
  "utility.pencil.line": {
    "id": "utility.pencil.line",
    "category": "utility",
    "accessibility": "decorative"
  },
  "action.add": {
    "id": "action.add",
    "category": "action",
    "accessibility": "decorative"
  },
  "utility.plus.circle": {
    "id": "utility.plus.circle",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.quote": {
    "id": "utility.quote",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.refresh.cw": {
    "id": "utility.refresh.cw",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.rotate.ccw": {
    "id": "utility.rotate.ccw",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.rotate.cw": {
    "id": "utility.rotate.cw",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.save": {
    "id": "utility.save",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.scale": {
    "id": "utility.scale",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.scan.line": {
    "id": "utility.scan.line",
    "category": "utility",
    "accessibility": "decorative"
  },
  "plant.pruning": {
    "id": "plant.pruning",
    "category": "plant",
    "accessibility": "decorative"
  },
  "action.search": {
    "id": "action.search",
    "category": "action",
    "accessibility": "decorative"
  },
  "utility.settings": {
    "id": "utility.settings",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.settings2": {
    "id": "utility.settings2",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.share2": {
    "id": "utility.share2",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.shield": {
    "id": "utility.shield",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.shield.check": {
    "id": "utility.shield.check",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.sliders.horizontal": {
    "id": "utility.sliders.horizontal",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.smartphone": {
    "id": "utility.smartphone",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.snowflake": {
    "id": "utility.snowflake",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.sparkles": {
    "id": "utility.sparkles",
    "category": "utility",
    "accessibility": "decorative"
  },
  "plant.sprout": {
    "id": "plant.sprout",
    "category": "plant",
    "accessibility": "decorative"
  },
  "utility.square": {
    "id": "utility.square",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.square.pen": {
    "id": "utility.square.pen",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.star": {
    "id": "utility.star",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.star.half": {
    "id": "utility.star.half",
    "category": "utility",
    "accessibility": "decorative"
  },
  "weather.sun": {
    "id": "weather.sun",
    "category": "weather",
    "accessibility": "decorative"
  },
  "utility.sunrise": {
    "id": "utility.sunrise",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.sunset": {
    "id": "utility.sunset",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.swords": {
    "id": "utility.swords",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.tag": {
    "id": "utility.tag",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.thermometer": {
    "id": "utility.thermometer",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.thumbs.down": {
    "id": "utility.thumbs.down",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.thumbs.up": {
    "id": "utility.thumbs.up",
    "category": "utility",
    "accessibility": "decorative"
  },
  "action.delete": {
    "id": "action.delete",
    "category": "action",
    "accessibility": "decorative"
  },
  "utility.trees": {
    "id": "utility.trees",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.trending.down": {
    "id": "utility.trending.down",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.trending.up": {
    "id": "utility.trending.up",
    "category": "utility",
    "accessibility": "decorative"
  },
  "status.warning.alt": {
    "id": "status.warning.alt",
    "category": "status",
    "accessibility": "status",
    "accessibilityLabelKey": "a11y.icons.status.warning"
  },
  "utility.trophy": {
    "id": "utility.trophy",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.undo2": {
    "id": "utility.undo2",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.upload": {
    "id": "utility.upload",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.upload.cloud": {
    "id": "utility.upload.cloud",
    "category": "utility",
    "accessibility": "decorative"
  },
  "account.user": {
    "id": "account.user",
    "category": "account",
    "accessibility": "decorative"
  },
  "utility.user.check": {
    "id": "utility.user.check",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.user.minus": {
    "id": "utility.user.minus",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.user.plus": {
    "id": "utility.user.plus",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.user.x": {
    "id": "utility.user.x",
    "category": "utility",
    "accessibility": "decorative"
  },
  "account.users": {
    "id": "account.users",
    "category": "account",
    "accessibility": "decorative"
  },
  "utility.wind": {
    "id": "utility.wind",
    "category": "utility",
    "accessibility": "decorative"
  },
  "navigation.close": {
    "id": "navigation.close",
    "category": "navigation",
    "accessibility": "decorative"
  },
  "utility.x.circle": {
    "id": "utility.x.circle",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.zap": {
    "id": "utility.zap",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.zoom.in": {
    "id": "utility.zoom.in",
    "category": "utility",
    "accessibility": "decorative"
  },
  "utility.zoom.out": {
    "id": "utility.zoom.out",
    "category": "utility",
    "accessibility": "decorative"
  },
  "status.loading": {
    "id": "status.loading",
    "category": "status",
    "accessibility": "status",
    "accessibilityLabelKey": "a11y.icons.status.loading"
  },
  "plant.seedling": {
    "id": "plant.seedling",
    "category": "plant",
    "accessibility": "decorative"
  },
  "plant.watering.can": {
    "id": "plant.watering.can",
    "category": "plant",
    "accessibility": "decorative"
  },
  "plant.wilting": {
    "id": "plant.wilting",
    "category": "plant",
    "accessibility": "decorative"
  },
  "status.streak": {
    "id": "status.streak",
    "category": "status",
    "accessibility": "status",
    "accessibilityLabelKey": "a11y.icons.status.streak"
  },
  "plant.thriving": {
    "id": "plant.thriving",
    "category": "plant",
    "accessibility": "decorative"
  }
}) as Readonly<Record<string, PlantimIconMetadata>>;
