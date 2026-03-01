import commentAxios from "../components/config/commentAxios"

export const getCommentsByPostId = async (id) => {
    const { data } = await commentAxios.get(`/${id}/comments`)
    return data
}