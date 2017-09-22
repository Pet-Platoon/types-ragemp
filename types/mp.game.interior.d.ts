/// <reference path="../index.d.ts" />

declare module mp.game {
    class interior {
        static getInteriorAtCoordsWithType(x: number, y: number, z: number, interiorType: string): number;
        static unpinInterior(interiorId: number);
        static isValidInterior(interiorId: number): boolean;
        static isInteriorPropEnabled(interiorId: number, propName: string): boolean;
        static addPickupToInteriorRoomByName(pickup: mp.game.pickup, roomName: string);
        static refreshInterior(interiorId: number);
        static disableInteriorProp(interiorId: number, propName: string);
        static enableInteriorProp(interiorId: number, propName: string);
        static disableInterior(interiorId: number, toggle: boolean);
        static isInteriorReady(interiorId: number): boolean;
        static isInteriorCapped(interiorId: number): boolean;
        static getOffsetFromInteriorInWorldCoords(interiorId: number, x: number, y: number, z: number): mp.Vector3;
        static hideMapObjectThisFrame(mapObjectHash: string);
        static hideMapObjectThisFrame(mapObjectHash: number);
        static getInteriorAtCoords(x: number, y: number, z: number): number;
        static isInteriorDisabled(interiorId: number): boolean;
        static capInterior(interiorId: number, toggle: boolean);
        static getInteriorGroupId(interiorId: number): number;
        static getInteriorFromCollision(x: number, y: number, z: number): number;
        static areCoordsCollidingWithExterior(x: number, y: number, z: number): boolean;
        static unkGetInteriorAtCoords(x: number, y: number, z: number, unk: number): number;
    }
}