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
        readonly vehicle: boolean;
        readonly isEnteringVehicle: boolean;
        readonly isLeavingVehicle: boolean;
        readonly seat: boolean;
        readonly weapon: object; //TODO: Find type
        readonly isAiming: boolean;
        readonly aimTarget: boolean;
        readonly ping: number;
        readonly ip: string;
        eyeColour: number;
        hairColour: number;
        hairHighlightColour: number;

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
        isUsingActionMode(): boolean;
        setMinMoveBlendRatio(value: number);
        setRagdollForceFall(): object;
        isOnFoot(): boolean;
        setAsEnemy(toggle: boolean);
        setDucking(toggle: boolean);
        getTextureVariation(componentId: number): number;
        setTargetLossResponse(responseType: number);
        setMoveRateOverride(value: number);
        clearProp(propId: number);
        setMotionBlur(toggle: boolean);
        isInAnyPoliceVehicle(): boolean;
        setGroupMemberPassengerIndex(index: number);
        clearDecorations();
        setCanPlayAmbientBaseAnims(toggle: boolean);
        setToInformRespectedFriends(radius: number, maxFriends: number);
        isVaulting(): boolean;
        wasSkeletonUpdated(): boolean;
        wasSkeletonUpdated(): boolean;
        canRagdoll(): boolean;
        setBlendFromParents(p1: object, p2: object, p3: number, p4: number);
        setSteersAroundObjects(toggle: boolean);
        forceToOpenParachute();
        getCauseOfDeath(): number | string;
        getBoneCoords(boneId: number, offsetX: number, offsetY: number, offsetZ: number): mp.Vector3;
        getMeleeTargetFor(): mp.game.ped | object;
        setConfigFlag(flagId: mp.game.player.pedConfigFlags, value: boolean);
        isUsingScenario(scenario: string): boolean;
        isHangingOnToVehicle(): boolean;
        setCanSmashGlass(p1: boolean, p2: boolean);
        getTimeOfDeath(): number;
        resetStrafeClipset();
        getRagdollBoneIndex(bone: number): number;
        resetInVehicleContext();
        getNearbyPeds(sizeAndPeds: number, ignore: number): number;
        isReloading(): boolean;
        setWeaponMovementClipset(clipSet: string);
        setComponentVariation(componentId: number, drawableId: number, textureId: number, paletteId: mp.game.player.pedVariationData);
        setRagdollFlag(flag: number);
        setHelmetPropIndex(propIndex: number);
        getHeadBlendData(headBlendData: mp.game.player.headBlendData);
        getNumberOfDrawableVariations(componentId: number);
        setSweat(sweat: number);
        isInAnyHeli(): boolean;
        setStrafeClipset(clipSet: string);
        setDiesInVehicle(toggle: boolean);
        setAsGroupLeader(groupId: number);
        isRunningMobilePhoneTask():boolean;
        isPropValid(componentId: number, drawableId: number, TextureId: number): boolean;
        getFloodInvincibility(p1: boolean);
        explodeHead(weaponHash: number | string);
        setVisualFieldMinAngle(value: number);
        isInAnyBoat(): boolean;
        setCanTeleportToGroupLeader(groupHandle: number, toggle: boolean);
        registerTarget(target: mp.game.ped | object);
        applyBloodByZone(p1: object, p2: number, p3: number, p4: object);
        isDeadOrDying(p1: boolean): boolean;
        setToLoadCover(toggle: boolean);
        setHearingRange(value: number);
        isShooting(): boolean;
        setCapsule(value: number);
        getAccuracy(): number;
        applyDamageDecal(p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: string);
        isAimingFromCover(): boolean;
        resetVisibleDamage(): object;
        setVisualFieldCenterAngle(angle: number);
        setAllowVehiclesOverride(toggle: boolean);
        getDefensiveAreaPosition(p1: boolean): mp.Vector3;
        setCombatRange(p1: number);
        setNeverLeavesGroup(toggle: boolean);
        getBoneIndex(boneId: number): number;
        getMoney(): number;
        setDefensiveAreaDirection(p1: number, p2: number, p3: number, p4: boolean);
        isEvasiveDiving(evadingEntity: mp.game.entity | object): boolean;
        getRelationshipGroupDefaultHash(): number | string;
        setCanBeTargetedWithoutLos(toggle: boolean);
        setMaxMoveBlendRatio(value: number);
        isJumpingOutOfVehicle(): boolean;
        setMaxTimeInWater(value: number);
        registerheadshot(): object;
        setWetnessHeight(height: number): object;
        isTryingToEnterALockedVehicle(): boolean;
        knockOffVehicle();
        setDefaultComponentVariation();
        isOnMount(): boolean;
        applyDamagePack(damagePack: string, damage: number, mult: number);
        setSteersAroundPeds(toggle: boolean);
        getMaxHealth(): number;
        isRagdoll(): boolean;
        isInCombat(target: mp.game.ped | object): boolean;
        setHeadOverlay(overlayID: number, index: number, opacity: number);
        setHeadOverlayColor(overlayID: number, colorType: number, colorID: number, secondColorID: number);
        isJacking(): boolean;
        clearDriveByClipsetOverride();
        isTracked(): boolean;
        setHairColor(colorID: number, highlightColorID: number);
        setCombatMovement(combatMovement: mp.game.player.combatMovement);
        isInMeleeCombat(): boolean;
        setDefensiveAreaAttachedToPed(attachPed: mp.game.ped | object, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: boolean, p10: boolean);
        setBoundsOrientation(p1: number, p2: number, p3: number, p4: number, p5: number);
        isBeingStunned(p1: number): boolean;
        setEyeColor(index: number);
        canKnockOffVehicle(): boolean;
        clearDamageDecalByZone(p1: number, p2: string);
        getCombatFloat(ped: mp.game.ped,p1: mp.game.player.combatFloat): number
        setInVehicleContext(context: number | string);
        isStopped(): boolean;
        getJackTarget(): mp.game.ped | object;
        giveHelmet(cannotRemove: boolean, helmetFlag: number, textureIndex: number);
        isDiving(): boolean;
        setHelmet(canWearHelmet: boolean);
        setFacialDecoration(collection: number | string, overlay: number | string);
        setDiesInWater(toggle: boolean);
        clearBloodDamageByZone(p1: number);
        isUsingAnyScenario(): boolean;
        isInGroup(): boolean;
        setScriptedAnimSeatOffset(p1: number);
        isHurt(): boolean;
        setDiesWhenInjured(toggle: boolean): object;
        isHeadtrackingPed(ped2: mp.game.ped | object): boolean;
        setDecoration(collection: number | string, overlay: number | string);
        getNumberOfPropDrawableVariations(propId: number): number;
        isInAnyPlane(): boolean;
        getVehicleIsUsing(): mp.game.vehicle | object;
        setShootRate(shootRate: number);
        hideBloodDamageByZone(p1: object, p2: boolean);
        setCanPlayAmbientAnims(toggle: boolean);
        setCanBeTargetedWhenInjured(toggle: boolean);
        setCanBeTargetted(toggle: boolean);
        hasHeadBlendFinished(): boolean;
        setCanBeTargettedByPlayer(player: mp.game.player, toggle: boolean);
        isOnVehicle(): boolean;
        getDrawableVariation(componentId: number): number;
        applyDamageTo(damageAmount: number, p2: boolean);
        getPlayerIsFollowing(): mp.game.player;
        setCanEvasiveDive(toggle: boolean);
        setMaxTimeUnderwater(value: number);
        setCanArmIk(toggle: boolean);
        isMale(): boolean;
        isInAnyTaxi(): boolean;
        isScriptedScenarioUsingConditionalAnim(animDict: string, anim: string): boolean;
        getSeatIsTryingToEnter(): number;
        isInAnyTrain(): boolean;
        knockOffProp(p1: boolean, p2: boolean, p3: boolean, p4: boolean);
        setVisualFieldMaxAngle(value: number);
        setFleeAttributes(attributes: number, p2: boolean);
        setFaceFeature(index: number, scale: number);
        resurrect();
        getDecorationsState(): object;
        updateHeadBlendData(shapeMix: number, skinMix: number, thirdMix: number);
        clearFacialIdleAnimOverride();
        setCanLegIk(toggle: boolean);
        removeDefensiveArea(toggle: boolean);
        setVisualFieldMaxElevationAngle(angle: number);
        isInModel(modelHash: number | string): boolean;
        getParachuteState(): number;
        setVisualFieldMinElevationAngle(angle: number);
        setCanBeKnockedOffVehicle(state: mp.game.player.canBeKnockedOffVehicle);
        setAccuracy(accuracy: number): object;
        getRelationshipGroupHash(): number | string;
        isInParachuteFreeFall(): boolean;
        isShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: boolean, p8: boolean): boolean;
        getConfigFlag(flagId: number, p2: boolean): boolean;
        wasKilledByTakedown(): boolean;
        setGeneratesDeadBodyEvents(toggle: boolean);
        isHeadtracking(entity: mp.game.entity | object): boolean;
        getVehicleIsTryingToEnter(): mp.game.vehicle | object;
        applyBloodDamageByZone(p1: object, p2: number, p3: number, p4: object);
        isSittingInAnyVehicle(): boolean;
        applyBlood(boneIndex: number, xRot: number, yRot: number, zRot: number, woundType: string);
        setPreferredCoverSet(itemSet: object);
        isInCoverFacingLeft(): boolean;
        isInjured(): boolean;
        isBeingStealthKilled(): boolean;
        setCoordsNoGang(posX: number, posY: number, posZ: number);
        setStealthMovement(p1: boolean, action: string);
        getPropIndex(componentId: number): number;
        getParachuteLandingType(): number;
        reviveInjured();
        clearLastDamageBone();
        getNumberOfTextureVariations(componentId: number, drawableId: number): number;
        clearBloodDamage();
        setAlternateMovementAnim(stance:mp.game.player.stance, animDictionary: string, animationName: string, p4: number, p5: boolean)
        isInFlyingVehicle(): boolean;
        isTrackedVisible(): boolean;
        registerHatedTargetsAround(radius: number);
        setPropIndex(componentId: number,drawableId: mp.game.player.pedPropsData, TextureId: number, attach: boolean);
        getSourceOfDeath(): mp.game.entity | object;
        setHeadBlendData(shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number, isParent: boolean);
        isOnAnyBike(): boolean;
        getArmour(): number;
        setPlaysHeadOnHornAnimWhenDiesInVehicle(toggle: boolean);
        setShootsAtCoord(x: number, y: number, z: number, toggle: boolean);
        unregisterheadshot();
        setKeepTask(toggle: boolean);
        setEnableWeaponBlocking(toggle: boolean): object;
        resetWeaponMovementClipset();
        setNameDebug(name: string);
        isInAnyVehicle(atGetIn: boolean): boolean;
        isBeingJacked(): boolean;
        getVehicleIsIn(getLastVehicle: boolean): mp.game.vehicle | object;
        setFiringPattern(patternHash: number | string);
        setCoordsKeepVehicle(posX: number, posY: number, posZ: number);
        getsJacker(): mp.game.ped | object;
        isGroupMember(groupId: number): boolean;
        getEnveffScale(): number;
        clearWetness(): object;
        setVisualFieldPeripheralRange(range: number);
        setSphereDefensiveArea(x: number, y: number, z: number, radius: number, p5: boolean, p6: boolean);
        isSwimming(): boolean;
        setMoveAnimsBlendOut();
        setAsGroupMember(groupId: number);
        isGoingIntoCover(): boolean;
        setCombatAttributes(attributeIndex: mp.game.player.combatAttributes, enabled: boolean);
        setBlockingOfNonTemporaryEvents(toggle: boolean);
        resetRagdollTimer();
        setGravity(toggle: boolean);
        isInVehicle(vehicle: mp.game.vehicle | object, atGetIn: boolean);
        setCowerHash(p1: string);
        getHeadOverlayValue(overlayID: number): number;
        getNumberOfPropTextureVariations(propId: number, drawableId: number): number;
        setDriverAggressiveness(aggressiveness: number);
        isSittingInVehicle(vehicle: mp.game.vehicle | object): boolean;
        setMoney(amount: number);
        setDesiredHeading(heading: number);
        resetMovementClipset(p1: number);
        setPinnedDown(pinned: boolean, i: number): object;
        setRelationshipGroupDefaultHash(hash: number | string);
        setToRagdoll(time1: number, time2: number, ragdollType: mp.game.player.ragdollTypes, p4: boolean, p5: boolean, p6: boolean): boolean;
        setMovementClipset(clipSet: string, p2: number);
        getResetFlag(flagId: number): boolean;
        setCanRagdoll(toggle: boolean);
        giveNmMessage();
        setDriverAbility(ability: number);
        isDoingDriveby(): boolean;
        setCanAttackFriendly(toggle: boolean, p2: boolean);
        setWetnessEnabledThisFrame();
        isHuman(): boolean;
        setCanPlayGestureAnims(toggle: boolean);
        setAsCop(toggle: boolean);
        isGettingIntoAVehicle(): boolean;
        resetLastVehicle();
        isFleeing(): boolean;
        setGetOutUpsideDownVehicle(toggle: boolean);
        setCanBeTargettedByTeam(team: number, toggle: boolean);
        setEnveffScale(value: number);
        isSwimmingUnderWater(): boolean;
        setHelmetFlag(helmetFlag: number);
        setCanHeadIk(toggle: boolean);
        stopWeaponFiringWhenDropped();
        setCanBeDraggedOut(toggle: boolean);
        setResetFlag(flagId: number, doReset: boolean);
        setIkTarget(p1: number, targetPed: mp.game.ped | object, boneLookAt: number, x: number, y: number, z: number, p7: object, duration: number, duration1: number);
        setLegIkMode(mode: number);
        setRandomProps();
        setCanPeekInCover(toggle: boolean);
        setEnableBoundAnkles(toggle: boolean);
        isPlantingBomb(): boolean;
        setCombatAbility(p1: mp.game.player.combatAbility);
        setCanBeShotInVehicle(toggle: boolean);
        setAngledDefensiveArea(p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: boolean);
        setRelationshipGroupHash(hash: number | string);
        setRandomComponentVariation(p1: boolean);
        isModel(modelHash: number | string): boolean;
        setCanCowerInCover(toggle: boolean);
        setPrimaryLookat(lookAt: mp.game.ped | object);
        getDeadPickupCoords(p1: number, p2: number): mp.Vector3;
        clearAllProps();
        setArmour(amount: number);
        getNearbyVehicles(sizeAndVehs: number): number;
        isDucking(): boolean;
        setEnableEnveffScale(toggle: boolean);
        isProne(): boolean;
        isFacingPed(otherPed: mp.game.ped | object, angle: number): boolean;
        setDiesInSinkingVehicle(toggle: boolean);
        getLastDamageBone(outBone: number): number;
        setUsingActionMode(p1: boolean, p2: object, action: string);
        isFatallyInjured(): boolean;
        setResetRagdollFlag(flag: number);
        clearAlternateMovementAnim(stance: number, p2: number);
        setAllowedToDuck(toggle: boolean);
        setAlertness(value:number);
        setLodMultiplier(multiplier: number);
        setGestureGroup(p1: object);
        getCombatMovement(): number;
        setEnableHandcuffs(toggle: boolean);
        setCanRagdollFromPlayerImpact(toggle: boolean);
        isConversationDead(): boolean;
        getExtractedDisplacement(worldSpace: boolean): mp.Vector3;
        getPropTextureIndex(componentId: number): number;
        setModelIsSuppressed(toggle: boolean);
        playFacialAnim(animName: string, animDict: string);
        clearFacialDecorations();
        isRunningRagdollTask(): boolean;
        getPaletteVariation(componentId: number): number;
        getMount(): mp.game.ped | object;
        isComponentVariationValid(componentId: number, drawableId: number, textureId: number);
        cloneToTarget(ped2: mp.game.ped | object);
        canInCombatSeeTarget(target: mp.game.ped | object): boolean;
        setSteersAroundVehicles(toggle: boolean);
        getRelationshipBetweens(ped2: mp.game.ped | object);
        setSuffersCriticalHits(toggle: boolean);
        setCanUseAutoConversationLookat(toggle: boolean);
        isOnSpecificVehicle(vehicle: mp.game.vehicle | object): boolean;
        setDriveByClipsetOverride(clipset: string);
        removeFromGroup();
        setCanSwitchWeapon(toggle: boolean);
        setStayInVehicleWhenJacked(toggle: boolean);
        setDiesInstantlyInWater(toggle: boolean);
        applyBloodSpecific(p1: object, p2: number, p3: number, p4: number, p5: number, p6: object, p7: number, p8: object);
        clone(heading: number, networkHandle: boolean, pedHandle: boolean): mp.game.ped | object;
        setRagdollOnCollision(toggle: boolean);
        setIdRange(value: number);
        setHelmetTextureIndex(textureIndex: number);
        getGroupIndex(): number;
        forceMotionState(motionStateHash: number | string, p2: boolean, p3: boolean, p4: boolean): boolean;
        setSeeingRange(value: number);
        setCanTorsoIk(toggle: boolean);
        isWearingHelmet(): boolean;
        setMaxHealth(value: number);
        getAlertness(): number;
        setIntoVehicle(vehicle: mp.game.vehicle | object, seatIndex: number);
        setCanPlayVisemeAnims(p1: boolean, p2: boolean);
        setExclusivePhoneRelationships(): mp.game.vehicle | object;
        wasKilledByStealth(): boolean;
        setEnableScuba(toggle: boolean);
        setDefensiveSphereAttachedToPed(p1: object, p2: number, p3: number, p4: number, p5: number, p6: boolean);
        getCombatRange(): object;
        setMinGroundTimeForStungun(ms: number);
        isFalling(): boolean;
        isInAnySub(): boolean;
        isPerformingStealthKill(): boolean;
        removePreferredCoverSet();
        getType(): number;
        setCombatFloat(combatType: number, p2: number);
        setFacialIdleAnimOverride(animName: string, animDict: string);
        getSequenceProgress(): number;
        setParachuteTaskThrust(thrust: number);
        taskRappelFromHeli(p1: number);
        taskJump(unused: boolean);
        taskVehiclePark(vehicle: mp.game.vehicle | object, x: number, y: number, z: number, heading: number, mode: number, radius: number, keepEngineOn: boolean);
        taskClearLookAt();
        taskVehicleEscort(vehicle: mp.game.vehicle | object, targetVehicle: mp.game.vehicle | object, mode: mp.game.player.vehicleEscordModes, speed: number, drivingStyle: number, minDistance: number, p7: number, noRoadsDistance: number);
        taskVehicleShootAt(target: mp.game.ped | object, p2: number);
        taskGoToCoordWhileAimingAtCoord(x: number, y: number, z: number, aimAtX: number, aimAtY: number, aimAtZ: number, moveSpeed: number, p8: boolean, p9: number, p10: number, p11: boolean, flags: object, p13: boolean, firingPattern: number | string);
        taskScriptedAnimation(p1: object, p2: object, p3: object, p4: number, p5: number);
        taskStartScenarioInPlace(scenarioName: string, unkDelay: number, playEnterAnim: boolean);
        taskVehicleDriveToCoordLongrange(vehicle: mp.game.vehicle | object, x: number, y: number, z: number, speed: number, driveMode: number, stopRange: number);
        taskBoatMission(boat: mp.game.vehicle | object, p2: object, p3: object, x: number, y: number, z: number, p7: object, maxSpeed: number, p9: object, p10: number, p11: object);
        taskFollowNavMeshToCoord(x: number, y: number, z: number, speed: number, timeout: number, stoppingRange: number, persistFollowing: boolean, unk: number);
        clearSecondaryTask();
        taskFollowNavMeshToCoordAdvanced(x: number, y: number, z: number, speed: number, timeout: number, unkFloat: number, unkInt: number, unkX: number, unkY: number, unkZ: number, unk2: number);
        taskVehicleGotoNavmesh(vehicle: mp.game.vehicle | object, x: number, y: number, z: number, speed: number, behaviorFlag: number, stoppingRange: number);
        taskPutDirectlyIntoMelee(meleeTarget: mp.game.ped | object, p2: number, p3: number, p4: number, p5: boolean);
        taskGoToCoordAnyMeansExtraParams(x: number, y: number, z: number, speed: number, p5: object, p6: boolean, walkingStyle: number, p8: number, p9: object, p10: object, p11: object);
        taskTurnToFaceCoord(x: number, y: number, z: number, duration: number);
        taskVehicleHeliProtect(vehicle: mp.game.vehicle | object, entityToFollow: mp.game.entity | object, targetSpeed: number, p4: number, radius: number, altitude: number, p7: number);
        setDesiredMoveBlendRatio(p1: number);
        getPhoneGestureAnimTotalTime(): number;
        taskSweepAim(anim: string, p2: string, p3: string, p4: string, p5: number, vehicle: mp.game.vehicle | object, p7: number, p8: number);
        taskSmartFlee(fleeTarget: mp.game.ped | object, distance: number, fleeTime: object, p4: boolean, p5: boolean);
        taskPlaneMission(plane: mp.game.vehicle | object, targetVehicle: mp.game.vehicle | object, targetPed: mp.game.ped | object, destinationX: number, destinationY: number, destinationZ: number, p7: number, physicsSpeed: number, p9: number, p10: number, maxAltitude: number, minAltitude: number);
        isMoveBlendRatioSprinting(): boolean;
        hasUseScenarioTask(): boolean;
        isGettingUp(): boolean;
        taskPlaneChase(entityToFollow: mp.game.entity | object, x: number, y: number, z: number);
        taskMoveNetwork(task: string, multiplier: number, p3: boolean, animDict: string, flags: number);
        taskDriveBy(targetPed: mp.game.ped | object, p2: object, targetX: number, targetY: number, targetZ: number, p6: number, p7: object, p8: boolean, firingPattern: number | string);
        taskFollowToOffsetOf(entity: mp.game.entity | object, offsetX: number, offsetY: number, offsetZ: number, movementSpeed: number, timeout: number, stoppingRange: number, persistFollowing: boolean);
        taskVehicleFollowWaypointRecording(vehicle: mp.game.vehicle | object, WPRecording: string, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: number);
        isMoveBlendRatioStill(): boolean;
        setPathPreferToAvoidWater(avoidWater: boolean);
        taskSeekCoverToCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: object, p8: boolean);
        taskVehicleChase(targetEnt: mp.game.entity | object);
        isRunningArrestTask(): boolean;
        taskCower(duration: number);
        taskStopPhoneGestureAnimation();
        taskPutDirectlyIntoCover(x: number, y: number, z: number, timeout: object, p5: boolean, p6: number, p7: boolean, p8: boolean, p9:object, p10: boolean);
        setPathAvoidFire(avoidFire: boolean);
        taskShockingEventReact(eventHandle: number);
        taskShootAtCoord(x: number, y: number, z: number, duration: number, firingPattern: number | string);
        getPhoneGestureAnimCurrentTime(): number;
        taskVehicleDriveWander(vehicle: mp.game.vehicle | object, speed: number, drivingStyle: number);
        taskGuardCurrentPosition(p1: number, p2: number, p3: number);
        taskCombatHatedTargetsInArea(x: number, y: number, z: number, radius: number, p5: object);
        taskForceMotionState(state: number | string, p2: boolean);
        taskLeaveAnyVehicle(p1: number, p2: number);
        isSprinting(): boolean;
        taskUseNearestScenarioToCoordWarp(x: number, y: number, z: number, radius: number, p5: object);
        taskFollowPointRoute(speed: number, unknown: number);
        taskSlideToCoordHdgRate(x: number, y: number, z: number, heading: number, p5: number, p6: number);
        taskPerformSequence(taskSequence: mp.game.object | object): object;
        taskTurnToFace(entity: mp.game.entity | object, duration: number);
        taskGoToCoordAnyMeans(x: number, y: number, z: number, speed: number, p5: object, p6: boolean, walkingStyle: number, p8: number);
        setDriveTaskCruiseSpeed(cruiseSpeed: number);
        addVehicleSubtaskAttackCoord(x: number, y: number, z: number);
        taskUseMobilePhoneTimed(duration: number);
        taskSkyDive();
        taskReloadWeapon(doReload: boolean);
        setTaskVehicleChaseIdealPursuitDistance(distance: number);
        taskAimGunAtCoord(x: number, y: number, z: number, time: number, p5: boolean, p6: boolean);
        uncuff();
        taskLookAt(lookAt: mp.game.entity | object, duration: number, unknown1: number, unknown2: number);
        taskReactAndFlee(fleeTarget: mp.game.ped | object);
        playAnimOnRunningScenario(animDict: string, animName: string);
        isCuffed(): boolean;
        setPathCanUseLadders(Toggle: boolean): object;
        getScriptTaskStatus(taskHash: number | string): number;
        taskAimGunScripted(scriptTask: number | string, p2: boolean, p3: boolean);
        taskShuffleToNextVehicleSeat(vehicle: mp.game.vehicle | object);
        taskCombatHatedTargetsAround(radius: number, p2: number);
        taskPlayAnimAdvanced(animDict: string, animName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, speed: number, speedMultiplier: number, duration: number, flag: object, animTime: number, p14: object, p15: object);
        taskSeekCoverFrom(target: mp.game.ped | object, duration: number, p3: boolean);
        getDesiredMoveBlendRatio(): number;
        addVehicleSubtaskAttack(ped2: mp.game.ped | object);
        isDrivebyTaskUnderneathDrivingTask(): boolean;
        taskClimb(unused: boolean);
        taskChatTo(target: mp.game.ped | object, p2: object, p3: number, p4: number, p5: number, p6: number, p7: number);
        setHighFallTask(p1: object, p2: object, p3: object);
        setPathCanUseClimbovers(Toggle: boolean): object;
        taskPlayPhoneGestureAnimation(p1: object, p2: object, p3: object, p4: number, p5: number, p6: boolean, p7: boolean);
        taskSetBlockingOfNonTemporaryEvents(toggle: boolean);
        taskStandStill(time: number);
        taskAchieveHeading(heading: number, timeout: number);
        taskVehicleMissionTarget(vehicle: mp.game.vehicle | object, pedTarget: mp.game.ped | object, mode: number, maxSpeed: number, drivingStyle: number, minDistance: number, p7: number, p8: boolean);
        taskSmartFleeCoord(x: number, y: number, z: number, distance: number, time: number, p6: boolean, p7: boolean);
        taskOpenVehicleDoor(vehicle: mp.game.vehicle | object, timeOut: number, doorIndex: number, speed: number);
        taskPlantBomb(x: number, y: number, z: number, heading: number);
        updateTaskAimGunScriptedTarget(p1: mp.game.ped | object, p2: number, p3: number, p4: number, p5: boolean);
        taskGoToWhileAimingAtEntity(entityToWalkTo: mp.game.entity | object, entityToAimAt: mp.game.entity | object, speed: number, shootatEntity: boolean, p5: number, p6: number, p7: boolean, p8: boolean, firingPattern: number | string);
        stopAnimTask(animDictionary: string, animationName: string, p3: number);
        taskWarpIntoVehicle(vehicle: mp.game.vehicle | object, seat: number);
        taskAimGunAt(entity: mp.game.entity | object, duration: number, p3: boolean);
        taskGetOffBoat(boat: mp.game.vehicle | object);
        taskSwapWeapon(p1: boolean);
        isMountedWeaponTaskUnderneathDrivingTask(): boolean;
        taskGoToCoordAndAimAtHatedEntitiesNearCoord(gotoX: number, gotoY: number, gotoZ: number, aimNearX: number, aimNearY: number, aimNearZ: number, speed: number, shoot: boolean, unknown1: number, unknown2: number, unkTrue: boolean, unknown3: number, heading: boolean, firingPattern: number | string);
        updateTaskHandsUpDuration(duration: number);
        taskGotoAiming(target: mp.game.entity | object, distanceToStopAt: number, StartAimingDist: number);
        isActiveInScenario(): boolean;
        taskStealthKill(target: mp.game.ped | object, killType: number | string, p3: number, p4: boolean): object;
        clearTasksImmediately();
        isStill(): boolean;
        taskHeliChase(entityToFollow: mp.game.entity | object, x: number, y: number, z: number);
        taskStandGuard(x: number, y: number, z: number, heading: number, scenarioName: string);
        getIsTaskActive(taskNumber: number): boolean;
        taskParachuteToTarget(x: number, y: number, z: number);
        taskClimbLadder(p1: number);
        isPlayingPhoneGestureAnim(): boolean;
        taskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(x: number, y: number, z: number, speed: number, p5: object, p6: boolean, walkingStyle: number, p8: number, p9: object, p10: object, p11: object, p12: object);
        taskWanderStandard(p1: number, p2: number);
        taskUseMobilePhone(p1: number);
        taskPatrol(p1: string, p2: object, p3: boolean, p4: boolean);
        taskPlaneLand(plane: mp.game.vehicle | object, runwayStartX: number, runwayStartY: number, runwayStartZ: number, runwayEndX: number, runwayEndY: number, runwayEndZ: number);
        taskEnterVehicle(vehicle: mp.game.vehicle | object, timeout: number, seat: number, speed: number, p5: number, p6: object);
        setParachuteTaskTarget(x: number, y: number, z: number);
        clearDrivebyTaskUnderneathDrivingTask();
        taskVehicleTempAction(vehicle: mp.game.vehicle | object, action: mp.game.player.vehicleActions, time: number);
        isRunning(): boolean;
        getNavmeshRouteDistanceRemaining(p1: object, p2: object): object;
        taskGuardSphereDefensiveArea(p1: number, p2: number, p3: number, p4: number, p5: number, p6: object, p7: number, p8: number, p9: number, p10: number);
        setTaskVehicleChaseBehaviorFlag(flag: number, set: boolean);
        setMountedWeaponTarget(targetEntity: mp.game.entity | object, p2: object, x: number, y: number, z: number);
        taskWrithe(target: mp.game.ped | object, time: number, p3: number);
        taskSlideToCoord(x: number, y: number, z: number, heading: number, p5: number);
        taskParachute(p1: boolean);
        taskLeaveVehicle(vehicle: mp.game.vehicle | object, flags: number);
        isMoveBlendRatioRunning(): boolean;
        taskMoveNetworkAdvanced(p1: string, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: object, p9: number, p10: boolean, animDict: string, flags: number);
        taskGoStraightToCoord(x: number, y: number, z: number, speed: number, timeout: number, targetHeading: number, distanceToSlide: number);
        setDriveTaskDrivingStyle(drivingStyle: number);
        taskHeliMission(vehicle: mp.game.vehicle | object, p2: object, pedToFollow: mp.game.ped | object, posX: number, posY: number, posZ: number, mode: number, speed: number, radius: number, angle: number, p11: number, height: number, p13: number, p14: number);
        controlMountedWeapon(): boolean;
        isWalking(): boolean;
        isInWrithe(): boolean;
        taskWanderInArea(x: number, y: number, z: number, radius: number, minimalLength: number, timeBetweenWalks: number);
        clearTasks();
        taskVehicleDriveToCoord(vehicle: mp.game.vehicle | object, x: number, y: number, z: number, speed: number, p6: object, vehicleModel: number | string, drivingMode: number, stopRange: number, p10: number);
        setPathCanDropFromHeight(Toggle: boolean);
        taskGotoOffset(p1: object, p2: object, x: number, y: number, z: number, duration: number);
        taskVehicleAimAt(target: mp.game.ped | object);
        isStrafing(): boolean;
        updateTaskSweepAim(entity: mp.game.entity | object);
        taskStayInCover();
        taskPause(ms: number);
        taskPlayAnim(animDictionary: string, animationName: string, speed: number, speedMultiplier: number, duration: number, flag: mp.game.player.eAnimationFlags, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean);
        taskSetDecisionMaker(p1: number | string);
        stopAnimPlayback(p1: object, p2: boolean);
        taskSynchronizedScene(scene: number, animDictionary: string, animationName: string, speed: number, speedMultiplier: number, duration: number, flag: number, playbackRate: number, p9: object);
        taskVehicleMissionCoorsTarget(vehicle: mp.game.vehicle | object, x: number, y: number, z: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: boolean);
        isMoveBlendRatioWalking(): boolean;
        taskCombat(targetPed: mp.game.ped | object, p2: number, p3: number);
        taskHandsUp(duration: number, facingPed: mp.game.ped | object, p3: number, p4: boolean);
        setPathsWidthPlant(mayEnterWater: boolean);
        taskArrest(target: mp.game.ped | object);
        taskStartScenarioAtPosition(scenarioName: string, x: number, y: number, z: number, heading: number, p6: object, p7: boolean, p8: boolean);
        taskVehicleFollow(vehicle: mp.game.vehicle | object, targetEntity: mp.game.entity | object, drivingStyle: mp.game.player.drivingStyles, speed: number, minDistance: number);
    }
}
declare module mp.game.player {
    class rgbColor {
        r: number;
        g: number;
        b: number;
    }
    class headBlendData {
        shapeFirst: number;
        shapeSecond: number;
        shapeThird: number;
        skinFirst: number;
        skinSecond: number;
        skinThird: number;
        shapeMix: number;
        skinMix: number;
        thirdMix: number;

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
    enum pedConfigFlags
    {
        FlagCanFlyThruWindscreen = 32,
        FlagDiesByRagdoll = 33,
        FlagNoCollision = 52,
        FlagNoCollide = 62,
        FlagDead = 71,
        FlagIsSniperScopeActive = 72,
        FlagSuperDead = 73,
        FlagIsAiming = 78,
        FlagDrunk = 100,
        FlagNoPlayerMelee = 122,
        FlagNmMessage466 = 125,
        FlagInjuredLimp = 166,
        FlagInjuredLimp2 = 170,
        FlagInjuredDown = 187,
        FlagShrink = 223,
        FlagMeleeCombat = 224,
        FlagNoWrithe = 281,
        FlagFreeze = 292,
        FlagIsStill = 301,
        FlagNoPlayerMelee = 314,
        FlagAlpha = 410,
    }
    enum pedVariationData {
        playerVariationFace = 0,
        playerVariationHead = 1,
        playerVariationHair = 2,
        playerVariationTorso = 3,
        playerVariationLegs = 4,
        playerVariationHands = 5,
        playerVariationFeet = 6,
        playerVariationEyes = 7,
        playerVariationAccessories = 8,
        playerVariationTasks = 9,
        playerVariationTextures = 10,
        playerVariationTorso2 = 11
    }
    enum combatMovement {
        stationary = 0,
        defensive = 1,
        offensive = 2,
        suicidalOffensive = 3
    }
    enum combatFloat {
        blindFireChance = 0,
        burstDurationInCover = 1,
        timeBetweenBurstsInCover = 3,
        timeBetweenPeeks = 4 ,
        strafeWhenMovingChance = 5,
        walkWhenStrafingChance = 8,
        attackWindowDistanceForCover = 11,
        timeToInvalidateInjuredTarget = 12,
        optimalCoverDistance = 16,
    }
    enum canBeKnockedOffVehicle {
        can = 0,
        cant =1,
        unk = 2,
        unk = 3
    }
    enum stance {
        idle = 0,
        walk = 1,
        run = 2,
    }
    enum pedPropsData {
        playerPropHats = 0,
        playerPropGlasses = 1,
        playerPropEars = 2,
    }
    enum combatAttributes {
        bfCanUseCover = 0,
        bfCanUseVehicles = 1,
        bfCanDoDrivebys = 2,
        bfCanLeaveVehicle = 3,
        bfCanFightArmedPedsWhenNotArmed = 5,
        bfCanTauntInVehicle = 20,
        bfAlwaysFight = 46,
        bfIgnoreTrafficWhenDriving = 52,
        bfFreezeMovement = 292,
        bfbfPlayerCanUseFireingWeapons = 1424
    }
    enum ragdollTypes {
        normal = 0,
        stiffLegs = 1,
        narrowLegs = 2,
        wideLegs = 3
    }
    enum combatAbility {
        poor = 0,
        average = 1,
        professional = 2
    }
    enum vehicleEscordModes {
        behind = -1,
        ahead = 0,
        left = 1,
        right = 2,
        backLeft = 3,
        backRight = 4
    }
    enum aimFlag {
        aimAtFocusLocation = 0,
        aimAtGoToLocation = 1
    }
    enum vehicleActions {
        brake = 1,
        brakeAndReverse = 3,
        turnLeftBraking = 4,
        turnRightBraking = 5,
        brakeStrongUntilTimeEnds = 6,
        turnLeftRightAccelerate = 7,
        weakAcceleration = 9,
        turnLeftRestoreWheelPosToCenter = 10,
        turnRightRestoreWheelPosToCenter = 11,
        turnLeftGoReverse = 13,
        turnLeftGoReverse = 14,
        crashTheGameAfterTwoSeconds = 16,
        keepActualStateMaybeGameCrash = 17,
        gameCrash = 18,
        strongBrakeTurnLeftRight = 19,
        weakBrakeAndTurnLeftThenTurnRight = 20,
        weakBrakeAndTurnRightThenTurnLeft = 21,
        brakeAndReverse = 22,
        accelerateFast = 23,
        brake = 24,
        brakeTurningLeftThenWhenAlmostStoppingItTurnsLeftMore = 25,
        brakeTurningR0ightThenWhenAlmostStoppingItTurnsRightMore = 26,
        brakeUntilCarStopOrUntilTimeEnds = 27,
        brakeStrongReverseAcceleration = 28,
        performsBurnout = 30,
        accelerateHandbrake = 31,
        accelerateVeryStrong = 32
    }
    enum eAnimationFlags {
        animFlagsNormal = 0,
        animFlagsRepeat = 1,
        animFlagsStopLastFrame = 2,
        animFlagsUpperbody = 16,
        animFlagsEnablePlayerControl = 32,
        animFlagsCancelable = 120,
    }
    enum drivingStyles {
        rushed = 0,
        ignoreTrafficLights = 1,
        fast = 2,
        normal = 3,
        fastAvoidTraffic = 4,
        fastStopsInTrafficButOvertakesSometimes = 5,
        fastAvoidsTrafficExtremely = 6
    }
}