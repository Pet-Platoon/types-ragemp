/// <reference path="../index.d.ts" />

declare module mp.game {
    class weapon {
        static getWeaponComponentTypeModel(componentHash: string | number): string | number;
        static giveWeaponComponentToWeaponObject(weaponObject: mp.game.object, addonHash: string | number);
        static hasWeaponAssetLoaded(weaponHash: string | number): boolean;
        static getWeaponDamageType(weaponHash: string | number): mp.game.weapon.damageType;
        static getWeapontypeSlot(weaponHash: string | number): string | number;
        static requestWeaponHighDetailModel(weaponObject: mp.game.object | object);
        static requestWeaponAsset(weaponHash: string | number, p1: number, p2: number);
        static getWeaponClipSize(weaponHash: string | number): number;
        static doesWeaponTakeWeaponComponent(weaponHash: string | number, componentHash: string | number): boolean;
        static getWeaponTintCount(weaponHash: string | number): number;
        static hasVehicleGotProjectileAttached(driver: mp.game.ped, vehicle: mp.game.vehicle, weapon: number | string, p3: any): boolean;
        static hasWeaponGotWeaponComponent(weapon: mp.game.object, addonHash: string | number): boolean;
        static isWeaponValid(weaponHash: string | number): boolean;
        static createWeaponObject(weaponHash: string | number, ammoCount: number, x: number, y: number, z: number, showWorldModel: boolean, heading: number, p7: any): mp.game.object;
        static setPedAmmoToDrop(p0: any, p1: any);
        static removeWeaponAsset(weaponHash: string | number);
        static giveWeaponObjectToPed(weaponObject: mp.game.object, ped: mp.game.ped);
        static getWeaponComponentHudStats(p0: any, p1: any): boolean;
        static canUseWeaponOnParachute(weaponHash: string | number): boolean;
        static getWeapontypeGroup(weaponHash: string | number): string | number;
        static enableLaserSightRendering(toggle: boolean);
        static getWeaponObjectTintIndex(weapon: mp.game.entity): number;
        static setFlashLightFadeDistance(distance: number);
        static getWeaponHudStats(weaponHash: string | number, data: mp.game.weapon.weaponHudStatsData | object): boolean;
        static getWeapontypeModel(weaponHash: string | number): string | number;
        static removeWeaponComponentFromWeaponObject(p0: any, p1: any);
        static setWeaponObjectTintIndex(weapon: mp.game.entity, tint: number);
        static removeAllProjectilesOfType(weaponhash: string | number, p1: boolean);
    }
}

declare module mp.game.weapon {
    class weaponHudStatsData {
        hudDamage: number;
        hudSpeed: number;
        hudCapacity: number;
        hudAccuracy: number;
        hudRange: number;
    }

    enum damageType {
        unknown = 0,
        noDamage = 1,
        melee = 2,
        bullet = 3,
        forceRagdollFall = 4,
        explosive = 5,
        fire = 6,
        fall = 8,
        electric = 10,
        barbedWire = 11,
        extinguisher = 12,
        gas = 13,
        waterCannon = 14
    }
}