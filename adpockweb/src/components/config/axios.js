import axios from "axios"

const clientAxios = axios.create({
    baseURL: 'https://pokeapi.co/api/v2s'
})

export default clientAxios