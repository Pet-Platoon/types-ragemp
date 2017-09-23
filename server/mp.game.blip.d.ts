/// <reference path="../index.d.ts" />

declare module mp.game {
    class blip {
        setColour(blip: mp.game.blip, color: number);
        setNameToPlayerName(blip: mp.game.blip, player: mp.game.player);
        setShowCone(blip: mp.game.blip, toggle: boolean);
        setSecondaryColour(blip: mp.game.blip, r: number, g: number, b: number);
        getNextInfoId(blip: mp.game.blip): mp.game.blip;
        getFirstInfoId(blip: mp.game.blip): mp.game.blip;
        getInfoIdDisplay(blip: mp.game.blip): number;
        getSprite(blip: mp.game.blip): number;
        setCategory(blip: mp.game.blip, index: mp.game.blip.category | number);
        setAsMissionCreator(blip: mp.game.blip, toggle: boolean);
        isMissionCreator(blip: mp.game.blip): boolean;
        setFade(blip: mp.game.blip, opacity: number, duration: number);
        setFlashesAlternate(blip: mp.game.blip, toggle: boolean);
        setAlpha(blip: mp.game.blip, alpha: number);
        getInfoIdEntityIndex(blip: mp.game.blip): mp.game.entity | object;
        setRoute(blip: mp.game.blip, enabled: boolean);
        hideNumberOn(blip: mp.game.blip);
        getCoords(blip: mp.game.blip): mp.Vector3;
        setShowHeadingIndicator(blip: mp.game.blip, toggle: boolean);
        setAsFriendly(blip: mp.game.blip, toggle: boolean);
        getHudColour(blip: mp.game.blip): number;
        pulse(blip: mp.game.blip);
        addTextComponentSubstringName(blip: mp.game.blip);
        setRouteColour(blip: mp.game.blip, colour: number);
        setDisplay(blip: mp.game.blip, displayId: number);
        getAlpha(blip: mp.game.blip): number;
        getInfoIdPickupIndex(blip: mp.game.blip): mp.game.pickup;
        showNumberOn(blip: mp.game.blip, number: number);
        isFlashing(blip: mp.game.blip): boolean;
        doesExist(blip: mp.game.blip): boolean;
        setFlashInterval(blip: mp.game.blip, p1: object);
        setCoords(blip: mp.game.blip, posX: number, posY: number, posZ: number);
        setPriority(blip: mp.game.blip, priority: number);
        setFlashes(blip: mp.game.blip, toggle: boolean);
        setBright(blip: mp.game.blip, toggle: boolean);
        endTextCommandSetName(blip: mp.game.blip);
        setAsShortRange(blip: mp.game.blip, toggle: boolean);
        getInfoIdType(blip: mp.game.blip): number;
        setScale(blip: mp.game.blip, scale: number);
        setFlashTimer(blip: mp.game.blip, duration: number);
        isShortRange(blip: mp.game.blip): boolean;
        getColour(blip: mp.game.blip): number;
        setSprite(blip: mp.game.blip, spriteId: number);
        setHighDetail(blip: mp.game.blip, toggle: boolean);
        isOnMinimap(blip: mp.game.blip): boolean;
        setNameFromTextFile(blip: mp.game.blip, gxtEntry: string);
        setRotation(blip: mp.game.blip, rotation: number);
    }
}

declare module mp.game.blip {
    enum category {
        noTextOrDistance = 1,
        text = 2,
        noDistance = 3
    }
}