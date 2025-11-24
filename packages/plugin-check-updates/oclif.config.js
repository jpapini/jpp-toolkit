export default {
    description: 'Plugin that add the check-updates command to the jpp cli.',
    commands: {
        strategy: 'explicit',
        target: './dist/index.mjs',
        identifier: 'commands',
    },
};
