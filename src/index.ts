import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  TranslateFunction,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ILogger,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  IAuthObject,
} from 'core-package';
import bootstrap from './loaders';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface Request {
      logger: ILogger;
      translate: TranslateFunction;
      jwt: IAuthObject;
    }
  }
}

bootstrap();
