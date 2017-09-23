/// <reference path="../index.d.ts" />

declare module mp.game {
    class system {
        static sin(value: number): number;
        static ceil(value: number): number;
        static vdist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
        static wait(ms: number);
        static settimerb(value: number);
        static vmag(p0: number, p1: number, p2: number): number;
        static sqrt(value: number): number;
        static shiftRight(value: number, bitShift: number): number;
        static vmag2(p0: number, p1: number, p2: number): number;
        static vdist2(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
        static startNewScriptWithArgs(scriptName: string, args: object, argCount: number, stackSize: number): number;
        static toFloat(value: number): number;
        static settimera(value: number);
        static startNewStreamedScriptWithArgs(scriptHash: string | number, args: object, argCount: number, stackSize: number): number;
        static cos(value: number): number;
        static pow(base: number, exponent: number): number;
        static startNewScript(scriptName: string, stackSize: number): number;
        static startNewStreamedScript(scriptHash: string | number, stackSize: number): number;
        static shiftLeft(value: number, bitShift: number): number;
        static round(value: number): number;
        static floor(value: number): number;
    }
}