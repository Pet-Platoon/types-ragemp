/// <reference path="../server.d.ts" />

declare namespace mp {
    interface Colshape extends mp.Entity {
        shapeType: mp.ColshapeType;

        isPointWithin(position: mp.Vector3): boolean;
    }

    interface ColshapePool extends mp.Pool<mp.Colshape> {
        newCircle(x: number, y: number, radius: number, dimension?: number): mp.Colshape;
        newSphere(x: number, y: number, z: number, range: number, dimension?: number): mp.Colshape;
        newTube(x: number, y: number, z: number, height: number, dimension?: number): mp.Colshape;
        newRectangle(x: number, y: number, width: number, height: number, dimension?: number): mp.Colshape;
        newCube(x: number, y: number, z: number, width: number, depth: number, height: number, dimension?: number): mp.Colshape;
    }

    enum ColshapeType {
        sphere = 0,
        tube = 1,
        circle = 2,
        polygon = 3,
        cuboid = 4,
        rectangle = 5
    }
}
