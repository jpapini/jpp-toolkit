import { colors } from '@jpp-toolkit/logger';

import type { BuildType } from '~/enums';
import type { RspackEnv } from '~/types';
import { findFilePath } from '~/utils/find-file-path';

import { BaseContext } from './base-context';
import type { BaseContextOptions } from './base-context';

export type ReactContextOptions = BaseContextOptions<typeof BuildType.REACT> & {
    publicUrl?: URL | undefined;
    htmlTemplateFile?: string | undefined;
};

export class ReactContext extends BaseContext<typeof BuildType.REACT> {
    private readonly _publicUrl: URL | null;
    private readonly _htmlTemplateFile: string | null;

    constructor(options: ReactContextOptions, rspackEnv: RspackEnv) {
        const { htmlTemplateFile, ...baseOptions } = options;

        const publicUrl = options.publicUrl ?? null;
        if (publicUrl) {
            publicUrl.pathname += publicUrl.pathname.endsWith('/') ? '' : '/';
        }

        super(
            {
                ...baseOptions,
                envVars: {
                    ...baseOptions.envVars,
                    ...(publicUrl ? { PUBLIC_URL: publicUrl.toString() } : {}),
                },
            },
            rspackEnv,
        );

        this._publicUrl = publicUrl;

        this._htmlTemplateFile = findFilePath(this.cwd, htmlTemplateFile ?? 'src/index.html');
    }

    public get publicUrl(): URL | null {
        return this._publicUrl;
    }

    public get htmlTemplateFile(): string | null {
        return this._htmlTemplateFile;
    }

    public override print(): void {
        super.print();

        this.logger.log(
            '  Public URL:',
            this.publicUrl ? colors.blue(this.publicUrl.toString()) : colors.red('Not set'),
        );

        this.logger.log(
            '  HTML template file:',
            this.htmlTemplateFile ?
                colors.blue(this.logger.formatPath(this.htmlTemplateFile))
            :   colors.yellow('Not found'),
        );
    }
}
