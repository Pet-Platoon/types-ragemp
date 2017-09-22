/// <reference path="../index.d.ts" />

declare module mp.game {
    class cam extends mp.game.entity {
        static isCamSplinePaused(p0: object): boolean;
        static renderScriptCams(render: boolean, ease: boolean, easeTime: number, p3: boolean, p4: boolean);
        static stopGameplayCamShaking(p0: boolean);
        static setGameplayCamRawYaw(yaw: number);
        static setCamSplineDuration(cam: number, timeDuration: number);
        static setGameplayEntityHint(p0: object, p1: number, p2: number, p3: number, p4: boolean, p5: object, p6: object, p7: object, p8: object);
        static setFollowVehicleCamZoomLevel(zoomLevel: number);
        static stopCinematicCamShaking(p0: boolean);
        static setCamSplinePhase(cam: number, p1: number);
        static setGameplayPedHint(p0: mp.game.ped, x1: number, y1: number, z1: number, p4: boolean, p5: object, p6: object, p7: object);
        static overrideCamSplineVelocity(cam: number, p1: number, p2: number, p3: number);
        static setFollowPedCamCutsceneChat(p0: string, p1: number);
        static setGameplayHintFov(fov: number);
        static setCinematicButtonActive(p0: boolean);
        static setFollowPedCamViewMode(viewMode: number);
        static setFollowPedCamViewMode(viewMode: mp.game.cam.view);
        static getGameplayCamRot(p0: number): mp.Vector3;
        static createCamera(camHash: number, p1: boolean): mp.game.cam;
        static createCamera(camHash: mp.game.cam.name, p1: boolean): mp.game.cam;
        static createCameraWithParams(camHash: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, p8: boolean, p9: object): mp.game.cam;
        static createCameraWithParams(camHash: mp.game.cam.name, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, p8: boolean, p9: object): mp.game.cam;
        static setGameplayCamRelativePitch(x: number, p1: number);
        static createCinematicShot(p0: object, p1: number, p2: object, entity: object);
        static createCinematicShot(p0: object, p1: number, p2: object, entity: mp.game.entity);
        static setGameplayCamRawPitch(pitch: number);
        static stopCinematicShot(p0: object);
        static overrideCamSplineMotionBlur(p0: object, p1: object, p2: number, p3: number);
        static setCamEffect(p0: number);
        static getGameplayCamRot(p0: number): mp.Vector3;
        static setGameplayObjectHint(p0: object, p1: number, p2: number, p3: number, p4: boolean, p5: object, p6: object, p7: object);
        static addCamSplineNode(camera: number, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, length: number, p8: number, p9: number);
        static doScreenFadeOut(duration: number);
        static destroyAllCams(destroy: boolean);
        static clampGameplayCamYaw(minimum: number, maximum: number);
        static setTimeIdleDrop(p0: boolean, p1: boolean);
        static setGameplayVehicleHint(p0: object, p1: number, p2: number, p3: number, p4: boolean, p5: object, p6: object, p7: object);
        static clampGameplayCamPitch(minimum: number, maximum: number);
        static setGameplayCamShakeAmplitude(amplitude: number);
        static setFollowVehicleCamViewMode(viewMode: number);
        static setFollowVehicleCamViewMode(viewMode: mp.game.cam.view);
        static getCamSplineNodeIndex(cam: number): boolean;
        static setGameplayCamRelativeHeading(heading: number);
        static createCamWithParams(camName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, p8: boolean, p9: object): mp.game.cam;
        static createCamWithParams(camName: mp.game.cam.name, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, p8: boolean, p9: object): mp.game.cam;
        static createCam(camName: string, p1: boolean): mp.game.cam;
        static createCam(camName: mp.game.cam.name, p1: boolean): mp.game.cam;
        static setCinematicCamShakeAmplitude(p0: number);
        static isCinematicShotActive(p0: object): boolean;
        static doScreenFadeIn(duration: number);
        static setGameplayCoordHint(p0: number, p1: number, p2: number, p3: object, p4: object, p5: object, p6: object);
        static getCamSplineNodePhase(p0: object): number;
        static setWidescreenBorders(p0: boolean, p1: number);
        static shakeCinematicCam(p0: string, p1: number);
        static shakeCinematicCam(p0: mp.game.cam.shake, p1: number);
        static setCinematicModeActive(p0: boolean);
        static animateGameplayCamZoom(p0: number, distance: number);
        static playSynchronizedCamAnim(p0: object, p1: object, animName: string, animDictionary: string): boolean;
        static isSphereVisible(x: number, y: number, z: number, radius: number): boolean;
        static getIsMultiplayerBrief(p0: boolean);
        static stopGameplayHint(p0: boolean);
        static shakeGameplayGam(shakeName: string, intensity: number);
        static shakeGameplayGam(shakeName: mp.game.cam.shake, intensity: number);

