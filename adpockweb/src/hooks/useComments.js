import { useQuery } from "@tanstack/react-query"
import { getCommentsByPostId } from "../api/commentApi"

export const useComments = (id = '') => {
    return useQuery({
        queryKey: ['comments', id],
        queryFn: async () => {

            const stored = localStorage.getItem(`comments-${id}`)

            if (stored) {
                return JSON.parse(stored)
            }

            const apiComments = await getCommentsByPostId(id)

            localStorage.setItem(
                `comments-${id}`,
                JSON.stringify(apiComments)
            )

            return apiComments
        }
    })
}