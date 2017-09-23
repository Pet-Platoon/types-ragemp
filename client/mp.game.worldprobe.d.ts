/// <reference path="../index.d.ts" />

declare module mp.game {
    class worldprobe {
        static startShapeTestCapsule(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number, flags: mp.game.worldprobe.probeFlag, ignoreEntity: mp.game.entity, p9: number): number;
        static castRayPointToPoint(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: mp.game.worldprobe.rayCastFlag, ignoreEntity: mp.game.entity, p8: number): number;
        static getShapeTestResult(rayHandle: number, hit: boolean, endCoords: mp.Vector3, surfaceNormal: mp.Vector3, entityHit: mp.game.entity): mp.game.worldprobe.shapeResult;
        static getShapeTestResultEx(rayHandle: number, hit: boolean, endCoords: mp.Vector3, surfaceNormal: mp.Vector3, _materialHash: number, entityHit: mp.game.entity): mp.game.worldprobe.shapeResultEx;
        static startShapeTestLosProbe(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: mp.game.worldprobe.probeFlag, ignoreEntity: mp.game.entity, p8: number): number;
        static startShapeTestBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, rotX: number, rotY: number, rotZ: number, p9: object, p10: object, ignoreEntity: mp.game.entity, p12: object): number;
    }
}

declare module mp.game.worldprobe {
    class shapeResult {
        hit: boolean;
        endCoords: mp.Vector3;
        surfaceNormal: mp.Vector3;
        entityHit: mp.game.entity;
    }

    class shapeResultEx {
        hit: boolean;
        endCoords: mp.Vector3;
        surfaceNormal: mp.Vector3;
        _materialHash: number;
        entityHit: mp.game.entity;
    }

    enum rayCastFlag {
        intersectWithMap = 1,
        intersectWithVehicles = 2,
        intersectWithPeds = 4,
        intersectWithObjects = 16,
        unknown = 32,
        unknown2 = 64,
        unknown3 = 128,
        intersectWithVegetation = 256
    }

    enum probeFlag {
        vehicles = 10,
        peds = 12
    }
}