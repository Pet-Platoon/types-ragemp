/// <reference path="../server.d.ts" />

declare interface ScriptContext {
    versions: mp.Versions;
    config: mp.Config;
    environment: mp.Environment;
    events: mp.Events;

    blips: mp.BlipPool;
    checkpoints: mp.CheckpointPool;
    colshapes: mp.ColshapePool;
    markers: mp.MarkerPool;
    objects: mp.ObjectPool;
    pickups: mp.PickupPool;
    players: mp.PlayerPool;
    vehicles: mp.VehiclePool;

    joaat(value: string): number;
    joaat(value: string[]): number[];
}