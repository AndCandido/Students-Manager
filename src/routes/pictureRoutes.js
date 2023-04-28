import { Router } from 'express';

// Controllers
import { store } from '../controllers/pictureController';

// Middlewares
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

routes.post('/', loginRequired, store);

export default routes;
