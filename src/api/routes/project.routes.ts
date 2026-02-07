import { Router } from 'express';
import { getProjects } from '../controllers/project.controller';
const router = Router();
///api/v1/projects?skill=React (get req route)
router.get('/', getProjects);
export default router;