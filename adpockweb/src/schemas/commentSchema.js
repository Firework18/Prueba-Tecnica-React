import { z } from 'zod';

export const commentSchema = z.object({
    message: z.string().min(3, 'El comentario debe tener mínimo 3 caracteres'),
});
