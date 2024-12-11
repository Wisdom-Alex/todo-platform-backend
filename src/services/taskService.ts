import { PrismaClient } from '@prisma/client';
import { TaskCreateInput, TaskUpdateInput } from '../types';

const prisma = new PrismaClient();

export const getAllTasks = async () => {
  return prisma.task.findMany({
    orderBy: { createdAt: 'desc' }
  });
};

export const createTask = async (data: TaskCreateInput) => {
  return prisma.task.create({ data });
};

export const updateTask = async (id: string, data: TaskUpdateInput) => {
  return prisma.task.update({
    where: { id },
    data
  });
};

export const deleteTask = async (id: string) => {
  return prisma.task.delete({
    where: { id }
  });
};