/// <reference path="../index.d.ts" />

declare module mp.game {
    class blip {
        static setColour(blip: mp.game.blip, color: number);
        static setNameToPlayerName(blip: mp.game.blip, player: object); // TODO: Change player to to PlayerHandle;
        static setShowCone(blip: mp.game.blip, toggle: boolean);
        static setSecondaryColour(blip: mp.game.blip, r: number, g: number, b: number);
        static getNextInfoId(blip: mp.game.blip): mp.game.blip;
        static getFirstInfoId(blip: mp.game.blip): mp.game.blip;
        static getInfoIdDisplay(blip: mp.game.blip): number;
        static getSprite(blip: mp.game.blip): number;
        static setCategory(blip: mp.game.blip, index: mp.game.blip.category | number);
        static setAsMissionCreator(blip: mp.game.blip, toggle: boolean);
        static isMissionCreator(blip: mp.game.blip): boolean;
        static setFade(blip: mp.game.blip, opacity: number, duration: number);
        static setFlashesAlternate(blip: mp.game.blip, toggle: boolean);
        static setAlpha(blip: mp.game.blip, alpha: number);
        static getInfoIdEntityIndex(blip: mp.game.blip): mp.game.entity | object;
        static setRoute(blip: mp.game.blip, enabled: boolean);
        static hideNumberOn(blip: mp.game.blip);
        static getCoords(blip: mp.game.blip): mp.Vector3;
        static setShowHeadingIndicator(blip: mp.game.blip, toggle: boolean);
        static setAsFriendly(blip: mp.game.blip, toggle: boolean);
        static getHudColour(blip: mp.game.blip): number;
        static pulse(blip: mp.game.blip);
        static addTextComponentSubstringName(blip: mp.game.blip);
        static setRouteColour(blip: mp.game.blip, colour: number);
        static setDisplay(blip: mp.game.blip, displayId: number);
        static getAlpha(blip: mp.game.blip): number;
        static getInfoIdPickupIndex(blip: mp.game.blip): mp.game.pickup;
        static showNumberOn(blip: mp.game.blip, number: number);
        static isFlashing(blip: mp.game.blip): boolean;
        static doesExist(blip: mp.game.blip): boolean;
        static setFlashInterval(blip: mp.game.blip, p1: object);
        static setCoords(blip: mp.game.blip, posX: number, posY: number, posZ: number);
        static setPriority(blip: mp.game.blip, priority: number);
        static setFlashes(blip: mp.game.blip, toggle: boolean);
        static setBright(blip: mp.game.blip, toggle: boolean);
        static endTextCommandSetName(blip: mp.game.blip);
        static setAsShortRange(blip: mp.game.blip, toggle: boolean);
        static getInfoIdType(blip: mp.game.blip): number;
        static setScale(blip: mp.game.blip, scale: number);
        static setFlashTimer(blip: mp.game.blip, duration: number);
        static isShortRange(blip: mp.game.blip): boolean;
        static getColour(blip: mp.game.blip): number;
        static setSprite(blip: mp.game.blip, spriteId: number);
        static setHighDetail(blip: mp.game.blip, toggle: boolean);
        static isOnMinimap(blip: mp.game.blip): boolean;
        static setNameFromTextFile(blip: mp.game.blip, gxtEntry: string);
        static setRotation(blip: mp.game.blip, rotation: number);
    }
}

declare module mp.game.blip {
    enum category {
        noTextOrDistance = 1,
        text = 2,
        noDistance = 3
    }
}