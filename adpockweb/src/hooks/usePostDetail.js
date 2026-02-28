import { useQuery } from "@tanstack/react-query"
import { getPostDetail } from "../api/postApi"

export const usePostDetail = (id = '') => {
    return useQuery({
        queryKey: ['postDetail', id],
        queryFn: () => getPostDetail(id)
    })
}