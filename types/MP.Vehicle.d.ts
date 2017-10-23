/// <reference path="../index.d.ts" />

declare interface MpVehicle extends MpEntity {
    rotation: MpVector3;
    velocity: MpVector3;
    readonly siren: boolean;
    readonly horn: boolean;
    engine: boolean;
    readonly highbeams: boolean;
    readonly engineHealth: number;
    readonly bodyHealth: number;
    readonly steerAngle: number;
    readonly rocketBoost: boolean;
    readonly brake: boolean;
    locked: boolean;
    numberPlate: string;
    readonly neonEnabled: boolean;
    readonly dead: boolean;

    repair(): void;
    setNeonColour(red: number, green: number, blue: number): void;
    getNeonColour(): number[];
    setMod(modType: number, modIndex: number, customTires?: boolean): void;
    getMod(modType: number): number;
    setColour(primary: number, secondary: number): void;
    setColourRGB(red1: number, green1: number, blue1: number, red2: number, green2: number, blue2: number): void;
    setPaint(primaryType: number, primaryColour: number, secondaryType: number, secondaryColour: number): void;
    getColour(id: number): number;
    getColourRGB(): number[];
    getPaint(id: number): number;
    getOccupant(seat: number): MpPlayer;
    setOccupant(seat: number, player: MpPlayer): void;
    getOccupants(): MpPlayer[];
    explode(): void;
    spawn(position: MpVector3, heading: number): void;
}

declare interface MpVehiclePool extends MpPool<MpVehicle> {
    'new'(model: number, position: MpVector3, heading?: number, dimension?: number): MpVehicle;
}
