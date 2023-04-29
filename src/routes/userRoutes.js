import { Router } from 'express';

// Controllers
import {
  store, update, remove,
} from '../controllers/userController';

// Middlewares
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', store);
router.put('/', loginRequired, update);
router.delete('/', loginRequired, remove);

export default router;
