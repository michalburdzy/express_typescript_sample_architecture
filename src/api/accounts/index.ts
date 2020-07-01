import { Router } from 'express';

import getAccountsList from './getAccountsList';
import getAccount from './getAccount';

export default Router()
  .use(getAccountsList)
  .use(getAccount);
