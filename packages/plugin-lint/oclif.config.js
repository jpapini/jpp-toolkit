export default {
    description: 'Plugin that add the lint and format commands to the jpp cli.',
    commands: {
        strategy: 'explicit',
        target: './dist/index.mjs',
        identifier: 'commands',
    },
};
