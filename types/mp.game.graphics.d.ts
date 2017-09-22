/// <reference path="../index.d.ts" />

declare module mp.game {
    class graphics {
        static notify(text: any): any;                                                                                                      //TODO: Missing documentation
        static drawText(text: any, fontId: any, colourRGBA: any, scaleX: any, scaleY: any, outline: any, x: any, y: any, z: any): any; //TODO: Missing documentation
        static drawText3d(text: any, pos: any, rotation: any, scale: any, r: any, g: any, b: any, a: any, initialOffsetScaled: any): any; //TODO: Missing documentation
        static getSafeZoneSize(): any;                                                                                                      //TODO Missing documentation
        static createCheckpoint(type: mp.game.graphics.checkpointTypes, posX1: number, posY1: number, posZ1: number, posX2: number, posY2: number, posZ2: number, radius: number, colorR: number, colorG: number, colorB: number, alpha: number, reserved: mp.game.graphics.reservedSets): number;
        static hasStreamedTextureDictLoaded(textureDict: string): boolean;
        static stopScreenEffect(effectName: string);
        static drawDebugBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r: number, g: number, b: number, alpha: number);
        static setFlash(p0: number, p1: number, fadeIn: number, duration: number, fadeOut: number);
        static loadTvChannel(tvChannel: number | string): boolean;
        static hasNamedScaleformMovieLoaded(scaleformName: string): boolean;
        static startParticleFxNonLoopedOnEntity(effectName: string, entity: mp.game.entity | object, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;
        static drawScaleformMovieFullscreen(scaleform: number, red: number, green: number, blue: number, alpha: number, unk: boolean);
        static startParticleFxNonLoopedOnPedBone(effectName: string, ped: mp.game.ped | object, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, boneIndex: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;
        static setTvAudioFrontend(toggle: boolean);
        static requestScaleformMovie(scaleformName: string): number;
        static setBlackout(enable: boolean);
        static setTrackedPointInfo(point: mp.game.object | object, x: number, y: number, z: number, radius: number): object;
        static setDebugLinesAndSpheresDrawingActive(enabled: boolean);
        static setNightvision(toggle: boolean);
        static startParticleFxLoopedOnEntity(effectName: string, entity: mp.game.entity | object, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;
        static drawScaleformMovie3dNonAdditive(scaleform: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, p7: number, p8: number, p9: number, scaleX: number, scaleY: number, scaleZ: number, p13: object);
        static setScaleformMovieAsNoLongerNeeded(scaleformHandle: number): number;
        static startScreenEffect(effectName: string, duration: number, looped: boolean);
        static startParticleFxNonLoopedAtCoord(effectName: string, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): boolean;
        static setParticleFxNonLoopedColour(r: number, g: number, b: number);
        static drawMarker(type: mp.game.graphics.markerTypes, posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, rotX: number, rotY: number, rotZ: number, scaleX: number, scaleY: number, scaleZ: number, colorR: number, colorG: number, colorB: number, alpha: number, bobUpAndDown: boolean, faceCamera: boolean, p19: number, rotate: boolean, textureDict: string, textureName: string, drawOnEnts: boolean);
        static setTvVolume(volume: number);
        static setTimecycleModifier(modifierName: string);
        static getDecalWashLevel(decal: number): number;
        static world3dToScreen2d(worldX: number, worldY: number, worldZ: number, screenX: number, screenY: number): mp.game.graphics.Point;
        static getTextureResolution(textureDict: string, textureName: string): mp.Vector3;
        static getScreenEffectIsActive(effectName: string): number;
        static drawDebugText(text: string, x: number, y: number, z: number, r: number, g: number, b: number, alpha: number);
        static drawRect(x: number, y: number, width: number, height: number, r: number, g: number, b: number, a: number);
        static setTransitionTimecycleModifier(modifierName: string, transition: number);
        static setForceVehicleTrails(toggle: boolean);
        static addPetrolDecal(x: number, y: number, z: number, groundLvl: number, width: number, transparency: number): object;
        static callScaleformMovieFunctionStringParams(scaleform: number, functionName: string, param1: string, param2: string, param3: string, param4: string, param5: string);
        static drawScaleformMovie(scaleformHandle: number, x: number, y: number, width: number, height: number, red: number, green: number, blue: number, alpha: number, p9: number);
        static drawSpotLightWithShadow(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, colorR: number, colorG: number, colorB: number, distance: number, brightness: number, roundness: number, radius: number, falloff: number, shadow: number);
        static removeDecalsInRange(x: number, y: number, z: number, range: number);
        static setParticleFxLoopedEvolution(ptfxHandle: number, propertyName: string, amount: number, Id: boolean);
        static setParticleFxBloodScale(p0: boolean);
        static set2dLayer(layer: number);
        static drawLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r: number, g: number, b: number, alpha: number);
        static setPtfxAssetNextCall(name: string);
        static setScaleformMovieToUseSystemTime(scaleform: number, toggle: boolean);
        static startParticleFxLoopedOnEntity2(effectName: string, entity: mp.game.entity | object, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;
        static setParticleFxLoopedAlpha(ptfxHandle: number, alpha: number);
        static drawDebugCross(x: number, y: number, z: number, size: number, r: number, g: number, b: number, alpha: number);
        static doesParticleFxLoopedExist(ptfxHandle: number): boolean;
        static setParticleFxNonLoopedAlpha(alpha: number);
        static setSeethrough(toggle: boolean);
        static setParticleFxLoopedColour(ptfxHandle: number, r: number, g: number, b: number, p4: boolean);
        static drawDebugLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r: number, g: number, b: number, alpha: number);
        static beginTextComponent(componentType: string);
        static setFarShadowsSuppressed(toggle: boolean);
        static hasScaleformContainerMovieLoadedIntoParent(scaleformHandle: number): boolean;
        static setTimecycleModifierStrength(strength: number);
        static moveVehicleDecals(p0: object, p1: object);
        static hasScaleformMovieLoaded(scaleformHandle: number): boolean;
        static getScreenActiveResolution(x: number, y: number): mp.game.graphics.Size;
        static enableMovieSubtitles(toggle: boolean);
        static drawScaleformMovie3d(scaleform: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, p7: number, p8: number, p9: number, scaleX: number, scaleY: number, scaleZ: number, p13: object);
        static getScreenResolution(x: number, y: number): mp.game.graphics.Size;
        static stopParticleFxLooped(ptfxHandle: number, p1: boolean);
        static requestHudScaleform(hudComponent: mp.game.graphics.hudComponents);
        static setParticleFxShootoutBoat(p0: object);
        static pushScaleformMovieFunctionFromHudComponent(hudComponent: number, functionName: string): boolean;
        static washDecalsInRange(p0: object, p1: object, p2: object, p3: object, p4: object);
        static enableAlienBloodVfx(toggle: boolean);
        static transitionToBlurred(transitionTime: number): boolean;
        static drawDebugText2d(text: string, x: number, y: number, z: number, r: number, g: number, b: number, alpha: number);
        static startParticleFxNonLoopedOnPedBone2(effectName: string, ped: mp.game.ped | object, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, boneIndex: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): boolean;
        static removeDecalsFromObjectFacing(obj: mp.game.object | object, x: number, y: number, z: number);
        static setDrawOrigin(x: number, y: number, z: number, p3: object);
        static drawDebugSphere(x: number, y: number, z: number, radius: number, r: number, g: number, b: number, alpha: number);
        static pushScaleformMovieFunctionN(functionName: string): boolean;
        static drawPoly(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, r: number, g: number, b: number, alpha: number);
        static setParticleFxCamInsideNonplayerVehicle(p0: object, p1: boolean);
        static setForcePedFootstepsTracks(toggle: boolean);
        static destroyTrackedPoint(point: mp.game.object | object);
        static addDecal(p0: mp.game.graphics.decalTypes, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: number, p16: number, p17: boolean, p18: boolean, p19: boolean): number;
        static setParticleFxLoopedScale(ptfxHandle: number, scale: number);
        static loadMovieMeshSet(movieMeshSetName: string): number;
        static setScreenDrawPosition(x: number, y: number);
        static pushScaleformMovieFunctionParameterString(value: string);
        static setTvChannel(channel: number);
        static requestScaleformMovie3(scaleformName: string): number;
        static setStreamedTextureDictAsNoLongerNeeded(textureDict: string);
        static pushScaleformMovieFunctionParameterInt(value: number);
        static removeParticleFx(ptfxHandle: number, p1: boolean);
        static isTrackedPointVisible(point: mp.game.object | object): boolean;
        static requestScaleformMovieInstance(scaleformName: string): number;
        static pushScaleformMovieFunctionParameterBool(value: boolean);
        static isDecalAlive(decal: number):boolean;
        static startParticleFxLoopedOnEntityBone(effectName: string, entity: mp.game.entity | object, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;
        static startParticleFxNonLoopedOnEntity2(effectName: string, entity: mp.game.entity | object, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): boolean;
        static disableVehicleDistantlights(toggle: boolean);
        static setNoisinessoveride(value: number);
        static removeDecalsFromObject(obj: mp.game.object | object);
        static drawScaleformMovieFullscreenMasked(scaleform1: number, scaleform2: number, red: number, green: number, blue: number, alpha: number);
        static callScaleformMovieFunctionFloatParams(scaleform: number, functionName: string, param1: number, param2: number, param3: number, param4: number, param5: number);
        static drawSpotLight(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, colorR: number, colorG: number, colorB: number, distance: number, brightness: number, roundness: number, radius: number, falloff: number);
        static drawBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r: number, g: number, b: number, alpha: number);
        static pushScaleformMovieFunctionParameterFloat(value: number);
        static fadeDecalsInRange(p0: object, p1: object, p2: object, p3: object, p4: object);
        static enableClownBloodVfx(toggle: boolean);
        static drawDebugLineWithTwoColours(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r1: number, g1: number, b1: number, r2: number, g2: number, b2: number, alpha1: number, alpha2: number);
        static setParticleFxLoopedRange(ptfxHandle: number, range: number);
        static removeParticleFxInRange(X: number, Y: number, Z: number, radius: number);
        static startParticleFxLoopedOnEntityBone2(effectName: string, entity: mp.game.entity | object, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;
        static hasHudScaleformLoaded(hudComponent: number): boolean;
        static requestStreamedTextureDict(textureDict: string, p1: boolean);
        static setFrozenRenderingDisabled(enabled: boolean);
        static startParticleFxLoopedAtCoord(effectName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, p11: boolean): number;
        static sittingTv(scaleform: number): string;
        static setNoiseoveride(toggle: boolean);
        static drawSprite(textureDict: string, textureName: string, screenX: number, screenY: number, scaleX: number, scaleY: number, heading: number, colorR: number, colorG: number, colorB: number, alpha: number);
        static setPtfxAssetOldToNew(oldAsset: string, newAsset: string);
        static releaseMovieMeshSet(movieMeshSet: number);
        static removeDecal(decal: number);
        static setParticleFxCamInsideVehicle(p0: boolean);
        static callScaleformMovieFunctionMixedParams(scaleform: number, functionName: string, floatParam1: number, floatParam2: number, floatParam3: number, floatParam4: number, floatParam5: number, stringParam1: string, stringParam2: string, stringParam3: string, stringParam4: string, stringParam5: string);
        static transitionFromBlurred(transitionTime: number): boolean;
        static getScreenAspectRatio(b: boolean): number;
        static startParticleFxLoopedOnPedBone(effectName: string, ped: mp.game.ped | object, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;
        static drawLightWithRange(posX: number, posY: number, posZ: number, colorR: number, colorG: number, colorB: number, range: number, intensity: number);
        static drawLightWithRangeAndShadow(x: number, y: number, z: number, r: number, g: number, b: number, range: number, intensity: number, shadow: number);
        static startParticleFxNonLoopedAtCoord2(effectName: string, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): boolean;
        static pushScaleformMovieFunction(scaleform: number, functionName: string): boolean;
        static setParticleFxLoopedOffsets(ptfxHandle: number, x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number);
        static callScaleformMovieMethod(scaleform: number, method: string);
        static drawTvChannel(xPos: number, yPos: number, xScale: number, yScale: number, rotation: number, r: number, g: number, b: number, alpha: number);
    }
}

declare module mp.game.graphics {
    class Point {
        x: number;
        y: number;
    }
    class Size extends Point {

    }
    enum checkpointTypes {
        cylinder1Arrow = 0,
        cylinder2Arrow = 1,
        cylinder3Arrow = 2,
        cylinderCycleArrow = 3,
        cylinderChecker = 4,
        cylinder1Arrow2 = 5,
        cylinder2Arrow2 = 6,
        cylinder3Arrow2 = 7,
        cylinderCycleArrow2 = 8,
        cylinderChecker2 = 9,
        ring1Arrow = 10,
        ring2Arrow = 11,
        ring3Arrow = 12,
        ringCycleArrow = 13,
        ringChecker = 14,
        arrow1 = 15,
        arrow2 = 16,
        arrow3 = 17,
        CycleArrow = 18,
        Checker = 19,
        cylinder1Arrow3 = 20,
        cylinder2Arrow3 = 21,
        cylinder3Arrow3 = 22,
        cylinderCycleArrow3 = 23,
        cylinderChecker3 = 24,
        cylinder1Arrow4 = 25,
        cylinder2Arrow4 = 26,
        cylinder3Arrow4 = 27,
        cylinderCycleArrow4 = 28,
        cylinderChecker4 = 29,
        cylinder1Arrow5 = 30,
        cylinder2Arrow5 = 31,
        cylinder3Arrow5 = 32,
        cylinderCycleArrow5 = 33,
        cylinderChecker5 = 34,
        ringAirplaneUp = 35,
        ringAirplaneLeft = 36,
        ringAirplaneRight = 37,
        ringAirplaneUpsideDown = 38,
        unknown = 39,
        ringRing = 40,
        unknown1 = 41,
        cylinderWithNumber1 = 42,
        cylinderWithNumber2 = 43,
        cylinderWithNumber3 = 44,
        cylinderEmpty1 = 45,
        cylinderEmpty2 = 46,
        cylinderEmpty3 = 47
    }
    enum reservedSets {
        number0 = 0,
        number1 = 1,
        number2 = 2,
        number3 = 3,
        number4 = 4,
        number5 = 5,
        number6 = 6,
        number7 = 7,
        number8 = 8,
        number9 = 9,
        number10 = 10,
        number11 = 11,
        number12 = 12,
        number13 = 13,
        number14 = 14,
        number15 = 15,
        number16 = 16,
        number17 = 17,
        number18 = 18,
        number19 = 19,
        number20 = 20,
        number21 = 21,
        number22 = 22,
        number23 = 23,
        number24 = 24,
        number25 = 25,
        number26 = 26,
        number27 = 27,
        number28 = 28,
        number29 = 29,
        number30 = 30,
        number31 = 31,
        number32 = 32,
        number33 = 33,
        number34 = 34,
        number35 = 35,
        number36 = 36,
        number37 = 37,
        number38 = 38,
        number39 = 39,
        number40 = 40,
        number41 = 41,
        number42 = 42,
        number43 = 43,
        number44 = 44,
        number45 = 45,
        number46 = 46,
        number47 = 47,
        number48 = 48,
        number49 = 49,
        number50 = 50,
        number51 = 51,
        number52 = 52,
        number53 = 53,
        number54 = 54,
        number55 = 55,
        number56 = 56,
        number57 = 57,
        number58 = 58,
        number59 = 59,
        number60 = 60,
        number61 = 61,
        number62 = 62,
        number63 = 63,
        number64 = 64,
        number65 = 65,
        number66 = 66,
        number67 = 67,
        number68 = 68,
        number69 = 69,
        number70 = 70,
        number71 = 71,
        number72 = 72,
        number73 = 73,
        number74 = 74,
        number75 = 75,
        number76 = 76,
        number77 = 77,
        number78 = 78,
        number79 = 79,
        number80 = 80,
        number81 = 81,
        number82 = 82,
        number83 = 83,
        number84 = 84,
        number85 = 85,
        number86 = 86,
        number87 = 87,
        number88 = 88,
        number89 = 89,
        number90 = 90,
        number91 = 91,
        number92 = 92,
        number93 = 93,
        number94 = 94,
        number95 = 95,
        number96 = 96,
        number97 = 97,
        number98 = 98,
        number99 = 99,
        arrow0 = 100,
        arrow1 = 101,
        arrow2 = 102,
        arrow3 = 103,
        arrow4 = 104,
        arrow5 = 105,
        arrow6 = 106,
        arrow7 = 107,
        arrow8 = 108,
        arrow9 = 109,
        twoArrows0 = 110,
        twoArrows1 = 111,
        twoArrows2 = 112,
        twoArrows3 = 113,
        twoArrows4 = 114,
        twoArrows5 = 115,
        twoArrows6 = 116,
        twoArrows7 = 117,
        twoArrows8 = 118,
        twoArrows9 = 119,
        threeArrows0 = 120,
        threeArrows1 = 121,
        threeArrows2 = 122,
        threeArrows3 = 123,
        threeArrows4 = 124,
        threeArrows5 = 125,
        threeArrows6 = 126,
        threeArrows7 = 127,
        threeArrows8 = 128,
        threeArrows9 = 129,
        circle0 = 130,
        circle1 = 131,
        circle2 = 132,
        circle3 = 133,
        circle4 = 134,
        circle5 = 135,
        circle6 = 136,
        circle7 = 137,
        circle8 = 138,
        circle9 = 139,
        cycleArrow0 = 140,
        cycleArrow1 = 141,
        cycleArrow2 = 142,
        cycleArrow3 = 143,
        cycleArrow4 = 144,
        cycleArrow5 = 145,
        cycleArrow6 = 146,
        cycleArrow7 = 147,
        cycleArrow8 = 148,
        cycleArrow9 = 149,
        circle10 = 150,
        circle11 = 151,
        circle12 = 152,
        circle13 = 153,
        circle14 = 154,
        circle15 = 155,
        circle16 = 156,
        circle17 = 157,
        circle18 = 158,
        circle19 = 159,
        circleWithPointer0 = 160,
        circleWithPointer1 = 161,
        circleWithPointer2 = 162,
        circleWithPointer3 = 163,
        circleWithPointer4 = 164,
        circleWithPointer5 = 165,
        circleWithPointer6 = 166,
        circleWithPointer7 = 167,
        circleWithPointer8 = 168,
        circleWithPointer9 = 169,
        perforatedRing0 = 170,
        perforatedRing1 = 171,
        perforatedRing2 = 172,
        perforatedRing3 = 173,
        perforatedRing4 = 174,
        perforatedRing5 = 175,
        perforatedRing6 = 176,
        perforatedRing7 = 177,
        perforatedRing8 = 178,
        perforatedRing9 = 179,
        sphere0 = 180,
        sphere1 = 181,
        sphere2 = 182,
        sphere3 = 183,
        sphere4 = 184,
        sphere5 = 185,
        sphere6 = 186,
        sphere7 = 187,
        sphere8 = 188,
        sphere9 = 189
    }
    enum decalTypes {
        splatters_blood = 1010,
        splatters_blood_dir = 1015,
        splatters_blood_mist = 1017,
        splatters_mud = 1020,
        splatters_paint = 1030,
        splatters_water = 1040,
        splatters_water_hydrant = 1050,
        splatters_blood2 = 1110,
        weapImpact_metal = 4010,
        weapImpact_concrete = 4020,
        weapImpact_mattress = 4030,
        weapImpact_mud = 4032,
        weapImpact_wood = 4050,
        weapImpact_sand = 4053,
        weapImpact_cardboard = 4040,
        weapImpact_melee_glass = 4100,
        weapImpact_glass_blood = 4102,
        weapImpact_glass_blood2 = 4104,
        weapImpact_shotgun_paper = 4200,
        weapImpact_shotgun_mattress,
        weapImpact_shotgun_metal,
        weapImpact_shotgun_wood,
        weapImpact_shotgun_dirt,
        weapImpact_shotgun_tvscreen,
        weapImpact_shotgun_tvscreen2,
        weapImpact_shotgun_tvscreen3,
        weapImpact_melee_concrete = 4310,
        weapImpact_melee_wood = 4312,
        weapImpact_melee_metal = 4314,
        burn1 = 4421,
        burn2,
        burn3,
        burn4,
        burn5,
        bang_concrete_bang = 5000,
        bang_concrete_bang2,
        bang_bullet_bang,
        bang_bullet_bang2 = 5004,
        bang_glass = 5031,
        bang_glass2,
        solidPool_water = 9000,
        solidPool_blood,
        solidPool_oil,
        solidPool_petrol,
        solidPool_mud,
        porousPool_water,
        porousPool_blood,
        porousPool_oil,
        porousPool_petrol,
        porousPool_mud,
        porousPool_water_ped_drip,
        liquidTrail_water = 9050
    }
    enum markerTypes {
        MarkerTypeUpsideDownCone = 0,
        MarkerTypeVerticalCylinder = 1,
        MarkerTypeThickChevronUp = 2,
        MarkerTypeThinChevronUp = 3,
        MarkerTypeCheckeredFlagRect = 4,
        MarkerTypeCheckeredFlagCircle = 5,
        MarkerTypeVerticleCircle = 6,
        MarkerTypePlaneModel = 7,
        MarkerTypeLostMCDark = 8,
        MarkerTypeLostMCLight = 9,
        MarkerTypeNumber0 = 10,
        MarkerTypeNumber1 = 11,
        MarkerTypeNumber2 = 12,
        MarkerTypeNumber3 = 13,
        MarkerTypeNumber4 = 14,
        MarkerTypeNumber5 = 15,
        MarkerTypeNumber6 = 16,
        MarkerTypeNumber7 = 17,
        MarkerTypeNumber8 = 18,
        MarkerTypeNumber9 = 19,
        MarkerTypeChevronUpx1 = 20,
        MarkerTypeChevronUpx2 = 21,
        MarkerTypeChevronUpx3 = 22,
        MarkerTypeHorizontalCircleFat = 23,
        MarkerTypeReplayIcon = 24,
        MarkerTypeHorizontalCircleSkinny = 25,
        MarkerTypeHorizontalCircleSkinny_Arrow = 26,
        MarkerTypeHorizontalSplitArrowCircle = 27,
        MarkerTypeDebugSphere = 28,
        MarkerTypeDallorSign = 29,
        MarkerTypeHorizontalBars = 30,
        MarkerTypeWolfHead = 31
    }
    enum hudComponents {
        hud = 0,
        hudWantedStars = 1,
        hudWeaponIcon = 2,
        hudCash = 3,
        hudMpCash = 4,
        hudMpMessage = 5,
        hudVehicleName = 6,
        hudAreaName = 7,
        hudVehicleClass = 8,
        hudStreetName = 9,
        hudHelpText = 10,
        hudFloatingHelpText1 = 11,
        hudFloatingHelpText2 = 12,
        hudCashChange = 13,
        hudReticle = 14,
        hudSubtitleText = 15,
        hudRadioStations = 16,
        hudSavingGame = 17,
        hudGameStream = 18,
        hudWeaponWheel = 19,
        hudWeaponWheelStats = 20,
        maxHudcomponents = 21,
        maxHudWeapons = 22
    }
}