import { Router } from 'express';

import {
  index, store, show, update, remove,
} from '../controllers/userControllers';

const router = new Router();

router.get('/', index);
router.get('/:id', show);
router.post('/', store);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
