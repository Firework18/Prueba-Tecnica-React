import commentAxios from "../components/config/commentAxios"

export const getCommentsByPostId = async (id) => {
    const { data } = await commentAxios.get(`/posts/${id}/comments`)
    return data
}