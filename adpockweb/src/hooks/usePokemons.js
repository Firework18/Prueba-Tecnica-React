import { useQuery } from "@tanstack/react-query"
import { getPokemons } from "../api/pokemonApi"

export const usePokemons = (cant) => {
    return useQuery({
        queryKey: ["Pokemons", cant],
        queryFn: () => getPokemons(cant),
    })
}