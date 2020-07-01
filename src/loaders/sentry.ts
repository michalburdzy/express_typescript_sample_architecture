import { init } from '@sentry/node';
import config from './config';

export default (): void => init({ dsn: config.SENTRY_DSN });
