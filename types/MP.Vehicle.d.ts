/// <reference path="../index.d.ts" />

declare interface MpVehicle extends MpEntity {
    readonly siren: boolean;
    readonly horn: boolean;
    readonly highbeams: boolean;
    readonly engineHealth: number;
    readonly bodyHealth: number;
    readonly steerAngle: number;
    readonly rocketBoost: boolean;
    readonly brake: boolean;
    readonly neonEnabled: boolean;
    readonly dead: boolean;
    readonly trailer: MpVehicle;

    rotation: MpVector3;
    velocity: MpVector3;
    engine: boolean;
    locked: boolean;
    numberPlate: string;

    repair(): void;
    destroy(): void;
    setNeonColour(red: number, green: number, blue: number): void;
    getNeonColour(): number[];
    setMod(modType: number, modIndex: number, customTires?: boolean): void;
    getMod(modType: number): number;
    setColour(primary: number, secondary: number): void;
    setColourRGB(red1: number, green1: number, blue1: number, red2: number, green2: number, blue2: number): void;
    setPaint(primaryType: number, primaryColour: number, secondaryType: number, secondaryColour: number): void;
    getColour(id: number): number;
    getColourRGB(slot: number): number[];
    getPaint(id: number): number;
    getOccupant(seat: number): MpPlayer;
    setOccupant(seat: number, player: MpPlayer): void;
    getOccupants(): MpPlayer[];
    explode(): void;
    spawn(position: MpVector3, heading: number): void; // TODO: Missing documentation
    isStreamedFor(...args: any[]): any; // TODO: Missing documentation
}

declare interface MpVehiclePool extends MpPool<MpVehicle> {
    'new'(model: number, position: MpVector3, dimension?: number): MpVehicle;
}
