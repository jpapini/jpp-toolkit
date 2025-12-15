export const BuildType = {
    REACT: 'react',
    NODE: 'node',
} as const;
export type BuildType = (typeof BuildType)[keyof typeof BuildType];
