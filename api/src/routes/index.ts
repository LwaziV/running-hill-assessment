import { Router } from 'express';
import { router as typesRouter } from './types.router';

const router = Router();
// ROUTES
router.use('/types', typesRouter);

export default router;
