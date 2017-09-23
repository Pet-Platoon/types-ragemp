/// <reference path="../index.d.ts" />

declare module mp {
    class keys {
        static isUp(keyCode: number): boolean;
        static isDown(keyCode: number): boolean;
        static bind(...args: any[]): any; // TODO: Missing documentation
        static unbind(...args: any[]): any; // TODO: Missing documentation
    }
}