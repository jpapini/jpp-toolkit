import { Command } from '@jpp-toolkit/core';
import { createFivemRspackConfig } from '@jpp-toolkit/rspack-config';
import { getErrMsg } from '@jpp-toolkit/utils';
import { Flags } from '@oclif/core';
import { rspack } from '@rspack/core';

export class FivemBuildCommand extends Command {
    static override summary = 'Build the project using predefined fivem build config.';

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
    };

    static override examples = [];

    public async run(): Promise<void> {
        const { flags } = await this.parse(FivemBuildCommand);

        const mode = (flags.mode ?? flags.watch) ? 'development' : 'production';
        const config = createFivemRspackConfig({ mode });
        const compiler = rspack(config);

        if (flags.watch) {
            this.logger.info(`Building FiveM project in watch mode...`);
            compiler.watch({}, (err, stats) => {
                if (err) {
                    this.logger.error(getErrMsg(err));
                    if ('details' in err) this.logger.error(err.details as string);
                    if ('stack' in err) this.logger.error(err.stack);
                    return;
                }

                if (stats) this.logger.log(stats.toString());
            });
        } else {
            this.logger.info(`Building FiveM project...`);
            compiler.run((err, stats) => {
                if (err) {
                    this.logger.error(getErrMsg(err));
                    if ('details' in err) this.logger.error(err.details as string);
                    if ('stack' in err) this.logger.error(err.stack);
                    return;
                }

                if (stats) this.logger.log(stats.toString());
            });
        }
    }
}
