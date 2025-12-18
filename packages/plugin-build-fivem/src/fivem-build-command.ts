import path from 'node:path';

import { Command } from '@jpp-toolkit/core';
import {
    createFivemScriptRspackConfig,
    createFivemUiRspackConfig,
} from '@jpp-toolkit/rspack-config';
import { debounce } from '@jpp-toolkit/utils';
import { Flags } from '@oclif/core';
import type { MultiStats, Stats } from '@rspack/core';
import { rspack } from '@rspack/core';
import { RspackDevServer } from '@rspack/dev-server';

import { refreshAndEnsureFivemResource } from './fivem-rcon';
import type { RconOptions } from './fivem-rcon';

type FivemBuildCommandOptions = {
    readonly resourceName: string;
    readonly rconOptions?: RconOptions | undefined;
    readonly watch: boolean;
};

export class FivemBuildCommand extends Command {
    static override summary = 'Build the FiveM resource using predefined config.';

    static override flags = {
        watch: Flags.boolean({
            char: 'w',
            description: 'Watch files for changes and rebuild automatically.',
            default: false,
        }),
        autoReload: Flags.boolean({
            char: 'r',
            description: 'Automatically reload FiveM resource after build.',
            default: false,
        }),
        server: Flags.string({
            char: 's',
            description: 'Server "ip:port" to connect for reloading FiveM resource after build.',
            default: '127.0.0.1:30120',
            required: false,
        }),
        password: Flags.string({
            char: 'p',
            description: 'RCON password for the FiveM server to reload resource after build.',
            required: false,
        }),
        resourceName: Flags.string({
            char: 'n',
            description:
                'Name of the FiveM resource to reload. If not provided, the name of the folder containing the resource will be used.',
            required: false,
        }),
    };

    static override examples = [
        {
            description: 'Build the FiveM resource.',
            command: '<%= config.bin %> <%= command.id %>',
        },
        {
            description: 'Build the FiveM resource in watch mode.',
            command: '<%= config.bin %> <%= command.id %> --watch',
        },
        {
            description:
                'Build the FiveM resource and automatically reload it on the server after build.',
            command:
                '<%= config.bin %> <%= command.id %> --auto-reload --password your_rcon_password',
        },
        {
            description:
                'Build the FiveM resource in watch mode and automatically reload it on the server after each build.',
            command:
                '<%= config.bin %> <%= command.id %> --watch --auto-reload --password your_rcon_password',
        },
        {
            description:
                'Build the FiveM resource and connect to a specific server for auto-reload.',
            command:
                '<%= config.bin %> <%= command.id %> --auto-reload --server=127.0.0.1:30120 --password your_rcon_password',
        },
    ];

    public async run(): Promise<void> {
        const { resourceName, rconOptions, watch } = await this._parseOptions();

        const scriptConfig = createFivemScriptRspackConfig(undefined, {
            isProduction: !watch,
        })({
            RSPACK_BUILD: !watch,
            RSPACK_WATCH: watch,
        });
        const scriptCompiler = rspack(scriptConfig);

        const uiConfig = createFivemUiRspackConfig(
            { resourceName },
            { isProduction: !watch },
        )({
            RSPACK_BUILD: !watch,
            RSPACK_SERVE: watch,
        });
        const uiCompiler = rspack(uiConfig);

        const reloadFivemResource = debounce(async () => {
            if (!rconOptions) return;
            this.logger.log('');
            this.logger.info(`Reloading FiveM resource "${resourceName}"...`);
            try {
                await refreshAndEnsureFivemResource(resourceName, rconOptions);
                this.logger.success(`FiveM resource reloaded successfully.\n`);
            } catch (error) {
                this.logger.error(`Failed to reload FiveM resource: ${error}\n`);
            }
        }, 500);

        const compilerCallback = (err: Error | null, stats: Stats | MultiStats | undefined) => {
            if (err) {
                this.logger.error(err.toString());
                return;
            }
            if (!stats) return;
            this.logger.log(stats.toString({ preset: 'normal', colors: true }), '\n');
            void reloadFivemResource();
        };

        if (watch) {
            const devServerOptions = uiConfig.devServer ?? {};
            devServerOptions.hot = true;
            const devServer = new RspackDevServer(devServerOptions, uiCompiler);
            await devServer.start();
            scriptCompiler.watch({}, compilerCallback);
        } else {
            uiCompiler.run((error: Error | null, stats: Stats | MultiStats | undefined) => {
                uiCompiler.close((closeErr) => {
                    if (closeErr) this.logger.error(closeErr.toString());
                    compilerCallback(error, stats);
                });
            });
            scriptCompiler.run((error: Error | null, stats: Stats | MultiStats | undefined) => {
                scriptCompiler.close((closeErr) => {
                    if (closeErr) this.logger.error(closeErr.toString());
                    compilerCallback(error, stats);
                });
            });
        }
    }

    private async _parseOptions(): Promise<FivemBuildCommandOptions> {
        const { flags } = await this.parse(FivemBuildCommand);

        const resourceName = flags.resourceName ?? path.basename(process.cwd());

        let rconOptions: RconOptions | undefined;

        if (flags.autoReload) {
            if (!flags.password) {
                throw new Error(
                    'RCON password is required for auto-reload. Please provide it using the --password flag.',
                );
            }

            const match = /^(?<host>[^:]+):(?<port>\d+)$/u.exec(flags.server);
            const { host, port } = match?.groups ?? {};

            if (!host || !port) {
                throw new Error(
                    `Invalid server address format: ${flags.server}. Expected format is "ip:port".`,
                );
            }

            rconOptions = {
                host,
                port: parseInt(port),
                password: flags.password,
            };
        }

        return { resourceName, rconOptions, watch: flags.watch };
    }
}
