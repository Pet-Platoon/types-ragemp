/// <reference path="../server.d.ts" />

namespace mp {
    interface Config {
        maxplayers: number;
        name: string;
        gamemode: string;
        streamdistance: number;
        announce: boolean;
        port: number;
    }
}