/// <reference path="../index.d.ts" />

declare module mp.game {
    class streaming {
        static removeClipSet(clipSet: string);
        static requestCollisionAtCoord(x: number, y: number, z: number): object;
        static removeAnimSet(animSet: string);
        static isModelAVehicle(model: number | string): boolean;
        static newLoadSceneStart(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: object): boolean;
        static setUnkCameraSettings(x: number, y: number, z: number, rad: number, p4: object, p5: object): object;
        static hasCollisionForModelLoaded(model: number | string): boolean;
        static doesAnimDictExist(animDict: string): boolean;
        static hasClipSetLoaded(clipSet: string): boolean;
        static isModelInCdimage(model: number | string): boolean;
        static prefetchSrl(p0: object);
        static requestIpl(iplName: string);
        static setDitchPoliceModels(toggle: boolean);
        static loadScene(x: number, y: number, z: number);
        static removeNamedPtfxAsset(fxName: string);
        static setStreaming(toggle: boolean);
        static requestAnimSet(animSet: string);
        static setGamePausesForStreaming(toggle: boolean);
        static setReducePedModelBudget(toggle: boolean);
        static setReduceVehicleModelBudget(toggle: boolean);
        static hasNamedPtfxAssetLoaded(fxName: string): boolean;
        static isIplActive(iplName: string): boolean;
        static setPedPopulationBudget(p0: number);
        static requestCollisionForModel(model: number | string);
        static requestModel(model: number | string, cb?: Function);
        static hasModelLoaded(model: number | string): boolean;
        static requestModel2(model: number | string);
        static setSrlTime(p0: number);
        static newLoadSceneStartSafe(p0: number, p1: number, p2: number, p3: number, p4: object): boolean;
        static getIdealPlayerSwitchType(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
        static requestNamedPtfxAsset(fxName: string);
        static setHdArea(x: number, y: number, z: number, ground: number);
        static setFocusArea(x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number);
        static isModelValid(model: number | string): boolean;
        static setPlayerSwitchLocation(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: object);
        static hasAnimSetLoaded(animSet: string): boolean;
        static requestAdditionalCollisionAtCoord(p0: number, p1: number, p2: number);
        static setVehiclePopulationBudget(p0: number);
        static hasAnimDictLoaded(animDict: string): boolean;
        static requestClipSet(clipSet: string);
        static requestAnimDict(animDict: string);
        static setInteriorActive(interiorID: number, toggle: boolean);
        static setModelAsNoLongerNeeded(model: number | string);
        static removeIpl(iplName: string);
        static removeAnimDict(animDict: string);
        static startPlayerSwitch(from: mp.game.ped | object, to: mp.game.ped | object, flags: number, switchType: mp.game.streaming.ePlayerSwitchTypes);
    }
}
declare module mp.game.streaming {
    enum ePlayerSwitchTypes {
        switchTypeAauto = 0,
        switchTypeLong = 1,
        switchTypeMedium = 2,
        switchTypeShort = 3
    }
}