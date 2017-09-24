/// <reference path="../client.d.ts" />

declare interface MpGameTime {
    pauseClock(toggle: boolean): void;
    setClockTime(hour: number, minute: number, second: number): void;
    getLocalTime(year: number, month: number, day: number, hour: number, minute: number, second: number): MpGameTimeLocalTime;
    getLocalTimeGmt(year: number, month: number, day: number, hour: number, minute: number, second: number): MpGameTimeLocalTime;
    setClockDate(day: number, month: number, year: number): void;
    advanceClockTimeTo(hour: number, minute: number, second: number): void;
    addToClockTime(hour: number, minute: number, second: number): void;
    getPosixTime(year: number, month: number, day: number, hour: number, minute: number, second: number): MpGameTimeLocalTime;
}

interface MpGameTimeLocalTime {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
}
