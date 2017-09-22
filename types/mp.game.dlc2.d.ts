/// <reference path="../index.d.ts" />

declare module mp.game {
    class dlc2 {
        static nullify(variable: object, unused: object): boolean;
        static isDlcPresent(dlcHash: string): boolean;
        static isDlcPresent(dlcHash: number): boolean;
    }
}