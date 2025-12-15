export const NodeEnv = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
} as const;
export type NodeEnv = (typeof NodeEnv)[keyof typeof NodeEnv];
