/// <reference path="index.d.ts" />

declare module mp.game {
    class mobile {
        static getMobilePhoneRotation(rotation: mp.Vector3, p1: object): mp.Vector3;
        static setPhoneLean(toggle: boolean);
        static getMobilePhonePosition(position: mp.Vector3): mp.Vector3;
        static setMobilePhonePosition(posX: number, posY: number, posZ: number);
        static moveFinger(direction: number);
        static createMobilePhone(phoneType: mp.game.mobile.phoneTypes);
        static getMobilePhoneRenderId(renderId: number): number;
        static setMobilePhoneRotation(rotX: number, rotY: number, rotZ: number, p3: object);
        static setMobilePhoneScale(scale: number);
        static scriptIsMovingMobilePhoneOffscreen(toggle: boolean);
        static cellCamActivate(p0: boolean, p1: boolean);
    }
}
declare module mp.game.mobile {
    enum phoneTypes {
        michaelsPhone = 0,
        trevorsPhone = 1,
        franklinsPhone = 2,
        prologuePhone = 4
    }
}