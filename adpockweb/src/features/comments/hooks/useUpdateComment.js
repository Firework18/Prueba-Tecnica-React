import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateComment } from '../../../api/commentApi'

export const useUpdateComment = (postId) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async ({ id, body }) => {
            // Si es comentario fake/local, NO llamar API
            if (id > 500) {
                return { id, body }
            }

            // Si es comentario real, llamar API
            return await updateComment(id, body)
        },

        onSuccess: (updatedComment) => {
            // El stored contiene los comentarios del post en local storage 
            const stored = JSON.parse(localStorage.getItem(`comments-${postId}`)) || []
            // Función para actualizar el comentario tanto en localStorage como en cache
            const updateLogic = (comments = []) =>
                comments.map(c =>
                    c.id === updatedComment.id
                        ? { ...c, ...updatedComment }
                        : c
                )

            // Actualizar localStorage
            localStorage.setItem(
                `comments-${postId}`,
                JSON.stringify(updateLogic(stored))
            )

            // Actualizar cache
            queryClient.setQueryData(
                ['comments', postId],
                updateLogic
            )
        }
    })
}