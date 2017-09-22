/// <reference path="../index.d.ts" />

declare module mp {
    class Quaternion {
        x: number;
        y: number;
        z: number;
        w: number;

        constructor(x: number, y: number, z: number, w: number);
    }
}