export interface IAppConfig {
  NODE_ENV: string;
  IS_PRODUCTION: boolean;
  IS_TEST: boolean;
  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
  DB_LOGGING: boolean;
  SENTRY_DSN?: string;
  LOG_LEVEL?: string;
}

const REQUIRED_VARIABLES = ['DB_HOST', 'DB_PORT', 'DB_USERNAME', 'DB_PASSWORD', 'DB_DATABASE'];

function parseBoolean(val: string): boolean {
  return !!val && val === 'true';
}

function parseNumber(val: string): number {
  return parseInt(val, 10);
}

function checkRequiredVariables(config: NodeJS.ProcessEnv): void {
  REQUIRED_VARIABLES.forEach((key): void => {
    if (!config[key] || config[key] === '') {
      throw new Error(`${key} env variable is required`);
    }
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseConfig(config: any): IAppConfig {
  const isTest = config.NODE_ENV === 'test';

  return {
    NODE_ENV: config.NODE_ENV || 'development',
    IS_PRODUCTION: config.NODE_ENV === 'production',
    IS_TEST: isTest,
    DB_HOST: config.DB_HOST,
    DB_PORT: parseNumber(config.DB_PORT),
    DB_USERNAME: config.DB_USERNAME,
    DB_PASSWORD: config.DB_PASSWORD,
    DB_DATABASE: config.DB_DATABASE,
    DB_LOGGING: parseBoolean(config.DB_LOGGING),
    SENTRY_DSN: config.SENTRY_DSN,
    LOG_LEVEL: isTest ? 'warn' : config.LOG_LEVEL,
  };
}

function buildConfig(config = process.env): IAppConfig {
  checkRequiredVariables(config);
  return parseConfig(config);
}

export default buildConfig();
