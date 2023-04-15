import { Router } from 'express';

import { index } from '../controllers/homeControllers';

const routes = new Router();

routes.get('/', index);

export default routes;
