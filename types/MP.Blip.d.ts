/// <reference path="../index.d.ts" />

declare interface MpBlip extends MpEntity {
    sprite: number;
    colour: number;
    name: string;
    scale: number;
    alpha: number;
    drawRange: number;
    rotation: number;

    routeFor(player: MpPlayer, colour: number, scale: number): void;
    routeFor(players: MpPlayer[], colour: number, scale: number): void;
    unrouteFor(player: MpPlayer): void;
    unrouteFor(players: MpPlayer[]): void;
}

declare interface MpBlipPool extends MpPool<MpBlip> {
    'new'(model: number, position: MpVector3): MpBlip;
    newStreamed(model: number, position: MpVector3, streamRange: number): MpBlip;
}
