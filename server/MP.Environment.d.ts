/// <reference path="../server.d.ts" />

declare namespace mp {
    interface Environment {
        weather: string;
        time: mp.Time;

        setWeatherTransition(newWeather: string): void;
    }

    interface Time {
        hour: number;
        minute: number;
        second: number;
    }
}
