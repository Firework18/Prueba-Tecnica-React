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

            const filtered = stored.filter(c => c.id !== deletedId)

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