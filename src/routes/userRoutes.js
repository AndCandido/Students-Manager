import { Router } from 'express';

// Controllers
import {
  index, store, show, update, remove,
} from '../controllers/userController';

// Middlewares
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, index);
router.get('/:id', show);
router.post('/', store);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
