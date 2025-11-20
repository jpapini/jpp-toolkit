export default {
    bin: 'jpp',
    dirname: 'jpp',
    scope: 'jpp',
    pluginPrefix: 'plugin',
    description: 'CLI tool for JS/TS project development workflows.',
    plugins: ['@oclif/plugin-help', '@jpp/plugin-clean', '@jpp/plugin-lint'],
    commands: {
        strategy: 'explicit',
        target: './dist/index.mjs',
        identifier: 'commands',
    },
};
