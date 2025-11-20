import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { createNodeResolver, importX } from 'eslint-plugin-import-x';
import { defineConfig } from 'eslint/config';

/**
 * Import X configuration.
 * @see {@link https://github.com/un-ts/eslint-plugin-import-x}
 */
export const importXConfig = defineConfig([
    {
        name: 'import-x-config',
        // @ts-expect-error - import-x flatConfigs is wrongly typed
        extends: [importX.flatConfigs.recommended],
        settings: {
            'import-x/resolver-next': [createNodeResolver()],
        },
        rules: {
            /**
             * Forbid imported names marked with @deprecated documentation tag.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-deprecated.md}
             */
            // 'import-x/no-deprecated': 'error',

            /**
             * Forbid empty named import blocks.
             * @fixable
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-empty-named-blocks.md}
             */
            'import-x/no-empty-named-blocks': 'error',

            /**
             * Forbid the use of extraneous packages.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-extraneous-dependencies.md}
             */
            // 'import-x/no-extraneous-dependencies': 'error',

            /**
             * Forbid the use of mutable exports with var or let.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-mutable-exports.md}
             */
            'import-x/no-mutable-exports': 'error',

            /**
             * Forbid importing a default export by a different name.
             * @config warnings
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-rename-default.md}
             */
            'import-x/no-rename-default': 'off',

            /**
             * Forbid modules without exports, or exports without matching import in another module.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unused-modules.md}
             */
            'import-x/no-unused-modules': 'error',

            /**
             * Forbid AMD require and define calls.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-amd.md}
             */
            // 'import-x/no-amd': 'error',

            /**
             * Forbid CommonJS require calls and module.exports or exports.*.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-commonjs.md}
             */
            // 'import-x/no-commonjs': 'error',

            /**
             * Forbid import statements with CommonJS module.exports.
             * @fixable
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-import-module-exports.md}
             */
            // 'import-x/no-import-module-exports': 'error',

            /**
             * Forbid Node.js builtin modules.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-nodejs-modules.md}
             */
            // 'import-x/no-nodejs-modules': 'error',

            /**
             * Forbid potentially ambiguous parse goal (script vs. module).
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/unambiguous.md}
             */
            // 'import-x/unambiguous': 'error',

            /**
             * Forbid import of modules using absolute paths.
             * @fixable
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-absolute-path.md}
             */
            'import-x/no-absolute-path': 'error',

            /**
             * Forbid a module from importing a module with a dependency path back to itself.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-cycle.md}
             */
            'import-x/no-cycle': 'error',

            /**
             * Forbid require() calls with expressions.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-dynamic-require.md}
             */
            // 'import-x/no-dynamic-require': 'error',

            /**
             * Forbid importing the submodules of other modules.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-internal-modules.md}
             */
            // 'import-x/no-internal-modules': 'error',

            /**
             * Forbid importing packages through relative paths.
             * @fixable
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-packages.md}
             */
            'import-x/no-relative-packages': 'error',

            /**
             * Forbid importing modules from parent directories.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-parent-imports.md}
             */
            // 'import-x/no-relative-parent-imports': 'error',

            /**
             * Enforce which files can be imported in a given folder.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-restricted-paths.md}
             */
            // 'import-x/no-restricted-paths': 'error',

            /**
             * Forbid a module from importing itself.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-self-import.md}
             */
            'import-x/no-self-import': 'error',

            /**
             * Forbid unnecessary path segments in import and require statements.
             * @fixable
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-useless-path-segments.md}
             */
            'import-x/no-useless-path-segments': 'error',

            /**
             * Forbid webpack loader syntax in imports.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-webpack-loader-syntax.md}
             */
            // 'import-x/no-webpack-loader-syntax': 'error',

            /**
             * Enforce or ban the use of inline type-only markers for named imports.
             * @fixable
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/consistent-type-specifier-style.md}
             */
            'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],

            /**
             * Enforce a leading comment with the webpackChunkName for dynamic imports.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/dynamic-import-chunkname.md}
             */
            // 'import-x/dynamic-import-chunkname': 'error',

            /**
             * Ensure all exports appear after other statements.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/exports-last.md}
             */
            // 'import-x/exports-last': 'error',

            /**
             * Ensure consistent use of file extension within the import path.
             * @fixable
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/extensions.md}
             */
            // 'import-x/extensions': 'error',

            /**
             * Ensure all imports appear before other statements.
             * @fixable
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/first.md}
             */
            'import-x/first': 'error',

            /**
             * Prefer named exports to be grouped together in a single export declaration.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/group-exports.md}
             */
            // 'import-x/group-exports': 'error',

            /**
             * Replaced by import-x/first.
             * @fixable
             * @deprecated
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/imports-first.md}
             */
            // 'import-x/imports-first': 'error',

            /**
             * Enforce the maximum number of dependencies a module can have.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/max-dependencies.md}
             */
            // 'import-x/max-dependencies': 'error',

            /**
             * Enforce a newline after import statements.
             * @fixable
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/newline-after-import.md}
             */
            'import-x/newline-after-import': 'error',

            /**
             * Forbid anonymous values as default exports.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-anonymous-default-export.md}
             */
            // 'import-x/no-anonymous-default-export': 'error',

            /**
             * Forbid default exports.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-default-export.md}
             */
            // 'import-x/no-default-export': 'error',

            /**
             * Forbid named default exports.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-default.md}
             */
            // 'import-x/no-named-default': 'error',

            /**
             * Forbid named exports.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-export.md}
             */
            // 'import-x/no-named-export': 'error',

            /**
             * Forbid namespace (a.k.a. "wildcard" *) imports.
             * @fixable
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-namespace.md}
             */
            // 'import-x/no-namespace': 'error',

            /**
             * Forbid unassigned imports.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unassigned-import.md}
             */
            // 'import-x/no-unassigned-import': 'error',

            /**
             * Enforce a convention in module import order.
             * @fixable
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md}
             */
            // 'import-x/order': 'error',

            /**
             * Prefer a default export if module exports a single name or multiple names.
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/prefer-default-export.md}
             */
            // 'import-x/prefer-default-export': 'error',

            /**
             * Enforce using namespace imports for specific modules, like react/react-dom, etc.
             * @fixable
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/prefer-namespace-import.md}
             */
            // 'import-x/prefer-namespace-import': 'error',

            /**
             * Forbid any invalid exports, i.e. re-export of the same name.
             * @config recommended
             * @config errors
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/export.md}
             */
            // 'import-x/export': 'off',

            /**
             * Forbid use of exported name as identifier of default export.
             * @config recommended
             * @config warnings
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default.md}
             */
            'import-x/no-named-as-default': 'off',

            /**
             * Forbid use of exported name as property of default export.
             * @config recommended
             * @config warnings
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default-member.md}
             */
            'import-x/no-named-as-default-member': 'off',

            /**
             * Ensure a default export is present, given a default import.
             * @config recommended
             * @config errors
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/default.md}
             */
            // 'import-x/default': 'off',

            /**
             * Ensure named imports correspond to a named export in the remote file.
             * @config recommended
             * @config typescript
             * @config errors
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/named.md}
             */
            // 'import-x/named': 'off',

            /**
             * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
             * @config recommended
             * @config errors
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/namespace.md}
             */
            // 'import-x/namespace': 'off',

            /**
             * Ensure imports point to a file/module that can be resolved.
             * @config recommended
             * @config errors
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md}
             */
            'import-x/no-unresolved': 'off',

            /**
             * Forbid repeated import of the same module in multiple places.
             * @config recommended
             * @config warnings
             * @fixable
             * @see {@link https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-duplicates.md}
             */
            'no-duplicate-imports': 'off',
            // 'import-x/no-duplicates': 'off',
        },
    },
    {
        name: 'import-x-config-typescript',
        files: ['**/*.{ts,tsx}'],
        // @ts-expect-error - import-x flatConfigs is wrongly typed
        extends: [importX.flatConfigs.typescript],
        settings: {
            'import-x/resolver-next': [createTypeScriptImportResolver(), createNodeResolver()],
        },
    },
]);
