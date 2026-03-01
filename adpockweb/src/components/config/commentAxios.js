import axios from "axios";

const commentAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments'
})

export default commentAxios