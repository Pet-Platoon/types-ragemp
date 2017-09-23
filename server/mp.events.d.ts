/// <reference path="../index.d.ts" />

declare module mp {
    class events {
        static add(events: object);
        static add(eventName: mp.events.eventName | string, func: Function);
        static call(eventName: string, ...optionalArguments: any[]);
        static addCommand(commandName: string, handlerFunction: Function);
        static callRemote(eventName: string, ...optionalArguments: any[]);
    }
}

declare module mp.events {
    enum eventName {
        playerJoin = 'playerJoin',
        playerQuit = 'playerQuit',
        playerDeath = 'playerDeath',
        playerSpawn = 'playerSpawn',
        playerResurrect = 'playerResurrect',
        playerChat = 'playerChat',
        playerCommand = 'playerCommand',
        playerWeaponShoot = 'playerWeaponShoot',
        playerRuleTriggered = 'playerRuleTriggered',
        entityStreamIn = 'entityStreamIn',
        entityStreamOut = 'entityStreamOut',
        vehicleDeath = 'vehicleDeath',
        playerEnterCheckpoint = 'playerEnterCheckpoint',
        playerExitCheckpoint = 'playerExitCheckpoint',
        playerEnterColshape = 'playerEnterColshape',
        playerExitColshape = 'playerExitColshape'
    }
}