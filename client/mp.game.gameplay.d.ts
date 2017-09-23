/// <reference path="../index.d.ts" />

declare module mp.game {
    class gameplay {
        static displayOnscreenKeyboard(p0: number, windowTitle: string, p2: string, defaultText: string, defaultConcat1: string, defaultConcat2: string, defaultConcat3: string, maxInputLength: number); //TODO: Change windowTitle to mp.game.gameplay.windowTitles
        static clearAreaOfVehicles(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: boolean);
        static getModelDimensions(modelHash: number | string, minimum: mp.Vector3, maximum: mp.Vector3): mp.game.gameplay.modelDimension;
        static clearAreaOfCops(x: number, y: number, z: number, radius: number, flags: number);
        static createIncidentWithEntity(p0: mp.game.gameplay.incidentTypes, p1: mp.game.entity, p2: number, p3: number, outIncident: number): number;
        static hasButtonCombinationJustBeenEntered(hash: number | string, amount: number): boolean;
        static clearAreaOfProjectiles(x: number, y: number, z: number, radius: number, flags: number);
        static areStringsEqual(string1: string, string2: string): boolean;
        static registerEnumToSave(p0: object, name: string);
        static overrideSaveHouse(p0: boolean, p1: number, p2: number, p3: number, p4: number, p5: boolean, p6: number, p7: number): boolean;
        static setFireAmmoThisFrame(): object;
        static clearAngledAreaOfVehicles(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean, p8: boolean, p9: boolean, p10: boolean, p11: boolean);
        static setFakeWantedLevel(fakeWantedLevel: number);
        static getAngleBetween2dVectors(x1: number, y1: number, x2: number, y2: number): number;
        static setMinigameInProgress(toggle: boolean);
        static isBulletInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean): boolean;
        static addStuntJump(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: object, p16: object): number;
        static acos(p0: number): number;
        static setTimeScale(time: number);
        static setFadeOutAfterArrest(toggle: boolean);
        static compareStrings(str1: string, str2: string, matchCase: boolean, maxLength: number): number;
        static addHospitalRestart(x: number, y: number, z: number, p3: number, p4: object): number;
        static ignoreNextRestart(toggle: boolean);
        static disablePoliceRestart(policeIndex: number, toggle: boolean);
        static removeDispatchSpawnBlockingArea(p0: object);
        static setWeatherTypeNow(weatherType: string);
        static disableAutomaticRespawn(disableRespawn: boolean);
        static isProjectileTypeInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: number, p7: boolean): boolean;
        static isNextWeatherType(weatherType: string): boolean;
        static getHeadingFromVector2d(dx: number, dy: number): number;
        static getRandomFloatInRange(startRange: number, endRange: number): number;
        static registerIntToSave(p0: object, name: string);
        static isBulletInArea(p0: number, p1: number, p2: number, p3: number, p4: boolean): boolean;
        static createIncident(p0: mp.game.gameplay.incidentTypes, p2: number, p3: number, p4: number, p5: number, p6: number, outIncident: number): number;
        static setRandomSeed(time: number);
        static isPrevWeatherType(weatherType: string): boolean;
        static setDispatchTimeBetweenSpawnAttempts(p0: object, p1: number);
        static addPoliceRestart(p0: number, p1: number, p2: number, p3: number, p4: object): object;
        static setDispatchTimeBetweenSpawnAttemptsMultiplier(p0: object, p1: number);
        static setFadeOutAfterDeath(toggle: boolean);
        static setSaveHouse(p0: object, p1: boolean, p2: boolean);
        static isProjectileInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): boolean;
        static getBitsInRange(vars: number, rangeStart: number, rangeEnd: number): number;
        static deleteIncident(incidentId: number): number;
        static hasCheatStringJustBeenEntered(hash: number | string): boolean;
        static setGamePaused(toggle: boolean);
        static setWeatherTypeTransition(sourceWeather: string | number, targetWeather: string | number, transitionTime: number);
        static setSuperJumpThisFrame(): object;
        static stringToInt(string: string, outInteger: number): number;
        static startSaveArray(p0: object, p1: number, arrayName: string);
        static tan(p0: number): number;
        static setRainFxIntensity(intensity: number);
        static findSpawnPointInDirection(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, distance: number, spawnPoint: mp.Vector3): mp.Vector3;
        static setDispatchIdealSpawnDistance(p0: number);
        static setWeatherTypePersist(weatherType: string);
        static absf(value: number): number;
        static setGravityLevel(level: number);
        static registerFloatToSave(p0: object, name: string);
        static shootSingleBulletBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, p7: boolean, weaponHash: string | number, ownerPed: mp.game.ped | object, isAudible: boolean, isInvisible: boolean, speed: number);
        static atan2(p0: number, p1: number): number;
        static setBitsInRange(vars: number, rangeStart: number, rangeEnd: number, p3: number): number;
        static setBit(address: number, offset: number): number;
        static clearAreaOfEverything(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean);
        static setRandomEventFlag(p0: boolean);
        static hasBulletImpactedInArea(p0: number, p1: number, p2: number, p3: number, p4: boolean, p5: boolean): boolean;
        static enableMpDlcMaps(toggle: boolean);
        static terminateAllScriptsWithThisName(scriptName: string);
        static setOverrideWeather(weatherType: string);
        static disableStuntJumpSet(p0: number);
        static clearArea(X: number, Y: number, Z: number, radius: number, p4: boolean, ignoreCopCars: boolean, ignoreObjects: boolean, p7: boolean);
        static isAreaOccupied(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean, p8: boolean, p9: boolean, p10: boolean, p11: object, p12: boolean): boolean;
        static setExplosiveAmmoThisFrame(): object;
        static isBitSet(address: number, offset: number): boolean;
        static startSaveData(p0: object, p1: object, p2: boolean);
        static atan(p0: number): number;
        static setThisScriptCanBePaused(toggle: boolean);
        static setWind(p0: number);
        static isPositionOccupied(p0: number, p1: number, p2: number, p3: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: boolean, p9: object, p10: boolean): boolean;
        static setCreditsActive(toggle: boolean);
        static setThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: boolean);
        static addStuntJumpAngled(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: number, p16: number, p17: object, p18: object): number
        static clearAreaOfPeds(x: number, y: number, z: number, radius: number, flags: number);
        static startSaveStruct(p0: object, p1: number, structName: string);
        static registerSaveHouse(p0: number, p1: number, p2: number, p3: number, p4: object, p5: object, p6: object): object;
        static setMissionFlag(toggle: boolean);
        static getProfileSetting(profileSetting: number): number;
        static setUnkMapFlag(flag: number);
        static asin(p0: number): number;
        static disableHospitalRestart(hospitalIndex: number, toggle: boolean);
        static isIncidentValid(incidentId: number): number;
        static registerBoolToSave(p0: object, name: string);
        static getGroundZFor3dCoord(x: number, y: number, z: number, groundZ: number, unk: boolean): number;
        static setSaveMenuActive(unk: boolean);
        static isStringNullOrEmpty(string: string): boolean;
        static getHashKey(value: string): string | number;
        static getRandomIntInRange(startRange: number, endRange: number): number;
        static setFadeInAfterDeathArrest(toggle: boolean);
        static enableDispatchService(dispatchType: mp.game.gameplay.dispatchTypes, toggle: boolean);
        static deleteStuntJump(p0: number);
        static hasBulletImpactedInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean): boolean;
        static clearAreaOfObjects(x: number, y: number, z: number, radius: number, flags: number);
        static isBulletInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean): boolean;
        static beginReplayStats(p0: object, p1: object);
        static enableStuntJumpSet(p0: number);
        static isPointObscuredByAMissionEntity(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: object): boolean;
        static clearBit(address: number, offset: number): number;
        static setWindDirection(direction: number);
        static setWeatherTypeNowPersist(weatherType: string);
        static registerTextLabelToSave(p0: object, name: string);
        static setWindSpeed(speed: number);
        static isProjectileTypeInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: object, p8: boolean): boolean;
        static absi(value: number): number;
        static usingMissionCreator(toggle: boolean);
        static getDistanceBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, useZ: boolean): number;
        static isStringNull(string: string): boolean;
        static getWeatherTypeTransition(p0: object, p1: object, progress_or_time: number): object;
        static setFadeInAfterLoad(toggle: boolean);
        static setWeatherTypeOverTime(weatherType: string, time: number);
        static setCloudHatTransition(type: string, transitionTime: number);
        static getFreeStackSlotsCount(stackSize: number): number;
        static isSniperBulletInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
        static setExplosiveMeleeThisFrame(): object;

    }
}
declare module mp.game.gameplay {
    class modelDimension {
        minimum: mp.Vector3;
        maximum: mp.Vector3;
    }

/*
    enum windowTitles {
        CELL_EMAIL_BOD	=	'Enter your Eyefind message'
        CELL_EMAIL_BODE	=	'Message too long. Try again'
        CELL_EMAIL_BODF	=	'Forbidden message. Try again'
        CELL_EMAIL_SOD	=	'Enter your Eyefind subject'
        CELL_EMAIL_SODE	=	'Subject too long. Try again'
        CELL_EMAIL_SODF	=	'Forbidden text. Try again'
        CELL_EMASH_BOD	=	'Enter your Eyefind message'
        CELL_EMASH_BODE	=	'Message too long. Try again'
        CELL_EMASH_BODF	=	'Forbidden message. Try again'
        CELL_EMASH_SOD	=	'Enter your Eyefind subject'
        CELL_EMASH_SODE	=	'Subject too long. Try again'
        CELL_EMASH_SODF	=	'Forbidden Text. Try again'
        FMMC_KEY_TIP10	=	'Enter Synopsis'
        FMMC_KEY_TIP12	=	'Enter Custom Team Name'
        FMMC_KEY_TIP12F	=	'Forbidden Text. Try again'
        FMMC_KEY_TIP12N	=	'Custom Team Name'
        FMMC_KEY_TIP8	=	'Enter Message'
        FMMC_KEY_TIP8F	=	'Forbidden Text. Try again'
        FMMC_KEY_TIP8FS	=	'Invalid Message. Try again'
        FMMC_KEY_TIP8S	=	'Enter Message'
        FMMC_KEY_TIP9	=	'Enter Outfit Name'
        FMMC_KEY_TIP9F	=	'Invalid Outfit Name. Try again'
        FMMC_KEY_TIP9N	=	'Outfit Name'
        PM_NAME_CHALL	=	'Enter Challenge Name'
    }
*/

    enum incidentTypes {
        fireDepartment = 3,
        paramedics = 5,
        police = 7,
        pedsInCavalcades = 11,
        merryweather = 14
    }

    enum dispatchTypes {
        policeAutomobile = 1,
        policeHelicopter = 2,
        swatHelicopter = 3,
        fireDepartment = 4,
        swatAutomobile = 5,
        ambulanceDepartment = 6,
        gangs = 7,
        policeRiders = 8,
        policeVehicleRequest = 9,
        policeRoadBlock = 10,
        policeBoat = 11,
        armyVehicle = 12,
    }
}
