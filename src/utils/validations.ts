import { z } from 'zod';

const taskColors = ['red', 'blue', 'green', 'yellow', 'purple'] as const;

export const TaskCreateSchema = z.object({
  title: z.string().min(1, "Title is required"),
  color: z.enum(taskColors),
  completed: z.boolean().optional().default(false)
});

export const TaskUpdateSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  color: z.enum(taskColors).optional(),
  completed: z.boolean().optional()
});

export const validateTaskCreate = (data: unknown) => {
  try {
    const validatedData = TaskCreateSchema.parse(data);
    return { success: true, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        errors: error.errors.map(err => ({
          path: err.path.join('.'),
          message: err.message
        }))
      };
    }
    throw error;
  }
};

export const validateTaskUpdate = (data: unknown) => {
  try {
    const validatedData = TaskUpdateSchema.parse(data);
    return { success: true, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        errors: error.errors.map(err => ({
          path: err.path.join('.'),
          message: err.message
        }))
      };
    }
    throw error;
  }
};