import { Router } from 'express';

import { index } from '../controllers/HomeControllers';

const routes = new Router();

routes.get('/', index);

export default routes;
