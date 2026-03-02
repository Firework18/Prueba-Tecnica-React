import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteComment } from "../api/commentApi"

export const useDeleteComment = (postId) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (id) => deleteComment(id),

        onSuccess: (_, deletedId) => {

            // Actualizar localStorage
            const stored =
                JSON.parse(localStorage.getItem(`comments-${postId}`)) || []
            // Filtrar el comentario eliminado
            const filtered = stored.filter(c => c.id !== deletedId)
            // Guardar el nuevo array de comentarios en el LocalStorage
            localStorage.setItem(
                `comments-${postId}`,
                JSON.stringify(filtered)
            )

            // Actualizar cache
            queryClient.setQueryData(['comments', postId], (old = []) =>
                old.filter(c => c.id !== deletedId)
            )
        }
    })
}