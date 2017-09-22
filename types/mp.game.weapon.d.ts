/// <reference path="../index.d.ts" />

declare module mp.game {
    class weapon {
        static getWeaponComponentTypeModel(componentHash: string): string;
        static getWeaponComponentTypeModel(componentHash: string): number;
        static getWeaponComponentTypeModel(componentHash: number): string;
        static getWeaponComponentTypeModel(componentHash: number): number;
        static giveWeaponComponentToWeaponObject(weaponObject: mp.game.object, addonHash: string);
        static giveWeaponComponentToWeaponObject(weaponObject: mp.game.object, addonHash: number);
        static hasWeaponAssetLoaded(weaponHash: string): boolean;
        static hasWeaponAssetLoaded(weaponHash: number): boolean;
        static getWeaponDamageType(weaponHash: string): mp.game.weapon.damageType;
        static getWeaponDamageType(weaponHash: number): mp.game.weapon.damageType;
        static getWeapontypeSlot(weaponHash: string): string;
        static getWeapontypeSlot(weaponHash: string): number;
        static getWeapontypeSlot(weaponHash: number): string;
        static getWeapontypeSlot(weaponHash: number): number;
        static requestWeaponHighDetailModel(weaponObject: mp.game.object);
        static requestWeaponHighDetailModel(weaponObject: object);
        static requestWeaponAsset(weaponHash: string, p1: number, p2: number);
        static requestWeaponAsset(weaponHash: number, p1: number, p2: number);
        static getWeaponClipSize(weaponHash: string): number;
        static getWeaponClipSize(weaponHash: number): number;
        static doesWeaponTakeWeaponComponent(weaponHash: string, componentHash: string): boolean;
        static doesWeaponTakeWeaponComponent(weaponHash: string, componentHash: number): boolean;
        static doesWeaponTakeWeaponComponent(weaponHash: number, componentHash: string): boolean;
        static doesWeaponTakeWeaponComponent(weaponHash: number, componentHash: number): boolean;
        static getWeaponTintCount(weaponHash: string): number;
        static getWeaponTintCount(weaponHash: number): number;
        static hasVehicleGotProjectileAttached(driver: mp.game.ped, vehicle: mp.game.vehicle, weapon: number | string, p3: any): boolean;
        static hasWeaponGotWeaponComponent(weapon: mp.game.object, addonHash: string): boolean;
        static hasWeaponGotWeaponComponent(weapon: mp.game.object, addonHash: number): boolean;
        static isWeaponValid(weaponHash: string): boolean;
        static isWeaponValid(weaponHash: number): boolean;
        static createWeaponObject(weaponHash: string, ammoCount: number, x: number, y: number, z: number, showWorldModel: boolean, heading: number, p7: any): mp.game.object;
        static createWeaponObject(weaponHash: number, ammoCount: number, x: number, y: number, z: number, showWorldModel: boolean, heading: number, p7: any): mp.game.object;
        static setPedAmmoToDrop(p0: any, p1: any);
        static removeWeaponAsset(weaponHash: string);
        static removeWeaponAsset(weaponHash: number);
        static giveWeaponObjectToPed(weaponObject: mp.game.object, ped: mp.game.ped);
        static getWeaponComponentHudStats(p0: any, p1: any): boolean;
        static canUseWeaponOnParachute(weaponHash: string): boolean;
        static canUseWeaponOnParachute(weaponHash: number): boolean;
        static getWeapontypeGroup(weaponHash: string): string;
        static getWeapontypeGroup(weaponHash: string): number;
        static getWeapontypeGroup(weaponHash: boolean): string;
        static getWeapontypeGroup(weaponHash: boolean): number;
        static enableLaserSightRendering(toggle: boolean);
        static getWeaponObjectTintIndex(weapon: mp.game.entity): number;
        static setFlashLightFadeDistance(distance: number);
        static getWeaponHudStats(weaponHash: string, data: mp.game.weapon.weaponHudStatsData): boolean;
        static getWeaponHudStats(weaponHash: string, data: object): boolean;
        static getWeaponHudStats(weaponHash: number, data: mp.game.weapon.weaponHudStatsData): boolean;
        static getWeaponHudStats(weaponHash: number, data: object): boolean;
        static getWeapontypeModel(weaponHash: string): string;
        static getWeapontypeModel(weaponHash: string): number;
        static getWeapontypeModel(weaponHash: number): string;
        static getWeapontypeModel(weaponHash: number): number;
        static removeWeaponComponentFromWeaponObject(p0: any, p1: any);
        static setWeaponObjectTintIndex(weapon: mp.game.entity, tint: number);
        static removeAllProjectilesOfType(weaponhash: string, p1: boolean);
        static removeAllProjectilesOfType(weaponhash: number, p1: boolean);
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