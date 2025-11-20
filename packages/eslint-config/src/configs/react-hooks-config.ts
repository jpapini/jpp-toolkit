import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

/**
 * React hooks configuration.
 * @see {@link https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks}
 */
export const reactHooksConfig = defineConfig({
    name: 'react-hooks-config',
    extends: [reactHooks.configs.flat.recommended],
});
