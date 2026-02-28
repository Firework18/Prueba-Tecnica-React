import { useQuery } from "@tanstack/react-query"
import { getPostById } from "../api/postApi"

export const usePost = (postId) => {
    return useQuery({
        queryKey: ['Post', postId],
        queryFn: () => getPostById(postId)
    })
}