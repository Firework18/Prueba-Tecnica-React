import axios from "axios"

const userAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
})

export default userAxios