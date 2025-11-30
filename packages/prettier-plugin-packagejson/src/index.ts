import { sortPackageJson } from '@jpp/sort-package-json';
import type { Plugin } from 'prettier';
// eslint-disable-next-line import-x/default
import babelParsers from 'prettier/parser-babel';

const parser = babelParsers.parsers['json-stringify'];

export const testPath = (path: string): boolean => /(?:^|\\|\/)package\.json$/u.test(path);

export const parsers: Plugin['parsers'] = {
    'json-stringify': {
        ...parser,
        preprocess: async (text, options) => {
            const packageSortOrder = options['packageSortOrder'] as string[] | undefined;
            const preprocessedText = (await parser.preprocess?.(text, options)) ?? text;
            const sortPackageJsonOptions =
                Array.isArray(packageSortOrder) && packageSortOrder.length !== 0 ?
                    { sortOrder: packageSortOrder }
                :   undefined;
            return testPath(options.filepath) ?
                    sortPackageJson(preprocessedText, sortPackageJsonOptions)
                :   preprocessedText;
        },
    },
};

export const options: Plugin['options'] = {
    packageSortOrder: {
        category: 'Global',
        type: 'string',
        array: true,
        default: [{ value: [] }],
        description: 'Custom ordering array',
    },
};
