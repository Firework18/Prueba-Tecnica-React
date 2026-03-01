import { useQuery } from "@tanstack/react-query"
import { getCommentsByPostId } from "../api/commentApi"

export const useComments = (id = '') => {
    return useQuery({
        queryKey: ['comments', id],
        queryFn: () => getCommentsByPostId(id)
    })
}