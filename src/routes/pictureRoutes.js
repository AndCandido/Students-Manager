import { Router } from 'express';
import { store } from '../controllers/pictureController';

const routes = new Router();

routes.post('/', store);

export default routes;
