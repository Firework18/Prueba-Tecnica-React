import clientAxios from "../components/config/axios"

export const getPokemons = async (cant = '') => {

    const { data } = await clientAxios.get(`/pokemon?limit=${cant}`)
    return data.results
}

export const getPokemonByName = async (name = '') => {
    const { data } = await clientAxios.get(`/pokemon/${name}`)
    return data
}