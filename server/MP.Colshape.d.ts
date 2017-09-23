/// <reference path="../server.d.ts" />

namespace mp {
    interface Colshape extends mp.Entity {
        shapeType: mp.ColshapeType;

        isPointWithin(position: mp.Vector3): boolean;
    }

    interface ColshapePool extends mp.Pool<mp.Colshape> {
        newCircle(x: number, y: number, radius: number, dimension: number = 0): mp.Colshape;
        newSphere(x: number, y: number, z: number, range: number, dimension: number = 0): mp.Colshape;
        newTube(x: number, y: number, z: number, height: number, dimension: number = 0): mp.Colshape;
        newRectangle(x: number, y: number, width: number, height: number, dimension: number = 0): mp.Colshape;
        newCube(x: number, y: number, z: number, width: number, depth: number, height: number, dimension: number = 0): mp.Colshape;
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