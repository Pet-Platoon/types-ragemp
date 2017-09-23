/// <reference path="../index.d.ts" />

declare module mp.game {
    class entity {
        static removeModelSwap(x: number, y: number, z: number, radius: number, originModel: string | number, newModel: string | number, p6: boolean);
        static findAnimEventPhase(animDictionary: string, animName: string, p2: string, p3: object, p4: object): boolean;
        static stopSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: object, p5: number): boolean;
        static createForcedObject(x: number, y: number, z: number, p3: object, modelHash: string | number, p5: boolean);
        static createModelHideExcludingScriptObjects(x: number, y: number, z: number, radius: number, model: string | number, p5: boolean);
        static setObjectAsNoLongerNeeded(object: mp.game.object): mp.game.object;
        static removeForcedObject(p0: object, p1: object, p2: object, p3: object, p4: object);
        static isAnEntity(handle: number): boolean;
        static createModelHide(x: number, y: number, z: number, radius: number, model: string | number, p5: boolean);
        static createModelSwap(x: number, y: number, z: number, radius: number, originalModel: string | number, newModel: string | number, p6: boolean);
        static playSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: object, p5: object, p6: object, p7: object, p8: number, p9: number, p10: object, p11: number): boolean;
        static removeModelHide(p0: object, p1: object, p2: object, p3: object, p4: object, p5: object);
        static wouldEntityBeOccluded(hash: string | number, x: number, y: number, z: number, p4: boolean): boolean;
        static getEntityAnimDuration(animDict: string, animName: string): number;

        readonly id: number;
        dimension: number;
        readonly type: string;
        position: mp.Vector3;
        model: number;
        alpha: number;
        readonly handle: object;

        destroy();

        hasClearLosToInFront(entity: mp.game.entity | object): boolean;
        getPedIndexFromIndex(): mp.game.ped | object;
        doesHaveDrawable(): boolean;
        setCoords(xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, clearArea: boolean);
        setRecordsCollisions(toggle: boolean);
        getForwardVector(): mp.Vector3;
        isAMission(): boolean;
        setLoadCollisionFlag(toggle: boolean);
        setMaxSpeed(speed: number);
        isTouchingModel(modelHash: string | number): boolean;
        isStatic(): boolean;
        getMaxHealth(): number;
        setMaxHealth(value: number);
        setDynamic(toggle: boolean);
        setCanBeDamaged(toggle: boolean);
        isTouching(targetEntity: mp.game.entity | object): boolean;
        getOffsetFromInWorldCoords(offsetX: number, offsetY: number, offsetZ: number): mp.Vector3;
        applyForceToCenterOfMass(forceType: number, x: number, y: number, z: number, p4: boolean, isRel: boolean, highForce: boolean, p7: boolean);
        setCollision(toggle: boolean, keepPhysics: boolean);
        setVelocity(x: number, y: number, z: number);
        isUpsidedown(): boolean;
        getHeightAboveGround(): number;
        isPlayingAnim(animDict: string, animName: string, p2: number): boolean;
        isAtCoord(xPos: number, yPos: number, zPos: number, xSize: number, ySize: number, zSize: number, p6: boolean, p7: boolean, p8: number): boolean;
        hasAnimFinished(animDict: string, animName: string, p2: number): boolean;
        getRotationVelocity(): mp.Vector3;
        getOffsetFromGivenWorldCoords(posX: number, posY: number, posZ: number): mp.Vector3;
        setCoordsNoOffset(xPos: number, yPos: number, zPos: number, xAxis: number, yAxis: number, zAxis: number);
        isAttachedToAnyVehicle(): boolean;
        stopAnim(animation: string, animGroup: string, p2: number);
        setAnimSpeed(animDict: string, animName: string, speedMultiplier: number);
        setMotionBlur(toggle: boolean);
        getAnimCurrentTime(animDict: string, animName: string): number;
        setInvincible(toggle: boolean);
        getCoords(alive: boolean): mp.Vector3;
        forceAiAndAnimationUpdate();
        getLodDist(): number;
        freezePosition(toggle: boolean);
        stopSynchronizedAnim(p0: number, p1: boolean): boolean;
        setAnimCurrentTime(animDict: string, animName: string, time: number);
        setAlpha(alphaLevel: string, skin: boolean);
        getWorldPositionOfBone(boneIndex: number): mp.Vector3;
        isVisible(): boolean;
        getVelocity(): mp.Vector3;
        getAttachedTo(): mp.game.entity | object;
        setHasGravity(toggle: boolean);
        getVehicleIndexFromIndex(): mp.game.vehicle | object;
        getNearestPlayerToOnTeam(team: number): mp.game.player;
        getAnimTotalTime(animDict: string, animName: string): number;
        isInAngledArea(originX: number, originY: number, originZ: number, edgeX: number, edgeY: number, edgeZ: number, angle: number, p7: boolean, p8: boolean, p9: object): boolean;
        isAPed(): boolean;
        isUpright(angle: number): boolean;
        isInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean, p8: object): boolean;
        setTrafficlightOverride(state: number);
        setLodDist(value: number);
        getAlpha(): number;
        getHeight(x: number, y: number, z: number, atTop: boolean, inWorldCoords: boolean): number;
        getLastMaterialHitBy(): string | number;
        isDead(): boolean;
        hasBeenDamagedByAnyPed(): boolean;
        setCoords2(xPos: number, yPos: number, zPos: number, xAxis: number, yAxis: number, zAxis: number, clearArea: boolean);
        isAVehicle(): boolean;
        setHealth(health: number);
        attachTo(entity: mp.game.entity | object, boneIndex: number, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, p8: boolean, useSoftPinning: boolean, collision: boolean, isPed: boolean, vertexIndex: number, fixedRot: boolean);
        setOnlyDamagedByRelationshipGroup(p0: boolean, p1: object);
        getNearestPlayerTo(): mp.game.player;
        doesExist(): boolean;
        setRenderScorched(toggle: boolean);
        isAt(entity: mp.game.entity | object, xSize: number, ySize: number, zSize: number, p4: boolean, p5: boolean, p6: number): boolean;
        setQuaternion(x: number, y: number, z: number, w: number);
        setOnlyDamagedByPlayer(toggle: boolean);
        getQuaternion(x: number, y: number, z: number, w: number): mp.Quaternion;
        setLights(toggle: boolean);
        playAnim(animName: string, propName: string, p2: number, p3: boolean, p4: boolean, p5: boolean, delta: number, bitset: object): boolean;
        getRoll(): number;
        getPhysicsHeading(): number;
        setRotation(pitch: number, roll: number, yaw: number, rotationOrder: number, p4: boolean);
        getForwardY(): number;
        isInAir(): boolean;
        getType(): mp.game.entity.entityType | number;
        hasCollidedWithAnything(): boolean;
        getForwardX(): number;
        isAnObject(): boolean;
        setHeading(heading: number);
        hasBeenDamagedByAnyObject(): boolean;
        getUprightValue(): number;
        detach(p0: boolean, collision: boolean);
        getSpeedVector(relative: boolean): mp.Vector3;
        resetAlpha();
        getModel(): string | number;
        setNoCollision(entity: mp.game.entity | object, collision: boolean);
        getScript(script: mp.game.script): mp.game.script;
        clearLastDamage();
        setAlwaysPrerender(toggle: boolean);
        setAsMission(p0: boolean, byThisScript: boolean);
        getRotation(rotationOrder: number): mp.Vector3;
        isAttachedToAnyPed(): boolean;
        isAttached(): boolean;
        isInZone(zone: string): boolean;
        attachToPhysically(entity: mp.game.entity | object, boneIndex1: number, boneIndex2: number, xPos1: number, yPos1: number, zPos1: number, xPos2: number, yPos2: number, zPos2: number, xRot: number, yRot: number, zRot: number, breakForce: number, fixedRot: boolean, p14: boolean, collision: boolean, p16: boolean, p17: number);
        applyForceTo(forceType: number, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, boneIndex: number, isRel: number, p9: boolean, highForce: boolean, p11: boolean, p12: boolean);
        playSynchronizedAnim(syncedScene: number, animation: string, propName: string, p3: number, p4: number, p5: object, p6: number): boolean;
        hasBeenDamagedBy(entity: mp.game.entity | object, p1: boolean): boolean;
        isCollisonDisabled(): boolean; // TODO: Is this correct?
        isAttachedToAnyObject(): boolean;
        isInWater(): boolean;
        isWaitingForWorldCollision(): boolean;
        setCanBeTargetedWithoutLos(toggle: boolean);
        getPitch(): number;
        getSpeed(): number;
        isVisibleToScript(): boolean;
        getObjectIndexFromIndex(): mp.game.object | object;
        doesHavePhysics(): boolean;
        doesBelongToThisScript(p0: boolean): boolean;
        hasBeenDamagedByAnyVehicle(): boolean;
        setCanBeDamagedByRelationshipGroup(p0: boolean, p1: object);
        isOccluded(): boolean;
        getCollisionNormalOfLastHitFor(): mp.Vector3;
        isOnScreen(): boolean;
        getSubmergedLevel(): number;
        getHeading(): number;
        hasCollisionLoadedAround(): boolean;
        setIsTargetPriority(p0: boolean, p1: number);
        setVisible(toggle: boolean, p1: boolean);
        hasAnimEventFired(actionHash: string | number): boolean;
        getMatrix(rightVector: mp.Vector3, forwardVector: mp.Vector3, upVector: mp.Vector3, position: mp.Vector3): mp.game.entity.vectorMatrix;
        getHealth(): number;
        isAttachedTo(to: mp.game.entity | object): boolean;
        processAttachments();
        getPopulationType(): number;
        setProofs(bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean, p5: boolean, p5: boolean, drownProof: boolean);
        getBoneIndexByName(boneName: mp.game.entity.vehicleBones | string): number;
        hasClearLosTo(entity: mp.game.entity | object, traceType: number): boolean;
    }
}

