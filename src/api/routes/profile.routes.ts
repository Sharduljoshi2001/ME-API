import { Router } from 'express';
import { getProfile } from '../controllers/profile.controller';
const router = Router();
///api/v1/profile (get request route to my profile)
router.get('/', getProfile);
export default router;