/// <reference path="../index.d.ts" />

declare module mp.game {
    class player extends mp.game.entity {
        static setWantedLevelMultiplier(multiplier: number);
        static setAllRandomPedsFlee(toggle: boolean);
        static isSpecialAbilityMeterFull(): boolean;
        static getWantedLevelRadius(): boolean;
        static arePlayerStarsGreyedOut(): boolean;
        static getPlayerTargetEntity(entity: mp.game.entity | object): boolean;
        static setPlayerClothLockCounter(value: number);
        static enableSpecialAbility(toggle: boolean);
        static specialAbilityDepleteMeter(p1: boolean);
        static getEntityPlayerIsFreeAimingAt(entity: mp.game.entity | object): boolean;
        static specialAbilityChargeSmall(p1: boolean, p2: boolean);
        static setDisableAmbientMeleeMove(toggle: boolean);
        static specialAbilityReset();
        static isPlayerFreeAimingAtEntity(entity: mp.game.entity | object): boolean;
        static specialAbilityFillMeter(p1: boolean);
        static isSpecialAbilityActive(): boolean;
        static intToPlayerindex(value: number): mp.game.player | object;
        static setPoliceRadarBlips(toggle: boolean);
        static setAllRandomPedsFleeThisFrame();
        static simulatePlayerInputGait(amount: number,gaitType: number,speed: number,p4: boolean,p5: boolean);
        static forceCleanupForAllThreadsWithThisName(name: string, cleanupFlags: number);
        static setIgnoreLowPriorityShockingEvents(toggle: boolean);
        static getTimeSincePlayerHitVehicle(): number;
        static disablePlayerFiring(toggle: boolean);
        static specialAbilityLock(playerModel: number | string);
        static setRunSprintMultiplierForPlayer(multiplier: number);
        static isPlayerTargettingEntity(entity: mp.game.entity | object): boolean;
        static hasAchievementBeenPassed(achievement: number): boolean;
        static displaySystemSigninUi(unk: boolean);
        static reserveEntityExplodesOnHighExplosionCombo(p1: number);
        static setWantedLevelDifficulty(difficulty: number);
        static specialAbilityDeactivateFast();
        static intToParticipantindex(value: number): number;
        static setAutoGiveParachuteWhenEnterPlane(toggle: boolean);
        static setPlayerClothPackageIndex(index: number);
        static specialAbilityChargeNormalized(normalizedValue: number,p2: boolean);
        static restorePlayerStamina(p1: number);
        static setSpecialAbilityMultiplier(multiplier: number);
        static setSwimMultiplierForPlayer(multiplier: number);
        static setMaxWantedLevel(maxWantedLevel: number);
        static startPlayerTeleport(x: number,y: number,z: number,heading: number,p5: boolean,p6: boolean,p7: boolean);
        static setMeleeWeaponDefenseModifier(modifier: number);
        static arePlayerFlashingStarsAboutToDrop(): boolean;
        static setPlayerTargetingMode(targetMode: number);
        static isSpecialAbilityEnabled(): boolean;
        static specialAbilityChargeAbsolute(p1: number,p2: boolean);
        static resetWantedLevelDifficulty();
        static forceCleanup(cleanupFlags: number);
        static giveAchievementToPlayer(achievement: number): boolean;
        static startFiringAmnesty(duration: number);
        static disablePlayerVehicleRewards();
        static setAreasGeneratorOrientation();
        static isSpecialAbilityUnlocked(playerModel: number | string): boolean;
        static hasForceCleanupOccurred(cleanupFlags: number): boolean;
        static setAirDragMultiplierForPlayersVehicle(multiplier: number);
        static getTimeSincePlayerDroveOnPavement(): number;
        static specialAbilityDeactivate();
        static setDispatchCopsForPlayer(toggle: boolean);
        static getTimeSincePlayerDroveAgainstTraffic(): number;
        static setHudAnimStopLevel(toggle: boolean);
        static canPlayerStartMission(): boolean;
        static getTimeSincePlayerHitPed(): number;
        static reportCrime(crimeType: mp.game.player.crimeTypes,wantedLvlThresh: number);
        static specialAbilityChargeContinuous(p1: boolean);
        static playerAttachVirtualBound(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number);
        static specialAbilityChargeMedium(p1: boolean,p2: boolean);
        static specialAbilityUnlock(playerModel: number | string);
        static specialAbilityChargeLarge(p1: boolean,p2: boolean);
        static forceCleanupForThreadWithThisId(id: number, cleanupFlags: number);
        static getWantedLevelThreshold(wantedLevel: number): number;

