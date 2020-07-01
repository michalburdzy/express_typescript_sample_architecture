import path from 'path';
import express, { Router, Express } from 'express';
import {
  setupI18n,
  i18nMiddleware,
  attachLoggerMiddleware,
  jsonParserMiddleware,
  urlEncodedParserMiddleware,
  corsMiddleware,
  appErrorHandlerMiddleware,
} from 'core-package';
import cookieParser from 'cookie-parser';

export interface IAppOptions {
  prefix: string;
  router: Router;
}

const localesPath = path.resolve(__dirname, '..', 'locale');

export default ({ prefix, router }: IAppOptions): Express => {
  setupI18n(localesPath);

  return express()
    .use(cookieParser())
    .use(i18nMiddleware)
    .use(attachLoggerMiddleware({ service: prefix }))
    .use(jsonParserMiddleware)
    .use(urlEncodedParserMiddleware)
    .use(corsMiddleware)
    .use(prefix, router)
    .use(appErrorHandlerMiddleware)
    .disable('x-powered-by');
};
