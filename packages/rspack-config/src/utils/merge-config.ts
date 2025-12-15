import { mergeWithRules } from 'webpack-merge';

export const mergeConfig = mergeWithRules({
    module: {
        rules: {
            test: 'match',
            loader: 'match',
            options: 'merge',
        },
    },
});
