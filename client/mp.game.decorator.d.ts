/// <reference path="../index.d.ts" />

declare module mp.game {
    class decorator {
        static decorIsRegisteredAsType(propertyName: string, type: mp.game.decorator.decorType | number): boolean;
        static decorRegister(propertyName: string, type: mp.game.decorator.decorType | number);
    }
}

declare module mp.game.decorator {
    enum decorType {
        float = 1,
        bool = 2,
        int = 3,
        time = 5
    }
}