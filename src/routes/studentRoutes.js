import { Router } from 'express';

// Controllers
import {
  index, show, store, update, remove,
} from '../controllers/studentController';

const routes = new Router();

routes.get('/', index);
routes.get('/:id', show);
routes.post('/', store);
routes.put('/:id', update);
routes.delete('/:id', remove);

export default routes;
