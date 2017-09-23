/// <reference path="../server.d.ts" />

declare namespace mp {
    interface Marker extends mp.Entity {
        scale: number;
        colour: number;
        direction: mp.Vector3;
        visible: boolean;

        showFor(player: mp.Player): void;
        showFor(players: mp.Player[]): void;
        hideFor(player: mp.Player): void;
        hideFor(players: mp.Player[]): void;
        getColour(): number[];
        setColour(red: number, green: number, blue: number, alpha: number): void;
    }

    interface MarkerPool extends mp.Pool<mp.Marker> {
        'new'(model: number, position: mp.Vector3, rotation: mp.Vector3, direction: mp.Vector3, radius: number, red: number, green: number, blue: number, alpha: number, visible?: boolean, dimension?: number): mp.Marker;
    }
}
