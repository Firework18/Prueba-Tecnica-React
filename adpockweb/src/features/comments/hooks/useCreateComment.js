import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createComment } from '../../../api/commentApi'

export const useCreateComment = (postId) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (body) => createComment(postId, body),

        onMutate: async (newComment) => {
            // Cancelar cualquier consulta en curso para los comentarios de este post
            await queryClient.cancelQueries({ queryKey: ['comments', postId] })

            // Obtener los comentarios actuales de la cache del hook de comentarios
            const previousComments =
                queryClient.getQueryData(['comments', postId]) || []

            // Crear un nuevo comentario con un ID temporal
            const commentToAdd = {
                id: Date.now(),
                postId,
                email: 'local@comment.com',
                ...newComment
            }

            // Actualizar la cache de React Query con el nuevo comentario
            queryClient.setQueryData(['comments', postId], [
                commentToAdd,
                ...previousComments
            ])

            // Guadar el nuevo comentario en el LocalStorage
            const storedComments =
                JSON.parse(localStorage.getItem(`comments-${postId}`)) || []

            // Agregar el nuevo comentario al inicio del nuevo array de comentarios
            localStorage.setItem(
                `comments-${postId}`,
                JSON.stringify([commentToAdd, ...storedComments])
            )

            return { previousComments }
        }
    })
}