/// <reference path="../server.d.ts" />

declare interface MpMarker extends MpEntity {
    scale: number;
    colour: number;
    direction: MpVector3;
    visible: boolean;

    showFor(player: MpPlayer): void;
    showFor(players: MpPlayer[]): void;
    hideFor(player: MpPlayer): void;
    hideFor(players: MpPlayer[]): void;
    getColour(): number[];
    setColour(red: number, green: number, blue: number, alpha: number): void;
}

declare interface MpMarkerPool extends MpPool<MpMarker> {
    'new'(model: number, position: MpVector3, rotation: MpVector3, direction: MpVector3, radius: number, red: number, green: number, blue: number, alpha: number, visible?: boolean, dimension?: number): MpMarker;
}
