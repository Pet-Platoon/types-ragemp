/// <reference path="../index.d.ts" />

declare module mp.game {
    class ped extends mp.game.entity {
        static isAValidLipstickColor(colorId: number): boolean;
        static isAnyPedNearPoint(x: number, y: number, z: number, radius: number): boolean;
        static setCreateRandomCops(toggle: boolean);
        static removeActionModeAsset(asset: string);
        static setScenarioPedsToBeReturnedByNextCommand(value: boolean);
        static isCopPedInArea3d(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
        static setAiWeaponDamageModifier(value: number);
        static addScenarioBlockingArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean, p8: boolean, p9: boolean);
        static setGroupFormationSpacing(groupId: number, p1: number, p2: number, p3: number);
        static isSynchronizedSceneRunning(sceneId: number): boolean;
        static attachSynchronizedSceneToEntity(sceneId: number, entity: mp.game.entity | object, boneIndexId: number);
        static setScenarioPedsSpawnInSphereArea(p0: object, p1: object, p2: object, p3: object, p4: object);
        static requestActionModeAsset(asset: string);
        static requestStealthModeAsset(asset: string);
        static removeScenarioBlockingArea(p0: object, p1: boolean);
        static canCreateRandomPed(unk: boolean): boolean;
        static setGroupSeparationRange(groundHandle: number, separationRange: number);
        static createNmMessage(startImmediately: boolean, messageId: number);
        static setCreateRandomCopsOnScenarios(toggle: boolean);
        static getAnimInitialOffsetRotation(animDict: string, animName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p8: number, p9: number): mp.Vector3;
        static setScriptedConversionCoordThisFrame(x: number, y: number, z: number);
        static getPedAsGroupMember(groupId: number, memberNumber: number): mp.game.ped;
        static getPedAsGroupLeader(groupId: number): mp.game.ped;
        static clearRelationshipBetweenGroups(relationship: mp.game.ped.groupRelationship, group1: string | number, group2: string | number);
        static getNumParentPedsOfType(type: mp.game.ped.faceType | number): number;
        static isAValidBlushColor(colorId: number): boolean;
        static isSynchronizedSceneLooped(sceneId: number): boolean;
        static isPedRespondingToEvent(p0: object, p1: object): boolean;
        static resetGroupFormationDefaultSpacing(groupHandle: number);
        static setAiMeleeWeaponDamageModifier(modifier: number);
        static getFirstParentIdForPedType(type: mp.game.ped.faceType): number;
        static setSynchronizedSceneOrigin(sceneId: number, x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p7: boolean);
        static setPedAlternateWalkAnim(p0: object, p1: object, p2: object, p3: number, p4: boolean);
        static detachSynchronizedScene(sceneId: number);
        static isPedheadshotReady(handle: number): boolean;
        static setSynchronizedScenePhase(sceneId: number, phase: number);
        static setScenarioPedDensityMultiplierThisFrame(p0: number, p1: number);
        static doesGroupExist(groupId: number): boolean;
        static hasPedReceivedEvent(p0: object, p1: object): boolean;
        static getRandomPedAtCoord(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, pedType: mp.game.ped.type): mp.game.ped;
        static clearPedAlternateWalkAnim(p0: object, p1: number);
        static setCreateRandomCopsNotOnScenarios(toggle: boolean);
        static createSynchronizedScene(x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p6: number): number;
        static getGroupSize(groupId: number, unknown: object, sizeInMembers: number);
        static removeGroup(groupId: number);
        static createGroup(unused: number): number;
        static removeStealthModeAsset(asset: string);
        static setPedDensityMultiplierThisFrame(multiplier: number);
        static getRelationshipBetweenGroups(group1: string | number, group2: string | number): mp.game.ped.groupRelationship;
        static getTattooZone(collection: string | number, overlay: string | number): mp.game.ped.tattooZoneData;
        static isPedheadshotValid(handle: number): number;
        static isAnyPedShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): boolean;
        static createRandomPed(posX: number, posY: number, posZ: number): mp.game.ped;
        static removeRelationshipGroup(groupHash: string | number);
        static setSynchronizedSceneRate(sceneId: number, rate: number);
        static getAnimInitialOffsetPosition(animDict: string, animName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p8: number, p9: number): mp.Vector3;
        static setRelationshipBetweenGroups(relationship: mp.game.ped.groupRelationship, group1: string | number, group2: string | number);
        static getClosestPed(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, outPed: mp.game.ped, p7: boolean, p8: boolean, pedType: mp.game.ped.type): mp.game.ped;
        static disposeSynchronizedScene(scene: number);
        static setGroupFormation(groupId: number, formationType: number);
        static getNumHeadOverlayValues(overlayId: number): number;
        static createPed(pedType: mp.game.ped.type, modelHash: string | number, x: number, y: number, z: number, heading: number, networkHandle: boolean, pedHandle: boolean): mp.game.ped;
        static setPedToRagdollWithFall(p0: object, p1: object, p2: object, p3: object, p4: object, p5: object, p6: object, p7: object, p8: object, p9: object, p10: object, p11: object, p12: object, p13: object): boolean;
        static getSynchronizedSceneRate(sceneId: number): number;
        static setSynchronizedSceneLooped(sceneId: number, toggle: boolean);
        static getPeadheadshotTxdString(handle: number): string;
        static isAValidHairColor(colorId: number): boolean;
        static getSynchronizedScenePhase(sceneId: number): number;
        static hasActionModeAssetLoaded(asset: string): boolean;
        static setPedReserveParachuteTintIndex(p0: object, p1: object);
        static hasStealthModeAssetLoaded(asset: string): boolean;
        static setPedNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number);
        static addRelationshipGroup(name: string, groupHash: string | number): string | number;
        static setTimeExclusiveDisplayTexture(p0: object, p1: boolean);
    }
}

declare module mp.game.ped {
    enum tattooZoneData {
        torso = 0,
        head = 1,
        leftArm = 2,
        rightArm = 3,
        leftLeg = 4,
        rightLeg = 5,
        unknown = 6,
        none = 7
    }

    enum type {
        any = -1,
        player = 1,
        male = 4,
        female = 5,
        cop = 6,
        human = 26,
        swat = 27,
        animal = 28,
        army = 29
    }

    enum faceType {
        maleNonDlc = 0,
        femaleNonDlc = 1,
        maleDlc = 2,
        femaleDlc = 3
    }

    enum groupRelationship {
        companion = 0,
        respect = 1,
        like = 2,
        neutral = 3,
        dislike = 4,
        hate = 5,
        pedestrian = 255
    }
}