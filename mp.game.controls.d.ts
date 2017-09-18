/// <reference path="index.d.ts" />

declare module mp.game {
    class controls {
        static getControlActionName(inputGroup: mp.game.controls.inputGroup, control: number, p2: boolean): string;
        static getDisabledControlNormal(inputGroup: mp.game.controls.inputGroup, control: number): number;
        static isInputJustDisabled(inputGroup: mp.game.controls.inputGroup): boolean;
        static isControlEnabled(inputGroup: mp.game.controls.inputGroup, control: number): boolean;
        static isDisabledControlJustReleased(inputGroup: mp.game.controls.inputGroup, control: number): boolean;
        static enableControlAction(inputGroup: mp.game.controls.inputGroup, control: number, enable: boolean);
        static stopPadShake(p0: object);
        static setPadShake(p0: number, duration: number, frequency: number);
        static isControlJustReleased(inputGroup: mp.game.controls.inputGroup, control: number): boolean;
        static isControlJustPressed(inputGroup: mp.game.controls.inputGroup, control: number): boolean;
        static disableAllControlActions(inputGroup: mp.game.controls.inputGroup);
        static isControlReleased(inputGroup: mp.game.controls.inputGroup, control: number): boolean;
        static setPlayerpadShakesWhenControllerDisabled(toggle: boolean);
        static isDisabledControlJustPressed(inputGroup: mp.game.controls.inputGroup, control: number): boolean;
        static isInputDisabled(inputGroup: mp.game.controls.inputGroup): boolean;
        static enableAllControlActions(inputGroup: mp.game.controls.inputGroup);
        static getControlValue(inputGroup: mp.game.controls.inputGroup, control: number): number;
        static isControlPressed(inputGroup: mp.game.controls.inputGroup, control: number): boolean;
        static setControlNormal(inputGroup: mp.game.controls.inputGroup, control: number, amount: number): boolean;
        static getControlNormal(inputGroup: mp.game.controls.inputGroup, control: number): number;
        static setInputExclusive(inputGroup: mp.game.controls.inputGroup, control: number);
        static disableControlAction(inputGroup: mp.game.controls.inputGroup, control: number, disable: boolean);
    }
}

declare module mp.game.controls {
    enum inputGroup {
        move = 0,
        look = 1,
        wheel = 2,
        cellphoneNavigate = 3,
        cellphoneNavigateUd = 4,
        cellphoneNavigateLr = 5,
        frontendDpadAll = 6,
        frondentDpadUd = 7,
        frontendDpadLr = 8,
        frontendLstickAll = 9,
        frontendRstickAll = 10,
        frontendGenericUd = 11,
        frontendGenericLr = 12,
        frontendGenericAll = 13,
        frontendBumbers = 14,
        frontendTriggers = 15,
        frontendSticks = 16,
        scriptDpadAll = 17,
        scriptDpadUd = 18,
        scriptDpadLr = 19,
        scriptLstickAll = 20,
        scriptRstickAll = 21,
        scriptBumbers = 22,
        scriptTriggers = 23,
        weaponWheelCycle = 24,
        fly = 25,
        sub = 26,
        vehMoveAll = 27,
        cursor = 28,
        cursorScroll = 29,
        sniperZoomSecondary = 30,
        vehHydraulicsControl = 31,
        max = 32,
        invalid = 33
    }
}