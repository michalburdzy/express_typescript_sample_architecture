import { Router } from 'express';

import route from './route';

export default Router()
  .get('/status/healthcheck', route)
  .head('/status/healthcheck', route);
