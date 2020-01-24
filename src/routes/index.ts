import { Router } from 'express';

const router: Router = Router();

// Auth:
router.use(require('./Auth'));

export default router;
