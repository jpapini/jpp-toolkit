import babelParsers from 'prettier/parser-babel';
import { sortPackageJson } from '@jpp/sort-package-json';
import type { Plugin } from 'prettier';

const parser = babelParsers.parsers['json-stringify'];

export const testPath = (path: string): boolean => /(?:^|\\|\/)package\.json$/u.test(path);

export const parsers: Plugin['parsers'] = {
    'json-stringify': {
        ...parser,
        preprocess: (text, options) => {
            const packageSortOrder = options['packageSortOrder'] as string[] | undefined;
            const preprocessedText = parser.preprocess?.(text, options) ?? text;
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
