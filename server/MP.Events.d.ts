/// <reference path="../server.d.ts" />

declare interface MpEvents {
    add(events: object): void;
    add(eventName: MpEventNames | string, func: (...args: any[]) => void): void;
    call(eventName: string, ...args: any[]): void;
    addCommand(commandName: string, callback: (player: MpPlayer, message: string, ...args: any[]) => void): void;
}

declare enum MpEventNames {
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
