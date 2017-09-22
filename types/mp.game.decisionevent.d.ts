/// <reference path="../index.d.ts" />

declare module mp.game {
    class decisionevent {
        static isShockingEventInSphere(type: mp.game.decisionevent.shockingEventType, x: number, y: number, z: number, radius: number): boolean;
        static isShockingEventInSphere(type: number, x: number, y: number, z: number, radius: number): boolean;
        static removeShockingEvent(event: object): boolean; // TODO: Change event type to ScrHandle;
        static suppressShockingEvent(type: mp.game.decisionevent.shockingEventType);
        static suppressShockingEvent(type: number);
        static clearDecisionMakerEventResponse(name: string, type: mp.game.decisionevent.shockingEventType);
        static clearDecisionMakerEventResponse(name: string, type: number);
        static clearDecisionMakerEventResponse(name: number, type: mp.game.decisionevent.shockingEventType);
        static clearDecisionMakerEventResponse(name: number, type: number);
        static addShockingEventForEntity(type: mp.game.decisionevent.shockingEventType, entity: mp.game.entity, duration: number): object;
        static addShockingEventForEntity(type: mp.game.decisionevent.shockingEventType, entity: object, duration: number): object;
        static addShockingEventForEntity(type: number, entity: mp.game.entity, duration: number): object;
        static addShockingEventForEntity(type: number, entity: object, duration: number): object;
        static unblockDecisionMakerEvent(name: string, type: mp.game.decisionevent.shockingEventType);
        static unblockDecisionMakerEvent(name: string, type: number);
        static unblockDecisionMakerEvent(name: number, type: mp.game.decisionevent.shockingEventType);
        static unblockDecisionMakerEvent(name: number, type: number);
        static addShockingEventAtPosition(type: mp.game.decisionevent.shockingEventType, x: number, y: number, z: number, duration: number): object;
        static addShockingEventAtPosition(type: number, x: number, y: number, z: number, duration: number): object;
        static blockDecisionMakerEvent(name: string, type: mp.game.decisionevent.shockingEventType);
        static blockDecisionMakerEvent(name: string, type: number);
        static blockDecisionMakerEvent(name: number, type: mp.game.decisionevent.shockingEventType);
        static blockDecisionMakerEvent(name: number, type: number);
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