export default {
    bin: 'jpp',
    dirname: 'jpp',
    scope: 'jpp-toolkit',
    pluginPrefix: 'plugin',
    description: 'CLI tool for JS/TS project development workflows.',
    plugins: [
        '@oclif/plugin-help',
        '@jpp-toolkit/plugin-clean',
        '@jpp-toolkit/plugin-lint',
        '@jpp-toolkit/plugin-check-updates',
        '@jpp-toolkit/plugin-build-lib',
        '@jpp-toolkit/plugin-changesets',
    ],
    commands: {
        strategy: 'explicit',
        target: './dist/index.mjs',
        identifier: 'commands',
    },
    topicSeparator: ' ',
};
