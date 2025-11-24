import path from 'node:path';

import { findProjectRoot } from './find-closest';

export const DEFAULT_ESLINT_PATTERNS = ['.'];

export const DEFAULT_ESLINT_CACHE = 'node_modules/.cache/eslint/.eslintcache';

export type BuildEslintArgsOptions = {
    readonly format?: boolean | undefined;
    readonly projectRoot?: string | undefined;
    readonly cacheLocation?: string | undefined;
};

export function buildEslintArgs(options: BuildEslintArgsOptions, patterns?: string[]): string[] {
    const args: string[] = [];

    let cacheLocation: string;
    if (options.cacheLocation) {
        ({ cacheLocation } = options);
    } else if (options.projectRoot) {
        cacheLocation = path.resolve(options.projectRoot, DEFAULT_ESLINT_CACHE);
    } else {
        cacheLocation = path.resolve(findProjectRoot(), DEFAULT_ESLINT_CACHE);
    }
    args.push('--cache', '--cache-location', cacheLocation);

    args.push('--flag', 'v10_config_lookup_from_file');
    args.push(...(options.format ? ['--fix'] : []));
    args.push(...(patterns ?? DEFAULT_ESLINT_PATTERNS));

    return args;
}
