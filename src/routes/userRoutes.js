import { Router } from 'express';

import { store } from '../controllers/userControllers';

const routes = new Router();

routes.post('/', store);

export default routes;
