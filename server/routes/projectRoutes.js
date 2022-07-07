import { Router } from 'express';
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  showStats,
} from '../controllers/projectController.js';

const router = Router();

router.route('/').get(getProjects).post(createProject);
router.route('/stats').get(showStats);
router.route('/:id').patch(updateProject).delete(deleteProject);

export default router;
