/// <reference path="../server.d.ts" />

namespace mp {
    interface Player extends mp.Entity {
        readonly action: mp.PlayerActions;
        readonly isJumping: boolean;
        readonly isInCover: boolean;
        readonly isClimbing: boolean;
        readonly isEnteringVehicle: boolean;
        readonly isLeavingVehicle: boolean;
        readonly vehicle: mp.Vehicle;
        readonly seat: number;
        readonly weapon: any;
        readonly isAiming: number;
        readonly aimTarget: any;
        readonly ping: number;
        readonly ip: string;

        name: string;
        heading: number;
        health: number;
        armour: number;
        eyeColour: number;
        hairColour: number;
        hairHighlightColour: number;

        kick(reason: string): void;
        ban(reason: string): void;
        spawn(pos: mp.Vector3, heading?: number): void;
        giveWeapon(weaponHash: number | number[], ammo: number): void;
        outputChatBox(message: string): void;
        getClothes(componentNumber: mp.PlayerComponents): mp.PlayerCloth;
        setClothes(componentNumber: mp.PlayerComponents, drawable: number, texture: number, palette: number): void;
        getProp(propId: mp.PlayerProperties): mp.PlayerProp;
        setProp(propId: mp.PlayerProperties, drawable: number, texture: number): void;
        putIntoVehicle(vehicle: mp.Vehicle, seat: number): void;
        removeFromVehicle(): void;
        invoke(hash: string, ...args: any[]): void;
        call(eventName: string, ...args: any[]): void;
        notify(message: string): void;
        getHeadBlend(): mp.PlayerHeadBlend;
        setHeadBlend(shapeFirstId: number, shapeSecondId: number, shapeThirdId: number, skinFirstId: number, skinSecondId: number, skinThirdId: number, shapeMix: number, skinMix: number, thirdMix: number): void;
        updateHeadBlend(shapeMix: number, skinMix: number, thirdMix: number): void;
        setFaceFeature(id: mp.PlayerFaceFeatures, scale: number): void;
        getFaceFeature(id: mp.PlayerFaceFeatures): number;
        setHairColour(firstColor: number, secondColor: number): void;
        playAnimation(dictionary: string, name: string, speed: number, flag: number): void;
        playScenario(scenario: string): void;
        stopAnimation(): void;
    }

    interface PlayerPool extends mp.Pool<mp.Player> {

    }

    interface PlayerCloth {
        drawable: number;
        texture: number;
        palette: number;
    }

    interface PlayerProp {
        drawable: number;
        texture: number;
    }

    interface PlayerHeadBlend {
        shape: number[3];
        skin: number[3];
        shapeMix: number;
        skinMix: number;
        thirdMix: number;
    }

    enum PlayerFaceFeatures {
        noseWidth = 0,
        noseHeight = 1,
        noseLength = 2,
        noseBridge = 3,
        noseTip = 4,
        noseBridgeShift = 5,
        browHeight = 6,
        browWidth = 7,
        cheekboneHeight = 8,
        cheekboneWidth = 9,
        cheeksWidth = 10,
        eyes = 11,
        lips = 12,
        jawWidth = 13,
        jawHeight = 14,
        chinLength = 15,
        chinPosition = 16,
        chinWidth = 17,
        chinShape = 18,
        neckWidth = 19
    }

    enum PlayerActions {
        climbing = 'climbing',
        in_cover = 'in_cover',
        aiming_from_cover = 'aiming_from_cover',
        diving = 'diving',
        entering_vehicle = 'entering_vehicle',
        exiting_vehicle = 'exiting_vehicle',
        jumping = 'jumping',
        moving = 'moving',
        moving_aiming = 'moving_aiming',
        moving_reloaing = 'moving_reloaing',
        parachuting = 'parachuting',
        ragdoll = 'ragdoll',
        aiming = 'aiming',
        reloading = 'reloading',
        stopped = 'stopped',
    }

    enum PlayerComponents {
        head = 0,
        mask = 1,
        hair = 2,
        torso = 3,
        legs = 4,
        bags = 5,
        feet = 6,
        accessories = 7,
        undershirt = 8,
        bodyArmor = 9,
        decals = 10,
        tops = 11
    }

    enum PlayerProperties {
        hats = 0,
        glasses = 1,
        ears = 2,
        watches = 6,
        bracelets = 7
    }
}