import { Router } from 'express';

import route from './route';

export default Router().get('/accounts', route);
