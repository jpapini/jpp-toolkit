import { includeIgnoreFile } from '@eslint/compat';
import { findGitIgnore } from '@jpp/utils';
import { defineConfig } from 'eslint/config';

/**
 * Generates an ESLint configuration that ignores files based on the project's .gitignore.
 * @see {@link https://eslint.org/docs/latest/use/configure/ignore#including-gitignore-files}
 */
export const ignoreConfig = (rootDir?: string) => {
    const gitIgnorePath = findGitIgnore(rootDir);
    const config = includeIgnoreFile(gitIgnorePath);

    return defineConfig({
        name: 'ignore-config',
        extends: [config],
    });
};
