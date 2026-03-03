import { useQuery } from "@tanstack/react-query"
import { getPokemonByName } from "../../../api/pokemonApi"

export const usePokemon = (name) => {
    return useQuery({
        queryKey: ['Pokemon', name],
        queryFn: () => getPokemonByName(name)
    })
}