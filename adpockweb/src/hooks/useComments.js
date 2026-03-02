import { useQuery } from "@tanstack/react-query"
import { getCommentsByPostId } from "../api/commentApi"

export const useComments = (id = '') => {
    return useQuery({
        queryKey: ['comments', id],
        queryFn: async () => {

            // Verificar si hay comentarios almacenados en el LocalStorage para este post
            const stored = localStorage.getItem(`comments-${id}`)
            // Si hay comentarios almacenados, devolverlos directamente
            if (stored) {
                return JSON.parse(stored)
            }
            // Si no hay comentarios almacenados, hacer la petición a la API
            const apiComments = await getCommentsByPostId(id)

            // Guardar los comentarios obtenidos de la API en el LocalStorage para futuras consultas
            localStorage.setItem(
                `comments-${id}`,
                JSON.stringify(apiComments)
            )

            // Devolver los comentarios obtenidos de la API
            return apiComments
        }
    })
}