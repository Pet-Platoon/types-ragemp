/// <reference path="../server.d.ts" />

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
    setMod(modType: MpVehicleModType, modIndex: number, customTires?: boolean): void;
    getMod(modType: MpVehicleModType): number;
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

declare enum MpVehicleModType {
    spoilers = 0,
    frontBumper = 1,
    rearBumper = 2,
    sideSkirt = 3,
    exhaust = 4,
    frame = 5,
    grille = 6,
    hood = 7,
    fender = 8,
    rightFender = 9,
    roof = 10,
    engine = 11,
    brakes = 12,
    transmission = 13,
    horns = 14,
    suspension = 15,
    armor = 16,
    frontWheels = 23,
    backWheels = 24,
    plateholders = 25,
    trimDesign = 27,
    ornaments = 28,
    dialDesign = 30,
    steeringWheel = 33,
    shifterLeavers = 34,
    plaques = 35,
    hydraulics = 38,
    livery = 48
}