        getDirection(): mp.Vector3;
        setActive(active: boolean);
        isRendering(): boolean;
        isInterpolating(): boolean;
        setUseShallowDofMode(toggle: boolean);
        setDebugName(name: string);
        getFarDof(): number;
        setDofMaxNearInFocuxDistanceBlendLevel(p0: number);
        setDofPlanes(p0: number, p1: number, p2: number, p3: number);
        setNearDof(nearDof: number);
        setAnimCurrentPhase(phase: number);
        setInheritRollVehicle(p1: boolean);
        setCoord(posX: number, posY: number, posZ: number);
        pointAt(entity: mp.game.entity, offsetX: number, offsetY: number, offsetZ: number, p4: boolean);
        setDofStrength(dofStrength: number);
        attachToPedBone(ped, boneIndex: number, x: number, y: number, z: number, heading: boolean);
        pointAtPedBone(ped, boneIndex: number, x: number, y: number, z: number, heading: boolean);
        shake(type: string, amplitude: number);
        shake(type: mp.game.cam.shake, amplitude: number);
        isShaking(): boolean;
        setMotionBlurStrength(strength: number);
        getRot(p0: object): mp.Vector3;
        setDofFnumberOfLens(p1: number);
        setRot(rotX: number, rotY: number, rotZ: number, p3: number);
        destroy();
        destroy(destroy: boolean);
        setAffectsAiming(toggle: boolean);
        playAnim(animName: string, animDictionary: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p8: object, p9: number);
        setActiveWithInterp(camFrom: mp.game.cam, duration: number, easeLocation: number, easeRotation: number);
        getAnimCurrentPhase(): number;
        animatedShake(p0: string, p1: string, p2: string, p3: number);
        detach();
        doesExist(): boolean;
        setFarClip(farClip: number);
        setFov(fieldOfView: number);
        getSplinePhase(): number;
        getFarClip(): number;
        getCoord(): mp.Vector3;
        stopShaking(p0: boolean);
        setParams(x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, duration: number, p8: object, p9: object, p10: object);
        getFov(): number;
        setDofMaxNearInFocusDistance(p0: number);
        getNearClip(): number;
        setDofFocusDistanceBias(p0: number);
        setNearClip(nearClip: number);
        isPlayingAnim(animName: string, animDictionary: string): boolean;
        setShakeAmplitude(amplitude: number);
        isActive(): boolean;
        setFarDof(farDof: number);
        stopPointing();
        pointAtCoord(x: number, y: number, z: number);
        attachTo(entity: object, xOffset: number, yOffset: number, zOffset: number, isRelative: boolean);
        attachTo(entity: mp.game.entity, xOffset: number, yOffset: number, zOffset: number, isRelative: boolean);
    }
}

declare module mp.game.cam {
    enum name {
        defaultScriptedCamera = 'DEFAULT_SCRIPTED_CAMERA',
        defaultAnimatedCamera = 'DEFAULT_ANIMATED_CAMERA',
        defaultSplineCamera = 'DEFAULT_SPLINE_CAMERA',
        defaultScriptedFlyCamera = 'DEFAULT_SCRIPTED_FLY_CAMERA',
        timedSplinedCamera = 'TIMED_SPLINE_CAMERA'
    }

    enum shake {
        deathFailInEffectShake = 'DEATH_FAIL_IN_EFFECT_SHAKE',
        drunkShake = 'DRUNK_SHAKE',
        family5DrugTripShake = 'FAMILY5_DRUG_TRIP_SHAKE',
        handShake = 'HAND_SHAKE',
        joltShake = 'JOLT_SHAKE',
        largeExplosionShake = 'LARGE_EXPLOSION_SHAKE',
        mediumExplosionShake = 'MEDIUM_EXPLOSION_SHAKE',
        smallExplosionShake = 'SMALL_EXPLOSION_SHAKE',
        roadVibrationShake = 'ROAD_VIBRATION_SHAKE',
        skyDivingShake = 'SKY_DIVING_SHAKE',
        vibrateShake = 'VIBRATE_SHAKE'
    }

    enum view {
        thirdPersonClose = 0,
        thirdPersonMid = 1,
        thirdPersonFar = 2,
        firstPerson = 3
    }
}