        readonly isClimbing: boolean;
        readonly action: mp.game.player.actions;
        name: string;
        heading: number;
        health: number;
        armour: number;
        readonly isJumping: boolean;
        readonly isInCover: boolean;

        setModel(model: string | number);
        setTeam(team: number);
        changePed(ped: mp.game.ped | object, b2: boolean, b3: boolean);
        getWantedCentrePosition(): mp.Vector3;
        getGroup(): number;
        clearParachuteVariationOverride();
        setForcedAim(toggle: boolean);
        clearParachutePackModelOverride();
        setResetFlagPreferRearSeats(flags: number);
        getSprintTimeRemaining(): number;
        resetInputGait();
        setMayNotEnterAnyVehicle();
        hasDamagedAtLeastOnePed(): boolean;
        isWantedLevelGreater(wantedLevel: number): boolean;
        setInvincible(toggle: boolean);
        setLockonRangeOverride(range: number);
        resetArrestState();
        setWeaponDefenseModifier(modifier: number);
        isFreeAiming(): boolean;
        getCurrentStealthNoise(): number;
        setPoliceIgnore(toggle: boolean);
        setWantedLevelNoDrop(wantedLevel: number, p2: boolean);
        getTeam(): number;
        isBeingArrested(atArresting: boolean): boolean;
        setWantedLevel(wantedLevel, disableNoMission);
        giveRagdollControl(toggle: boolean);
        getSprintStaminaRemaining(): number;
        isDead(): boolean;
        getPed(): mp.game.ped | object;
        isControlOn(): boolean;
        setMeleeWeaponDamageModifier(modifier: number);
        clearHasDamagedAtLeastOneNonAnimalPed();
        setVehicleDefenseModifier(modifier: number);
        setStealthPerceptionModifier(value: number);
        isRidingTrain(): boolean;
        getPedScriptIndex(): mp.game.ped | object;
        setWantedCentrePosition(x: number, y: number, z: number);
        setLockon(toggle: boolean);
        setHealthRechargeMultiplier(regenRate: number);
        getHasReserveParachute(): boolean;
        isPlaying(): boolean;
        getName(): string;
        setCanDoDriveBy(toggle: boolean);
        getParachutePackTintIndex(tintIndex: number): number;
        setClothPinFrames(toggle: boolean);
        getParachuteTintIndex(tintIndex: mp.game.player.tints): number;
        setForcedZoom(toggle: boolean);
        setForceSkipAimIntro(toggle: boolean);
        setMaxArmour(value: number);
        isTargettingAnything(): boolean;
        setHasReserveParachute();
        setMayOnlyEnterThisVehicle(vehicle: mp.game.vehicle | object);
        setParachuteSmokeTrailColor(r: number, g: number, b: number);
        clearParachuteModelOverride();
        isScriptControlOn(): boolean;
        setControl(toggle: boolean, possiblyFlags: number);
        setEveryoneIgnore(toggle: boolean);
        isReadyForCutscene(): boolean;
        getMaxArmour(): number;
        setParachutePackTintIndex(tintIndex: number);
        setParachuteModelOverride(model: number | string);
        setSprint(toggle: boolean);
        getUnderwaterTimeRemaining(): number;
        setParachuteTintIndex(tintIndex: mp.game.player.tints);
        setVehicleDamageModifier(damageAmount: number);
        resetStamina();
        setReserveParachuteTintIndex(tintIndex: mp.game.player.tints);
        setSneakingNoiseMultiplier(multiplier: number);
        clearWantedLevel();
        getInvincible(): boolean;
        setSimulateAiming(toggle: boolean);
        setWeaponDamageModifier(damageAmount: number);
        setCanUseCover(toggle: boolean): object;
        hasLeftTheWorld(): boolean;
        getReserveParachuteTintIndex(tintIndex: mp.game.player.tints): number;
        setCanBeHassledByGangs(toggle: boolean);
        hasBeenSpottedInStolenVehicle(): boolean;
        setParachuteVariationOverride(p1: number, p2: object, p3: object, p4: boolean);
        setNoiseMultiplier(multiplier: number);
        setParachutePackModelOverride(model: number | string);
        isFreeForAmbientTask(): boolean;
        setWantedLevelNow(p1: boolean);
        hasTeleportFinished(): boolean;
        getWantedLevel(): number;
        hasDamagedAtLeastOneNonAnimalPed(): boolean;
        getRgbColour(r: number, g: number, b: number): mp.game.player.rgbColor;
        getParachuteSmokeTrailColor(r: number, g: number, b: number): mp.game.player.rgbColor;
        clearHasDamagedAtLeastOnePed();
        canPedHear(ped: mp.game.ped | object): boolean;
        removeHelmet(p2: boolean): object;
        setCanLeaveParachuteSmokeTrail(enabled: boolean);
        isPressingHorn(): boolean;
    }
}
declare module mp.game.player {
    class rgbColor {
        r: number;
        g: number;
        b: number;
    }
    enum tints {
        none = -1,
        rainbow = 0,
        red = 1,
        seasideStripes = 2,
        widowMaker = 3,
        patriot = 4,
        blue = 5,
        black = 6,
        hornet = 7,
        airFocce = 8,
        desert = 9,
        shadow = 10,
        highAltitude = 11,
        airbone = 12,
        sunrise = 13
    }
    enum crimeTypes {
        firearmsPossession = 1,
        personRunningARedLight = 2,
        recklessDriver = 3,
        speedingVehicle= 4,
        trafficViolation = 5,
        motorcycleRiderWithoutAHelmet = 6,
        vehicleTheft = 7,
        grandTheftAuto = 8,
        unk = 9,
        unk = 10,
        assaultOnACivilian = 11,
        assaultOnAnOfficer = 12,
        assaultWithADeadlyWeapon = 13,
        officerShot = 14,
        pedestrianStruckByAVehicle = 15,
        officerStruckByAVehicle = 16,
        helicopterDown = 17,
        civilianOnFire = 18,
        officerSetOnFire = 19,
        carOnFire = 20,
        airUnitDown = 21,
        anExplosion = 22,
        aStabbing = 23,
        officerStabbed = 24,
        attackOnAVehicle = 25,
        damageToProperty = 26,
        suspectThreateningOfficerWithAFirearm = 27,
        shotsFired = 28,
        unk = 29,
        unk = 30,
        unk = 31,
        unk = 32,
        unk = 33,
        unk = 34,
        unk= 35,
        unk = 36,
        unk= 37,
        unk= 38,
        unk= 39,
        unk= 40,
        unk= 41,
        unk= 42,
        possibleDisturbance = 43,
        civilianInNeedOfAssistance = 44,
        unk = 45,
        unk = 46
    }
    enum actions {
        climbing = 'climbing',
        in_cover = 'in_cover',
        aiming_from_cover = 'aiming_from_cover',
        diving = 'diving',
        entering_vehicle = 'entering_vehicle',
        exiting_vehicle = 'exiting_vehicle',
        jumping = 'jumping',
        moving = 'moving',
        moving_aiming = 'moving_aiming',
        moving_reloaing = 'moving_reloaing',
        parachuting = 'parachuting',
        ragdoll = 'ragdoll',
        aiming = 'aiming',
        reloading = 'reloading',
        stopped = 'stopped',
    }
}