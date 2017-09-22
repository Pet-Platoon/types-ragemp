/// <reference path="../index.d.ts" />

declare module mp.game {
    class brain {
        static registerObjectScriptBrain(stringName: string, p1: string, p2: number, p3: number, p4: number, p5: number);
        static registerObjectScriptBrain(stringName: string, p1: number, p2: number, p3: number, p4: number, p5: number);
        static disableScriptBrainSet(brainSet: number);
        static registerWorldPointScriptBrain(p0: object, p1: number, p2: object);
        static addScriptToRandom(name: string, model: string, p2: number, p3: number);
        static addScriptToRandom(name: string, model: number, p2: number, p3: number);
        static enableScriptBrainSet(brainSet: number);
        static isObjectWithinBrainActivationRange(object: mp.game.object): boolean;
        static isObjectWithinBrainActivationRange(object: object): boolean;
    }
}