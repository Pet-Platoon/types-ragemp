/// <reference path="../index.d.ts" />

declare module mp.game {
    class vehicle {
        static getRandomVehicleModelInMemory(p0: boolean, modelHash: number, p2: number):mp.game.vehicle.randomVehicleModel;
        static hasPreloadModsFinished(p0: object): boolean;
        static getTotalDurationOfVehicleRecording(p0: object, p1: object): object;
        static setVehicleModelIsSuppressed(model: number | string, suppressed: boolean);
        static getTotalDurationOfVehicleRecordingId(p0: object): number;
        static hasVehicleAssetLoaded(vehicleAsset: number): boolean;
        static isPlaybackGoingOnForVehicle(p0: object): boolean;
        static getRotationOfVehicleRecordingAtTime(p0: object, p1: number, p2: object): number;
        static getVehicleRecordingId(p0: object, p1: object): object;
        static deleteScriptVehicleGenerator(vehicleGenerator: number);
        static setVehicleDensityMultiplierThisFrame(multiplier: number);
        static setFarDrawVehicles(toggle: boolean);
        static startPlaybackRecordedVehicleUsingAi(p0: object, p1: object, p2: object, p3: number, p4: object);
        static getVehicleModelMaxNumberOfPassengers(modelHash: number | string): number;
        static setGarbageTrucks(toggle: boolean): object;
        static getPositionInRecording(p0: object): number;
        static getVehicleClassMaxAcceleration(p0: object): number;
        static addVehicleStuckCheckWithWarp(p0: object, p1: number, p2: object, p3: boolean, p4: boolean, p5: boolean, p6: object);
        static hasVehicleRecordingBeenLoaded(p0: object, p1: object): boolean;
        static getRandomVehicleInSphere(x: number, y: number, z: number, radius: number, modelHash: number | string, flags: number): mp.game.vehicle | object;
        static isThisModelAQuadbike(model: number | string): boolean;
        static startPlaybackRecordedVehicle(p0: object, p1: object, p2: object, p3: boolean);
        static getCurrentPlaybackForVehicle(p0: object): object;
        static isThisModelABoat(model: number | string): boolean;
        static removeVehiclesFromGeneratorsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unk: object);
        static getVehicleClassMaxBraking(p0: object): number;
        static getVehicleClassMaxAgility(p0: object): number;
        static getVehicleModelMaxTraction(modelHash: number | string): number;
        static stopPlaybackRecordedVehicle(p0: object);
        static getTimePositionInRecording(p0: object): number;
        static deleteMissionTrain(train: mp.game.vehicle): mp.game.vehicle;
        static setAllLowPriorityVehicleGeneratorsActive(active: boolean);
        static isAnyVehicleNearPoint(x: number, y: number, z: number, radius: number): boolean;
        static pausePlaybackRecordedVehicle(p0: object);
        static createMissionTrain(variation: number, x: number, y: number, z: number, direction: boolean): mp.game.vehicle | object;
        static setPlaybackSpeed(p0: object, speed: number): object;
        static setPlaybackToUseAiTryToRevertBackLater(p0: object, p1: object, p2: object, p3: boolean);
        static setVehicleShootAtTarget(driver: mp.game.ped | object, entity: mp.game.entity | object, xTarget: number, yTarget: number, zTarget: number);
        static preloadVehicleMod(p0: object, p1: object, p2: object);
        static startPlaybackRecordedVehicleWithFlags(p0: object, p1: object, p2: object, p3: object, p4: object, p5: object);
        static isCopVehicleInArea3d(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): boolean;
        static isThisModelACar(model: number | string): boolean;
        static setRandomTrains(toggle: boolean);
        static requestVehicleAsset(vehicleHash: number | string, vehicleAsset: number);
        static removeVehicleStuckCheck(p0: object);
        static setRandomBoats(toggle: boolean): object;
        static setCargobobHookPosition(p0: object, p1: number, p2: number, p3: boolean);
        static unpausePlaybackRecordedVehicle(p0: object);
        static getVehicleModelAcceleration(modelHash: number | string): number;
        static skipTimeInPlaybackRecordedVehicle(p0: object, p1: number);
        static isThisModelAnEmergencyBoat(model: number | string): boolean;
        static doesVehicleExistWithDecorator(decorator: string): boolean;
        static createScriptVehicleGenerator(x: number, y: number, z: number, heading: number, p4: number, p5: number, modelHash: number | string, p7: number, p8: number, p9: number, p10: number, p11: boolean, p12: boolean, p13: boolean, p14: boolean, p15: boolean, p16: number): number;
        static isThisModelAPlane(model: number | string): boolean;
        static getNumModColors(p0: number, p1: boolean): number;
        static skipToEndAndStopPlaybackRecordedVehicle(p0: object);
        static isThisModelATrain(model: number | string): boolean;
        static removeVehicleAsset(vehicleAsset: number);
        static isPlaybackUsingAiGoingOnForVehicle(p0: object): boolean;
        static createVehicle(modelHash: number | string, x: number, y: number, z: number, heading: number, networkHandle: boolean, vehiclehandle: boolean): object;
        static requestVehicleRecording(p0: object, p1: object);
        static getDisplayNameFromVehicleModel(modelHash: number | string): string;
        static setRandomVehicleDensityMultiplierThisFrame(multiplier: number);
        static getRandomVehicleBackBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): mp.game.vehicle | object;
        static isThisModelABike(model: number | string): boolean;
        static setMissionTrainAsNoLongerNeeded(train: mp.game.vehicle, p1: boolean): mp.game.vehicle;
        static isThisModelABicycle(model: number | string): boolean;
        static setAllVehicleGeneratorsActiveInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean);
        static getRandomVehicleFrontBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): mp.game.vehicle | object;
        static setNumberOfParkedVehicles(value: number): object;
        static isVehicleInGarageArea(garageName: string, vehicle: mp.game.vehicle | object): boolean;
        static getPositionOfVehicleRecordingAtTime(p0: object, p1: number, p2: object): number;
        static setScriptVehicleGenerator(vehicleGenerator: object, enabled: boolean);
        static getVehicleClassMaxTraction(p0: object): number;
        static getVehicleModelMaxBraking(modelHash: number | string): number;
        static isThisModelAHeli(model: number | string): boolean;
        static getVehicleClassFromName(modelHash: number | string): number;
        static setParkedVehicleDensityMultiplierThisFrame(multiplier: number);
        static removeVehicleRecording(p0: object, p1: object);
        static getVehicleModelMaxSpeed(modelHash: number | string): number;
        static disableVehicleWeapon(disabled: boolean, weaponHash: number | string, vehicle: mp.game.vehicle | object, owner: mp.game.ped | object);
        static doesScriptVehicleGeneratorExist(vehicleGenerator: number): boolean;
        static getClosestVehicle(x: number, y: number, z: number, radius: number, modelHash: number | string, flags: number): mp.game.vehicle | object;
        static displayDistantVehicles(toggle: boolean);
        static switchTrainTrack(intersectionId: number, state: boolean): object;
    }
}
declare module mp.game.vehicle {
    class randomVehicleModel {
        modelHash: number;
        p2: number;
    }
}