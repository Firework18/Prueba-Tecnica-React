import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateComment } from '../../../api/commentApi'

export const useUpdateComment = (postId) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ id, body }) => updateComment(id, body),

        onSuccess: (updatedComment) => {
            // Obtener los comentarios almacenados localmente para este post
            const stored =
                JSON.parse(localStorage.getItem(`comments-${postId}`)) || []

            const updatedStored = stored.map(c =>
                c.id === updatedComment.id
                    ? { ...c, ...updatedComment }
                    : c
            )
            // Guardar el array actualizado de comentarios en el LocalStorage
            localStorage.setItem(
                `comments-${postId}`,
                JSON.stringify(updatedStored)
            )

            // Actualizar cache de React Query
            queryClient.setQueryData(['comments', postId], (old = []) =>
                old.map(c =>
                    c.id === updatedComment.id
                        ? { ...c, ...updatedComment }
                        : c
                )
            )
        }
    })
}