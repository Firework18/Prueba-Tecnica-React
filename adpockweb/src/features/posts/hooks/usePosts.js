import { useQuery } from "@tanstack/react-query"
import { getPosts } from "../../../api/postApi"

export const usePosts = () => {
    return useQuery({
        queryKey: ['Posts'],
        queryFn: async () => {
            const apiPosts = await getPosts()

            const created =
                JSON.parse(localStorage.getItem('createdPosts')) || []

            return [...created, ...apiPosts]
        }
    })
}