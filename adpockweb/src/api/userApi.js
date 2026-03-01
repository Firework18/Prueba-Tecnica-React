import userAxios from "../components/config/userAxios"

export const getUsers = async () => {
    const { data } = await userAxios.get(`/`)
    return data
}

export const getUserById = async (userId) => {
    const { data } = await userAxios.get(`/${userId}`)
    return data
}