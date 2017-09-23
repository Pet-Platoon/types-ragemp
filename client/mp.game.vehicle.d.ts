/// <reference path="../index.d.ts" />

declare module mp.game {
    class vehicle extends mp.game.entity {
        static getRandomVehicleModelInMemory(p0: boolean, modelHash: number, p2: number): mp.game.vehicle.randomVehicleModel;
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

        gear: number;
        steeringAngle: number;
        rpm: number;

        removeHighDetailModel();
        setCreatesMoneyPickupsWhenExploded(toggle: boolean);
        steerUnlockBias(toggle: boolean);
        getTrainCarriage(cariage: number): mp.game.entity | object;
        setRudderBroken(p0: boolean);
        detachFromCargobob(cargobob: mp.game.vehicle | object);
        getWindowTint(): mp.game.vehicle.windowTint | number;
        setFixed();
        areAllWindowsIntact(): boolean;
        doesExtraExist(extraId: number): boolean;
        isInBurnout(): boolean;
        isAttachedToTowTruck(vehicle: mp.game.vehicle | object): boolean;
        setSearchlight(toggle: boolean, canBeUsedByAI: boolean);
        setTrainCruiseSpeed(speed: number);
        isCargobobHookActive(): boolean;
        setFrictionOverride(friction: number);
        getVehicleTrailer(vehicle: mp.game.vehicle): mp.game.vehicle;
        getTrailer(vehicle: mp.game.vehicle): mp.game.vehicle;
        isHighDetail(): boolean;
        setModKit(modKit: number);
        setExtraColours(pearlescentColor: number, wheelColor: number);
        getPedUsingDoor(doorIndex: mp.game.vehicle.doorIndex | number): mp.game.ped | object;
        resetWheels(toggle: boolean);
        setReduceGrip(toggle: boolean);
        isSeatFree(seatIndex: number): boolean;
        disablePlaneAileron(p0: boolean, p1: boolean);
        setEngineOn(value: boolean, instantly: boolean, otherwise: boolean);
        getNumberOfPassengers(): number;
        getDoorLockStatus(): number;
        doesHaveWeapon(): boolean;
        setHalt(distance: number, killEngine: boolean, unknown: boolean);
        getBoatAnchor(): boolean;
        getLayoutHash(): string | number;
        getClass(): mp.game.vehicle.vehicleClass | number;
        isStoppedAtTrafficLights(): boolean;
        attachToTowTruck(vehicle: mp.game.vehicle | object, rear: boolean, hookOffsetX: number, hookOffsetY: number, hookOffsetZ: number);
        setWheelsCanBreak(enabled: boolean);
        toggleMod(modType: number, toggle: boolean);
        setNeonLightEnabled(index: mp.game.vehicle.neonIndex | number, toggle: boolean);
        setHasBeenOwnedByPlayer(owned: boolean);
        getLivery(): number;
        isAnySeatEmpty(): boolean;
        setTimedExplosion(ped: mp.game.ped | object, toggle: boolean);
        setDoorBreakable(doorIndex: mp.game.vehicle.doorIndex | number, isBreakable: boolean);
        setCanBeUsedByFleeingPeds(toggle: boolean);
        canShuffleSeat(p0: object): boolean;
        setRenderTrainAsDerailed(toggle: boolean);
        setIsConsideredByPlayer(toggle: boolean);
        setColourCombination(numCombos: number);
        getNumModKits(): number;
        setLights(state: number);
        closeBombBayDoors();
        setCustomSecondaryColour(r: number, g: number, b: number);
        setCanBeTargetted(state: boolean);
        setDisablePetrolTankDamage(toggle: boolean);
        setPaintFade(fade: number);
        getNumberOfColours(): number;
        getExtraColours(pearlescentColor: number, wheelColor: number): mp.game.vehicle.extraColours;
        attachToTrailer(trailer: mp.game.vehicle, radius: number);
        setStrong(toggle: boolean);
        wasCounterActivated(p0: object): boolean;
        attachToCargobob(cargobob: mp.game.vehicle | object, p1: number, x: number, y: number, z: number);
        isModel(model: string | number): boolean;
        setSteerBias(value: number);
        isAlarmActivated(): boolean;
        setModColor1(paintType: mp.game.vehicle.paintType | number, color: number, p2: number);
        releasePreloadMods();
        setEngineHealth(health: number);
        setDisablePetrolTankFires(toggle: boolean);
        isBumberBrokenOff(front: boolean): boolean;
        isWindowIntact(windowIndex: number): boolean;
        setWheelType(wheelType: mp.game.vehicle.wheelType | number);
        getModColor2TextLabel(): string;
        setOnGroundProperly(): boolean;
        isStolen(): boolean;
        isDriveable(p0: boolean): boolean;
        setCanBeVisiblyDamaged(state: boolean);
        isSirenOn(): boolean;
        getDeformationAtPos(offsetX: number, offsetY: number, offsetZ: number): mp.Vector3;
        setColours(colorPrimary: number, colorSecondary: number);
        setDoorsLockedForPlayer(player: mp.game.player, toggle: boolean);
        getModSlotName(modType: number): string;
        setCanRespray(state: boolean);
        isAConvertible(p0: boolean): boolean;
        getSuspensionHeight(): number;
        clearCustomPrimaryColour();
        isStopped(): boolean;
        setPedEnabledBikeRingtone(p0: object): boolean;
        setWindowTint(tint: mp.game.vehicle.windowTint | number);
        doesHaveStuckVehicleCheck(): boolean;
        setMissionTrainCoords(x: number, y: number, z: number);
        setTaxiLight(state: boolean);
        setCanBreak(toggle: boolean);
        setProvidesCover(toggle: boolean);
        setAllowNoPassengersLockon(toggle: boolean);
        getAcceleration(): number;
        getIsLeftHeadlightDamaged(): boolean;
        clearCustomSecondaryColour();
        rollUpWindow(windowIndex: mp.game.vehicle.windowIndex | number);
        setLivery(livery: number);
        getModKit(): number;
        trackVisibility();
        getTyresCanBurst(): boolean;
        isStuckTimerUp(p0: number, p1: number): boolean;
        setIsStolen(isStolen: boolean);
        setHandbrake(toggle: boolean);
        getColourCombination(): number;
        setMod(modType: mp.game.vehicle.modType | number, modIndex: number, customTires: boolean);
        detachWindscreen();
        setHelicopterRollPitchYawMult(multiplier: number);
        isCargobobMagnetActive(): boolean;
        setTyreFixed(tyreIndex: mp.game.vehicle.tyreIndex | number);
        setPetrolTankHealth(fix: number);
        setCustomPrimaryColour(r: number, g: number, b: number);
        setExplodesOnHighExplosionDamage(toggle: boolean);
        isTaxiLightOn(): boolean;
        setBoatAnchor(toggle: boolean);
        getNeonLightsColour(r: number, g: number, b: number): mp.game.vehicle.rgbColour;
        fixWindow(index: mp.game.vehicle.windowIndex | number);
        getMod(modType: mp.game.vehicle.modType | number): number;
        setDoorsShut(closeInstantly: boolean);
        explodeInCutscene(p0: boolean);
        setDirtLevel(dirtLevel: number);
        rollDownWindow(windowIndex: mp.game.vehicle.windowIndex | number);
        enableCargobobHook(state: mp.game.vehicle.cargobobHookState | number);
        setDoorOpen(doorIndex: mp.game.vehicle.doorIndex | number, loose: boolean, openInstantly: boolean);
        getNumberPlateText(): string;
        getPetrolTankHealth(): number;
        setExtra(extraId: number, toggle: boolean);
        getModColor2(paintType: mp.game.vehicle.paintType | number, color: number): mp.game.vehicle.modColor;
        setModColor2(paintType: mp.game.vehicle.paintType | number, color: number);
        getCustomSecondaryColour(r: number, g: number, b: number): mp.game.vehicle.rgbColour;
        getLastPedInSeat(seatIndex: number): mp.game.ped | object;
        isToggleModOn(modType: mp.game.vehicle.modType | number): boolean;
        rollDownWindows();
        getAttachedToCargobob(): mp.game.vehicle | object;
        getLiveryCount(): number;
        openBombBayDoors();
        getModTextLabel(modType: mp.game.vehicle.modType | number, modValue: number): string;
        setGravity(toggle: boolean);
        setUndriveable(toggle: boolean);
        doesHaveRoof(): boolean;
        setFullbeam(toggle: boolean);
        setAutomaticallyAttaches(p0: object, p1: object);
        isNeaonLightEnabled(index: mp.game.vehicle.neonIndex | number): boolean;
        setNeonLightsColour(r: number, g: number, b: number);
        getDirtLevel(): number;
        getOwner(entity: mp.game.entity | object): boolean;
        raiseConvertibleRoof(instantlyRaise: boolean);
        detachFromTrailer();
        setNumberPlateTextIndex(plateIndex: mp.game.vehicle.numberPlateTextIndex | number);
        getModModifierValue(modType: mp.game.vehicle.modType | number, modIndex: number);
        getIsSecondaryColourCustom(): boolean;
        setBreakLights(toggle: boolean);
        removeMod(modType: mp.game.vehicle.modType | number);
        setHasStrongAxles(toggle: boolean);
        setEnginePowerMultiplier(value: number);
        setLodMultiplier(multiplier: number);
        setDoorShut(doorIndex: mp.game.vehicle.doorIndex | number, closeInstantly: boolean);
        setDeformationFixed();
        setNumberPlateText(plateText: string);
        retractCargobobHook();
        setEngineCanDegrade(toggle: boolean);
        cargobobMagnetGrab(toggle: boolean);
        getLandingGearState(): mp.game.vehicle.landingGearState;
        startHorn(duration: number, model: mp.game.vehicle.hornMode | string | number, forever: boolean);
        getPlateType(): mp.game.vehicle.numberPlateTextIndex | number;
        setBikeLeanAngle(x: number, y: number);
        setSilent(toggle: boolean);
        smashWindow(index: mp.game.vehicle.windowIndex | number);
        isBig(): boolean;
        getMaxTraction(): number;
        setHeliBladesFullSpeed();
        getColours(colorPrimary: number, colorSecondary: number): mp.game.vehicle.colour;
        setDamage(xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number, p5: boolean);
        setDoorsLockedForAllPlayers(toggle: boolean);
        setWheelsCanBreakOffWhenBlowUp(toggle: boolean);
        setCeilingHeight(p0: number);
        setPlaybackToUseAi(flag: number);
        setDoorLatched(doorIndex: mp.game.vehicle.doorIndex | number, p1: boolean, p2: boolean, p3: boolean);
        requestHighDetailModel();
        removeWindow(windowIndex: mp.game.vehicle.windowIndex | number);
        getMaxNumberOfPassengers(): number;
        getIsRightHeadlightDamaged(): boolean;
        getPaintFade(): number;
        isVisible(): boolean;
        setTrainSpeed(speed: number);
        setForwardSpeed(speed: number);
        getHeliEngineHealth(): number;
        getMaxBreaking(): number;
        detachFromAnyCargobob(): boolean;
        getIsEngineRunning(): boolean;
        getHeliTailRotorHealth(): number;
        isOnAllWheels(): boolean;
        setLightMultiplier(multiplier: number);
        getModVariation(modType: mp.game.vehicle.modType | number): boolean;
        getWheelType(): mp.game.vehicle.wheelType | number;
        getModColor1TextLabel(p0: boolean): string;
        isStuckOnRoof(): boolean;
        getLiveryName(liveryIndex: number): string;
        setEngineTorqueMultiplier(value: number);
        setTyreSmokeColor(r: number, g: number, b: number);
        setExclusiveDriver(ped: mp.game.ped | object, p1: number);
        isSirenSoundOn(): boolean;
        setIndicatorLights(turnSignal: mp.game.vehicle.turnSignal | number, toggle: boolean);
        getTyreSmokeColor(r: number, g: number, b: number): mp.game.vehicle.rgbColour;
        getCustomPrimaryColour(r: number, g: number, b: number): mp.game.vehicle.rgbColour;
        setDoorsLocked(doorLockStatus: mp.game.vehicle.doorLockStatus | number);
        addUpsidedownCheck();
        setBodyHealth(value: number);
        setDoorsLockedForTeam(team: number, toggle: boolean);
        setPlaneMinHeightAboveGround(height: number);
        isDoorDamaged(doorId: mp.game.vehicle.doorIndex | number): boolean;
        getBodyHealth2(): number;
        setJetEngineOn(toggle: boolean);
        startAlarm();
        getLightsState(lightsOn: boolean, highbeamsOn: boolean): mp.game.vehicle.lightsState;
        isTyreBurst(wheelId: mp.game.vehicle.tyreIndex | number, completely: boolean): boolean;
        explode(isAudible: boolean, isInvisble: boolean);
        getPedInSeat(index: number): mp.game.ped | object;
        setInteriorLight(toggle: boolean);
        isHeliPartBroken(p0: boolean, p1: boolean, p2: boolean): boolean;
        isDamaged(): boolean;
        setPlayersLast();
        setPedTargettableDestory(vehicleComponent: number, destroyType: number);
        setNameDebug(name: string);
        isSearchlightOn(): boolean;
        detachFromTowTruck(vehicle: mp.game.vehicle | object);
        getEngineHealth(): number;
        removeUpsidedownCheck();
        jitter(p0: boolean, yaw: number, pitch: number, roll: number);
        getCargobobHookPosition(): mp.Vector3;
        setAlarm(state: boolean);
        setLandingGear(state: mp.game.vehicle.landingGearState | number);
        detachFromAnyTowTruck(): boolean;
        isExtraTurnedOn(extraId: number): boolean;
        isAttachedToCargobob(vehicleAttached: mp.game.vehicle | object): boolean;
        setDoorBroken(doorIndex: mp.game.vehicle.doorIndex | number, createDoorObject: boolean);
        resetStuckTimer(reset: boolean);
        disableImpactExplosionActivation(toggle: boolean);
        lowerConvertibleRoof(instantlyLower: boolean);
        setAllsSpawns(p0: boolean, p1: boolean, p2: boolean);
        ejectJb700Roof(x: number, y: number, z: number);
        getNumMods(modType: mp.game.vehicle.modType | number): number;
        getCauseOfDestruction(): string | number;
        getHeliMainRotorHealth(): number;
        isAttachedToTrailer(): boolean;
        getModColor1(paintType: mp.game.vehicle.paintType | number, color: number, p2: number): mp.game.vehicle.modColor;
        setTyresCanBurst(toggle: boolean);
        setTyreBurst(tyreIndex: mp.game.vehicle.tyreIndex | number, onRim: boolean, p2: number);
        getAttachedToTowTruck(): mp.game.entity | object;
        getIsPrimaryColourCustom(): boolean;
        getNumberPlateTextIndex(): mp.game.vehicle.numberPlateTextIndex;
        setOutOfControl(killDriver: boolean, explodeOnImpact: boolean);
        getBodyHealth(): number;
        setDoorControl(doorIndex: mp.game.vehicle.doorIndex, speed: number, angle: number);
        setConvertibleRoof(p0: boolean);
        getColor(r: number, g: number, b: number): mp.game.vehicle.rgbColour;
        setSiren(toggle: boolean);
        getDoorsLockedForPlayer(player: mp.game.player): boolean;
        setIsWanted(state: boolean);
        getConvertibleRoofState(): mp.game.vehicle.convertibleRoofState;
        setBurnout(toggle: boolean);
        setNeedsToBeHotwired(toggle: boolean);
        getModKitType(): number;
        setHeliBladeSpeed(speed: number);
        getDoorAngleRatio(door: mp.game.vehicle.doorIndex | number): number;
        setTowTruckCraneHeight(height: number);
    }
}
declare module mp.game.vehicle {
    enum convertibleRoofState {
        up = 0,
        loweringDown = 1,
        down = 2,
        raisingUp = 3
    }

