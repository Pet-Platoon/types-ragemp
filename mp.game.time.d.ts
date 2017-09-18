/// <reference path="index.d.ts" />

declare module mp.game {
    class time {
        static pauseClock(toggle: boolean);
        static setClockTime(hour: number, minute: number, second: number);
        static getLocalTime(year: number, month: number, day: number, hour: number, minute: number, second: number): mp.game.time.localTime;
        static getLocalTimeGmt(year: number, month: number, day: number, hour: number, minute: number, second: number): mp.game.time.localTime;
        static setClockDate(day: number, month: number, year: number);
        static advanceClockTimeTo(hour: number, minute: number, second: number);
        static addToClockTime(hour: number, minute: number, second: number);
        static getPosixTime(year: number, month: number, day: number, hour: number, minute: number, second: number): mp.game.time.localTime;
    }
}

declare module mp.game.time {
    class localTime {
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
    }
}