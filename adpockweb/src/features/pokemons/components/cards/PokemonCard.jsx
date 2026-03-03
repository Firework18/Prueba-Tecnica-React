import React from 'react'
import { usePokemon } from '../../hooks/usePokemon'
import { usePokemons } from '../../hooks/usePokemons'
import { usePokemonType } from '../../hooks/usePokemonType'
import { Link } from 'react-router-dom'
import { useSpecie } from '../../hooks/useSpecie'
import { changeColorCard } from '../../../../helpers/changeColorCard'

export default function PokemonCard({ pokemon }) {

    const { name } = pokemon
    const { data: pokemonData, isLoading: isLoadingPokemon } = usePokemon(name)
    const { data: dataSpecie } = useSpecie(pokemonData?.id)
    const color = dataSpecie?.color?.name || ''

    const gradient = changeColorCard(color)

    return (
        <>
            <div className={`card bg-linear-to-br ${gradient} shadow-sm hover:scale-105 transition-all`}>
                <p className='text-white mt-3 badge badge-accent self-center'>ID #{pokemonData?.id}</p>
                <figure className="px-5 pt-10">
                    {isLoadingPokemon ? (
                        <div className="skeleton h-full w-full"></div>
                    ) : (
                        <img
                            src={pokemonData?.sprites.other['official-artwork'].front_default} alt={name} className="rounded-xl h-50" />
                    )}
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white">{name.toUpperCase()}</h2>

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
