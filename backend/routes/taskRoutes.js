import express from 'express';
import { getTasks, createTask, deleteTask, updateTask, getUserTasks } from '../controllers/taskController.js'

const router = express.Router();

router.get('/', getTasks);
router.get('/:id', getUserTasks);
router.post('/', createTask);
router.delete('/:id', deleteTask);
router.patch('/:id', updateTask);

export default router;

