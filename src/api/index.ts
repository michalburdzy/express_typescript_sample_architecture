import { Router } from 'express';

import accounts from './accounts';
import status from './status';

export default Router()
  .use(accounts)
  .use(status);
