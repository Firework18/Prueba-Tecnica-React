import React, { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import { usePokemons } from '../hooks/usePokemons'
import Skeleton from '../components/ui/Skeleton'
import Hero from '../sections/Hero'

export default function Pokemons() {

    const [search, setSearch] = useState('')

    const { data, isLoading, error } = usePokemons('pokemon?limit=20')

    const filtered = data?.filter(pokemon =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    ) || []

    const titulo = 'Entrenador, tu aventura comienza aquí'
    const contenido = 'Accede a la Pokédex y analiza las estadísticas de tus Pokémon favoritos.'

    return (
        <div>
            <Hero titulo={titulo} contenido={contenido} ></Hero>
            <div className='container mx-auto text-center'>
                <div>

                    <h1 className='my-10'><p className='badge bg-red-600 rounded-sm text-4xl font-extrabold p-5 text-white'>Nuestros Pokemones</p></h1>
                    {/* Busqueda de Pokemones - Dinámico */}
                    <div className="join gap-2 mb-10">
                        <div className='self-center'>Introduzca su búsqueda: </div>
                        <div>
                            <label className="input validator join-item">

                                <input type="text" placeholder="Nombre de tu pokemon..." required
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </label>
                            <div className="validator-hint hidden">Ingresa un nombre válido</div>
                        </div>
                    </div>

                    {isLoading && Array.from({ length: 4 }).map((_, index) => (
                        <Skeleton key={index} />
                    ))}

                    {error && (
                        <div>epesre</div>
                    )}


                    {!isLoading && !error && filtered.length === 0 && (
                        <div className='flex justify-center'>
                            No hallado
                        </div>
                    )}


                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-1'>
                        {filtered.map(pokemon => (
                            <PokemonCard pokemon={pokemon} key={pokemon.name} />
                        ))}
                    </div>



                </div>

            </div>
        </div>
    )
}
