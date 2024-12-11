import { z } from 'zod';
import { TaskCreateSchema, TaskUpdateSchema } from '../utils/validations';

export type TaskCreateInput = z.infer<typeof TaskCreateSchema>;
export type TaskUpdateInput = z.infer<typeof TaskUpdateSchema>;