declare module mp.game.entity {
    enum entityType {
        none = 0,
        ped = 1,
        vehicle = 2,
        object = 3
    }

    class vectorMatrix {
        rightVector: mp.Vector3;
        forwardVector: mp.Vector3;
        upVector: mp.Vector3;
        position: mp.Vector3;
    }

    enum vehicleBones {
        chassis = 'chassis',
        windscreen = 'windscreen',
        seat_pside_r = 'seat_pside_r',
        seat_dside_r = 'seat_dside_r',
        bodyshell = 'bodyshell',
        suspension_lm = 'suspension_lm',
        suspension_lr = 'suspension_lr',
        platelight = 'platelight',
        attach_female = 'attach_female',
        attach_male = 'attach_male',
        bonnet = 'bonnet',
        boot = 'boot',
        chassis_dummy = 'chassis_dummy',	//Center of the dummy
        chassis_Control = 'chassis_Control',	//Not found yet
        door_dside_f = 'door_dside_f',	//Door left, front
        door_dside_r = 'door_dside_r',	//Door left, back
        door_pside_f = 'door_pside_f',	//Door right, front
        door_pside_r = 'door_pside_r',	//Door right, back
        Gun_GripR = 'Gun_GripR',
        windscreen_f = 'windscreen_f',
        platelight = 'platelight',	//Position where the light above the numberplate is located
        VFX_Emitter = 'VFX_Emitter',
        window_lf = 'window_lf',	//Window left, front
        window_lr = 'window_lr',	//Window left, back
        window_rf = 'window_rf',	//Window right, front
        window_rr = 'window_rr',	//Window right, back
        engine = 'engine',	//Position of the engine
        gun_ammo = 'gun_ammo',
        ROPE_ATTATCH = 'ROPE_ATTATCH',	//Not misspelled. In script 'finale_heist2b.c4'.
        wheel_lf = 'wheel_lf',	//Wheel left, front
        wheel_lr = 'wheel_lr',	//Wheel left, back
        wheel_rf = 'wheel_rf',	//Wheel right, front
        wheel_rr = 'wheel_rr',	//Wheel right, back
        exhaust = 'exhaust',	//Exhaust. shows only the position of the stock-exhaust
        overheat = 'overheat',	//A position on the engine(not exactly sure, how to name it)
        misc_e = 'misc_e',	//Not a car-bone.
        seat_dside_f = 'seat_dside_f',	//Driver-seat
        seat_pside_f = 'seat_pside_f',	//Seat next to driver
        Gun_Nuzzle = 'Gun_Nuzzle',
        seat_r = 'seat_r'
    }
}