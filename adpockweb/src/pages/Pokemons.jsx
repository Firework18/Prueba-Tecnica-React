import React, { useEffect, useState } from 'react'
import PokemonCard from '../components/card/PokemonCard'
import { usePokemons } from '../hooks/usePokemons'
import Skeleton from '../components/ui/Skeleton'
import Hero from '../sections/Hero'
import ErrorCard from '../components/ui/ErrorCard'
import NotFoundCard from '../components/ui/NotFoundCard'

export default function Pokemons() {

    const [search, setSearch] = useState('')

    const { data, isLoading, error } = usePokemons(20)

    const filtered = data?.filter(pokemon =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
    ) || []

    const titulo = 'Entrenador, tu aventura comienza aquí'
    const contenido = 'Accede a la Pokédex y analiza las estadísticas de tus Pokémon favoritos.'

    return (
        <div>
            <Hero titulo={titulo} contenido={contenido} ></Hero>
            <div className='container mx-auto text-center'>
                <div className='m-10'>

                    <h1 className='my-10'><p className='badge bg-red-600 rounded-sm sm:text-1xl md:text-2xl font-extrabold p-5 text-white'>Nuestros Pokemones</p></h1>
                    {/* Busqueda de Pokemones - Dinámico */}
                    <div className="gap-2 mb-10 flex flex-col justify-center ">
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

                    <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 sm:gap-10 lg:gap-20'>
                        {isLoading && Array.from({ length: 3 }).map((_, index) => (
                            <Skeleton key={index} />
                        ))}
                    </div>


                    {error && (
                        <ErrorCard></ErrorCard>
                    )}


                    {!error && !isLoading && filtered.length === 0 && (
                        <NotFoundCard></NotFoundCard>
                    )}

                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-10 lg:gap-20'>
                        {filtered.map(pokemon => (
                            <PokemonCard pokemon={pokemon} key={pokemon.name} />
                        ))}
                    </div>

                </div>

            </div>
        </div>
    )
}
