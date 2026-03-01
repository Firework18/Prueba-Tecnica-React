import axios from "axios";

const commentAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export default commentAxios