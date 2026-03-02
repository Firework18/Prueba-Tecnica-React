import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createPost } from "../api/postApi"
import { set } from "zod"

export const useCreatePost = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: createPost,

        onSuccess: (newPost) => {
            const postToAdd = {
                id: Date.now(),
                email: 'anonimo@correo.com',
                ...newPost
            }

            // Actualizar React Query con el nuevo post
            queryClient.setQueryData(['Posts'], (old = []) => [
                postToAdd,
                ...old
            ])

            // Guardar solo creados en el LocalStorage para mantenerlos persistentes
            const storedCreated =
                JSON.parse(localStorage.getItem('createdPosts')) || []

            // Agregar el nuevo post al inicio del array de posts creados
            localStorage.setItem(
                'createdPosts',
                JSON.stringify([postToAdd, ...storedCreated])
            )
        },
    })
}