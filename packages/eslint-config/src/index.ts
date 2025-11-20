import { defineConfig } from 'eslint/config';
import type { Config } from 'eslint/config';
import globals from 'globals';

import { eslintConfig } from './configs/eslint-config';
import { ignoreConfig } from './configs/ignore-config';
import { importXConfig } from './configs/import-x-config';
import { jsxA11yConfig } from './configs/jsx-a11y-config';
import { perfectionistConfig } from './configs/perfectionist-config';
import { prettierConfig } from './configs/prettier-config';
import { reactConfig } from './configs/react-config';
import { reactHooksConfig } from './configs/react-hooks-config';
import { stylisticConfig } from './configs/stylistic-config';
import { typescriptConfig } from './configs/typescript-config';
import { unicornConfig } from './configs/unicorn-config';
import { vitestConfig } from './configs/vitest-config';

/**
 * Creates a base ESLint configuration object with predefined defaults.
 */
export function createBaseEslintConfig(rootDir?: string, overrides: Config[] = []) {
    return defineConfig([
        ignoreConfig(rootDir),
        eslintConfig,
        stylisticConfig,
        importXConfig,
        perfectionistConfig,
        unicornConfig,
        typescriptConfig,
        vitestConfig,
        ...overrides,
        prettierConfig,
        {
            name: 'language-config',
            languageOptions: {
                ecmaVersion: 'latest',
                globals: {
                    ...globals.node,
                },
            },
        },
    ]);
}

/**
 * Creates a React-specific ESLint configuration object with predefined defaults.
 */
export function createReactEslintConfig(rootDir?: string, overrides: Config[] = []) {
    return defineConfig([
        createBaseEslintConfig(rootDir, overrides),
        {
            name: 'typescript-config',
            files: ['**/*.{ts,tsx}'],
            rules: {
                // Allow {} type with React
                '@typescript-eslint/no-empty-object-type': 'off',
            },
        },
        reactConfig,
        reactHooksConfig,
        jsxA11yConfig,
        ...overrides,
        prettierConfig,
        {
            name: 'language-config',
            languageOptions: {
                globals: {
                    ...globals.browser,
                },
            },
        },
    ]);
}
