import React from 'react'
import PokemonCard from '../components/PokemonCard'
import { usePokemons } from '../hooks/usePokemons'

export default function TopPokemons() {

    const { data, isLoading, error } = usePokemons('/pokemon?limit=20')

    const topPokemon = data?.slice(0, 3)

    if (isLoading) return <p>Cargando...</p>
    if (error) return <p>Error al cargar</p>

    return (
        <div>
            <div className='grid grid-cols-3'>
                {topPokemon.map(pokemon =>
                    <PokemonCard
                        pokemon={pokemon}
                        key={pokemon.name}
                    />
                )}
            </div>
        </div>
    )
}
