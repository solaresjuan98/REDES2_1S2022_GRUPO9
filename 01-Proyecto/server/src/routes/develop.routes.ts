/**
 * host + /api/develop
 */
import { Router } from 'express';
import { getDevelop } from '../controllers/develop.controller';

const router = Router();

router.get('/', getDevelop);

export default router;