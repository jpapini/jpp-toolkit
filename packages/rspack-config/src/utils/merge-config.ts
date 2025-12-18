import type { RspackOptions } from '@rspack/core';
import { mergeWithRules } from 'webpack-merge';

export const mergeConfig = mergeWithRules({
    entry: 'replace',
    externals: 'replace',
    module: {
        rules: {
            test: 'match',
            options: 'merge',
        },
    },
    plugins: 'replace',
}) as (...configs: RspackOptions[]) => RspackOptions;
