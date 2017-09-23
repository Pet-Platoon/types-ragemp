/// <reference path="../server.d.ts" />

namespace mp {
    interface Checkpoint extends mp.Entity {
        radius: number;
        colour: number;
        destination: mp.Vector3;
        visible: boolean;

        showFor(player: mp.Player): void;
        showFor(players: mp.Player[]): void;
        hideFor(player: mp.Player): void;
        hideFor(players: mp.Player[]): void;

        getColour(): number[];
        setColour(red: number, green: number, blue: number, alpha: number): void;
    }

    interface CheckpointPool extends mp.Pool<mp.Checkpoint> {
        'new'(type: number, position: mp.Vector3, direction: mp.Vector3, radius: number, red: number, green: number, blue: number, alpha: number, visible: boolean = true, dimension: number = 0): mp.Checkpoint;
    }
}