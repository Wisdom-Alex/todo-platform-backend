import { Response } from 'express';

export const handleErrorResponse = (res: Response, error: unknown) => {
  if (error instanceof Error) {
    return res.status(500).json({ message: error.message });
  }
  return res.status(500).json({ message: 'An unknown error occurred.' });
};
