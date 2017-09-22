/// <reference path="../index.d.ts" />

declare module mp.game {
    class decisionevent {
        static isShockingEventInSphere(type: mp.game.decisionevent.shockingEventType | number, x: number, y: number, z: number, radius: number): boolean;
        static removeShockingEvent(event: mp.game.script): boolean;
        static suppressShockingEvent(type: mp.game.decisionevent.shockingEventType | number);
        static clearDecisionMakerEventResponse(name: string | number, type: mp.game.decisionevent.shockingEventType | number);
        static addShockingEventForEntity(type: mp.game.decisionevent.shockingEventType | number, entity: mp.game.entity | object, duration: number): mp.game.script;
        static unblockDecisionMakerEvent(name: string | number, type: mp.game.decisionevent.shockingEventType | number);
        static addShockingEventAtPosition(type: mp.game.decisionevent.shockingEventType | number, x: number, y: number, z: number, duration: number): mp.game.script;
        static blockDecisionMakerEvent(name: string | number, type: mp.game.decisionevent.shockingEventType | number);
        static removeAllShockingEvents(p0: boolean);
    }
}

declare module mp.game.decisionevent {
    enum shockingEventType {
        deadBody = 82,
        explosion = 86,
        fire = 87,
        shootingFireExtinguisher = 88,
        shooting = 89,
        pedUsingHorn = 93,
        pedReceivingMelee = 95,
        livingPedReceivingShot = 102,
        playerThrownGrenade = 104,
        playerDroppingJerryCanGasoline = mp.game.decisionevent.shockingEventType,
        meleeAgainstVeh = 105,
        playerRunning = 106,
        vehicleTheft = 108,
        meleeAttack = 112,
        vehRolloverPed = 113,
        deadPedReceivingShot = 114,
        aimingAtPed = 116,
        armed = 121
    }
}