import { Router } from 'express';

import { jwtMiddleware, validatedExpressRequest } from 'core-package';
import route from './route';
import validationMiddleware from './validator';

export default Router().get(
  '/accounts/:accountId',
  validationMiddleware,
  jwtMiddleware(),
  validatedExpressRequest(route),
);
