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
            <TopPokemons />
        </div>
    )
}
