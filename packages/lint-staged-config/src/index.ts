import { buildEslintArgs, buildPrettierArgs } from '@jpp/utils';
import type { Configuration } from 'lint-staged';

const filterFile = (file: string): boolean =>
    !file.includes('pnpm-lock.yaml') && !file.endsWith('.hbs');

const config: Configuration = {
    '**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}': (files: readonly string[]): string[] => {
        const filteredFiles = files.filter(filterFile);
        if (!filteredFiles.length) return [];
        return [
            `prettier ${buildPrettierArgs({ format: true }, filteredFiles)}`,
            `eslint ${buildEslintArgs({ format: true }, filteredFiles)}`,
        ];
    },
    '**/*.css': (files: readonly string[]): string[] => {
        const filteredFiles = files.filter(filterFile);
        if (!filteredFiles.length) return [];
        return [`prettier ${buildPrettierArgs({ format: true }, filteredFiles)}`];
    },
    '**/*.{html,json,yml,yaml,md,mdx,gql,prisma}': (files: readonly string[]): string[] => {
        const filteredFiles = files.filter(filterFile);
        if (!filteredFiles.length) return [];
        return [`prettier ${buildPrettierArgs({ format: true }, filteredFiles)}`];
    },
};

export default config;
