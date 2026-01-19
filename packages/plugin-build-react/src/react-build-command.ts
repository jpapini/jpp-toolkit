import { Command } from '@jpp-toolkit/core';
import { createReactRspackConfig } from '@jpp-toolkit/rspack-config';
import { Flags } from '@oclif/core';
import type { MultiStats, Stats } from '@rspack/core';
import { rspack } from '@rspack/core';
import { RspackDevServer } from '@rspack/dev-server';

export class ReactBuildCommand extends Command {
    static override summary = 'Build React project using Rspack.';

    static override flags = {
        watch: Flags.boolean({
            char: 'w',
            description: 'Watch files for changes and rebuild automatically.',
            default: false,
        }),
    };

    static override examples = [
        {
            description: 'Build the React project once.',
            command: '<%= config.bin %> <%= command.id %>',
        },
        {
            description: 'Build the React project in watch mode.',
            command: '<%= config.bin %> <%= command.id %> --watch',
        },
    ];

    public async run(): Promise<void> {
        const {
            flags: { watch },
        } = await this.parse(ReactBuildCommand);

        const config = createReactRspackConfig(undefined, {
            isProduction: !watch,
        })({
            RSPACK_BUILD: !watch,
            RSPACK_WATCH: watch,
        });
        const compiler = rspack(config);

        const compilerCallback = (err: Error | null, stats: Stats | MultiStats | undefined) => {
            if (err) {
                this.logger.error(err.toString());
                return;
            }
            if (!stats) return;
            this.logger.log(stats.toString({ preset: 'normal', colors: true }), '\n');
        };

        if (watch) {
            const devServerOptions = config.devServer ?? {};
            devServerOptions.hot = true;
            const devServer = new RspackDevServer(devServerOptions, compiler);
            await devServer.start();
        } else {
            compiler.run((error: Error | null, stats: Stats | MultiStats | undefined) => {
                compiler.close((closeErr) => {
                    if (closeErr) this.logger.error(closeErr.toString());
                    compilerCallback(error, stats);
                });
            });
        }
    }
}
