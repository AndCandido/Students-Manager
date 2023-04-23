import { Router } from 'express';

import { index, store } from '../controllers/studentController';

const routes = new Router();

routes.get('/', index);
routes.post('/', store);

export default routes;
