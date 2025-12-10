import path from 'node:path';

import type { UserConfig } from 'tsdown';

export function createTsdownConfig(overrides: UserConfig = {}): UserConfig {
    const cwd = overrides.cwd ?? process.cwd();

    const ignoreWatch =
        Array.isArray(overrides.ignoreWatch) ? overrides.ignoreWatch
        : overrides.ignoreWatch ? [overrides.ignoreWatch]
        : [];

    return {
        cwd,

        target: 'node24',
        platform: 'node',

        entry: path.resolve(cwd, 'src/index.ts'),
        outDir: path.resolve(cwd, 'dist'),
        tsconfig: path.resolve(cwd, 'tsconfig.json'),

        format: ['esm'],

        dts: true,
        sourcemap: true,
        nodeProtocol: true,
        shims: true,

        ...overrides,

        ignoreWatch: [
            /\/\.git\//u,
            /\/\.turbo\//u,
            /\/coverage\//u,
            /\/dist\//u,
            /\/generated\//u,
            /\/old\//u,
            /\/tmp\//u,
            ...ignoreWatch,
        ],
    };
}
