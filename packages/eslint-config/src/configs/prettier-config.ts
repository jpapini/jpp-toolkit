import prettier from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';

/**
 * Prettier configuration.
 * @see {@link https://github.com/prettier/eslint-plugin-prettier}
 */
export const prettierConfig = defineConfig({
    name: 'prettier-config',
    extends: [prettier],
});
