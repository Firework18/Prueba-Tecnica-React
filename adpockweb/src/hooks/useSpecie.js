import { useQuery } from "@tanstack/react-query"
import { getSpecieById } from "../api/pokemonApi"

export const useSpecie = (id) => {
    return useQuery({
        queryKey: ['Specie', id],
        queryFn: () => getSpecieById(id)
    })
}