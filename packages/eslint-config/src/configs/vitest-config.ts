import vitest from '@vitest/eslint-plugin';
import { defineConfig } from 'eslint/config';

/**
 * Vitest configuration.
 * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest}
 */
export const vitestConfig = defineConfig({
    name: 'vitest-config',
    files: ['**/*.{spec,test}.{js,jsx,ts,tsx}'],
    extends: [vitest.configs.recommended],
    settings: {
        vitest: {
            typecheck: true,
        },
    },
    languageOptions: {
        globals: {
            ...vitest.environments.env.globals,
        },
    },
    rules: {
        /**
         * Require test file pattern.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename.md}
         */
        // 'vitest/consistent-test-filename': 'error',

        /**
         * Enforce using test or it but not both.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md}
         */
        'vitest/consistent-test-it': ['error', { fn: 'it' }],

        /**
         * Enforce using vitest or vi but not both.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-vitest-vi.md}
         */
        // 'vitest/consistent-vitest-vi': 'error',

        /**
         * Enforce hoisted APIs to be on top of the file.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/hoisted-apis-on-top.md}
         */
        // 'vitest/hoisted-apis-on-top': 'error',

        /**
         * Enforce a maximum number of expect per test.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md}
         */
        // 'vitest/max-expects': 'error',

        /**
         * Require describe block to be less than set max value or default value.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md}
         */
        // 'vitest/max-nested-describe': 'error',

        /**
         * Disallow alias methods.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md}
         */
        // 'vitest/no-alias-methods': 'error',

        /**
         * Disallow conditional expects.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md}
         */
        // 'vitest/no-conditional-expect': 'error',

        /**
         * Disallow conditional tests.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md}
         */
        'vitest/no-conditional-in-test': 'error',

        /**
         * Disallow conditional tests.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests.md}
         */
        // 'vitest/no-conditional-tests': 'error',

        /**
         * Disallow disabled tests.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md}
         */
        // 'vitest/no-disabled-tests': 'error',

        /**
         * Disallow using a callback in asynchronous tests and hooks.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-done-callback.md}
         */
        // 'vitest/no-done-callback': 'error',

        /**
         * Disallow duplicate hooks and teardown hooks.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md}
         */
        'vitest/no-duplicate-hooks': 'error',

        /**
         * Disallow focused tests.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md}
         */
        // 'vitest/no-focused-tests': 'error',

        /**
         * Disallow setup and teardown hooks.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md}
         */
        // 'vitest/no-hooks': 'error',

        /**
         * Disallow importing Vitest globals.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-importing-vitest-globals.md}
         */
        // 'vitest/no-importing-vitest-globals': 'error',

        /**
         * Disallow string interpolation in snapshots.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md}
         */
        // 'vitest/no-interpolation-in-snapshots': 'error',

        /**
         * Disallow large snapshots.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md}
         */
        // 'vitest/no-large-snapshots': 'error',

        /**
         * Disallow importing from mocks directory.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md}
         */
        // 'vitest/no-mocks-import': 'error',

        /**
         * Disallow the use of certain matchers.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-matchers.md}
         */
        // 'vitest/no-restricted-matchers': 'error',

        /**
         * Disallow specific vi. methods.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md}
         */
        // 'vitest/no-restricted-vi-methods': 'error',

        /**
         * Disallow using expect outside of it or test blocks.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect.md}
         */
        // 'vitest/no-standalone-expect': 'error',

        /**
         * Disallow using the f and x prefixes in favour of .only and .skip.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md}
         */
        // 'vitest/no-test-prefixes': 'error',

        /**
         * Disallow return statements in tests.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md}
         */
        'vitest/no-test-return-statement': 'error',

        /**
         * Enforce padding around afterAll blocks.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-after-all-blocks.md}
         */
        // 'vitest/padding-around-after-all-blocks': 'error',

        /**
         * Enforce padding around afterEach blocks.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-after-each-blocks.md}
         */
        // 'vitest/padding-around-after-each-blocks': 'error',

        /**
         * Enforce padding around vitest functions.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-all.md}
         */
        'vitest/padding-around-all': 'error',

        /**
         * Enforce padding around beforeAll blocks.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-before-all-blocks.md}
         */
        // 'vitest/padding-around-before-all-blocks': 'error',

        /**
         * Enforce padding around beforeEach blocks.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-before-each-blocks.md}
         */
        // 'vitest/padding-around-before-each-blocks': 'error',

        /**
         * Enforce padding around describe blocks.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-describe-blocks.md}
         */
        // 'vitest/padding-around-describe-blocks': 'error',

        /**
         * Enforce padding around expect groups.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-expect-groups.md}
         */
        // 'vitest/padding-around-expect-groups': 'error',

        /**
         * Enforce padding around test blocks.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-test-blocks.md}
         */
        // 'vitest/padding-around-test-blocks': 'error',

        /**
         * Enforce using toBeCalledOnce() or toHaveBeenCalledOnce().
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-once.md}
         */
        // 'vitest/prefer-called-once': 'error',

        /**
         * Enforce using toBeCalledTimes(1) or toHaveBeenCalledTimes(1).
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-times.md}
         */
        // 'vitest/prefer-called-times': 'error',

        /**
         * Enforce using toBeCalledWith() or toHaveBeenCalledWith().
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md}
         */
        'vitest/prefer-called-with': 'error',

        /**
         * Enforce using the built-in comparison matchers.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md}
         */
        'vitest/prefer-comparison-matcher': 'error',

        /**
         * Enforce using a function as a describe title over an equivalent string.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-describe-function-title.md}
         */
        // 'vitest/prefer-describe-function-title': 'error',

        /**
         * Enforce using each rather than manual loops.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md}
         */
        'vitest/prefer-each': 'error',

        /**
         * Enforce using the built-in quality matchers.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md}
         */
        'vitest/prefer-equality-matcher': 'error',

        /**
         * Enforce using expect assertions instead of callbacks.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md}
         */
        'vitest/prefer-expect-assertions': 'error',

        /**
         * Enforce using expect().resolves over expect(await ...) syntax.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md}
         */
        'vitest/prefer-expect-resolves': 'error',

        /**
         * Enforce using expectTypeOf instead of expect(typeof ...).
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-type-of.md}
         */
        // 'vitest/prefer-expect-type-of': 'error',

        /**
         * Enforce having hooks in consistent order.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md}
         */
        'vitest/prefer-hooks-in-order': 'error',

        /**
         * Enforce having hooks before any test cases.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md}
         */
        'vitest/prefer-hooks-on-top': 'error',

        /**
         * Prefer dynamic import in mock.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-import-in-mock.md}
         */
        // 'vitest/prefer-import-in-mock': 'error',

        /**
         * Enforce importing Vitest globals.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-importing-vitest-globals.md}
         */
        // 'vitest/prefer-importing-vitest-globals': 'error',

        /**
         * Enforce lowercase titles.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md}
         */
        'vitest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],

        /**
         * Enforce mock resolved/rejected shorthands for promises.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md}
         */
        'vitest/prefer-mock-promise-shorthand': 'error',

        /**
         * Enforce including a hint with external snapshots.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md}
         */
        'vitest/prefer-snapshot-hint': 'error',

        /**
         * Enforce using vi.spyOn.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md}
         */
        'vitest/prefer-spy-on': 'error',

        /**
         * Enforce using toBe(true) and toBe(false) over matchers that coerce types to boolean.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-boolean-matchers.md}
         */
        // 'vitest/prefer-strict-boolean-matchers': 'error',

        /**
         * Enforce strict equal over equal.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md}
         */
        'vitest/prefer-strict-equal': 'error',

        /**
         * Enforce using toBe().
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md}
         */
        // 'vitest/prefer-to-be': 'error',

        /**
         * Enforce using toBeFalsy().
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md}
         */
        // 'vitest/prefer-to-be-falsy': 'error',

        /**
         * Enforce using toBeObject().
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md}
         */
        // 'vitest/prefer-to-be-object': 'error',

        /**
         * Enforce using toBeTruthy.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md}
         */
        // 'vitest/prefer-to-be-truthy': 'error',

        /**
         * Enforce using toContain().
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md}
         */
        // 'vitest/prefer-to-contain': 'error',

        /**
         * Enforce using toHaveLength().
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md}
         */
        // 'vitest/prefer-to-have-length': 'error',

        /**
         * Enforce using test.todo.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md}
         */
        'vitest/prefer-todo': 'error',

        /**
         * Require vi.mocked() over fn as Mock.
         * @fixable
         * @typeChecked
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-vi-mocked.md}
         */
        'vitest/prefer-vi-mocked': 'error',

        /**
         * Ensure that every expect.poll call is awaited.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-awaited-expect-poll.md}
         */
        // 'vitest/require-awaited-expect-poll': 'error',

        /**
         * Require setup and teardown to be within a hook.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-hook.md}
         */
        // 'vitest/require-hook': 'error',

        /**
         * Enforce using type parameters with vitest mock functions.
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-mock-type-parameters.md}
         */
        // 'vitest/require-mock-type-parameters': 'error',

        /**
         * Require toThrow() to be called with an error message.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message.md}
         */
        'vitest/require-to-throw-message': 'error',

        /**
         * Enforce that all tests are in a top-level describe.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md}
         */
        'vitest/require-top-level-describe': 'error',

        /**
         * Require promises that have expectations in their chain to be valid.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-expect-in-promise.md}
         */
        // 'vitest/valid-expect-in-promise': 'error',

        /**
         * Disallow .todo usage.
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/warn-todo.md}
         */
        // 'vitest/warn-todo': 'error',

        /**
         * Enforce having expectation in test body.
         * @config recommended
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md}
         */
        // 'vitest/expect-expect': 'off',

        /**
         * Disallow commented out tests.
         * @config recommended
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md}
         */
        // 'vitest/no-commented-out-tests': 'off',

        /**
         * Disallow identical titles.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md}
         */
        // 'vitest/no-identical-title': 'off',

        /**
         * Disallow importing node:test.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test.md}
         */
        // 'vitest/no-import-node-test': 'off',

        /**
         * Prefer toHaveBeenCalledExactlyOnceWith over toHaveBeenCalledOnce and toHaveBeenCalledWith.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-exactly-once-with.md}
         */
        // 'vitest/prefer-called-exactly-once-with': 'off',

        /**
         * Require local Test Context for concurrent snapshot tests.
         * @config recommended
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots.md}
         */
        // 'vitest/require-local-test-context-for-concurrent-snapshots': 'off',

        /**
         * Enforce valid describe callback.
         * @config recommended
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md}
         */
        // 'vitest/valid-describe-callback': 'off',

        /**
         * Enforce valid expect() usage.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md}
         */
        // 'vitest/valid-expect': 'off',

        /**
         * Enforce valid titles.
         * @config recommended
         * @fixable
         * @see {@link https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md}
         */
        'vitest/valid-title': [
            'error',
            {
                mustMatch: { test: '^should' },
            },
        ],
    },
});
