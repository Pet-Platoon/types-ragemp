/// <reference path="../server.d.ts" />

declare interface MpColshape extends MpEntity {
    shapeType: MpColshapeType;

    isPointWithin(position: MpVector3): boolean;
}

declare interface MpColshapePool extends MpPool<MpColshape> {
    newCircle(x: number, y: number, radius: number, dimension?: number): MpColshape;
    newSphere(x: number, y: number, z: number, range: number, dimension?: number): MpColshape;
    newTube(x: number, y: number, z: number, height: number, dimension?: number): MpColshape;
    newRectangle(x: number, y: number, width: number, height: number, dimension?: number): MpColshape;
    newCube(x: number, y: number, z: number, width: number, depth: number, height: number, dimension?: number): MpColshape;
}

declare enum MpColshapeType {
    sphere = 0,
    tube = 1,
    circle = 2,
    polygon = 3,
    cuboid = 4,
    rectangle = 5
}
