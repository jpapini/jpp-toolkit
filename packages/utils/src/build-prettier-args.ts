import path from 'node:path';

import { findGitIgnore, findProjectRoot } from './find-closest';

export const DEFAULT_PRETTIER_PATTERNS = [
    '**/*',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/generated/**',
    '!**/pnpm-lock.yaml',
    '!**/*.hbs',
];

export const DEFAULT_PRETTIER_CACHE = 'node_modules/.cache/prettier/.prettiercache';

export type BuildPrettierArgsOptions = {
    readonly format?: boolean | undefined;
    readonly projectRoot?: string | undefined;
    readonly cacheLocation?: string | undefined;
    readonly ignorePath?: string | undefined;
};

export function buildPrettierArgs(
    options: BuildPrettierArgsOptions,
    patterns?: string[],
): string[] {
    const args: string[] = [];

    let cacheLocation: string;
    if (options.cacheLocation) {
        ({ cacheLocation } = options);
    } else if (options.projectRoot) {
        cacheLocation = path.resolve(options.projectRoot, DEFAULT_PRETTIER_CACHE);
    } else {
        cacheLocation = path.resolve(findProjectRoot(), DEFAULT_PRETTIER_CACHE);
    }
    args.push('--cache', '--cache-location', cacheLocation);

    args.push('--ignore-unknown');
    args.push('--ignore-path', options.ignorePath ?? findGitIgnore());
    args.push(options.format ? '--write' : '--check');
    args.push(...(patterns ?? DEFAULT_PRETTIER_PATTERNS));

    return args;
}
