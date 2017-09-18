/// <reference path="index.d.ts" />

declare module mp.game {
    class object extends mp.game.entity {
        static createMoneyPickups(x: number, y: number, z: number, value: number, amount: number, model: string);
        static createMoneyPickups(x: number, y: number, z: number, value: number, amount: number, model: number);
        static createPortablePickup2(pickupHash: string, x: number, y: number, z: number, placeOnGround: boolean, modelHash: string): mp.game.pickup;
        static createPortablePickup2(pickupHash: string, x: number, y: number, z: number, placeOnGround: boolean, modelHash: number): mp.game.pickup;
        static createPortablePickup2(pickupHash: number, x: number, y: number, z: number, placeOnGround: boolean, modelHash: string): mp.game.pickup;
        static createPortablePickup2(pickupHash: number, x: number, y: number, z: number, placeOnGround: boolean, modelHash: number): mp.game.pickup;
        static getObjectOffsetFromCoords(xPos: number, yPos: number, zPos: number, heading: number, xOffset: number, yOffset: number, zOffset: number): mp.Vector3;
        static getPickupCoords(p0: object): number;
        static removeAllPickupsOfType(p0: object);
        static isPointInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: boolean, p11: boolean): boolean;
        static createPortablePickup(pickupHash: string, x: number, y: number, z: number, placeOnGround: boolean, modelHash: string): mp.game.pickup;
        static createPortablePickup(pickupHash: string, x: number, y: number, z: number, placeOnGround: boolean, modelHash: number): mp.game.pickup;
        static createPortablePickup(pickupHash: number, x: number, y: number, z: number, placeOnGround: boolean, modelHash: string): mp.game.pickup;
        static createPortablePickup(pickupHash: number, x: number, y: number, z: number, placeOnGround: boolean, modelHash: number): mp.game.pickup;
        static removePickup(pickup: mp.game.pickup);
        static highlightPlacementCoords(x: number, y: number, z: number, colorIndex: number);
        static highlightPlacementCoords(x: number, y: number, z: number, colorIndex: mp.game.object.placementColor);
        static isAnyObjectNearPoint(x: number, y: number, z: number, range: number, p4: boolean): boolean;
        static removeDoorFromSystem(doorHash: string);
        static removeDoorFromSystem(doorHash: number);
        static createObject(modelHash: string, x: number, y: number, z: number, networkHandle: boolean, createHandle: boolean, dynamic: boolean): mp.game.object;
        static createObject(modelHash: number, x: number, y: number, z: number, networkHandle: boolean, createHandle: boolean, dynamic: boolean): mp.game.object;
        static deleteObject(object: mp.game.object): mp.game.object;
        static deleteObject(object: mp.game.object): object;
        static deleteObject(object: object): mp.game.object;
        static deleteObject(object: object): object;
        static setTeamPickupObject(p0: object, p1: object, p2: object);
        static createAmbientPickup(pickupHash: string, posX: number, posY: number, posZ: number, p4: number, value: number, modelHash: string, p7: boolean, p8: boolean): mp.game.pickup;
        static createAmbientPickup(pickupHash: string, posX: number, posY: number, posZ: number, p4: number, value: number, modelHash: number, p7: boolean, p8: boolean): mp.game.pickup;
        static createAmbientPickup(pickupHash: number, posX: number, posY: number, posZ: number, p4: number, value: number, modelHash: string, p7: boolean, p8: boolean): mp.game.pickup;
        static createAmbientPickup(pickupHash: number, posX: number, posY: number, posZ: number, p4: number, value: number, modelHash: number, p7: boolean, p8: boolean): mp.game.pickup;
        static setDoorAccelerationLimit(doorHash: string, limit: number, p2: boolean, p3: boolean);
        static setDoorAccelerationLimit(doorHash: number, limit: number, p2: boolean, p3: boolean);
        static getSafePickupCoords(x: number, y: number, z: number, p3: object, p4: object): mp.Vector3;
        static addDoorToSystem(doorHash: string, modelHash: string, x: number, y: number, z: number, p5: number, p6: number, p7: number);
        static addDoorToSystem(doorHash: string, modelHash: number, x: number, y: number, z: number, p5: number, p6: number, p7: number);
        static addDoorToSystem(doorHash: number, modelHash: string, x: number, y: number, z: number, p5: number, p6: number, p7: number);
        static addDoorToSystem(doorHash: number, modelHash: number, x: number, y: number, z: number, p5: number, p6: number, p7: number);
        static hasClosestObjectOfTypeBeenBroken(p0: number, p1: number, p2: number, p3: number, modelHash: string, p5: object): boolean;
        static hasClosestObjectOfTypeBeenBroken(p0: number, p1: number, p2: number, p3: number, modelHash: number, p5: object): boolean;
        static setPickupRegenerationTime(p0: object, p1: object);
        static hasPickupBeenCollected(p0: object): boolean;
        static createPickupRotate(pickupHash: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, flag: number, amount: number, p9: object, p10: boolean, modelHash: string): mp.game.pickup;
        static createPickupRotate(pickupHash: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, flag: number, amount: number, p9: object, p10: boolean, modelHash: number): mp.game.pickup;
        static createPickupRotate(pickupHash: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, flag: number, amount: number, p9: object, p10: boolean, modelHash: string): mp.game.pickup;
        static createPickupRotate(pickupHash: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, flag: number, amount: number, p9: object, p10: boolean, modelHash: number): mp.game.pickup;
        static isObjectNearPoint(objectHash: string, x: number, y: number, z: number, range: number): boolean;
        static isObjectNearPoint(objectHash: number, x: number, y: number, z: number, range: number): boolean;
        static isGarageEmpty(garage: object, p1: boolean, p2: number): boolean;
        static createObjectNoOffset(modelHash: string, x: number, y: number, z: number, networkHandle: boolean, createHandle: boolean, dynamic: boolean): mp.game.object;
        static createObjectNoOffset(modelHash: number, x: number, y: number, z: number, networkHandle: boolean, createHandle: boolean, dynamic: boolean): mp.game.object;
        static doorControl(doorHash: string, x: number, y: number, z: number, locked: boolean, p5: number, p6: number, p7: number);
        static doorControl(doorHash: number, x: number, y: number, z: number, locked: boolean, p5: number, p6: number, p7: number);
        static doesPickupExist(p0: object): boolean;
        static trackObjectVisibility(p0: object);
        static setDoorAjarAngle(doorHash: string, ajar: number, p2: boolean, p3: boolean);
        static setDoorAjarAngle(doorHash: number, ajar: number, p2: boolean, p3: boolean);
        static getObjectFragmentDamageHealth(p0: object, p1: boolean): number;
        static doesObjectOfTypeExistAtCoords(x: number, y: number, z: number, radius: number, hash: string, p5: boolean): boolean;
        static doesObjectOfTypeExistAtCoords(x: number, y: number, z: number, radius: number, hash: number, p5: boolean): boolean;
        static doesDoorExist(doorHash: string): boolean;
        static doesDoorExist(doorHash: number): boolean;
        static isDoorClosed(door: string): boolean;
        static isDoorClosed(door: number): boolean;
        static doesPickupObjectExist(p0: object): boolean;
        static getClosestObjectOfType(x: number, y: number, z: number, radius: number, modelHash: string, isMissing: boolean, p6: boolean, p7: boolean): mp.game.object;
        static getClosestObjectOfType(x: number, y: number, z: number, radius: number, modelHash: number, isMissing: boolean, p6: boolean, p7: boolean): mp.game.object;
        static getStateOfClosestDoorOfType(type: string, x: number, y: number, z: number, locked: boolean, heading: number): mp.game.object.doorState;
        static getStateOfClosestDoorOfType(type: number, x: number, y: number, z: number, locked: boolean, heading: number): mp.game.object.doorState;
        static setForceObjectThisFrame(p0: object, p1: object, p2: object, p3: object);
        static setStateOfClosestDoorOfType(type: string, x: number, y: number, z: number, locked: boolean, heading: number, p6: boolean);
        static setStateOfClosestDoorOfType(type: number, x: number, y: number, z: number, locked: boolean, heading: number, p6: boolean);
        static isPickupWithinRadius(pickupHash: string, x: number, y: number, z: number, radius: number): boolean;
        static isPickupWithinRadius(pickupHash: number, x: number, y: number, z: number, radius: number): boolean;
        static createPickup(pickupHash: string, posX: number, posY: number, posZ: number, p4: number, value: number, p6: boolean, modelHash: string): mp.game.pickup;
        static createPickup(pickupHash: string, posX: number, posY: number, posZ: number, p4: number, value: number, p6: boolean, modelHash: number): mp.game.pickup;
        static createPickup(pickupHash: number, posX: number, posY: number, posZ: number, p4: number, value: number, p6: boolean, modelHash: string): mp.game.pickup;
        static createPickup(pickupHash: number, posX: number, posY: number, posZ: number, p4: number, value: number, p6: boolean, modelHash: number): mp.game.pickup;

        slide(toX: number, toY: number, toZ: number, speedX: number, speedY: number, speedZ: number, collision: boolean): boolean;
        setActivatePhysicsAsSoonAsItIsUnfrozen(toggle: boolean);
        placeOnGroundProperly(): boolean;
        setTargettable(targettable: boolean);
        hasBeenBroken(): boolean;
        isVisible(): boolean;
        markForDeletion();
        setPhysicsParams(weight: number, p1: number, p2: number, p3: number, p4: number, gravity: number, p6: number, p7: number, p8: number, p9: number, buoyancy: number);
    }
}

declare module mp.game.object {
    enum placementColor {
        none = -1,
        red = 0,
        green = 1,
        blue = 2,
        greenLarger = 3,
        nothing = 4,
        greenSmall = 5
    }

    class doorState {
        locked: boolean;
        heading: boolean;
    }
}