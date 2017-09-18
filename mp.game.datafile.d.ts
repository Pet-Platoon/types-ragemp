/// <reference path="index.d.ts" />

declare module mp.game {
    class datafile {
        static objectValueGetType(objectData: object, key: string): mp.game.datafile.type;
        static arrayValueGetSize(arrayData: object): number;
        static objectValueGetFloat(objectData: object, key: string): number;
        static objectValueGetBoolean(objectData: object, key: string): boolean;
        static arrayValueAddString(arrayData: object, value: string);
        static objectValueAddBoolean(arrayData: object, key: string, value: boolean);
        static arrayValueGetType(arrayData: object, arrayIndex: number): mp.game.datafile.type;
        static objectValueGetString(objectData: object, key: string): string;
        static arrayValueGetInteger(arrayData: object, arrayIndex: number): number;
        static arrayValueAddVector3(arrayData: object, valueX: number, valueY: number, valueZ: number);
        static objectValueGetVector3(objectData: object, key: string): mp.Vector3;
        static objectValueAddVector3(objectData: object, key: string, valueX: number, valueY: number, valueZ: number);
        static arrayValueGetBoolean(arrayData: object, arrayIndex: number): boolean;
        static arrayValueAddFloat(arrayData: object, value: number);
        static objectValueAddArray(objectData: object, key: string);
        static arrayValueAddObject(arrayData: object);
        static objectValueGetInteger(objectData: object, key: string): number;
        static objectValueGetArray(objectData: object, key: string): object;
        static arrayValueGetObject(arrayData: object, arrayIndex: number): object;
        static arrayValueGetVector3(arrayData: object, arraayIndex: number): mp.Vector3;
        static objectValueAddString(objectData: object, key: string, value: string);
        static objectValueAddObject(objectData: object, key: string);
        static objectValueGetObject(objectData: object, key: string);
        static arrayValueGetFloat(arrayData: object, arrayIndex: number): number;
        static objectValueAddFloat(objectData: object, key: string, value: number);
        static loadUgcFile(filename: string): boolean;
        static arrayValueAddInteger(arrayData: object, value: number);
        static arrayValueGetString(arrayData: object, arrayIndex: number): string;
        static objectValueAddInteger(objectData: object, key: string, value: number);
        static arrayValueAddBoolean(arrayData: object, value: boolean);
    }
}

declare module mp.game.datafile {
    enum type {
        boolean = 1,
        integer = 2,
        float = 3,
        string = 4,
        vector3 = 5,
        object = 6,
        array = 7
    }
}