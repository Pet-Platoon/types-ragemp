/// <reference path="index.d.ts" />

declare module mp.game {
    class rope {
        static setDisableFragDamage(object: mp.game.object | object, toggle: boolean);
        static startRopeWinding(rope: mp.game.object | object);
        static getRopeLastVertexCoord(rope: mp.game.object | object);
        static pinRopeVertex(rope: mp.game.object | object, vertex: number, x: number, y: number, z: number);
        static breakEntityGlass(p0: object, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: object, p10: boolean);
        static getRopeVertexCount(rope: mp.game.object | object): number;
        static attachEntitiesToRope(rope: mp.game.object | object, ent1: mp.game.entity | object, ent2: mp.game.entity | object, ent1_x: number, ent1_y: number, ent1_z: number, ent2_x: number, ent2_y: number, ent2_z: number, length: number, p10: boolean, p11: boolean, p12: object, p13: object);
        static attachRopeToEntity(rope: mp.game.object | object, entity: mp.game.entity | object, x: number, y: number, z: number, p5: boolean);
        static unpinRopeVertex(rope: mp.game.object | object, vertex: number): object;
        static deleteRope(rope: mp.game.object | object): mp.game.object;
        static ropeConvertToSimple(rope: mp.game.object | object);
        static startRopeUnwindingFront(rope: mp.game.object | object);
        static setDisableBreaking(rope: mp.game.object | object, enabled: boolean): object;
        static getRopeLength(rope: mp.game.object | object): number;
        static getCgoffset(rope: mp.game.object | object): mp.Vector3;
        static deleteChildRope(rope: mp.game.object | object): object;
        static detachRopeFromEntity(rope: mp.game.object | object, entity: mp.game.entity | object);
        static setCgAtBoundcenter(rope: mp.game.object | object);
        static ropeResetLength(rope: mp.game.object | object, length: boolean): object;
        static ropeSetUpdatePinverts(rope: mp.game.object | object);
        static stopRopeWinding(rope: mp.game.object | object);
        static loadRopeData(rope: mp.game.object | object, rope_preset: string): object;
        static ropeForceLength(rope: mp.game.object | object, length: number): object;
        static setCgoffset(rope: mp.game.object | object, x: number, y: number, z: number);
        static applyImpulseToCloth(posX: number, posY: number, posZ: number, vecX: number, vecY: number, vecZ: number, impulse: number);
        static addRope(x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number, length: number, ropeType: number, maxLength: number, minLength: number, p10: number, p11: boolean, p12: boolean, rigid: boolean, p14: number, breakWhenShot: boolean, unkPtr: object): mp.game.object | object;
        static getRopeVertexCoord(rope: mp.game.object | object, vertex: number): object;
        static setDamping(rope: mp.game.object | object, vertex: number, value: number);
        static ropeDrawShadowEnabled(rope: mp.game.object | object, toggle: boolean): mp.game.object | object;
        static doesRopeExist(rope: mp.game.object | object): mp.game.object | object;
        static stopRopeUnwindingFront(rope: mp.game.object | object);
    }
}