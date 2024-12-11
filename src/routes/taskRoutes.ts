import { Router } from 'express';
import * as taskController from '../controllers/taskController';

const router = Router();

router.get('/', taskController.getAllTasks);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

export default router;