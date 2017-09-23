/// <reference path="../index.d.ts" />

declare module mp.game {
    class water {
        static testVerticalProbeAgainstAllWater(x: number, y: number, z: number, p3: object, p4: object): boolean;
        static testProbeAgainstAllWater(p0: object, p1: object, p2: object, p3: object, p4: object, p5: object, p6: object, p7s: object): boolean;
        static getWaterHeightNoWaves(x: number, y: number, z: number, height: number);
        static setWavesIntensity(intensity: number);
        static modifyWater(x: number, y: number, radius: number, height: number);
        static getWaterHeight(x: number, y: number, z: number, height: number): number;
        static testProbeAgainstWater(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, p6: boolean): boolean;
    }
}