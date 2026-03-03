import commentAxios from "../components/config/commentAxios"

export const getCommentsByPostId = async (id) => {
    const { data } = await commentAxios.get(`/posts/${id}/comments`)
    return data
}

export const createComment = async (postId, body) => {
    const { data } = await commentAxios.post(`/posts/${postId}/comments`, { body })
    return data
}

export const updateComment = async (id, body) => {
    const { data } = await commentAxios.put(`/comments/${id}`, { body })
    return data
}

export const deleteComment = async (id) => {
    const { data } = await commentAxios.delete(`/comments/${id}`)
    return data
}