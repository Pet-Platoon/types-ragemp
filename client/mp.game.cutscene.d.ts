/// <reference path="../index.d.ts" />

declare module mp.game {
    class cutscene {
        static setCutscenePedPropVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: string | number);
        static getEntityIndexOfCutsceneEntity(cutsceneEntName: string, modelHash: string | number): mp.game.entity;
        static startCutscene(p0: number);
        static startCutsceneAtCoords(x: number, y: number, z: number, p3: number);
        static hasThisCutsceneLoaded(cutsceneName: string): boolean;
        static doesCutsceneEntityExist(cutsceneEntName: string, modelHash: string | number): boolean;
        static canSetExitStateForRegisteredEntity(cutsceneEntName: string, modelHash: string | number): boolean;
        static canSetEnterForRegisteredEntity(cutsceneEntName: string, modelHash: string | number): boolean;
        static requestCutscene(cutsceneName: string, p1: number);
        static setCutsceneFadeValues(p0: boolean, p1: boolean, p2: boolean, p3: boolean);
        static setCutsceneTriggerArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number);
        static canSetExitStateForCamera(p0: boolean): boolean;
        static setCutsceneOrigin(p0: object, p1: object, p2: object, p3: object, p4: object);
        static setCutscenePetComponentVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: string | number);
        static getEntityIndexOfRegisteredEntity(cutsceneEntName: string, modelHash: string | number): mp.game.entity;
        static requestCutscene2(cutsceneName: string, p1: number, p2: number);
        static stopCutscene(p0: boolean);
        static registerEntityForCutscene(cutscenePed: mp.game.ped | object, cutsceneEntName: string, p2: number, modelHash: string | number, p4: number);
    }
}