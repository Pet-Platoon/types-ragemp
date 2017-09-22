/// <reference path="../index.d.ts" />

declare module mp {
    class browser {
        static 'new'(url: string);

        url: string;
        active: boolean;

        reload(ignoreCache: boolean);
        execute(executedCode: string);
        destroy();
        markAsChat();
    }
}