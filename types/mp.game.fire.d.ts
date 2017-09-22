/// <reference path="../index.d.ts" />

declare module mp.game {
    class fire {
        static stopFireInRange(x: number, y: number, z: number, radius: number);
        static getPedInsideExplosionArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number): mp.game.entity;
        static isExplosionInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
        static getClosestFirePos(outPosition: mp.Vector3, x: number, y: number, z: number): mp.Vector3;
        static addSpecfxExplosion(x: number, y: number, z: number, explosionType: number, explosionFx: string, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number);
        static addSpecfxExplosion(x: number, y: number, z: number, explosionType: number, explosionFx: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number);
        static getNumberOfFiresInRange(x: number, y: number, z: number, radius: number): number;
        static startScriptFire(x: number, y: number, z: number, maxChildren: number, isGasFire: boolean): number;
        static removeScriptFire(fireHandle: number);
        static isExplosionInAngledArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, angle: number): boolean;
        static isExplosionInSphere(explosionType: number, x: number, y: number, z: number, radius: number): boolean;

    }
}

declare module mp.game.fire {
    enum explosionTypes {
        grenade,
        grenadeLauncher,
        stickybomb,
        molotov,
        rocket,
        tankshell,
        hiOctance,
        car,
        plane,
        petrolPump,
        bike,
        dirSteam,
        dirFlame,
        dirWaterHydrant,
        dirGasCanister,
        EXPLOSION_BOAT,
        EXPLOSION_SHIP_DESTROY,
        EXPLOSION_TRUCK,
        EXPLOSION_BULLET,
        EXPLOSION_SMOKEGRENADELAUNCHER,
        EXPLOSION_SMOKEGRENADE,
        EXPLOSION_BZGAS,
        EXPLOSION_FLARE,
        EXPLOSION_GAS_CANISTER,
        EXPLOSION_EXTINGUISHER,
        EXPLOSION_PROGRAMMABLEAR,
        EXPLOSION_TRAIN,
        EXPLOSION_BARREL,
        EXPLOSION_PROPANE,
        EXPLOSION_BLIMP,
        EXPLOSION_DIR_FLAME_EXPLODE,
        EXPLOSION_TANKER,
        EXPLOSION_PLANE_ROCKET,
        EXPLOSION_VEHICLE_BULLET,
        EXPLOSION_GAS_TANK,
        EXPLOSION_BIRD_CRAP
    }
}