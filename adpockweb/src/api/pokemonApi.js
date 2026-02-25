import clientAxios from "../components/config/axios"

export const getPokemons = async (query = '') => {

    const { data } = await clientAxios.get(query)
    return data.results
}

export const getPokemonByName = async (name = '') => {
    const { data } = await clientAxios.get(`/pokemon/${name}`)
    return data
}