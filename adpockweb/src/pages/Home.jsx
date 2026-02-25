import React from 'react'
import Hero from '../sections/Hero'
import TopPokemons from '../sections/TopPokemons'

export default function Home() {

    const titulo = 'Explora el mundo Pokémon'
    const contenido = 'Descubre información esencial de cada Pokémon y comienza tu aventura como entrenador.'
    const boton = 'Ver Pokemones'
    return (
        <div>
            <Hero titulo={titulo} contenido={contenido} boton={boton}></Hero>
            <section className='text-center m-10'>
                <h3 className='badge badge-accent font-extrabold text-2xl p-5'>Tus pokemones pueden evolucionar</h3>
                <TopPokemons />
            </section>

        </div>
    )
}
