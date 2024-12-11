import { Request, Response } from 'express';
import * as taskService from '../services/taskService';
import { validateTaskCreate, validateTaskUpdate } from '../utils/validations';
import { handleErrorResponse } from '../utils/errorHandler';

export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

export const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const validationResult = validateTaskCreate(req.body);
    if (!validationResult.success) {
      res.status(400).json({ errors: validationResult.errors });
      return;
    }

    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const validationResult = validateTaskUpdate(req.body);

    if (!validationResult.success) {
      res.status(400).json({ errors: validationResult.errors });
      return;
    }

    const updatedTask = await taskService.updateTask(id, req.body);
    res.json(updatedTask);
  } catch (error) {
    handleErrorResponse(res, error);
  }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await taskService.deleteTask(id);
    res.status(204).send();
  } catch (error) {
    handleErrorResponse(res, error);
  }
};