    class lightsState {
        lightsOn: boolean;
        highbeamsOn: boolean;
    }

    enum doorLockStatus {
        none = 0,
        unlocked = 1,
        locked = 2,
        lockoutPlayerOnly = 3,
        lockedPlayerInside = 4,
        lockedInitially = 5,
        forceShutDoors = 6,
        lockedButCanSeeDamaged = 7
    }

    enum turnSignal {
        right = 0,
        left = 1
    }

    class colour {
        colorPrimary: number;
        colorSecondary: number;
    }

    enum hornMode {
        normal = 'NORMAL',
        heldDown = 'HELDDOWN'
    }

    enum landingGearState {
        deployed = 0,
        closing = 1,
        opening = 2,
        retracted = 3
    }

    enum numberPlateTextIndex {
        blueWhite = 0,
        yellowBlack = 1,
        yellowBlue = 2,
        blueWhite2 = 3,
        blueWhite3 = 4,
        yankton = 5
    }

    class modColor {
        paintType: mp.game.vehicle.paintType | number;
        color: number;
        p2: number;
    }

    enum cargobobHookState {
        hook = 0,
        magnet = 1
    }

    class rgbColour {
        r: number;
        g: number;
        b: number;
    }

    enum tyreIndex {
        leftFront = 0,
        rightFront = 1,
        leftMiddle = 2,
        rightMiddle = 3,
        leftRear = 4,
        rightRear = 5,
        trailerLeftMiddle = 45,
        trailerRIghtMiddle = 47
    }

