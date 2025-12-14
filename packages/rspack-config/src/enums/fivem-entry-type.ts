export const FivemEntryType = {
    CLIENT: 'client',
    SERVER: 'server',
    SHARED: 'shared',
    UI: 'ui',
} as const;
export type FivemEntryType = (typeof FivemEntryType)[keyof typeof FivemEntryType];
