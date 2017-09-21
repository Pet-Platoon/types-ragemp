/// <reference path="index.d.ts" />

declare module mp.game {
    class pathfind {
        static setRoadsBackToOriginalInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: number);
        static getVehicleNodeProperties(x: number, y: number, z: number, density: number, flags: number): mp.game.pathfind.vehicleProperties;
        static updateNavmeshBlockingObject(p0: object, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: object);
        static isPointOnRoad(x: number, y: number, z: number, vehicle: mp.game.vehicle | object): boolean;
        static getClosestRoad(x: number, y: number, z: number, p3: object, p4: object, p5: object, p6: object, p7: object, p8: object, p9: object, p10: object): object;
        static setRoadsInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, angle: number, unknown1: boolean, unknown2: boolean, unknown3: boolean);
        static isVehicleNodeIdValid(vehicleNodeId: number): boolean;
        static setRoadsBackToOriginal(p0: object, p1: object, p2: object, p3: object, p4: object, p5: object);
        static getNthClosestVehicleNodeId(x: number, y: number, z: number, nth: number, nodetype: number, p5: number, p6: number): number;
        static getClosestVehicleNode(x: number, y: number, z: number, outPosition: mp.Vector3, nodeType: number, p5: number, p6: number): mp.Vector3;
        static getClosestMajorVehicleNode(x: number, y: number, z: number, outPosition: mp.Vector3, unknown1: number, unknown2: number): mp.Vector3;
        static getStreetNameAtCoord(x: number, y: number, z: number, streetName: number, crossingRoad: number): mp.game.pathfind.streetNameAtCoord;
        static setPedPathsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown: boolean);
        static addNavmeshRequiredRegion(p0: number, p1: number, p2: number);
        static getNthClosestVehicleNodeFavourDirection(x: number, y: number, z: number, desiredX: number, desiredY: number, desiredZ: number, nthClosest: number, outPosition: mp.Vector3, outHeading: number, nodetype: mp.game.pathfind.nodeTypes, p10: object, p11: object): mp.game.pathfind.getClosestVehicle;
        static removeNavmeshBlockingObject(p0: object);
        static disableNavmeshInArea(p0: object, p1: object, p2: object, p3: object, p4: object, p5: object, p6: object);
        static getIsSlowRoadFlag(nodeID: number): boolean;
        static getNthClosestVehicleNodeIdWithHeading(x: number, y: number, z: number, nthClosest: number, outPosition: mp.Vector3, outHeading: number, p6: object, p7: number, p8: number): mp.Vector3;
        static getVehicleNodePosition(nodeId: number, outPosition: mp.Vector3): mp.Vector3;
        static setIgnoreNoGpsFlag(ignore: boolean);
        static getNthClosestVehicleNodeWithHeading(x: number, y: number, z: number, nthClosest: number, outPosition: mp.Vector3, heading: number, unknown1: object, unknown2: number, unknown3: number, unknown4: number): mp.game.pathfind.getClosestVehicleWithHeading;
        static loadAllPathNodes(keepInMemory: boolean): boolean;
        static getRandomVehicleNode(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, outPosition: mp.Vector3, heading: number): mp.game.pathfind.getRandomVehicle;
        static getSupportsGpsRouteFlag(nodeID: number): boolean;
        static calculateTravelDistanceBetweenPoints(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
        static getSafeCoordForPed(x: number, y: number, z: number, onGround: boolean, outPosition: mp.Vector3, flags: number): mp.Vector3;
        static setRoadsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown1: boolean, unknown2: boolean);
        static setGpsDisabledZone(p0: object, p1: object, p2: object, p3: object, p4: object, p5: object);
        static setPedPathsBackToOriginal(p0: object, p1: object, p2: object, p3: object, p4: object, p5: object);
        static getNthClosestVehicleNode(x: number, y: number, z: number, nthClosest: number, outPosition: mp.Vector3, unknown1: object, unknown2: object, unknown3: object): mp.Vector3;
        static isNavmeshLoadedInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
        static generateDirectionsToCoord(x: number, y: number, z: number, p3: object, p4: number, vehicle: mp.game.vehicle, p6: number): mp.game.pathfind.generateDirection;
        static addNavmeshBlockingObject(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean, p8: object): object;
        static getClosestVehicleNodeWithHeading(x: number, y: number, z: number, outPosition: mp.Vector3, outHeading: number, nodeType: number, p6: number, p7: number): mp.game.pathfind.getClosestVehicle;
    }
}
declare module mp.game.pathfind {
    class vehicleProperties {
        density: number;
        flags: number;
    }
    class streetNameAtCoord {
        streetName: number;
        crossingRoad: number;
    }
    class getClosestVehicle {
        outPosition: mp.Vector3;
        outHeading: number;
    }
    class getClosestVehicleWithHeading {
        outPosition: mp.Vector3;
        heading: number;
        unknown1: object;
    }
    class getRandomVehicle {
        outPosition: mp.Vector3;
        outHeading: number;
    }
    class generateDirection {
        p4: number;
        vehicle: mp.game.vehicle;
        p6: number;
    }
    enum nodeTypes {
        pavedRoadOnly = 0,
        anyRoad = 1,
        water = 3,
    }
}