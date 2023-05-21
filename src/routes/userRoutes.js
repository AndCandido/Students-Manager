import { Router } from 'express';

// Controllers
import {
  store, update, remove,
} from '../controllers/userController';

const router = new Router();

router.post('/', store);
router.put('/', update);
router.delete('/', remove);

export default router;
