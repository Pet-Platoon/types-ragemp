/// <reference path="index.d.ts" />

declare module mp.game {
    class entity {
        static removeModelSwap(x: number, y: number, z: number, radius: number, originModel: string, newModel: string, p6: boolean);
        static removeModelSwap(x: number, y: number, z: number, radius: number, originModel: string, newModel: number, p6: boolean);
        static removeModelSwap(x: number, y: number, z: number, radius: number, originModel: number, newModel: string, p6: boolean);
        static removeModelSwap(x: number, y: number, z: number, radius: number, originModel: number, newModel: number, p6: boolean);
        static findAnimEventPhase(animDictionary: string, animName: string, p2: string, p3: object, p4: object): boolean;
        static stopSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: object, p5: number): boolean;
        static createForcedObject(x: number, y: number, z: number, p3: object, modelHash: string, p5: boolean);
        static createForcedObject(x: number, y: number, z: number, p3: object, modelHash: number, p5: boolean);
        static createModelHideExcludingScriptObjects(x: number, y: number, z: number, radius: number, model: string, p5: boolean);
        static createModelHideExcludingScriptObjects(x: number, y: number, z: number, radius: number, model: number, p5: boolean);
        static setObjectAsNoLongerNeeded(object: mp.game.object): mp.game.object;
        static removeForcedObject(p0: object, p1: object, p2: object, p3: object, p4: object);
        static isAnEntity(handle: number): boolean;
        static createModelHide(x: number, y: number, z: number, radius: number, model: string, p5: boolean);
        static createModelHide(x: number, y: number, z: number, radius: number, model: number, p5: boolean);
        static createModelSwap(x: number, y: number, z: number, radius: number, originalModel: string, newModel: string, p6: boolean);
        static createModelSwap(x: number, y: number, z: number, radius: number, originalModel: string, newModel: number, p6: boolean);
        static createModelSwap(x: number, y: number, z: number, radius: number, originalModel: number, newModel: string, p6: boolean);
        static createModelSwap(x: number, y: number, z: number, radius: number, originalModel: number, newModel: number, p6: boolean);
        static playSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: object, p5: object, p6: object, p7: object, p8: number, p9: number, p10: object, p11: number): boolean;
        static removeModelHide(p0: object, p1: object, p2: object, p3: object, p4: object, p5: object);
        static wouldEntityBeOccluded(hash: string, x: number, y: number, z: number, p4: boolean): boolean;
        static wouldEntityBeOccluded(hash: number, x: number, y: number, z: number, p4: boolean): boolean;
        static getEntityAnimDuration(animDict: string, animName: string): number;

        readonly id: number;
        dimension: number;
        readonly type: string;
        position: mp.Vector3;
        model: number;
        alpha: number;
        handle: object;

        destroy();
    }
}