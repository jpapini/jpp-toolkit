import perfectionist from 'eslint-plugin-perfectionist';
import { defineConfig } from 'eslint/config';

/**
 * Perfectionist configuration.
 * @see {@link https://perfectionist.dev/rules}
 */
export const perfectionistConfig = defineConfig({
    name: 'perfectionist-config',
    plugins: { perfectionist },
    rules: {
        /**
         * Enforce sorted arrays before include method.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-array-includes}
         */
        'perfectionist/sort-array-includes': 'error',

        /**
         * Enforce sorted classes.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-classes}
         */
        // 'perfectionist/sort-classes': 'error',

        /**
         * Enforce sorted decorators.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-decorators}
         */
        'perfectionist/sort-decorators': 'error',

        /**
         * Enforce sorted TypeScript enums.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-enums}
         */
        // 'perfectionist/sort-enums': 'error',

        /**
         * Enforce sorted exports.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-exports}
         */
        'perfectionist/sort-exports': [
            'error',
            {
                type: 'natural',
                order: 'asc',
                groupKind: 'types-first',
            },
        ],

        /**
         * Enforce sorted heritage clauses.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-heritage-clauses}
         */
        'perfectionist/sort-heritage-clauses': 'error',

        /**
         * Enforce sorted imports.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-imports}
         */
        'sort-imports': 'off',
        'perfectionist/sort-imports': [
            'error',
            {
                type: 'natural',
                order: 'asc',
                internalPattern: ['^~.*'],
                newlinesBetween: 'always',
                groups: [
                    ['side-effect', 'side-effect-style'],
                    ['builtin-type', 'builtin'],
                    ['external-type', 'external'],
                    ['internal-type', 'internal'],
                    ['parent-type', 'parent'],
                    ['sibling-type', 'sibling'],
                    ['index-type', 'index'],
                    ['object'],
                    ['style'],
                    ['unknown'],
                ],
            },
        ],

        /**
         * Enforce sorted interface properties.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-interfaces}
         */
        // 'perfectionist/sort-interfaces': 'error',

        /**
         * Enforce sorted intersection types.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-intersection-types}
         */
        // 'perfectionist/sort-intersection-types': 'error',

        /**
         * Enforce sorted JSX props.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-jsx-props}
         */
        // 'perfectionist/sort-jsx-props': 'error',

        /**
         * Enforce sorted Map elements.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-maps}
         */
        // 'perfectionist/sort-maps': 'error',

        /**
         * Enforce sorted modules.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-modules}
         */
        // 'perfectionist/sort-modules': 'error',

        /**
         * Enforce sorted named exports.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-named-exports}
         */
        // 'perfectionist/sort-named-exports': 'error',

        /**
         * Enforce sorted named imports.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-named-imports}
         */
        // 'perfectionist/sort-named-imports': 'error',

        /**
         * Enforce sorted object types.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-object-types}
         */
        // 'perfectionist/sort-object-types': 'error',

        /**
         * Enforce sorted objects.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-objects}
         */
        // 'perfectionist/sort-objects': 'error',

        /**
         * Enforce sorted Set elements.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-sets}
         */
        // 'perfectionist/sort-sets': 'error',

        /**
         * Enforce sorted switch case statements.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-switch-case}
         */
        // 'perfectionist/sort-switch-case': 'error',

        /**
         * Enforce sorted union types.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-union-types}
         */
        // 'perfectionist/sort-union-types': 'error',

        /**
         * Enforce sorted variable declarations.
         * @fixable
         * @see {@link https://perfectionist.dev/rules/sort-variable-declarations}
         */
        // 'perfectionist/sort-variable-declarations': 'error',
    },
});
