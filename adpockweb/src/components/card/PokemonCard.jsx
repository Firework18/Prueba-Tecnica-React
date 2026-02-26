import React from 'react'
import { usePokemon } from '../../hooks/usePokemon'
import { usePokemons } from '../../hooks/usePokemons'
import { usePokemonType } from '../../hooks/usePokemonType'

export default function PokemonCard({ pokemon }) {

    const { name } = pokemon

    const { data: pokemonData } = usePokemon(name)



    return (
        <>
            <div className="card bg-primary-content shadow-sm hover:scale-105 transition-all">
                <figure className="px-5 pt-10">
                    <img
                        src={pokemonData?.sprites.front_default}
                        alt={name}
                        className="rounded-xl bg-white w-50" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name.toUpperCase()}</h2>

                    <div className='grid grid-cols-2 gap-1'>
                        {pokemonData?.types.map(type =>
                            <div className='badge badge-secondary'>{type?.type.name}</div>
                        )}

                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Ver Pokemon</button>
                    </div>
                </div>
            </div>
        </>
    )
}
