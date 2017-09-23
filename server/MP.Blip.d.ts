/// <reference path="../server.d.ts" />

namespace mp {
    interface Blip extends mp.Entity {
        radius: number;
        colour: number;
        name: string;
        scale: number;

        routeFor(player: mp.Player, colour: number, scale: number): void;
        routeFor(players: mp.Player[], colour: number, scale: number): void;
        unrouteFor(player: mp.Player): void;
        unrouteFor(players: mp.Player[]): void;
    }

    interface BlipPool extends mp.Pool<mp.Blip> {
        'new'(sprite: number, position: mp.Vector3, dimension: number = 0): mp.Blip;
        newStreamed(sprite: number, position: mp.Vector3, streamRange: number, dimension: number = 0): mp.Blip;
    }
}