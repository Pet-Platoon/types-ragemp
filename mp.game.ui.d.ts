/// <reference path="index.d.ts" />

declare module mp.game {
    class ui {
        static hasAdditionalTextLoaded(slot: number): boolean;
        static flashAbilityBar(p0: object);
        static setTextProportional(p0: boolean);
        static addTextComponentInteger(value: number);
        static setPlayerCashChange(cash: number, bank: number);
        static setTextScale(sizex: number, sizey: number);
        static setRadarZoom(zoomLevel: number);
        static showHudComponentThisFrame(id: number);
        static addTextComponentSubstringCash(cashAmount: number, p1: boolean);
        static restartFrontendMenu(menuHash: number | string, p1: number);
        static addTextComponentSubstringTime(timestamp: number, flags: number);
        static isNamedRendertargetLinked(hash: number | string): boolean;
        static lockMinimapPosition(x: number, y: number);
        static getTextSubstring(text: string, position: number, length: number): string;
        static addTextComponentSubstringLocalized(gxtEntryHash: number | string);
        static setNotificationFlashColor(red: number, green: number, blue: number, alpha: number);
        static keyHudColour(p0: boolean, p1: object);
        static getNamedRendertargetRenderId(p0: string): object;
        static doesTextBlockExist(gxt: string): boolean;
        static setNotificationMessage(picName1: string, picName2: string, flash: boolean, iconType: mp.game.ui.iconTypes, sender: string, subject: string): number;
        static setTextChatUnk(p0: boolean);
        static setNotificationTextEntry(type: string);
        static getHudComponentPosition(p0: object): number;
        static setRadarBigmapEnabled(toggleBigMap: boolean, showFullMap: boolean);
        static displayHelpTextFromStringLabel(p0: object, loop: boolean, beep: boolean, shape: number);
        static setTextEntry(text: string);
        static displayAreaName(toggle: boolean);
        static lockMinimapAngle(angle: number);
        static clearAdditionalText(p0: number, p1: boolean);
        static drawNotification(blink: boolean, p1: boolean): number;
        static setGpsFlashes(toggle: boolean);
        static drawNotification3(blink: boolean, p1: boolean): number;
        static hideSpecialAbilityLockonOperation(p0: object, p1: boolean);
        static setTextEdge(p0: number, r: number, g: number, b: number, a: number);
        static drawNotification2(blink: boolean, p1: boolean): number;
        static resetHudComponentValues(id: number);
        static setTextDropshadow(distance: number, r: number, g: number, b: number, a: number);
        static addBlipForRadius(posX: number, posY: number, posZ: number, radius: number): mp.game.blip;
        static enableDeathbloodSeethrough(p0: boolean);
        static setTextJustification(justifyType: mp.game.ui.justifyTypes);
        static hasHeadDisplayLoaded(headDisplayId: number): boolean;
        static clearFloatingHelp(p0: object, p1: boolean);
        static setTextGxtEntry(entry: string);
        static setNotificationMessageClanTag2(picName1: string, picName2: string, flash: boolean, iconType1: mp.game.ui.iconTypes, sender: string, subject: string, duration: number, clanTag: string, iconType2: mp.game.ui.iconTypes, p9: number): number;
        static setTextEntryForWidth(text: string);
        static registerNamedRendertarget(p0: string, p1: boolean): boolean;
        static setMinimapBlockWaypoint(toggle: boolean);
        static addTrevorRandomModifier(headDisplayId: number): boolean;
        static setRadarAsInteriorThisFrame(interior: number | string, x: number, y: number, z: number, p4: number);
        static addBlipForCoord(x: number, y: number, z: number): mp.game.blip;
        static objectDecalToggle(hash: number | string);
        static setGpsFlags(p0: number, p1: number);
        static setNotificationMessageClanTag(picName1: string, picName2: string, flash: boolean, iconType: mp.game.ui.iconTypes, sender: string, subject: string, duration: number, clanTag: string): number;
        static setTextRenderId(renderId: number);
        static setMissionName(p0: boolean, name: string);
        static requestAdditionalText2(gxt: string, slot: number);
        static addNextMessageToPreviousBriefs(p0: boolean);
        static setTextWrap(start: number, end: number);
        static setHeadDisplayFlag(headDisplayId: mp.game.ui.headDisplayFlag, sprite: number, toggle: boolean);
        static setTextFont(fontType: number);
        static hideHudComponentThisFrame(id: number);
        static toggleStealthRadar(toggle: boolean);
        static setTextRightJustify(toggle: boolean);
        static addTextComponentSubstringPlayerName(text: string);
        static isMinimapAreaRevealed(x: number, y: number, radius: number): boolean;
        static setWarningMessage3(entryHeader: string, entryLine1: string, instructionalKey: object, entryLine2: string, p4: object, p5: object, p6: object, p7: object, p8: object, p9: boolean);
        static requestAdditionalText(gxt: string, slot: number);
        static setFrontendActive(active: boolean);
        static setMinimapComponent(p0: number, p1: boolean, p2: number): object;
        static setPlayerBlipPositionThisFrame(x: number, y: number);
        static isNamedRendertargetRegistered(p0: string): boolean;
        static setWarningMessage(entryLine1: string, instructionalKey: number, entryLine2: string, p3: boolean, p4: object, p5: object, p6: object, background: boolean);
        static getLabelText(labelName: string): string;
        static getHudColour(hudIndex: number, r: number, g: number, b: number, a: number): mp.game.ui.hudColorData;
        static getLengthOfStringWithThisTextLabel(gxt: string): number;
        static setTextComponentFormat(inputType: string);
        static getTextScreenWidth(p0: boolean): number;
        static removeBlip(blip: mp.game.blip): mp.game.blip;
        static isStreamingAdditionalText(p0: number): boolean;
        static setCursorSprite(spriteId: number);
        static clearHelp(toggle: boolean);
        static setMinimapVisible(toggle: boolean);
        static addTextComponentSubstringWebsite(website: string);
        static displayHelpTextThisFrame(message: string, p1: boolean);
        static displayCash(toggle: boolean);
        static setAbilityBarValue(p0: number, p1: number);
        static drawSubtitleTimed(time: number, p1: boolean);
        static displayRadar(Toggle: boolean): object;
        static flashWantedDisplay(p0: boolean): object;
        static setTextLeading(p0: boolean);
        static displayAmmoThisFrame(display: boolean);
        static displayHud(toggle: boolean);
        static setHudComponentPosition(id: number, p1: number, p2: number);
        static setLoadingPromptTextEntry(string: string);
        static doesTextLabelExist(gxt: string): boolean;
        static hasThisAdditionalTextLoaded(gxt: string, slot: number): boolean;
        static getTextSubstringSafe(text: string, position: number, length: number, maxLength: number): string;
        static setTextEntry2(p0: string);
        static isHudComponentActive(id: mp.game.ui.hudComponentIds): boolean;
        static respondingAsTemp(p0: number);
        static showLoadingPrompt(busySpinnerType: number);
        static addBlipForPickup(pickup: mp.game.pickup): mp.game.blip;
        static removeNotification(notifactionId: number);
        static setTextColour(red:  number, green:  number, blue:  number, alpha:  number);
        static setTextCentre(align: boolean);
        static setWidescreenFormat(p0: object);
        static addTextComponentItemString(labelName: string);
        static setRadarZoomLevelThisFrame(zoomLevel: number);
        static drawText(x: number, y: number);
        static getTextSubstringSlice(text: string, startPosition: number, endPosition: number): string;
        static setHeadDisplayWanted(headDisplayId: number, wantedlvl: number);
        static clearThisPrint(p0:string);
        static getStreetNameFromHashKey(hash: number | string): string;
        static setMinimapAttitudeIndicatorLevel(altitude: number, p1: boolean);
        static getTextScaleHeight(size: number, font: number): number;
        static setWarningMessage2(entryHeader: string, entryLine1: string, instructionalKey: number, entryLine2: string, p4: boolean, p5: object, p6: object, p7: object, background: boolean);
        static isScriptedHudComponentActive(id: number): boolean;
        static setHeadDisplayString(headDisplayId: number, string: string);
        static setPauseMenuActive(toggle: boolean);
        static isPauseMenuActive(): boolean;
        static hideScriptedHudComponentThisFrame(id: number);
        static addTextComponentFloat(value: number, decimalPlaces: number);
        static releaseNamedRendertarget(p0: object): boolean;
        static showWeaponWheel(forcedShow: boolean);
        static activateFrontendMenu(menuhash: number | string, Toggle_Pause: boolean, p2: number);
        static setUseridsUihidden(p0: object, p1: object): boolean;
        static drawNotification4(blink: boolean, p1: boolean): number;
        static getLengthOfLiteralString(string: string): number;
        static setHudColour(hudIndex: number, r: number, g: number, b: number, a: number);
        static linkNamedRendertarget(hash: number | string);
        static setMinimapRevealed(toggle: boolean);
        static beginTextCommandSetBlipName(gxtentry: string);
        static getBlipInfoIdCoord(p0: number): mp.Vector3;
        static setMultiplayerHudCash(p0: number, p1: number);
        static setNewWaypoint(x: number, y: number);
    }
}
declare module mp.game.ui {
    class hudColorData {
        hudIndex: number;
        r: number;
        g: number;
        b: number;
        a: number;
    }
    enum iconTypes {
        chatBox = 1,
        email = 2,
        addFriendRequest = 3,
        nothing1 = 4,
        nothing2 = 5,
        nothing3 = 6,
        rightJumpingArrow = 7,
        rpIcon = 8,
        dollarIcon = 9
    }
    enum justifyTypes {
        centerJustify = 0,
        leftJustify = 1,
        rightJustify = 2
    }
    enum headDisplayFlag {
        TextWithOutline = 0,
        NoneEmpty,
        HealthBar,
        AudioSpeaker,
        FlagOrPaused,
        Flag,
        PassiveMode,
        WantedStar,
        SteeringWheel,
        Headset,
        HighlightPlayer,
        TextNoOutline,
        ArrowDown,
        BreifCase,
        LittleUser,
        RankNumber,
        VoiceIndicator
    }
    enum hudComponentIds {
        hud = 0,
        hudWantedStars = 1,
        hudWeaponIcon = 2,
        hudCash = 3,
        hudMpCash = 4,
        hudMpMessage = 5,
        hudVehicleName = 6,
        hudAreaName = 7,
        hudVehicleClass = 8,
        hudStreetName = 9,
        hudHelpText = 10,
        hudFloatingHelpText1 = 11,
        hudFloatingHelpText2 = 12,
        hudCashChange = 13,
        hudReticle = 14,
        hudSubtitleText = 15,
        hudRadioStations = 16,
        hudSavingGame = 17,
        hudGameStream = 18,
        hudWeaponWheel = 19,
        hudWeaponWheelStats = 20,
        maxHudComponents = 21,
        maxHudWeapons = 22,
        maxScriptedHudComponents = 141
    }
}