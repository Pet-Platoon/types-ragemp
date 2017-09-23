/// <reference path="../index.d.ts" />

declare namespace mp {
    class pool<T> {
        static readonly length: number;
        static readonly size: number;

        static at(index: number): T;
        static exists(entity: T): boolean;
        static forEach(func: (entity: T, index?: number) => void);
        static forEachInRange(position: mp.Vector3, range: number, func: (entity: T, index?: number) => void);
        static forEachInRange(position: mp.Vector3, range: number, dimension: number, func: (entity: T, index?: number) => void);
        static forEachInDimension(dimension: number, func: (entity: T, index?: number) => void);
        static toArray(): T[];
        static apply(...args: any[]): any;
    }
}