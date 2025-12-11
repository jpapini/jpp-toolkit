import path from 'node:path';

import { Command } from '@jpp-toolkit/core';
import { createFivemRspackConfig } from '@jpp-toolkit/rspack-config';
import { getErrMsg } from '@jpp-toolkit/utils';
import { Flags } from '@oclif/core';
import type { Compiler, Stats } from '@rspack/core';
import { rspack } from '@rspack/core';
import { Rcon } from 'rcon-client';

type Mode = 'development' | 'production';
type ServerAddress = { readonly host: string; readonly port: number };

export class FivemBuildCommand extends Command {
    static override summary = 'Build the FiveM resource using predefined config.';

    static override flags = {
        watch: Flags.boolean({
            char: 'w',
            description: 'Watch files for changes and rebuild automatically.',
            default: false,
        }),
        mode: Flags.string({
            char: 'm',
            description: 'Set the build mode (development or production).',
            options: ['development', 'production'],
            required: false,
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
            description: 'Build the FiveM resource in production mode.',
            command: '<%= config.bin %> <%= command.id %> --mode=production',
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
        const { flags } = await this.parse(FivemBuildCommand);

        const { watch, autoReload, password } = flags;
        const mode = (flags.mode ?? (watch ? 'development' : 'production')) as Mode;
        const { host, port } = this._parseServerAddress(flags.server);
        const resourceName = flags.resourceName ?? path.basename(process.cwd());

        const config = createFivemRspackConfig({ mode });
        const compiler = rspack(config);

        if (autoReload) {
            if (!password) {
                this.logger.error(
                    'RCON password is required for auto-reload. Please provide it using the --password flag.',
                );
                this.exit(1);
            }

            const rcon = new Rcon({ host, port, password });
            await this._enableAutoReload(compiler, rcon, resourceName);
        }

        if (flags.watch) {
            this.logger.info(`Building FiveM resource in watch mode...\n`);
            compiler.watch({}, this._compilerCallback.bind(this));
        } else {
            this.logger.info(`Building FiveM resource...\n`);
            compiler.run(this._compilerCallback.bind(this));
        }
    }

    private _parseServerAddress(address: string): ServerAddress {
        const match = /^(?<host>[^:]+):(?<port>\d+)$/u.exec(address);
        const { host, port } = match?.groups ?? {};

        if (!host || !port) {
            throw new Error(
                `Invalid server address format: ${address}. Expected format is "ip:port".`,
            );
        }

        return { host, port: parseInt(port) };
    }

    private _compilerCallback(err: Error | null, stats: Stats | undefined): void {
        if (err) {
            this.logger.error(getErrMsg(err));
            if ('details' in err) this.logger.error(err.details as string);
            if ('stack' in err) this.logger.error(err.stack);
            return;
        }

        if (stats) this.logger.log(stats.toString(), '\n');
    }

    private async _enableAutoReload(
        compiler: Compiler,
        rcon: Rcon,
        resourceName: string,
    ): Promise<void> {
        try {
            await rcon.connect();
        } catch (error) {
            this.logger.error(`Failed to connect to FiveM server via RCON: ${getErrMsg(error)}`);
            this.exit(1);
        }

        compiler.hooks.done.tapPromise('FivemAutoReloadPlugin', async (stats) => {
            if (stats.hasErrors()) {
                this.logger.warning('Build failed. Skipping FiveM resource reload.\n');
                return;
            }

            this.logger.info(`Reloading FiveM resource "${resourceName}"...`);
            try {
                await rcon.send(`refresh; ensure ${resourceName}`);
                this.logger.success(`FiveM resource reloaded successfully.\n`);
            } catch (error) {
                this.logger.error(`Failed to reload FiveM resource: ${getErrMsg(error)}\n`);
            }
        });
    }
}
