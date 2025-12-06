import { buildEslintArgs, buildPrettierArgs } from '@jpp-toolkit/utils';
import type { Configuration } from 'lint-staged';

const filterFile = (file: string): boolean =>
    !file.includes('pnpm-lock.yaml') && !file.endsWith('.hbs');

const config: Configuration = {
    '**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}': (files: readonly string[]): string[] => {
        const filteredFiles = files.filter(filterFile);
        if (!filteredFiles.length) return [];
        return [
            `prettier ${buildPrettierArgs({ format: true }, filteredFiles).join(' ')}`,
            `eslint ${buildEslintArgs({ format: true }, filteredFiles).join(' ')}`,
        ];
    },
    '**/*.css': (files: readonly string[]): string[] => {
        const filteredFiles = files.filter(filterFile);
        if (!filteredFiles.length) return [];
        return [`prettier ${buildPrettierArgs({ format: true }, filteredFiles).join(' ')}`];
    },
    '**/*.{html,json,yml,yaml,md,mdx,gql,prisma}': (files: readonly string[]): string[] => {
        const filteredFiles = files.filter(filterFile);
        if (!filteredFiles.length) return [];
        return [`prettier ${buildPrettierArgs({ format: true }, filteredFiles).join(' ')}`];
    },
};

export default config;
