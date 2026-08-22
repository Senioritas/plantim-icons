import { type PropType } from "vue";
export declare const PLANTIM_ICONS_VERSION: "2.0.1";
export declare const PLANTIM_ICONS_REGISTRY_HASH: "dd50bd6712fa6917a5c8c9b3ba0ff65924ab44a12dc5812923238fa0eee2cbfb";
export type PlantimIconName = "utility.activity" | "status.error" | "status.warning" | "utility.align.justify" | "utility.arrow.down" | "utility.arrow.down.to.dot" | "navigation.back" | "navigation.forward" | "utility.arrow.up" | "utility.arrow.up.from.dot" | "utility.award" | "utility.baby" | "utility.badge.check" | "utility.bar.chart3" | "utility.bell" | "utility.bell.off" | "utility.bot" | "utility.brain" | "utility.bug" | "utility.cake" | "calendar.date" | "utility.calendar.clock" | "utility.calendar.days" | "utility.camera" | "status.success" | "utility.check.check" | "status.success.circle" | "status.success.circle.alt" | "navigation.expand" | "navigation.previous" | "navigation.next" | "navigation.collapse" | "utility.chevrons.up.down" | "utility.circle" | "calendar.time" | "weather.cloud" | "utility.cloud.drizzle" | "utility.cloud.fog" | "utility.cloud.lightning" | "utility.cloud.moon" | "utility.cloud.rain" | "utility.cloud.snow" | "utility.cloud.sun" | "utility.code" | "utility.cookie" | "utility.copy" | "utility.crown" | "utility.database" | "utility.dna" | "plant.watering" | "utility.eye" | "utility.eye.off" | "utility.filter" | "utility.flame" | "utility.flask.conical" | "utility.flip.horizontal2" | "utility.flower2" | "utility.globe" | "utility.grid2x2" | "utility.hand" | "utility.handshake" | "utility.heart" | "utility.help.circle" | "utility.history" | "navigation.home" | "utility.image" | "utility.inbox" | "status.info" | "utility.key" | "utility.layout.grid" | "plant.growth" | "utility.lightbulb" | "utility.link" | "utility.list" | "utility.lock" | "utility.log.out" | "utility.mail" | "utility.mail.check" | "location.pin" | "utility.menu" | "utility.message.circle" | "utility.message.square" | "utility.minus" | "utility.monitor.smartphone" | "weather.moon" | "utility.moon.star" | "utility.more.horizontal" | "utility.move" | "utility.orbit" | "utility.panel.left" | "utility.panel.left.close" | "utility.panel.left.open" | "action.edit" | "utility.pencil.line" | "action.add" | "utility.plus.circle" | "utility.quote" | "utility.refresh.cw" | "utility.rotate.ccw" | "utility.rotate.cw" | "utility.save" | "utility.scale" | "utility.scan.line" | "plant.pruning" | "action.search" | "utility.settings" | "utility.settings2" | "utility.share2" | "utility.shield" | "utility.shield.check" | "utility.sliders.horizontal" | "utility.smartphone" | "utility.snowflake" | "utility.sparkles" | "plant.sprout" | "utility.square" | "utility.square.pen" | "utility.star" | "utility.star.half" | "weather.sun" | "utility.sunrise" | "utility.sunset" | "utility.swords" | "utility.tag" | "utility.thermometer" | "utility.thumbs.down" | "utility.thumbs.up" | "action.delete" | "utility.trees" | "utility.trending.down" | "utility.trending.up" | "status.warning.alt" | "utility.trophy" | "utility.undo2" | "utility.upload" | "utility.upload.cloud" | "account.user" | "utility.user.check" | "utility.user.minus" | "utility.user.plus" | "utility.user.x" | "account.users" | "utility.wind" | "navigation.close" | "utility.x.circle" | "utility.zap" | "utility.zoom.in" | "utility.zoom.out" | "status.loading" | "plant.seedling" | "plant.watering.can" | "plant.wilting" | "status.streak" | "plant.thriving";
export type PlantimIconProps = {
    name: PlantimIconName;
    size?: number | string;
    strokeWidth?: number;
    title?: string;
    decorative?: boolean;
};
export declare const PLANTIM_ICON_NAMES: readonly PlantimIconName[];
export declare const isPlantimIconName: (value: string) => value is PlantimIconName;
export declare const PlantimIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    name: {
        type: PropType<PlantimIconName>;
        required: true;
    };
    size: {
        type: PropType<number | string>;
        default: string;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    title: StringConstructor;
    decorative: BooleanConstructor;
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: PropType<PlantimIconName>;
        required: true;
    };
    size: {
        type: PropType<number | string>;
        default: string;
    };
    strokeWidth: {
        type: NumberConstructor;
        default: number;
    };
    title: StringConstructor;
    decorative: BooleanConstructor;
}>> & Readonly<{}>, {
    decorative: boolean;
    size: string | number;
    strokeWidth: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
