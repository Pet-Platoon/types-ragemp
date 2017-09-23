/// <reference path="../server.d.ts" />

namespace mp {
    interface Pickup extends mp.Entity {
        pickupHash: number;
    }

    interface PickupPool extends mp.Pool<mp.Pickup> {
        'new'(...args: any[]): mp.Pickup; // TODO: Missing documentation;
    }
}