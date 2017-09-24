/// <reference path="../client.d.ts" />

declare interface MpGameRecorder {
    start(mode: any): any;
    stop(save: any): any;
    isRecording(): boolean;
}
