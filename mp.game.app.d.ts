/// <reference path="index.d.ts" />

declare module mp.game {
    class app {
        static appDeleteAppData(appName: string): boolean;
        static appGetFloat(property: string): number;
        static appGetString(property: string): string;
        static appGetInt(property: string): number;
        static appHasSyncedData(property: string): boolean;
        static appSetApp(appName: string);
        static appSetBlock(blockName: string);
        static appSetFloat(property: string, value: number);
        static appSetInt(property: string, value: number);
        static appSetString(property: string, value: string);
    }
}