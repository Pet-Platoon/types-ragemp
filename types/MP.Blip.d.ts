/// <reference path="../index.d.ts" />

declare interface MpBlip extends MpEntity {
    radius: number;
    colour: number;
    name: string;
    scale: number;

    routeFor(player: MpPlayer, colour: number, scale: number): void;
    routeFor(players: MpPlayer[], colour: number, scale: number): void;
    unrouteFor(player: MpPlayer): void;
    unrouteFor(players: MpPlayer[]): void;
}

declare interface MpBlipPool extends MpPool<MpBlip> {
    'new'(sprite: number, position: MpVector3, dimension?: number): MpBlip;
    newStreamed(sprite: number, position: MpVector3, streamRange: number, dimension?: number): MpBlip;
}
