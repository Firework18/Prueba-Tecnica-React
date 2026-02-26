import React, { useEffect, useState } from 'react'
import PokemonCard from '../components/card/PokemonCard'
import { usePokemons } from '../hooks/usePokemons'
import Skeleton from '../components/ui/Skeleton'
import Hero from '../sections/Hero'
import ErrorCard from '../components/ui/ErrorCard'
import NotFoundCard from '../components/ui/NotFoundCard'
import Pagination from './pokemonpage/Pagination'

export default function Pokemons() {

    const cantPokeTotal = 100
    const { data, isLoading, error } = usePokemons(cantPokeTotal)

    const pokeData = data ?? []
    const [currentPage, setCurrentPage] = useState(1)
    const [pokePerPage, setPokePerPage] = useState(9)

    const lastPokeIndex = currentPage * pokePerPage
    const firstPokeIndex = lastPokeIndex - pokePerPage

    const currentPoke = pokeData?.slice(firstPokeIndex, lastPokeIndex)
    console.log(currentPoke)



    // Filtro de busqueda
    const [search, setSearch] = useState('')
    const filtered = currentPoke?.filter(pokemon =>
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

                    {/* Paginacion */}
                    <section className='container mx-auto mb-10 max-w-2xl'>
                        <Pagination totalPokes={pokeData?.length} pokePerPage={pokePerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                        <div className='flex flex-col md:flex-row lg:flex-row gap-5 mt-5 place-content-center '>
                            <div className='badge badge-secondary'>Filtrar por</div>
                            <select name="filtrar" id="" value={pokePerPage}
                                onChange={(e) => {
                                    setPokePerPage(Number(e.target.value))
                                    setCurrentPage(1)
                                }}>
                                <option value={10}>10 pokémones</option>
                                <option value={20}>20 pokémones</option>
                                <option value={50}>50 pokémones</option>
                                <option value={100}>100 pokémones</option>
                            </select>
                        </div>
                    </section>

                    {/* Card de carga */}
                    <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 sm:gap-10 lg:gap-20'>
                        {isLoading && Array.from({ length: 3 }).map((_, index) => (
                            <Skeleton key={index} />
                        ))}
                    </div>

                    {/* Card de error */}
                    {error && (
                        <ErrorCard></ErrorCard>
                    )}

                    {/* Card de No encontrado */}
                    {!error && !isLoading && filtered.length === 0 && (
                        <NotFoundCard></NotFoundCard>
                    )}

                    {/* Card de datos cargados */}
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-10 lg:gap-20'>
                        {filtered?.map(pokemon => (
                            <PokemonCard pokemon={pokemon} key={pokemon.name} />
                        ))}
                    </div>

                </div>

                {/* Paginacion */}
                <section className='container mx-auto mb-10 max-w-2xl'>
                    <Pagination totalPokes={pokeData?.length} pokePerPage={pokePerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                    <div className='flex flex-col md:flex-row lg:flex-row gap-5 mt-5 place-content-center '>
                        <div className='badge badge-secondary'>Filtrar por</div>
                        <select name="filtrar" id="" value={pokePerPage}
                            onChange={(e) => {
                                setPokePerPage(Number(e.target.value))
                                setCurrentPage(1)
                            }}>
                            <option value={10}>10 pokémones</option>
                            <option value={20}>20 pokémones</option>
                            <option value={50}>50 pokémones</option>
                            <option value={100}>100 pokémones</option>
                        </select>
                    </div>
                </section>
            </div>
        </div>
    )
}
