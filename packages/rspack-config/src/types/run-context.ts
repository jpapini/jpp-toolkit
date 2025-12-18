export type RunContext = {
    readonly cwd: string;
    readonly isProduction: boolean;
    readonly isBuildMode: boolean;
    readonly isBundleMode: boolean;
    readonly isWatchMode: boolean;
    readonly isServeMode: boolean;
};
