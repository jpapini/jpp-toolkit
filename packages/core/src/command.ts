import { Logger } from '@jpp-toolkit/logger';
import type { Config } from '@oclif/core';
import { Command as OclifCommand } from '@oclif/core';

export abstract class Command extends OclifCommand {
    private readonly _logger: Logger;

    constructor(argv: string[], config: Config) {
        super(argv, config);

        this._logger = new Logger({
            logStdout: this.log.bind(this),
            logStderr: this.logToStderr.bind(this),
            rootIsProjectRoot: true,
        });
    }

    public get logger(): Logger {
        return this._logger;
    }

    public fatalError(message: string, exitCode = 1): never {
        this._logger.error(message);
        this.exit(exitCode);
    }
}
