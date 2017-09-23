/// <reference path="../index.d.ts" />

declare module mp.game {
    class stats {
        static statSlotIsLoaded(p0: object): boolean;
        static playstatsFriendActivity(p0: object, p1: object);
        static statGetBoolMasked(statName: number | string, mask: number, p2: number): boolean;
        static leaderboardsGetNumberOfColumns(p0: object, p1: object): object;
        static statGetBool(statHash: number | string, outValue: boolean, p2: object): boolean;
        static playstatsShopItem(p0: object, p1: object, p2: object, p3: object, p4: object);
        static statSetGxtLabel(statName: number | string, value: string, save: boolean): boolean;
        static statGetUserId(p0: object): string;
        static statSetDate(statName: number | string, value: mp.game.stats.dateStructure, numFields: number, save);
        static statGetNumberOfSeconds(statName: number | string): number;
        static leaderboardsReadSuccessful(p0: object, p1: object, p2: object): boolean;
        static playstatsClothChange(p0: object, p1: object, p2: object, p3: object, p4: object);
        static statGetPos(p0: object, p1: object, p2: object, p3: object, p4: object): boolean;
        static playstatsAwardXp(p0: object, p1: object, p2: object);
        static statSetFloat(statName: number | string, value: number, save: boolean): boolean;
        static statDeleteSlot(p0: object): object;
        static statSetBool(statName: number | string, value: boolean, save: boolean): boolean;
        static statGetLicensePlate(statName: number | string): string;
        static statSetBoolMasked(statName: number | string, value: boolean, mask: number, save: boolean): boolean;
        static leaderboards2ReadByRadius(p0: object, p1: object, p2: object): boolean;
        static playstatsCheatApplied(cheat: string);
        static statGetMaskedInt(p0: object, p1: object, p2: object, p3: object, p4: object): boolean;
        static statSetProfileSetting(profileSetting: number, value: number);
        static playstatsOddjobDone(p0: object, p1: object, p2: object);
        static statSetLicensePlate(statName: number | string, str: string): boolean;
        static statGetNumberOfMinutes(statName: number | string): number;
        static statGetInt(statHash: number | string, outValue: number, p2: number): number;
        static statSetMaskedInt(statName: number | string, p1: object, p2: object, p3: number, save: boolean): boolean;
        static playstatsMissionOver(p0: object, p1: object, p2: object, p3: boolean, p4: boolean, p5: boolean);
        static leaderboardsReadClear(p0: object, p1: object, p2: object): object;
        static leaderboards2ReadByScoreInt(p0: object, p1: object, p2: object): boolean;
        static statGetDate(statHash: number | string, p1: object, p2: object, p3: object): boolean;
        static statSetUserId(statName: number | string, value: string, save: boolean): boolean;
        static leaderboardsGetCacheDataRow(p0: object, p1: object, p2: object): boolean;
        static leaderboards2ReadFriendsByRow(p0: object, p1: object, p2: object, p3: boolean, p4: object, p5: object): boolean;
        static playstatsNpcInvite(p0: object);
        static statIncrement(statName: number | string, value: number);
        static playstatsRaceCheckpoint(p0: object, p1: object, p2: object, p3: object, p4: object);
        static leaderboardsGetCacheExists(p0: object): boolean;
        static statLoadPending(p0: object): boolean;
        static statLoad(p0: number): boolean;
        static statSetString(statName: number | string, value: string, save: boolean): boolean;
        static leaderboards2ReadByRow(p0: object, p1: object, p2: object, p3: object, p4: object, p5: object, p6: object): boolean;
        static leaderboardsReadPending(p0: object, p1: object, p2: object): boolean;
        static leaderboards2WriteData(p0: object): boolean;
        static statSetInt(statName: number | string, value: number, save: boolean): boolean;
        static leaderboardsCacheDataRow(p0: object): boolean;
        static leaderboards2ReadByRank(p0: object, p1: object, p2: object): boolean;
        static playstatsPropChange(p0: object, p1: object, p2: object, p3: object);
        static playstatsMatchStarted(p0: object, p1: object, p2: object, p3: object, p4: object, p5: object, p6: object);
        static leaderboardsGetColumnType(p0: object, p1: object, p2: object): object;
        static playstatsMissionStarted(p0: object, p1: object, p2: object, p3: boolean);
        static statSetCurrentPosixTime(statName: number | string, p1: boolean): boolean;
        static leaderboards2ReadByHandle(p0: object, p1: object): boolean;
        static leaderboardsGetColumnId(p0: object, p1: object, p2: object): object;
        static playstatsRankUp(p0: object);
        static playstatsMissionCheckpoint(p0: object, p1: object, p2: object, p3: object);
        static statGetFloat(statHash: number | string, outValue: number, p2: object): number;
        static statSetPos(statName: number | string, x: number, y: number, z: number, save: boolean): boolean;
        static playstatsWebsiteVisited(scaleformHash: number | string, p1: number);
        static statSave(p0: number, p1: boolean, p2: number): boolean;
        static statGetNumberOfDays(statName: number | string): number;
        static statGetString(statHash: number | string, p1: number): string;
        static leaderboards2ReadByScoreFloat(p0: object, p1: number, p2: object): boolean;
        static statClearSlotForReload(statSlot: number): object;
        static leaderboardsGetCacheTime(p0: object): object;
        static statGetNumberOfHours(statName: number | string): number;
    }
}
declare module mp.game.stats {
    class dateStructure {
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
        milisecond: number;
    }
}