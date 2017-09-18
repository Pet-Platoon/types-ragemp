/// <reference path="index.d.ts" />

declare module mp.game {
    class zone {
        static getZoneAtCoords(x: number, y: number, z: number): number;
        static getZonePopschedule(zoneId: number): number;
        static clearPopscheduleOverrideVehicleModel(scheduleId: number);
        static getZoneScumminess(zoneId: number): number;
        static overridePopscheduleVehicleModel(scheduleId: number, vehicleHash: string);
        static overridePopscheduleVehicleModel(scheduleId: number, vehicleHash: number);
        static getHashOfMapAreaAtCoords(x: number, y: number, z: number): string;
        static getHashOfMapAreaAtCoords(x: number, y: number, z: number): number;
        static getZoneFromNameId(zoneName: string): number;
        static setZoneEnabled(zoneId: number, toggle: boolean);
        static getZoneOfName(x: number, y: number, z: number): string;
    }
}