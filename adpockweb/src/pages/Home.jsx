import React from 'react'
import Hero from '../sections/Hero'
import TopPokemons from '../sections/TopPokemons'
import TypeCard from '../components/card/TypeCard'
import TypePokemons from '../sections/TypePokemons'

export default function Home() {

    const titulo = 'Explora el mundo Pokémon'
    const contenido = 'Descubre información esencial de cada Pokémon y comienza tu aventura como entrenador.'
    const boton = 'Ver Pokemones'
    return (
        <div>

            <Hero titulo={titulo} contenido={contenido} boton={boton}></Hero>

            {/* Sección Pokemones Evolucionan */}
            <section className='bg-base-300'>
                <div className='container mx-auto'>
                    <div className='text-center mx-10 py-10'>
                        <h3 className='badge badge-accent font-extrabold lg:text-2xl p-5 mb-10'>Tus pokemones pueden evolucionar</h3>
                        <TopPokemons />
                    </div>
                </div>
            </section>

            {/* Sección Explora por Tipo */}
            <section className='bg-info-content'>
                <div className='container mx-auto py-5'>
                    <div className='text-center m-10'>
                        <h3 className='badge badge-secondary font-extrabold lg:text-2xl p-5 mb-10'>Explora por tipo</h3>
                        <TypePokemons />
                    </div>
                </div>
            </section>
        </div>
    )
}
