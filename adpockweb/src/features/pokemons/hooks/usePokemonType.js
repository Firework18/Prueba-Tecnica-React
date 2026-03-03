import { useQuery } from "@tanstack/react-query"
import { getAllTypes } from "../../../api/pokemonApi"

export const usePokemonType = () => {
    return useQuery({
        queryKey: ['Types'],
        queryFn: getAllTypes,
    })
}