/// <reference path="../server.d.ts" />

declare namespace mp {
    interface Entity {
        readonly id: number;
        readonly type: mp.EntityType

        alpha: number;
        dimension: number;
        model: number;
        position: mp.Vector3;

        destroy(): void;
    }

    enum EntityType {
        player = 'player',
        vehicle = 'vehicle',
        object = 'object',
        pickup = 'object',
        blip = 'blip',
        checkpoint = 'checkpoint',
        marker = 'marker',
        colshape = 'colshape'
    }
}