    enum modType {
        spoiler = 0,
        frontBumber = 1,
        rearBumber = 2,
        sideSkirt = 3,
        exhaust = 4,
        frame = 5,
        grille = 6,
        hood = 7,
        fender = 8,
        rightFender = 9,
        roof = 10,
        engine = 11,
        brakes = 12,
        transmission = 13,
        horns = 14,
        suspension = 15,
        armor = 16,
        frontWheels = 23,
        backWheels = 24,
        plateHolders = 25,
        trimDesign = 27,
        ornaments = 28,
        dialDesign = 30,
        steeringWheel = 33,
        shifterLeavers = 34,
        plaques = 35,
        hydraulics = 38,
        livery = 48
    }

    enum windowIndex {
        frontRight = 0,
        frontLeft = 1,
        backRight = 2,
        backLeft = 3
    }
    enum windowTint {
        none = 0,
        pureBlack = 1,
        darkSmoke = 2,
        lightSmoke = 3,
        stock = 4,
        limo = 5,
        green = 6
    }

    enum wheelType {
        sport = 0,
        muscle = 1,
        lowrider = 2,
        suv = 3,
        offroad = 4,
        tuner = 5,
        bikeWheels = 6,
        highend = 7
    }

    enum paintType {
        normal = 0,
        metallic = 1,
        pearl = 2,
        matte = 3,
        metal = 4,
        chrome = 5
    }

    enum doorIndex {
        frontLeft = 0,
        fronRight = 1,
        backLeft = 2,
        backRight = 3,
        hood = 4,
        trunk = 5,
        trunk2 = 6
    }

    class extraColours {
        pearlescentColor: number;
        wheelColor: number;
    }

    enum neonIndex {
        left = 0,
        right = 1,
        front = 2,
        back = 3
    }

    enum vehicleClass {
        compact = 0,
        sedan = 1,
        suv = 2,
        coupe = 3,
        muscle = 4,
        sportClassic = 5,
        sport = 6,
        'super' = 7,
        motorcycles = 8,
        offroad = 9,
        industrial = 10,
        utility = 11,
        van = 12,
        cycle = 13,
        boat = 14,
        helicopter = 15,
        plane = 16,
        service = 17,
        emergency = 18,
        military = 19,
        commercial = 20,
        train = 21
    }

    class randomVehicleModel {
        modelHash: number;
        p2: number;
    }
}