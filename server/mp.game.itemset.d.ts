/// <reference path="../index.d.ts" />

declare module mp.game {
    class itemset {
        static removeFromItemset(p0: object, p1: object);
        static isInItemset(p0: object, p1: object): boolean;
        static createItemset(p0: boolean): object;
        static cleanItemset(p0: object);
        static getIndexedItemInItemset(p0: object, p1: object): object;
        static isItemsetValid(p0: object): boolean;
        static getItemsetSize(p0: object): object;
        static destroyItemset(p0: object);
        static addToItemset(p0: object, p1: object): boolean;
    }
}