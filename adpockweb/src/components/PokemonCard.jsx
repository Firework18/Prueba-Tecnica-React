import React from 'react'
import { usePokemon } from '../hooks/usePokemon'
import { usePokemons } from '../hooks/usePokemons'

export default function PokemonCard({ pokemon }) {

    const { name } = pokemon

    const { data } = usePokemon(name)

    console.log(data)

    return (
        <>
            <div className="card bg-base-200 shadow-sm mx-10 px-20 my-10 hover:scale-105 transition-all">
                <figure className="px-5 pt-10">
                    <img
                        src={data?.sprites.front_default}
                        alt={name}
                        className="rounded-xl bg-white w-50" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name.toUpperCase()}</h2>

                    <div className='grid grid-cols-2 gap-1'>
                        {data?.types.map(type =>
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
