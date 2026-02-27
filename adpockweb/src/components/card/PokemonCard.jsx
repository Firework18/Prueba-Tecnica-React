import React from 'react'
import { usePokemon } from '../../hooks/usePokemon'
import { usePokemons } from '../../hooks/usePokemons'
import { usePokemonType } from '../../hooks/usePokemonType'
import { Link } from 'react-router-dom'
import { useSpecie } from '../../hooks/useSpecie'

export default function PokemonCard({ pokemon }) {

    const { name } = pokemon
    const { data: pokemonData } = usePokemon(name)
    const { data: dataSpecie } = useSpecie(pokemonData?.id)
    const color = dataSpecie?.color?.name || ''
    const gradientMap = {
        red: "from-red-200 to-red-700",
        blue: "from-blue-200 to-blue-700",
        green: "from-green-200 to-green-700",
        yellow: "from-yellow-200 to-yellow-600",
        purple: "from-purple-200 to-purple-700",
        pink: "from-pink-200 to-pink-600",
        brown: "from-amber-200 to-amber-800",
        black: "from-gray-200 to-gray-950",
        gray: "from-gray-400 to-gray-600",
        white: "from-gray-200 to-gray-400"
    }

    const gradient = gradientMap[color] || "from-indigo-500 to-indigo-700"
    return (
        <>
            <div className={`card bg-linear-to-br ${gradient} shadow-sm hover:scale-105 transition-all`}>
                <p className='text-white mt-3 badge badge-accent self-center'>ID #{pokemonData?.id}</p>
                <figure className="px-5 pt-10">
                    <img
                        src={pokemonData?.sprites.other['official-artwork'].front_default}
                        alt={name}
                        className="rounded-xl h-50" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name.toUpperCase()}</h2>

                    <div className='grid grid-cols-2 gap-1'>
                        {pokemonData?.types.map(type =>
                            <div className='badge badge-secondary'>{type?.type.name}</div>
                        )}

                    </div>
                    <div className="card-actions">
                        <Link to={`/pokemon/${name}`}><button className="btn btn-primary">Ver Pokemon</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
