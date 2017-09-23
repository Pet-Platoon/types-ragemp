/// <reference path="server.d.ts" />

let vehicle: mp.Vehicle;

vehicle = mp.vehicles.new(123, new mp.Vector3(0, 0, 0));
let [r, g, b]: number[] = vehicle.getNeonColour();