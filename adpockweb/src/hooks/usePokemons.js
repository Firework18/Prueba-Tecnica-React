import { useQuery } from "@tanstack/react-query"
import { getPokemons } from "../api/pokemonApi"

export const usePokemons = (query) => {
    return useQuery({
        queryKey: ["Pokemons", query],
        queryFn: () => getPokemons(query),
    })
}