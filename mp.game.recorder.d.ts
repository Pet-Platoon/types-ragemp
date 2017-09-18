/// <reference path="index.d.ts" />

declare module mp.game {
    class recorder {
        static start(mode: any): any;
        static stop(save: any): any;
        static isRecording(): boolean;
    }
}