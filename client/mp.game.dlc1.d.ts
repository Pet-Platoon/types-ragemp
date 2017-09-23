/// <reference path="../index.d.ts" />

declare module mp.game {
    class dlc1 {
        static getPropFromOutfit(outfit: object, slot: number, item: object): boolean;
        static initShopPedComponent(outComponent: number): number;
        static getShopPedQueryComponent(componentId: number, outComponent: number): number;
        static getDlcVehicleData(dlcVehicleIndex: number, outData: object): boolean;
        static getNumDlcWeaponComponents(dlcWeaponIndex: number): number;
        static getDlcVehicleFlags(p0: number): number;
        static getForcedComponent(componentHash: string | number, componentId: number, p2: object, p3: object, p4: object);
        static getDlcWeaponComponentData(p0: object, p1: object, componentDataPtr: mp.game.dlc1.dlcComponentData | object): boolean;
        static getShopPedQueryOutput(p0: object, outfit: mp.game.dlc1.outfit | object);
        static getVariantComponent(componentHash: string | number, componentId: number, p2: object, p3: object, p4: object);
        static getShopPedComponent(p0: object, p1: object);
        static getDlcWeaponData(dlcWeaponIndex: number, outData: mp.game.dlc1.dlcWeaponData | object): boolean;
        static getNumPropsFromOutfit(p0: mp.game.dlc1.characterType | number, p1: number, p2: number, p3: boolean, p4: number, componentId: number): number;
        static getShopPedOutfit(p0: object, p1: object);
        static getNumForcedComponents(componentHash: string | number): number;
        static isDlcDataEmpty(dlcData: number): boolean;
        static getShopPedQueryProp(p0: object, p1: object);
        static initShopPedProp(outProp: number): number;
        static getDlcVehicleModel(dlcVehicleIndex: number): string | number;
    }
}

declare module mp.game.dlc1 {
    enum characterType {
        michael = 0,
        franklin = 1,
        trevor = 2,
        freemodeMale = 3,
        freemodeFemale = 4
    }

    class dlcWeaponData {
        emptyCheck: number;
        padding1: number;
        weaponHash: number;
        padding2: number;
        unk: number;
        padding3: number;
        weaponCost: number;
        padding4: number;
        ammoCost: number;
        padding5: number;
        ammoType: number;
        padding6: number;
        defaultClipSize: number;
        padding7: number;
        nameLabel: string;
        descLabel: string;
        desc2Label: string;
        upperCaseNameLabel: string;
    }

    class outfit {
        mask: number;
        torso: number;
        pants: number;
        parachute: number;
        shoes: number;
        misc1: number;
        tops1: number;
        armour: number;
        crew: number;
        tops2: number;
        hat: number;
        glasses: number;
        earpiece: number;
        maskTexture: number;
        torsoTexture: number;
        pantsTexture: number;
        parachuteTexture: number;
        shoesTexture: number;
        misc1Texture: number;
        tops1Texture: number;
        armourTexture: number;
        crewTexture: number;
        tops2Texture: number;
        hatTexture: number;
        glassesTexture: number;
        earpiceTexture: number;
    }

    class dlcComponentData {
        attachBone: number;
        padding1: number;
        bActiveByDefault: number;
        padding2: number;
        unk: number;
        padding3: number;
        componentHash: number;
        padding4: number;
        unk2: number;
        padding5: number;
        componentCost: number;
        padding6: number;
        nameLabel: string;
        descLabel: string;
    }
}