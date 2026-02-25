import React from 'react'
import { usePokemon } from '../hooks/usePokemon'
import { usePokemons } from '../hooks/usePokemons'

export default function PokemonCard({ pokemon }) {

    const { name } = pokemon

    const { data } = usePokemon(name)


    console.log(data)

    return (
        <>
            <div className="card bg-secondary-content shadow-sm mx-10">
                <figure className="px-5 pt-10">
                    <img
                        src={data?.sprites.front_default}
                        alt={name}
                        className="rounded-xl bg-white" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name.toUpperCase()}</h2>
                    <div className="card-actions">
                        <button className="btn btn-primary">Ver Pokemon</button>
                    </div>
                </div>
            </div>
        </>
    )
}
