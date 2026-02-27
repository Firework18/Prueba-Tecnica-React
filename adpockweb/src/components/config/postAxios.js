import axios from "axios"

const postAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
})

export default postAxios