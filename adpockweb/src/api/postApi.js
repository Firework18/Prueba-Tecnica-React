import postAxios from "../components/config/postAxios"

export const getPosts = async () => {
    const { data } = await postAxios.get(`/`)
    return data
}

export const createPost = async (newPost) => {
    const { data } = await postAxios.post(`/`, newPost)
    return data
}