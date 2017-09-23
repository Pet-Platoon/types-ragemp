/// <reference path="../server.d.ts" />

namespace mp {
    interface Events {
        add(events: object): void;
        add(eventName: mp.EventNames | string, func: (...args: any[]) => void): void;
        call(eventName: string, ...args: any[]): void;
        addCommand(commandName: string, callback: (player: mp.Player, message: string, ...args: any[]) => void): void;
    }

    enum EventNames {
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