/// <reference path="../index.d.ts" />

declare interface MpEnvironment {
    weather: string;
    time: MpTime;

    setWeatherTransition(newWeather: string): void;
}

declare interface MpTime {
    hour: number;
    minute: number;
    second: number;
}
