import path from 'node:path';

import { Logger, colors } from '@jpp-toolkit/logger';
import { findPackageRoot, findProjectRoot } from '@jpp-toolkit/utils';

import type { BuildType } from '~/enums';
import { NodeEnv } from '~/enums';
import type { RspackEnv } from '~/types';
import { findFilePathOrThrow } from '~/utils/find-file-path';

export type BaseContextOptions<TBuildType extends BuildType = BuildType> = {
    buildType: TBuildType;

    cwd?: string | undefined;
    outDir?: string | undefined;
    cacheDir?: string | undefined;

    pkgJsonFile?: string | undefined;
    tsconfigFile?: string | undefined;
    entryFile?: string | undefined;

    envVars?: Record<string, string | undefined> | undefined;

    useDecorators?: boolean | undefined;
};

export abstract class BaseContext<TBuildType extends BuildType = BuildType> {
    private readonly _buildType: TBuildType;

    private readonly _cwd: string;
    private readonly _packageDir: string;
    private readonly _projectDir: string;
    private readonly _outDir: string;
    private readonly _cacheDir: string;

    private readonly _pkgJsonFile: string;
    private readonly _tsconfigFile: string;
    private readonly _entryFile: string;

    private readonly _nodeEnv: NodeEnv;
    private readonly _envVars: Record<string, string | undefined>;

    private readonly _isProduction: boolean;
    private readonly _isWatchMode: boolean;
    private readonly _isDevServer: boolean;

    private readonly _useDecorators: boolean;

    private readonly _logger: Logger;

    constructor(options: BaseContextOptions<TBuildType>, rspackEnv: RspackEnv) {
        this._buildType = options.buildType;

        this._cwd = options.cwd ?? process.cwd();
        this._packageDir = findPackageRoot(this._cwd);
        this._projectDir = findProjectRoot(this._cwd);
        this._outDir = path.join(this._cwd, options.outDir ?? 'dist');
        this._cacheDir = path.join(
            this._packageDir,
            options.cacheDir ?? 'node_modules/.cache/rspack',
        );

        this._pkgJsonFile = findFilePathOrThrow(
            this._packageDir,
            options.pkgJsonFile ?? 'package.json',
        );
        this._tsconfigFile = findFilePathOrThrow(
            this._packageDir,
            options.tsconfigFile ?? 'tsconfig.json',
        );
        this._entryFile = options.entryFile ?? 'src/index';

        this._nodeEnv = process.env.NODE_ENV ?? NodeEnv.DEVELOPMENT;
        this._envVars = options.envVars ?? {};

        this._isProduction = this._nodeEnv === NodeEnv.PRODUCTION;
        this._isWatchMode = rspackEnv.RSPACK_WATCH === true;
        this._isDevServer = rspackEnv.RSPACK_SERVE === true;

        this._useDecorators = options.useDecorators ?? false;

        this._logger = new Logger({ rootDir: this._projectDir, rootIsProjectRoot: true });
    }

    public get buildType(): TBuildType {
        return this._buildType;
    }

    public get cwd(): string {
        return this._cwd;
    }
    public get packageDir(): string {
        return this._packageDir;
    }
    public get projectDir(): string {
        return this._projectDir;
    }
    public get outDir(): string {
        return this._outDir;
    }
    public get cacheDir(): string {
        return this._cacheDir;
    }

    public get pkgJsonFile(): string {
        return this._pkgJsonFile;
    }
    public get tsconfigFile(): string {
        return this._tsconfigFile;
    }
    public get entryFile(): string {
        return this._entryFile;
    }

    public get nodeEnv(): NodeEnv {
        return this._nodeEnv;
    }
    public get envVars(): Record<string, string | undefined> {
        return this._envVars;
    }

    public get isProduction(): boolean {
        return this._isProduction;
    }
    public get isWatchMode(): boolean {
        return this._isWatchMode;
    }
    public get isDevServer(): boolean {
        return this._isDevServer;
    }

    public get useDecorators(): boolean {
        return this._useDecorators;
    }

    public get logger(): Logger {
        return this._logger;
    }

    public print(): void {
        this.logger.info('=== Build Context ===');
        this.logger.log('  Project dir:', colors.blue(this.logger.formatPath(this.projectDir)));
        this.logger.log('  Current working dir:', colors.blue(this.logger.formatPath(this.cwd)));
        this.logger.log('  Package dir:', colors.blue(this.logger.formatPath(this.packageDir)));
        this.logger.log('  Output dir:', colors.blue(this.logger.formatPath(this.outDir)));
        this.logger.log('  Cache dir:', colors.blue(this.logger.formatPath(this.cacheDir)));

        this.logger.log('  Manifest file:', colors.blue(this.logger.formatPath(this.pkgJsonFile)));
        this.logger.log('  TSConfig file:', colors.blue(this.logger.formatPath(this.tsconfigFile)));
        this.logger.log('  Entry file:', colors.blue(this.logger.formatPath(this.entryFile)));

        this.logger.log('  Node environment:', colors.blue(this.nodeEnv));

        this.logger.log(
            '  Production build:',
            this.isProduction ? colors.green('YES') : colors.yellow('NO'),
        );
        this.logger.log(
            '  Watch mode:',
            this.isWatchMode ? colors.green('ENABLED') : colors.yellow('DISABLED'),
        );
        this.logger.log(
            '  Dev server:',
            this.isDevServer ? colors.green('ENABLED') : colors.yellow('DISABLED'),
        );

        this.logger.log(
            '  Decorators:',
            this.useDecorators ? colors.green('ENABLED') : colors.yellow('DISABLED'),
        );
    }
}
