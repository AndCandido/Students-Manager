import { Router } from 'express';

// Controllers
import { store } from '../controllers/pictureController';

const routes = new Router();

routes.post('/', store);

export default routes;
