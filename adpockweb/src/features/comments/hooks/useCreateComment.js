import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createComment } from '../../../api/commentApi'

export const useCreateComment = (postId) => {
    const queryClient = useQueryClient()

    return useMutation({
        // El mutationFn se encarga de llamar a la API para crear el comentario
        mutationFn: (body) => createComment(postId, body),

        // El onSuccess se ejecuta tanto para comentarios reales (API) como para los fake/local (sin API)
        onSuccess: (newComment) => {
            console.log('Comentario creado:', newComment)
            const commentToAdd = {
                id: Date.now(),
                postId,
                email: 'local@comment.com',
                ...newComment
            }

            // Actualizar cache de React Query para mostrar el nuevo comentario inmediatamente
            queryClient.setQueryData(['comments', postId], (old = []) => [
                commentToAdd,
                ...old
            ])

            // Actualizar localStorage para mantener el nuevo comentario persistente
            const stored =
                JSON.parse(localStorage.getItem(`comments-${postId}`)) || []

            // Agregar el nuevo comentario al inicio del array de comentarios almacenados
            localStorage.setItem(
                `comments-${postId}`,
                JSON.stringify([commentToAdd, ...stored])
            )
        }
    })
}