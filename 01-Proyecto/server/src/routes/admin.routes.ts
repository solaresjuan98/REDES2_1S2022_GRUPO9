/**
 * host + /api/admin
 */
 import { Router } from 'express';
 import { getAdmins } from '../controllers/admin.controller';
 
 const router = Router();
 
 router.get('/', getAdmins);

 export default router;