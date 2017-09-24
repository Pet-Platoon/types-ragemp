/// <reference path="../server.d.ts" />

declare interface MpEntity {
    readonly id: number;
    readonly type: MpEntityType

    alpha: number;
    dimension: number;
    model: number;
    position: MpVector3;

    destroy(): void;
}

declare enum MpEntityType {
    player = 'player',
    vehicle = 'vehicle',
    object = 'object',
    pickup = 'object',
    blip = 'blip',
    checkpoint = 'checkpoint',
    marker = 'marker',
    colshape = 'colshape'
}
