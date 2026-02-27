import { z } from "zod"

export const postSchema = z.object({
    title: z
        .string()
        .min(3, 'El título debe tener mínimo 3 caracteres'),
    body: z
        .string()
        .min(10, 'El contenido debe tener mínimo 10 caracteres')
})