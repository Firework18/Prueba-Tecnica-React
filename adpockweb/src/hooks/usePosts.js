import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../api/postApi"

export const usePosts = () => {
    return useQuery({
        queryKey: ['Posts'],
        queryFn: getPosts,
    })
}