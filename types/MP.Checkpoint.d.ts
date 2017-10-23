/// <reference path="../index.d.ts" />

declare interface MpCheckpoint extends MpEntity {
    radius: number;
    colour: number;
    destination: MpVector3;
    visible: boolean;

    showFor(player: MpPlayer): void;
    showFor(players: MpPlayer[]): void;
    hideFor(player: MpPlayer): void;
    hideFor(players: MpPlayer[]): void;

    getColour(): {
        readonly intValue: number;
        readonly rgba: number[];
    };
    setColour(red: number, green: number, blue: number, alpha: number): void;
}

declare interface MpCheckpointPool extends MpPool<MpCheckpoint> {
    'new'(type: number, position: MpVector3, direction: MpVector3, radius: number, red: number, green: number, blue: number, alpha: number, visible?: boolean, dimension?: number): MpCheckpoint;
}
