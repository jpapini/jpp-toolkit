export default {
    description: 'Plugin that add the fivem build command to the jpp cli.',
    commands: {
        strategy: 'explicit',
        target: './dist/index.mjs',
        identifier: 'commands',
    },
    topics: {
        build: {
            description: 'Commands for building code.',
        },
    },
};
