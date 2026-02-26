import React from 'react'
import PokemonCard from '../components/card/PokemonCard'
import { usePokemons } from '../hooks/usePokemons'
import Skeleton from '../components/ui/Skeleton'
import ErrorCard from '../components/ui/ErrorCard'

export default function TopPokemons() {

    const { data, isLoading, error } = usePokemons(3)

    const topPokemon = data?.slice(0, 3)

    return (
        <div>

            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 sm:gap-10 lg:gap-20'>
                {isLoading && Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton key={index} />
                ))}
            </div>

            {error && (
                <ErrorCard></ErrorCard>
            )}

            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 sm:gap-10 lg:gap-20'>
                {topPokemon?.map(pokemon =>
                    <PokemonCard
                        pokemon={pokemon}
                        key={pokemon.name}
                    />
                )}
            </div>
        </div>
    )
}
