/// <reference path="index.d.ts" />

declare module mp {
    class browser {
        url: string;
        active: boolean;

        static "new"(url: string);

        reload(ignoreCache: boolean);
        execute(executedCode: string);
        destroy();
        markAsChat();
    }
}