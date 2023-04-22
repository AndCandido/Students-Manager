import { Router } from 'express';

import { store } from '../controllers/tokenController';

const routes = new Router();

routes.post('/', store);

export default routes;
