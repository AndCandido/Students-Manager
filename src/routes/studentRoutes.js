import { Router } from 'express';

// Controllers
import {
  index, show, store, update, remove,
} from '../controllers/studentController';

// Middlewares
import loginRequired from '../middlewares/loginRequired';

const routes = new Router();

routes.get('/', index);
routes.get('/:id', show);
routes.post('/', loginRequired, store);
routes.put('/:id', loginRequired, update);
routes.delete('/:id', loginRequired, remove);

export default routes;
