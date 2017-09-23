/// <reference path="../server.d.ts" />

namespace mp {
    interface Object extends mp.Entity {
        rotation: mp.Vector3;
    }

    interface ObjectPool extends mp.Pool<mp.Object> {
        'new'(model: number, position: mp.Vector3, rotation: mp.Vector3, dimension: number = 0): mp.Object;
    }
}